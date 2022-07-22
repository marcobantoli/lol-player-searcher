const express = require("express");
const TeemoJS = require('teemojs');

const PORT = process.env.PORT || 3001;
const API_KEY = 'RGAPI-25ea51a9-e053-4a64-891c-14482425c6c0';

const app = express();

let api = TeemoJS(API_KEY);

app.get("/api/:player", async (req, res) => {
  const playerData = await api.get('na1', 'summoner.getBySummonerName', req.params.player);
  if (playerData) {
    res.json({ summonerName: playerData.name, level: playerData.summonerLevel, iconId: playerData.profileIconId });
  } else {
    res.json(null);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
