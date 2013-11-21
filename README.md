The Classify Pattern
====================

The Classify Pattern enables public, private, and even protected members, with support for automatic garbage collection;
true prototypal inheritance; and, default constructors. Using the Module Pattern, the script on the driver page executes
in half the time of the Module Pattern -- and the collection of objects it instantiates is almost fifty times smaller.
Classify classes are "plain old Javascript" - which means there is no compile step and no bulky, pretentious framework.
They are also comparatively IDE- and debugger-friendly.

More importantly, the Classify Pattern encourages functional thinking. The Module Pattern (along with other popular
"OOP-like" JS design patterns) promotes a fundamental misunderstanding of closures, scoping, prototypes, and the "this"
keyword -- all of which tend to cause dramatic performance issues and long-standing, nearly untraceable defects.

Files
=====
<table>
<tr><td>classify.js</td><td>convenience methods that simplify our object-oriented programming pattern</td></tr>
<tr><td>module-customer.js</td><td>demonstrates a popular pattern (the Module Pattern) for defining base and child "classes" with public, private, and protected members</td></tr>
<tr><td>classify-customer.js</td><td>demonstrates another way to define the same classes, using the convenience methods from classify.js</td></tr>
<tr><td>test.html</td><td>"driver" page that can be modified to profile either pattern</td></tr>
</table>

Credits
=======

The classify() function was entirely my own invention. I essentially plagiarazed the ideas for private
(http://stackoverflow.com/questions/8580540/javascript-calling-private-method-from-prototype-method) and protected
(http://stackoverflow.com/questions/8703698/javascript-module-pattern-protected-members) methods from Stack Overflow. The
extendClass convenience method works in a manner similar to the Typescript "extends" keyword
(http://www.typescriptlang.org/Playground/; select "simple inheritance" from the drop-down). Support for private 
variables is an extensive, prototype-friendly variation on an idea from Chris West
(http://cwestblog.com/2011/05/04/private-variables-in-javascript/).
