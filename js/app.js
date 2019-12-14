/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//declares variables
const $key = $('.key');
let game;

//reset button starts new game with game class and startGame method
$('#btn__reset').on('click', () => {
    game = new Game();
    game.startGame();
});

//calls handleInteraction when key is clicked
$key.map(key => {
    $key.eq(key).on('click', (e) => {
        game.handleInteraction(key);
    });
});

//calls handleInteraction when a keyboard letter is typed and game is going
$(document).on('keydown', (e) => {
    $key.map(key => {
        if ($key.eq(key).text() === e.code[3].toLowerCase() && $('.letter').hasClass('hide')) {
            game.handleInteraction(key);
        }
    });
});