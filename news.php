<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email entered by the user
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    // Checking if the email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email details
        $to = "news@bluemarkae.com"; 
        $subject = "New Newsletter Subscription";
        $message = "A new user has subscribed with the email: " . $email;
        $headers = "From: noreply@bluemarkae.com"; 

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            echo "Thank you for subscribing!";
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
