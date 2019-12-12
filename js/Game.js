/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let gamePhrase;

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = ['yellow submarine', 'game of thrones', 'the doors', 'hey you', 'fightclub'];
         this.activePhrase = null;
     }
     startGame() {
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        gamePhrase = new Phrase(this.activePhrase);
        gamePhrase.addPhraseToDisplay(); 
     }
     getRandomPhrase() {
        var randomNumber = Math.floor(Math.random() * 5);
        return this.phrases[randomNumber]
     }
     handleInteraction(key) {
        key.disabled = true;
        console.log(key.innerHTML());

     }
     removeLife() {
        $('.tries img').eq(this.missed).remove();
        $('.tries').eq(this.missed).append('<img src="images/lostHeart.png" alt="Missing Heart Icon" height="35" width="30"></img>');
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
            console.log('boo');
        }
     }
     gameOver() {
         $('#overlay').show();
         if (this.missed === 5) {
            $('#overlay h1').text('You lose, maybe next time!')
            $('#overlay').addClass('lose');
         } else {
            $('#overlay h1').text('Congrats you win! Play another game.');
            $('#overlay').addClass('win');
        }
     }
 }

 