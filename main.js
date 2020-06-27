
p5.prototype.keyMap = [];

//PhysicsTypes
p5.prototype.pt = class {
  static() {
    return 2;
  }
  add() {
    return 0;
  }
  smooth() {
    return 1;
  }
  
}

p5.prototype.updateWindow = function(w = windowWidth, h = windowHeight) {
   dW = w;
   dH = h;
   resizeCanvas(dW, dH);
}

//SolidRect not fully finished
p5.prototype.SolidRect = function(w=0,h=0,x=0,y=0,t="Default", c=color(255,255,255)) {
  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.sx = x;
  this.sy = y;
  this.c = c;
  this.rotation = 0;
  this.Physics = {velocityX:0, velocityY: 0, weight: 1};
  this.isCollide = {Ground: false}
  this.type = t;
  this.id = random(1, 500000000000000000000)
  this.Collide = function(rect1, rect2 = [], type=["Default"], cd = {left: false, right:false, top:false, bottom:false, empty: false, space:10}) {
   let col = false;
   let index = 0;
  for(x=0;x<rect2.length;x++) {
        //Collision algorithm made by wsDev
        var disyTop = ((rect1.y+rect1.h/2)-((rect2[x].y-rect2[x].h/2)))
        var disyBot = ((rect1.y-rect1.h/2)-((rect2[x].y+rect2[x].h/2)))
        var disxLef = ((rect1.x+rect1.w/2)-((rect2[x].x-rect2[x].w/2)))
        var disxRig = ((rect1.x-rect1.w/2)-((rect2[x].x+rect2[x].w/2)))
        
        //console.log('\n\nr1x: ' + rect1.x + '\nr1y: ' + rect1.y + '\nr2x: ' + rect2[x].x + "\nr2y: " + rect2[x].y + "\nydis: " + disyTop + ":" + disyBot +"\nxdis: " + disxLef + ":" + disxRig + "\n")
        
       if  
           (
           disyTop >= 0 
           && disyBot <= 0 
           && disxLef >= 0 
           && disxRig <=0 
           && type.includes(rect2[x].type)
           && cd.empty == false
           && rect2[x].id!=this.id
           ) {
           col=true;
           index = x;
           }
       
       //left
       if
           (
           disyTop >= 0 
           && disyBot <= 0 
           && disxLef >= 0 
           && disxLef <= cd.space
           && type.includes(rect2[x].type)
           && cd.left == true
           && cd.empty == true
           && rect2[x].id!=this.id
          ) 
           {
            col = true;
            index = x;
           }
    
        //right
        if
           (
           disyTop >= 0 
           && disyBot <= 0 
           && disxRig <= 0 
           && disxRig >= -cd.space
           && type.includes(rect2[x].type)
           && cd.right == true
           && cd.empty == true
           && rect2[x].id!=this.id
          ) 
           {
             col = true;
             index = x;
           
           }
    
       //top
         if
           (
           disyTop >= 0 
           && disyTop <= cd.space
           && disxLef >= 0 
           && disxRig <=0
           && type.includes(rect2[x].type)
           && cd.top == true
           && cd.empty == true
           && rect2[x].id!=this.id
          ) 
           {
             col = true;
             index = x;
           }
    
    //bottom
         if
           (
           disyBot <= 0 
           && disyBot >= -cd.space 
           && disxLef >= 0 
           && disxRig <=0
           && type.includes(rect2[x].type)
           && cd.bottom == true
           && cd.empty == true
           && rect2[x].id!=this.id
          ) 
           {
             col = true;
             index = x;
           }
          

}
  
    if(col==true) {
      return {is: true, index: index};
    }
    else {
        
      return {is: false, index:index};
    }
  }
  
  //CharacterController needs some fixing
  /*this.CharacterController = function(blocks = [], speed = 1, control = {l: LEFT_ARROW, r: RIGHT_ARROW, d: DOWN_ARROW, u: UP_ARROW}) {
    var PhysicsType = new pt();
    this.JumpHeight = 1;
       this.KeyDo(control.l, function(self) {
    if(!keyMap[control.r]) {
      self.setVelocity(-speed,0, PhysicsType.static());
    }
    
  })
  
  this.KeyDo(control.r, function(self) {
    if(!keyMap[control.l]) {
      self.setVelocity(speed, 0, PhysicsType.static());
    }
    
  })
  
  this.KeyMulti([control.r, control.l], function(self) {
     
  }, function (self) { self.stopVelocity(true, false)})
  
  this.GravityUpdate(PhysicsType.smooth());
  
    var tc = this.Collide(this, blocks, ["Default"], {empty: true, top:true, space:10});
    
    
    //Early dev stage might need to fix this later
  if(tc.is==true) {
    
    if(blocks[tc.index].Physics.velocityY<0) {
    this.setVelocity(0,-this.Physics.velocityY -  (abs(blocks[tc.index].Physics.velocityY)) - 0.05, PhysicsType.smooth())
    }
    else {
      this.setVelocity(0,-this.Physics.velocityY*1.5-0.08, PhysicsType.smooth())
    }
    this.KeyDo(control.u, function(self) {
    
      self.setVelocity(0, -this.JumpHeight, PhysicsType.static());
    
    
  })
    
  }
  
  if(this.Collide(this, blocks, ["Default"], {empty: true, left:true, space:1})==true) {
    this.setVelocity(-speed,0, PhysicsType.static())

    
    
  }
  if(this.Collide(this, blocks, ["Default"], {empty: true, right:true, space:1})==true) {
    this.setVelocity(speed,0, PhysicsType.static())

    
    
  }
  if(this.Collide(this, blocks, ["Default"], {empty: true, bottom:true, space:5})==true) {
    this.setVelocity(0,1,PhysicsType.static());
    
    
    
  }
  
  
  

  
  
}*/
  
  this.PhysicsUpdate = function(blocks, speed = 1, MaxFallSpeed = 10) {
    var PhysicsType = new pt();
       
  this.GravityUpdate(PhysicsType.smooth(), MaxFallSpeed);
  var tc = this.Collide(this, blocks, ["Default"], {empty: true, top:true, space:10});
    
    
    //Early dev stage might need to fix this later
  if(tc.is==true) {
    if(blocks[tc.index].Physics.velocityY<0) {
    this.setVelocity(0,-this.Physics.velocityY -  (abs(blocks[tc.index].Physics.velocityY)) - 0.05, PhysicsType.smooth())
    }
    else {
      this.setVelocity(0,-this.Physics.velocityY*1.5-0.08, PhysicsType.smooth())
    }
    
    
    
  }
  
    // may need to replace speed with something else later
  if(this.Collide(this, blocks, ["Default"], {empty: true, left:true, space:1}).is==true) {
    this.setVelocity(-speed,0, PhysicsType.static())

    
    
  }
  
  else if(this.Collide(this, blocks, ["Default"], {empty: true, right:true, space:1}).is==true) {
    this.setVelocity(speed,0, PhysicsType.static())

    
    
  }
    else {
      if(this.Physics.velocityX!=0) {
       this.stopVelocity(true, false)
        
      }
  }
  var bc = this.Collide(this, blocks, ["Default"], {empty: true, bottom:true, space:5});
  if(bc.is==true && tc.is==false) {

    this.setVelocity(0,1, PhysicsType.static())
    
    
  }
  
  
  
  
  

  
  
}
  this.GravityUpdate = function(physicsType, maxVY = 10) {
     if (this.isCollide.Ground == false) {
       //console.log(this.Physics.velocityY);
      if(this.Physics.velocityY<maxVY) {
       if(physicsType == 0) {
       this.Physics.velocityY += (this.Physics.weight*0.1)+(this.Physics.velocityY*0.001);
     }
       if(physicsType == 1)
        {
          this.Physics.velocityY += (this.Physics.weight*0.001);
        }
       if(physicsType == 2)
        {
          this.Physics.velocityY = (this.Physics.weight*0.001);
        }
      }
     
  }
     
     
  }
  this.setVelocity = function(x,y,physicsType) {
    if(physicsType == 0) {
      if(y!=0) {
       this.Physics.velocityY += (this.Physics.weight*0.1)+(y);
      }
      if(x!=0) {
      this.Physics.velocityX += (this.Physics.weight*0.1)+(x);
      }
     }
       if(physicsType == 1)
        {
          if(x!=0) {
          this.Physics.velocityX += (x);
          }
          if(y!=0) {
          this.Physics.velocityY += (y);
          }
        }
       if(physicsType == 2)
        {
          if(x!=0) {
          this.Physics.velocityX = (x);
          }
          if(y!=0) {
          this.Physics.velocityY = (y);
          }
        }
  }
  this.stopVelocity = function(x=true, y=true) {
        if(x==true) {
        this.Physics.velocityX = 0;
        }
        if(y==true) {
        this.Physics.velocityY = 0;
        }
  }
  this.GetVelocity = function(){
    return {x: this.Physics.velocityX, y: this.Physics.velocityY};
  }
  this.CollisionCheck = function() {
  
  }
  this.KeyDo = function(k, does=function(self){}, stop = function(self){}) {
        if (keyMap[k] && keyIsPressed == true) {
          does(this);
        
        }
        else {
          stop(this);
        }
  }
  this.KeyMulti = function(k = [], does=function(self){}, stop = function(self){}) {
    doit=false
       for(x=0;x<k.length;x++) {
        if (keyMap[k[x]] && keyIsPressed == true) {
          doit = true
        
        }
        }
       if(doit==true) {
          does(this);
          }
      else {
          stop(this);
        }
  }
  
  this.rotate = function(vel=0) {
  this.rotation += (vel * 0.001) * PI;
  }
  this.draw = function() {
    this.x += this.Physics.velocityX;
    this.y += this.Physics.velocityY;
    push()
    
    translate(this.x,this.y);
    rotate(this.rotation);
    fill(c);
    rect(-this.w/2,-this.h/2,this.w,this.h);
    pop()
  }
}

window.onkeydown = window.onkeyup = function(e){
    e = e || event; 
    keyMap[e.keyCode] = e.type == 'keydown';
    
}
