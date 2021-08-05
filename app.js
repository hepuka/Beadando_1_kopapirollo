 const game = () => {
  let player = 0;
  let computer = 0;


  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const score = document.querySelector(".score");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      score.classList.add("fadeIn");
    });
  };
 
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerOptions = ["KŐ", "PAPÍR", "OLLÓ"];

    options.forEach(option => {
      option.addEventListener("click", function() {
      
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

          compareHands(this.textContent, computerChoice);
          playerHand.src = `./anyagok/${this.textContent}.png`;
          computerHand.src = `./anyagok/${computerChoice}.png`;
       
      });
    });

  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = player;
    computerScore.textContent = computer;

  };

  const compareHands = (playerChoice, computerChoice) => {
   
    const winner = document.querySelector(".winner");
    
    if (playerChoice === computerChoice) {
      winner.textContent = "Döntetlen!";
      return;
    }
    
    if (playerChoice === "KŐ") {
      if (computerChoice === "OLLÓ") {
        winner.textContent = "Nyertél!";
        player++;
        updateScore();
        return;
      } else {
        winner.textContent = "Vesztettél!";
        computer++;
        updateScore();
        return;
      }
    }
    
    if (playerChoice === "PAPÍR") {
      if (computerChoice === "OLLÓ") {
        winner.textContent = "Vesztettél!";
        computer++;
        updateScore();
        return;
      } else {
        winner.textContent = "Nyertél!";
        player++;
        updateScore();
        return;
      }
    }
    
    if (playerChoice === "OLLÓ") {
      if (computerChoice === "KŐ") {
        winner.textContent = "Vesztettél!";
        computer++;
        updateScore();
        return;
      } else {
        winner.textContent = "Nyertél!";
        player++;
        updateScore();
        return;
      }
    }

    
  };

  const newgame = () => {
    const newgameBtn = document.querySelector(".newgame button");
 
    newgameBtn.addEventListener("click", () => {

      location.reload();
     
    });
  };

  startGame();
  playMatch();
  newgame();

  };

game();