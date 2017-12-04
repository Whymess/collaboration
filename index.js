var fs = require('fs');
var parse = require('csv-parse');


let args = process.argv.slice(2);

let file = args;

const fileList = args.filter((item) => {
  return item != ',' && item != '$' && item != '|'
})

console.log(fileList, "fileList")

const delimeter = args.filter((item) => {
  return item == ',' || item == '$' || item == '|'
})

console.log(delimeter, "delimeter")

