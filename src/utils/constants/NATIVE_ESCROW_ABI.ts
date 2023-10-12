const NATIVE_ESCROW_ABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
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
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Escrow__AddressZero",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__CallFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__EscrowExpired",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "currentTimestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "Escrow__EscrowNotExpired",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "arbiterFee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxFee",
                type: "uint256",
            },
        ],
        name: "Escrow__FeeExceedMax",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "enum EscrowTypes.State",
                name: "expectedState",
                type: "uint8",
            },
            {
                internalType: "enum EscrowTypes.State",
                name: "currentState",
                type: "uint8",
            },
        ],
        name: "Escrow__InWrongState",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__RepeatedParticipant",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__Unauthorized",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__ZeroAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "Escrow__ZeroDuration",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "disputer",
                type: "address",
            },
        ],
        name: "Dispute",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
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
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
        ],
        name: "ReceiptConfirmed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "arbiter",
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
                internalType: "uint256",
                name: "arbiterAward",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "grantorRefund",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "granteeAward",
                type: "uint256",
            },
        ],
        name: "Resolved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "payment",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [],
        name: "confirmReceipt",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getArbiter",
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
        inputs: [],
        name: "getArbiterFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBalance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getDuration",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getGrantee",
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
        inputs: [],
        name: "getGrantor",
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
        inputs: [],
        name: "getMaxFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getPayment",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getState",
        outputs: [
            {
                internalType: "enum EscrowTypes.State",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "grantorRefund",
                type: "uint256",
            },
        ],
        name: "resolveDispute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startDispute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
] as const
