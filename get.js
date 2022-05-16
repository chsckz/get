const data = [
  {'name': 'john', 'age': 31},
  {'name': 'peter', 'age':42},
  {'name': 'emma', 'age':29}
]




function get(obj, path, [defValue]) {
  for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
      obj = obj[path[i]];
  };
  if (obj === undefined) {return defValue};
  return obj;
};