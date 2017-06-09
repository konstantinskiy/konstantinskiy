<?php
if (isset($_POST['name'])){
	$name = $_POST['name'];
}
if (isset($_POST['tel'])) {
	$tel = $_POST['tel'];
}
if (isset($_POST['email'])) {
	$email = $_POST['email'];
}
if (isset($_POST['text'])) {
	$text = $_POST['text'];
}
if(isset($_POST['form-subject'])){
	$formsubject = $_POST['form-subject'];
}
if(isset($_POST['form-proposal-type'])){
	$formProposalType = $_POST['form-proposal-type'];
}
if(isset($_POST['form-proposal-price'])){
	$formProposalPrice = $_POST['form-proposal-price'];
}


if($formsubject == 'Форма - Появились вопросы по выбору дненажной системы?'){
	$subject = "Форма - Появились вопросы по выбору дненажной системы?";	
}
elseif($formsubject == 'Форма - Закажите прямо сейчас и получите скидку'){
	$subject = "Форма - Закажите прямо сейчас и получите скидку";	
}
elseif($formsubject == 'Форма - Остались вопросы'){
	$subject = "Форма - Остались вопросы";	
}
elseif($formsubject == 'Форма обратного звонка'){
	$subject = "Форма обратного звонка";	
}
elseif($formsubject == 'Форма - Вопрос менеджеру'){
	$subject = "Форма - Вопрос менеджеру";	
}
elseif($formsubject == 'Форма - Заказ дренажной системы'){
	$subject = "Форма - Заказ дренажной системы";	
}


$to = "2215115@gmail.com";
$headers = "Content-type: text/plain; charset = utf-8";
$message = "\nИмя: $name \nТелефон: $tel \nEmail: $email";

if($text){
	$message .= "\nВопрос менеджеру: $text";
}
if($formProposalType){
	$message .= "\nТип дренажной системы: $formProposalType";
}
if($formProposalPrice){
	$message .= "\nЦена: $formProposalPrice";
}

if(mail($to, $subject, $message, $headers))
	echo json_encode(['status' => 'success']);
else
	echo json_encode(['status' => 'error']);

?>