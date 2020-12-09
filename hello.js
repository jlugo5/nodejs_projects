console.log("Hello")

var url = require('url')

var google_address = "https://www.google.com/"
var parseAddress = url.parse(google_address,true)

console.log(parseAddress.host)
console.log(parseAddress.pathname)
console.log(parseAddress)