# localscript

localscript is aim to using browser local storage to cache script file.

## How to install
`npm install localscript`

## How to use

You can use it easily, only two part

First you change the script tag type `text/javascript` to `localscript`

Expamle
```html
<html>
  <head>
    <title>Demo</title>
    <script type="localscript" name='demo' src='test.js'></script>
  </head>
  <body>
  ...
  </body>
  <script type="text/javascript" src="localscript.js"></script>
</html>
```

There are two params

**name** this is MUST attribute, then arrtibute is used to point which is the script file

**src** thi is MUST attribute, this is real script file

At the last, you can add `localscript.js` file at any where in the body or document, it will run directly, so you should add it in the last of document.