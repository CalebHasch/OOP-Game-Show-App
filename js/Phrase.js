/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }
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
     checkLetter(key) {
        $('.letter').map(char => {
            if (key.text() === char) {
                this.showMatchedLetter(char);
            }
        });
     }
     showMatchedLetter(char) {
         char.addClass('show')
         char. removeClass('hide')
     }
 }

 const george = new Phrase('GEorge man');