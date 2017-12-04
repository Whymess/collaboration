let move = (array, toBeReplaced, replacer) => {
    return array.map(function(v, k) {
        switch (k) {
        case toBeReplaced: return array[replacer];
        case replacer: return array[toBeReplaced];
        default: return v;
        }
    });
}



let alphabetical = (arrayOne,arrayTwo) => {
	    var A = arrayOne[0];
	    var B = arrayTwo[0].toLowerCase(); 
	
	     
	    A = A.toLowerCase();
	    B = B.toLowerCase();
	     
	    if (A < B) return -1;
	    if (A > B) return 1;
	    return 0;
	}


let multiLayerSort = (a, b) => {

  var o1 = a[2].toLowerCase();
  var o2 = b[2].toLowerCase();


  var p1 = a[0].toLowerCase();
  var p2 = b[0].toLowerCase();

  if (o1 < o2) return -1;
  if (o1 > o2) return 1;
  if (p1 < p2) return -1;
  if (p1 > p2) return 1;
  return 0;
}
	 
module.exports = {
   move,
   alphabetical,
   multiLayerSort
}
 