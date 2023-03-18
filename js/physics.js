var Physics = {
    update: function(data) {
    Physics.tasks.Gravity(data.objects.mario);
    Physics.tasks.CollisionDetection(data);
    },
    
    tasks: {
        Gravity: function(object) {
            object.velocityY += 1;
            object.y += object.velocityY;
        },
        
        CollisionDetection: function(data) {
            var mario = data.objects.mario;
            
            var DetectCollision = function(object) {
                if(mario.x < object.x + object.w && mario.x + mario.w > object.x && 
                    mario.y < object.y + object.h && mario.y + mario.h > object.y) {
                    Physics.tasks.Collision(data, object);
                }
            }
            
            data.objects.wallTable.forEach(function(wall) {
                DetectCollision(wall);
            });
        },
        
        Collision: function(data, object) {
            var mario = data.objects.mario;
            
            if(object.type === "wall") {
                if(mario.y + mario.h > object.y && mario.x + mario.w > object.x + 10 &&
                   mario.x < object.x + object.width - 10 && mario.velocityY >= 0) {
                    mario.y = object.y - mario.h;
                    mario.velocityY = 0;
                }
            }
        }
    }
    }