# Introduction
Seule is A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started

##### You can create an index.html file and include Seule with:

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule-1.6.min.js"></script>
```

##### At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:

```html
  <h1 s-text="{Hello World}"></h1>
```
<h5>on your main js file call the Seule Object by using this code bellow:</h5>

```javascript
Seule().require(['htmlSetting']);
```

<i>- Now your are ready to go.</i>

##### Hello World Project



[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/1.jpg)](https://codepen.io/el-mehdi-lebbar/pen/pooKBaX)


# html Methods

##### To use html Methods you have to go to the App/index.html file :

for exemple if you wont to add a heading to your project you put:

```html
<h1 s-text="{Hello World}"></h1>
```
the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Method. exemple : 

##### Exemple

```html
<h1 s-text="click{Hello World}">Hello HKG</h1>
```

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/2.jpg)](https://codepen.io/el-mehdi-lebbar/pen/XWWYQxd)

### Style Methods

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

Now with the attribute method, you can define your own attribute in Seule js. like this:

```javascript
Seule().attribute('your-custom-attribute','CSS Properties');
```
##### for exp:
in file App/js/main.js

```javascript
Seule().attribute('your-custom-attribute','background');
```
then you can call the attribute in your html fils

```html
<button your-custom-attribute="mouseover{#22863A}">hover Me</button>
```
if the mouse over on the button element, the result will be:

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/7.jpg)](https://codepen.io/el-mehdi-lebbar/pen/QWWBmLG)

## HTML Attributes Methods

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

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/8.jpg)](https://codepen.io/el-mehdi-lebbar/pen/xxxJJZa)

```html
<button s-link={https://www.google.co.ma/} >click on me to open google</button>
<!-- or by using href -->
<a s-href={https://www.google.co.ma/}>click on me to open google</a>
```
### Use your own HTML Methods

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/9.jpg)](https://codepen.io/el-mehdi-lebbar/pen/Exxppmd)

in Seule.js you can creat your own html method by using setHtmlMethode for exemple:

```html
 <button s-methode="click${`nom` : `Mehdi`}">Say Hello To Mehdi</button>
<p>Result: <span id="response">waiting...</span></p>
```
##### on your main js file call the Seule Methode setHtmlMethode with this script bellow:

```javascript
let p = Seule('p'),
    btn = Seule('button'),
    response = Seule('#response');


Seule().setHtmlMethode('s-methode', function (obj) {
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
##### Javascript

```javascript
//Use Seul element selector to select elements based on the element name. You can select all <h1> elements on a page like this:
let title = Seule('h1');

//Or you can use The #id Selector, that uses the id attribute of an HTML tag to find the specific element.
let title = Seule('#byId');

//Or The .class Selector To find elements with a specific class
let title = Seule('.by-class');
```
##### Examples
When a user clicks on a button, all <p> elements will be hidden:

```javascript
let S = Seule,
    btn = S('button'),
    p = S('p'),
    hideParagraph = function(){
      p.hide();
    }

btn.click(hideParagraph);
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/WNNYada)

##### More Examples of Seule Selectors:
<ul>
	<li><b>Seule("p.intro")</b>  Selects all p elements with class="intro"</li>
	<li><b>Seule("p:first")</b>  Selects the first p element</li>
	<li><b>Seule("ul li:first")</b>  Selects the first li element of the first ul</li>
	<li><b>Seule("ul li:first-child")</b>  Selects the first li element of every ul</li>
	<li><b>Seule("[href]")</b>  Selects all elements with an href attribute.</li>
	<li><b>Seule("a[target='_blank']")</b>  Selects all a elements with a target attribute value equal to "_blank"</li>
	<li><b>Seule("a[target!='_blank']")</b>  Selects all a elements with a target attribute value NOT equal to "_blank"</li>
	<li><b>Seule(":button")</b>  Selects all button elements and input elements of type="button"</li>
	<li><b>Seule("tr:even")</b>   Selects all even tr elements</li>
	<li><b>Seule("tr:odd")</b>  Selects all odd tr elements</li>
	<li><b>Seule("#id, .className, body")</b>  Selects many elements in single time</li>
</ul>

# Seule Events Methods

## What are Events?

An event represents the precise moment when something happens. Examples:

<ul>
	<li>moving a mouse over an element</li>
	<li>selecting a radio button</li>
	<li>clicking on an element</li>
</ul>

for mor details visit  [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

## Seule Syntax For Event Methods

To assign an event to an element you me use the <b>on Method</b>. for exemple To assign  a click event to all paragraphs on a page, you can do this:

```javascript
let paragraphs = Seule('p');
paragraphs.on("click");
```
The next step is to define what should happen when the event fires. You must pass a function to the event:

```javascript
Seule().require(['anime']);

let S = Seule,
p = S('p');

p.on("click" ,function () {
    S(this).anime('flipOutX');
});
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/KKKLrwX)

## Seul Special Events Methods

### Seule click()

The function is executed when the user clicks on the HTML element. for exemple When a click event fires on a button element; show an alert box
	
```javascript
let button = Seule('button');

button.click(function () {
	alert('just a simple click');
})
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/ExxzONG)

### Seule dblClick()

The function is executed when the user double-clicks on the HTML element.

```javascript
let $ = Seule,
button = $('button'),
changeMyText = function(){
  $(this).text('dblClicked !')
};

button.dblClick(changeMyText);
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/VwwOVpY)

### Seule holdOn()
<p>The function is executed when the user make a long presse on the HTML element.</p>

```javascript
Seule('button').click(function () {
    Seule('.spinner').removeClass('active');
}).holdOn(function(){
    Seule('.spinner').addClass('active');
});
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/poomQQO)

### Seule swipeOn()
Detecting a swipe (left, right, top or down) using swipeOn Method

##### Syntax

```javascript
element.swipeOn('Mouvement', callback);
```

##### Javascript

```javascript
let div = Seule('.main');

div.swipeOn("left", function () {
       	console.log("user swipe on left!");
    });
```
### Seule emit()
The emit() method triggers the specified event and the default behavior of an event (like form submission) for the selected elements.

##### Emit Syntax

```javascript
element.emit({target: element, event: event, emit : eventToCopy});
```

###### Exemple : Html Page

```html
<input type="file" id="uploader">
<button id="upload">upload</button>
```
##### Javascript

```javascript
let button = Seule('#upload');
	
//when user double click on button with id upload, is the same think if he click on input file. 
button.emit({target:'#uploader', event:'dblclick', emit:'click'});
```
[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/try-button.png)](https://codepen.io/el-mehdi-lebbar/pen/oNNRJXz)

### Seule- switch()
The switch() method toggles between two custom functions for the selected elements.

##### Switch Syntax

```javascript
element.switch(event, callback1, callback2);
```
##### Exemple: on html page</h5>

```html
<button s-padding={20px} >Switch</button>
```
##### Javascript

```javascript
let button = Seule('button');
button.switch('click', function () {
   Seule().style('background', '#222');
},
    function () {
        Seule().style('background', '#fff');
    });
```

### Seule focus()

The focus() Trigger the focus event for selected elements.

##### Focus Syntax

```javascript
element.focus();
```

### Seule blur()

The blur() Trigger the blur event for the selected elements.

##### Blur Syntax

```javascript
element.blur();
```
## Seule Keybord Event Methods

With hotkey Method in Seulejs you can now handling keyboard shortcuts easly in Javascript. 

##### Hotkey Syntax

```javascript
element.hotkey('Keyboard Keys combination', callback);
```
## SUPPORTED KEYS
<p>For modifier keys you can use  <code>shift</code>, <code>ctrl</code>, <code>alt</code> or <code>meta</code></p>
<p>You can substitute  <code>option</code> for <code>alt</code> and <code>command</code> for <code>meta</code></p>
<p>Other special keys are <code>backspace</code>, <code>tab</code>, <code>enter</code>, <code>return</code>, <code>capslock</code>, <code>esc</code>, <code>escape</code>, <code>space</code>, <code>pageup</code>, <code>pagedown</code>, <code>end</code>, <code>home</code>, <code>left</code>, <code>up</code>, <code>right</code>, <code>down</code>, <code>ins</code>, <code>del</code>, and <code>plus</code>.</p>
<p>Any other key you should be able to reference by name like <code>a</code>, <code>/</code>, <code>$</code>, <code>*</code>, or <code>=</code>.</p>

### Exemple

##### Hotkey event with Single key

```javascript
Seule().require(['hotKey']);

let input = Seule('input');

input.hotKey('.', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
#####  Combination of keys</h5>

```javascript
input.hotKey('ctrl+s', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
On Mac this ends up mapping to command+s whereas on Windows and Linux it maps to ctrl+s.

##### Sequence of keys like Konami Style (:

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
##### Global

```javascript
Seule().hotKeyGlobal('ctrl+a', function () {
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

##### Syntax

```javascript
//show
element.show();
//hide
element.hide();
```

##### Exemple

```javascript
let p = Seule('p'),
    show = Seule('#show'),
    hide = Seule('#hide');

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
#### Exemple

##### Html Page

```html
<div  s-visibility={hidden} >Hello World</div>
```
##### Javascript

```javascript

Seule().require(['htmlSetting']);

let div = Seule('div');

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
let div = Seule('div');

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
Seule().htmlSetting();

let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {
    if(div.getStyle('visibility') === 'hidden'){
        div.style('visibility', 'visible');
    }
});
```
### Seule css()
The css() method sets one or more style properties for the selected elements.

##### Syntax

```javascript
element.css({cssProperty: "value", cssProperty2: "value",...});
```

The following example will set the background-color value for ALL matched elements:

```javascript
Seule("p").css({"background-color" : "yellow"});
```

### Seule class()

This Method is useful to add, remove and toggle CSS classes on an element.

##### Syntax

```javascript
element.class(className, action);
```
##### Exemple

```javascript
let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {

    //to add class style-scope to div 
    div.class('style-scope');
    
    //to remove class style-scope from div class List
    div.class('style-scope', 'remove');
    
    //to toggle class style-scope for div
    div.class('style-scope', 'toggle');
});
```

### Seule addClass()

The addClass() method adds one or more class names to the selected elements.

##### Syntax

```javascript
element.addClass(classes);
```
##### Exemple

```html
<div class="style-scope" >Hello World</div>
<button>add Class</button>
```

##### Javascript

```javascript

let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {
    //the result will be like this <div class="style-scope info another-class" > Hello World</div>
    div.addClass('info another-class');
});
```

### Seule removeClass()

The removeClass() method removes one or more class names from the selected elements.

##### Syntax

```javascript
element.removeClass(classes);
```
##### Exemple

```html
<div class="another-class style-scope info" >Hello World</div>
<button>remove class</button>
```

##### Javascript

```javascript

let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {
    //the result will be like this <div class="another-class" > Hello World</div>
    div.removeClass('style-scope info');
});
```

### Seule toggleClass()

The toggleClass() method toggles between adding and removing one or more class names from the selected elements.

##### Syntax

```javascript
element.toggleClass(classes);
```
##### Exemple

```html
<p>Hello World</p>
<button>remove class</button>
```

##### Javascript

```javascript
Seule("button").click(function(){
  Seule("p").toggleClass("main");
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

let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {
    //shows an array on the console like ['style-scope', 'ytd-app']
    console.log (div.classList());
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

let div = Seule('div'),
    btn = Seule('button');

btn.click(function () {
    //the result will be true 
    console.log (div.classListContains('style-scope'));
    //the result will be false 
    console.log (div.classListContains('style-me'));
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
##### Basic Exemple by using html Method s-anime 

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/3.jpg)](https://codepen.io/el-mehdi-lebbar/pen/MWWXPae)

##### Html Page

```html
<h1 s-anime=click{jello}>Hello World!</h1>
```

##### Javascript

```javascript
Seule().require(['htmlSetting', 'anime']);
```
<h3>Basic Exemple by using anime() Method </h3>

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/4.jpg)](https://codepen.io/el-mehdi-lebbar/pen/JjjZmNL)

##### Html Page

```html
<p>I love JavaScript</p>
<button>Play</button>
```

<h5>Javascript</h5>

```javascript
Seule().require(['anime']);

let p = Seule('p'),
    btn = Seule('button');

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

##### Exemple by using anime() Method with options

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/5.jpg)](https://codepen.io/el-mehdi-lebbar/pen/KKKBXQz)

##### Html Page

```html
<h1>Let's Animate The Web</h1>
```

##### Javascript

```javascript
Seule().require(['anime']);

let h1 = Seule("h1"),
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

##### Exemple by using anime() Method with animation player

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/6.jpg)](https://codepen.io/el-mehdi-lebbar/pen/jOOpaNy)

##### Html Page

```html
<h1 id="headline">Animation is Starting!</h1>
```

##### Javascript

```javascript
Seule().require(['anime']);

let h1 = Seule("#headline"),
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

##### Syntax


```javascript
element.text(value);

//to get the innerText of the selected element 
element.text();
```
##### Exemple

```javascript
Seule("button").click(function(){
  Seule("p").text("Hello world!");
});
```

### Seule val() Method

The val() method returns or sets the value attribute of the selected elements.

##### Syntax

```javascript
element.val(value);

//to get the value of the selected element 
element.val();
```
##### Exemple

```javascript
Seule("button").click(function(){
  Seule("input").val("Hello world!");
});
```

### Seule html() Method

The html() method sets or returns the content (innerHTML) of the selected elements.

##### Syntax

```javascript
element.html(html);

//to get the value of the selected element 
element.html();
```
##### Exemple

```javascript
Seule("button").click(function(){
  Seule("div").html("<h1>Hello world!</h1>");
});
```

### Seule append() Method

The append() method inserts specified content at the end or the beginning of the selected elements. the position parameter can take two arguments, by default is bottom.

<ul>
<li><code>top</code> insert specified content at the beginning of the selected elements.</li>
<li><code>bottom</code> inserts specified content at the end of the selected elements</li>
</ul>

##### Syntax

```javascript
element.append(html, position);
```
##### Exemple

```javascript
Seule("button").click(function(){
  //inserts <b>Appended text</b> at the end of p element 
  Seule("p").append("<b>Appended text</b>");
  //inserts <b>Appended text</b> at the beginning of p element 
  Seule("p").append("<b>Appended text</b>", 'top');
});
```
### Seule insertHtml() Method

The insertHtml() method inserts specified content before or after the selected elements. the position parameter can take two arguments, by default is after.

<ul>
<li><code>after</code> insert specified content after the selected elements.</li>
<li><code>before</code> inserts specified content before the selected elements</li>
</ul>

##### Syntax

```javascript
element.insertHtml(html, position);
```
##### Exemple

```javascript
Seule("button").click(function(){
  //inserts <b>Appended text</b> after p element 
  Seule("p").insert("<b>Appended text</b>");
  //inserts <b>Appended text</b> befor p element 
  Seule("p").insert("<b>Appended text</b>", 'before');
});
```

# Seule Http Request.

All modern browsers have a built-in XMLHttpRequest object to request data from a server.

in Seule Js there is four Methods to loads data from the server using a HTTP POST request:

<ul>
<li><code>post</code> method loads data from the server using a HTTP POST request.</li>
<li><code>get</code> method loads data from the server using a HTTP GET request.</li>
<li><code>getJson</code> method is used to get JSON data using an AJAX HTTP GET request.</li>
<li><code>load</code> method loads data from a server and puts the returned data into the selected element.</li>
</ul>

### Seule post() Method

Load data from the server using a HTTP POST request:

##### Syntax

```javascript
Seule().post(server, data, itsAnObject);
```
##### Exemple

```javascript
Seule().post('demo_test.php', {
    'id':1,
    'name': 'HKG'
}, false).then(function (response) {
    console.log(response);
});
```
##### if response is json Object

```javascript
Seule().post('demo_json.php', {
    'id':1,
    'name': 'HKG'
}, 'true').then(function (item) {
    console.log(item);
});
```

### Seule get() Method

Send an HTTP GET request to a page and get a result back:

##### Syntax

```javascript
Seule().get(server);
```
##### Exemple

```javascript
Seule().get('demo_test.php').then(function (response) {
    console.log(response);
});
```
### Seule getJson() Method

Get JSON data using an AJAX request, and output the result:

##### Syntax

```javascript
Seule().getJson(Json);
```
##### Exemple

```javascript
Seule().getJson('demo_ajax_json.js').then(function (response) {
    console.log(response);
});
```
### Seule load() Method

in Seule you can use the load Method with s-load in html or load() in js file:

##### Syntax 

```javascript
Seule(element).load(URL);
```
##### Exemple: using s-load

```html
<div  s-load="{test.txt}"></div>
```
##### Javascript

```javascript
Seule('div').require(['htmlSetting']);
```

##### Exemple: using load() Method

```html
<div></div>
```
##### Javascript

```javascript
$("div").load("demo_test.txt");
```

### Seule http Request Exemple

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/10.jpg)](https://codepen.io/el-mehdi-lebbar/pen/Jjjepdo)

## Custom HTML Elements with Seule template Method 

Custom Elements allow web developers to define new types of HTML elements. The spec is one of several new API primitives landing under the Web Components umbrella, but it's quite possibly the most important. Web Components don't exist without the features unlocked by custom elements:

* Define new HTML/DOM elements
* Create elements that extend from other elements
* Logically bundle together custom functionality into a single tag
* Extend the API of existing DOM elements

Registering new elements

##### Javascript 

```javascript
Seule().template({
    tag : 'tag-name',
    html: 'Components/your-html-code.html',
    css: 'Components/your-style-sheet.css'
}).then(function (done) {
    //your Javascript
});
```

calling new elements

##### Html

```html
<tag-name></tag-name>
```

### Custom HTML Elements Exemple

[![alt text](https://raw.githubusercontent.com/ElMehdiLebbar/SeuleJs/master/img/11.jpg)](https://codepen.io/el-mehdi-lebbar/pen/mddvExK)


# SeuleJs JSON

JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.

## What is JSON?
* JSON stands for JavaScript Object Notation
* JSON is a lightweight data interchange format
* JSON is language independent *
* JSON is "self-describing" and easy to understand

The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

### JSON Example

```Javascript
[
  {"firstName":"El Mehdi", "lastName":"Lebbar", "age":31},
  {"firstName":"Asmae", "lastName":"Mansour", "age":29},
  {"firstName":"Zineb", "lastName":"Lebbar", "age":5}
]
```
### Seule select() Method

select() method extract specific informations from the Json data, we can use with select() operators:

<ul>
<li><code>= or Like</code> Equal to</li>
<li><code>!= or notLike</code> Not equal to</li>
<li><code> > </code> Greater than.</li>
<li><code> < </code> Less than.</li>
<li><code> >= </code> Greater than or equal to.</li>
<li><code> <= </code> Less than or equal to.</li>
</ul>

##### Syntax

```javascript
Seule().select('* FROM', JsonObject, 'Where colName =', 'Value');

//For Selecting specific column
Seule().select('colName FROM', JsonObject, 'Where colName =', 'Value');
```
##### Exemple:

```javascript
let data = [
    {"firstName":"El Mehdi", "lastName":"Lebbar", "age":31},
    {"firstName":"Asmae", "lastName":"Mansour", "age":29},
    {"firstName":"Zineb", "lastName":"Lebbar", "age":5}
];

let filteringData = Seule().select('* FROM', data, 'Where age =', '31');

console.log(filteringData);

// that return object =  [{"firstName":"El Mehdi", "lastName":"Lebbar", "age":31}]
```
#### select() with BETWEEN command 

The BETWEEN command is used to select values within a given range. The values can be numbers or dates.

The BETWEEN command is inclusive: begin and end values are included. 

##### Syntax

```javascript
Seule().select('* FROM', JsonObject, 'Where colName Between begin And end');
```

The following script selects all products with a price BETWEEN 10 and 20:

```javascript
let data = [
    {"ProductID":1, "ProductName":"Coke", "Price":10},
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chang", "Price":45},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20}
];

let filteringData = Seule().select('* FROM', data, 'Where Price Between 10 AND 20');

console.log(filteringData);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Coke", "Price":10},
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20}
] */
```
#### select() with STRICT BETWEEN command 

The STRICT BETWEEN command has the same functionality as BETWEEN command, But the begin and end values are not included.

##### Syntax

```javascript
Seule().select('* FROM', JsonObject, 'Where colName Strict Between begin And end');
```

The following script selects all products with a price BETWEEN 10 and 20 but products with 10 and 20 are not included:

```javascript

let filteringData = Seule().select('* FROM', data, 'Where Price Strcit Between 10 AND 20');

console.log(filteringData);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chocolade", "Price":19}
] */
```
#### Select() with ORDER BY Keyword

The ORDER BY keyword is used to sort the result-set in ascending or descending order.

The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the reverse() Method at the end.

##### Syntax

```javascript
Seule().select('* FROM', JsonObject, 'Where colName =', 'Value', 'order by colName');

