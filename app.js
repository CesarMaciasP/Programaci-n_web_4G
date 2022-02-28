import chalk from "chalk"

console.log(chalk.blue('Hello world!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(error('Error!'));
console.log(warning('Warning!'));
