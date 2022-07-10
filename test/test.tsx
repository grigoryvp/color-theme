// Line comment
/* Block comment */
class Foo2 extends Object {
  _foo = [1, .1, 0xa, Infinity, Math.PI, "", /./];
  foo(bar: any, baz: any) {
    for (const foo of [null, undefined, true, NaN]) {
      Array.prototype.push();
      this._foo = ["stri\ng", 'stri\ng', `stri\ng ${foo}`, /reg\\exp$/];
      return {foo: this._foo};
    }
  }
}
console.log("foo");
