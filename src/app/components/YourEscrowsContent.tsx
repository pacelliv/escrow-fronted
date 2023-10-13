"use client"

import { Card, TopCard, MiddleCard, BottomCard } from "./styles/EscrowsContainer"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount } from "wagmi"
import { Wrapper } from "@/app/components/styles/YourEscrows.styled"
import { ethers } from "ethers"
import { getDate } from "@/utils/time"
import { GetEscrowState } from "@/lib/GetEscrowState"
import { GetTokenSymbol } from "@/lib/GetTokenSymbol"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ethereumLogo from "../../../public/ethereum-eth-logo.svg"

type Params = {
    params: {
        data: EscrowData
    }
}

const YourEscrowsContent = ({ params: { data } }: Params) => {
    const router = useRouter()
    const { open, isOpen } = useWeb3Modal()
    const { address: account, isConnecting, isConnected } = useAccount()
    const erc20Escrows = data.newERC20Escrows.filter(
        (escrow) =>
            escrow.grantor == account?.toLowerCase() ||
            escrow.grantee == account?.toLowerCase() ||
            escrow.arbiter == account?.toLowerCase(),
    )

    const nativeEscrows = data.newNativeEscrows.filter(
        (escrow) =>
            escrow.grantor == account || escrow.grantee == account || escrow.arbiter == account,
    )
    const escrows = [...erc20Escrows, ...nativeEscrows]

    return (
        <Wrapper isConnected={isConnected}>
            {!isConnected ? (
                <>
                    <h2>Connect your wallet to continue</h2>
                    <button disabled={isOpen || isConnecting} onClick={async () => await open()}>
                        Connect Wallet
                    </button>
                </>
            ) : isConnected && escrows.length > 0 ? (
                <>
                    {escrows.map((event) => (
                        <Card key={event.id} style={{ textAlign: "center" }}>
                            <TopCard>
                                <div>
                                    <p>
                                        <GetEscrowState
                                            params={{ address: event.escrow as `0x${string}` }}
                                        />
                                    </p>
                                    {/* <span></span> */}
                                </div>
                                <div>
                                    <p>ERC20 Escrow</p>
                                </div>
                            </TopCard>
                            <Image
                                alt="ethereum logo"
                                src={ethereumLogo}
                                width={55}
                                height={55}
                                style={{
                                    marginTop: "2em",
                                    backgroundColor: "#ccc",
                                    padding: "0.5em",
                                    borderRadius: "50%",
                                }}
                            />
                            <MiddleCard>
                                <p>
                                    Payment: {ethers.formatUnits(event.payment, "ether")}{" "}
                                    <GetTokenSymbol
                                        params={{ address: event.token as `0x${string}` }}
                                    />
                                </p>
                                <p>Arbiter fee: {event.arbiterFee} %</p>
                                <p>Creation date: {getDate(event.blockTimestamp).slice(0, 11)}</p>
                            </MiddleCard>
                            <BottomCard>
                                <Link
                                    href={{
                                        pathname: `/erc20-escrow/${event.escrow}`,
                                        query: {
                                            timestamp: `${event.blockTimestamp}`,
                                            duration: `${event.duration}`,
                                        },
                                    }}
                                >
                                    View escrow
                                </Link>
                            </BottomCard>
                        </Card>
                    ))}
                </>
            ) : (
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h2>You have no escrows</h2>
                    <button onClick={() => router.push("/create-escrow/")}>Create Escrow</button>
                </div>
            )}
        </Wrapper>
    )
}

export default YourEscrowsContent
