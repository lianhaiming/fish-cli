const chalk = require('chalk');

function fail(err) {
    if (err) {
        console.log();
        console.log(chalk.red(err));
        process.exit(1);

    }
}

module.exports = {
    fail
}