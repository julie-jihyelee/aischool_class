// 모듈 가져오기 위한 명령어 : require()

const {odd,even} = require('./var');

let num = 4;
let result = (num%2 === 0) ? even : odd
console.log(num+'은(는) '+result)

const {test} = require('./var');
console.log(test)