import productsSchema from "../schemas/product.schema.js"

export async function productValidation(req, res, next){
    const product = req. body

    const validation = productsSchema.validate(product)

    if(validation.error){
        return res.status(422).send("Please, enter all information correctly.")
    }

    req.product = product

    next()

}