
var playStateTrophy = {
    
    
    
    boingPlay: function()
    {
        boing.play();
    },
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
        

        map = game.add.tilemap('map'+level+'sprite');
        map.addTilesetImage('tiles1');
        map.addTilesetImage('tiles2');
        map.addTilesetImage('tiles3');
        map.addTilesetImage('tiles4');
        map.addTilesetImage('tiles5');
        portalX = 16;
        portalY = 1;
        portalsOn = false;
        coinsOn = true;
        
        healthBar2 = game.add.sprite(10,10,'health-bar2');
        
        healthBar1 = game.add.sprite(game.width-10,10,'health-bar1');
        healthBar1.scale.setTo(1.3);
        healthBar2.scale.setTo(1.3);
        healthBar1.width = -healthBar1.width;
        
        healthBar1.fixedToCamera = true;
        healthBar2.fixedToCamera = true;
        

        
        map.addTilesetImage('universaltiles');
        game.physics.arcade.OVERLAP_BIAS = 10;
        
        platforms = map.createLayer('platforms');
        
        background.fixedToCamera = true;
        
        if(portalsOn)
        {
            portals = map.createLayer('portals');
            map.setCollisionBetween(6, 6,true,'portals');
        }
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
        bullets2 = game.add.group();
        
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
        
        pogo2 = game.add.sprite(20, 100, 'pogo2');
        pogo2.animations.add('jump');
        
        sword2 = pogo2.addChild(game.make.sprite(-12,0,'sword'));
        sword2.anchor.setTo(0,0);
        
        player2 = pogo2.addChild(game.add.sprite(0,0,'ninja2'));
        player2.animations.add('jump');
        game.physics.arcade.enable([pogo2, player2, sword2]);
        player2.enableBody = true;
        
        sword2.enableBody = true;
        
        pogo2.body.gravity.y = 1200;
        pogo2.enableBody = true;
        pogo2.body.collideWorldBounds = true;
        pogo2.body.bounce.y = 1.0;
        
        cursor2 = game.input.keyboard.createCursorKeys();
        
        
        
        lastFlip = game.time.now;
        nextFlip = lastFlip + Math.random()*1000*4;
        
        fire1 = game.input.keyboard.addKey(Phaser.Keyboard.P);
        fire2 = game.input.keyboard.addKey(Phaser.Keyboard.E);
        
        switch1 = game.input.keyboard.addKey(Phaser.Keyboard.I);
        switch2 = game.input.keyboard.addKey(Phaser.Keyboard.Q);
        
        
        //for(var i = 0; i < 15; i++)
        //{
        //    coin = coins.create(i*50, 400, 'coin');
        //    coin.scale.setTo(1.5);
        //    coin.animations.add('twinkle');
        //    coin.animations.play('twinkle', 10, true);
        //}
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
        sword2.body.setSize(0,0,0,0);
        
        //game.camera.follow(pogo1, 'STYLE_PLATFORMER');
        player1.moveRight = false;
        player1.moveLeft = false;
        player1.moveUp = false;
        
        player2.moveRight = false;
        player2.moveLeft = false;
        player2.moveUp = false;
    },
    collectCoin1: function(player, coin)
    {
        coin.destroy();
        score1 += 10;
        score1Text.text = score1;
        
        coinCollect.play();
    },
    collectCoin2: function(player, coin)
    {
        coin.destroy();
        score2 += 10;
        score2Text.text = score2;
        
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
    collectHealthCoin2: function(player, coin)
    {
        coin.destroy();
        if(health2 < 60)
        {
            health2 += 10;
            healthBar2.frame -= 1;
        }
    },
    player1fire: function()
    {
        if(weapon1 == 1)
        {
            if(game.time.now >= lastShot1 + 400)
            {
                hiya2.play();
                star = bullets1.create(pogo1.x + 0.5*pogo1.width, pogo1.y + 0.3*pogo1.height, 'bullet');
                game.physics.arcade.enable(star);
                star.enableBody = true;
                star.body.gravity.y = 300;
                star.body.bounce.y = 0.5;
                if(facingleft1 == true)
                    star.body.velocity.x = pogo1.body.velocity.x-300;
                else
                    star.body.velocity.x = pogo1.body.velocity.x + 300;
                lastShot1 = game.time.now;
                
                star.animations.add('spin');
                star.animations.play('spin', 60, true);
            }
        }
        else if(weapon1 == 2)
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
        }
    },
    player2fire: function()
    {
        if(weapon2 == 1)
        {
            if(game.time.now >= lastShot2 + 400 && health1 >= 10 && health2 >= 10)
            {
                hiya2.play();
                star = bullets2.create(pogo2.x + 0.5*pogo2.width, pogo2.y + 0.3*pogo2.height, 'bullet');
                game.physics.arcade.enable(star);
                star.enableBody = true;
                star.body.gravity.y = 300;
                star.body.bounce.y = 0.5;
                if(facingleft2 == true)
                    star.body.velocity.x = pogo2.body.velocity.x-300;
                else
                    star.body.velocity.x = pogo2.body.velocity.x + 300;
                lastShot2 = game.time.now;
                
                star.animations.add('spin');
                star.animations.play('spin', 60, true);
            }
        }
        else if(weapon2 == 2)
        {
            if(game.time.now >= lastShot2 + 400)
            {
                hiya.play();
                if(facingleft2)
                {
                    sword2.body.setSize(70, 60, 0,0);
                    sword2.anchor.setTo(1, 1);
                    oldX = sword2.x;
                    oldY = sword2.y;
                    
                    sword2.x = sword2.x + sword2.width;
                    sword2.y = sword2.y + sword2.height - 25;
                    game.add.tween(sword2).to( { angle: -80}, 200, Phaser.Easing.Linear.None, true);
                    setTimeout(function(){
                        game.add.tween(sword2).to( { angle: 0}, 200, Phaser.Easing.Linear.None, true);
                    }, 200);
                    setTimeout(function(){
                        
                        sword2.anchor.setTo(0, 0);
                        sword2.x = oldX;
                        sword2.y = oldY;
                        sword2.body.setSize(0, 0, 0,0);
                    },300);
                }
                else
                {
                    sword2.body.setSize(-70, 60, 0,0);
                    sword2.anchor.setTo(1, 1);
                    oldX = sword2.x;
                    oldY = sword2.y;
                    
                    sword2.x = sword2.x + 5;
                    sword2.y = sword2.y + sword2.height + 5;
                    game.add.tween(sword2).to( { angle: 80}, 200, Phaser.Easing.Linear.None, true);
                    setTimeout(function(){
                        game.add.tween(sword2).to( { angle: 0}, 200, Phaser.Easing.Linear.None, true);

                        

                    }, 200);
                    setTimeout(function(){
                        
                        sword2.anchor.setTo(0, 0);
                        sword2.x = oldX;
                        sword2.y = oldY;
                        sword2.body.setSize(0, 0, 0,0);
                    },300);
                }
                
                lastShot2 = game.time.now;
                
            }
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
    healthDown2: function(player, star)
    {
        background.tint = 0x0000FF;
        setTimeout(function(){
            background.tint = 0x00ffffff;
        }, 80);
        star.destroy();
        health2 -= 10;
        healthBar2.frame += 1;
        
        huh.play();
    },
    swordHit1: function(player, sword)
    {
        if(game.time.now >= lastHit2 + 400)
        {
            background.tint = 0xFF0000;
            setTimeout(function(){
                background.tint = 0x00ffffff;
            }, 80);
            health1 -= 10;
            healthBar1.frame += 1;
            lastHit2 = game.time.now;
            huh.play();
        }
    },
    swordHit2: function(player, sword)
    {
        

        if(game.time.now >= lastHit1 + 400)
        {
            background.tint = 0x0000FF;
            setTimeout(function(){
                background.tint = 0x00ffffff;
            }, 80);
            health2 -= 10;
            healthBar2.frame += 1;
            lastHit1 = game.time.now;
            huh.play();
        }

    },
    kill1: function(pogo1, enemy)
    {
        pogo1.kill();

    },
    kill2: function(pogo2, enemy)
    {
        pogo2.kill();
    },
    win1: function(pogo2, enemy)
    {
        this.game.winner = 1;
        game.state.clearCurrentState();
        game.state.start("winState");
        
        powerup.play();
    },
    win2: function(pogo2, enemy)
    {
        this.game.winner = 2;
        game.state.clearCurrentState();
        game.state.start("winState");
        
        powerup.play();
    },
    update: function()
    {
        if(pogo1.alive && pogo2.alive)
        {
            if(pogo1 > pogo2)
                game.camera.focusOnXY( pogo1.x - (((pogo1.x + pogo1.width) - (pogo2.x))/2), 2000)
            else
                game.camera.focusOnXY(pogo2.x - (((pogo2.x + pogo2.width) - (pogo1.x))/2), 2000)

        }
        
        if((pogo1.x) - (pogo2.x) > game.camera.view.width - 200 && pogo1.alive && pogo2.alive)
        {
            if(pogo1.x > pogo2.x && facingleft2)
                pogo2.body.maxVelocity.x = 0;
            else
                pogo2.body.maxVelocity.x = 300;
                
            if(pogo1.x > pogo2.x && !facingleft1)
                pogo1.body.maxVelocity.x = 0;
            else
                pogo1.body.maxVelocity.x = 300;
        }
        else if((pogo2.x) - (pogo1.x) > game.camera.view.width - 200 && pogo1.alive && pogo2.alive)
        {
            if(pogo2.x > pogo1.x && facingleft1)
                pogo1.body.maxVelocity.x = 0;
            else
                pogo1.body.maxVelocity.x = 300;
                
            if(pogo2.x > pogo1.x && !facingleft2)
                pogo2.body.maxVelocity.x = 0;
            else
                pogo2.body.maxVelocity.x = 300;
        }
        else
        {
                pogo1.body.maxVelocity.x = 300;
                pogo2.body.maxVelocity.x = 300;
        }
        
        
        pogo1.body.maxVelocity.y = 900;
        pogo2.body.maxVelocity.y = 900;
        
        bullets1.forEach(function(e){
            game.physics.arcade.collide(e, platforms);
            if((e.body.velocity.x > -10 && e.body.velocity.x < 10) && (e.body.velocity.y > -10 && e.body.velocity.y < 10))
            {
                e.destroy();
            }
        });
        game.physics.arcade.overlap(pogo1, enemies, this.kill1, null, this);
        game.physics.arcade.overlap(pogo2, enemies, this.kill2, null, this);
        
        
        game.physics.arcade.overlap(player1, bullets2, this.healthDown1, null, this);
        game.physics.arcade.overlap(player2, bullets1, this.healthDown2, null, this);
        
        if(weapon2 == 2 && fire2.isDown)
        {
            game.physics.arcade.overlap(player1, sword2, this.swordHit1, null, this);
        }
        if(weapon1 == 2 &&  fire1.isDown)
        {
            game.physics.arcade.overlap(player2, sword1, this.swordHit2, null, this);
        }
        //game.physics.arcade.collide(pogo1, pogo2);
        //game.physics.arcade.collide(player1, player2);
        
        if(coinsOn)
        {
            game.physics.arcade.overlap(player2, coins, this.collectCoin2, null, this);
            game.physics.arcade.overlap(pogo2, coins, this.collectCoin2, null, this);
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
                
                game.physics.arcade.overlap(player2, healthcoins, this.collectHealthCoin2, null, this);
                game.physics.arcade.overlap(pogo2, healthcoins, this.collectHealthCoin2, null, this);
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
        bullets2.forEach(function(e){
            game.physics.arcade.collide(e, platforms);
            //game.physics.arcade.overlap(e, player1, null, true, this);
            if((e.body.velocity.x > -10 && e.body.velocity.x < 10) && (e.body.velocity.y > -10 && e.body.velocity.y < 10))
            {
                e.destroy();
            }
        });
        
        if(portalsOn)
        {
            if(game.physics.arcade.collide(pogo1, portals, null, null, this) && game.time.now)
            {
                this.moveTo(pogo1, portalX,portalY,64,64);
            }
            if(game.physics.arcade.collide(pogo2, portals, null, null, this) && game.time.now)
            {
                this.moveTo(pogo2, portalX,portalY,64,64);
            }
            game.physics.arcade.collide(pogo1, portals);
        }
        game.physics.arcade.collide(pogo1, platforms, this.boingPlay, null, this);
        game.physics.arcade.collide(pogo2, platforms, this.boingPlay, null, this);
        //game.debug.body(sword1);
        //game.debug.body(sword2);
        //game.debug.text(sword1.y, 32, 32);
    
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
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.K) || player1.moveLeft)
        {
            facingleft1 = true;
            pogo1.body.velocity.x = -300;
            //player1.frame = 3;
            
            sword1.x = -12;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.COLON) || player1.moveRight)
        {
            facingleft1 = false;
            pogo1.body.velocity.x = 300;
            sword1.x = 50;
        }
        if((game.input.keyboard.isDown(Phaser.Keyboard.O) || player2.moveUp) && pogo1.body.onFloor() && pogo1.body.velocity.y > -850 && pogo1.body.velocity.y < 850)
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
        if(switch2.isDown && game.time.now >= switchdelay2 + 400)
        {
            if(weapon2 == 1)
            {
                weapon2 = 2;
                sword2.scale.setTo(1);
            }
            else if(weapon2 == 2)
            {
                weapon2 = 1;
                sword2.scale.setTo(0);
            }
            switchdelay2 = game.time.now;
        }
        if(facingleft1)
        {
            sword1.frame = 1;

        }
        else
        {
            sword1.frame = 0;

        }
        if(facingleft2)
        {
            sword2.frame = 1;

        }
        else
        {
            sword2.frame = 0;

        }

        fire1.onDown.add(this.player1fire, bullets1);
        fire2.onDown.add(this.player2fire, bullets2);
        //if(game.time.now >= lastFlip + nextFlip)
        //{
        //    this.player1Flip();
        //}
        //player1.y = pogo1.y;
        
        
        
        if(pogo2.y + pogo2.height >= game.height - 70 && pogo2.body.velocity.y > 10)
        {
            player2.animations.play('jump', 2, true);
            pogo2.animations.play('jump', 2, true);
        }
        else
        {
            if(facingleft2)
            {
                player2.frame = 1;
            }
            else
            {
                player2.frame = 2;
            }
            pogo2.frame = 1;
        }
        
        if(player2.frame == 0)
        {
            player2.body.setSize(44, 111, 0,4);
            player2.x = 11;
        }
        else if(player2.frame == 1)
        {
            player2.body.setSize(44, 114, 2, 0);
            player2.x = 8;
        }
        else if(player2.frame == 2)
        {
            player2.body.setSize(43, 114, 16, 0);
            player2.x = -5;
        }
        else if(player2.frame == 3)
        {
            player2.body.setSize(44, 111, 19,4);
            player2.x = -8;
        }
        
        if(pogo2.frame == 1)
        {
            //pogo1.y = 0;
            pogo2.body.setSize(56, 122, 4, 43);
        }
        else
        {
            //pogo1.y = 10;
            pogo2.body.setSize(56, 104, 4, 43);
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.A) || player2.moveLeft)
        {
            facingleft2 = true;
            pogo2.body.velocity.x = -300;
            sword2.x = -12;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.D) || player2.moveRight)
        {
            facingleft2 = false;
            pogo2.body.velocity.x = 300;
            sword2.x = 50;
        }
        if((game.input.keyboard.isDown(Phaser.Keyboard.W) || player2.moveUp) && pogo2.body.onFloor() && pogo2.body.velocity.y > -850 && pogo2.body.velocity.y < 850)
        {
            pogo2.body.velocity.y -= 60;
        }
        //if(game.time.now >= lastFlip + nextFlip)
        //{
        //    this.player1Flip();
        //}
        //if(cursor1.up.isDown && pogo1.body.onFloor())
        //{
        //    pogo1.body.velocity.y = -1200;
        //    
        //}
        //else
        //{
        //    //pogo1.body.velocity.y = -400;
        //}
        if(health1 <= 1)
        {
            this.game.winner = 2;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        if(health2 <= 1)
        {
            this.game.winner = 1;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        
        if(pogo1.alive && !pogo2.alive)
        {
            this.game.winner = 1;
            game.camera.follow(pogo1, 'STYLE_PLATFORMER');
        }
        else if(!pogo1.alive && pogo2.alive)
        {
            this.game.winner = 2;
            game.camera.follow(pogo2, 'STYLE_PLATFORMER');
        }
        else if(!pogo1.alive && !pogo2.alive)
        {
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        
        
        game.physics.arcade.collide(pogo1, trophy, this.win1, null, this);
        game.physics.arcade.collide(pogo2, trophy, this.win2, null, this);
    
    },
    player1flip: function()
    {
        //pogo1.rotSpeed = 2;
        //pogo1.anchor.setTo(0.5,0.5);
        //pogo1.rotate += pogo1.rotSpeed;
        //player1.anchor.setTo(0.5,0.5);
        //player1.angle += pogo1.rotSpeed - 1;
        //if(pogo1.angle >= 170)
        //{
        //    pogo1.rotSpeed = 0;
        //    pogo1.angle = 0;
        //
        //    lastFlip = game.time.now;
        //    nextFlip = lastFlip + Math.random()*1000*4;
        //    pogo1.anchor.setTo(0,0);
        //    player1.anchor.setTo(0,0);
        //    player1.angle = 0;
        //    player1.x = 0;
        //    player1.y = 0;
        //}
        
        //game.add.tween(pogo1).to( { angle: 359 }, 1000, Phaser.Easing.Linear.None, true);
        
        //tween2 = game.add.tween(pogo1).to( { rotation: 0 }, 100, Phaser.Easing.Linear.None, true);
        
        //tween1.chain(tween2);
        
        //game.add.tween(pogo1).to( { angle: 0 }, 100, Phaser.Easing.Linear.None, true);
        
    }
}