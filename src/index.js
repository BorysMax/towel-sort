
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let res = [];
  for (let i = 0; i < matrix.length; i++ ) {
    (i%2) ? res = [...res,...matrix[i].reverse()] : res = [...res,...matrix[i]];
  }    
  return res;
}
