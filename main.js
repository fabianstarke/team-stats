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
  }
};
