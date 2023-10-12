"use client"

import * as React from "react"
import { EthereumClient } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { WagmiConfig } from "wagmi"
import { chains, config, projectId } from "./wagmi"
import { sepolia } from "wagmi"

type WagmiProviderType = {
    children: React.ReactNode
}

const ethereumClient = new EthereumClient(config, chains)

export const Providers = ({ children }: WagmiProviderType) => {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])

    return (
        <WagmiConfig config={config}>
            {mounted && children}
            <Web3Modal
                defaultChain={sepolia}
                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </WagmiConfig>
    )
}
