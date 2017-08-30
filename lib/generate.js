const Metalsmith = require('metalsmith');
module.exports = function(type, src, dest, done) {
    var metalsmith = new Metalsmith(src);
    metalsmith
        .clean(true)
        .source('.')
        .destination(dest)
        .build(function(err, files) {
            if (err) done(err);
            done(null);
        })
}