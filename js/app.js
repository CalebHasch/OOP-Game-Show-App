/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const $key = $('.key');
let game;

$('#btn__reset').on('click', () => {
    game = new Game();
    game.startGame();
});

$key.map(key => {
    $key.eq(key).on('click', (e) => {
        game.handleInteraction(key);
    });
});

$(document).on('keydown', (e) => {
    $key.map(key => {
        if ($key.eq(key).text() === e.code[3].toLowerCase() && $('.letter').hasClass('hide')) {
            game.handleInteraction(key);
        }
    });
});