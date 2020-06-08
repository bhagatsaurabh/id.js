# id.js
A small JS library to easily access DOM nodes with id's

Reference your html elements by their id's in JavaScript without doing `document.getElement....` again and again


## Example
---
In HTML

```html
<header id='header'>My Header</header>
<div id='content'></div>
<footer id='footer'>My Header</footer>
```

In JavaScript

(directly reference the elements by their id's)

```javascript
header.classList.toggle('hide');
content.appendChild(someContent);
footer.style.opacity = '.6';
```
