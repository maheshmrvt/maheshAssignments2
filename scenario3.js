const players = [
    { name: 'kohili', team: 'RCB', runs: 736 },
    { name: 'dhoni', team: 'CSK', runs: 495},
    { name: 'shreyas', team: 'KKR', runs: 435 },
    { name: 'gill', team: 'GT', runs: 675 },
    { name: 'rohith', team: 'mumbai', runs: 698 }
  ];
  
function playersByTeam(players, teamName) {
    return players.filter(player => player.team === teamName);
  }
  
  console.log(playersByTeam(players, "mumbai"));
  