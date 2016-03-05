root
//ReferenceError: root is not defined

root = {};
// Object {  }

root
// Object {  }

root.__proto__
// Object { , 15 more… }

create = function (super) { var f = function () { return this; }; f.prototype = super; return new f; };
// SyntaxError: super is a reserved identifier

create = function (base) { var f = function () { return this; }; f.prototype = base; return new f; };
// function create()

create
// function create()

typeof root
// "object"

typeof create
// "function"

create.__proto__
// function ()

a = create(root)
// Object {  }

a
// Object {  }

root.description = "Root of all"
// "Root of all"

a
// Object {  }

a.description
// "Root of all"

a.__proto__
// Object { description: "Root of all" }

a.description = "A for Apple"
// "A for Apple"

a
// Object { description: "A for Apple" }

b = create(a)
// Object {  }

b.description
// "A for Apple"

b.__proto__
// Object { description: "A for Apple" }

b.description = "B is for Boom"
// "B is for Boom"

b
// Object { description: "B is for Boom" }
