function words(input) {
  var myRe = /[\w'-]+/g
  var words = input.toLowerCase().match(myRe)
  var counts = {};

  for (var i in words) {
    var word = words[i];
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  }
  return counts;
};

module.exports = words
