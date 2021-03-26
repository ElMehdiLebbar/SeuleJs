# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.


# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.min.js"></script>
```

🔹 At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
<div id='app'>
    > ...
</div>
```

```javascript
let app = new Seule('#app');
app.HtmlMethod()
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/pooKBaX)

Click on the "Try it Yourself" 👆 button to see how it works.


# 1️⃣ Html Methods

to use HTML Methodes you have to call **HtmlMethod()** :

#### ✨ Syntax:

```html
<element @method="event($'property' : 'value'$)"></element>
```

🔹 for exemple if you wont to add some text to heading in your project:

```html
<h1 @text="hello Seule"></h1>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/MWJKjrK)

## ↩️ Seule Selectors

### Example

🔹 Get all elements in the document with class="example":

```javascript
<button @find=".example">Hide All</button>
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/WNNYada)

More "Try it Yourself" examples below.

### Definition and Usage

Seule Selectors method returns all elements in the document that matches a specified CSS selector(s), as a static Seule object.

### ✨ Syntax

```javascript
<element @find(CSS selectors)>
```

Parameter --> CSS selectors

Type --> String

Tip: For a list of all CSS Selectors, look at w3schools [!CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)


## ↩️ Seule Event Methods

Seule is tailor-made to respond to events in an HTML page.
All HTML METHODS can have an event

### ✨ Syntax

```javascript
<element @method(event($$))>
```

### Example

To assign a click event to hide Html method, you can do this:

```javascript
<button @hide="click($$)">Hide-Me</button>
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/yLgeoGO)

## ↩️ List of html Methodes

> Style Methodes

⭐ **@style:**  set the style properties of an existing element

#### ✨ Syntax: 

```javascript
<element @style="event($'cssproperty' : 'value'$)"></element>
```
#### Example: 
Add a red color to an < h1 > element:

```javascript
<button @find="h1" @style="click($'color' : 'red'$)">Try it</button>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/abpdLNY)


⭐ **@css:**  The css HTML method sets one or more style properties for the selected elements.

#### ✨ Syntax: 

```javascript
<element @css="event($'cssproperty' : 'value', 'cssproperty2', 'value'...$)"></element>
```
#### Example: 
The following example will set a background-color and color for ALL matched elements

```javascript
<button @find="p" @css="click($'color' : '#222', 'background-color': 'white'$)">Click me</button>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/OJWMOzx)


⭐ **@classes:**  The classes HTML Property has three Methods.
1. Add    || Adds class name to an element.
1. Remove || Removes class name from an element.
1. Toggle || Toggles between a class name for an element.


#### ✨ Syntax: 

```javascript
<element @classes="event($'method': 'className'$)"></element>
```
#### Example: 
See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/QWdNbOK)


⭐ **@anime:**  Anime HtmlProperty make it possible to animate transitions from one CSS style configuration to another.


#### ✨ Syntax: 

```javascript
<element @anime="event($'cssProperty': 'value', 'cssProperty': 'value',...some others features$)"></element>
```
#### Example: 
See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/vYgGXaR)



