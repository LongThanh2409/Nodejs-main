import express from "express";
import {
    DELETE,
    GetALL, GetID, PostUser, PutUser, PatchUser
} from "../controllers/user.js"
const routerUser = express.Router();

routerUser.get("/users", GetALL);
routerUser.get("/users/:id", GetID)
routerUser.delete("/users/:id", DELETE)
routerUser.put("/users/:id", PutUser)
routerUser.post("/users", PostUser)
routerUser.patch("/users/:id", PatchUser)
export default routerUser