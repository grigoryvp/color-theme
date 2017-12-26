// Line comment
/* Block comment */
// No namespaces
class Foo extends Object {
  _foo = [1, .1, 0xa, Infinity, Math.PI];
  // No decorators
  foo(bar, baz) {
    for (const foo of [null, undefined, true, NaN]) {
      Array.prototype.push(() => {this._foo = 1})
      this._foo = {
        foo: ["stri\ng", 'stri\ng', `stri\ng ${foo}`, /reg\\exp$/]
      };
    }
  }
}
