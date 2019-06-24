# Seule Js
A complete Javascript Frameworks like jQuery for nwjs applications that allows you to create apps with a simple way,

# Nw SDK Downloads
<ul>
	<li>for Windows 64bit : http://bit.ly/2ItW4oC</li>
	<li>for Windows 32bit : http://bit.ly/2WVnEzb</li>
	<li>for Linux 64bit : http://bit.ly/2L5WZNL</li>
	<li>for Linux 32bit : http://bit.ly/2FqWWbE</li>
	<li>for Mac OS X 64bit : http://bit.ly/2WTQHbc</li>
</ul>

# Getting Started
<h5>When cloning the Seule-js repository download the new js SDK, and extract it to the same folder as Seul-js</h5>
<h5>Open file App/js/main.js and include Seule object with:</h5>
<pre>
	let seule = new Seule('#app');
	seule.html();
</pre>

<h5>Run your app</h5>
<p>in your terminal:</p>

<pre>
	cd /path/to/your/app
	/path/to/nw .
</pre>

<p> <span style="color:red">"/path/to/nw"</span> is the binary file of NW.js. On Windows, it’s nw.exe; On Linux, it’s nw; On Mac, it’s nwjs.app/Contents/MacOS/nwjs. </p>

<i>- Now your are ready to go.</i>

# html Methods

<h5>To use html Methods you have to go to the App/index.html file :</h5>

<p>for exemple if you wont to add a heading to your project you put:</p>

```html
<h1 s-texte="'Hello World'"></h1>
```
<p>the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Method. exemple : </p>

```html
<h1 s-texte="click'Hello World'"></h1>
```	
<h3>Style Methods</h3>

<ul>
	<h6><b>HTML Text Formatting</b></h6>
	<li><b>s-couleur:</b> for changing the color of text</li>
	<li><b>s-police:</b>  for changing the font family of a text</li>
	<li><b>s-taille-texte:</b>  Set the font size for different elements</li>
	<li><b>s-style-police:</b>  Set different font styles for different elementss</li>
	<li><b>s-effet-texte:</b>  specifies the decoration added to text</li>
	<li><b>s-couleur-effet-texte:</b>  specifies the color of the text-decoration (underlines, overlines, linethroughs).</li>
	<li><b>s-ligne-effet-texte:</b>  sets the kind of text decoration to use (like underline, overline, line-through).</li>
	<li><b>s-style-effet-texte:</b>  sets the style of the text decoration (like solid, wavy, dotted, dashed, double).</li>
	<li><b>s-alignement-texte:</b>  specifies the horizontal alignment of text in an element.</li>
	<h6><b>Format the background</b></h6>
	<li><b>s-arriere-plan:</b> used to define the background effects for elements.</li>
	<li><b>s-couleur-arriere-plan:</b> specifies the background color of an element.</li>
	<li><b>s-image-arriere-plan:</b> specifies an image to use as the background of an element.</li>
	<li><b>s-position-arriere-plan:</b> Sets the starting position of a background image.</li>
	<li><b>s-repeat-arriere-plan:</b> Sets how a background image will be repeated.</li>
	<li><b>s-taille-arriere-plan:</b> Specifies the size of the background image(s).</li>
	<h6><b>Borders Style</b></h6>
	<li><b>s-bordure:</b> Set the style of the borders for different elements.</li>
	<li><b>s-bordure-inferieure:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-bordure-superieure:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-bordure-gauche:</b> Set the style of the left border for different elements</li>
	<li><b>s-bordure-droite:</b> Set the style of the right border for different elements</li>
	<h6><b>layout Options</b></h6>
	<li><b>s-flotte:</b> specifies how an element should float.</li>
	<li><b>s-position:</b> specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).</li>
	<li><b>s-calque:</b> Set the style of the bottom border for different elements</li>
	<li><b>s-afficher:</b> specifies the display behavior (the type of rendering box) of an element.</li>
	<li><b>s-opacite:</b> can take a value from 0.0 - 1.0. The lower value, the more transparent.</li>
	<li><b>s-visibilite:</b> specifies whether or not an element is visible.</li>
	<li><b>s-remplissage:</b> are used to generate space around an element's content, inside of any defined borders.</li>
	<li><b>s-marge:</b> are used to create space around elements, outside of any defined borders.</li>
	<li><b>s-largeur:</b> Sets the width of an element.</li>
	<li><b>s-hauteur:</b> Sets the height of an element.</li>
	
</ul>

<p>Now with the attribute method, you can define your own attribute in Single js. like this:</p>
<pre>
	seule.attribut('your-custom-attribute','CSS Properties');
</pre>
<h5>for exp:</h5>
<p>in file App/js/main.js</p>
<pre>
	seule.attribut('your-custom-attribute','color');
</pre>
<p>then you can call the attribut in your html fils</p>

```html
<h1 your-custom-attribute="click'#22863A'" >Change my color to green when you click on me</h1>
```
<p>if the user click on the h1 element, the result will be:</p>

```diff
+ Change my color to orange when you click on me
```

<h3>HTML Attributes Methods</h3>
<ul>
	<li><b>s-texte:</b> for changing the color of text</li>
	<li><b>s-titre:</b>  Specifies extra information about an element (displayed as a tool tip)</li>
	<li><b>s-valeur:</b>  specifies the value for an input field</li>
	<li><b>s-type:</b>  specifies the type of <input> element to display.</li>
	<li><b>s-reserve:</b>  specifies a hint that describes the expected value of an input field (a sample value or a short description of the format).</li>
	<li><b>s-nom:</b>  Specifies a name for an element</li>
	<li><b>s-id:</b>  Specifies a unique id for an element.</li>
	<li><b>s-classe:</b>  change the class name for an element</li>
	<li><b>s-select:</b>  To define a pre-selected option</li>
	<li><b>s-desactive:</b>  Specifies that an input element should be disabled.</li>
	<li><b>s-lecture-mode:</b>   specifies that the input field is read only (cannot be changed).</li>
	<li><b>s-longueur-maximale:</b>  the input field will not accept more than the allowed number of characters.</li>
	<li><b>s-autocomplete:</b>   specifies whether a form or input field should have autocomplete on or off.</li>
	<li><b>s-non-valide:</b>  specifies that the form data should not be validated when submitted.</li>
	<li><b>s-formulaire:</b>  specifies one or more forms an <input> element belongs to..</li>
	<li><b>s-taille:</b>  specifies the size (in characters) for the input field</li>
	<li><b>s-plusieurs:</b>  specifies that the user is allowed to enter more than one value in the <input> element.</li>
	<li><b>s-rangs:</b>  specifies the lines numbers of a text area.</li>
	<li><b>s-cols:</b>  specifies the visible width of a text area.</li>
	<li><b>s-alt:</b>  Specifies an alternative text for an image, when the image cannot be displayed.</li>
	<li><b>s-source:</b>  Specifies the URL (web address) for an image.</li>
	<li><b>s-cible:</b>  specifies where to open the linked document</li>
	<li><b>s-lien:</b>  Specifies the URL (web address) for a link.</li>
</ul>

