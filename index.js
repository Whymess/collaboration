var fs = require('fs');
var parse = require('csv-parse');


let args = process.argv.slice(2);

let file = args;

const fileList = args.map((item) => {
  return item != ',' && item != '$' && item != '|'
})

const delimeter = args.map((item) => {
  return item == ',' || item == '$' || item == '|'
})

if(fileList.length !== 3 || delimeter.length !== 3){
	console.log("Please pass in correct args")
	process.exit()
}


console.log(fileList.length )
