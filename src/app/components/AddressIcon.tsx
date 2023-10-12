import { blo } from "blo"
import ethereumLogo from "../../../public/ethereum-eth-logo.svg"
import Image from "next/image"

type Params = {
    params: {
        address: `0x${string}` | undefined
        isConnected: boolean
    }
}

const AddressIcon = ({ params: { address, isConnected } }: Params) => {
    return (
        <Image
            alt="Ethereum logo, identicon"
            src={isConnected && address ? blo(`0x${address?.slice(-40)}`) : ethereumLogo}
            width={45}
            height={45}
        />
    )
}

export default AddressIcon
