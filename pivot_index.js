/*
		@param (original array, index)
  	- helper function to count left of our current index based on input array
  	- we take in the original array and the index where we are
    - we count down left based on where we currently are
    - we then get the sum and return it
    - this is a backwards array traversal
  
*/

let countLeft = (ray, index) => {
	let totalSum = 0;
  
	for(let i = index; i >= 0; i--) {
  	totalSum += ray[i];
  }
  
  return totalSum;
}

/*
	  @param (original array, index)
  	- helper function to count right of our current index based on input array
  	- we take in the original array and the index where we are
    - we count down left based on where we currently are
    - we then get the sum and return it
    - this is a forwards array traversal
  
*/

function countRight (ray, index) {
	let totalSum = 0;
  
	for(let i = index; i < ray.length; i++) {
  	totalSum += ray [i];
  }
  
  return totalSum;
}

/*
	@param (original array)
	- This is our main function
  - we count left
  - we count right
  - we comepare
  - return appropriate value
*/

function pivotIndex(ray) {
	let totalLeft = 0;
	let totalRight = 0;
  
	for(let i = 0; i < ray.length; i++) {
  	totalLeft = countLeft(ray, i);
    totalRight = countRight(ray, i);
    
    if(totalLeft == totalRight) {
   		console.log(i);
      return i;
    }
  }
  
  return -1;
}

pivotIndex([1,7,3,6,5,6]);
