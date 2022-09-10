import mysql from "promise-mysql";
import config from "../config/config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    multipleStatements: true
});

export const getConnection = () => connection;