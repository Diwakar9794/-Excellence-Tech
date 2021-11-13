<?php 

	require 'connection.php';

	$name = $_POST['name'];
	$email = $_POST['email'];
	$desig = $_POST['desig'];
	$salary = $_POST['salary'];
	$date = $_POST['date'];

	$select = "SELECT email FROM test_form WHERE email='$email'";

	$select_data = $conn->query($select);

	if($select_data -> num_rows != 0 )
	{
		 echo "Email Id is already Exist";
	}
	else
	{	
		$data = "INSERT INTO test_form(name,email,designation, salary, date)
				VALUES ('$name','$email','$desig','$salary','$date')";
		$result = $conn->query($data);

		if($result)
		{
			echo "success";
		}
		else
		{
			echo "faild";
		}

	}

	




 ?>