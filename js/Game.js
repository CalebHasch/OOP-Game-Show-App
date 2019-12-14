/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
let gamePhrase;

//set up game class with 3 properties and several methods
 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = ['yellow submarine', 'game of thrones', 'the doors', 'hey you', 'fightclub'];
         this.activePhrase = null;
     }
     //hides overlay, creates phrase class with random phrase, and call addPhraseToDisplay
     startGame() {
        $('#overlay').slideUp(1500);
        this.activePhrase = this.getRandomPhrase();
        gamePhrase = new Phrase(this.activePhrase);
        gamePhrase.addPhraseToDisplay(); 
     }
     //selects and returns random phrase
     getRandomPhrase() {
        var randomNumber = Math.floor(Math.random() * 5);
        return this.phrases[randomNumber]
     }
     //disabled clicked key; if checked letter is wrong remove life add 'wrong' class, else add 'chosen' class and checkForWin
     handleInteraction(key) {
        $key.eq(key).prop('disabled', true);
        if (gamePhrase.checkLetter(key) === 0) {
         $key.eq(key).addClass('wrong');
         game.removeLife();
        } else {
         $key.eq(key).addClass('chosen');
         if (this.checkForWin()) {
            this.gameOver();
         }
        }
     }
     //replaces life image with lost image and calls game over with 5 misses
     removeLife() {
        $('.tries img').eq(this.missed).remove();
        $('.tries').eq(this.missed).append('<img src="images/lostHeart.png" alt="Missing Heart Icon" height="35" width="30"></img>');
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver();
        }
     }
     //checks if phrase has been revealed
     checkForWin() {
        let win = true;
        $('.letter').map(letter => {
           if ($('.letter').eq(letter).hasClass('hide')) {
              win = false;
           }
        });
        return win;
     }
     //resets classes to defualt and shows overlay with either win or lose screen
     gameOver() {
         $('#overlay').slideDown(1250);
         if (this.missed === 5) {
            $('#overlay h1').text('You lose, maybe next time!')
            $('#overlay').removeClass('win').addClass('lose');
         } else {
            $('#overlay h1').text('Congrats you win! Play another game.');
            $('#overlay').removeClass('lose').addClass('win');
        }
        $('.letter').remove();
        $('.space').remove();
        $key.removeClass('wrong').removeClass('chosen').prop('disabled', false)
        $('.tries img').remove();
        $('.tries').append('<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></img>');
     }
 }

 