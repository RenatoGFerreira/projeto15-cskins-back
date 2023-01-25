import { usersCollection } from "../database/db.js"
import { userSchema } from "../schemas/user.schema.js"
import bcrypt from "bcrypt";

export async function userSchemaValidation(req, res, next) {
    const user = req.body

    const { error } = userSchema.validate(user, { abortEarly: false })

    if (error) {
        const errorsMessage = error.details.map(detail => detail.message)
        return res.status(400).send(errorsMessage)
    }


    const checkUser = await usersCollection.findOne({ email: user.email })

    if (checkUser) {
        return res.status(409).send("User already exist.") //409 => conflito
    }


    res.locals.user = user

    next()
}


export async function signInBodyValidation(req, res, next) {
    const { email, password } = req.body

    try {
        const user = await usersCollection.findOne({ email })
        if(!user){
            return res.status(404).send("User not found.")
        }

        const passwordOK = bcrypt.compareSync(password, user.password)

        if(!passwordOK){
            return res.status(401).send("not authorized.")
        }

        res.locals.user = user

    }catch(error){
        console.error(error)
        res.status(500).send("Sorry, has a problem with server.")
    }

    next()
}