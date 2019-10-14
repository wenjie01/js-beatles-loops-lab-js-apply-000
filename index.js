// add solution here
function theBeatlesPlay(musicians,instruments){
  var  array = [];
  for (var i = 0; i< musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var newSentence = musician + ' plays ' + instrument;
    array.push(newSentence);
  }
  return array;
}


function johnLennonFacts(){
  var fact = [];
  var i = 0;
  while (i < facts.length){
    var newFact = facts[i]+ '!!!';
    fact.push(newFact);
    i++;
  }
  return fact;
}
