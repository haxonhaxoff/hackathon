var loadState = {
    preload: function()
    {
        game.load.tilemap('map1sprite', 'assets/json/map1sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map2sprite', 'assets/json/map2sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map3sprite', 'assets/json/map3sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map4sprite', 'assets/json/map4sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map5sprite', 'assets/json/map5sprite.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        game.load.tilemap('map6sprite', 'assets/json/map6sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map7sprite', 'assets/json/map7sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map8sprite', 'assets/json/map8sprite.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map9sprite', 'assets/json/map9sprite.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        game.load.tilemap('map1sprite-coin', 'assets/json/map1sprite-coin.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map2sprite-coin', 'assets/json/map2sprite-coin.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map3sprite-coin', 'assets/json/map3sprite-coin.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map4sprite-coin', 'assets/json/map4sprite-coin.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('map5sprite-coin', 'assets/json/map5sprite-coin.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        game.load.tilemap('ssmapsprite1', 'assets/json/ssmapsprite1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('ssmapsprite2', 'assets/json/ssmapsprite2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('ssmapsprite3', 'assets/json/ssmapsprite3.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('ssmapsprite4', 'assets/json/ssmapsprite4.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.tilemap('ssmapsprite5', 'assets/json/ssmapsprite5.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        //game.load.tilemap('map1sprite', 'assets/map1sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map2sprite', 'assets/map2sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map3sprite', 'assets/map3sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map4sprite', 'assets/map4sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map5sprite', 'assets/map5sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //
        //
        //game.load.tilemap('map1sprite', 'assets/map1sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map2sprite', 'assets/map2sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map3sprite', 'assets/map3sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map4sprite', 'assets/map4sprite.json', null, Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap('map5sprite', 'assets/map5sprite.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        game.load.image('tiles1', 'assets/tiles1.png');
        game.load.image('tiles2', 'assets/tiles2.png');
        game.load.image('tiles3', 'assets/tiles3.png');
        game.load.image('tiles4', 'assets/tiles4.png');
        game.load.image('tiles5', 'assets/tiles5.png');
        game.load.image('universaltiles', 'assets/universaltiles.png');
        
        game.load.spritesheet('ninja1', 'assets/ninja1-better.png', 61.25, 114);
        game.load.spritesheet('pogo1', 'assets/pogo1.png', 64, 164);
        game.load.spritesheet('ninja2', 'assets/ninja2-better.png', 61.25, 114);
        game.load.spritesheet('pogo2', 'assets/pogo2.png', 64, 164);
        game.load.spritesheet('speaker', 'assets/speaker.png', 109, 109);
        game.load.image('background1', 'assets/background1.jpg');
        game.load.image('background2', 'assets/background2.jpg');
        game.load.image('background3', 'assets/background3.jpg');
        game.load.image('background4', 'assets/background4.jpg');
        game.load.image('background5', 'assets/background5.jpg');
        game.load.image('menu-main', 'assets/menu-main3.png');
        game.load.image('start-button', 'assets/start_button2.png');
        game.load.image('start-button2', 'assets/start_button3.png');
        game.load.image('start-button3', 'assets/directions-button.png');
        game.load.image('level-menu', 'assets/levelmenu2.png');
        game.load.image('mode-menu', 'assets/gamemodemenu.png');
        game.load.image('choosemode', 'assets/choosemode.png');
        
        game.load.image('level1v1_1', 'assets/level1.png');
        game.load.image('level1v1_2', 'assets/level2.png');
        game.load.image('level1v1_3', 'assets/level3.png');
        game.load.image('level1v1_4', 'assets/level4.png');
        game.load.image('level1v1_5', 'assets/level5.png');
        
        
        game.load.image('levelCoin_1', 'assets/level1-coin.png');
        game.load.image('levelCoin_2', 'assets/level2-coin.png');
        game.load.image('levelCoin_3', 'assets/level3-coin.png');
        game.load.image('levelCoin_4', 'assets/level4-coin.png');
        game.load.image('levelCoin_5', 'assets/level5-coin.png');
        
        
        game.load.image('trophy', 'assets/trophy.png');
        
        
        game.load.image('redwins', 'assets/red-wins.png');
        game.load.image('bluewins', 'assets/blue-wins.png');
        game.load.image('lose', 'assets/lose.png');
        game.load.image('directions', 'assets/directions.png');
        game.load.spritesheet('bullet', 'assets/star.png', 36, 36);
        game.load.spritesheet('health-bar1', 'assets/hearts-sheet1.png', 84, 24);
        game.load.spritesheet('health-bar2', 'assets/hearts-sheet2.png', 84, 24);
        game.load.spritesheet('coin', 'assets/coin.png', 16, 32);
        game.load.spritesheet('healthcoin', 'assets/healthtoken.png', 12, 24);
        game.load.spritesheet('sword', 'assets/sword.png', 36, 64);
        game.load.spritesheet('lava', 'assets/lavatile.png', 64, 64);
        game.load.spritesheet('universal', 'assets/universaltiles.png', 64, 64);
        
        game.load.audio('menumusic', 'assets/sound/menumusic.wav');
        game.load.audio('gamemusic', 'assets/sound/fightmusic.wav');
        game.load.audio('boing', 'assets/sound/boing.wav');
        game.load.audio('coinCollect', 'assets/sound/coinCollect.wav');
        game.load.audio('hiya', 'assets/sound/hiya.wav');
        game.load.audio('hiya2', 'assets/sound/hiya2.wav');
        game.load.audio('huh', 'assets/sound/huh.wav');
        game.load.audio('swish', 'assets/sound/swoosh.wav');
        game.load.audio('powerup', 'assets/sound/powerup.wav');
    },
    
    create: function()
    {
        game.backgroundMusic;
        game.gameMusic;
        gameMusic = game.add.audio('gamemusic');
        hiya = game.add.audio('hiya');
        hiya2 = game.add.audio('hiya2');
        huh = game.add.audio('huh');
        boing = game.add.audio('boing');
        powerup = game.add.audio('powerup');
        swish = game.add.audio('swish');
        coinCollect = game.add.audio('coinCollect');
        
        backgroundMusic = game.add.audio('menumusic', true);
        backgroundMusic.play();
        backgroundMusic.loopFull(.1);
        
        game.state.start('menuState');
    }
}