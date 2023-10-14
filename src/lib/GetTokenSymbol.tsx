import { useContractRead } from "wagmi"
import { ERC20_ABI } from "@/utils/constants/ERC20_ABI"

export const GetTokenSymbol = ({ params: { address } }: Address): string => {
    const { data } = useContractRead({
        abi: ERC20_ABI,
        address: address,
        functionName: "symbol",
    })
    return data as string
}
