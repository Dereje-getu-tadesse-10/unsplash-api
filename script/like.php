<?php
$file_name = 'database.json';

if (isset($_POST['url'])) {

    $image_url = $_POST["url"];
    $image_mood = $_POST["mood"];
    $image_date = $_POST["date"];

    // get variables from ajax call and store them in variables

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
}

// if (filesize($file_name) == 0) {
//     $test = array($data);

//     $data_save = $test;
// } else {
//     $old_data = json_decode(file_get_contents($file_name), true);
//     array_push($old_data, $test);
//     $data_save = $old_data;
// }
// if (!file_put_contents($file_name, json_encode($data_save, JSON_PRETTY_PRINT, LOCK_EX))) {
//     echo "Error saving data";
// } else {
//     echo "Data saved";
// }

// $file = fopen($file_name, "w");
// file_put_contents($file_name, $json, FILE_APPEND, JSON_PRETTY_PRINT);
// fwrite($file, json_encode($data, JSON_PRETTY_PRINT));

// echo json_encode($data);

var_dump($_POST['url']);
