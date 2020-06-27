# P5.simulate
----------------
***WARNING, THIS PACKAGE IS STILL IN DEVELOPEMENT. YOU MIGHT NOT WANT TO USE THIN UNTIL v 1.0.0.0 COMES OUT***
P5.simulate, an "in developement" package for p5.js

# Documentation
----------------
 ***SolidRect***
 
The SolidRect function / class is used to create cubes that can collide and have Physics If wanted to.

Syntax:
`var MyRect = new SolidRect(width, height, x, y, type, color)`
          
width - the width of the Rectangle (int)

height - the height of the Rectangle (int)

x - the x axis of the Rectangle (int)

y - the y axis of the Rectangle (int)

type - Basically the name / layer of the rectangle (mostly always want to keep it "Default") (string)

***SolidRect.Collide***
    Test if the rect collides with other rects in a list, returns {is: (boolean), index: (int)}
    
    Syntax:
    `MyRect.Collide(MyRect, RectList, type, CollisionSides)`


         
# Example
----------------
***Example***
This is an example of what this can do so far:

https://editor.p5js.org/wsDev/full/dBoFKv1JL
