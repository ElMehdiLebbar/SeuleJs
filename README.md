![Seule Logo](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/s-lg.png)

# 🔱 Introduction :octocat:
🔰 Seule is a light-weight (20KB), blazing fast and feature-rich Javascript Framework. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers 🧙‍♂.

<br>

# 👑 Getting Started

You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.0.0.1.dev.js"></script>
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

## ↩️ Styling Apps in Seule  

Seule uses Shadow DOM, It allows us to ship self contained components along with their style and isolate the component from global style while "protecting" the host application from styles defined inside the component. 

### Two Ways to Insert CSS

By Adding Style property in the main Object, there are two ways of inserting a style sheet to Seule Component:

* External
* Internal

#### External

style property can have like a value the Url of the Style sheet.

Each Seule Application must include a reference to the external style sheet file.

#### 🔹 for exemple:

```html
<div id='app'></div>
```


```javascript
const app = new Seule({
  el: '#app',
  style: './css/mystyle.css',
  data:{
    message: "Hello It's App number 1"    
  }
})
```

#### Internal

🔹 By giving the style property the value of link about Attribute like a value we telling the program, the style sheet for the Application is the link element that has the about attribute with value equal the id of Seule application , inside the head section of an HTML page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/app.css" about="app-style">
</head>
<body>

<div id='app'>
    {{message}}
</div>

</body>
</html>    
```

    

```javascript
const app = new Seule({
  el: '#app',
  style: 'app-style' //Style Sheet ./css/app.css applying for the app in this case,
  data:{
    message: "Hello World"    
  }
})
```    
    
<br>

## ↩️ Bind element attributes 

In addition to text interpolation, we can also bind **element attributes** like this:

#### 〽️ Syntax:

```html
<element attribute="{{[variable: <String>]}}"></element>
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

## ↩️ Selectors

For more security, Seule uses Shadow DOM. The problem in that, is you can't get access to the DOM element(s) directly unless you use Css selectors inside the handler() by invoking the $scoop parameter.

$scoop Selectors method returns all elements in the Seule app that matches a specified CSS selector(s), as a static Seule Object.

#### 〽️ Syntax

```javascript
$scoop([CSS selectors])
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


## ↩️ Events

> What is an Event?

An event represents the precise moment when something happens. Examples:

- moving a mouse over an element
- selecting a radio button
- clicking on an element

for mor details about [!Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

#### 〽️ Syntax

using the **On** Method to assign an event to an element. 

```javascript
$scoop([CSS selectors]).On([event:<String>], [handler:<Function>])
```

#### Example

🔹 for exemple To assign a click event to all button on a Seule app, you can do this:

```html
<div id='app'>

    <img src="https://bit.ly/3mA0FbG" width="150">

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

## ↩️ Special Events

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
$scoop([CSS selectors]).Hold([handler:<Function>], [time:<Integer>])
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
$scoop([CSS selectors]).Swipe([event:<String>], [handler:<Function>])
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
$scoop([CSS selectors]).Focus()
```

Attach a function to the focus event:

```javascript
$scoop([CSS selectors]).Focus([handler:<Function>])
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
$scoop([CSS selectors]).Blur()
```

Attach a function to the focus event:

```javascript
$scoop([CSS selectors]).Blur([handler:<Function>])
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
            .Blur(()=> $scoop('p')
                .Text("This input field has lost its focus!")
                .set())
    }
})
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/JjJxONm)

<br>

## ↩️ Handling keyboard Events

### 🔰 HotKey()

With HotKey Method in Seule you can now handling keyboard shortcuts easly. 

#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Hotkey([keys:<String>], [handler:<Function>], [prevent:<Boolean>]);
```

### SUPPORTED KEYS:

For modifier keys you can use  <code>shift</code>, <code>ctrl</code>, <code>alt</code> or <code>meta</code>

You can substitute  <code>option</code> for <code>alt</code> and <code>command</code> for <code>meta</code>

Other special keys are <code>backspace</code>, <code>tab</code>, <code>enter</code>, <code>return</code>, <code>capslock</code>, <code>esc</code>, <code>escape</code>, <code>space</code>, <code>pageup</code>, <code>pagedown</code>, <code>end</code>, <code>home</code>, <code>left</code>, <code>up</code>, <code>right</code>, <code>down</code>, <code>ins</code>, <code>del</code>, and <code>plus</code>

Any other key you should be able to reference by name like <code>a</code>, <code>/</code>, <code>$</code>, <code>*</code>, or <code>=</code>.

#### Examples

🔹 Hotkey event with Single key:

```javascript
$scoop('input').HotKey('m',
    ()=> alert('M button is pressed on the Keyboard!'));
