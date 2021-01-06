const fetch = require("node-fetch");

const getToken = async () => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const base64 = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + base64,
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

module.exports = getToken;
