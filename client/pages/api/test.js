import executeQuery from "../../lib/db";

export default async function handler (req, res) {
    try {
        const results = await executeQuery(`
            SELECT * FROM test
        `);

        return res.json(results);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}