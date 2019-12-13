const brokenWeapons = ['revolver', 'lead pipe', 'candle stick'];

var _ = {
  each(list, callback) {
    for(let i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  }
};

_.map = function(list, callback) {
  let arry = [];
  _.each(list, function(listItem) { arry.push(callback(listItem)); });
  return arry;
}

const makeBroken = function(weapon) {
  return `broken ${weapon}`;
}

console.log(_.map(brokenWeapons, makeBroken));
