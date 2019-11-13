# Introduction
Seule is A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started
<h5>You can create an index.html file and include Seule with:</h5>

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule-0.1.8/seule.full.min.js"></script>
```

<h5>At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:</h5>

```html
  <h1 s-text={Hello World}></h1>
```
<h5>on your main js file call the Seule Object by using this code bellow:</h5>

```javascript
Seule.htmlSetting();
```

<i>- Now your are ready to go.</i>

<h3>Hello World Project</h3>

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/1.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/pooKBaX)


# html Methods

##### To use html Methods you have to go to the App/index.html file :

for exemple if you wont to add a heading to your project you put:

```html
<h1 s-text={Hello World}></h1>
```
the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Method. exemple : 

### Exemple

```html
<h1 s-text="click{Hello World}">Hello HKG</h1>
```
![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/2.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/XWWYQxd)

<h3>Style Methods</h3>

<ul>
	<h6><b>HTML Text Formatting</b></h6>
	<li><b>s-color:</b> for changing the color of text</li>
	<li><b>s-fontFamily:</b>  for changing the font family of a text</li>
	<li><b>s-fontSize:</b>  Set the font size for different elements</li>
	<li><b>s-fontStyle:</b>  Set different font styles for different elementss</li>
	<li><b>s-textDecoration:</b>  specifies the decoration added to text</li>
	<li><b>s-textDecorationColor:</b>  specifies the color of the text-decoration (underlines, overlines, linethroughs).</li>
	<li><b>s-textDecorationLine:</b>  sets the kind of text decoration to use (like underline, overline, line-through).</li>
	<li><b>s-textDecorationStyle:</b>  sets the style of the text decoration (like solid, wavy, dotted, dashed, double).</li>
	<li><b>s-textAlign:</b>  specifies the horizontal alignment of text in an element.</li>
	<h6><b>Format the background</b></h6>
	<li><b>s-background:</b> used to define the background effects for elements.</li>
	<li><b>s-backgroundColor:</b> specifies the background color of an element.</li>
	<li><b>s-backgroundImage:</b> specifies an image to use as the background of an element.</li>
	<li><b>s-backgroundPosition:</b> Sets the starting position of a background image.</li>
	<li><b>s-backgroundRepeat:</b> Sets how a background image will be repeated.</li>
	<li><b>s-backgroundSize:</b> Specifies the size of the background image(s).</li>
	<h6><b>Borders Style</b></h6>
	<li><b>s-border:</b> Set the style of the borders for different elements.</li>
	<li><b>s-borderBottom:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-borderTop:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-borderLeft:</b> Set the style of the left border for different elements</li>
	<li><b>s-borderRight:</b> Set the style of the right border for different elements</li>
	<h6><b>layout Options</b></h6>
	<li><b>s-float:</b> specifies how an element should float.</li>
	<li><b>s-position:</b> specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).</li>
	<li><b>s-zIndex:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-display:</b> specifies the display behavior (the type of rendering box) of an element.</li>
	<li><b>s-opacity:</b> can take a value from 0.0 - 1.0. The lower value, the more transparent.</li>
	<li><b>s-visibility:</b> specifies whether or not an element is visible.</li>
	<li><b>s-padding:</b> are used to generate space around an element's content, inside of any defined borders.</li>
	<li><b>s-margin:</b> are used to create space around elements, outside of any defined borders.</li>
	<li><b>s-width:</b> Sets the width of an element.</li>
	<li><b>s-height:</b> Sets the height of an element.</li>
	
</ul>

<p>Now with the attribute method, you can define your own attribute in Seule js. like this:</p>

```javascript
Seule.attribute('your-custom-attribute','CSS Properties');
```
<h5>for exp:</h5>
<p>in file App/js/main.js</p>

```javascript
Seule.attribute('your-custom-attribute','background');
```
<p>then you can call the attribute in your html fils</p>

```html
<button your-custom-attribute="mouseover{#22863A}">hover Me</button>
```
<p>if the mouse over on the button element, the result will be:</p>

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/7.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/QWWBmLG)

<h3>HTML Attributes Methods</h3>
<ul>
	<li><b>s-text:</b> for changing the color of text</li>
	<li><b>s-title:</b>  Specifies extra information about an element (displayed as a tool tip)</li>
	<li><b>s-val:</b>  specifies the value for an input field</li>
	<li><b>s-type:</b>  specifies the type of input element to display.</li>
	<li><b>s-placeholder:</b>  specifies a hint that describes the expected value of an input field (a sample value or a short description of the format).</li>
	<li><b>s-name:</b>  Specifies a name for an element</li>
	<li><b>s-id:</b>  Specifies a unique id for an element.</li>
	<li><b>s-class:</b>  change the class name for an element</li>
	<li><b>s-selected:</b>  To define a pre-selected option</li>
	<li><b>s-disabled:</b>  Specifies that an input element should be disabled.</li>
	<li><b>s-readonly:</b>   specifies that the input field is read only (cannot be changed).</li>
	<li><b>s-maxlength:</b>  the input field will not accept more than the allowed number of characters.</li>
	<li><b>s-autocomplete:</b>   specifies whether a form or input field should have autocomplete on or off.</li>
	<li><b>s-novalidate:</b>  specifies that the form data should not be validated when submitted.</li>
	<li><b>s-form:</b>  specifies one or more forms an input element belongs to..</li>
	<li><b>s-size:</b>  specifies the size (in characters) for the input field</li>
	<li><b>s-multiple:</b>  specifies that the user is allowed to enter more than one value in the input element.</li>
	<li><b>s-rows:</b>  specifies the lines numbers of a text area.</li>
	<li><b>s-cols:</b>  specifies the visible width of a text area.</li>
	<li><b>s-alt:</b>  Specifies an alternative text for an image, when the image cannot be displayed.</li>
	<li><b>s-source:</b>  Specifies the URL (web address) for an image.</li>
	<li><b>s-cible:</b>  specifies where to open the linked document</li>
	<li><b>s-target:</b>  specifies the URL of the page the link goes to.</li>
	<li><b>s-link:</b>  Specifies the URL (web address) for a link.</li>
</ul>

open a specific link with s-link html method, there are two ways.

<i>Fisrt Way with event</i>
	
```html
<button s-link=click{https://www.google.co.ma/} >click on me to open google</button>
```
As you see, the first way must be accompanied with a javascript event, to open URL in the same window directly, you may use s-link with-out event or by using s-href inside the -a- tag

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/8.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/xxxJJZa)

```html
<button s-link={https://www.google.co.ma/} >click on me to open google</button>
<!-- or by using href -->
<a s-href={https://www.google.co.ma/}>click on me to open google</a>
```
### Use your own HTML Methods

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/9.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)

in Seule.js you can creat your own html method by using setHtmlMethode for exemple:

```html
 <button s-methode="click${`nom` : `Mehdi`}">Say Hello To Mehdi</button>
<p>Result: <span id="response">waiting...</span></p>
```
##### on your main js file call the Seule Methode setHtmlMethode with this script bellow:

```javascript
let p = $seule('p'),
    btn = $seule('button'),
    response = $seule('#response');


Seule.setHtmlMethode('s-methode', function (obj) {
	// action goes here!!
       response.text('hello M. '+ obj.nom);
    });
```
# Seule Selectors

Like jQuery Selectors, Seule Selectors allow you to select and manipulate HTML element(s).

Seule Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.

Howe can i use this Seule Selectors? is too simple by using seule function + the CSS selectors. exemple:

##### Html Page

```html
<h1 id="byId" class="by-class"> Hello, I'm Seule Element.</h1>
```
<h5>Javascript</h5>

```javascript
//Use Seul element selector to select elements based on the element name. You can select all <h1> elements on a page like this:
let title = $seule('h1');

//Or you can use The #id Selector, that uses the id attribute of an HTML tag to find the specific element.
let title = $seule('#byId');

//Or The .class Selector To find elements with a specific class
let title = $seule('.by-class');
```
<h5>More Examples of Seule Selectors:</h5>
<ul>
	<li><b>$seule("p.intro")</b>  Selects all p elements with class="intro"</li>
	<li><b>$seule("p:first")</b>  Selects the first p element</li>
	<li><b>$seule("ul li:first")</b>  Selects the first li element of the first ul</li>
	<li><b>$seule("ul li:first-child")</b>  Selects the first li element of every ul</li>
	<li><b>$seule("[href]")</b>  Selects all elements with an href attribute.</li>
	<li><b>$seule("a[target='_blank']")</b>  Selects all a elements with a target attribute value equal to "_blank"</li>
	<li><b>$seule("a[target!='_blank']")</b>  Selects all a elements with a target attribute value NOT equal to "_blank"</li>
	<li><b>$seule(":button")</b>  Selects all button elements and <input> elements of type="button"</li>
	<li><b>$seule("tr:even")</b>   Selects all even tr elements</li>
	<li><b>$seule("tr:odd")</b>  Selects all odd tr elements</li>
	<li><b>$seule("#id, .className, body")</b>  Selects many elements in single time</li>
</ul>

# Seule Events Methods

<h3>What are Events?</h3>

<p>An event represents the precise moment when something happens. Examples:</p>

<ul>
	<li>moving a mouse over an element</li>
	<li>selecting a radio button</li>
	<li>clicking on an element</li>
</ul>
<p>for mor details about Event reference<a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank"> click me</a></p>

<h3>Seule Syntax For Event Methods</h3>

<p>To assign an event to an element you me use the <b>on Method</b>. for exemple To assign  a click event to all paragraphs on a page, you can do this:</p>

```javascript
let paragraphs = $seule('p');
paragraphs.on("click");
```
<p>The next step is to define what should happen when the event fires. You must pass a function to the event:</p>

```javascript
let paragraphs = $seule('p');
paragraphs.on("click", function () {
       	console.log("it's work !");
    });
```
<h3>Seul Special Events Methods</h3>
### Seule click()
<p>The function is executed when the user clicks on the HTML element. for exemple When a click event fires on a <button> element; show an alert box</p>
	
```javascript
let button = $seule('button');

button.click(function () {
	alert('just a simple click');
})
```
### Seule dblclick()
<p>The function is executed when the user double-clicks on the HTML element.</p>

```javascript
let button = $seule('button');

button.dblclick(function () {
	alert('you win !');
})
```

### Seule holdOn()
<p>The function is executed when the user make a long presse on the HTML element.</p>

```javascript
let button = $seule('button');

button.holdOn(function () {
	console.log('this is a long press');
})
```
### Seule swipeOn()
Detecting a swipe (left, right, top or down) using swipeOn Method

##### Syntax

```javascript
element.swipeOn('Mouvement', callback);
```

<h5>Javascript</h5>

```javascript
let div = $seule('.main');

div.swipeOn("left", function () {
       	console.log("user swipe on left!");
    });
```
### Seule emit()
The emit() method triggers the specified event and the default behavior of an event (like form submission) for the selected elements.

##### Emit Syntax

```javascript
element.emit('idOfElement', event, eventToCopy);
```

###### Exemple : Html Page

```html
<input type="file" id="uploader">
<button id="upload">upload</button>
```
##### Javascript

```javascript
let button = $seule('#upload');
	
//when user double click on button with id upload, is the same think if he click on input file. 
button.emit('uploader', 'dblclick', 'click');
```
### Seule- switch()
The switch() method toggles between two custom functions for the selected elements.

###### Switch Syntax

```javascript
element.switch(event, callback1, callback2);
```
###### Exemple: on html page</h5>

```html
<button s-padding={20px} >Switch</button>
```
###### Javascript

```javascript
let button = $seule('button');
button.switch('click', function () {
   Seule.style('background', '#222');
},
    function () {
        Seule.style('background', '#fff');
    });
```

### Seule focus()

The focus() Trigger the focus event for selected elements.

<h5>Focus Syntax</h5>

```javascript
element.focus();
```

### Seule blur()

The blur() Trigger the blur event for the selected elements.

###### Blur Syntax

```javascript
element.blur();
```
## Seule Keybord Event Methods

With hotkey Method in Seulejs you can now handling keyboard shortcuts easly in Javascript. 

###### Hotkey Syntax

```javascript
element.hotkey('Keyboard Keys combination', callback);
```
## SUPPORTED KEYS
<p>For modifier keys you can use  <code>shift</code>, <code>ctrl</code>, <code>alt</code> or <code>meta</code></p>
<p>You can substitute  <code>option</code> for <code>alt</code> and <code>command</code> for <code>meta</code></p>
<p>Other special keys are <code>backspace</code>, <code>tab</code>, <code>enter</code>, <code>return</code>, <code>capslock</code>, <code>esc</code>, <code>escape</code>, <code>space</code>, <code>pageup</code>, <code>pagedown</code>, <code>end</code>, <code>home</code>, <code>left</code>, <code>up</code>, <code>right</code>, <code>down</code>, <code>ins</code>, <code>del</code>, and <code>plus</code>.</p>
<p>Any other key you should be able to reference by name like <code>a</code>, <code>/</code>, <code>$</code>, <code>*</code>, or <code>=</code>.</p>

### Exemple

###### Hotkey event with Single key

```javascript
let input = $seule('input');

input.hotKey('.', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
######  Combination of keys</h5>

```javascript
input.hotKey('ctrl+s', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
On Mac this ends up mapping to command+s whereas on Windows and Linux it maps to ctrl+s.

###### Sequence of keys like Konami Style (:

```javascript
input.hotKey('up up down down left right left right b a enter', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
You can also make a sequence that includes key combinations within it.

```javascript
input.hotKey('g o command+enter', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
###### Global

```javascript
Seule.hotKeyGlobal('ctrl+a', function () {
    /* do something */
    alert('Global keyboard shortcuts');
});
```
This extension of hotkey allows you to specify keyboard events that will work anywhere including inside textarea/input fields.

# Seule Effects

When you’re struggling to maintain the attention of your users, cool JavaScript effects are just what the doctor ordered. Now you just need to pick the right animations suited to your niche and users.

10 Easy Seule Methods to Spice Up Your Site with Animations. Then you have Seule.anime Method. It's a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

### Seule show() & hide()

You can hide and show HTML elements with the hide() and show() methods:

###### Syntax

```javascript
//show
element.show();
//hide
element.hide();
```

##### Exemple

```javascript
let p = $seule('p'),
    show = $seule('#show'),
    hide = $seule('#hide');

show.click(function () {
    p.show();    
});

hide.click(function () {
    p.hide();
});
```

### Seule visible()

The seule visible method sets whether an element should be visible or not.

The seule visible method allows the author to show or hide an element. It is similar to the show() & hide() methode. However, the difference is that if you set element.hide(), it hides the entire element, while visible(false) means that the contents of the element will be invisible, but the element stays in its original position and size.

##### Syntax

```javascript
//visible
element.visible();
//hidden
element.hide(false);
```
### Seule isVisible()

The seule isVisible method return whether an element is be visible or hidden. the return result will be true or false

##### Syntax

```javascript
//visible
element.isVisible();
```
### Exemple

##### Html Page

```html
<div  s-visibility={hidden} >Hello World</div>
```
##### Javascript

```javascript
Seule.htmlSetting();

let div = $seule('div');

if(div.isVisible() === false){
    div.visible();
}
```
### Seule opacity()

The opacity() Method describes the transparency-level of an element, where 1 is not transperant at all, 0.5 is 50% see-through, and 0 is completely transparent.

##### Syntax

```javascript
//value can take from 0 to 1
element.opacity(Value);
```
##### Exemple

```javascript

let div = $seule('div');

div.opacity(0.5);
```


### Seule style() & getStyle()

The style() method sets one or more style properties for the selected elements. for returning the value of element css propertie you should use getStyle() Method

##### Syntax

```javascript
//changing the css propertie for an element
element.style(cssProperty, value);

//getting the value of css propertie for an element
element.getStyle(cssProperty);
```
##### Exemple

```html
<div  s-visibility={hidden} >Hello World</div>
<button>Show</button>
```

##### Javascript

```javascript
Seule.htmlSetting();

let div = $seule('div'),
    btn = $seule('button');

btn.click(function () {
    if(div.getStyle('visibility') === 'hidden'){
        div.style('visibility', 'visible');
    }
});
```
### Seule class()

This Method is useful to add, remove and toggle CSS classes on an element.

##### Syntax

```javascript
element.class(className, action);
```
##### Exemple

```javascript
let div = $seule('div'),
    btn = $seule('button');

btn.click(function () {

    //to add class style-scope to div 
    $div.class('style-scope');
    
    //to remove class style-scope from div class List
    $div.class('style-scope', 'remove');
    
    //to toggle class style-scope for div
    $div.class('style-scope', 'toggle');
    
});
```
### Seule classList()
The classList Method returns an array that contain  the class name(s) of an element, as a DOMTokenList object.

##### Syntax

```javascript
element.classList();
```
##### Exemple

```html
<div class="style-scope ytd-app" >Hello World</div>
<button>List Class</button>
```

##### Javascript

```javascript
Seule.htmlSetting();

let div = $seule('div'),
    btn = $seule('button');

btn.click(function () {
    //shows an array on the console like ['style-scope', 'ytd-app']
    console.log (element.classList());
});
```
### Seule classListContains()

if you want to check if the classList of an element that contain  a class name, we using Seule classListContains() to return true if the class exist or false if it isn't.

##### Syntax

```javascript
element.classListContains(className);
```
##### Exemple

```html
<div class="style-scope ytd-app" >Hello World</div>
<button>List Class</button>
```
##### Javascript

```javascript
Seule.htmlSetting();

let div = $seule('div'),
    btn = $seule('button');

btn.click(function () {
    //the result will be true 
    console.log (element.classListContains('style-scope'));
    //the result will be false 
    console.log (element.classListContains('style-me'));
});
```
### Seule anime()

like i sad Seule anime Method. It's a bunch of cool, fun, and cross-browser animations for you to use in your projects, and has many effect thas supported

## SUPPORTED ANIMATIONS

Animatelo supports the following animations:

<ul>
<li><code>bounce</code></li>
<li><code>flash</code></li>
<li><code>pulse</code></li>
<li><code>rubberBand</code></li>
<li><code>shake</code></li>
<li><code>headShake</code></li>
<li><code>swing</code></li>
<li><code>tada</code></li>
<li><code>wobble</code></li>
<li><code>jello</code></li>
<li><code>headShake</code></li>
<li><code>bounceIn</code></li>
<li><code>bounceInDown</code></li>
<li><code>bounceInLeft</code></li>
<li><code>bounceInRight</code></li>
<li><code>bounceInUp</code></li>
<li><code>bounceOut</code></li>
<li><code>bounceOutDown</code></li>
<li><code>bounceOutLeft</code></li>
<li><code>bounceOutRight</code></li>
<li><code>bounceOutUp</code></li>
<li><code>fadeIn</code></li>
<li><code>fadeInDown</code></li>
<li><code>fadeInDownBig</code></li>
<li><code>fadeInLeft</code></li>
<li><code>fadeInLeftBig</code></li>
<li><code>fadeInRight</code></li>
<li><code>fadeInRightBig</code></li>
<li><code>fadeInUp</code></li>
<li><code>fadeInUpBig</code></li>
<li><code>fadeOut</code></li>
<li><code>fadeOutDown</code></li>
<li><code>fadeOutDownBig</code></li>
<li><code>fadeOutLeft</code></li>
<li><code>fadeOutLeftBig</code></li>
<li><code>fadeOutRight</code></li>
<li><code>fadeOutRightBig</code></li>
<li><code>fadeOutUp</code></li>
<li><code>fadeOutUpBig</code></li>
<li><code>flipInX</code></li>
<li><code>flipInY</code></li>
<li><code>flipOutX</code></li>
<li><code>flipOutY</code></li>
<li><code>lightSpeedIn</code></li>
<li><code>lightSpeedOut</code></li>
<li><code>rotateIn</code></li>
<li><code>rotateInDownLeft</code></li>
<li><code>rotateInDownRight</code></li>
<li><code>rotateInUpLeft</code></li>
<li><code>rotateInUpRight</code></li>
<li><code>rotateOut</code></li>
<li><code>rotateOutDownLeft</code></li>
<li><code>rotateOutDownRight</code></li>
<li><code>rotateOutUpLeft</code></li>
<li><code>rotateOutUpRight</code></li>
<li><code>hinge</code></li>
<li><code>rollIn</code></li>
<li><code>rollOut</code></li>
<li><code>zoomIn</code></li>
<li><code>zoomInDown</code></li>
<li><code>zoomInLeft</code></li>
<li><code>zoomInRight</code></li>
<li><code>jackInTheBox</code></li>
</ul>

<h5>Syntax</h5>

```javascript
element.anime(animation , options);
```
<h3>Basic Exemple by using html Method s-anime </h3>

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/3.jpg)

<p> <a href="https://codepen.io/el-mehdi-lebbar/pen/MWWXPae"><button>Preview</button></a> </p>
<h5>Html Page</h5>

```html
<h1 s-anime=click{jello}>Hello World!</h1>
```

<h5>Javascript</h5>

```javascript
Seule.htmlSetting();
```
<h3>Basic Exemple by using anime() Method </h3>

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/4.jpg)

<p> <a href="https://codepen.io/el-mehdi-lebbar/pen/JjjZmNL"><button>Preview</button></a> </p>
<h5>Html Page</h5>

```html
<p>I love JavaScript</p>
<button>Play</button>
```

<h5>Javascript</h5>

```javascript
let p = $seule('p'),
    btn = $seule('button');

btn.click(function () {
    p.anime('flipInX');
});
```
## Options

It is possible to override the default behaviour for an animation, passing an Object containing one or more timing properties:

<code>id</code> **Optional.** A property unique to animate(): a DOMString with which to reference the animation.

<code>delay</code> **Optional.** The number of milliseconds to delay the start of the animation. Defaults to 0.

<code>direction</code> **Optional.** Whether the animation runs forwards (normal), backwards (reverse), switches direction after each iteration (alternate), or runs backwards and switches direction after each iteration (alternate-reverse). Defaults to "normal".

<code>duration</code> **Optional.** The number of milliseconds each iteration of the animation takes to complete. Defaults to 1000. keep in mind that your animation will not run if this value is 0.

<code>fill</code> **Optional.** Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "both".

<code>iterations</code> **Optional.** The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.

### Exemple by using anime() Method with options

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/5.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/KKKBXQz)

##### Html Page

```html
<h1>Let's Animate The Web</h1>
```

##### Javascript

```javascript
let h1 = $seule("h1"),
options = {
  duration: 1500,
  delay: 1000,
  iterations: Infinity,
  direction: 'alternate',
  fill: 'both',
  id: 'myAnimation'
};

h1.anime('zoomIn', options);
```

## Players

Seule anime Methode returns an Array of Animation Objects, each one represents a single animation player and provides playback controls and a timeline for an animation node or source.

[See the W3C specification for more details.](https://drafts.csswg.org/web-animations/)

### Exemple by using anime() Method with animation player

![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/seule-0.1.4/6.jpg)

[Preview](https://codepen.io/el-mehdi-lebbar/pen/jOOpaNy)

##### Html Page

```html
<h1 id="headline">Animation is Starting!</h1>
```

##### Javascript

```javascript
let h1 = $seule("#headline"),
    player = h1.anime('wobble');

player[0].onfinish = function() {
    Seule.style('background-color', '#fff');
    h1.text('Animation has ended', 700);
}
```
# Seule HTML DOM

With the HTML DOM, Seule js can access and change all the elements of an HTML document.

### Seule text() Method

The text() method sets or returns the text content of the selected elements.

### Syntax

```javascript
element.anime(animation , options);
```
### Exemple

```javascript
$seule("button").click(function(){
  $seule("p").text("Hello world!");
});
```

### Seule text() Method

The text() method sets or returns the text content of the selected elements.

### Syntax

```javascript
element.anime(animation , options);
```
### Exemple

```javascript
$seule("button").click(function(){
  $seule("p").text("Hello world!");
});
```

### Seule val() Method

The val() method returns or sets the value attribute of the selected elements.

### Syntax

```javascript
element.anime(animation , options);
```
### Exemple

```javascript
$seule("button").click(function(){
  $seule("p").val("Hello world!");
});
```
