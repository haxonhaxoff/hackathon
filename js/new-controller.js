var socket = io();
$(document).ready(function(){
    var rotation = window.orientation;
    $(window).bind('orientationchange', function() {
        rotation = window.orientation;
        if (rotation == 0 || rotation == 180) {
            $("#rotationErr").fadeIn(300);
            $("#idForm").fadeOut(300);
        }
        else if (rotation == 90 || rotation == -90 || rotation == 270){
            $("#idForm").fadeIn(300);
            $("#rotationErr").fadeOut(300);
        }
    });
    if (rotation == 0 || rotation == 180) {
        $("#rotationErr").fadeIn(300);
        $("#idForm").fadeOut(300);
    }
    else if (rotation == 90 || rotation == -90 || rotation == 270){
        $("#idForm").fadeIn(300);
        $("#rotationErr").fadeOut(300);
    }
    else if (rotation == undefined){
        document.getElementById("rotationErr").innerText = "Device Error";
        $("#idForm").fadeOut(300);
        $("#rotationErr").fadeIn(300);
    }
});
function validate(value) {
    socekt.emit("new controller", {room : value}, function(data){
        if(data.registered == true){
            $("#idForm").fadeOut(300);
            $("#rotationErr").fadeOut(300);
            $("#controller").fadeIn(300);
        }else{
            document.getElementById("error").innerText = "Room not found. Please try again.";
        }
    });
}
var game = new Phaser.Game(screen.width, screen.height, Phaser.AUTO, 'controller',{preload: preload, create: create, render: render });

function preload() {
    game.load.image('left', "../assets/controller-left.png");
    game.load.image('right', "../assets/controller-right.png");
    game.load.image('up', "../assets/controller-up.png");
    game.load.image('attack', "../assets/controller-attack.png");
    game.load.image('changeWeapon', "../assets/controller-changeWeapons.png");
}

function create() {
    game.stage.backgroundColor = '#459af8';
    
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    
    left = game.add.button(game.width /2 + 40, game.height/2 + 10, 'left', goLeft, this, 2,1,0);
    right = game.add.button(game.width /2 + 450, game.height/2 + 10, 'right', this.directions, this, 2,1,0);
    up = game.add.button(game.width /2 + 40, game.height/2 - 400, 'up', this.directions, this, 2,1,0);
    attack = game.add.button(game.width /2 - 650, game.height/2 - 400, 'attack', this.directions, this, 2,1,0);
    changeWeapon = game.add.button(game.width /2 - 860, game.height/2 -400, 'changeWeapon', this.directions, this, 2,1,0);
}
function render() {
}
function goLeft() {
    
}