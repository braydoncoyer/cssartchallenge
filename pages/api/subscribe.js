import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
    const { email } = req.body;
    const API_KEY = process.env.BUTTONDOWN_API_KEY;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    const result = await fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        headers: {
            Authorization: `Token ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, double_opt_in: true }),
    });
    
    const data = await result.json();

    if (!result.ok) {
        return res.status(500).json({ error: data.error.email[0] });
    }
  return res.status(201).json({ error: "" });
}