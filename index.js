function theBeatlesPlay(musicians, instruments){
  var sentences = [];
  for (var i = 0; i< musicians.length; i++){
    sentences.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentences;
}
function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++){
    array[i] = array[i]+'!!!';
  }
  return array;
}
function iLoveTheBeatles(n){
  var array = [];
  do {
    array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return array;
}
