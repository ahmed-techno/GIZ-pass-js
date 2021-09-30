//Full-stack web development - JS pass task solution
// Bubble sort Implementation using Javascript
var fs = require('fs');
var arr = fs.readFileSync("./data.txt", 'utf-8');

// Creating the bblSort function
function bblSort(arr){

// use (var) instead of (let) so the variables will be immutable
for(var i = 0; i < arr.length; i++){
	
// Last i elements are already in place
for(var j = 0; j < ( arr.length - i -1 ); j++){
	
	// Checking if the item at present iteration
	// is greater than the next iteration
	if(arr[j] > arr[j+1]){
		
	// If the condition is true then swap them
	var temp = arr[j]
	arr[j] = arr[j + 1]
	arr[j+1] = temp
	}
}
}

	
	
// Print the sorted array
 console.log(arr);
}

// Now pass this array to the bblSort() function
bblSort(arr);

//store it in a new file called output.txt 
fs = require('fs');
fs.writeFile('output.txt', arr, function (err) {
  if (err) return console.log(err);
 
});


