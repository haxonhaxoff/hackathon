<?php
    $name = $_POST['name'];
    $enjoy = $_POST['enjoy'];
    $why = $_POST['why'];
    $errors = $_POST['errors'];
    $why2 = $_POST['whyerrors'];
    
    $txt = "\n\nNAME: ".$name."\n\nENJOYED: ".$enjoy."\n\nWHY: ".$why."\n\nERRORS: ".$errors."\n\nWHY ERRORS: ".$why2."\n\n----------------------------------------------------------------------------";
    
    file_put_contents('feedback.txt', $txt, FILE_APPEND);
?>