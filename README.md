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

# html: Methodes

<h5> to use html Methodes you have to go to the index.html file :</h5>
<pre>
	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hello world</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body id="app">

<div id="demo">
    <h1 s-texte="Hello" id="element" class="hello"></h1>
</div>

<footer s-texte="© Copyright 2003-2018 El Mehdi Labbar | Privacy | Powered by Stream Team" s-couleur="#fff" class="info"></footer>

<script src="js/seule.min.js"></script>
<script src="js/main.js"></script>

</body>
</html>
</pre>
