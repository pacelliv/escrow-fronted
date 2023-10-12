import { getClient } from "@/lib/apolloClient"
import YourEscrowsContent from "../components/YourEscrowsContent"
import query from "@/utils/subgraphQueries"

export const revalidate = 10

const YourEscrowsPage = async () => {
    const { data } = await getClient().query({ query })

    return <YourEscrowsContent params={{ data }} />
}

export default YourEscrowsPage
