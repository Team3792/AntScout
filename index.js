// Copyright (c) Army Ants Robotics. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


var teamData = {
    "number":  1,
    "scouter": "",
    "tournament":  "STL",
    "allianceScore":  0,
    "oppAllianceScore":  0,
    "autoPosition": "",
    "match":  1,
    "autoPlatform":  0, // 0 = nothing, 1 = docked, 2 = docked and engaged
    "endgamePlatform":  0, // 0 = nothing, 1 = docked, 2 = docked and engaged
    "type0":  "",
    "time0":  "",
    "where0":  "", // 0 = botton, 1 = center, 2 = top
    "type1":  "",
    "time1":  "",
    "where1":  "", // 0 = botton, 1 = center, 2 = top
    "type2":  "",
    "time2":  "",
    "where2":  "", // 0 = botton, 1 = center, 2 = top
    "type3":  "",
    "time3": "",
    "where3": "", // 0 = botton, 1 = center, 2 = top
    "type4": "",
    "time4": "",
    "where4": "", // 0 = botton, 1 = center, 2 = top
    "type5": "",
    "time5": "",
    "where5": "", // 0 = botton, 1 = center, 2 = top
    "type6": "",
    "time6": "",
    "where6": "", // 0 = botton, 1 = center, 2 = top
    "type7": "",
    "time7": "",
    "where7": "", // 0 = botton, 1 = center, 2 = top
    "type8": "",
    "time8": "",
    "where8": "", // 0 = botton, 1 = center, 2 = top
    "type9": "",
    "time9": "",
    "where9": "", // 0 = botton, 1 = center, 2 = top
    "type10": "",
    "time10": "",
    "where10": "", // 0 = botton, 1 = center, 2 = top
    "type11": "",
    "time11": "",
    "where11": "", // 0 = botton, 1 = center, 2 = top
    "type12": "",
    "time12": "",
    "where12": "", // 0 = botton, 1 = center, 2 = top
    "type13": "",
    "time13": "",
    "where13": "", // 0 = botton, 1 = center, 2 = top
    "type14": "",
    "time14": "",
    "where14": "", // 0 = botton, 1 = center, 2 = top
    "type15": "",
    "time15": "",
    "where15": "", // 0 = botton, 1 = center, 2 = top
    "type16": "",
    "time16": "",
    "where16": "", // 0 = botton, 1 = center, 2 = top
    "type17": "",
    "time17": "",
    "where17": "", // 0 = botton, 1 = center, 2 = top
    "type18": "",
    "time18": "",
    "where18": "", // 0 = botton, 1 = center, 2 = top
    "type19": "",
    "time19": "",
    "where19": "", // 0 = botton, 1 = center, 2 = top
    "type20": "",
    "time20": "",
    "where20": "", // 0 = botton, 1 = center, 2 = top
    "type21": "",
    "time21": "",
    "where21": "", // 0 = botton, 1 = center, 2 = top
    "type22": "",
    "time22": "",
    "where22": "", // 0 = botton, 1 = center, 2 = top
    "type23": "",
    "time23": "",
    "where23": "", // 0 = botton, 1 = center, 2 = top
    "type24": "",
    "time24": "",
    "where24": "", // 0 = botton, 1 = center, 2 = top
    "type25": "",
    "time25": "",
    "where25": "", // 0 = botton, 1 = center, 2 = top
    "type26": "",
    "time26": "",
    "where26": "", // 0 = botton, 1 = center, 2 = top
}

const baseURL = "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfQofx6uPNWxnRT4QsKaZYPaFQ4lTjjHIQPA3EwVLbod3CBMw/formResponse"

