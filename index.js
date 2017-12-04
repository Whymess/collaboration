var fs = require('fs');
var parse = require('csv-parse');
var helperFunctions = require('./helpers')

let args = process.argv.slice(2);

let file = args;


const fileList = args.filter((item) => {
  return item != ',' && item != '$' && item != '|'
})

const delimeter = args.filter((item) => {
  return item === ',' || item === '$' || item === '|'
})


fileList.forEach((filename, index) => {
	 fs.createReadStream(filename).pipe(parse({
      delimeter: delimeter[index]
   }, (err, data) => {
   	    let output = []
       	switch (delimeter[index]) {
       		case ',':
		   			data.forEach((row, index) => {
		   				row.forEach((element, index) => {
	   							console.log(output)
		   				});
		   			});

       			break;

       		case '$':
       			console.log('dollar')
       			break;

       		case '|':
       			console.log('comma')




       			break;
       		default:
       			// statements_def
       			break;
       	}











   }));
});










