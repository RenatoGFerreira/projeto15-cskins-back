import { Router } from "express";
import { insertProduct, getProducts } from "../controller/productsController.js";
import { productValidation} from "../middleware/product.middleware.js"


const router = Router()

router.get("/getProducts", getProducts)
router.post("/insertProducts", productValidation, insertProduct )

export default router;