//with Between or Strict Between
Seule().select('* FROM', JsonObject, 'Where colName Strict Between begin And end order by colName');
```

### Seule Not() Method

Unfortunately at the moment we can not use Select() Method to select specific columns at time, but with Not() Method we can do the same thing but with logical reasoning, inverse and contrapositives.

##### For Exemple, if you want to select ProductName and Price from Json we can write:  

```javascript
Seule().not(['ProductID'], 'FROM', data, 'Where Price Between 10 AND 20');

/*  that return object =  [
    {"ProductName":"Chais", "Price":18},
    {"ProductName":"Chocolade", "Price":19}
] */
```
##### Syntax 
```javascript
Seule().not(['colName', 'colName1', 'colName2'...], 'FROM', JsonObject, 'Where Condition');
```

### Seule in() Method

in() method extract specific informations with specific values from the Json data, with select() we can use operators:

<ul>
<li><code>Like</code> Equal to</li>
<li><code>Not Like</code> Not equal to</li>
</ul>

##### Syntax

```javascript
Seule().in(JsonObject, 'where firstName like', ['value1, value2...'], 'order by colName');

//For Selecting specific column
Seule().in(JsonObject, 'where colName not like', ['value1, value2...'], 'order by colName');
```
The following script selects all products with a price 10 or 20:

```javascript
Seule().in(data, 'where colName like', [10, 20]);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Coke", "Price":10},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20}
] */
```
If you use not like in like place, the script selects all products, only products with a price 10 or 20 are not included:

```javascript
Seule().in(data, 'where colName not like', [10, 20]);

