#!/usr/bin/env node

const figlet = require('figlet');
const colors = require('color/safe');
const util = require('util');
const ch_proc = require('child_process');

const $PWD = process.cwd()
const JS_EOL = "\r\n"

let output = {};

// console.log(JS_EOL + "\033[0;32m Now Running Post-Merge Hook - StitchApp [ FitCabinet | FitMeasure ] Project \033[0m" + JS_EOL + JS_EOL)
console.log(colors.green.bold.underline(JS_EOL + 'Now Running Post-Merge Hook - CodeSplinta [ CoolCodes ] Project ' + JS_EOL + JS_EOL))
// console.log(JS_EOL + "\033[0;32m Ready... \033[0m" + JS_EOL + JS_EOL + JS_EOL)
console.log(colors.green.bold.underline(JS_EOL + 'Ready... ' + JS_EOL + JS_EOL + JS_EOL))

let exec = util.promisify(ch_proc.exec)
let cmdAsciiTextWriter = util.promisify(figlet);

async function npm_install_refresh(){
  
  let exit_status = 0;
  
  try {
      let _output = await exec('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD');
   
      if(output.stderr === ''){
          const isPackageJSONModified = (_output.stdout.trim().split('\n')).includes("package.json");
        
          if(isPackageJSONModified) {
              await exec('pkg_skip_preinstall="yes" npm install')
          }
      }
  }catch(ex){ 
       console.log(colors.red.bold.underline(ex.message + JS_EOL + JS_EOL));
    
       exit_status = 1;
  }
  
  return exit_status;
}

async function migration_refresh(){
  
  let exit_status = 0;
  
  try{
    
      await cmdAsciiTextWriter('StitchApp Project', { horizontalLayout: 'default', verticalLayout: 'default' });
      output = await exec('adonis migration:refresh && adonis seed')
      
      if(output.stderr === ''){
          // console.log("\033[0;32m > Ended NodeJS AdonisJS 4.1 Project Migration/Seed Routine - Success \033[0m" + JS_EOL + JS_EOL)
          console.log(colors.green.bold.underline('> Ended NodeJS AdonisJS 4.1 Project Migration/Seed Routine - Success ' + JS_EOL + JS_EOL))
      }else{
           throw new Error((typeof output.stdout === 'string' && output.stdout.trim()) || (typeof output.stderr === 'string' && output.stderr.trim()) || '')
      }
  }catch({ message }){
      console.log(message + JS_EOL + JS_EOL)
      // console.log("\033[0;31m > Ended NodeJS AdonisJS 4.1 Project Migration/Seed Routine - Failure \033[0m" + JS_EOL + JS_EOL)
    
      if (!output.stdout) {
        
          console.log(colors.red.bold.underline('> Ended NodeJS AdonisJS 4.1 Project Migration/Seed Routine - Failure ' + JS_EOL + JS_EOL))
          // console.log("\033[0;31m >> Git Hook Error Message: \033[0m", message.split("\n"))
          console.log(colors.red.bold.underline('>> Git Hook Error Message: '), message.split('\n'));
          
          exit_status = 1;
      }
  }
  
  return exit_status;
}

migration_refresh().then(function(es){
  if(es === 0){
    return npm_install_refresh();
  }
  return es;
}).then(function(_es) {
  process.exit(_es);
}).catch(function(error){
  console.error(error);
  process.exit(1)
})

/*
process.on('unhandledRejection', function(error, promise){
    console.error(error);
    process.exit(1);
});
*/
