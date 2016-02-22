var game = new Phaser.Game(1280, 720, Phaser.AUTO, '');
game.state.add('bootState', bootState);
game.state.add('loadState', loadState);
game.state.add('menuState', menuState);

game.state.add('playState1v1', playState1v1);
game.state.add('playStateTrophy', playStateTrophy);
game.state.add('playStateStorm', playStateStorm);
game.state.add('playStateCoin', playStateCoin);
game.state.add('playStateTrophy2', playStateTrophy2);

game.state.add('winState', winState);

game.state.start('bootState');