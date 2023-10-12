import Image from "next/image"
import background from "../../../public/bg.svg"

const Background = () => {
    return (
        <Image
            alt="background image"
            src={background}
            quality={100}
            fill
            sizes="100vw"
            style={{
                objectFit: "cover",
                zIndex: -1,
            }}
        />
    )
}

export default Background
