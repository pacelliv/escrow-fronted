## Getting Started

Create a `.env` file and add the following enviroment variables:

```bash
API_URL="https://api-sepolia.etherscan.io/api"
ETHERSCAN_API_KEY=YOUR_KEY
THE_GRAPH_STUDIO_URI="YOUR_URI_FROM_THE_GRAPH"
```

Create a `.env.local` file and add the following environment variables:
```bash
NEXT_PUBLIC_ALCHEMY_API_KEY="YOUR_KEY"
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID="YOUR_KEY"
NEXT_PUBLIC_SEPOLIA_RPC_URL="https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY"
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the project:

```bash
npm run build

# then
npm run start
```

### See the contracts

https://github.com/pacelliv/escrow-contracts

