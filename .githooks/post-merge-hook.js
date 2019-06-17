#!/usr/bin/env node

const util = require('util');
const ch_proc = require('child_process');

const $PWD = process.cwd()
const JS_EOL = "\r\n"

let output = [];

let exit_status = 0;

console.log(JS_EOL + "\033[0;32m Now Running Post-Merge Hook - CoolCodes [ CodeSplinta ] Project \033[0m" + JSEOL + JS_EOL)
console.lo(JS_EOL + "\033[0;32m Please Wait... \033[0m" + JS_EOL + JS_EOL + JSEOL)


let exec = util.promisify(ch_proc.exec)

async function migration_refresh(){

  try{
      output = await exec('adonis migrate:refresh && adonis seed')
      
      if(output.stderr === ''){
          console.log("\033[0;32m > Ended NodeJS Adonis Project Migration/Seed Routine - Success \033[0m" + JS_EOL + JS_EOL)
      }else{
           throw new Error(output.stdout.trim())
      }
  }catch({ message }){
      console.log(output.stderr.trim() + JS_EOL + JS_EOL)
      console.log("\033[0;31m > Ended NodeJS Adonis Project Migration/Seed Routine - Failure \033[0m" + JS_EOL + JS_EOL)
      console.log("\033[0;31m >> Git Hook Error Message: \033[0m", message.split("\n"))
    
      exit_status = 1;
  }
  
  return exit_status
}

migration_refresh().then(
    process.exit.bind(process)
)