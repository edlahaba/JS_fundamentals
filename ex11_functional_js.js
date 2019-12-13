var _ = {
  each(list, callback) {
    if(Array.isArray(list)){
      for(let i = 0; i < list.length; i++) {
        callback(list[i]);
      }
    } else if (typeof list === 'object') {
      for (let property in list) {
        callback(list[property]);
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

const sum = function (a,b) {
	console.log(arguments)
  console.log(_.from(arguments))
}

sum(4,2);
