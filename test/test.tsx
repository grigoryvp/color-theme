// Line comment
/* Block comment */
class Foo extends Object {
  _foo: any = [1, .1, 0xa, Infinity, Math.PI];
  foo(bar: any, baz: any) {
    for (const foo of [null, undefined, true, NaN]) {
      Array.prototype.push();
      this._foo = {
        foo: ["stri\ng", 'stri\ng', `stri\ng ${foo}`, /reg\\exp$/]
      };
      return 10;
    }
  }
}
