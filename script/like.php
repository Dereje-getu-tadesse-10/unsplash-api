<?php
$file_name = 'database.json';

    $image_url = $_POST["url"];
    $image_mood = $_POST["mood"];
    $image_date = $_POST["date"];

    $data = array(
        'image' => $image_url,
        'mood' => $image_mood,
        'date' => $image_date
    );

    $data_array = file_get_contents($file_name);
    $data_arrays = json_decode($data_array, true);
    $data_arrays[] = $data;
    $new_data = json_encode($data_arrays);
    
    if (!file_put_contents($file_name, $new_data)) {
        echo "success";
    } else {
        echo "fail";
    }
