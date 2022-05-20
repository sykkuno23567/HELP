const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Snap Ticket")));
 await console.log(chalk.green.bold("."))
 await console.log(chalk.green.bold(".."))
 await console.log(chalk.green.bold("..."))

 await console.log(chalk.green.bold("Snap.."))
 await console.log(chalk.green.bold("Snap..."))

 await console.log(chalk.green.bold("Snap...."))

    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Snap Is Ready"));

}

