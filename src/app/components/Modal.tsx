"use client"

import { FaTimes } from "react-icons/fa"
import { Container } from "./styles/Modal.styled"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState, useEffect, BaseSyntheticEvent } from "react"
import { ERC20_ESCROW_ABI } from "@/utils/constants/ERC20_ESCROW_ABI"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import { notifyWait, notifySuccess } from "@/utils/notifications"

interface ModalParams {
    params: {
        address: `0x${string}`,
        handleClick: () => void
    }
}

interface IFormInput {
    refundFromForm: string
}

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

export default Modal