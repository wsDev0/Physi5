# SolidRect
----------------
   The SolidRect function / class is used to create cubes that can collide and have Physics If wanted to.

   Syntax: `var MyRect = new SolidRect(width, height, x, y, type, color)`
        
   ***Properties***
   width (w) - the width of the Rectangle (int)

   height (h) - the height of the Rectangle (int)

   x - the x axis of the Rectangle (int)

   y - the y axis of the Rectangle (int)

   type - Basically the name / layer of the rectangle (mostly always want to keep it "Default") (string)
   
   color (c) - color of rect
   sx - the start x, is not changed
   
   sy - the start y, is not changed

  ***SolidRect.Collide***
   Tests if the rect collides with other rects in a list, returns {is: (boolean, check if rect is colliding), index: (int, get the index in the list of which the rect is colliding with)}
    
   Syntax:`MyRect.Collide(rect, RectList, type, CollisionSides)`
   
   rect - can be any rect but Is reccomended to be the rect you wan't to collide with another rect (SolidRect)
   
   RectList - the list of rects that you want your rect to collide with (SolidRect list)
   
   type - the list of layers/types your rect can collide with, recommended to keep it just "Default" (string list)
   
   CollisionSides -  The sides of the rect you wan't to have collision on, leave empty to do all sides. ({empty:true(default,turn false if you want to do different sides), top:false, bottom:false,left:false,right:false})
  
 ***SolidRect.PhysicsUpdate***
    Update physics for rect. Can't manually set velocity when using this (will be fixed).
    
   Syntax: `MyRect.PhysicsUpdate(RectList,SlideSpeed,MaxFallSpeed)`
   
   RectList - list of rects to collide with. (SolidRect list)
   
   SlideSpeed - the speed in which a rect will go left and right when pushed(will be removed in later versions for more realistic physics) (int)
   
   MaxFallSpeed - the max speed in which a rect can fall(will probably be removed in later versions for more realistic physics) (int)
   
    