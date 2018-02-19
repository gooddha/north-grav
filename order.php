<?php

$from = "mail@олц-северный.рф";

$mail_to = "gooddha@ya.ru";
$subject = "Новая заявка с сайта \"олц-северный.рф\"";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$category = trim($_POST["category"]);
$singleperson = isset($_POST["singleperson"]) ? "Да" : "Нет";
$medical = isset($_POST["medical"]) ? "Да" : "Нет";;
$date_begin = trim($_POST["begin"]);
$date_end = trim($_POST["end"]);
$additional_info = trim($_POST["additional_info"]);
$message = "Оформлена новая заявка на бронирование номера.\n" .
"\nИмя: $name" .
"\nТелефон: $phone" .
"\nКатегория номера: $category" .
"\nОдноместное размещение: $singleperson" .
"\nЛечение: $medical" .
"\nДата заселения: $date_begin" .
"\nДата выселения: $date_end" .
"\nДополнительная информация: $additional_info";

mail($mail_to, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\nFrom: $from");
