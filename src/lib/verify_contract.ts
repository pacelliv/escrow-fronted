import axios from "axios"
import fs from "fs"
import { Escrow } from "@/utils/enums"

export const verifyContract = async (
    contractaddress: string,
    constructorArgs: string,
    contractname: string,
    escrowType: string
) => {
    const apiUrl = process.env.API_URL || ""
    const apikey = process.env.ETHERSCAN_API_KEY || ""
    const sourceCode = fs.readFileSync(escrowType === Escrow.ERC20 ? "./src/utils/flattened/ERC20EscrowFlattened.sol" : "", { encoding: "utf-8" })

    try {
        const requestBody: RequestBody = {
            apikey,
            contractaddress,
            codeformat: "solidity-single-file",
            module: "contract",
            action: "verifysourcecode",
            sourceCode,
            contractname,
            compilerversion: "v0.8.21+commit.d9974bed",
            optimizationUsed: 1,
            runs: 200,
            constructorArguements: constructorArgs,
        }

        await axios.post(apiUrl, requestBody, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("error message", error.message)
        } else {
            console.error("unexpected error", error)
        }
    }
}
