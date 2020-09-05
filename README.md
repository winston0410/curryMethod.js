# methodCurry.js

[![Maintainability](https://api.codeclimate.com/v1/badges/0d8faad59fcaa2f3ffaf/maintainability)](https://codeclimate.com/github/winston0410/method-plumber.js/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0d8faad59fcaa2f3ffaf/test_coverage)](https://codeclimate.com/github/winston0410/method-plumber.js/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/method-plumber.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/method-plumber.js?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/8680d880cabd4a4fba62d086c2f0ab95)](https://www.codacy.com/manual/winston0410/method-plumber.js?utm_source=github.com&utm_medium=referral&utm_content=winston0410/method-plumber.js&utm_campaign=Badge_Grade)

A lightweight module that helps you curry any methods and use them in a pipe.

```javascript
//Curry element.classList.add()
const addClass = curryMethod(1, 'classList.add')

const element = document.getElementById('test-id')

//Both would work, just like those curried functions provided by Ramda
addClass('first-class')(element)
addClass('second-class', element)
```
