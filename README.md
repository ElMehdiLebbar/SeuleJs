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


# Seule Selectors

### Example

Get all elements in the document with class="example":

```javascript
let example = new Seule('.example');
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/t.png)](https://codepen.io/el-mehdi-lebbar/pen/WNNYada)

More "Try it Yourself" examples below.

## Definition and Usage

Seule Selectors method returns all elements in the document that matches a specified CSS selector(s), as a static Seule object.

### Syntax

```javascript
let element = new Seule(CSS selectors);
```

Parameter --> CSS selectors

Type --> String

Tip: For a list of all CSS Selectors, look at w3schools [!CSS Selectors Reference](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)


# Super Object --> Seule

The Super Object << Seule >> is using many Predefined Methods 

## Creat a Seule attribute

### setHtmlMethod()

Now with seule you can manipulate the dom by calling Seule attributes directly on your html pages.

we can creat a Seule attribute by calling the setHtmlMethod() 

### Example

```html
<div id="main">
    <button @methodname="click{'name' : 'Mehdi'}">Say Hello To Mehdi</button>
    <p>Hello M. <span id="response">waiting...</span></p>
</div>
```
```javascript
Seule.setHtmlMethod({
    selector : '#main',
    attr : 'methodname',
    handler(obj, element) {
        this.element.find('#response').html(obj.name);
    }
});
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/t.png)](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)


## Send a Request To a Server

To send a request to a server, we use the http() and post() methods of the Seule super object

### http()

### Example

```html
<div id="main">
  <div id="result"></div>
</div>
```
```javascript
Seule.http({
    url : 'https://my-json-server.typicode.com/ElMehdiLebbar/SeuleJs/db',
    json : true
});
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/t.png)](https://codepen.io/el-mehdi-lebbar/pen/KKMjoyG)





