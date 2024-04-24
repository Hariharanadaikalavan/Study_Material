document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("signInEmail").value;
    var password = document.getElementById("signInPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(u) {
        return u.email === email && u.password === password;
    });   
     if (user) {
        alert("Sign in successful!");
        // Redirect to another page or perform other actions after sign in
    } else {
        alert("Invalid email or password.");
    }
});

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("signUpName").value;
    var email = document.getElementById("signUpEmail").value;
    var password = document.getElementById("signUpPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("Email already exists. Please sign in.");
    } else {
        var newUser = { name: name, email: email, password: password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign up successful! Please sign in.");
    }
});
