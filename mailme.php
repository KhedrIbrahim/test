<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/SMTP.php';


$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

$mail = new PHPMailer(true);

try {
    // Server Settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'khedribrahim999@gmail.com';
    $mail->Password = 'ffereggnqxnrxaky';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipient
    $mail->setFrom($email, $name);
    $mail->addAddress('khedribrahim999@gmail.com', 'New Form');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Email Me From Server';
    $mail->Body    = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="color-scheme:light only;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="color-scheme" content="only">
</head>
<body style="margin: 0; padding: 0px; background-color: #CFD1D2; font-family: Arial, Helvetica, sans-serif; font-family: \'Roboto\', sans-serif !important;">
        <h1>Name: '. $name .',</h1></br>
        <h1>Email: '. $email .',</h1></br>
        <div>MSG: '. $msg .',</div></br>
</body>
</html>';

    // Success Sent Email
    $mail->send();

    echo '
    <script>
        console.log("email Sned")
    </script>
    ';

} catch (Exception $e) {
    echo '
    <script>
        console.log(`Message could not be sent`)
    </script>
    ';
}


?>