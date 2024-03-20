const qoutes = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Life is what happens when you're busy making other plans."
];


const qouteAuthor = [
    "- Steve Jobs",
    "- Robert Frost",
    "- Winston Churchill",
    "- Eleanor Roosevelt",
    "– Allen Saunders"
];


const newQoute = document.querySelector("#qouteBtn");


function generateQoute() {
    addEventListener("click", function() {
        let random = Math.floor(Math.random() * qoutes.length);
        qoute.textContent = qoutes[random];
        author.textContent = qouteAuthor[random];
    });

    alert("Welcome to this Qoute Generator! Click the button to generate a new qoute😊");
}


generateQoute();