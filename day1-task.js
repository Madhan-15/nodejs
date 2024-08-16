//79 vadhu line export ah vera mariuh panlaam....
exports.ad=(a,b) => a+b;
// const add =(a,b) => a+b;
// const sub =(a,b) => a-b;
// const multi =(a,b) => a*b;
// const divis =(a,b) => a/b;

//idha export pana dha use pana mudiuh adhuku .... module.export aprm destructure panum // aprm server.js la import panum 
//module.exports={add,sub,multi,divis} 
console.log("hello mandii")
// console.log(global)

// console.log(__dirname)
// console.log(__filename)
//const os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
//console.log(os.hostname())
// const path=require('path')
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// //mela iruka 3 uh otuka kudukum idhu...
// console.log(path.parse(__filename))

//const math = require('./math')
//console.log(math.add(1,2)) // 18,19 vera mari koda panlaa --- keelairuka mari

//const {ad,add,sub,multi,divis} =require('./math')
// console.log(add(1,2))
//import { readFile } from 'node:fs';
const fs = require('fs')
const path = require('path')

// readFile('./files/start.txt','utf8', (err, data) => {
  fs.readFile(path.join(__dirname,'files','start.txt'),'utf8', (err, data)=>{
  if (err) throw err;
  console.log(data)
  // console.log(data.toString())
  // console.log(data); //indha line buffer data kudukum number ah irukum adhuku --> data.toString()  OR readfile adhula 'utf8' usepanla
});
//exit on uncaughttt error
process.on('uncaughtException',err=>{
  console.log(`uncaught error iruku: ${err} `)
  process.exit(1)
})


fs.writeFile(path.join(__dirname,'files','write.txt'),'vanakam da mapla ', (err)=>{
  if (err) throw err;
  console.log('written !!');
});
hello everyone , madhaneey my dear MG vanakam da mapla hello everyone , madhaneey my dear MG vanakam da mapla 