/*  that return object =  [
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chang", "Price":45},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19}
] */
```
### Seule Search() Method

Search() Method in Seule js allow user to perform entire search in Json Object for a specified string.

##### Syntax

```javascript
Seule().search('String', 'in', JsonObject);
```
The following script selects all products that contain 'cha' in all columns and rows:

```javascript
Seule().search('cha', 'in', data);

/*  that return object =  [
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chang", "Price":45}
] */
```
### Seule Delete() Method

The Delete() Methode is used to delete existing records in a Json Object.

##### Syntax

```javascript
Seule().delete('From', JsonObject, 'Where colName =', 'Value');
```
The following script deletes the Product "Chais" from the "data" Json:

```javascript
Seule().delete('From', data, 'where ProductName like', 'Chais');

/*  that return object =  [
    {"ProductID":1, "ProductName":"Coke", "Price":10},
    {"ProductID":3, "ProductName":"Chang", "Price":45},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20
] */
```

### Seule Update() Method

The Update() Methode is used to modify the existing records in a Json Object.

##### Syntax

```javascript
Seule().update(JsonObject, 'Set colName =', 'NewValue', 'Where anyColName =', 'Value');
```
The following script deletes the Product "Chais" from the "data" Json:

```javascript
Seule().update(data,'set ProductName =', 'Milk' , 'Where Price =', 10);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Milk", "Price":10},
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chang", "Price":45},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20}
] */
```
### Seule Insert() Method

The Update() Methode is used to insert new records in a Json Object.

##### Syntax

```javascript
Seule().insert('InTo', JsonObject, 'VALUES', {});
```
The following Script inserts a new record in the "ProductName" Json Array:

```javascript

