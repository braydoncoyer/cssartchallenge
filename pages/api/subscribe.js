import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
    const { email } = req.body;
    const API_KEY = process.env.BUTTONDOWN_API_KEY;

    console.log(email);

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

    if(result.status >= 400) {
        return res.status(400).json({
            error: 'There was an error subscribing.'
        })
    }
    
  return res.status(201).json({ error: "" });
}