```

🔹 Combination of keys:

```javascript
$scoop('input').HotKey('ctrl s',
    ()=> alert('You pressed ctrl+s!'));
```

🔹 Sequence of keys like Konami Style (:

```javascript
$scoop('input').HotKey('Left Right Left Right A C',
    ()=> alert('Now you can play with Orochi Iori'));
```

🔹 Or you can specify keyboard events that will work anywhere including inside textarea/input fields like:

```javascript
$scoop(window).HotKey('ctrl+r',
    ()=> alert('Global keyboard shortcuts'));
    
// if you want prevent the default refresh event under WINDOWS system    
$scoop(window).HotKey('ctrl+r',
    ()=> alert('Global keyboard shortcuts'), true);    
```


### Just One More Example 

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/JjJxejL)

<br>

## ↩️ More with Events

There are so many things helpful in Seule like : 

### 🔰 Fire()

Do you want to simulate event with a single statement? Then you may use Fire Method for that:

#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Fire([event:<String>]);
```
#### Examples

Simulate a mouse-click when moving the mouse pointer over a button:

```html
<div id='app'>
    <button onclick="alert('Clicked !')">Hover Me !</button>
</div>
```

```javascript
const app = new Seule({
    el: '#app',
    handler($app, $scoop){
        $scoop('button')
          .On('mouseover', e=> e.Fire("click"))
    }
});
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/QWdyMzw)

### 🔰 Copy()

The Copy() method triggers the specified event(s) and the default behavior of an event (like form submission) for the selected elements.


#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Copy([target:<String> | <Object>], [events:<String>]);
```

#### Examples

Simulate onmouseout and onmouseover events the mouse pointer (out of/onto) a button:

```html
<div id="app">
    <p>{{initMessage}}</p>
    <button id="original">Original</button>
    <button id="copy">Copy</button>
</div>
```

```javascript
const app = new Seule({
    el: '#app',
    data:{
        message : "Woah! That's awesome",
        initMessage : "moving the mouse pointer (out of/onto) a button to see what happens!"
    },
    handler($app, $scoop){
        $scoop('#original')
            .On("mouseover", e=> {
                e.Css("background").set("rgba(0,0,0,1)");
                $scoop("p").Text(this.data.message).set()
            })
            .On("mouseout", e=> {
                e.Css("background").set("rgba(0,0,0,0.1)");
                $scoop("p").Text(this.data.initMessage).set()
            });

        $scoop('#copy').Copy("#original", "mouseover : mouseout")
    }
});
```

🔹 See the Example by clicking on the button below 👇

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/bGgegrq)

### 🔰 Toggle()

The Toggle() method toggles between two custom functions for the selected element(s).

#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Toggle([event:<String>], [methods:<Object>]);
```

#### Examples

🔹 Toggle between adding border-radius and changing the background of a div:

```html
 <div id="app">
   <p>Click on the square 👇🏻 to see what happens!</p>
   <section class="square">{{grimace}}</section>
</div>
```

```javascript
const app = new Seule({
    el: '#app',
    data:{
        grimace : "^_^",
    },
    handler($app, $scoop){
        $scoop(".square").Toggle("click",
            {
                handler(e) {
                   e
                     .Css({
                           "border-radius" : "50%",
                           background : "red",
                           duration: 300
                       }).set()
                     .Text('*_*').set()
                },
                callback(e){
                    e
                      .Css({
                            "border-radius" : 0,
                            background : "#2f2f2f",
                            duration: 300
                        }).set()
                      .Text($app.data.grimace).set()
                }
            })
    }
});
```

### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)

<br>

## ↩️ Traversing Methods

Seule provides a variety of methods that allow us to traverse the App. Traversal methods in Seule help us to select elements in a Seule app randomly as well as in sequential method !

* Select () : Returns all child elements that matches a specified CSS selector(s)
* Each () : Specifies a function to run for each matched element.
* Element () : Returns an element with a specific index number of the selected elements.
* Parent () : Returns the direct parent element of the selected element.
* Child () >>>
    * .first()  : Returns the first child element of the selected element.
    * .last()   : Returns the last child element of the selected element.
    * .number() : Returns a child element with a specific index number of the selected elements.
    * .all()    : Returns all direct children of the selected element.
* $() : Returns the root element of the selected element.

#### Example

🔹 for exemple, we have a group of paragraphs inside a &lt;div&gt; and we want to change the background color of the second descendant &lt;p&gt;:

```html
<section id="app">
    <div class="group">
        <p>My name is ElML</p>
        <p class="intro">I live in EL Jadida.</p>
        <p class="intro">I love EL Jadida.</p>
        <p>Dad is my best friend...</p>
    </div>
