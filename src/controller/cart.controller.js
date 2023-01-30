import { cartCollection } from "../database/db";

export async function addProductCart(req, res){
    const product = res.locals.product;
    const user = req.validUser

    try{
        await cartCollection.insertOne({product, userId:user._id})
        res.status(201).send("success")
    }catch(error){
        res.status(500).send("Sorry, has a problem with server. ")
        console.log(error)
    }
}
