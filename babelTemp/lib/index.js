"use strict";

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var person = {
  name: '123',
  age: '456',
  info: {
    fimaly: {
      address: 'ss',
      phone: 123
    }
  }
};

var fn = function fn() {
  var _person$info;

  var b;

  if (person !== null && person !== void 0 && (_person$info = person.info) !== null && _person$info !== void 0 && _person$info.fimaly) {
    b = person.info.fimaly;
  }

  console.log("a===>" + b);
};

var isHas = [1, 2, 3].includes(2);
var p = new Promise(function (resolve, reject) {
  resolve(100);
});