</section>
```

```javascript
const app = new Seule({
    el: '#app',
    handler($app, $scope){
      $scope('.group')
        .Select('.intro') // returns all descendants &lt;p&gt; with class name equal "intro"
        .Element(1) // returns the second element of the selected element.
        .Css('background').set('#424cf7')
    }
});
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/abpdLNY)

### 🔰 Each()

The Each() method specifies a function to run for each matched element.

#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Each([handler:<Function>]);
```

#### Example

🔹 Alert the text of each &lt;li&gt; element:

```html
<div id="app">
    <p>Click the button to see what happens!</p>
    <ul style="text-align: left">
        <li>Coffee</li>
        <li>Milk</li>
        <li>Soda</li>
    </ul>

    <button title="{{title}}">Click-Me</button>

  
</div>
```

```javascript
const app = new Seule({
    el: '#app',
    data: {
        title: "Add the value of each list item"
    },
    handler($app, $scope){
        $scope('button')
            .Click(()=> $scope('li')
                .Each(e => {
                    const item = e.Text().get() + " ";
                    $scope('.result')
                        .Text(item).append()
                }))
    }
});
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/OJWMOzx)
    
<br>
    
## ↩️ Seule Element(s) Manipulation
    
Seule provides various methods to add, edit or delete element(s) in the Seule App. 


### 🔰 Create()

Create() method creates the HTML element specified by tagName.
    
#### 〽️ Syntax

```javascript
$scoop().Create([tagName:<String>]);
```

#### Example

🔹 Create a &lt;button&gt; element:

```html
<div id="app"></div>
```

```javascript
const app = new Seule({
    el: '#app',
    handler($app, $scope){
       const btn = $scope().Create('button')
    }
});
```

🔹 Create a &lt;button&gt; with text:

```html
<div id="app"></div>
```

```javascript
const app = new Seule({
    el: '#app',
    handler($app, $scope){
       const btn = $scope().Create('button');
       btn.Text($app.data.text).set();
    }
});
```

### 🔰 Append()

The Append() method appends a Seule Element as the last child of a Element.

#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Append([element:<String> | <Object>]);
```

#### Example

🔹 Create and append a &lt;button&gt; element in The Root Element:

```html
<div id="app"></div>
```

```javascript
const app = new Seule({
    el: '#app',
    handler($app, $scope){
       const btn = $scope().Create('button');
       btn.Text($app.data.text).set();
       $scope().Append(btn)
    }
});
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/VwPamgO)

### 🔰 Move()

* .before()  : method inserts or moves a element as a child, right before an existing child, which you specify.
* .after()   : method inserts or moves a element as a child, right after an existing child, which you specify.
    
#### 〽️ Syntax

```javascript
$scoop([CSS selectors]).Move().method([element:<String> | <Object>]);
```    

#### Example

🔹 Insert a new &lt;li&gt; element before the Second child element of an &lt;ul&gt; element:

    
```html
<div id="app">
    <button title="Add Water Please!">Click-Me</button>
    <ul>
        <li>Tea</li>
        <li>Coffee</li>
    </ul>
</div>
```

```javascript
const app = new Seule({
    el: '#app',
    data:{text: "Water"},
    handler($app, $scope){
        const
            btn = $scope().Create('li'),
            Coffee = $scope('li').Element(1);

        btn.Text($app.data.text).set();
        $scope('button').Click(()=> btn.Move().before(Coffee))
    }
});
```
### [▶️ Try it Yourself](https://codepen.io/el-mehdi-lebbar/pen/XWpdMbW)
  
