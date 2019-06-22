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
	
<ul>
	<li>cd /path/to/your/app</li>
	<li>/path/to/nw .</li>
</ul>



<p> <span style="color:red">"/path/to/nw"</span> is the binary file of NW.js. On Windows, it’s nw.exe; On Linux, it’s nw; On Mac, it’s nwjs.app/Contents/MacOS/nwjs. </p>

<i>- Now your are ready to go.</i>

# html Methodes

<h5>To use html Methodes you have to go to the App/index.html file :</h5>

<p>for exemple if you wont to add a heading to your project you put:</p>

```html
<h1 s-texte="'Hello World'"></h1>
```
<p>the new feature that you can now, adding a javascript event, by the way if you wont to change text when clicking on the html element, you can simply add the word click to the html s-texte Methode. exemple : </p>

```html
<h1 s-texte="click'Hello World'"></h1>
```	
<h3>Style Methodes</h3>

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
</ul>


