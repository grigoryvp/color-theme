# line comment
=begin
block comment
=end
class Foo < Bar
  def foo
    @bar = 1
    @@bar = 2
    $baz = 3
    CONST = 4
    Foo.property.method()
    _map = {
      :foo => 1,
      "bar" => 2
    }
    _seq = [true, false]
  end
end
