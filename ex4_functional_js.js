const game = {
  'suspects': [
    {
      name: 'Rusty',
      color: 'orange'
    }, {
      name: 'Ms Scarlet',
      color: 'red'
    }
  ]
}

for(let i = 0; i < game.suspects.length; ++i) {
	let suspect = game.suspects[i];
  for(let property in suspect) {
  	console.log(suspect[property]);
  }
  suspect.guilty = i % 2 == 0 ? true : false;
}
