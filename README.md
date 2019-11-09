# Introduction
Seule is A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started
<h5>You can create an index.html file and include Seule with:</h5>

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule-0.1.3/seule.min.js"></script>
```

<h5>At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:</h5>

```html
  <h1 s-text="{Hello World}"></h1>
```
<h5>on your main js file call the Seule Object by using this code bellow:</h5>

```javascript
Seule.htmlSetting();
```

<i>- Now your are ready to go.</i>

# html Methods

<h5>To use html Methods you have to go to the App/index.html file :</h5>

<p>for exemple if you wont to add a heading to your project you put:</p>

```html
<h1 s-text="{Hello World}"></h1>
```
<p>the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Method. exemple : </p>

```html
<h1 s-text="click{Hello World}">Hello HKG</h1>
```	
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
Seule.attribute('your-custom-attribute','color');
```
<p>then you can call the attribute in your html fils</p>

```html
<h1 your-custom-attribute="click{#22863A}" >Change my color to green by clicking on me</h1>
```
<p>if the user click on the h1 element, the result will be:</p>

```diff
+ Change my color to green by clicking on me
```

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
<p>open a specific link with s-link html method, there are two ways.</p>
<i>Fisrt Way with event</i>
	
```html
<button s-link="click{https://www.google.co.ma/}" >click on me to open google</button>
```
<p>As you see, the first way must be accompanied with a javascript event, to open URL in the same window directly, you may use s-link with-out event or by using s-href inside the -a- tag</p>

```html
<button s-link="{https://www.google.co.ma/}" >click on me to open google</button>
<!-- or by using href -->
<a s-href="{https://www.google.co.ma/}">click on me to open google</a>
```
<h3>Use your own HTML Methods</h3>
<p>in Seule.js you can creat your own html method by using setHtmlMethode for exemple:</p>

```html
  <h1 your-custom-methode="mouseup${`nom` : `Mehdi`}">click me to show mehdi on your console</h1>
```
<h5>on your main js file call the Seule Methode setHtmlMethode with this script bellow:</h5>

```javascript
Seule.setHtmlMethode('your-custom-methode', function (obj) {
	// action goes here!!
        console.log('hello M. '+ obj.nom);
    });
```
# Seule Selectors
<p>Like jQuery Selectors, Seule Selectors allow you to select and manipulate HTML element(s).</p>

<p>Seule Selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.</p>

<p>Howe can i use this Seule Selectors? is too simple by using seule function + the CSS selectors. exemple:</p>

<h5>Html Page</h5>

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
<h5>- click()</h5>
<p>The function is executed when the user clicks on the HTML element. for exemple When a click event fires on a <button> element; show an alert box</p>
	
```javascript
let button = $seule('button');

button.click(function () {
	alert('just a simple click');
})
```
<h5>- dblclick()</h5>
<p>The function is executed when the user double-clicks on the HTML element.</p>

```javascript
let button = $seule('button');

button.dblclick(function () {
	alert('you win !');
})
```

<h5>- holdOn()</h5>
<p>The function is executed when the user make a long presse on the HTML element.</p>

```javascript
let button = $seule('button');

button.holdOn(function () {
	console.log('this is a long press');
})
```
<h5>- swipeOn()</h5>
<p>Detecting a swipe (left, right, top or down) using swipeOn Method</p>

<h5>SwipeOn Syntax</h5>

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
<h5>- emit()</h5>
<p>The emit() method triggers the specified event and the default behavior of an event (like form submission) for the selected elements.</p>

<h5>Emit Syntax</h5>

```javascript
element.emit('idOfElement', event, eventToCopy);
```

<h5>Javascript</h5>

<h5>Exemple : Html Page</h5>

```html
<input type="file" id="uploader">
<button id="upload">upload</button>
```
<h5>Javascript</h5>

```javascript
let button = $seule('#upload');
	
//when user double click on button with id upload, is the same think if he click on input file. 
button.emit('uploader', 'dblclick', 'click');
```
<h5>- switch()</h5>
<p>The switch() method toggles between two custom functions for the selected elements.</p>

<h5>Switch Syntax</h5>

```javascript
element.switch(event, callback1, callback2);
```
<h5>Exemple: on html page</h5>

```html
<button s-padding="{20px}" >Switch</button>
```
<h5>Javascript</h5>

```javascript
let button = $seule('button');
button.switch('click', function () {
   Seule.style('background', '#222');
},
    function () {
        Seule.style('background', '#fff');
    });
```

<h5>- focus()</h5>

<p>The focus() Trigger the focus event for selected elements.</p>

<h5>Focus Syntax</h5>

```javascript
element.focus();
```

<h5>- blur()</h5>

<p>The blur() Trigger the blur event for the selected elements.</p>

<h5>Blur Syntax</h5>

```javascript
element.blur();
```
<h3>Seule Keybord Event Methods</h3>

