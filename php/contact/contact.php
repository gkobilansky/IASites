 <?php
/*
* IA Sites - Websites that convert
* Version: 1.1
* Copyright 2014
* Created by: Lanckey
* URL: http://lancekey.com
* Designed and built based on Twitter Bootstrap 3.  
*/
error_reporting(E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if ($post) {
    //here includes your email
    $admin_email = 'genek149@gmail.com';
    $name        = stripslashes($_POST['name']);
    $email       = trim($_POST['email']);
    $subject     = stripslashes($_POST['subject']);
    $message     = stripslashes($_POST['message']);
    $phone      = stripslashes($_POST['phone']);
    
    $message .= '<br><br> ' . $phone .' '. $subject . ' <b>New contact from IA Sites</b>';
    
    
     $error = (($name == '') || ($email == '') || ($subject == '') || ($message == '') || ($phone == '')) ? true : false;
    
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= "From: " . $name . " <" . $email . ">\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    
    if (!$error) {
        $mail = mail($admin_email, $subject, $message, $headers);
        
        
        if ($mail) {
            echo '<div class="alert alert-success">The message was sent</div>';
        } else {
            echo '<div class="alert alert-danger">The message was not sent</div>';
        }
    } else {
        echo '<div class="alert alert-danger">' . $error . '</div>';
    }
}
?> 