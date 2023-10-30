import ThemeWrapper from "./ThemeWrapper"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { StyledDivider } from "./components/styles/Divider.styled"
import { Roboto } from "next/font/google"
import { Providers } from "@/lib/providers_walletconnect"
import type { Metadata } from "next"

const roboto = Roboto({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Settle: Transact with trust and safety",
    description: "Transact with trust and safety",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeWrapper>
            <html lang="en">
                <body className={roboto.className}>
                    <Providers>
                        <Navbar />
                        {children}
                        <StyledDivider style={{ width: "90%", marginBottom: "0" }} />
                        <Footer />
                    </Providers>
                </body>
            </html>
        </ThemeWrapper>
    )
}

export default RootLayout
