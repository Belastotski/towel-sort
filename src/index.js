
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((val,i) => i%2? val.reverse(): val ).flat() : []
}
