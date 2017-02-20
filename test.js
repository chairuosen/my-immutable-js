var Immutable = require('./index.js');
var foo = Immutable({a:{b:{c:1}}});
console.log('foo.a.b.c',foo.a.b.c);
foo.a.b.c = 2;
console.log('foo.a.b.c = 2');
console.log('foo.a.b.c',foo.a.b.c);