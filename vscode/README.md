# Memory color theme

This color theme is used by me for many years. Example of this color theme
with [Xi personal wiki markup language](https://marketplace.visualstudio.com/items?itemName=grigoryvp.language-xi):

<img src="https://raw.githubusercontent.com/grigoryvp/vscode-language-xi/master/doc/xi_illustration.png" height="256">

# Table of content

* [Color wheel](#color-wheel)
* [Color table](#color-table)
* [Colors](#color-usage)
  * [Background](#background)
  * [Foreground](#foreground)
  * [H1, keyword, tag](#heading-1)
  * [H2, callable](#heading-2)
  * [H3, property](#heading-3)
  * [H4, type](#heading-4)
  * [H5, emum, preprocessor](#heading-5)
  * [H6, number](#heading-6)
  * [String](#string)
  * [Comment, hidden](#comment)
  * [Accent](#accent)
  * [Link, dependency](#link)
* [Customization](#customization)
* [License](#license)

## Color wheel

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/color_wheel.png" width="512">

## Color table

<div style="background-color: #1a2633; display: inline-block; padding-left: 20px">
  <div style="background-color: #26394d; display: inline-block; padding: 10px;">
    <div style="color: #e6ac73;">plain text</div>
    <div style="color: #e6e600;">h1, keyword, tag</div>
    <div style="color: #00b3b3;">h2, callable</div>
    <div style="color: #ff6666;">h3, property</div>
    <div style="color: #b366ff;">h4, type</div>
    <div style="color: #ff66ff;">h5, enum, preprocessor, constant</div>
    <div style="color: #e60073;">h6, number (beware h6 and numbers!)</div>
    <div style="color: #6b8299;">comment</div>
    <div style="color: #334d66;">hidden</div>
    <div style="color: #00e6e6;">accent</div>
    <div style="color: #66b3ff;">link, dependency</div>
    <div style="color: #00e673;">string</div>
    <div style="color: #f0f0f0;">syntax elements</div>
  </div>
</div>

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

### Comment

These colors are calculated from from foreground-background pair by
manipulation saturation and value. "Hidden" color is used to dim syntax
elements that does not provide any value to a developer. Obvious example is
'<' and '>' xml tag syntax. Or various elements used to mark parts of Xi
wiki: headings, code samples, wikiwords, terms. VSCode will use "hidden"
color only if syntax is correct, so missed xml tag brace will be instantly
visible:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/js_comment.png" width="256">
<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_hidden.png" width="256">

### Accent

Accent color is a modified h2/callable with (Cyan, 180 degrees HSV) with
value increaded from 50% to 70%. Such increase make color to stand out as
a highly acidic one, handly to highlight something that is very important.
It is used in the Xi markup language for backtick highlight syntax but has
no use in the programming languages right now:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_accent.png" width="256">

### Link

Link color is a modified foregound/background color (210 degrees HSV,
located between blue and cyan) with some saturation returned to 60%:

<img src="https://raw.githubusercontent.com/grigoryvp/color-theme/master/vscode/doc/xi_link.png" width="256">

# Customization

Color scheme is customized by adding `editor.tokenColorCustomizations` dict
attribute to the VSCode configuration `json` file. The `textMateRules` list
sub-attribute specifies the list of dictionaries, where each dictionary
contains two attributes. The `scope` attribute specifies a TextMate scope
whose coloring should be changed. These names can be viewed by selecting
the "Developer: Inspect Editor Tokens and Scopes" from the VSCode tool
palette. The `settings` attribute is used to specify the new color,
decoration etc. For example, this `settings.json` VSCode config file changes
XML tags from "dimmed" to colored:

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [{
      "scope": "punctuation.definition.tag",
      "settings": {"foreground": "#66B2FF"}
    }]
  }
}
```

# License

The following licensing applies to Memory color theme:
Attribution-NonCommercial-NoDerivatives 4.0 International
(CC BY-NC-ND 4.0). For more information go to
https://creativecommons.org/licenses/by-nc-nd/4.0/
