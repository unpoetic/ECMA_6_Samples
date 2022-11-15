let p = [[0,11], [-7, 1], [-5, -3]];

function getDistance(x1, y1, x2, y2){
 	let y = x1 - x2;
 	let x = y1 - y2;
        
	let x_ = Math.pow(x, 2);
	let y_ = Math.pow(y, 2);
        
	return Math.sqrt(x_ + y_);
}

//let's get every possible result combination for our given array
let result = p.reduce( (acc, v, i) =>
    acc.concat(p.slice(i+1).map( w => [ v + ' ' + w ])),
[]);


//go through that array, put it in an object
let coordCombs = {};

for(i = 0; i < result.length; i++) {
	let x = result[i][0].split(" ")[0].split(",");
  let y = result[i][0].split(" ")[1].split(",")
  coordCombs[i] = [x, y];
}

console.log(coordCombs);

//go through each object, make our distance calculation
//put it in an array;
let distances = [];

for(let x in coordCombs) {
	let x1 = parseInt(coordCombs[x][0][0]);
	let y1 = parseInt(coordCombs[x][0][1]);
	let x2 = parseInt(coordCombs[x][1][0]);
	let y2 = parseInt(coordCombs[x][1][1]);

	//console.log(x1, y1, x2, y2);
	let d__ = getDistance(x1,y1,x2,y2);
  
  //Let's round to the right decimal place, put it in an array;
  let roundedNum = Math.round((d__ + Number.EPSILON) * 1000000000) / 1000000000;
  //console.log(roundedNum);
  distances.push(roundedNum);
}

//find the minimum
console.log(Math.min(...distances));