function Bob() {
}

Bob.prototype.hey = function(input) {
  if (isShouting(input)) {
    return "Woah, chill out!";
  } else if(isQuestioning(input)) {
    return "Sure.";
  } else if(isSilence(input)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};

function isShouting(input) {
  return (input.toUpperCase() === input && /[A-Z\xdc]/.test(input));
}

function isQuestioning(input) {
  return (input[input.length - 1] === "?");
}

function isSilence(input) {
  return (input.trim() === "");
}

module.exports = Bob;


//function Jane(age = 32) {
//this.age = age
//}
//Jane.prototype.isGolden = function() {
//  this.age >= 50
//}
//
//
//j = new Jane(50)
//j.age == 50
//j.isGolden() == true
//
//
//class Jane
//  attr_reader :age
//  def initialize(age = 32)
//    @age = 32
//  end
//
//  def is_golden?
//    @age >= 50
//  end
//end
//
//j = Jane.new(50)
//j.age == 50
//j.is_golden? == true
