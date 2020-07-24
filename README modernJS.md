# Modern JS

// About JS
JS is object-oriented language:

(1) as opposed to procedural. most of the variables are objects - special variable type that can have its subvariables(called properties) and functions(called methods). Together object properties and methods are called its memebers.

var name = 'Larry Ulman'

- name - is an object of type String.
- as it is a string object, name has a property called length.
- similraly to the object it has several methods: substring(), toUpperCase()
- parentheses at the end distinguish properties and methods.

(2) with object oriented programming I use object notation to refer to objects members: someObject.someProperty and someObject.someMethod()

name= name.toUpperCase() // 'LARRY ULMAN'

in PHP it differes:
$name = strtoupper($name); //'LARRY ULMAN'

In procedural code, to apply function to a variable we pass the variable to the function as an argument. In OOP the variable own function (its method) is called by the object itself.

BUT JS is prototype based, not class based. We do not define classes.

JS is weakly typed language: variables and data can be easily passed from one type to another. Eg, create a number and convert it to a string.

JS is a scripting language: script can be executed in browser without application.

// JS Programming Goals / developmen approaches
progressive enchancement - making reliable functionality with simple JS and after that applying more complex things. Make a from in JS, enchance with Ajax.
unobstrusive - meanting improves user experience, not worsens it.

JS in Action:

1. we set it up with html,js and css files.
2. now we set event listeners to execute JS.
   JS is event driven Language: does something after event occured.