Seule().insert('InTo', data, 'Values', {"ProductID":7, "ProductName":"Coffee", "Price":8});

/*  that return object =  [
    {"ProductID":1, "ProductName":"Milk", "Price":10},
    {"ProductID":2, "ProductName":"Chais", "Price":18},
    {"ProductID":3, "ProductName":"Chang", "Price":45},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20},
    {"ProductID":7, "ProductName":"Coffee", "Price":8}
] */
```

### Seule Alter() Method

The Alter() Method is used to add new columns or delete even modify an existing columns in Json Object.

#### ALTER - ADD Column

To add a column in a table, use the following syntax:

```javascript
Seule().alter(JsonObject, 'Add', ['colName1', 'colName2'...]);
```
The following script adds a "Quantity" column to the "Products" Json Object:

```javascript

Seule().alter(data, 'Add', ['Quantity']);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Milk", "Price":10, "Quantity": ""},
    {"ProductID":2, "ProductName":"Chais", "Price":18, "Quantity": ""},
    {"ProductID":3, "ProductName":"Chang", "Price":45, "Quantity": ""},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Price":30, "Quantity": ""},
    {"ProductID":5, "ProductName":"Chocolade", "Price":19, "Quantity": ""},
    {"ProductID":6, "ProductName":"Orange Jus", "Price":20, "Quantity": ""}
] */
```
#### ALTER - DROP Column

To delete one or more columns in a table, use the following syntax

```javascript
Seule().alter(JsonObject, 'Drop', ['colName1', 'colName2'...]);
```
The following script deletes the "Price" column from the "Products" Json Object:

```javascript

