const moveZeros = (arr) => {
 let rem = [];
  arr.forEach((element, index) => {
    if (element === 0) {
     rem.push(index)
     arr.push(0)
    }
  });
  rem.forEach((element, index) => {
    arr.splice(element - index, 1)
  });
  return arr
  }
  
console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])) // returns[false,1,1,2,1,3,"a",0,0]