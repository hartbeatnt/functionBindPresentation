const slide5text = 
`
function bind(func, context) {





}
`

const slide6text = 
`
function bind(func, context) {

  return function(){

  
  }
}
`

const slide7text = 
`
function bind(func, context) {

  return function(){

    return func()
  }
}
`

const slide8text = 
`
function bind(func, context) {

  return function(){

    return func.apply(context)
  }
}
`

const slide10text = 
`
function bind(func, context) {
  
  return function(){

    return func.apply(context)
  }
}
`

const slide11text = 
`
function bind(func, context) {
  var args = Array.from(arguments).slice(2)
  return function(){

    return func.apply(context)
  }
}
`

const slide12text = 
`
function bind(func, context) {
  var args = Array.from(arguments).slice(2)
  return function(){

    return func.apply(context, args)
  }
}
`

const slide15text = 
`
function bind(func, context) {
  var args = Array.from(arguments).slice(2)
  return function(){
    var newArgs = Array.from(arguments)
    return func.apply(context, args)
  }
}
`

const slide16text = 
`
function bind(func, context) {
  var args = Array.from(arguments).slice(2)
  return function(){
    var newArgs = Array.from(arguments)
    return func.apply(context, args.concat(newArgs))
  }
}
`

export {
  slide5text,
  slide6text,
  slide7text,
  slide8text,
  slide10text,
  slide11text,
  slide12text,
  slide15text,
  slide16text
}