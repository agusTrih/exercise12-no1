function rumusNinefive(number) {
    return number * (9 / 5);
}

function getFahrenheit(celsius) {
    return rumusNinefive(celsius) + 32;
}

function rumusNinefive(number) {
    return number - 32;
}

function getCelsius(fahrenheit) {
    return rumusNinefive(fahrenheit) * (5 / 9);
}

getFahrenheit(25);
console.log(getCelsius(1));
