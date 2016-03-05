/*
http://jfine-python-classes.readthedocs.org/en/latest/javascript-objects.html
*/

root = {};

// Object { }

typeof root;

// "object"

create = function (obj) {
    var f = function () { return this; };
    f.prototype = obj;
    return new f;
};

// function create()

create

// function create()

typeof create

// "function"

a = create(root);

// Object { }

typeof a

// "object"

a.name

// undefined

a.name = 5

// 5

a

// Object { name: 5 }

b = create(a)

// Object { }

b

// Object { }

b.name

// 5

a.isPrototypeOf(b)

// true

root.isProrotype(b)

// true

root.isPrototype(b)

// true

root.description = "Root of all"

// "Root of all"

root.__proto__

// Object { , 15 more… }

a.__proto__

// Object { }
//     description: "Root of all"
//   > __proto__: Object

b.__proto__

// Object { name: 5 }
//     name: 5
//   > __proto__: Object
//     description: "Root of all"
//     > __proto__: Object

