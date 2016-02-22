var bootState = {
    create: function()
    {
        
        var facingLeft1 = true;
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.state.start('loadState');
        
    }
}
