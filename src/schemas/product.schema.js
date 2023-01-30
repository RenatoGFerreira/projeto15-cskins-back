import joi from "joi";

const productSchema = joi.object({
    product:joi.string().min(2).required(),
    image:joi.string().required(),
    price:joi.number().required(),
    quality:joi.string().required()
})

export default productSchema