Seule().alter(data, 'Drop', ['Price']);

/*  that return object =  [
    {"ProductID":1, "ProductName":"Milk", "Quantity": ""},
    {"ProductID":2, "ProductName":"Chais", "Quantity": ""},
    {"ProductID":3, "ProductName":"Chang", "Quantity": ""},
    {"ProductID":4, "ProductName":"Aniseed Syrup", "Quantity": ""},
    {"ProductID":5, "ProductName":"Chocolade", "Quantity": ""},
    {"ProductID":6, "ProductName":"Orange Jus", "Quantity": ""}
] */
```
#### ALTER - RENAME Column

To rename a column in a table, use the following syntax

```javascript
Seule().alter(JsonObject, 'RENAME COLUMN colName TO newColName');
```
The following script change the name of "ProductID" column to "id" column in the "Products" Json Object:

```javascript

Seule().alter(data, 'RENAME COLUMN ProductID TO id');

/*  that return object =  [
    {"id":1, "ProductName":"Milk", "Quantity": ""},
    {"id":2, "ProductName":"Chais", "Quantity": ""},
    {"id":3, "ProductName":"Chang", "Quantity": ""},
    {"id":4, "ProductName":"Aniseed Syrup", "Quantity": ""},
    {"id":5, "ProductName":"Chocolade", "Quantity": ""},
    {"id":6, "ProductName":"Orange Jus", "Quantity": ""}
] */
```

# Seule Traversing Methods

### Seule Parent() Method

The parent() method returns the direct parent element of the selected element.

##### Syntax

```javascript
element.parent();
```
##### Exemple : Return the direct parent element of span:

```javascript
Seule("span").parent().css({"color": "red", "border": "2px solid red"});
```
### Seule first() Method

The first() method returns the first element of the selected elements.

##### Syntax

```javascript
element.first();
```
### Seule Last() Method

The last() method returns the last element of the selected elements.

##### Syntax

```javascript
element.last();
```
### Seule Find() Method

The find() method returns descendant elements of the selected element.

##### Syntax

```javascript
element.find(tag);
```

##### Exemple : Return all span elements that are descendants of ul:

```javascript
Seule("ul").find("span").css({"color": "red", "border": "2px solid red"});
```

### Seule Child() Method

The children() method returns all direct children of the selected element.

##### Syntax

```javascript
element.children();

