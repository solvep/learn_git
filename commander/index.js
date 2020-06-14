const { program } = require('commander');

program
 .option('-d, --debug', 'output extra debugging')
 .option('-s, --small', 'small pizza size')
 .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);

// node myServer.js -c /deploy/c1/config.conf -m 20 -s 19.1 -r 12..101 -l 192.168.1.1,192.168.1.2,192.168.1.3 deploy server1