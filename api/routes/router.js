import { Router } from "express";
import { methods as imageController } from "../controllers/imageController";
import { storage } from "../config/multer";
import multer from "multer";
const uploader = multer({storage});

const router = Router();

router.get("/", imageController.getImages);
router.get("/:id", imageController.getImage);
router.post("/", uploader.single('image_url'), imageController.addImage);
router.put("/:id", uploader.single('image_url'), imageController.updateImage);
router.delete("/:id", imageController.deleteImage);

export default router;