//to select specific children we can use index
element.children(index);
```

##### Exemple : Return elements that are direct children of ul:

```javascript
Seule("ul").children().css({"color": "red", "border": "2px solid red"});
```
# Scrolling with Seule Js

### Seule onScroll()

The onscroll event occurs when an element's scrollbar is being scrolled.

##### Syntax

```javascript
element.onScroll(handler);
```

Execute a Function when a <div> element is being scrolled:

```javascript
Seule('div').onScroll(function () {
   //Do Something
});
```

### Seule scroll()

Scrolls in the selected element or in specified position in the page.

##### Syntax

```javascript
element.scroll();

//to scroll in specified position
element.scroll(Int);
```
The following script scolls to div with id equal 'here':

```javascript
Seule().require(['scroll.smooth']);

Seule('#here').scroll();
```
### Seule scrollTop & scrollBottom

ScrollTop Method is using to Scrolls to the top of the page and ScrollBottom to Scrolls to the bottom of the page.

##### Syntax

```javascript
//Scrolls to the top
Seule().scrollTop();

//Scrolls to the bottom
Seule().scrollBottom();
```

### Seule scrollPosition()

This method returns the vertical or the horizontal position of the scrollbar for the FIRST matched element.

##### Syntax

```javascript
//returns the vertical position
element.scrollPosition();

