"use strict";
//1
function sumTwoSmallestNumbers(...numbers) {
	if (numbers.length<2){
		console.error("Error not enough values");
		return;
	}
	numbers.sort((a, b) => a - b);
	return numbers[0]+numbers[1];
	}	 

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77));
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1));


//2
function createCalculator(numb){
	 let count=numb;
	return {
		sum: (value)=>{ 
			return count+=value;
		},
		mult: (value)=>{ 
			return count*=value;
		},
		sub:(value)=>{
			return count-=value;
		},
		div: (value)=>{
			return count/=value;
		}
	};
}

const calc = createCalculator(10)
console.log(calc.sum(5)); 
console.log(calc.mult(10)); 
console.log(calc.sub(40)); 
console.log(calc.div(10)); 