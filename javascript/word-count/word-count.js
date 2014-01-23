function wordCount() {
}

wordCount.prototype = function(input) {
  console.log(isSplit(input));
}

function isSplit(input) {
  return input.split(" ");
}

module.exports = wordCount;
