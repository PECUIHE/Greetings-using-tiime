let time = 16;

function greetSomebody(name) {

    if (time < 12) {
        console.log(`Good Morning ${name}`);
    } else if (time >= 12 && time <= 16) {
        console.log(`Good Afternoon ${name}`);
    } else if (time > 16 && time <= 21) {
        console.log(`Good Evening ${name}`);
    } else if (time > 21 && time <= 24) {
        console.log(`Good Night ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greetSomebody("Peculiar");

