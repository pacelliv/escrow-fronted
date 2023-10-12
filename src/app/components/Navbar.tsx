"use client"

import Link from "next/link"
import AddressIcon from "./AddressIcon"
import { useWeb3Modal } from "@web3modal/react"
import { StyledNavbar } from "./styles/Navbar.styled"
import { RiExchangeFundsFill } from "react-icons/ri"
import { Archivo_Black } from "next/font/google"
import { useAccount, useDisconnect } from "wagmi"

const archivo_black = Archivo_Black({ weight: "400", subsets: ["latin"] })

const Navbar = () => {
    const { open } = useWeb3Modal()
    const { address, isConnected } = useAccount()
    const { disconnect } = useDisconnect()

    const buttonMessage = () => {
        if (isConnected && address) {
            return address.slice(0, 6) + "..." + address.slice(-4)
        }
        return "Connect"
    }

    const handleClick = async () => {
        if (isConnected) {
            disconnect()
        }
        await open()
    }

    return (
        <StyledNavbar>
            <RiExchangeFundsFill className="logo" />
            <Link href="/" className={archivo_black.className}>
                settle
            </Link>
            <AddressIcon params={{ address, isConnected }} />
            <button onClick={handleClick}>{buttonMessage()}</button>
        </StyledNavbar>
    )
}

export default Navbar
