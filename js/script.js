var attempt = 3;

function bypass() {

    var username = document.getElementById("userId").value;
    var password = document.getElementById("userPassword").value;

    if (username == "user" && password == "1234") {
        alert("Login successfully");
        window.location = "log.html"; // Redirecting to other page.
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("You have left " + attempt + " attempt;");

        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("userId").disabled = true;
            document.getElementById("userPassword").disabled = true;
            document.getElementById("loginPass").disabled = true;
            return false;
        }
    }
}