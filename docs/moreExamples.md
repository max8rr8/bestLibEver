# More examples
## Console
```js
const a = require('')
console.log(a.helloWorld()) // prints 'Hello world!'
```

## File
```js
const a = require('')
const fs = require('fs')
fs.writeFileSync('/hello', a.helloWorld())
```

## Server
```js
const a = require('')
const fs = require('http')
http.createServer((req,res)=> res.end(a.helloWorld())).listen(8080)
```