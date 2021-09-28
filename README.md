![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.2.2.dev.js"></script>
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

#### 🔹 for exemple:

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

#### 🔹 for exemple:

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

<br>

## ↩️ Seule selectors

For more security, Seule using Shadow DOM. The problem is that you can't access to DOM element(s) unless you use Seule selectors inside handler() by invoking $scoop parameter.

$scoop Selectors method returns all elements in the Seule app that matches a specified CSS selector(s), as a static Seule Object.

#### 〽️ Syntax

```javascript
$scoop(CSS selectors)
```

Parameter --> CSS selectors

Type --> String

Tip: For a list of all CSS Selectors, look at w3schools [!CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)

#### Example

🔹 You can select all &lt;p&gt elements on app like this:

```javascript
$scoop("p")
```

When a user clicks on a button, all &lt;p&gt; elements will be hidden:
    
```html
<div id='app'>
    <p>{{message}} 1</p>
    <p>{{message}} 2</p>
    <p>{{message}} 3</p>
    <button title="{{title}}">Hide All!</button>
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

<br>


## ↩️ Seule Events

> What are Events?

An event represents the precise moment when something happens. Examples:

- moving a mouse over an element
- selecting a radio button
- clicking on an element

for mor details about [!Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

#### 〽️ Syntax

using the **on** Method to assign an event to an element. 

```javascript
$scoop(CSS selectors).on(event, handler())
```

#### Example

🔹 for exemple To assign a click event to all button on a app, you can do this:

```html
<div id='app'>

    <img src="http://bit.ly/3flCDzm" width="150">

    <button>Change the picture</button>

    <p>{{message}}</p>
</div>
```

```javascript
 const app = new Seule({
            el: '#app',
            data: {
                message: "Click the button to see what happens!"
            },
            handler($app, $scoop){
            
                $scoop('button')
                    .On("click", ()=> $scoop('img')
                        .Attr('src')
                        .set('http://bit.ly/3fjVxGC'))
                            
            }
        })
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/VwPjmVq)

<br>

## ↩️ Seule Special Events

### 🔰 Click()

The function is executed when the user clicks on the HTML element. 

🔹 For example When a click event fires on an element show an alert box.

```javascript
$scoop("button")
    .Click(()=> alert('just a simple click'))
```


### 🔰 Hold()

The function is executed when the user make a long presse on the HTML element.

#### 〽️ Syntax

```javascript
$scoop(CSS selectors).Hold(handler(), time)
```

the time by default is 1500 => 1.5s

#### Example

🔹 Show an alert box When user make a long presse on button for 3s.

```html
<div id='app'>
    <button>Hold Me for 3s</button>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            handler($app, $scoop){
                $scoop('button')
                    .Hold(()=> alert('Good Job!™ 🤩'), 3000)
            }
        })
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/poRyPNb)


### 🔰 Swipe()

Detecting a swipe (left, right, top or down) When a swipe event fires on an element.

#### 〽️ Syntax

```javascript
$scoop(CSS selectors).Swipe(on, handler())
```

#### Events

- left
- right
- top
- bottom


