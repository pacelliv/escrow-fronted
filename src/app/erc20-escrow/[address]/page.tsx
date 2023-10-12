"use client"

import { FaTimes } from "react-icons/fa"
import { EscrowInfoStyled, Data } from "../../components/styles/EscrowInfo.styled"
import { useContractReads, useContractRead, useContractWrite, useWaitForTransaction, usePrepareContractWrite } from "wagmi"
import { ERC20_ABI } from "@/utils/constants/ERC20_ABI"
import { ERC20_ESCROW_ABI } from "@/utils/constants/ERC20_ESCROW_ABI"
import { useAccount } from "wagmi"
import { Wrapper } from "@/app/components/styles/Section.styled"
import { Section, Panel, ReturnButton } from "@/app/components/styles/Section.styled"
import { BsArrowReturnLeft } from "react-icons/bs"
import { BiHomeAlt2 } from "react-icons/bi"
import { ethers, BigNumberish } from "ethers"
import { useState, BaseSyntheticEvent, useEffect } from "react"
import { Container } from "@/app/components/styles/Modal.styled"
import { useForm, SubmitHandler } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import ModalBackdrop from "@/app/components/ModalBackdrop"
import ButtonContainer from "@/app/components/ButtonContainer"
import CountdownTimer from "@/app/components/CountdownTimer"
import Image from "next/image"
import background from "../../../../public/bg.svg"
import Link from "next/link"

interface Params {
    params: {
        address: `0x${string}`
    }
}

interface ModalParams {
    params: {
        address: `0x${string}`,
        handleClick: () => void
    }
}

interface IFormInput {
    refundFromForm: string
}

enum State {
    CREATED,
    CONFIRMED,
    DISPUTED,
    RESOLVED,
}

const notifyWait = (message: string) =>
    toast.loading(message, { position: "top-right", duration: 5000 })
const notifySuccess = (message: string) =>
    toast.success(message, { position: "top-right", duration: 5000 })

const Modal = ({params: { address, handleClick } }: ModalParams) => {
    const { register, handleSubmit } = useForm<IFormInput>()
    const [refund, setRefund] = useState<string>("")

    const onSubmit: SubmitHandler<IFormInput> = (
        { refundFromForm },
        event: BaseSyntheticEvent<object, any, any> | undefined,
    ) => {
        event?.preventDefault()
        setRefund(refundFromForm)
    }

    const { config } = usePrepareContractWrite({
        address,
        abi: ERC20_ESCROW_ABI,
        functionName: "resolveDispute",
        args: [BigInt(refund)]
    })

    const { data, writeAsync } = useContractWrite({
        ...config,
        onSuccess() {
            notifyWait("Processing transaction")
        }
    })

    useEffect(() => {
        const handleAsyncOperation = async() => {
            try {
                await writeAsync?.()
            } catch (error) {
                console.error(error)
            }
        }

        if(refund) {
            handleAsyncOperation()
        }
    }, [refund])

    useWaitForTransaction({
        hash: data?.hash,
        confirmations: 1,
        onSuccess() {
            notifySuccess("Dispute resolved")
            handleClick()
        }
    })

    return (
        <Container>
            <div>
                <FaTimes onClick={handleClick} />
            </div>
            <p>
                Insert amount to refund to the buyer, the remaining will go to the seller.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>* Amount</label>
                <input
                    type="text"
                    {...register("refundFromForm", {
                        required: true,
                        maxLength: 3,
                    })}
                />
                <input type="submit" value="Resolve Dispute" />
            </form>
        </Container>
    )
}

const Loading = () => {
    return <h2>🌀 Loading...</h2>
}

