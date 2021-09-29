![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.2.3.dev.js"></script>
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

#### Example

🔹 Change the background When user swipe left 🤚 on screen

```html
<div id='app'>
    <img src="https://bit.ly/3m7nlzN" width="150" alt="Logo" title="{{tooltip}}">
    <p>{{message}}</p>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message: "Swipe left to see what happens!",
                tooltip : "See this demo on Mobile"
            },
            handler($app, $scoop){
                $scoop(window)
                    .Swipe("left", ()=> $scoop('body')
                            .Css('background')
                            .set('#666'))
            }
        })
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/powGwmL)

### 🔰 Focus()

The focus event occurs when an element gets focus (when selected by a mouse click or by "tab-navigating" to it).

The focus() method triggers the focus event, or attaches a function to run when a focus event occurs.

#### 〽️ Syntax

Trigger the focus event for selected elements:

```javascript
$scoop(CSS selectors).Focus()
```

Attach a function to the focus event:

```javascript
$scoop(CSS selectors).Focus(handler())
```
#### Example

🔹 Attach a function to the focus event. The focus event occurs when the <input> field gets focus:

```html
<div id='app'>
    <input placeholder="Focus on me!" type="text">
    <p>{{message}}</p>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message: "Click in the input field to see what happens!"
            },
            handler($app, $scoop){
                $scoop('input')
                    .Focus(e => {
                        e
                            .Css("border-bottom-color").set("#8755F2")
                            .Val("Great work keep it up!").set()
                    })
            }
        })
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/dyRaVpV)

### 🔰 Blur()

The blur event occurs when an element loses focus.

The blur() method triggers the blur event, or attaches a function to run when a blur event occurs.

#### 〽️ Syntax

Trigger the blur event for the selected elements:

```javascript
$scoop(CSS selectors).Blur()
```

Attach a function to the focus event:

```javascript
$scoop(CSS selectors).Blur(handler())
```
#### Example

🔹 Attach a function to the blur event. The blur event occurs when the <input> field loses focus:

```html
<div id='app'>
    <input placeholder="Write something!" type="text">
    <p>{{message}}</p>
</div>
```

```javascript
const app = new Seule({
            el: '#app',
            data: {
                message: "Click outside the field to lose focus (blur)."
            },
            handler($app, $scoop){
                $scoop('input')
                    .Blur(e => {
                      $scoop('p')
                        .Text("This input field has lost its focus!")
                        .set()
                    })
            }
        })
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/JjJxONm)

