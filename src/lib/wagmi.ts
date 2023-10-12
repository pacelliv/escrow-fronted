import { w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { configureChains, createConfig, Chain } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { sepolia } from "wagmi/chains"

export const localhost = {
    id: 31_337,
    name: "Localhost",
    network: "localhost",
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
    },
    rpcUrls: {
        public: { http: ["http://127.0.0.1:8545/"] },
        default: { http: ["http://127.0.0.1:8545/"] },
    },
} as const satisfies Chain

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ""
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ""
const chains = [sepolia, localhost]

if (!projectId || !apiKey) {
    throw new Error("You need to provide keys to the project")
}

const { publicClient, webSocketPublicClient } = configureChains(chains, [
    alchemyProvider({ apiKey }),
    w3mProvider({ projectId }),
])

const config = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ chains, projectId }),
    publicClient,
    webSocketPublicClient,
})

export { chains, projectId, config }
