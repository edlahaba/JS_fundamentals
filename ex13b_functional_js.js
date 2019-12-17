var _ = {
  each(list, callback) {
    if(Array.isArray(list)){
      for(let i = 0; i < list.length; i++) {
        callback(list[i], i, list);
      }
    } else if (typeof list === 'object') {
      for (let property in list) {
        callback(list[property], property, list);
      }
    } else {
      throw 'Unknow type'
    }
  }
};

_.map = function(list, callback) {
  const arry = [];
  _.each(list, function(listItem) { arry.push(callback(listItem)); });
  return arry;
}

_.filter = function(list, callback) {
  const arry = [];
  _.each(list, function(listItem) {
    if(callback(listItem)) arry.push(listItem);
  });
  return arry;
}

_.from = object => {
  return _.map(object, (listItem) => { return listItem; });
}

_.reduce = (object, callback, result) => {
  _.each(object, (item, key) => { result = callback(result, item, key); })
  return result;
}

_.forEachRight = (object, callback) => {
  if (Array.isArray(object)) {
    _.each(object, (object, index, list) => { callback(list[(list.length - 1) - index]); });
  } else if (typeof object === 'object') {
    _.forEachRight(Object.keys(object), (property) => { callback(object[property]); });
  } else {
    throw 'Unknow type'
  }
}

_.forEachRight([1,2], (item) => { console.log(item); });
_.forEachRight({a: 1, b: 2, c: 3}, (item) => { console.log(item); });
