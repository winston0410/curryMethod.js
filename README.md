# methodCurry.js

A lightweight module that helps you curry any methods and use them in a pipe.

```javascript
//Curry element.classList.add()
const addClass = curryMethod(1, 'classList.add')

const element = document.getElementById('test-id')

//Both would work, just like those curried functions provided by Ramda
addClass('first-class')(element)
addClass('second-class', element)
```
