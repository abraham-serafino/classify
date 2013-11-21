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
  classify.js           -- convenience methods that simplify our object-oriented programming pattern<br/>
  module-customer.js    -- demonstrates a popular pattern (the Module Pattern) for defining base and child "classes"
                              with public, private, and protected members<br/>
  classify-customer.js  -- demonstrates another way to define the same classes, using the convenience methods from
                              classify.js<br/>
  test.html             -- "driver" page that can be modified to profile either pattern <br/>
