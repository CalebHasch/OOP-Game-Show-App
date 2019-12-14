/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
//Phrase class with phrase property and 3 methods
 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }
     //creates and displays the word boxes hiding the phrase
     addPhraseToDisplay() {
         const charArray = this.phrase.split('');
         const $phraseUL = $('#phrase ul');
         charArray.map(char => {
             if (char === ' ') {
                let $charBox = $('<li> </li>').addClass('space');
                $phraseUL.append($charBox);
             } else {
                let $charBox = $('<li></li>').addClass('letter').addClass('hide').text(char);
                $phraseUL.append($charBox);
             }
         });
     }
     // checks if guessed letter in the phrase and call showMatchedLetter if it is
     checkLetter(key) {
        let correct = 0; 
        $('.letter').map(char => {
            if ($key.eq(key).text() === $('.letter').eq(char).text()) {
                this.showMatchedLetter(char);
                correct += 1;
            }
        });
        return correct;
     }
     //unhides the letter(s) in the phrase
     showMatchedLetter(char) {
        $('.letter').eq(char).addClass('show')
        $('.letter').eq(char).removeClass('hide')
     }
 }

