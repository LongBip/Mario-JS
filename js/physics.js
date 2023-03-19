var Physics = {
    update: function(data) {
    Physics.tasks.Gravity(data.objects.mario);
    Physics.tasks.DetectCollision(data);
    },
    
    tasks: {
        Gravity: function(object) {
            object.currentState = object.state.jumping;
            object.velocityY += 1.2;
            object.y += object.velocityY;
        },
        
        DetectCollision: function(data) {
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
            
            if(object.typ === "wall") {
                if(mario.y + mario.h > object.y && mario.x + mario.w > object.x + 10 &&
                   mario.x < object.x + object.w - 10 && mario.velocityY >= 0) {
                   mario.currentState = mario.state.standing;
                    mario.y = object.y - mario.h;
                    mario.velocityY = 0;
                }
            
            }
        }
    }
    }