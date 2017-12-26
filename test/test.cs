// Line comment
/* Block comment */
namespace Foo {
  class Bar: Baz {
    int? _foo;
    [Decorator()]
    void bar(int a, int b) {
      foreach(var v in [null, true, false]) {
        Foo.field.method((a, b) => {this._foo = 1;});
        this._foo = new Dictionary<string, string> {
          {"foo", new string[] {"stri\ng", 'stri\ng'}}
        }
      }
    }
  }
}
