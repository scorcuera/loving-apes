import { methods as imageService} from "../services/imageService"

const getImages = async (req, res) => {
    try {
        const result = await imageService.queryAllImages();
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getImage = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await imageService.queryAnImage(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await imageService.queryDeleteAnImage(id);
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
        const url = body.url || file.filename;
        const image = {name, url};
        const result = await imageService.queryAddImage(image);
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
        const url = body.url || file.filename;
        const image = {name, url};
        const result = await imageService.queryUpdateImage(id, image);
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