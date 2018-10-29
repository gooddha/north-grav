<?php

$from = "mail@олц-северный.рф";

$mail_to = "gooddha@ya.ru";
$subject = "Новое обращение с сайта \"олц-северный.рф\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$additional_info = trim($_POST["additional_info"]);
$message = "Поступило обращение с сайта.\n" .
"\nИмя: $name" .
"\nТелефон: $phone" .
"\nТекст обращения: $additional_info";

mail($mail_to, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\nFrom: $from");
