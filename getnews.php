<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    include("connection.php");
    
    $query = $mysqli->prepare("SELECT * FROM `articles`");
    $query->execute();
    $result = $query->get_result();
    
    $response = [];

    while($a = $result->fetch_assoc()){
        $response['articles'] = $a;
    }

    if(isset($response['articles'])){
        $response["success"] = true;
    }
    else{
        $response["success"] = false;
    }

    $json = json_encode($response);
    echo $json;
?>