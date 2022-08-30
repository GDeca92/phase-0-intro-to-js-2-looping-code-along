const name = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"]

function writeCards(name, event) {
    const thankYouCards = []
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

const start = (10)
function countDown(start) {
    while (start > 0) {
        console.log(start--);
    }
    console.log(start)
}
