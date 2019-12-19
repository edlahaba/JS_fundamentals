const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

console.time('Function #1');
formatted_rooms = _.map(newDevelopment, (suspect) => {
  return _.reduce(suspect.rooms, (result, room, key) => {
    result = result || {};
    result[Object.keys(room)[0]] = room[Object.keys(room)[0]];
    return result;
}, {})
});

_.each(Object.keys(formatted_rooms[0]), (room_type) => {
  if(_.groupBy(formatted_rooms, room_type).false.length == formatted_rooms.length ) {console.log(room_type)}
});
console.timeEnd('Function #1');

console.time('Function #2');
const notInRoom = suspect => {
  const emptyRooms = _.reduce(suspect.rooms, (room, memo) => {
    if(room === false) memo.push(room);
    return memo;
  }, [])

  return emptyRooms;
};

notInRooms = _.map(newDevelopment, notInRoom);

console.log(_.intersection(...notInRooms));
console.timeEnd('Function #2');

