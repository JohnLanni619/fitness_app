import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Dev");

    const allPosts = await db.collection("Test").find({}).toArray();
    res.json({ status: 200, data: allPosts });
}