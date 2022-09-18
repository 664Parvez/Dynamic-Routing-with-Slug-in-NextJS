import users from "../../users"

export default function userApi (req, res) {
    res.status(200).json(users)
}

