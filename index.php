<!DOCTYPE html>

<html>
<head>
    <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    <script src="js/new-room.js"></script>
    <script src="js/phaser.min.js"></script>
    <script src="js/boot.js"></script>
    <script src="js/load.js"></script>
    <script src="js/menu.js"></script>
    
    <script src="js/play-1v1.js"></script>
    <script src="js/play-coin.js"></script>
    <script src="js/play-storm.js"></script>
    <script src="js/play-trophy.js"></script>
    <script src="js/play-trophy1p.js"></script>
    
    <script src="js/win.js"></script>
    <script src="js/game.js"></script>
    <link rel="stylesheet" href="style.css">
    <link href='https://fonts.googleapis.com/css?family=Oswald:400,700' rel='stylesheet' type='text/css'>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
    </style>
   <script>
        var feedBack = false;
        function ajaxSubmit()
        {
            if(feedBack)
            {
                if($("#name").val() != "")
                {
                    $.post('feedback.php', {name: $("#name").val(), enjoy: $("#enjoy").val(), why: $("#why").val(), errors: $("#errors").val(), whyerrors: $("#why-errors").val()});
                    feedBack = false;
                }
            }
        }
    </script>
    <title>Kung Fu Pogo Fighter</title>
</head>

<body>
    <h1><img src="assets/logo.png" alt="hax on hax off logo"></h1>
    <div id="feedback">
        <h1 id="form-title">Feedback</h1>
        <form method="post">
            Name:    <input type="text" name="name" id="name"><br><br>
            Did You Enjoy The Game?&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <select name="enjoyed" id="enjoy">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select><br><br>
            Please Explain: <input type="text" name="why" id="why"><br><br>
            Did Experience Any Errors/Glitches?&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <select name="errors" id="errors">
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select><br><br>
            Please Explain: <input type="text" name="why" id="why-errors"><br><br>
            <input type="submit" onclick="ajaxSubmit()" id="submit"><button id="cancel" onClick="$('#feedback').fadeOut(300); $('canvas').fadeIn(300); feedBack = false;">Cancel</button>
        </form>
    </div>
    <footer>
        <h2>Visit this site on your phone to use it as a controller! Your code is: <span id="room-code"></span></h2>
        <button onclick="$('#feedback').fadeIn(300); $('canvas').fadeOut(300); feedBack = true;" id="feedback-button">Give Feedback</button>

        <a href="https://www.koding.com"><img id="hackathon" src="assets/koding-logo.png" alt="hackathon Logo"></a>
        <a href="info"><img id="hax" src="assets/hax-logo2.png" alt="hax on hax off Logo"></a>
        <a href="https://www.hacksummit.org"><img id="summit" src="assets/summit-logo.png" alt="Hackathon Logo"></a>
    </footer>

</body>
</html>