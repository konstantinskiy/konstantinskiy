<?php

if(isset($_POST['name'])){
	$name = $_POST['name'];
}
if(isset($_POST['tel'])) {
	$tel = $_POST['tel'];
}
if(isset($_POST['email'])){
	$email = $_POST['email'];
}
if(isset($_POST['form_subject'])){
	$form_subject = $_POST['form_subject'];
}


$to = "konstantinskiy@gmail.com";
$headers = "Content-type: text/plain; charset = utf-8";
$message = "Имя: $name\n Телефон: $tel\n";
if($email){
	$message .= "\nТелефон: $email";	
}


if(mail($to, $form_subject, $message, $headers)) {
	echo json_encode(['status' => 'success']);
}
else {
	echo json_encode(['status' => 'error']);
}

?>