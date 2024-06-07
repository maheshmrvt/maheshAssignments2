const players = [
    { name: 'kohili', team: 'RCB', runs: 736 },
    { name: 'dhoni', team: 'CSK', runs: 495},
    { name: 'shreyas', team: 'KKR', runs: 435 },
    { name: 'gill', team: 'GT', runs: 675 },
    { name: 'rohith', team: 'mumbai', runs: 698 }
  ];
  function findTopScorers(players) {
    players.sort((a, b) => b.runs - a.runs);
    const top3 = players.slice(0, 5);
  
    return top3;
  }
  console.log(findTopScorers(players));
  