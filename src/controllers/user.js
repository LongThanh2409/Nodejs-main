import axios from "axios";
import dotenv from "dotenv";
import Joi from "joi";
dotenv.config()
const API_URL = "http://localhost:3000/users/";
export const GetALL = async (req, res) => {

    try {
        const { data: users } = await axios.get(
            `${API_URL}`
        );
        if (users.length === 0) {
            res.send({
                messenger: "Danh sách trống"
            })
        }
        return res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ messenger: err })
    }
}
export const GetID = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `${API_URL}${req.params.id}`
        );


        return res.status(200).json(users);

    }
    catch (err) {
        if (err.response.status === 404) {
            return res.status(404).json({ messenger: "Không tìm thấy người dùng với id tương ứng" });
        }
        res.status(500).json({ messenger: err })
    }
}
export const PostUser = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: "Cần nhập đủ cả username và name và email" });
    }
    try {


        const { data: users } = await axios.post(
            `${API_URL}`, req.body
        )

        return res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ messenger: err })
    }
}
export const DELETE = async (req, res) => {


    try {
        const { data: users } = await axios.delete(
            `${API_URL}${req.params.id}`
        );



        return res.status(200).json({
            messenger: "User đã được xóa"
        }

        );

    }
    catch (err) {
        if (err.response.status === 404) {
            return res.status(404).json({ messenger: "Không tìm thấy người dùng với id tương ứng" });
        }
        res.status(500).json({ messenger: err })
    }
}
export const PutUser = async (req, res) => {

    try {
        const { data: users } = await axios.put(
            `${API_URL}${req.params.id}`, req.body
        )

        return res.status(200).json(users);
    }
    catch (err) {
        if (err.response.status === 404) {
            return res.status(404).json({ messenger: "Không tìm thấy người dùng với id tương ứng" });
        }
        res.status(500).json({ messenger: err })
    }
}
export const PatchUser = async (req, res) => {

    try {
        const { data: users } = await axios.patch(
            `${API_URL}${req.params.id}`, req.body
        )

        return res.status(200).json(users);
    }
    catch (err) {
        if (err.response.status === 404) {
            return res.status(404).json({ messenger: "Không tìm thấy người dùng với id tương ứng" });
        }
        res.status(500).json({ messenger: err })
    }
}




