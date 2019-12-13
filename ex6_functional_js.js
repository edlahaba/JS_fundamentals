var suspectsList = [];

var _ = {
  each(list, callback) {
    for(let i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  }
};

function createSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[1],
    speak() {console.log(`my name is ${name}`);}
  };
}

var suspects = ['Miss Scarlett','Coronel Mustard', 'Mr White'];

_.each(suspects, function(suspect) {
	suspectsList.push(createSuspectObjects(suspect));
})

suspectsList[0].speak();
