

var playStateCoin = {
    moveTo: function(sprite,x, y, tileWidth, tileHeight)
    {
        sprite.x = (x-1) * tileWidth;
        sprite.y = (y-3) * tileHeight;
        sprite.body.bounce.y = 0.7;
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
        
        game.world.setBounds(0,-300,1280, 1020);
        background = game.add.image(0,0,'background'+ level);
        
        switch(level)
        {
            case 1:
                map = game.add.tilemap('map1sprite-coin');
                map.addTilesetImage('tiles1');
                portalX = 16;
                portalY = 1;
                portalsOn = true;
                coinsOn = true;
                break;
            case 2:
                map = game.add.tilemap('map2sprite-coin');
                map.addTilesetImage('tiles2');
                portalsOn = true;
                portalX = 15;
                portalY = 1;
                coinsOn = true;
                break;
            case 3:
                map = game.add.tilemap('map3sprite-coin');
                map.addTilesetImage('tiles3');
                portalsOn = true;
                portalX = 4;
                portalY = 1;
                coinsOn = true;
                break;
            case 4:
                map = game.add.tilemap('map4sprite-coin');
                map.addTilesetImage('tiles4');
                portalX = 6;
                portalY = 1;
                portalsOn = true;
                coinsOn = true;
                break;
            case 5:
                map = game.add.tilemap('map5sprite-coin');
                map.addTilesetImage('tiles5');
                portalX = 16;
                portalY = 1;
                portalsOn = true;
                coinsOn = true;
                break;
            default:
                map = game.add.tilemap('map1sprite-coin');
                map.addTilesetImage('tiles1');
                portalX = 16;
                portalY = 1;
                portalsOn = true;
                coinsOn = true;
                break;
        }
        

        

        
        map.addTilesetImage('universaltiles');
        game.physics.arcade.OVERLAP_BIAS = 10;
        platforms = map.createLayer('platforms');
        
        if(portalsOn)
        {
            portals = map.createLayer('portals');
            map.setCollisionBetween(6, 6,true,'portals');
        }
        map.setCollisionBetween(1, 3, true, 'platforms');
        
        pogo1 = game.add.sprite(0, 100, 'pogo1');
        pogo1.animations.add('jump');
        pogo1.x = game.width - pogo1.width - 20;
        
        sword1 = pogo1.addChild(game.make.sprite(-12,0,'sword'));
        sword1.anchor.setTo(0,0);
        
        player1 = pogo1.addChild(game.add.sprite(0,0,'ninja1'));
        player1.animations.add('jump');
        
        score1Text = game.add.text


        bullets1 = game.add.group();
        bullets2 = game.add.group();
        
        if(coinsOn)
        {
            healthcoins = game.add.group();
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
            map.createFromObjects('coins', 7, 'coin', Math.random() * 16, true, false, coins);
            coins.forEach(function(e){
                e.scale.setTo(1.5);
                e.anchor.setTo(0.5);
                e.animations.add('shimmer');
                e.animations.play('shimmer', 10, true);
                game.physics.arcade.enable(e);
                e.enableBody = true;
            });
        }
        sword1.body.setSize(0,0,0,0);
        sword2.body.setSize(0,0,0,0);
        
        game.add.image(10, 15, 'coin').scale.setTo(1.4, .8);
        coinIcon2 = game.add.image(game.width - 10, 15, 'coin');
        coinIcon2.x = 1280 - 34.8;
        coinIcon2.scale.setTo(1.4, .8);
        console.log(coinIcon2.x);
        
        score1Text = game.add.text(game.width - 40, 10, score1, {font: '30px Arial'});
        score1Text.anchor.setTo(1, 0);
        score1Text.text = score1;
        
        score2Text = game.add.text(40, 10, score2, {font: '30px Arial'});
        score2Text.text = score2;
        
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
        score1 -= 10;
        score1Text.text = score1;
        huh.play();
    },
    healthDown2: function(player, star)
    {
        background.tint = 0x0000FF;
        setTimeout(function(){
            background.tint = 0x00ffffff;
        }, 80);
        star.destroy();
        score2 -= 10;
        score2Text.text = score2;
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
            huh.play();
            score1 -= 10;
            score1Text.text = score1;
            lastHit2 = game.time.now;
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
            huh.play();
            score2 -= 10;
            score2Text.text = score2;
            lastHit1 = game.time.now;
        }

    },
    boingPlay: function()
    {
        boing.play();
    },
    update: function()
    {


        pogo1.body.maxVelocity.y = 900;
        pogo2.body.maxVelocity.y = 900;
        
        bullets1.forEach(function(e){
            game.physics.arcade.collide(e, platforms);
            if((e.body.velocity.x > -10 && e.body.velocity.x < 10) && (e.body.velocity.y > -10 && e.body.velocity.y < 10))
            {
                e.destroy();
            }
        });
        
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
    
        if(pogo1.body.onFloor())
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
        if((game.input.keyboard.isDown(Phaser.Keyboard.O) || player2.moveUp) && pogo1.body.onFloor() && pogo1.body.velocity.y > -850 && pogo1.body.velocity.y < 850 && pogo1.y > 300)
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
        if((game.input.keyboard.isDown(Phaser.Keyboard.W) || player2.moveUp) && pogo2.body.onFloor() && pogo2.body.velocity.y > -850 && pogo2.body.velocity.y < 850 && pogo2.y > 300)
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
        if(score1 >= 220 && coins.length > 0)
        {
            this.game.winner = 1;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        if(score2 >= 220 && coins.length > 0)
        {
            this.game.winner = 2;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        
        if(score1 >= score2 && coins.length <= 0)
        {
            this.game.winner = 1;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
        if(score1 < score2 && coins.length <= 0)
        {
            this.game.winner = 2;
            game.state.clearCurrentState();
            game.state.start("winState");
        }
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