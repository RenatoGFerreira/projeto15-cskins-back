import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();


const mongoClient = new MongoClient(process.env.MONGO_URL)
try{
    await mongoClient.connect()
    console.log('connected with mongoDB.')

}catch(error){
    console.error(error)
}


const db = mongoClient.db()

export const usersCollection = db.collection('users')
export const sessionCollection = db.collection("session")
export const transactionsCollection = db.collection("transactions")