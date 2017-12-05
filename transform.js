var fs = require('fs');
var parse = require('csv-parse');
var inputFile='merged.csv';

var myFunctions = require("./helpers")


let thirdTransformation = (data) => {
   

}


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

	  console.log(firstOutput)
	   console.log("#########################################")
   		console.log("#########first Transformation###########")
    	console.log("#########################################")
	

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
  console.log(chunked)
  console.log("#########################################")
   console.log("#########Second Transformation###########")
    console.log("#########################################")





   let count = 0


	let sortedThree = data.sort(myFunctions.alphabetical);
	let reverseTheSort	=  sortedThree.reverse()


	let outputThree = []
	reverseTheSort.forEach((row, index) => {
			 let commaRemove;
			  commaRemove = row.join(' ')
			  outputThree.push(commaRemove)
		 
	})

	let chunkedthree = outputThree.join('\n')


	let chunkedThird = secondoutput.join('\n');
  console.log(chunkedThird)
  console.log("#########################################")
   console.log("#########Third Transformation###########")
    console.log("#########################################")


 
})







fs.createReadStream(inputFile).pipe(parser);
