"use strict";
import program from 'commander';
import {VERSION} from './utils/constants';
import apply from './index';
import chalk from 'chalk'

let actionMap = {
    init: {
        description:'generate a new project from a template',
        usages: [
            'llj init templateName projectName'
        ]
    },
    config:{
        alias:'cfg',
        description:'config .lljrc',
        usages:[
            'llj config set <k> <v>',
            'llj config get <k>',
            'llj config remove <k>'
        ]
    }
}
Object.keys(actionMap).forEach((action) =>{
    program.command(action)
    .description(actionMap[action].description)
    .alias(actionMap[action].alias)
    .action(() =>{
        switch (action) {
            case 'config':
                apply(action,...process.argv.slice(3))
                break;
            case 'init':
                apply(action,...process.argv.slice(3))
                break;
            default:
                break;
        }
    })
})

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach((action) => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}
program.usage('<command> [options]');
// llj -h 
program.on('-h', help);
program.on('--help', help);
// llj -V   VERSION 为 package.json 中的版本号
program.version(VERSION, '-V --version').parse(process.argv);

// llj 不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green);
}
function make_green(txt) {
    return chalk.green(txt); 
}

