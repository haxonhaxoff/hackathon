menuState = {
    startGame1v1_1: function(){
        level = 1;
        game.state.start('playState1v1');
    },
    startGame1v1_2: function(){
        level = 2;
        game.state.start('playState1v1');
    },
    startGame1v1_3: function(){
        level = 3;
        game.state.start('playState1v1');
    },
    startGame1v1_4: function(){
        level = 4;
        game.state.start('playState1v1');
    },
    startGame1v1_5: function(){
        level = 5;
        game.state.start('playState1v1');
    },
    
    
    startGameCoin_1: function(){
        level = 1;
        game.state.start('playStateCoin');
    },
    startGameCoin_2: function(){
        level = 2;
        game.state.start('playStateCoin');
    },
    startGameCoin_3: function(){
        level = 3;
        game.state.start('playStateCoin');
    },
    startGameCoin_4: function(){
        level = 4;
        game.state.start('playStateCoin');
    },
    startGameCoin_5: function(){
        level = 5;
        game.state.start('playStateCoin');
    },
    
    muteFunction: function()
    {
        if(game.sound.mute)
        {
            game.sound.mute = false;
            muteButton.setFrames(0,0,0);
        }
        else
        {
            game.sound.mute = true;
            muteButton.setFrames(1,1,1);
        }
    },
    
    
    
    create: function()
    {
        background = game.add.image(0, 0,'menu-main');
        button = game.add.button(game.width /2-50, 600, 'start-button', this.chooseMode, this);
        button2 = game.add.button(game.width /2 + 50, 600, 'start-button3', this.directions, this);
        muteButton = game.add.button(20, 636, 'speaker', this.muteFunction, this, 0, 0, 0);
        muteButton.scale.setTo(.5);
        button.scale.setTo(0.7);
        button.anchor.setTo(1, 0.5);
        button2.scale.setTo(0.7);
        button2.anchor.setTo(0, 0.5);
        
        facingleft1 = true;
        facingleft2 = true;
        lastShot1 = 0;
        lastShot2 = 0;
        health1 = 60;
        health2 = 60;
        score1 = 0;
        score2 = 0;
        coinsOn = false;
        portalsOn = false;
        portalX = 0;
        portalY = 0;
        game.winner = 0;
        switchdelay1 = 0;
        switchdelay2 = 0;
        
        weapon1 = 2;
        weapon2 = 2;
        
        lastHit1 = 0;
        lastHit2 = 0;
        
        levelSelectStart = 6;
        levelSelectEnd = 9;
        

        

    },
    chooseLevel1v1: function()
    {
        background = game.add.image(0, 0,'level-menu');
        background.height = game.height;
        level1 = game.add.button(60, 70, 'level1v1_1', this.startGame1v1_1, this, 2,1,0);
        level2 = game.add.button(455, 70, 'level1v1_2', this.startGame1v1_2, this, 2,1,0);
        level3 = game.add.button(849, 70, 'level1v1_3', this.startGame1v1_3, this, 2,1,0);
        level4 = game.add.button(215, 291, 'level1v1_4', this.startGame1v1_4, this, 2,1,0);
        level5 = game.add.button(645, 291, 'level1v1_5', this.startGame1v1_5, this, 2,1,0);
    },
    chooseLevelCoin: function()
    {
        background = game.add.image(0, 0,'level-menu');
        background.height = game.height;
        level1 = game.add.button(60, 70, 'levelCoin_1', this.startGameCoin_1, this, 2,1,0);
        level2 = game.add.button(455, 70, 'levelCoin_2', this.startGameCoin_2, this, 2,1,0);
        level3 = game.add.button(849, 70, 'levelCoin_3', this.startGameCoin_3, this, 2,1,0);
        level4 = game.add.button(215, 291, 'levelCoin_4', this.startGameCoin_4, this, 2,1,0);
        level5 = game.add.button(645, 291, 'levelCoin_5', this.startGameCoin_5, this, 2,1,0);
    },
    chooseLevelTrophy: function()
    {
        level = 1;
        game.state.start('playStateTrophy');
    },
    chooseLevelStorm: function()
    {
        level = 1;
        game.state.start('playStateStorm');
    },
    chooseLevelTrophy2: function()
    {
        level = 1;
        game.state.start('playStateTrophy2');
    },
    chooseMode: function()
    {
        background = game.add.image(0, 0,'mode-menu');
        background.height = game.height;
        level1 = game.add.button(56, 70, 'choosemode', this.chooseLevel1v1, this, 2,1,0);
        level2 = game.add.button(452, 70, 'choosemode', this.chooseLevelCoin, this, 2,1,0);
        level3 = game.add.button(844, 70, 'choosemode', this.chooseLevelTrophy, this, 2,1,0);
        level4 = game.add.button(233, 421, 'choosemode', this.chooseLevelTrophy2, this, 2,1,0);
        level5 = game.add.button(662, 421, 'choosemode', this.chooseLevelStorm, this, 2,1,0);
    },
    directions: function(){
        adfasdf = game.add.image(0,0,'directions');
        adfasdf.height = game.height;
        adfasdf.width = game.width;
        button = game.add.button(game.width - 30, game.height - 30, 'start-button2', this.chooseMode, this, 2,1,0);
        button.anchor.setTo(1,1);
        button.scale.setTo(.7);
        
    }
}