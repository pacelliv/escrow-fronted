export const ESCROW_FACTORY_ABI = [
    {
        inputs: [],
        name: "EscrowFactory__AddressesMismatch",
        type: "error",
    },
    {
        inputs: [],
        name: "EscrowFactory__CallFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "EscrowFactory__ValuesMismatch",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "escrow",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "grantor",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "NewERC20Escrow",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "escrow",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "grantor",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "NewNativeEscrow",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "grantor",
                type: "address",
            },
            {
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "bytecode",
                type: "bytes",
            },
        ],
        name: "computeERC20EscrowAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "grantor",
                type: "address",
            },
            {
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "bytecode",
                type: "bytes",
            },
        ],
        name: "computeNativeEscrowAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "createERC20Escrow",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "grantee",
                type: "address",
            },
            {
                internalType: "address",
                name: "arbiter",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
            {
                internalType: "bytes32",
                name: "salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "createNativeEscrow",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
] as const
