"use client"

import { useState, BaseSyntheticEvent, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Wrapper, Container, Form } from "@/app/components/styles/CreateERC20Escrow.styled"
import { ESCROW_FACTORY_ABI } from "@/utils/constants/ESCROW_FACTORY_ABI"
import { ERC20_ABI } from "@/utils/constants/ERC20_ABI"
import {
    useContractWrite,
    usePrepareContractWrite,
    useNetwork,
    useWaitForTransaction,
    useContractEvent,
} from "wagmi"
import { ESCROW_FACTORY_ADDRESSES as escrows } from "@/utils/constants/ESCROW_FACTORY_ADDRESSES"
import { parseEther, AbiCoder, ethers } from "ethers"
import { verifyContract } from "@/lib/verify_contract"
import ModalBackdrop from "@/app/components/ModalBackdrop"
import TransactionModal from "@/app/components/TransactionModal"

interface IFormInput {
    formGrantee: string
    formArbiter: string
    formArbiterFee: string
    formPayment: string
    formToken: string
    formDuration: string
}

const CreateERC20Escrow = (props: any) => {
    const erc20EscrowFlattened = props.params.erc20EscrowSourceCode
    const { chain } = useNetwork()
    const chainId = chain?.id
    const { register, handleSubmit } = useForm<IFormInput>()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false)
    const [grantee, setGrantee] = useState<`0x${string}`>()
    const [arbiter, setArbiter] = useState<`0x${string}`>()
    const [token, setToken] = useState<`0x${string}` | undefined>(undefined)
    const [arbiterFee, setArbiterFee] = useState<bigint>()
    const [payment, setPayment] = useState<bigint | undefined>(undefined)
    const [salt, setSalt] = useState<string>()
    const [duration, setDuration] = useState<bigint>()
    const [txHash, setTxHash] = useState<`0x${string}`>()
    const [newEscrow, setNewEscrow] = useState<`0x${string}`>()
    const [type, setType] = useState<string>()
    const [timestamp, setTimestamp] = useState<number>()
    const closeModal = (): void => setIsOpen(!isOpen)

    const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL)

    const factoryAddress = escrows.find((escrow) => escrow.chainId === chainId)?.contract as
        | `0x${string}`
        | undefined

    //------------------------------- APPROVAL LOGIC -------------------------------//

    const { config: configToken } = usePrepareContractWrite({
        address: token,
        abi: ERC20_ABI,
        functionName: "approve",
        args: [factoryAddress as `0x${string}`, payment as bigint],
    })

    const { data: dataToken, writeAsync: writeToken } = useContractWrite({ ...configToken })

    //------------------------------- CREATION LOGIC -------------------------------//

    const { config: configFactory } = usePrepareContractWrite({
        address: factoryAddress,
        abi: ESCROW_FACTORY_ABI,
        functionName: "createERC20Escrow",
        args: [
            grantee as `0x${string}`,
            arbiter as `0x${string}`,
            token as `0x${string}`,
            arbiterFee as bigint,
            payment as bigint,
            salt as `0x${string}`,
            duration as bigint,
        ],
    })

    const { data: dataFactory, writeAsync: writeFactory } = useContractWrite({
        ...configFactory,
        onSuccess(data) {
            setTxHash(data.hash)
            setIsOpen(true)
        },
    })

    const unwatch = useContractEvent({
        address: factoryAddress,
        abi: ESCROW_FACTORY_ABI,
        eventName: "NewERC20Escrow",
        async listener(log) {
            if (log[0].args.escrow === "0x...") unwatch?.()
            setNewEscrow(log[0].args.escrow)
            const abiCoder = AbiCoder.defaultAbiCoder()
            const encodedConstructorArgs = abiCoder.encode(
                ["uint256", "address", "address", "address", "address", "uint256", "uint256"],
                [
                    log[0].args.duration,
                    log[0].args.grantor,
                    log[0].args.grantee,
                    log[0].args.arbiter,
                    log[0].args.token,
                    log[0].args.arbiterFee,
                    log[0].args.payment,
                ],
            )
            await verifyContract(
                log[0].args.escrow as string,
                encodedConstructorArgs.slice(2),
                "ERC20Escrow",
                erc20EscrowFlattened,
            )
        },
    })

    const parseDuration = (str: string): number => {
        if (str === "three_days") return 86400 * 3 // num of seconds in 3 days
        else if (str == "seven_days") return 86400 * 7 // num of seconds in 7 days
        else if (str === "fifteen_days") return 86400 * 15 // num of seconds in 15 days
        else if (str == "thirty_days") return 86400 * 30 // num of seconds in 30 days
        else return 86400 * 45 // num of seconds in 45 days
    }

    const onSubmit: SubmitHandler<IFormInput> = async (
        { formGrantee, formArbiter, formToken, formArbiterFee, formPayment, formDuration },
        event: BaseSyntheticEvent<object, any, any> | undefined,
    ) => {
        event?.preventDefault()
        const uintArray = new Uint8Array(32)
        window.crypto.getRandomValues(uintArray)
        const computedSalt =
            "0x" +
            Array.from(uintArray)
                .map((el) => el.toString(16).padStart(2, "0"))
                .join("")

        try {
            setSalt(computedSalt)
            setToken(formToken as `0x${string}`)
            setPayment(parseEther(formPayment))
            setGrantee(formGrantee as `0x${string}`)
            setArbiter(formArbiter as `0x${string}`)
            setArbiterFee(BigInt(formArbiterFee) as bigint)
            setDuration(BigInt(parseDuration(formDuration).toString()) as bigint)
            setType("erc20-escrow")
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const handleAsyncOperation = async () => {
            try {
                await writeToken?.()
            } catch (error) {
                console.error(error)
            }
        }

        if (token && payment) {
            handleAsyncOperation()
        }
    }, [grantee, arbiter, arbiterFee, duration, token, payment, salt, type])

    useWaitForTransaction({
        hash: dataToken?.hash,
        confirmations: 1,
        onSuccess() {
            async function delay(ms: number): Promise<unknown> {
                return new Promise((resolve) => setTimeout(resolve, ms))
            }

            async function createEscrow(): Promise<void> {
                await delay(5000)
                await writeFactory?.()
            }

            createEscrow().catch((e) => console.error(e))
        },
    })

    useWaitForTransaction({
        hash: dataFactory?.hash,
        confirmations: 1,
        async onSuccess(data) {
            const txReceipt = await provider.getTransactionReceipt(data?.transactionHash)
            const txTimestamp = (await txReceipt?.getBlock())?.timestamp
            setTimestamp(txTimestamp)
            setIsConfirmed(true)
        },
    })

    return (
        <Wrapper>
            {isOpen && <ModalBackdrop />}
            {isOpen && (
                <TransactionModal
                    params={{
                        closeModal,
                        isConfirmed,
                        txHash,
                        chainId,
                        type,
                        newEscrow,
                        confirmationMessage: "Contract deployed",
                        showButton: true,
                        timestamp,
                        duration,
                    }}
                />
            )}
            <Container>
                <h2>Registration Form</h2>
                <p>
                    Fill the form with and then click on the submit button to create a new ERC20
                    Escrow contract.
                </p>
                <small>* Indicates a required field.</small>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label>* Seller</label>
                    <input
                        type="text"
                        {...register("formGrantee", {
                            required: true,
                            maxLength: 42,
                            pattern: /[0-9A-Fa-f]{6}/g,
                        })}
                    />
                    <label>* Arbiter</label>
                    <input
                        type="text"
                        {...register("formArbiter", {
                            required: true,
                            maxLength: 42,
                            pattern: /[0-9A-Fa-f]{6}/g,
                        })}
                    />
                    <label>* Payment</label>
                    <input type="text" {...register("formPayment", { required: true })} />
                    <label>* Arbiter fee</label>
                    <input
                        type="text"
                        inputMode="numeric"
                        {...register("formArbiterFee", { required: true })}
                    />
                    <label>* Token:</label>
                    <input
                        type="text"
                        {...register("formToken", {
                            required: true,
                            maxLength: 42,
                            pattern: /[0-9A-Fa-f]{6}/g,
                        })}
                    />
                    <label>* Select duration</label>
                    <select {...register("formDuration", { required: true })}>
                        <option value="three_days">3 Days</option>
                        <option value="seven_days">7 Days</option>
                        <option value="fifteen_days">15 Days</option>
                        <option value="thirty_days">30 Days</option>
                        <option value="forty_five_days">45 Days</option>
                    </select>
                    <input type="submit" value="Create Escrow" />
                </Form>
            </Container>
        </Wrapper>
    )
}

export default CreateERC20Escrow
