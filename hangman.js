// 

const Hangman = function(word, numOfGuess){
    this.word = word.toLowerCase().split("");
    this.numOfGuess = numOfGuess;
    this.guessedLetters = [];

}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ""
  this.word.forEach(letter => {
      if(this.guessedLetters.includes(letter) || letter === " "){
          puzzle+= letter;
      }else {
          puzzle+= "*";
          numOfGuess--;  
      }
  });
  return puzzle
}
Hangman.prototype.takeGuess = function(guess){
    if(!this.guessedLetters.includes(this.guess)) {
        this.guessedLetters.push(this.guess)
    }
}

const hangman1 = new Hangman("Cat", 2 );
hangman1.takeGuess("c");
hangman1.takeGuess("t");
hangman1.takeGuess("z");
console.log(hangman1.getPuzzle())

const hangman2 = new Hangman("New Jersey", 4);
console.log(hangman2.getPuzzle())
console.log(hangman1);
console.log(hangman2);