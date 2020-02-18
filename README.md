# Introduction
Seule is A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started

##### You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.1.min.js"></script>
```

##### At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
  <div id='main'>
      <button>Hello world</button>
  </div>
```
##### on your main js file call the Seule Object by using this code bellow:

```javascript
let $ = new Seule('#main');
```

# Seule's Attributes

Now with seule you can manipulate the dom by calling Seule attributes directly on your html pages. Seule gives you many ways to handel it. Let start with the HTML DOM Style object:

## Style object
The Style object represents an individual style statement and has many Properties for more informations you can visit this link [w3schools.com/...style.asp](https://www.w3schools.com/jsref/dom_obj_style.asp)

### initStyle()
we can call all Style object Properties with initStyle on specific element 

### Example

```html
  <div id='main'>
      <button @background={#fff}>Hello world</button>
  </div>
```
```javascript
let $ = new Seule('#main');
$.initStyle('background'); 
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/t.png)](https://codepen.io/el-mehdi-lebbar/pen/pooKBaX)




