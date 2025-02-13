<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    // Check if the email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email details
        $to = "contact@bluemarkae.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: noreply@bluemarkae.com"; // Replace with a suitable from address

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for contacting us! Your message has been sent successfully.";
        } else {
            echo "Oops! Something went wrong. Please try again later.";
        }
    } else {
        echo "Please enter a valid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
