const a = Number(process.argv[2]);
const b = Number(process.argv[2]);

const media = (a + b) / 2;

if (a > b) {
    console.log(`${a} é maior do que ${b}. E a média é de: ${media}`);
} else if (b > a) {
    console.log(`${b} é maior do que ${a}. E a média é de: ${media}`);
} else {
    console.log(`${a} e ${b} são iguais. E a média é de: ${media}`);
}