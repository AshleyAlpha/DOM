// Sleep Debt Calculator (Assignment)

const getSleepHours = (day) => {
  if (day === "Monday") {
    return 8;
  } else if (day === "Tuesday") {
    return 7;
  } else if (day === "Wednesday") {
    return 6;
  } else if (day === "Thursday") {
    return 5;
  } else if (day === "Friday") {
    return 4;
  } else if (day === "Saturday") {
    return 3;
  } else if (day === "Sunday") {
    return 2;
  }
};
const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");
const getIdealSleepHours = () => {
  const idealHours = 6.5;
  return idealHours * 7;
};
console.log(
  "The sum of all sleep hours in the week is " + getActualSleepHours()
); // should print the sum of all sleep hours in the week
console.log("The ideal hours is " + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed");
  } else {
    console.log("You should get some rest");
  }
};
calculateSleepDebt();

// TRAINING DAYS (ASSIGNMENT)

// The scope of `random` is too loose

const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight

const getTrainingDays = (event) => {
  let days;

  if (event === "Marathon") {
  } else if (event === "Triathlon") {
  } else if (event === "Pentathlon") {
  }

  return days;
};

// The scope of `name` is too tight

const logEvent = (name, event) => {};

console.log(`${name}'s event is: ${event}`);
const name = "Nala";

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};
const name = "Nala";

const event = getRandEvent();

const days = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(name, event);

logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);

//ROCK, PAPER OR SCISSORS

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput == "bomb" ||
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};
getComputerChoice = () => {
  Math.floor(Math.random() * 2);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
};
console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'

determineWinner = (userChoice, computerChoice) => {
  if (userChoice == "bomb") {
    return "The user wins!";
  }
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};
console.log(determineWinner("paper", "scissors")); // prints something like 'The computer won!'
console.log(determineWinner("paper", "paper")); // prints something like 'The game is a tie!'
console.log(determineWinner("paper", "rock")); // prints something like 'The user won!'

const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

//RACE DAY

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;
if (early && age > 18) {
  raceNumber += 1000;
}
if (early && age > 18) {
  console.log(`Race will begin at 09:30, your race number is: ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`);
} else {
  console.log("Please approach the registrationd desk!");
}

//TEAM STATS

const team = {
  _players: [
  {firstName: 'Alex', lastName: 'Rugaju', age: '50'},
  {firstName: 'Mia', lastName: 'Gaju', age: '11'},
  {firstName: 'Janet', lastName: 'Rugaju', age: '49'},
],
  _games: [
    {opponent: 'Doggers', teamPoints: '11', opponentPoints: '1'},
    {opponent: 'Cardinals', teamPoints: '10', opponentPoints: '12'},
    {opponent: 'Rams', teamPoints: '2', opponentPoints: '5'},

  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayers(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastname: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

// team.addPlayers('Bugs', 'Bunny', 76);
// console.log(team.players);

addGame(newOpponent, newTeamPoints, newOpponetntsPoints){
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentsPoints: newOpponetntsPoints,
  };
  this.games.push(game);
}
};
team.addGame('Titans', '100', 98);
console.log(team.games);

  
