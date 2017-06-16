/**
 * Original: http://www.crockford.com/javascript/inheritance.html
 * Comment: http://www.becauserobots.com/post/8341209487/swiss-inheritance-design-pattern-in-non-classical 
*/
Function.method('swiss', function (parent) {
    for (var i = 1; i < arguments.length; i += 1) {
        var name = arguments[i];
        this.prototype[name] = parent.prototype[name];
    }
    return this;
});
