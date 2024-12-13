// script.js
function showResponse(answer) {
    const messageElement = document.getElementById('response-message');
    if (answer === 'yes') {
        messageElement.textContent = "Yay! You made me the happiest person!";
    } else {
        messageElement.textContent = "Oh no! I'll still cherish our friendship!";
    }
}
