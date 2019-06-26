# Seule Js
A complete fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.


# Getting Started
<h5>You can create an index.html file and include Seule with:</h5>

```html
<script src="https://cdn.jsdelivr.net/gh/ElMehdiLebbar/SeuleJs/seule.min.js"></script>
```
<h5>At the core of Seule.js is a system that enables us to declaratively render data to the DOM using straightforward template syntax:</h5>

```html
<div id="app">
  <h1 s-text="'Hello World'"></h1>
</div>
```
<h5>on your main js file call the Seule Object by using this code bellow:</h5>

```javascript
let seule = new Seule('#app');
seule.htmlSetting();
```

<i>- Now your are ready to go.</i>

# html Methods

<h5>To use html Methods you have to go to the App/index.html file :</h5>

<p>for exemple if you wont to add a heading to your project you put:</p>

```html
<h1 s-text="'Hello World'"></h1>
```
<p>the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Method. exemple : </p>

```html
<h1 s-text="click'Hello World'"></h1>
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
seule.attribute('your-custom-attribute','CSS Properties');
```
<h5>for exp:</h5>
<p>in file App/js/main.js</p>
```javascript
	seule.attribute('your-custom-attribute','color');
```
<p>then you can call the attribute in your html fils</p>

```html
<h1 your-custom-attribute="click'#22863A'" >Change my color to green when you click on me</h1>
```
<p>if the user click on the h1 element, the result will be:</p>

```diff
+ Change my color to orange when you click on me
```

<h3>HTML Attributes Methods</h3>
<ul>
	<li><b>s-text:</b> for changing the color of text</li>
	<li><b>s-title:</b>  Specifies extra information about an element (displayed as a tool tip)</li>
	<li><b>s-val:</b>  specifies the value for an input field</li>
	<li><b>s-type:</b>  specifies the type of <input> element to display.</li>
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
	<li><b>s-form:</b>  specifies one or more forms an <input> element belongs to..</li>
	<li><b>s-size:</b>  specifies the size (in characters) for the input field</li>
	<li><b>s-multiple:</b>  specifies that the user is allowed to enter more than one value in the <input> element.</li>
	<li><b>s-rows:</b>  specifies the lines numbers of a text area.</li>
	<li><b>s-cols:</b>  specifies the visible width of a text area.</li>
	<li><b>s-alt:</b>  Specifies an alternative text for an image, when the image cannot be displayed.</li>
	<li><b>s-source:</b>  Specifies the URL (web address) for an image.</li>
	<li><b>s-cible:</b>  specifies where to open the linked document</li>
	<li><b>s-target:</b>  specifies the URL of the page the link goes to.</li>
	<li><b>s-link:</b>  Specifies the URL (web address) for a link.</li>
</ul>
<p>to open a specific link with s-lien html method, there are two ways, one for changing the current location and the other for opening new window, for exp:</p>
<i>Fisrt Way with event: automatically Makes Links Open in a New Window</i>
	
```html
<button s-link="click'https://www.google.co.ma/'" >click on me to open google</button>
```
<p>As you see, the first way must be accompanied with a javascript event and the URL is automatically Opened in a New Window, to open URL in the same window, you may use s-lien with-out event or by using s-href inside the -a- tag</p>

```html
<button s-link="'https://www.google.co.ma/'" >click on me to open google</button>
<!-- or by using href -->
<a s-href="'https://www.google.co.ma/'">click on me to open google</a>
```
