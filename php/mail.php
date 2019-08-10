<?php

// Jquery validation in custom.js

$name = '';
$email = '';
$msg = '';
$subject = "Message from Xlight Site"; 

if($_POST) {
	// collect all input and trim to remove leading and trailing whitespaces
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$msg = trim($_POST['message']);  
	$ip = $_SERVER['REMOTE_ADDR'];

  
	/* Change Here Your Email Address*/
	$to = "myname@email.com";

	// Prepare message
	$message = "You have received email from: ".$name.", ".$email.".<br />";
	$message .= "Message: <br />".$msg."<br /><br />";
	$message .= "IP: ".$ip."<br />";
	$headers = "From: $email \n";
	$headers .= "Reply-To: $email \n";
	$headers .= "MIME-Version: 1.0 \n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1 \n";

	// Email Sent
	if(mail($to, $subject,$message, $headers)){
		echo "ok";
	}
	// Error Message
	else{ 
		echo "ok";
	}
  
}

?>