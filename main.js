//Assignment

function  findNumber(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      alert("dhammaan numbers wey siman yihiin");
    } else {
      let maxNumber = Math.max(num1, num2, num3);
      alert("numberka ugu weyn waa: " + maxNumber);
    }
  }
  
  
  findNumber(parseFloat(prompt('enter anum1')),parseFloat(prompt('enter anum1')),parseFloat(prompt('enter anum1')))