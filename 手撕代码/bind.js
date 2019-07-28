Function.prototype.mybind =function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var F = function () {};
    F.prototype = this.prototype;
    var bound = function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return self.apply(this instanceof F ? this : context || this, finalArgs);
    }
    bound.prototype = new F();
    return bound;
}

var obj = {
    name: '若川',
};
function original(a, b){
    this.name = b;
}
var bound = original.mybind(obj, 1);
console.log(bound.prototype)
var newBoundResult = new bound(2);
console.log(newBoundResult, 'newBoundResult'); // original {name: 2}

function call(content = window){
    content.fn = this;
    let args = [...arguments].slice(1)
    let result = content.fn(...args);
    delete content.fn;
    return result;
}