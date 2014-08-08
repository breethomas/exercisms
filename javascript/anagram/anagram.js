function alphagram(word) {
  return word.toLowerCase().split('').sort().join('');
}

function anagram(subject) {
  var alpha = alphagram(subject);
  var subject = subject.toLowerCase();

  function testAnagram(word, index, ar) {
    return alphagram(subject) === alphagram(word) && subject.toLowerCase() !== word.toLowerCase();
  }

  function findAnagram(candidates) {
    if (typeof candidates === 'string') {
      candidates = [candidates];
    }
    for (var i = 1; i < arguments.length; i++) {
      candidates.push(arguments[i]);
    }
    return candidates.filter(testAnagram);
  }

  return {matches: findAnagram}
}

module.exports = anagram
