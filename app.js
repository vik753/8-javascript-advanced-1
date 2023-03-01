'use strict';

let weatherMap = new Map([
	['London', 10],
	['Kyiv', 7],
	['Paris', 14]
]);

weatherMap = new Map([...weatherMap].map(v => v.reverse()))

console.log(weatherMap);
