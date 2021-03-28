![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.dist.js"></script>
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

<br>

# 1️⃣ Html Methods

to use HTML Methodes you have to call **HtmlMethod()** :

#### 〽️ Syntax:

```html
<element @method="event($'property' : 'value'$)"></element>
```

🔹 for exemple if you wont to add some text to heading in your project:

```html
<h1 @text="hello Seule"></h1>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/MWJKjrK)

<br>

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

### 〽️ Syntax

```javascript
<element @find(CSS selectors)>
```

Parameter --> CSS selectors

Type --> String

Tip: For a list of all CSS Selectors, look at w3schools [!CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)

<br>

## ↩️ Seule Event Methods

Seule is tailor-made to respond to events in an HTML page.
All HTML METHODS can have an event

### 〽️ Syntax

```javascript
<element @method(event($$))>
```

### Example

🔹 To assign a click event to hide Html method, you can do this:

```javascript
<button @hide="click($$)">Hide-Me</button>
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/yLgeoGO)

<br>

## ↩️ List of html Methodes

> Style Methodes

### ⭐ **@style:** 

set the style properties of an existing element

#### 〽️ Syntax: 

```javascript
<element @style="event($'cssproperty' : 'value'$)"></element>
```
#### Example: 
Add a red color to an < h1 > element:

```javascript
<button @find="h1" @style="click($'color' : 'red'$)">Try it</button>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/abpdLNY)

<br>

### ⭐ **@css:**  

The css HTML method sets one or more style properties for the selected elements.

#### 〽️ Syntax: 

```javascript
<element @css="event($'cssproperty' : 'value', 'cssproperty2', 'value'...$)"></element>
```
#### Example: 
🔹 The following example will set a background-color and color for ALL matched elements

```javascript
<button @find="p" @css="click($'color' : '#222', 'background-color': 'white'$)">Click me</button>
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/OJWMOzx)

<br>

### ⭐ **@classes:**  

The classes HTML Property has three Methods.

1. Add    || Adds class name to an element.
1. Remove || Removes class name from an element.
1. Toggle || Toggles between a class name for an element.


#### 〽️ Syntax: 

```javascript
<element @classes="event($'method': 'className'$)"></element>
```
#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/QWdNbOK)

<br>

### ⭐ **@anime:**  

Anime HtmlProperty make it possible to animate transitions from one CSS style configuration to another.


#### 〽️ Syntax: 

```javascript
<element @anime="event($'cssProperty': 'value', 'cssProperty': 'value',...some others features$)"></element>
```
#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/vYgGXaR)

<br>

### ⭐ **@visible:**  

The visible HtmlProperty sets whether an element should be visible.


#### 〽️ Syntax: 

```html
<element @visible></element>
```
#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/VwPamgO)

<br>

#### ⭐ **@show & @hide:**  

With Seule HTML METHODS, you can hide and show HTML elements with the @hide and @show methods:

* Show HtmlMethod shows the hidden, selected elements.
* Hide HtmlMethod hides the selected elements.


#### 〽️ Syntax: 

```html
<element @show></element>
<element @hide></element>
```

#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/XWpdMbW)

<br>

⭐ **@opacity:**  

The opacity HtmlProperty sets the opacity level of an element.

#### 〽️ Syntax: 

```html
<element @opacity="event($value$)"></element>
```

#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/NWdNpje)

<br>

### ⭐ **@width & @height:**  

With Seule HTML METHODS, you can change the HTML elements width and height:

* Width HtmlMethod sets the width of the selected elements.
* Height HtmlMethod sets the height of the selected elements.


#### 〽️ Syntax: 

```html
<element @width="CssValue"></element>
<element @height="CssValue"></element>
```

#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/poRyPNb)

<br>

> Set Content and Attributes

Seule contains powerful methods for changing and manipulating HTML elements and attributes.

<br>

### ⭐ **@text & @val:**  

Two simple Html methods, but useful:

* Text HtmlMethod Sets the text content of selected elements.
* Val HtmlMethod Sets the value of form fields


#### 〽️ Syntax: 

```html
<element @text="content"></element>
<input @val="value"/>
```

#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/BapzjNJ)

<br>

### ⭐ **@attr:**  

Src HtmlMethod used to set/change attribute values


#### 〽️ Syntax: 

```html
<element @attr="event($'attributeName':'value'">
```

#### Example: 
🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/VwPjmVq)



