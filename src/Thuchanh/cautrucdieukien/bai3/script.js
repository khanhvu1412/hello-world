let userName = prompt("Who'a there? ");

if (userName == "Admin"){
    let pass = prompt("Enter password!");
    if (pass == "TheMaster") {
        alert("Welcome");
    } else if (pass == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (userName == null) {
    alert("Canceled");
} else {
    alert("I don’t know you");
}