import { useContractRead } from "wagmi"
import { ERC20_ESCROW_ABI } from "@/utils/constants/ERC20_ESCROW_ABI"

enum State {
    CREATED,
    CONFIRMED,
    DISPUTED,
    RESOLVED,
}

export const GetEscrowState = ({ params: { address } }: Address): string => {
    const { data } = useContractRead({
        abi: ERC20_ESCROW_ABI,
        address: address,
        functionName: "getState",
    })

    return data === State.CREATED
        ? "Live"
        : data === State.CONFIRMED
        ? "Confirmed"
        : data === State.DISPUTED
        ? "Disputed"
        : data === State.RESOLVED
        ? "Resolved"
        : ""
}