<p>With hotkey Method in Seulejs you can now handling keyboard shortcuts easly in Javascript. </p>

<h5>Hotkey Syntax</h5>

```javascript
element.hotkey('Keyboard Keys combination', callback);
```
<h2>SUPPORTED KEYS</h2>
<p>For modifier keys you can use  <code>shift</code>, <code>ctrl</code>, <code>alt</code> or <code>meta</code></p>
<p>You can substitute  <code>option</code> for <code>alt</code> and <code>command</code> for <code>meta</code></p>
<p>Other special keys are <code>backspace</code>, <code>tab</code>, <code>enter</code>, <code>return</code>, <code>capslock</code>, <code>esc</code>, <code>escape</code>, <code>space</code>, <code>pageup</code>, <code>pagedown</code>, <code>end</code>, <code>home</code>, <code>left</code>, <code>up</code>, <code>right</code>, <code>down</code>, <code>ins</code>, <code>del</code>, and <code>plus</code>.</p>
<p>Any other key you should be able to reference by name like <code>a</code>, <code>/</code>, <code>$</code>, <code>*</code>, or <code>=</code>.</p>

<h3>Exemple</h3>

<h5>Hotkey event with Single key</h5>

```javascript
let input = $seule('input');

input.hotKey('.', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
<h5>- Combination of keys</h5>

```javascript
input.hotKey('ctrl+s', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
<p>On Mac this ends up mapping to command+s whereas on Windows and Linux it maps to ctrl+s.</p>

<h5>- Sequence of keys like Konami Style (:</h5>

```javascript
input.hotKey('up up down down left right left right b a enter', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
<p>You can also make a sequence that includes key combinations within it.</p>

```javascript
input.hotKey('g o command+enter', function () {
    /* do something */
    alert('keyboard shortcuts');
});
```
<h5>- Global</h5>

```javascript
Seule.hotKeyGlobal('ctrl+a', function () {
    /* do something */
    alert('Global keyboard shortcuts');
});
```
<p>This extension of hotkey allows you to specify keyboard events that will work anywhere including inside textarea/input fields.</p>

# Seule Effects
<p>
When you’re struggling to maintain the attention of your users, cool JavaScript effects are just what the doctor ordered. Now you just need to pick the right animations suited to your niche and users.
</p>
<p>10 Easy Seule Methods to Spice Up Your Site with Animations. Then you have Seule.anime Method. It's a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.</p>

<h5>- show() & hide()</h5>
<p>You can hide and show HTML elements with the hide() and show() methods:</p>

<h5>Syntax</h5>

```javascript
//show
element.show();
//hide
element.hide();
```

<h3>Exemple</h3>

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

<h5>- visible()</h5>
<p>The seule visible method sets whether an element should be visible or not.</p>

<p>The seule visible method allows the author to show or hide an element. It is similar to the show() & hide() methode. However, the difference is that if you set element.hide(), it hides the entire element, while visible(false) means that the contents of the element will be invisible, but the element stays in its original position and size.</p>

<h5>Syntax</h5>

```javascript
//visible
element.visible();
//hidden
element.hide(false);
```
<h5>- isVisible()</h5>
<p>The seule isVisible method return whether an element is be visible or hidden. the return result will be true or false</p>

<h5>Syntax</h5>

```javascript
//visible
element.isVisible();
```
<h3>Exemple</h3>

<h5>Html Page</h5>

```html
<div  s-visibility="{hidden}" >Hello World</div>
```
<h5>Javascript</h5>

```javascript
Seule.htmlSetting();

let div = $seule('div');

if(div.isVisible() === false){
    div.visible();
}
```
<h5>- opacity()</h5>
<p>The opacity() Method describes the transparency-level of an element, where 1 is not transperant at all, 0.5 is 50% see-through, and 0 is completely transparent.</p>
<h5>Syntax</h5>

```javascript
//value can take from 0 to 1
element.opacity(Value);
```
<h3>Exemple</h3>

```javascript

let div = $seule('div');

div.opacity(0.5);
```


<h5>- style() & getStyle()</h5>
<p>The style() method sets one or more style properties for the selected elements. for returning the value of element css propertie you should use getStyle() Method</p>
<h5>Syntax</h5>

```javascript
//changing the css propertie for an element
element.style(cssProperty, value);

//getting the value of css propertie for an element
element.getStyle(cssProperty);
```
<h3>Exemple</h3>

<h5>Html Page</h5>

```html
<div  s-visibility="{hidden}" >Hello World</div>
<button>Show</button>
```

<h5>Javascript</h5>

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
<h5>- class()</h5>
<p>This Method is useful to add, remove and toggle CSS classes on an element.</p>
<h5>Syntax</h5>

```javascript
element.class(className, action);
```
<h3>Exemple</h3>
<h5>Javascript</h5>

```javascript
Seule.htmlSetting();

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
