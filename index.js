// add solution here
function theBeatlesPlay(musicians,instruments){
  var  array = [];
  for (i = 0; i< musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var newSentence = musician + 'plays' + instrument+'.';
    array.push(newSentence)

  }
}
