function compute(s1, s2) {
  var a1 = s1.split(''),
      a2 = s2.split(''),
      a1length = a1.length,
      a2length = a2.length,
      diff = 0;

  var shortest = a1length > a2length ? a2length : a1length;

  for(var i = 0 ; i < shortest ; i++) {
    if( a1[i] !== a2[i] ) {
      diff++;
   }
  }

  return diff;
}

module.exports = {compute: compute};
