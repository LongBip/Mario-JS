var Objects = {
ini: function(data) {
var sky = {
image: new Objects.tasks.Image(data.graphic, 0, 208, 960, 208),
x: 0,
y: 0,
w: 2880,
h: 624
};
    var map = {
        image: new Objects.tasks.Image(data.graphic, 0, 0, 1440, 208),
        x: 0,
        y: 0,
        w: 4320,
        h: 624
    };
    var mario = new Objects.tasks.Mario(data.graphic, 0, 0, 48, 48);
    var walls = [[0,528,1104,96],[528,336,144,48],[576,144,48,48],[960,480,144,48],[1008,432,96,48],
                                [1056,384,48,48],[1296,528,480,96],[1296,480,144,48],[1296,432,96,48],[1296,384,48,48],
                                [1776,480,48,144],[1920,432,48,192],[2064,384,48,240],[2208,336,48,288],[2352,336,528,96],
                                [2352,432,384,96],[2352,528,1968,96],[2256,96,144,48],[2544,96,48,48],[2736,96,48,48],[2928,96,48,48],
                                [3120,144,48,48],[3024,336,48,48],[3216,336,48,48],[3504,480,288,48],[3552,432,240,48],[3600,384,192,48],
                                [3648,336,144,48],[3696,288,96,48],[3744,240,48,48],[-48,0,48,624],[4320,0,48,624]];

    data.objects = {};
    data.objects.mario = mario;
    data.objects.wallTable = [];

    data.objects.sky = sky;
    data.objects.map = map;
    walls.forEach(function(z) {
        data.objects.wallTable.push(new Objects.tasks.Wall(z[0],z[1],z[2],z[3]));

    });
},

tasks: {
    Image: function(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    },
   Mario: function(img, x, y, w, h) {
        var self = this;
        
        this.image = new Objects.tasks.Image(img, 1056, 208, 16, 16);
        this.animation = {
            movingRight: {
                frame: [new Objects.tasks.Image(img,976,208,16,16),
                new Objects.tasks.Image(img,960,208,16,16),
                new Objects.tasks.Image(img,976,208,16,16),
                new Objects.tasks.Image(img,992,208,16,16)],
                currentFrame: 0
            },
            movingLeft: {
                frame: [new Objects.tasks.Image(img,976,224,16,16),
                new Objects.tasks.Image(img,960,224,16,16),
                new Objects.tasks.Image(img,976,224,16,16),
                new Objects.tasks.Image(img,992,224,16,16)],
                currentFrame: 0
            },
            standingRight: new Objects.tasks.Image(img,1056,208,16,16),
            standingLeft: new Objects.tasks.Image(img,1056,224,16,16),
            jumpingRight: new Objects.tasks.Image(img,1024,208,16,16),
            jumpingLeft: new Objects.tasks.Image(img,1024,224,16,16)
        };
        this.state = {
            standing: {
                move: function(data) {
                        if(self.velocityY == 0) {
                            self.velocityY -= 23;
                        }
                    
                },
                animation: function(data) {
                    if(self.direction==="right") {
                        self.image = self.animation.standingRight;
                    } else {
                        self.image = self.animation.standingLeft;
                    }
                }
            },
            jumping: {
                move: function(data) {
                    
                     { 
                  if (self.direction === "right") {
                    if (self.x < data.canvas.fgCanvas.width/2 || data.objects.map.x <= data.canvas.fgCanvas.width - data.objects.map.width) {
                      self.x += self.velocityX;
                    } else {
                      data.objects.map.x -= self.velocityX;
                      for (var i = 0; i < data.objects.wallTable.length; i++) {
                        data.objects.wallTable[i].x -= self.velocityX;
                      }
                    }
                  } else {
                    if (self.x > data.canvas.fgCanvas.width/2 || data.objects.map.x >= 0) {
                      self.x -= self.velocityX;
                    } else {
                      data.objects.map.x += self.velocityX;
                      for (var i = 0; i < data.objects.wallTable.length; i++) {
                        data.objects.wallTable[i].x += self.velocityX;
                      }
                    }
                  }
                }
                },
                animation: function(data) {
                    if(self.direction==="right") {
                        self.image = self.animation.jumpingRight;
                    } else {
                        self.image = self.animation.jumpingLeft;
                    }
                }
            },
            moving: {
                move: function(data) {
                   
                },
                animation: function(data) {
                    if(self.direction === "right") {
                        if(data.frameNumber % 5 == 0) {
                            self.image = self.animation.movingRight.frame[self.animation.movingRight.currentFrame];
                            self.animation.movingRight.currentFrame++;
                        }
                        
                        if(self.animation.movingRight.currentFrame>3) {
                            self.animation.movingRight.currentFrame=0;
                        }
                    } else {
                        if(data.frameNumber % 5 == 0) {
                            self.image = self.animation.movingLeft.frame[self.animation.movingLeft.currentFrame];
                            self.animation.movingLeft.currentFrame++;
                        }
                        
                        if(self.animation.movingLeft.currentFrame>3) {
                            self.animation.movingLeft.currentFrame=0;
                        }
                    }
                }
            }
        };
        this.currentState = self.state.standing;
        this.direction = "right";
        this.x =x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.velocityY = 1;
        this.velocityX = 8;
    },
    Wall: function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
	this.h = h;
	this.typ = "wall";
}
}
}

