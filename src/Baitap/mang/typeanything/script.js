let message = "Tôi là soái ca !!";
let index = 0;

function typeSlowly() {
    event.preventDefault();

    let textarea = document.getElementById("text");

    textarea.value = message.slice(0, index + 1);

    index++;

    if (index >= message.length) {
        index = 0;
    }
}