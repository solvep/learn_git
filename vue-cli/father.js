/****************
 * child_process模块提供产生子进程的方法
 * 当有CPU密集型的任务，为了不阻塞事件循环，
 * 或者是执行一个外部命令可以，产生一个子进程，
 * 让子进程执行这个任务
 * *******************/

var childProcess = require('child_process');
var exec = childProcess.exec;

exec("ls", (err, stdout, stderr) => {
    if (err) throw err;
    console.log('-----',stdout);
});

//在父进程环境变量中加入一个新的变量，作为子进程的环境变量
var env = process.env;
env['number'] = 111; ////加入一个整型变量，子进程读取为String类型
//exec设置可选的参数
var options = {
    timeout: 10000,  //超时
    killSignal: 'SIGKILL', //超时或超出缓存发送终止信号给子进程
    env: env //子进程环境变量
};

exec("node child.js", options, (err, stdout, stderr) => {
    if (err) throw err;
    console.log("stdout: ", stdout);
    console.log("stderr: " + stderr);
});