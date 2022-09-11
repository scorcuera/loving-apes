import { getConnection } from "../database/database";

const dataTable = {
    name: 'apes',
    entries: 'id, name, url'
}

const queryAllImages = async() => {
    const connection = await getConnection();
    const result = await connection.query(`SELECT ${dataTable.entries} FROM ${dataTable.name}`);
    return result;
}

const queryAnImage = async (id) => {
    const connection = await getConnection();
    const result = await connection.query(`SELECT ${dataTable.entries} FROM apes WHERE id = ${id}`);
    return result;
}

const queryDeleteAnImage = async (id) => {
    const connection = await getConnection();
    const result = await connection.query(`DELETE FROM ${dataTable.name} WHERE id = ${id}`);
    return result;
}

const queryAddImage = async (newImage) => {
    const connection = await getConnection();
    const result = await connection.query(`INSERT INTO ${dataTable.name} SET ?`, newImage);
    return result;
}

const queryUpdateImage = async (id, updatedImage) => {
    const connection = await getConnection();
    const result = await connection.query(`UPDATE ${dataTable.name} SET ? WHERE id = ?`, [updatedImage, id]);
    return result;
}

export const methods = {
    queryAllImages,
    queryAnImage,
    queryDeleteAnImage,
    queryAddImage,
    queryUpdateImage
}