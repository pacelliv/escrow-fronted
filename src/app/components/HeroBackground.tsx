import Image from "next/image"
import cryptoWallet from "../../../public/bg.svg"

const HeroBackground = () => {
    return (
        <Image
            alt="crypto wallet"
            src={cryptoWallet}
            quality={100}
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "4px",
            }}
        />
    )
}

export default HeroBackground
