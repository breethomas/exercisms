function anagram(subject) {
  var alpha = subject.toLowerCase().split('').sort().join('') // subject is now alphagram
  var lowSubject = subject.toLowerCase()

  return  {
    matches: function(candidates) {
      if (arguments.length > 1) {
        var cleanCans = [];
        for (var i = 0; i < arguments.length; i++) {
          if (i === 0) {
            cleanCans.push(candidates);
          }else {
            cleanCans.push(arguments[i]);
          }
        }
        candidates = cleanCans
      }
      var alphaCans = [];
      var winners = [];
      var results = [];
      for (var i = 0; i < candidates.length; i++) {
        alphaCans.push(candidates[i].toLowerCase().split('').sort().join('')); // pushing candidates transformed into alphas into alphaCans array
      }
      for (var i = 0; i < alphaCans.length; i++) {
        if (alphaCans[i] === alpha) {
          winners.push(candidates[i]);
        }
      }
      for (var i = 0; i < winners.length; i++) {
        if (winners[i].toLowerCase() !== lowSubject) {
          results.push(winners[i]);
        }
      }
      return results;
    }
  }
}

module.exports = anagram
