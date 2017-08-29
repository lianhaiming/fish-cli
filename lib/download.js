const download = require('download-git-repo');
// 加载样式
const ora = require('ora');
const chalk = require('chalk');
const exists = require('fs').existsSync;
const rm = require('rimraf').sync;
/**
 * 
 * @param tmp 远程模板路径
 * @param to 生成项目文件路径
 * @param fn 回调函数
 */

module.exports = function(remoteT, localT, done) {
    if (exists(localT)) rm(localT);
    var spinner = ora('download');
    spinner.start();
    download(remoteT, localT, { clone: 'clone' }, function(err) {
        if (err) done && done(err);
        console.log();
        console.log(chalk.green('~ get project success'));
        spinner.stop();
        done && done(null);
    })
}