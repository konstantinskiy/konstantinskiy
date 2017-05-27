<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['text'])) {$text = $_POST['text'];}

$to = "konstantinskiy@gmail.com"; /*УКАЗАТЬ СВОЙ АДРЕС!*/
$subject = 'Contacts form';
$message = "\nИмя: $name \nEmail: $email \nText: $text";
$send = mail ($to, $subject, $message, $headers);

?>