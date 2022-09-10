import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || ''
}

// this file allows us to use environment variables, as defined
// in the .env file, all along our appc