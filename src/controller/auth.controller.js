import bcrypt from "bcrypt";
import { usersCollection, sessionCollection } from "../database/db.js";
import { v4 as uuidv4} from 'uuid'


export async function signUp(req, res) {
    const newUser = res.locals.user

    const passwordHash = bcrypt.hashSync(newUser.password, 10)

    try {

        await usersCollection.insertOne({ ...newUser, password: passwordHash })
        res.status(201).send("New user registered.")


    } catch (error) {
        console.log(error)
        res.status(500).send("Sorry, we have a problem with server.")
    }

}

export async function signIn( req, res) {
    
    const user = res.locals.user
    const token = uuidv4()

    try{
        await sessionCollection.insertOne({userId: user._id, token})
        res.status(201).send({token})

    }catch(error){
        console.error(error)
        res.status(500).send("Has a problem with server.")
    }

 }