// Line comment
/* Block comment */
class Foo extends Object {
  _foo = [1, .1, 0xa, Infinity, Math.PI];
  foo(bar, baz) {
    bar = baz = 1
    for (const foo of [null, undefined, true, NaN]) {
      Array.prototype.push();
      this._foo = {
        foo: ["stri\ng", 'stri\ng', `stri\ng ${foo}`, /reg\\exp$/]
      };
      return 10;
    }
  }
}
