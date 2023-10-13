"use client"

import {
    useAccount,
    useContractReads,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
} from "wagmi"
import { ButtonContainer as Container } from "./styles/Section.styled"
import { ERC20_ESCROW_ABI } from "@/utils/constants/ERC20_ESCROW_ABI"
import { useState, useEffect } from "react"

type Params = {
    params: {
        address: `0x${string}`
        notifySuccess: (message: string) => string
        notifyWait: (message: string) => string
        handleClick: () => void
    }
}

const ButtonContainer = ({ params: { address, notifySuccess, notifyWait, handleClick }}: Params) => {
    const { address: account } = useAccount()
    const [args, setArgs] = useState<readonly [bigint] | undefined>(undefined)
    const [functionName, setFunctionName] = useState<
        "confirmReceipt" | "resolveDispute" | "startDispute" | "withdraw" | undefined
    >(undefined)
    const [message, setMessage] = useState<string>("")

    const erc20EscrowContract = {
        address,
        abi: ERC20_ESCROW_ABI,
    }

    const { config } = usePrepareContractWrite({
        address,
        abi: ERC20_ESCROW_ABI,
        functionName,
        args,
    })

    const { data: txResponse, writeAsync: writeEscrow } = useContractWrite({
        ...config,
        onSuccess() {
            notifyWait("Processing transaction")
        },
    })

    const { data } = useContractReads({
        contracts: [
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
        ],
    })

    useEffect(() => {
        const handleAsyncOperation = async () => {
            try {
                await writeEscrow?.()
            } catch (error) {
                console.error(error)
            }
        }

        if (functionName && message) {
            handleAsyncOperation()
        }
    }, [args, functionName, message])

    useWaitForTransaction({
        hash: txResponse?.hash,
        confirmations: 1,
        onSuccess() {
            notifySuccess(message)
        },
    })

    return (
        <Container>
            {account === data?.[0]?.result && data?.[0]?.result != undefined && (
                <>
                    <button
                        onClick={() => {
                            setFunctionName("confirmReceipt")
                            setArgs(undefined)
                            setMessage("Receipt confirmed")
                        }}
                    >
                        Confirm Receipt
                    </button>
                    <button
                        onClick={() => {
                            setFunctionName("startDispute")
                            setArgs(undefined)
                            setMessage("Dispute started")
                        }}
                    >
                        Start Dispute
                    </button>
                    <button
                        onClick={() => {
                            setFunctionName("withdraw")
                            setArgs(undefined)
                            setMessage("Funds withdrawn")
                        }}
                    >
                        Withdraw Funds
                    </button>
                </>
            )}
            {account === data?.[1]?.result && data?.[0]?.result != undefined && (
                <>
                    <button
                        onClick={() => {
                            setFunctionName("startDispute")
                            setArgs(undefined)
                            setMessage("Dispute started")
                        }}
                    >
                        Start Dispute
                    </button>
                </>
            )}
            {account === data?.[2]?.result && data?.[0]?.result != undefined && (
                <>
                    <button
                        onClick={() => {
                            handleClick()
                        }}
                    >
                        Resolve Dispute
                    </button>
                </>
            )}
        </Container>
    )
}

export default ButtonContainer
