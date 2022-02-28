import chalk from "chalk"

console.log(chalk.blue('Hello world!'));

log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(error('Error!'));
console.log(warning('Warning!'));