//returns the horizontal position
element.scrollPosition("horizontally");
```

## Add the Seule Scroll markup to your HTML.

No special markup needed—just standard anchor links. Give the anchor location an ID just like you normally would.

```html
<a data-scroll href="#bazinga">Anchor Link</a>
```

# Seule Local Storage

The local Storage allow to save key/value pairs in a web browser or nodewebkit applications.

The local Storage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

The localStorage property is read-only.

###  Seule Storage()

Storage create a new local storage and save data across browser sessions.

##### Syntax

```javascript
Seule().storage(storeName ,JsonObject)
```

###  Seule getStorage()

The getItem() method returns value of the specified Storage Object item.

##### Syntax

```javascript
Seule().storage(storeName ,JsonObject)
```

##### Exemple

```javascript

let data,
    users = [
    {name : "El Mehdi", password: "123456"},
    {name : "Asmae", password: "555000"}
];

Seule().storage('users', users);

data = Seule().getStorage('items');

console.log(data[0].name); // Result --> El Mehdi

```
###  Storage storageDelete() Method

The storageDelete() method removes the specified Storage Object item.

##### Syntax

```javascript
Seule().storageDelete(storeName)
```
###  Storage storageClear() Method

The storageClear() method removes all the Storage Object item for this domain.

##### Syntax

```javascript
Seule().storageClear()
```

# Seule Cryptography

Seule Cryptography is a method of protecting information and communications through the use of codes so that only those for whom the information is intended can read and process it.

### Plain text encryption

```javascript
// Encrypt
let encryptText = Seule().encrypt('secret key 123', 'my message');

