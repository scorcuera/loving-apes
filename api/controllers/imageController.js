import { getConnection } from "../database/database";

const getImages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, url FROM apes");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getImage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, url FROM apes WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM apes WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addImage = async (req, res) => {
    try {
        const { body, file } = req;
        const name = body.name;
        const image_url = body.image_url || file.filename;
        const image = {name, image_url};
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO apes SET ?", image);
        res.status(201);
        if (res.status(201)) {
            res.json(req.body);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { body, file } = req;
        const name = body.name;
        const image_url = body.image_url || file.filename;
        const image = {name, image_url};
        const connection = await getConnection();
        const result = await connection.query("UPDATE apes SET ? WHERE id = ?", [image, id]);
        if (res.status(200)) {
            res.json(req.body);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getImages,
    addImage,
    getImage,
    updateImage,
    deleteImage
};