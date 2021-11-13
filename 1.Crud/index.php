<!DOCTYPE html>
<html>

<head>
	<title>ASAP</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
	<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/	toastr.js"></script>


</head>

<body>


	<div class="container">
	
		<div class="row">
			<div class="col-md-6 welcome-image">

			</div>
			<div class="col-md-6">
					<h3 class="text-center">Registration From</h3>
				<form class="test-form">
					<div class="form-row">
						<div class="form-group col-md-6">
							<label>NAME</label>
							<input type="text" name="name" class="form-control required" placeholder="NAME">
						</div>
						<div class="form-group col-md-6">
							<label>EMAIL</label>
							<input type="email" name="email" class="form-control required email-val" placeholder="EMAIL">
						</div>

					</div>
					<div class="form-group">
						<label>DESIGNATION</label>
						<input type="text" name="desig" class="form-control required" placeholder="DESIGNATION">
					</div>

					<div class="form-row">
						<div class="form-group col-md-6">
							<label>SALARY</label>
							<input type="number" name="salary" class="form-control required" placeholder="SALARY">
						</div>
						<div class="form-group col-md-6">
							<label>DATE</label>
							<input type="date" name="date" class="form-control required" placeholder="DATE">

						</div>

					</div>


					<div class="form-row">
						<div class="form-group col-md-6">
							<label>Captch</label>
							<input type="text" name="captcha1" disabled id="demo" class="captcha fonts">
							<i class="fas fa-sync-alt refresh" title="Refresh"></i>
						</div>
						<div class="form-group col-md-6">
							<label hidden>Captcha</label>
							<input type="text" name="captcha" class="form-control input-field required " id="demo1">
						</div>

					</div>

					<button type="submit" class="btn btn-primary submit">SUBMIT</button>
				</form>
			</div>
		
	</div>


	<div class="container mt-5">
		<h2>Record</h2>
		<div class="row">
			<div class="col-md-12 table-responsive">
				<table class="table table-striped">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">NAME</th>
							<th scope="col">EMAIL</th>
							<th scope="col">DESIGNATION</th>
							<th scope="col">SALARY</th>
							<th scope="col">DATE</th>
							<th scope="col">STATUS</th>


						</tr>
					</thead>
					<tbody>
						<?php

						require 'connection.php';

						$select = "SELECT * FROM test_form";

						$response = $conn->query($select);

						if ($response->num_rows != 0) {
							foreach ($response as $value) {
						?>
								<tr>
									<td><?php echo $value['id']; ?></td>
									<td><?php echo $value['name']; ?></td>
									<td><?php echo $value['email']; ?></td>
									<td><?php echo $value['designation']; ?></td>
									<td><?php echo $value['salary']; ?></td>
									<td><?php echo $value['date']; ?></td>
									<td><a href="editData.php?id=<?php echo  $value['id']; ?>" class="btn btn-info edit">EDIT</a> <button value="<?php echo $value['id']; ?>" class="btn btn-danger delete">DELETE</button></td>
									<!-- <td></td> -->
								</tr>
						<?php
							}
						}

						?>

					</tbody>
				</table>
			</div>
		</div>
	</div>

</body>

</html>