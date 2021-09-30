var fs = require('fs');
var arr_numbers = fs.readFileSync("./data.txt", 'utf-8');

console.log("Original numbers list: ", numbers)

function bubbleSort(arr_numbers){
for(var i = 0; i < arr_numbers.length; i++){
for(var j = 0; j < ( arr_numbers.length - i -1 ); j++){
	 
	if(arr[j] > arr_numbers[j+1]){
	var temp = arr_numbers[j];
	arr_numbers[j] = arr_numbers[j + 1];
	arr_numbers[j+1] = temp;
	}
}
} 
 console.log(arr_numbers);
}

  bubbleSort(arr_numbers)

