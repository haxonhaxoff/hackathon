
var playStateTrophy2 = {
    
    
    moveTo: function(sprite,x, y, tileWidth, tileHeight)
    {
        sprite.x = (x-1) * tileWidth;
        sprite.y = (y-3) * tileHeight;
        sprite.body.bounce.y = 0.5;
        sprite.body.velocity.y = 0;
        sprite.body.velocity.x = 0;
        setTimeout(function(){    
            sprite.body.bounce.y = 1.0;
        }, 2000);
    },
    create: function()
    {
        backgroundMusic.pause();

        gameMusic.play();
        gameMusic.loopFull(.2);
        
        level = Math.round(levelSelectStart + Math.random()*(levelSelectEnd - levelSelectStart));
        game.world.setBounds(0,-300,1280, 1020);
        background = game.add.image(0,0,'background'+ Math.round(1+Math.random()*4));
        
        
        
        
        map = game.add.tilemap('map'+ level+'sprite');
        map.addTilesetImage('tiles1');
        map.addTilesetImage('tiles2');
        map.addTilesetImage('tiles3');
        map.addTilesetImage('tiles4');
        map.addTilesetImage('tiles5');
        coinsOn = true;
        
        
        healthBar1 = game.add.sprite(game.width-10,10,'health-bar1');
        healthBar1.scale.setTo(1.3);
        healthBar1.width = -healthBar1.width;
        
        healthBar1.fixedToCamera = true;
        

        
        map.addTilesetImage('universaltiles');
        game.physics.arcade.OVERLAP_BIAS = 10;
        
        platforms = map.createLayer('platforms');
        
        background.fixedToCamera = true;
        

        map.setCollisionBetween(1, 3, true, 'platforms');
        
        map.setCollisionBetween(5, 7, true, 'platforms');
        
        map.setCollisionBetween(9, 11, true, 'platforms');
        
        map.setCollisionBetween(13, 15, true, 'platforms');
        
        map.setCollisionBetween(17, 19, true, 'platforms');
        platforms.resizeWorld();
        
        
        pogo1 = game.add.sprite(20, 400, 'pogo1');
        pogo1.animations.add('jump');
        //pogo1.x = game.width - pogo1.width - 20;
        
        sword1 = pogo1.addChild(game.make.sprite(-12,0,'sword'));
        sword1.anchor.setTo(0,0);
        
        player1 = pogo1.addChild(game.add.sprite(0,0,'ninja1'));
        player1.animations.add('jump');
        


        bullets1 = game.add.group();
        
        healthcoins = game.add.group();
        if(coinsOn)
        {
            map.createFromObjects('coins', 13, 'healthcoin', 0, true, false, healthcoins);
            healthcoins.forEach(function(e){
                e.scale.setTo(0);
            });
        }
        
        game.physics.arcade.enable([pogo1, player1, bullets1, sword1, healthcoins]);
        player1.enableBody = true;
        
        sword1.enableBody = true;
                
                

        
        pogo1.body.gravity.y = 1200;
        pogo1.enableBody = true;
        pogo1.body.collideWorldBounds = true;
        pogo1.body.bounce.y = 1.0;
        pogo1.moveUp();
        player1.moveDown();
        cursor1 = game.input.keyboard.createCursorKeys();
        
        
        
        fire1 = game.input.keyboard.addKey(Phaser.Keyboard.E);
        
        switch1 = game.input.keyboard.addKey(Phaser.Keyboard.Q);

        if(coinsOn)
        {
            coins = game.add.group();
            map.createFromObjects('coins', 23, 'coin', Math.random() * 16, true, false, coins);
            coins.forEach(function(e){
                e.scale.setTo(1.5);
                e.anchor.setTo(0.5);
                e.animations.add('shimmer');
                e.animations.play('shimmer', 10, true);
                game.physics.arcade.enable(e);
                e.enableBody = true;
            });
            coinIcon1 = game.add.image(10, 55, 'coin');
            coinIcon1.scale.setTo(1.4, .8);
            coinIcon2 = game.add.image(game.width - 10, 55, 'coin');
            coinIcon2.x = 1280 - 34.8;
            coinIcon2.scale.setTo(1.4, .8);
            console.log(coinIcon2.x);
            
            score1Text = game.add.text(game.width - 40, 50, score1, {font: '30px Arial'});
            score1Text.anchor.setTo(1, 0);
            score1Text.text = score1;
            
            score2Text = game.add.text(40, 50, score2, {font: '30px Arial'});
            score2Text.text = score2;
            
            coinIcon1.fixedToCamera = true;
            coinIcon2.fixedToCamera = true;
            score1Text.fixedToCamera = true;
            score2Text.fixedToCamera = true;
        }
        
        enemies = game.add.group();
        map.createFromObjects('enemies', 24, 'lava', 0, true, false, enemies);
        
        enemies.forEach(function(e){
            //e.scale.setTo(1.5);
            //e.anchor.setTo(0.5);
            e.animations.add('heat');
            e.animations.play('heat', 3, true);
        });
        
        map.createFromObjects('enemies', 27, 'universal', 6, true, false, enemies);
        
        enemies.forEach(function(e){
            game.physics.arcade.enable(e);
            e.enableBody = true;
        });
        
        trophy = game.add.group();
        map.createFromObjects('trophy', 36, 'trophy', 0, true, false, trophy);
        
        trophy.forEach(function(e){
            game.physics.arcade.enable(e);
            e.enableBody = true;
        });
        
        
        sword1.body.setSize(0,0,0,0);
        
        game.camera.follow(pogo1, 'STYLE_PLATFORMER');
        player1.moveRight = false;
        player1.moveLeft = false;
        player1.moveUp = false;

    },
    collectCoin1: function(player, coin)
    {
        coin.destroy();
        score1 += 10;
        score1Text.text = score1;
        
        coinCollect.play();
    },

    collectHealthCoin1: function(player, coin)
    {
        coin.destroy();
        if(health1 < 60)
        {
            health1 += 10;
            healthBar1.frame -= 1;
        }
    },

    player1fire: function()
    {
        
        if(game.time.now >= lastShot1 + 400 && health1 >= 10 && health2 >= 10)
        {
            hiya.play();
            
            if(facingleft1)
            {
                sword1.body.setSize(70, 60, 0,0);
                sword1.anchor.setTo(1, 1);
                oldX = sword1.x;
                oldY = sword1.y;
                
                sword1.x = sword1.x + sword1.width;
                sword1.y = sword1.y + sword1.height - 25;
                game.add.tween(sword1).to( { angle: -80}, 200, Phaser.Easing.Linear.None, true);
                setTimeout(function(){
                    game.add.tween(sword1).to( { angle: 0}, 200, Phaser.Easing.Linear.None, true);

                    

                }, 200);
                setTimeout(function(){
                    
                sword1.anchor.setTo(0, 0);
                sword1.x = oldX;
                sword1.y = oldY;
            sword1.body.setSize(0,0,0,0);
                },300);
            }
            else
            {
                sword1.body.setSize(-70, 60, 0,0);
                sword1.anchor.setTo(1, 1);
                oldX = sword1.x;
                oldY = sword1.y;
                
                sword1.x = sword1.x + 5;
                sword1.y = sword1.y + sword1.height + 5;
                game.add.tween(sword1).to( { angle: 80}, 200, Phaser.Easing.Linear.None, true);
                setTimeout(function(){
                    game.add.tween(sword1).to( { angle: 0}, 200, Phaser.Easing.Linear.None, true);

                    

                }, 200);
                setTimeout(function(){
                    
                sword1.anchor.setTo(0, 0);
                sword1.x = oldX;
                sword1.y = oldY;
            sword1.body.setSize(0,0,0,0);
                },300);
            }
            
            lastShot1 = game.time.now;
        }
        
    },
    //killbullets2: function(e, platform)
    //{
    //    //if(e.body.velocity.x == 0 && e.body.velocity.y == 0)
    //    //{
    //        e.destroy();
    //    //}
    //},
    healthDown1: function(player, star)
    {
        background.tint = 0xFF0000;
        setTimeout(function(){
            background.tint = 0x00ffffff;
        }, 80);
        star.destroy();
        health1 -= 10;
        healthBar1.frame += 1;
        
        huh.play();
    },

    kill1: function(pogo1, enemy)
    {
        pogo1.kill();

    },

    win1: function(pogo2, enemy)
    {
        this.game.winner = 1;
        game.state.clearCurrentState();
        game.state.start("winState");
        
        powerup.play();
    },

    boingPlay: function()
    {
        boing.play();
    },
    update: function()
    {
        
        
        
        pogo1.body.maxVelocity.y = 900;
        
        bullets1.forEach(function(e){
            game.physics.arcade.collide(e, platforms);
            if((e.body.velocity.x > -10 && e.body.velocity.x < 10) && (e.body.velocity.y > -10 && e.body.velocity.y < 10))
            {
                e.destroy();
            }
        });
        game.physics.arcade.overlap(pogo1, enemies, this.kill1, null, this);
        
        
        if(coinsOn)
        {

            game.physics.arcade.overlap(player1, coins, this.collectCoin1, null, this);
            game.physics.arcade.overlap(pogo1, coins, this.collectCoin1, null, this);
            if(health1 <= 30 || health2 <= 30)
            {
                
                healthcoins.forEach(function(e){
                    e.scale.setTo(2);
                    e.anchor.setTo(1);
                    e.animations.add('blah');
                    e.animations.play('blah', 5, true);
                    game.physics.arcade.enable(e);
                    e.enableBody = true;
                });
                

                game.physics.arcade.overlap(player1, healthcoins, this.collectHealthCoin1, null, this);
                game.physics.arcade.overlap(pogo1, healthcoins, this.collectHealthCoin1, null, this);
            }
            else
            {
                healthcoins.forEach(function(e){
                    e.scale.setTo(0);

                });
            }
        }

        

        game.physics.arcade.collide(pogo1, platforms, this.boingPlay, null, this);
    
        if(pogo1.y + pogo1.height >= game.height - 70 && pogo1.body.velocity.y > 10)
        {
            player1.animations.play('jump', 2, true);
            pogo1.animations.play('jump', 2, true);
        }
        else
        {
            if(facingleft1)
            {
                player1.frame = 1;
            }
            else
            {
                player1.frame = 2;
            }
            pogo1.frame = 1;
        }
        
        if(player1.frame == 0)
        {
            player1.body.setSize(44, 111, 0,4);
            player1.x = 11;
        }
        else if(player1.frame == 1)
        {
            player1.body.setSize(44, 114, 2, 0);
            player1.x = 8;
        }
        else if(player1.frame == 2)
        {
            player1.body.setSize(43, 114, 16, 0);
            player1.x = -5;
        }
        else if(player1.frame == 3)
        {
            player1.body.setSize(44, 111, 19,4);
            player1.x = -8;
        }
        if(pogo1.frame == 1)
        {
            //pogo1.y = 0;
            pogo1.body.setSize(56, 122, 4, 43);
        }
        else
        {
            //pogo1.y = 10;
            pogo1.body.setSize(56, 104, 4, 43);
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.A) || player1.moveLeft)
        {
            facingleft1 = true;
            pogo1.body.velocity.x = -300;
            //player1.frame = 3;
            
            sword1.x = -12;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.D) || player1.moveRight)
        {
            facingleft1 = false;
            pogo1.body.velocity.x = 300;
            sword1.x = 50;
        }
        if((game.input.keyboard.isDown(Phaser.Keyboard.W) || player1.moveUp) && pogo1.body.onFloor() && pogo1.body.velocity.y > -850 && pogo1.body.velocity.y < 850)
        {
            pogo1.body.velocity.y -= 60;
        }
        if(switch1.isDown && game.time.now >= switchdelay1 + 400)
        {
            if(weapon1 == 1)
            {
                weapon1 = 2;
                sword1.scale.setTo(1);
            }
            else if(weapon1 == 2)
            {
                weapon1 = 1;
                sword1.scale.setTo(0);
            }
            switchdelay1 = game.time.now;
        }
        if(facingleft1)
        {
            sword1.frame = 1;

        }
        else
        {
            sword1.frame = 0;

        }

        fire1.onDown.add(this.player1fire, bullets1);

        

        

        if(!pogo1.alive)
        {
            this.game.winner = 0;
            game.state.clearCurrentState();
            game.state.start("winState");
        }

        
        
        game.physics.arcade.collide(pogo1, trophy, this.win1, null, this);
    
    }
}