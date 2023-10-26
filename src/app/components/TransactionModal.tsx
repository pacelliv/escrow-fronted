"use client"

import { ImCheckmark } from "react-icons/im"
import { FaTimes } from "react-icons/fa"
import { ModalContainer } from "@/app/components/styles/TransactionModal.styled"
import Link from "next/link"

type Params = {
    params: {
        closeModal: () => void
        isConfirmed: boolean
        txHash: `0x${string}` | undefined
        chainId: number | undefined
        type: string | undefined
        newEscrow: `0x${string}` | undefined
        confirmationMessage: string
        showButton: boolean
        timestamp: number | undefined
        duration: bigint | undefined
    }
}

const TransactionModal = ({
    params: {
        txHash,
        isConfirmed,
        closeModal,
        chainId,
        newEscrow,
        confirmationMessage,
        showButton,
        timestamp,
        duration,
    },
}: Params) => {
    return (
        <ModalContainer>
            <FaTimes onClick={closeModal} className="close-modal" />
            <div className="loader-container">
                <div className="loader">
                    <div className="icon-container">
                        <ImCheckmark className="icon" />
                    </div>
                    <div className="bar"></div>
                    <div className="icon-container">
                        {isConfirmed ? (
                            <ImCheckmark className="icon" />
                        ) : (
                            <div className="spinner"></div>
                        )}
                    </div>
                </div>
                <div className="text-container">
                    <p>Deploying contract</p>
                    <p className="align-right">
                        {isConfirmed ? `${confirmationMessage}` : "Waiting confirmations"}
                    </p>
                </div>
                <h1>
                    {isConfirmed
                        ? "Transaction confirmed"
                        : "Waiting for transaction confirmation..."}
                </h1>
                <div className="transaction">
                    <div className="hash-container">
                        <p>Transaction Hash</p>
                        <a
                            className="hash-link"
                            href={`${
                                String(chainId) === "80001"
                                    ? `https://mumbai.polygonscan.com/tx/${txHash}`
                                    : `https://sepolia.etherscan.io/tx/${txHash}`
                            }`}
                            target="_blank"
                        >
                            {txHash}
                        </a>
                    </div>
                </div>
                {showButton && (
                    <Link
                        href={`/erc20-escrow/${newEscrow}?timestamp=${timestamp}&duration=${duration?.toString(
                            10,
                        )}`}
                        className="add-token"
                    >
                        See escrow
                    </Link>
                )}
            </div>
        </ModalContainer>
    )
}

export default TransactionModal
