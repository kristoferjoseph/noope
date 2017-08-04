# noope
Useful no op function that logs a stack when called

## install
`npm i noope`

## usage
```
var noope = require('noope')

function hasClicky (click) {
  click = click || noope
  click()
}
```
## test
`npm it`
