var math = require('./math');
// console.log(math.add(12,1));
exports.increment = function(val){
    return math.add(val,1);
}