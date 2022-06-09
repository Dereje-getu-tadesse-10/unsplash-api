<?php
$file_name = 'database.json';

$image_id = $_POST['id'];
$image_url = $_POST["url"];
$image_mood = $_POST["mood"];
$image_date = $_POST["date"];

var_dump($image_id);

$data = array(
    'id' => $image_id,
    'image' => $image_url,
    'mood' => $image_mood,
    'date' => $image_date
);


$data_array = file_get_contents($file_name);
$data_arrays = json_decode($data_array, true);
$data_arrays[] = $data;
$new_data = json_encode($data_arrays, JSON_PRETTY_PRINT);



// check if image id already exists in database and if it does, update it
$id_exists = false;

foreach ($data_arrays as $key => $value) {

    if ($value['id'] == $image_id) {
        $id_exists = true;
        echo "id exists";
    }else{
        echo $image_d;
        $id_exists = false;
        echo "id does not exist";
    }
}


// if(!file_put_contents($file_name, $new_data)) {
//     echo 'good';
// }else{
//     echo 'bad';
// }

//  if(!file_put_contents($file_name, $new_data)) {
//     // verify if image id is already exist or not
//     $data_array = file_get_contents($file_name);
//     $data_arrays = json_decode($data_array, true);
//     foreach ($data_arrays as $key => $value) {
//         if ($value['id'] == $image_id) {
//             echo "Image id already exist";
//         }
//     }
//     echo "Image id not exist";
// } else {
    
// }
