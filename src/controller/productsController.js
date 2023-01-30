import { productsCollection } from "../database/db";

export async function insertProduct( req, res){

    const product = req.product

    try{
        productsCollection.insertOne(product)
        res.status(201).send("New product registered")
    }catch(error){
        console.log(error)
        res.status(500).send("Sorry, has a problem with server.")
    }
}


export async function getProducts(req, res){
    const object = req.query.product

    console.log(object)

    try{
        const product = await productsCollection.find({}).toArray()
        console.log(product)
        return res.status(200).send(product)
        
    }catch(error){
        console.log(error)
        res.status(500).send("Sorry, has a problem with server.") 
    }
}