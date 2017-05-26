<?php

if (isset($_POST['tel'])){
	$tel = $_POST['tel'];
}

$to = "info@stroy-birzha.ru";
$subject = 'Форма обратного звонка';
$message = "Телефон: $tel";
$send = mail ($to, $subject, $message, $headers);

?>