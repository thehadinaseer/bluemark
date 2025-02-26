<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $description = htmlspecialchars($_POST['description']);
    $resume = htmlspecialchars($_POST['resume']);

    $to = "careers@bluemarkae.com";
    $subject = "New Job Application from $name";
    $message = "
    <html>
    <head>
        <title>New Job Application</title>
    </head>
    <body>
        <h2>Job Application Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Why they're a good fit:</strong> $description</p>
        <p><strong>Resume Link:</strong> <a href='$resume'>$resume</a></p>
    </body>
    </html>";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@bluemarkae.com" . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Application submitted successfully!";
    } else {
        echo "Failed to send application.";
    }
} else {
    echo "Invalid request.";
}
?>