const Escrow = ({ params: { address } }: Params) => {
    const { address: account } = useAccount()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClick = () => setIsOpen(!isOpen)

    const erc20EscrowContract = {
        address,
        abi: ERC20_ESCROW_ABI,
    }

    const { data, isLoading } = useContractReads({
        contracts: [
            {
                ...erc20EscrowContract,
                functionName: "getDuration",
            },
            {
                ...erc20EscrowContract,
                functionName: "getGrantor",
            },
            {
                ...erc20EscrowContract,
                functionName: "getGrantee",
            },
            {
                ...erc20EscrowContract,
                functionName: "getArbiter",
            },
            {
                ...erc20EscrowContract,
                functionName: "getToken",
            },
            {
                ...erc20EscrowContract,
                functionName: "getArbiterFee",
            },
            {
                ...erc20EscrowContract,
                functionName: "getPayment",
            },
            {
                ...erc20EscrowContract,
                functionName: "getState",
            },
            {
                ...erc20EscrowContract,
                functionName: "getBalance",
            },
        ],
    })

    const { data: symbol } = useContractRead({
        abi: ERC20_ABI,
        address: data?.[4]?.result as `0x${string}`,
        functionName: "symbol",
    })

    const getRole = (): string => {
        if (account === data?.[1]?.result) return "Buyer"
        else if (account === data?.[2]?.result) return "Seller"
        else if (account === data?.[3]?.result) return "Arbiter"
        else return ""
    }

    const getEscrowState = (): string => {
        if (data?.[7]?.result === State.CREATED) return "Awaiting confirmation"
        else if (data?.[7]?.result === State.CONFIRMED) return "Confirmed"
        else if (data?.[7]?.result === State.DISPUTED) return "In a dispute"
        else if (data?.[7]?.result === State.RESOLVED) return "Resolved"
        else return ""
    }

    const getFee = (): number => {
        const arbiterFee = Number(data?.[5]?.result)
        const payment = Number(ethers.formatUnits(data?.[6]?.result as bigint, "ether"))
        return (payment * arbiterFee) / 100
    }

    return (
        <Wrapper>
            {isOpen && <ModalBackdrop />}
            {isOpen && <Modal params={{ address, handleClick }}/>}
            <Toaster />
            <Image
                alt="background image"
                src={background}
                quality={100}
                fill
                priority
                style={{
                    objectFit: "cover",
                    zIndex: -1,
                    opacity: 0.4,
                }}
            />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <EscrowInfoStyled>
                        <Data>
                            <p>Escrow:</p>
                            <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                                &#x2014; {address}
                            </p>
                        </Data>
                        <Data>
                            <p>State:</p>
                            <p>
                                &#x2014;{" "}
                                <span style={{ color: "#f90000", fontWeight: "600" }}>
                                    {getEscrowState()}
                                </span>
                            </p>
                        </Data>
                        <Data>
                            <p>Role:</p>
                            <p>
                                &#x2014;{" "}
                                <span style={{ color: "#00c04b", fontWeight: "600" }}>
                                    {getRole()}
                                </span>
                            </p>
                        </Data>
                        <Data>
                            <p>Buyer:</p>
                            <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                                &#x2014; {data?.[1]?.result}
                            </p>
                        </Data>
                        <Data>
                            <p>Seller:</p>
                            <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                                &#x2014; {data?.[2]?.result}
                            </p>
                        </Data>
                        <Data>
                            <p>Arbiter:</p>
                            <p style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                                &#x2014; {data?.[3]?.result}
                            </p>
                        </Data>
                        <Data>
                            <p>Payment:</p>
                            <p>
                                &#x2014;{" "}
                                {ethers.formatUnits(data?.[6]?.result as BigNumberish, "ether")}{" "}
                                {symbol}
                            </p>
                        </Data>
                        <Data>
                            <p>Arbiter fee:</p>
                            <p>
                                &#x2014; {getFee()} {symbol}
                            </p>
                        </Data>
                    </EscrowInfoStyled>
                    <Section>
                        <Panel>
                            <ReturnButton>
                                <span>
                                    <BsArrowReturnLeft />
                                </span>
                                <Link href="/">
                                    <BiHomeAlt2 />
                                </Link>
                            </ReturnButton>
                            <CountdownTimer params={{ state: data?.[7]?.result }} />
                            <ButtonContainer params={{ address, notifySuccess, notifyWait, handleClick }} />
                        </Panel>
                    </Section>
                </>
            )}
        </Wrapper>
    )
}

export default Escrow
