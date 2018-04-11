user@3G-10:~/src/js-word-scramble$ node --use-strict
> let greeting = "The quick brown fox, jumps over the lazy dog"
undefined
> let greetingSplit = greeting.split();
undefined
> greetingSplit
[ 'The quick brown fox, jumps over the lazy dog' ]
> let greetingSplit = greeting.split(' ');
TypeError: Identifier 'greetingSplit' has already been declared
    at repl:1:1
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:539:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> let greetingSplit2 = greeting.split(' ');
undefined
> greetingSplit2
[ 'The',
  'quick',
  'brown',
  'fox,',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog' ]
> greetingSplit2.join()
'The,quick,brown,fox,,jumps,over,the,lazy,dog'


> greetingSplit2
[ 'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog' ]
> greetingSplit2.join('');
'Thequickbrownfoxjumpsoverthelazydog'
>
> function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

undefined
> getRandomInt(5);
1
> getRandomInt(5);
3
> getRandomInt(5);
3
> greetingSplit2
[ 'The',
  'quick',
  'brown',
  'fox,',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog' ]
> greetingSplit2[getRandomInt(greetingSplit2.length())]
TypeError: greetingSplit2.length is not a function
    at repl:1:44
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:539:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> greetingSplit2[getRandomInt(greetingSplit2.length)]
'lazy'
> greetingSplit2[getRandomInt(greetingSplit2.length)]
'jumps'
> greetingSplit2[getRandomInt(greetingSplit2.length)]
'lazy'
> greetingSplit2[getRandomInt(greetingSplit2.length)]
'over'
> greetingSplit2[getRandomInt(greetingSplit2.length)]
'over'
> let x = greetingSplit2[getRandomInt(greetingSplit2.length)];
undefined
> let y = greetingSplit2[getRandomInt(greetingSplit2.length)];
undefined
> indexx = greetingSplit2.indexOf(x);
ReferenceError: indexx is not defined
    at repl:1:8
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:539:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> let indexx = greetingSplit2.indexOf(x);
undefined
> x
'lazy'
> indexx
7
> greetingSplit2
[ 'The',
  'quick',
  'brown',
  'fox,',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog' ]
> let indexy = greetingSplit2.indexOf(y);
undefined
> greetingsplit2.splice(indexx, 1, y);
ReferenceError: greetingsplit2 is not defined
    at repl:1:1
    at sigintHandlersWrap (vm.js:22:35)
    at sigintHandlersWrap (vm.js:73:12)
    at ContextifyScript.Script.runInThisContext (vm.js:21:12)
    at REPLServer.defaultEval (repl.js:340:29)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:539:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
> greetingSplit2.splice(indexx, 1, y);
[ 'lazy' ]
> greetingSplit2
[ 'The',
  'quick',
  'brown',
  'fox,',
  'jumps',
  'over',
  'the',
  'The',
  'dog' ]
> greetingSplit2.splice(indexy, 1, x);
[ 'The' ]
> greetingSplit2
[ 'lazy',
  'quick',
  'brown',
  'fox,',
  'jumps',
  'over',
  'the',
  'The',
  'dog' ]
>
> let candy = new Map();
undefined
> candy.set('blue', 'blueberries')
Map { 'blue' => 'blueberries' }
> candy.set('pink', 'cotton candy')
Map { 'blue' => 'blueberries', 'pink' => 'cotton candy' }
> candy.set('purple', 'grape')
Map {
  'blue' => 'blueberries',
  'pink' => 'cotton candy',
  'purple' => 'grape' }
> candy.set('red', 'apple')
Map {
  'blue' => 'blueberries',
  'pink' => 'cotton candy',
  'purple' => 'grape',
  'red' => 'apple' }
> candy.set('yellow', 'orange')
Map {
  'blue' => 'blueberries',
  'pink' => 'cotton candy',
  'purple' => 'grape',
  'red' => 'apple',
  'yellow' => 'orange' }
> for (let color of candy) {
... console.log(`The ${color[1]} flavor is colored ${color[0]}`); }
The blueberries flavor is colored blue
The cotton candy flavor is colored pink
The grape flavor is colored purple
The apple flavor is colored red
The orange flavor is colored yellow
undefined
> candy.get('black');
undefined
> candy.get('pink');
'cotton candy'
>

let candy = Map {
  'blue' => 'blueberries',
  'pink' => 'cotton candy',
  'purple' => 'grape',
  'red' => 'apple',
  'yellow' => 'orange' };


function candyColor(color, candyMap) {
  if (candyMap.has(color)) {
    return candyMap.get(color)
  } else {
    console.log("Sorry, that color doesn't have a flavor yet!")
  }
}


function flavor(colorArr, candyMap) {
let flavorArr = [];
for (let color of colorArr) {
if (candyMap.has(color) {
flavorArr.push(candyMap.get(color));
}  else {
flavorArr.push(null);
}
}
return flavorArr;
}