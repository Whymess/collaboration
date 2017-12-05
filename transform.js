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
	

	// Second Trans
	let outPutTwo = data.sort(((index) => {
	    return (rowOne, rowTwo) => {
	 	var dateA = new Date(rowOne[index]), dateB = new Date(rowTwo[index]);
	   		return dateA - dateB;	
	    };
	})(3));



   let secondoutput = []
   outPutTwo.forEach( function(element, index) {
      let commaRemoved  = element.join(' ')
      secondoutput.push(commaRemoved)
   });
   
  let chunked = secondoutput.join('\n');


  // Third Transformation 
  let sortedThree = data.sort(myFunctions.alphabetical);
	let reverseTheSort	=  sortedThree.reverse()


	let outputThree = []
	reverseTheSort.forEach((row, index) => {
			 let commaRemove;
			  commaRemove = row.join(' ')
			  outputThree.push(commaRemove)
		 
	})

	let chunkedthree = outputThree.join('\n')



  let logStream = fs.createWriteStream('output1.csv', {'flags': 'a'});
  logStream.write(firstOutput);

  logStream = fs.createWriteStream('output2.csv', {'flags': 'a'});
  logStream.write(chunked);
 	

  logStream = fs.createWriteStream('output3.csv', {'flags': 'a'});
  logStream.write(chunkedthree);


})




fs.createReadStream(inputFile).pipe(parser);
