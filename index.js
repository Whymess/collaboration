var fs = require('fs');
var parse = require('csv-parse');
var helperFunctions = require('./helpers')
pry = require('pryjs')

let args = process.argv.slice(2);

let file = args;

let output = []


// Helper functions 

const fileList = args.filter((item) => {
  return item != ',' && item != '$' && item != '|'
})


const delimeter = args.filter((item) => {
  return item === ',' || item === '$' || item === '|'
})


Array.prototype.move = function (old_index, new_index) {
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; 
};


if(delimeter.length !== 3 || fileList.length !== 3){
	  console.log("You only supplied", delimeter.length, "delimeters please make sure you have three")
	  console.log("You only supplied", fileList.length, "delimeters please make sure you have three")
}



// ####################################################



fileList.forEach((filename, index) => {
	 fs.createReadStream(filename).pipe(parse({
      delimeter: delimeter[index]
   }, (err, data) => {
   	
	   	  var campusMap = new Map();
	      campusMap.set('NYC', 'New York City');
	      campusMap.set('SF', 'San Francisco');
	      campusMap.set('LA', 'Los Angeles');

       let transformedOutput;
       let logStream;

       	switch (delimeter[index]) {
       		case ',':
		   			data.forEach((row, index) => {
		   				row.forEach((arrayIndex, index) => {
   							 if(!isNaN(Date.parse(arrayIndex))){
	   							 	if(row.indexOf(arrayIndex) !== 3){
	                     var fixedRow = row.move(row.move(3,4))
	                     output.push(fixedRow)
	                }
   							 }
		   				});
		   			}); 

	   				  transformedOutput = output.join('\n');

						  logStream = fs.createWriteStream('comma_parsed.csv', {'flags': 'a'});
						  logStream.write(transformedOutput);
						  logStream.write('\n');
       			break;
       		case '$':
						data.forEach((row, index) => {
			        row.forEach((arrayIndex, i) => {
			            let commaRemove;
			            let index;

			        	  let sf = campusMap.get('SF');
			            index = row.indexOf('SF');

			            if (index !== -1) {
			                row[index] = sf;
			            }

			            let la = campusMap.get('LA');
			            index = row.indexOf('LA');
			            if (index !== -1) {
			                row[index] = la;
			            }

			            let nyc = campusMap.get('NYC');
			            index = row.indexOf('NYC');
			            if (index !== -1) {
			                row[index] = nyc;
			            }

			            if(/\d/.test(row[i])){
			                index = row.indexOf(row[i]);
			                let transformedDate = row[i].split('-').join('/')
			                row[index] = transformedDate
			            }
			          
			            if(row[i].length === 1){
			                 index = row.indexOf(row[i]);
			                if (index > -1) {
			                   row.splice(index, 1);
			                }
			                 output.push(row)
			            }
						    })      
						})

					  transformedOutput = output.join('\n');
					  logStream = fs.createWriteStream('dollar_parsed.csv', {'flags': 'a'});
					  logStream.write(transformedOutput);
					  logStream.write('\n');

       		break;

       		case '|':
				      data.forEach((row, index) => {
				        row.forEach((arrayIndex, i) => {
				            
		            if(row[i].length === 1){
		                 index = row.indexOf(row[i]);
		                if (index > -1) {
		                   row.splice(index, 1);

		                }
		      
		                let adjustedRow = myFunctions.move(row, 3, 4)
		                let transformedDate = adjustedRow[3].split('-').join('/');
		                adjustedRow.splice(3,1,transformedDate);
		              
		             
		                output.push(adjustedRow)
			            }
					    })
					})

			    transformedOutput = output.join('\n');
				  logStream = fs.createWriteStream('pipe_parsed.csv', {'flags': 'a'});
				  logStream.write(transformedOutput);
				  logStream.write('\n');
     			break;

       		default:
       		
       		break;
       	}
   }));
});















