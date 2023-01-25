import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use([authRoutes])

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));



// jogar para o frontend const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http:\\localhost:5000";
// mongod --dbpath ~/.mongo