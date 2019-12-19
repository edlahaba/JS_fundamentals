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
  return _.map(object, (listItem) => {return listItem;});
}

_.reduce = (object, callback, result) => {
  _.each(object, (item, key) => {result = callback(result, item, key)})
  return result;
}

_.curry = (callback) => {
	const savedCallback = callback;
  const savedArgs = [];
	const savedStatus = function(args) {
  	_.each(arguments, arg => {savedArgs.push(arg)});
    if (savedArgs.length == callback.length) return savedCallback(...savedArgs);
    return savedStatus;
  };
  return savedStatus;
}


