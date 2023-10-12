declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production"
            WALLET_CONNECT_PROJECT_ID: string
            ALCHEMY_API_KEY: string
        }
    }
}

export {}
