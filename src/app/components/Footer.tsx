import { FaTwitter, FaGithub, FaHeart } from "react-icons/fa"
import { Div } from "./styles/Footer.styled"

const Footer = () => {
    return (
        <Div>
            <a href="#">
                <FaTwitter />
            </a>
            <a href="#">
                <FaGithub />
            </a>
            <p>
                Made with <FaHeart style={{ color: "red" }} /> by Pacelli
            </p>
        </Div>
    )
}

export default Footer
