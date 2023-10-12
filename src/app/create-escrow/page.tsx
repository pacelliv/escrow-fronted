"use client"

import { Wrapper, Form } from "@/app/components/styles/CreateEscrow.styled"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAccount } from "wagmi"
import { useWeb3Modal } from "@web3modal/react"
import { useRouter } from "next/navigation"

interface IFormInput {
    type: string
}

const CreateEscrowPage = () => {
    const router = useRouter()
    const { open, isOpen } = useWeb3Modal()
    const { isConnected, isConnecting } = useAccount()
    const { register, handleSubmit } = useForm<IFormInput>()

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        if (data.type === "ERC20") {
            router.push("/create-escrow/erc20-escrow")
            return
        }
        router.push("/create-escrow/native-escrow")
    }

    return (
        <Wrapper isConnected={isConnected}>
            {isConnected ? (
                <>
                    <h2>Create an Escrow Contract</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <label>Select Escrow type:</label>
                        <select {...register("type")}>
                            <option value="ERC20">ERC20 Escrow</option>
                            {/* <option value="Native">Native Escrow</option> */}
                        </select>
                        <input type="submit" value="Next" />
                    </Form>
                </>
            ) : (
                <>
                    <h2>Connect your wallet to continue</h2>
                    <button disabled={isOpen || isConnecting} onClick={async () => await open()}>
                        Connect
                    </button>
                </>
            )}
        </Wrapper>
    )
}

export default CreateEscrowPage
