// A:
const games = [
    { name: 'Rick Dangerous', year: 1989 },
    { name: 'Goblins', year: 1992 },
    { name: 'Golden Axe', year: 1989 }
];

// B:
function showGames(games){
    for (const game of games) {
        console.log(`Name: ${game.name} / Year: ${game.year}`);
    }
}
  
// C:
function showTotalGames(games){
    console.log(`Number of games: ${games.length}`);
}

// D:
const addGame = (event)=>  {
    event.preventDefault()
    let nameInfo = document.getElementById("inputName").value;
    let yearInfo = document.getElementById("inputYear").value;
    
    const newObj = {
        name: nameInfo,
        year: yearInfo
    }
    
    // E:
    if (games.some((game) => game.name === newObj.name)) {
        return alert('Game already exists');
    }
    
    games.push(newObj);   
        
    showGames(games)
    showTotalGames(games)
    averageLaunchDate(games)
    gamesFrom90s()
    console.log(`Concatenated game names: ${concatenateGameNames(games)}`);
    console.log("___________")
}

// F:
const averageLaunchDate = (games) => {
    var sumAll = 0
    for (const game of games) {
        sumAll += game.year
    }
    let average = sumAll/games.length
    console.log(`The average launch date is: ${average}`)
}

// G:
const removeGame = (event) => {
    event.preventDefault();
    const toRemoveName = document.getElementById("gameToRemove").value;
    const indexToRemove = games.findIndex((game) => game.name === toRemoveName);
  
    if (indexToRemove === -1) {
      return alert('Game not found');
    }
  
    games.splice(indexToRemove, 1);
    showGames(games)
    showTotalGames(games)
    averageLaunchDate(games)
    console.log("___________")
};

document.getElementById("formAddGame").addEventListener('submit', addGame);
document.getElementById("formRemoveGame").addEventListener('submit', removeGame);

// H:
function gamesFrom90s(){
    let gameNames = "";
    for (const game of games) {
        if(game.year >= 1990 && game.year < 2000){
            gameNames += `${game.name} `
        }
    }
    alert(`The games ${gameNames}are from the 90's!`)
}

// I:
const concatenateGameNames = (games) => {
    return games
      .map((game) => game.name)
      .join('')
      .toLowerCase()
      .replaceAll(' ', '');
};
//console.log(`Concatenated game names: ${concatenateGameNames(games)}`);
