//Assignment

function findLargestNumber(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      alert("dhammaan numbers wey siman yihiin");
    } else {
      let maxNumber = Math.max(num1, num2, num3);
      alert("numberka ugu weyn waa: " + maxNumber);
    }
  }
  
  
  findLargestNumber(parseFloat(prompt('enter anum1')),parseFloat(prompt('enter anum1')),parseFloat(prompt('enter anum1')))