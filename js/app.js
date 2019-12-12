/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

$('#btn__reset').on('click', () => {
    game = new Game();
    game.startGame();
});

$('.key').on('click', (e) => {
    game.handleInteraction(e.target);
});
