import { Router } from "express";
import { methods as languageController } from "../controllers/languageController";
import { storage } from "../config/multer";
import multer from "multer";
const uploader = multer({storage});

const router = Router();

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", uploader.single('image_url'), languageController.addLanguage);
router.put("/:id", uploader.single('image_url'), languageController.updateLanguage);
router.delete("/:id", languageController.deleteLanguage);

export default router;