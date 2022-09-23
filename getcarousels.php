<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include("connection.php");
    
    $query = $mysqli->prepare("SELECT * FROM `carousels`");
    $query->execute();
    $result = $query->get_result();
    
    $response = [];

    while($a = $result->fetch_assoc()){
        $response[] = $a;
    }
    $json = json_encode($response);
    echo $json;
?>