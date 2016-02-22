winState = {
    preload: function()
    {
        game.load.image('redwins', 'assets/red-wins.png');
        game.load.image('bluewins', 'assets/blue-wins.png');
    },
    create: function()
    {
        

        switch(this.game.winner)
        {
            case 1:
                background = game.add.image(0,0,'redwins');
                break;
            case 2:
                background = game.add.image(0,0,'bluewins');
                break;
            case 0:
                background = game.add.image(0,0,'lose');
                break;
        }
        
        button = game.add.button(412, 318, 'start-button', this.chooseLevel, this, 2,1,0);

    },
    chooseLevel: function()
    {
        gameMusic.pause();
        backgroundMusic.play();
        backgroundMusic.loopFull(.1);
        
        game.state.start('menuState');
    }
}