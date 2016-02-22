<!DOCTYPE html>

<html>
<head>
    <title>Shit Vacuum</title>
    <script src="js/phaser.min.js"></script>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body>
    <script type="text/javascript">
        var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {preload: preload, create: create, update:update});
        
        function preload()
        {
            game.load.image('vacuum', 'assets/vac.png');
            game.load.image('background', 'assets/background.png');
            game.load.image('shit', 'assets/shit.png');
            
            game.load.physics('physics', 'assets/vacuum.json');
        }
        
        var vacuum;
        function create()
        {
            game.world.setBounds(0,0,window.innerWidth, window.innerHeight);
            game.physics.startSystem(Phaser.Physics.P2JS);
            
            background = game.add.image(0,0, 'background');
            background.height = game.height;
            background.width = game.width;
            
            shit = game.add.group();
            for(var i = 0; i < 700; i++)
            {
                poop = shit.create(i*6, Math.random()*game.height, 'shit');
                poop.scale.setTo(6, 6);
            }
            
            vacuum = game.add.sprite(game.width*0.5, game.width*0.5, 'vacuum');
            vacuumTip = game.add.sprite(vacuum.x, vacuum.y, 'shit');
            game.physics.p2.enable([vacuum, shit, vacuumTip], true);
            shit.forEach(function(e){
                game.physics.p2.enable(e);
                e.body.gravity.y = 200;
            });
            vacuum.body.allowGravity = false;
            //vacuum.body.fixedRotation = true;
            vacuum.body.clearShapes();
            vacuum.body.loadPolygon('physics', 'vac');
            
            game.physics.p2.gravity.y = 0;
            game.physics.p2.restitution = 0.8;
            vacuum.body.createBodyCallback(shit, killShit, this);
            game.physics.p2.setImpactEvents(true);
            keys = game.input.keyboard.createCursorKeys();
        }
        
        function update()
        {
            shit.forEachAlive(moveShit, this);
            //game.physics.p2.collide(vacuum, shit, killShit, null, this);
            vacuum.body.allowGravity = false;
            if(keys.up.isDown)
            {
                vacuum.body.reverse(1000);
            }
            if(keys.down.isDown)
            {
                vacuum.body.thrust(1000);
            }
            if(keys.right.isDown)
            {
                vacuum.body.rotateRight(200);
            }
            if(keys.left.isDown)
            {
                vacuum.body.rotateLeft(200);
            }
            vacuumTip.x = vacuum.x;
            vacuumTip.y = vacuum.y;
        }
        function killShit(vacuum, shit)
        {
            shit.destroy();
        }
        function moveShit(shit)
        {
            accelerateToObject(shit, vacuum, 30);
        }
        function accelerateToObject(obj1, obj2, speed) {
            if (typeof speed === 'undefined') { speed = 60; }
            var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
            obj1.body.rotation = angle + game.math.degToRad(90);  // correct angle of angry bullets (depends on the sprite used)
            obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject 
            obj1.body.force.y = Math.sin(angle) * speed;
        }
    </script>


</body>
</html>
