# curryMethod.js

[![Maintainability](https://api.codeclimate.com/v1/badges/0d8faad59fcaa2f3ffaf/maintainability)](https://codeclimate.com/github/winston0410/method-plumber.js/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0d8faad59fcaa2f3ffaf/test_coverage)](https://codeclimate.com/github/winston0410/method-plumber.js/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/method-plumber.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/method-plumber.js?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/8680d880cabd4a4fba62d086c2f0ab95)](https://www.codacy.com/manual/winston0410/method-plumber.js?utm_source=github.com&utm_medium=referral&utm_content=winston0410/method-plumber.js&utm_campaign=Badge_Grade)

A lightweight module that helps you curry any methods and use them in a pipe and function composition.

```javascript
//Curry element.classList.add()
const addClass = curryMethod(1, 'classList.add')

const element = document.getElementById('test-id')

//Both would work, just like those curried functions provided by Ramda
addClass('first-class')(element)
addClass('second-class', element)
//These functions is identical with element.classList.add('first-class')
```

## Why do you want to curry methods?

By currying methods, you can easily create partial functions, make it work in a pipe and reuse your code to a greater extent.

## Installation

With npm:

```bash
npm i curry-method
```

Or via CDN:

```html
<script defer src="https://unpkg.com/browse/curry-method/dist/index.esm.js"></script>

<script defer src="https://unpkg.com/browse/curry-method/dist/index.cjs.js"></script>
```

Or directly include the script in you site:

```html
<script defer src="/path/to/your/dir/index.esm.js"></script>
```

Then in the script where you want to use this library:

```javascript
import {
  curryMethod
} from 'curry-method'
```
