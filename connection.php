<?php
    $hostname = 'localhost';
    $username = 'root';
    $password = '';
    $db_name = "news_db";

    $mysqli = new mysqli($hostname, $username, $password, $db_name);

    // Check connection
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }
?>