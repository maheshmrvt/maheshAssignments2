const winsByTeam = {
    "RCB": 10,
    "MUMBHAI": 8,
    "GT": 7,
    "CSK": 9,
    "KKR": 12
  };
  function findTeamWithMaxWins(winsByTeam) {
    let maxWins = 0;
    let teamWithMaxWins = '';
    for (let team in winsByTeam) {
      if (winsByTeam[team] > maxWins) {
        maxWins = winsByTeam[team];
        teamWithMaxWins = team;
      }
    }
  
    return teamWithMaxWins;
  }
  console.log(findTeamWithMaxWins(winsByTeam));
  