//
//Exercise to modeling cluedo game in Javascript
//

const game = {
  murderer: {
    character: {},
    weapon: {},
    room: {}
  },
  players: [],
  discardedCardsDeck: []
}

const player = {
  name: '',
  'status': false,
  currentRoom: {}
  character: {},
  deck: [],
  anotations: []
}

const character = {
  name: '',
  colour: ''
}

const weapon = {
  name: ''
}

const room = {
  storedWeapons: []
  name: ''
}
