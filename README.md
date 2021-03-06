# url-friendlier
[![version](https://img.shields.io/badge/version-2.0.3-green.svg)](https://www.npmjs.com/package/@dawidjasiczek/url-friendlier)

Make your string url friendly.

## Instalation
```js
npm install @dawidjasiczek/url-friendlier
```
## Usage
#### Require:
```js
const uF = require('@dawidjasiczek/url-friendlier')
```
#### Example 

```js
// Example string
let sc = "   . Special polish ąóź and ggerman öæß characters             ------hello"

console.log("String before change: ", sc ,"\n") 
console.log("String after change:", uF.friendly(sc),"\n")
console.log("String after change, skipped special chars:", uF.friendly(sc, true),"\n")
```

**Example output:**
```sh
String before change:     . Special polish ąóź and ggerman öæß characters             ------hello 
String after change: -special-polish-aoz-and-ggerman-oeaess-characters-hello 
String after change, skip special chars: -special-polish-and-ggerman-characters-hello
```
