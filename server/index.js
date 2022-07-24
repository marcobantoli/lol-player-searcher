require("dotenv").config();
const express = require("express");
const TeemoJS = require('teemojs');

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.RIOT_API_KEY;

const app = express();
const api = TeemoJS(API_KEY);

app.get("/api/:player", async (req, res) => {
  const playerData = await api.get('na1', 'summoner.getBySummonerName', req.params.player);
  
  if (playerData) {
    const rankData = await api.get('na1', 'league.getLeagueEntriesForSummoner', playerData.id);
    const matchIds = await api.get('americas', 'match.getMatchIdsByPUUID', playerData.puuid);
    const matches = [];

    let i = 0;
    while (i < matchIds.length && i < 5) {
      const match = await api.get('americas', 'match.getMatch', matchIds[i]);
      const player = match.info.participants.find(participant => participant.summonerName === playerData.name);
      const playerGameStats = { 
        assists: player.assists,
        champion: player.championName,
        deaths: player.deaths,
        kills: player.kills,
        wonGame: player.win
      }
      matches.push(playerGameStats);
      i++;
    }

    res.json({
      summonerName: playerData.name, 
      level: playerData.summonerLevel, 
      iconId: playerData.profileIconId,
      tier: rankData[1].tier,
      rank: rankData[1].rank,
      lp: rankData[1].leaguePoints,
      wins: rankData[1].wins,
      losses: rankData[1].losses,
      matchHistory: matches
    });
  } else {
    res.json(null);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
