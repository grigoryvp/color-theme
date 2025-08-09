// Line comment
/* Block comment */
class Foo extends Object {
  _foo = [1, .1, 0xa, Infinity, Math.PI, "", /./];
  foo(_bar: any, _baz: any): any | undefined {
    for (const foo of [null, undefined, true, NaN]) {
      Array.prototype.push();
      this._foo = ["text\n", 'text\n', `text\n ${foo}`, /reg\\exp$/];
      return {foo: this._foo};
    }
  }
}
type Type = InstanceType<typeof Foo>;
console.log("foo");
