<?php 

	require 'connection.php';


	$id= $_POST['id'];

	$delete = "DELETE FROM test_form WHERE id='$id'";

	$result =  $conn->query($delete);

	if($result)
	{
		echo "delete";
	}
	else
	{
		echo "ata not delete";
	}