const formEntryNumbers = {
    "number": "entry.895357970",
    "autoPlatform": "entry.628266637",
    "endgamePlatform": "entry.25734390",
    "type0": "entry.752931814",
    "time0": "entry.1315370198",
    "where0": "entry.224098991",
    "type1": "entry.1628708303",
    "time1": "entry.2122184917",
    "where1": "entry.2135844715",
    "type2": "entry.1743738028",
    "time2": "entry.718809851",
    "where2": "entry.1725952974",
    "type3": "entry.1463370948",
    "time3": "entry.101646310",
    "where3": "entry.664338546",
    "type4": "entry.990327310",
    "time4": "entry.1250727904",
    "where4": "entry.511148419",
    "type5": "entry.1591113046",
    "time5": "entry.780333172",
    "where5": "entry.1412680840",
    "type6": "entry.501567916",
    "time6": "entry.558176237",
    "where6": "entry.1208312099",
    "type7": "entry.1342717072",
    "time7": "entry.677018008",
    "where7": "entry.1467844665",
    "type8": "entry.432995477",
    "time8": "entry.155943621",
    "where8": "entry.1653735548",
    "type9": "entry.996416420",
    "time9": "entry.1379803179",
    "where9": "entry.901744211",
    "type10": "entry.609642951",
    "time10": "entry.2018157865",
    "where10": "entry.1546884846",
    "type11": "entry.861160754",
    "time11": "entry.147784483",
    "where11": "entry.1803901101",
    "type12": "entry.1333855517",
    "time12": "entry.2044121911",
    "where12": "entry.90341652",
    "type13": "entry.1274244190",
    "time13": "entry.864491438",
    "where13": "entry.1889063118",
    "type14": "entry.925923652",
    "time14": "entry.1600678850",
    "where14": "entry.1929245848",
    "type15": "entry.730756661",
    "time15": "entry.1190615683",
    "where15": "entry.317364865",
    "type16": "entry.1242499967",
    "time16": "entry.2138719379",
    "where16": "entry.1174852690",
    "type17": "entry.1749350312",
    "time17": "entry.1375951017",
    "where17": "entry.1539752172",
    "type18": "entry.1346151541",
    "time18": "entry.1034047132",
    "where18": "entry.1014217171",
    "type19": "entry.876866791",
    "time19": "entry.1405947360",
    "where19": "entry.1206113344",
    "type20": "entry.2074139123",
    "time20": "entry.859020199",
    "where20": "entry.1426382780",
    "type21": "entry.591162682",
    "time21": "entry.596085166",
    "where21": "entry.1776505634",
    "type22": "entry.1634454025",
    "time22": "entry.647407544",
    "where22": "entry.747254368",
    "type23": "entry.1531221282",
    "time23": "entry.494036547",
    "where23": "entry.1470493804",
    "type24": "entry.1828041046",
    "time24": "entry.1807539643",
    "where24": "entry.635841785",
    "type25": "entry.602598704",
    "time25": "entry.2008648316",
    "where25": "entry.1538197332",
    "type26": "entry.319598952",
    "time26": "entry.1043324044",
    "where26": "entry.1003600373",
    "match": "entry.670115602",
    "tournament": "entry.179993385",
    "allianceScore": "entry.1559035364",
    "oppAllianceScore": "entry.1252711965",
    "autoPosition": "entry.1870199551",
    "scouter": "entry.102432438"
};

var intervalfn;

function init() {
    teamData["number"] = localStorage.getItem("currentTeamNumber");
    teamData["match"] = localStorage.getItem("currentMatchNumber");
    teamData["autoPosition"] = localStorage.getItem("currentAutoPosition")
    teamData["scouter"] = localStorage.getItem("currentScoutName")

    document.getElementById("teamNumber").innerHTML = "Team Number: " + teamData["number"];
    document.getElementById("matchNumber").innerHTML = "Match Number: " + teamData["match"];

    // call updatePlatform every 1 second
    intervalfn = setInterval(updatePlatform, 1000);
}

function updatePlatform() {
    if (matchIsFinished) {
        processData(scorings);
        window.localStorage.setItem("currentTeamData", JSON.stringify(teamData));
        document.getElementsByTagName("canvas")[0].remove()
        document.getElementById("my-modal").click()
        

    }
}

function finishForm() {
    var aScore = document.getElementById("allianceScore").value
    var oaScore = document.getElementById("oppAllianceScore").value
    if (aScore == "" || oaScore == "") {
        alert("Fill all fields!")
    } else {
        teamData['allianceScore'] = aScore;
        teamData['oppAllianceScore'] = oaScore;
        window.localStorage.setItem("currentTeamData", JSON.stringify(teamData));
        completeScout();
        resetPlatform();
        // go back to home page
        window.location.href = "index.html";
    }
}

function processData(dataArray) {
    for (var i = 0; i < dataArray.length; i++) {
        var data = dataArray[i];
        var time = data.time;
        var type = data.type;
        var where = data.where;

        teamData["type" + i] = type;
        teamData["time" + i] = time;
        teamData["where" + i] = where;

    }
    teamData['autoPlatform'] = chargeStationScores[0];
    teamData['endgamePlatform'] = chargeStationScores[1];
}

// completeScout using data from localStorage
function completeScout() {
    var url = baseURL + "?";
    localTeamData = JSON.parse(window.localStorage.getItem("currentTeamData"));
    for (var key in localTeamData) {
        var value = localTeamData[key];
        var entryNumber = formEntryNumbers[key];
        url += entryNumber + "=" + value + "&";
    }
    url = url.slice(0, -1);
    // Add to past data
    var pastData = JSON.parse(window.localStorage.getItem("pastData"));
    pastData.push(url);
    window.localStorage.setItem("pastData", JSON.stringify(pastData));
    

}

function resetPlatform() {
    localStorage.setItem("currentTeamData", JSON.stringify({}));
    localStorage.setItem("currentMatchNumber", "");
    localStorage.setItem("currentTeamNumber", "");

}