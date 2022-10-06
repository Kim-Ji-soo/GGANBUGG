const HOST = "http://localhost:8080/api/v1/"
//const HOST ="http://j7cp204.p.ssafy.io/api/v1/"

const WORLDCUP = "worldcup/"
const CHART = "noRelationnCommo/"
const STATISTICS = "statistics/"

const worldcup ={
    getAllChampion : () => HOST + WORLDCUP +"getall/",
    getChampionByName : () => HOST + WORLDCUP +"/",
    updateGoldMedal : () => HOST + WORLDCUP +"goldmedal/",
    getGoldMedalCount : () => HOST +WORLDCUP + WORLDCUP +"goldmedalcount/",
    getWinRate : () => HOST + WORLDCUP +WORLDCUP +"winrate/"
}

const statistics = {
    getAllMatchNum : () => HOST + STATISTICS +"allNum/",
    getMatchNumPerLane : () => HOST + STATISTICS + "numPerLane/",
    recommend : () => HOST +STATISTICS + "recommend/"
}

const chart = {
    getChampionCommon : () =>HOST + CHART + "championCommon/"
}

const wordcloud ={
    getAllTeam : () => HOST + "team/allTeam/",
    getAllEnemy : () =>HOST + "match/allEnemy"
}


export {worldcup, statistics, chart, wordcloud};