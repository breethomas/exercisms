function words(input) {
  var myRe = /[\w']+/g
  var clean_words = input.match(myRe)
  var clean_string = clean_words.join(" ")
  var words = clean_string.toLowerCase().split(" ");
  var counts = {};

  for (var i in words) {
    var word = words[i];
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  }
  return counts;
};

module.exports = words
