var Bob = function() {
  this.hey = function(input) {
    if(input.search(/[a-zA-Z]/) !== -1 && input.toUpperCase() === input) {
      return "Woah, chill out!";
    } else if(input[input.length - 1] === "?") {
      return "Sure.";
    } else if(input.search(/[\s+]/) === -1 || input.search(/[\s++]/) === -1) {
      return "Fine. Be that way!"
    } else {
      return "Whatever.";
    }
  }
}

exports.Bob = Bob;
