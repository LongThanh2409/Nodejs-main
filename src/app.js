import express from "express";
import routerUser from "./routers/user.js"
import dotenv from "dotenv"

const app = express();
app.use(express.json())
dotenv.config()
app.use("/api", routerUser)
app.listen(process.env.PORT, () => {
    console.log("SERVER RUN HERE " + `${process.env.PORT}`);
})
