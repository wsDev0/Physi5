# SolidRect
----------------
   The SolidRect function / class is used to create cubes that can collide and have Physics If wanted to.

   Syntax: `var MyRect = new SolidRect(width, height, x, y, type, color)`
    
   width (w) - the width of the rectangle (float)

   height (h) - the height of the rectangle (float)

   x - the x axis of the rectangle (float)

   y - the y axis of the rectangle (float)

   type - Basically the name / layer of the rectangle (mostly always want to keep it "Default") (string)
   
   color (c) - color of rect
   
   sx - the start x, is not changed (float)
   
   sy - the start y, is not changed (float)

   rotation - the rotation of the rect (float)


# SolidRect.Collide
   Tests if the rect collides with other rects in a list, returns {is: (boolean, check if rect is colliding), index: (int, get the index in the list of which the rect is colliding with)}
    
   Syntax:`MyRect.Collide(rect, RectList, type, CollisionSides)`
   
   rect - can be any rect but Is reccomended to be the rect you wan't to collide with another rect (SolidRect)
   
   RectList - the list of rects that you want your rect to collide with (SolidRect list)
   
   type - the list of layers/types your rect can collide with, recommended to keep it just "Default" (string list)
   
   CollisionSides -  The sides of the rect you wan't to have collision on, leave empty to do all sides. ({empty:true(default,turn false if you want to do different sides), top:false, bottom:false,left:false,right:false})
  
  
  
# SolidRect.PhysicsUpdate
   Updates physics for rect. Can't manually set velocity when using this (will be fixed).
    
   Syntax: `MyRect.PhysicsUpdate(RectList,SlideSpeed,MaxFallSpeed)`
   
   RectList - list of rects to collide with. (SolidRect list)
   
   SlideSpeed - the speed in which a rect will go left and right when pushed(will be removed in later versions for more realistic physics) (float)
   
   MaxFallSpeed - the max speed in which a rect can fall(will probably be removed in later versions for more realistic physics) (float)
 
 
 
# SolidRect.GravityUpdate
   Makes the object fall. Does not test for collisions.
   
   Syntax: `MyRect.GravityUpdate(physicsType, MaxFallSpeed)`
   
   physicsType - The Physics Type (0,1,2) Reccommended to use the PhysicsType class (int/PhysicsType class)
   
   MaxFallSpeed - the max speed in which a rect can fall(will probably be removed in later versions for more realistic physics) (int)
   
   
   
# SolidRect.setVelocity
   Sets the velocity for each axis. Can not set velocity to 0 with this.
   
   Syntax: `MyRect.setVelocity(vx, vy, PhysicsType)`
   
   vx - velocity on x axis
   
   vy - velocity on y axis
   
   physicsType - The Physics Type (0,1,2) Reccommended to use the PhysicsType class (int/PhysicsType class)
   
   
   
# SolidRect.stopVelocity
   Stops velocity on a chosen axis.
   
   Syntax: `MyRect.stopVelocity(stopX, stopY)`
   
   stopX - stops the velocity on x axis if true (boolean)
   
   stopY - stops the velocity on y axis if true (boolean)



# SolidRect.getVelocity
   Gets the velocity of rect. returns {x: (float), y(float)}
    
   Syntax: `var vel = MyRect.getVelocity()`




# SolidRect.KeyDo
   Executes a function when a key is pressed or held down, then executes another function when a key is not being pressed.
    
   Syntax: `MyRect.KeyDo(keyCode, keyPressed(self){}, keyNotPressed(self){})`
   
   keyCode - the keyCode of the key that will be pressed (int)
   
   keyPressed - function executed when the key is pressed or held down with the current SolidRect as "self" (function)
   
   keyNotPresed - function executes when the key is not being held down with current SolidRect as "self" (function)



# SolidRect.KeyMulti
   Executes a function when keys are pressed or held down, then executes another function when all keys are not pressed.
    
   Syntax: `MyRect.KeyMulti(keyCodeList, keyPressed(self){}, keyNotPressed(self){})`
   
   keyCodeList - the keyCodes of the keys that will be pressed (int list)
   
   keyPressed - function executed when one of the keys in the keycode list is pressed or held down with the current SolidRect as "self" (function)
   
   keyNotPresed - function executes when all keys in the keycode list are not being held down with current SolidRect as "self" (function)



# SolidRect.rotate
   Rotates the rect, does not Interact with physics yet.
    
   Syntax: `MyRect.rotate(deg)`
   
   deg - the degrees the rect will rotate, not quite accurate yet.
   
   
   
# SolidRect.draw
   Draws the rect on the p5js canvas.
    
   Syntax: `MyRect.draw()`
    
