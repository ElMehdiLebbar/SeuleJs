# Introduction
Seule is A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started

##### You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.min.js"></script>
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

Now with seule you can manipulate the dom by calling Seule attributes directly on your html pages.

### setHtmlMethod()
we can creat a Seule attribute by calling the setHtmlMethod() 

### Example

```html
 <div id="main">
    <button @method="click{'nom' : 'Mehdi'}">Say Hello To Mehdi</button>
    <p>Result: <span id="response">waiting...</span></p>
</div>
```
```javascript
let $ = new Seule('#main');


$.setHtmlMethod('method', function (obj) {
    // action goes here!!
    $.find('#response').text('hello M. '+ obj.nom);
}); 
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/t.png)](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)




