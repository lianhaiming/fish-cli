const Metalsmith = require('metalsmith');
const chalk = require('chalk');

module.exports = function(type, src, dest, done) {
    var metalsmith = new Metalsmith(src);
    metalsmith
        .clean(true)
        .source('.')
        .destination(dest)
        .build(function(err, files) {
            if (err) done(err);
            console.log(chalk.green('~ generate success'));
            done(null);
        })
}