<?php
    require 'connection.php';
    $name = $_POST['name'];
 	$email = $_POST['email'];
 	$designation = $_POST['desig'];
 	$salary = $_POST['salary'];
 	$date = $_POST['date'];  
    $id = $_POST['id'];

    $update_query = "UPDATE test_form SET name = '$name',
                      email ='$email',
                      designation ='$designation',
                      salary='$salary',
                      date = '$date' 
                      WHERE id = '$id' 
                       ";
    $response = 	$conn->query($update_query);
    if($response){
    	echo "success";
    }                  
    else{
    	echo "failed update";
    } 

?>