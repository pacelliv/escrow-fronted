"use client"

import { ethers } from "ethers"
import {
    EscrowsContainer,
    Container,
    Card,
    TopCard,
    MiddleCard,
    BottomCard,
} from "./styles/EscrowsContainer"
import { getDate } from "@/utils/time"
import { useContractRead } from "wagmi"
import { ERC20_ABI } from "@/utils/constants/ERC20_ABI"
import { ERC20_ESCROW_ABI } from "@/utils/constants/ERC20_ESCROW_ABI"
import ethereumLogo from "../../../public/ethereum-eth-logo.svg"
import Image from "next/image"
import Link from "next/link"

type Params = {
    params: {
        data: EscrowData
    }
}

type Address = {
    params: {
        address: `0x${string}`
    }
}

enum State {
    CREATED,
    CONFIRMED,
    DISPUTED,
    RESOLVED,
}

const TokenSymbol = ({ params: { address } }: Address): string => {
    const { data } = useContractRead({
        abi: ERC20_ABI,
        address: address,
        functionName: "symbol",
    })

    return data as string
}

const EscrowState = ({ params: { address } }: Address): string => {
    const { data } = useContractRead({
        abi: ERC20_ESCROW_ABI,
        address: address,
        functionName: "getState",
    })

    return data === State.CREATED
        ? "Live"
        : data === State.CONFIRMED
        ? "Confirmed"
        : data === State.DISPUTED
        ? "Disputed"
        : data === State.RESOLVED
        ? "Resolved"
        : ""
}

const Escrows = ({ params: { data } }: Params) => {
    return (
        <EscrowsContainer>
            <Container>
                {data.newERC20Escrows.slice(0, 4).map((event) => (
                    <Card key={event.id}>
                        <TopCard>
                            <div>
                                <p>
                                    <EscrowState
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
                                <TokenSymbol params={{ address: event.token as `0x${string}` }} />
                            </p>
                            <p>Arbiter fee: {event.arbiterFee}%</p>
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
            </Container>
            <Container>
                {data.newERC20Escrows.slice(5, 9).map((event) => (
                    <Card key={event.id}>
                        <TopCard>
                            <div>
                                <p>
                                    <EscrowState
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
                                <TokenSymbol params={{ address: event.token as `0x${string}` }} />
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
            </Container>
        </EscrowsContainer>
    )
}

export default Escrows
