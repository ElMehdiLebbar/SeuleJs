![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is A complete fast 🚴‍♂, small, and feature-rich JavaScript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.0.1.js"></script>
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

We have already created our very first Vue app! Click on the "Try it Yourself" 👆 button to see how it works.

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

## ↩️ Handler Method


Magic Happens inside this method by calling three parameters: $app, $scoop, $root

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
                message : 'Click the button bellow'
            },
            handler($app, $scoop, $root){
                $scoop('button')
                    .Click(()=> $scoop('p')
                        .Text("Hello Seule").set())
            }
        })
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/WNNYada)

More "Try it Yourself" examples below.
