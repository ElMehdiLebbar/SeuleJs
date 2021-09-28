![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.2.0.dev.js"></script>
```

🔹 At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
<div id='app'>
    {{message}}
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message : 'hello Seule'
            }
        })
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/pooKBaX)

We have already created our very first Seule app! Click on the "Try it Yourself" 👆 button to see how it works.

<br>

## ↩️ Bind element attributes 

In addition to text interpolation, we can also bind **element attributes** like this:

#### 〽️ Syntax:

```html
<element attribute="{{variable}}"></element>
```

🔹 for exemple:

```html
<div id='app'>
    <p title="{{message}}"> Hover your mouse over me <br> for a few seconds </p>
</div>
```


```javascript
const app = new Seule({
    el: '#app',
    data: {
    message : 'You visited this page on ' + new Date().toLocaleString()
  }
})
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/MWJKjrK)

<br>

## ↩️ Handling User Input


Magic Happens here by invoking Methods inside the handler(), using three parameters: $app, $scoop, $root and let users interact with your app

🔹 for exemple:

```html
<div id='app'>
    <p>{{message}}</p>
    <button>click-me</button>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message: "Hello my Friend"
            },
            handler($app, $scoop, $root){
                $scoop('button')
                    .Click(()=> $app.data.message =
                           $app.data.message.split('').reverse().join(''), true)
            }
        })
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/WNNYada)

More "Try it Yourself" examples below.

## ↩️ Seule selectors

For more security, Seule using Shadow DOM. The problem is that you can't access to DOM element(s) unless you use Seule selectors inside handler() by invoking $scoop parameter.

$scoop Selectors method returns all elements in the Seule app that matches a specified CSS selector(s), as a static Seule Object.

### 〽️ Syntax

```javascript
$scoop(CSS selectors)
```

Parameter --> CSS selectors

Type --> String

Tip: For a list of all CSS Selectors, look at w3schools [!CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)

### Example

🔹 You can select all <p> elements on app like this:

```javascript
$scoop("p")
```

When a user clicks on a button, all <p> elements will be hidden:
    
```html
<div id='app'>
    <p>{{message}} 1</p>
    <p>{{message}} 2</p>
    <p>{{message}} 3</p>
    <button title="{{title}}">Hide paragraphs</button>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message: "This is paragraph",
                title: "Click me to hide paragraphs"
            },
            handler($app, $scoop){
                $scoop('button')
                    .Click(()=> $scoop('p').Hide())
            }
        })
```    
    
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/yLgeoGO)
