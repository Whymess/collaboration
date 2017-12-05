var fs = require('fs');
var parse = require('csv-parse');
var inputFile='merged.csv';

var myFunctions = require("./helpers")


var parser = parse({delimiter: ','},  (err, data) => {


	// First Transformation 
	let dataToBeSorted = [];
	data.forEach((element, index) => {
		let toStringRow = element.toString();
		 let toArray = toStringRow.split(',');	
		 dataToBeSorted.push(toArray)
	});

	let sorted = dataToBeSorted.sort(myFunctions.multiLayerSort);

	let firstOutput = sorted.join('\n');
	

	// Second Transofmration 
	let sorted = data.sort(myFunctions.alphabetical);
	let reverseTheSort	=  sorted.reverse()


	let outputTwo = []
	reverseTheSort.forEach((row, index) => {
			 let commaRemove;
			  commaRemove = row.join(' ')
			  output.push(commaRemove)
		 
	})

	console.log(outputTwo)




  let logStream = fs.createWriteStream('main.csv', {'flags': 'a'});
  logStream.write(firstOutput);

  


})




fs.createReadStream(inputFile).pipe(parser);
