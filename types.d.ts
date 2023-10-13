type Address = {
    params: {
        address: `0x${string}`
    }
}

type RequestBody = {
    apikey: string | undefined
    contractaddress: string
    codeformat: string
    module: string
    action: string
    sourceCode: string
    contractname: string
    compilerversion: string
    optimizationUsed: number
    runs: number
    constructorArguements: string
}

type ERC20Escrow = {
    __typename: string
    id: string
    escrow: string
    grantor: string
    grantee: string
    arbiter: string
    token: string
    arbiterFee: string
    payment: string
    duration: string
    blockNumber: string
    blockTimestamp: string
    transactionHash: string
}

type NativeEscrow = {
    __typename: string
    id: string
    escrow: string
    grantor: string
    grantee: string
    arbiter: string
    token: string
    arbiterFee: string
    payment: string
    duration: string
    blockNumber: string
    blockTimestamp: string
    transactionHash: string
}

type EscrowData = {
    newERC20Escrows: ERC20Escrow[]
    newNativeEscrows: NativeEscrow[]
}
