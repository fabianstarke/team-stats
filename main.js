const team = {
  _players: [
    { firstname: "Gonzalo",
      lastname: "Higuain",
      age: 27 },
    { firstname: "Lionel",
      lastname: "Messi",
      age: 24 },
    { firstname: "Cristiano",
      lastname: "Ronaldo",
      age: 29 }
    ],
  _games: [
    { opponent: "Paris Saint Germain",
      teamPoints: 3,
      opponentPoints: 0 },
    { opponent: "Monaco",
      teamPoints: 2,
      opponentPoints: 1 },
    { opponent: "Lyon",
      teamPoints: 3,
      opponentPoints: 2 }
  ],

  get players(){
    return this._players;
  },
  get games(){
    return this._games
  },

  addPlayer(firstname, lastname, age){
    let player = {
      firstname: firstname,
      lastname: lastname,
      age: age
    };
    this.players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints){
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  }
};

team.addPlayer("Paul", "Pogba", 24);
team.addPlayer("Lucas", "Modric", 24);
team.addPlayer("Arturo", "Vidal", 26);

team.addGame("Bordeaux", 2, 0);
team.addGame("Strasbourg", 3, 3);
team.addGame("Lille", 1, 0);

console.log(team._players)
console.log(team._games)
