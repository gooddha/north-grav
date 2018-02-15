<?php

$from = "monopoly.crimea@gmail.com";

$mail_to = "monopoly.crimea@gmail.com";
$subject = "Новая заявка с сайта \"олц-северный.рф\"";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$category = trim($_POST["category"]);
$singleperson = trim($_POST["singleperson"]) == "on" ? "Да" : "Нет";
$medical = trim($_POST["medical"]) == "on" ? "Да" : "Нет";;
$date_begin = trim($_POST["begin"]);
$date_end = trim($_POST["end"]);
$additional_info = trim($_POST["additional_info"]);
$message = "Был оформлен заказ на бронирование номера.\n" . "<br>" .
"\nИмя: $name" . "<br>" .
"\nТелефон: $phone" . "<br>" .
"\nКатегория номера: $category" . "<br>" .
"\nОдноместное размещение: $singleperson" . "<br>" .
"\nЛечение: $medical" . "<br>" .
"\nДата заселения: $date_begin" . "<br>" .
"\nДата выселения: $date_end" . "<br>" .
"\nДополнительная информация: $additional_info";

//mail($mail_to, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\nFrom: $from");
print $message;
