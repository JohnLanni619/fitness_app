import { macros } from "../../../data/macros";

export default function handler(req, res) {
    res.status(200).json(macros)
}