# Memory color theme

This color theme is used by me for many years. Example of this color theme
with "Xi" personal wiki markup language:

<img src="https://raw.githubusercontent.com/grigoryvp/vscode-language-xi/master/doc/xi_illustration.png" height="256">

## Color table

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/color_table.png" width="256">

## Color wheel

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/color_wheel.png" width="512">

## Color usage

### Background

Taken long time ago from the code sample on the Ruby programming language
[homepage](https://www.ruby-lang.org/en/) and modified a bit to fit into
`HSV` round values. On the HSV color wheel the color is located between blue
and cyan (210 degrees) and has no distinctive name as far as I know.
Saturation is decreased to 50% and value is decreased to 30%.

### Foreground

As with all color themes it's complimentary to background. Appears to be
a nice shade of sand and reminds me old "Yellow on blue" Norton Commander
color theme, just not **that** bright.

### Heading 1

The color theme is tailored towards Xi markup language and should make
6 levels of headers to stand out from plain text, code smaples, terms and
highlights. The first color is yellow (60 degrees HSV color wheel) with
a value slightly reduced to 90%. For programming languages it's used to
mark common things that stand out: keywords and tag names:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h1.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h1.png" width="256">

### Heading 2

Second color is a cyan (180 degrees HSV) with value decreaded to 70%, making
it less bright. Like yellow for h1, this color is completely different from
foreground color while not being as acid as magenta or red. For programming
lagnugae it's used to mark second common thing that stand out: different
kinds of callables, both declaration and reference. This includes functions,
methods, named code blocks and so on:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h2.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h2.png" width="256">

### Heading 3

From third color it's starting to be complicated. The only one non-toxic
"pure" color remaining is green. We can use it for 3-rd most popular syntax
element in programming languages, property access. But that leaves another
element, strings. Which is rarely used in mose of the code (as software
developers we tend to avoid hardcoding number and strings), but then it's
**JSON**. And heredoc. That are near completely string. So green should be
reserved for strings and we are left with a color known as "desaturated red"
(0 degrees HSV, saturation reduced to 60%, making it more orange then red).
This color a lot like foreground color (which is actual orange at 30 degrees
HSV but that looks more like sand due to low saturation set to 50%) but
still can be easilty distinguides from it and looks really nice in 'foo.bar'
combinations where 'foo' is a foreground identifier color and 'bar' is a
heading 3 property access color:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h3.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h3.png" width="256">

### Heading 4

With all non-acide pure colors used and green reserved for strings, we are on
an unsteady ground now. Violet color, located between blue and magenta
(270 degrees HSV) looks less acidic among remaining colors, especially if
saturations is reduced to 60%. For programming languages it is used for
types: both language-defined like 'String' and user-defined like 'Foo' in
'class Foo':

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h4.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h4.png" width="256">

### Heading 5

Only magenta and red remains. Among the two of them magents (300 degrees HSV)
looks less acidic, with saturation reduced to 60%. For programming languages
it is used for all kind of constants: enum values, preprocessor directives
and so on. Note, that identifier declared with 'const' keyword are
highlighted with this color, since they **usage** in the code is same as
normal identifier. Normally we see little magenta in our code for things
like 'PI' in 'Math.PI':

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h5.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h5.png" width="256">

### Heading 6

From my personal experience using Xi personal wiki for more than 10 years
there are no real need for more than 6 nested header levels (after all,
Miller's purse size is 4-5 according to the latest neurophysiology research).
Last 'pure' color is purple, located between red and magenta (330 degrees
HSV) with value reduced a bit to 90% in order to make it less acidic, but
still visible and distinct from other colors. For programming languages it is
used for numbers, since it's bad practice to use "magic numbers" in our code
and it's good if they stand out:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_h6.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_h6.png" width="256">

### String

As previously mentioned, this green color (150 degrees HSV) is used to
highlight strings in different programming languages and terms like '|foo|'
in Xi wiki markup. Value is slightly reduced to 90% to make it less bright:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_string.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_string.png" width="256">
