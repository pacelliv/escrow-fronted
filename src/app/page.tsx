import { getClient } from "@/lib/apolloClient"
import { BiSolidRightArrow } from "react-icons/bi"
import { HomeMain, HeroImage, HeroIntro, EscrowsSection } from "./components/styles/HomeMain.styled"
import { Wrapper } from "@/app/components/styles/Wrapper"
import Link from "next/link"
import Divider from "./components/Divider"
import Escrows from "./components/Escrows"
import HeroBackground from "./components/HeroBackground"
import query from "@/utils/subgraphQueries"

export const revalidate = 3600

const Home = async () => {
    const { data } = await getClient().query({ query })

    return (
        <Wrapper>
            <HomeMain>
                <HeroImage>
                    <HeroBackground />
                </HeroImage>
                <HeroIntro>
                    <h1>Use Settle to buy and sell anything with safety and trust</h1>
                    <p>
                        Settle is a decentralized payment solution that safeguards transactions
                        between buyers and sellers.
                    </p>
                    <div>
                        <Link href="/your-escrows">Your escrows</Link>
                        <Link href="/create-escrow">
                            Get started <BiSolidRightArrow />
                        </Link>
                    </div>
                </HeroIntro>
            </HomeMain>
            <Divider />
            <EscrowsSection>
                <h1>Latest Escrows</h1>
                <Escrows params={{ data }} />
            </EscrowsSection>
        </Wrapper>
    )
}

export default Home
