import Image from "next/image"
import backgroundImage from "../../../public/bg.svg"

const HeroBackground = () => {
    return (
        <Image
            alt="background image"
            src={backgroundImage}
            quality={100}
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "4px",
            }}
            priority={true}
        />
    )
}

export default HeroBackground
