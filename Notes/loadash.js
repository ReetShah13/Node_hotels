var _= require('lodash');
var data= ["person1","person1",1,2,2,4,'name','age','2'];
var filter =_.uniq(data);
console.log(filter);

console.log(_.isString(true));