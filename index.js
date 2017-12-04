var fs = require('fs');
var parse = require('csv-parse');


let args = process.argv.slice(2);

let file = args;

const fileList = args.filter((item) => {
  return item != ',' && item != '$' && item != '|'
})

const delimeter = args.filter((item) => {
  return item == ',' || item == '$' || item == '|'
})


if(fileList.length !== 3){
	console.log("Please enter 3 source files")
} 

if(delimeter.length !== 3){
	console.log("Please enter 3 delimeters")
}

if(delimeter.length === 3 && fileList.length === 3){
	console.log(fileList, "fileList")
    console.log(delimeter, "delimeter")
}




// console.log(fileList[0], "files")

// if(fileList.length !== 3 || delimeter.length !== 3){
// 	console.log("Please pass in correct args")
// 	process.exit()
// }



// fileList.forEach((file, index) => {
//    const fileDelimeter = delimeter[index];
//    console.log(fileDelimeter)
//    // fs.createReadStream(file).pipe(parse({
//    //    delimeter: fileDelimeter
//    // }, (err, data) => {
//    //     console.log("error");
//    // }));

// });
