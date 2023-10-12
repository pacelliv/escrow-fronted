import { gql } from "@apollo/client"

const query = gql`
    {
        newERC20Escrows {
            id
            escrow
            grantor
            grantee
            arbiter
            token
            arbiterFee
            payment
            duration
            blockNumber
            blockTimestamp
            transactionHash
        }
        newNativeEscrows {
            id
            escrow
            grantor
            grantee
            arbiter
            arbiterFee
            payment
            duration
            blockNumber
            blockTimestamp
            transactionHash
        }
    }
`

export default query
