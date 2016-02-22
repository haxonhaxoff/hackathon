<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
		<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script src="../js/phaser.min.js"></script>
        <script src="../js/new-controller.js"></script>
        <link href='https://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href='style.css'>
        <title>Kung Fu Pogo Fighter</title>
    </head>
    <body>
        <div id="controller"></div>
            <p id="rotationErr">Please rotate to landscape mode.</p>
        <div id="idForm">
            <p>Please enter the game key:<br><input id="roomID" type="text"><br>
            <button id="key-submit" onClick="validate($('#roomID').val());">Submit</button><span id="error"></span></p>
        </div>
    </body>
</html>