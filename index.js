const colors = require('colors/safe');

let num1 = process.argv[2];
let num2 = process.argv[3];
const args = process.argv.slice(2, 4);
const regular = /^ ?[0-9]+$/

const primes = [];

if (args.length < 2) {
    console.log(colors.red(`Задайте диапазон с помощью двух чисел`));
}

if (regular.test(num1) != true || regular.test(num2) != true) {
    console.log(colors.red(`Диапазон должен содержать только положительные числа.`));
    process.exit(1);
} else {
    getPrimes(num1, num2);
}

function getPrimes(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }

    if (primes.length < 1) {
        console.log(colors.red('Простые числа отсутствуют в указанном диапазоне'))
        return
    }

    console.log(colors.green(primes[0]))

    for (let i = 1; i < primes.length; i++) {
        if (i % 3 === 0) {
            console.log(colors.green(primes[i]))
        } else if ((i - 1) % 3 == 0) {
            console.log(colors.yellow(primes[i]))
        } else if ((i + 1) % 3 == 0) {
            console.log(colors.red(primes[i]))
        }
    }
};

function isPrime(num) {
    for (let j = 2, max = Math.sqrt(num); j <= max; j++) {
        if (num % j === 0) {
            return false
        }
    }
    return num > 1
};