// Decrypt
let originalText = Seule().decrypt('secret key 123', encryptText);

console.log(originalText); // Result --> my message
```
### Object encryption

```javascript

let data = [{id: 1}, {id: 2}]

// Encrypt
let encryptObject = Seule().encrypt('secret key 123', data);

// Decrypt
let originalObject = Seule().decrypt('secret key 123', encryptText);

console.log(originalObject); // Result --> [{id: 1}, {id: 2}]
```
# Seule Other Methods

### Seule attr()

The attr() method sets or returns attributes and values of the selected elements.

When this method is used to return the attribute value, it returns the value of the FIRST matched element.

When this method is used to set attribute values, it sets one or more attribute/value pairs for the set of matched elements.

##### Syntax

```javascript
//Return the value of an attribute:
element.attr(attribute)

//Set the attribute and value:
element.attr(attribute,value)
```

##### Example: Set the width attribute of an image:

```javascript
Seule("button").click(function(){
  Seule("img").attr("width","500");
});
```

### Seule widht() & height()

* widht() Sets or returns the widht of an element
* height() Sets or returns the height of an element

##### Syntax

```javascript
//Return the width:
element.width()

//Set the width:
element.width(value)
```
##### Example : Return the width or the height of a div element:

```javascript
Seule("button").click(function(){
    alert(Seule("div").width());//return the widht
    alert(Seule("div").height());//return the height
}); 
```

### Seule orientation()

The orientation Method return the current orientation of the screen.

##### Syntax

```javascript
element.orientation() 
```

## Seule Filter() 

Filter() show only the elements that has a Specifics data markup in the selected elements

##### Syntax

```javascript
element.filter('data-markup'); 
```

##### Exemple

```html
<ul>
    <li data-soda>Coke</li>
    <li>Chais</li>
    <li>Chang</li>
    <li data-soda>Pepsi</li>
</ul>
```
The following script shows only Soda Drinks

```javascript
Seule('ul').filter('soda');
/* Result -->
    . Coke
    . Pepsi
*/
```
