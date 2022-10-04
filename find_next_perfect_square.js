function findNextSquare(sq) {
  // Helper function to determine if a number is a perfect square
  let checkIfperfectSquare = (num) => {
    return (Math.sqrt(num) % 1 === 0 ? true : false);
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  if (!checkIfperfectSquare(sq)) {
    return -1;
  }

  sq++; // Increment sq to the next number to begin finding the next square
  while (!checkIfperfectSquare(sq)) {
    sq++;
  }
  return sq;
}


console.log(findNextSquare(121));



// let checkIfperfectSquare = (num) => {
//     if (Math.sqrt(num) % 1 === 0) {
//       return true;
//     }
//     return false;
//   };