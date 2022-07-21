const express = require("express");
const TeemoJS = require('teemojs');

const PORT = process.env.PORT || 3001;
const API_KEY = 'RGAPI-25ea51a9-e053-4a64-891c-14482425c6c0';

const app = express();

let api = TeemoJS(API_KEY);
let playerData;

api.get('na1', 'summoner.getBySummonerName', 'Garry Brar')
  .then(data => playerData = { name: data.name, level: data.summonerLevel, iconId: data.profileIconId });

app.get("/api", (req, res) => {
  res.json({ summonerName: playerData.name, level: playerData.level, iconId: playerData.iconId });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
