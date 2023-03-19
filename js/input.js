var Input = {
	ini: function(data) {
		document.onkeydown = function(event) {
			Input.tasks.pressed[event.keyCode] = true;
		}
		
		document.onkeyup = function(event) {
			Input.tasks.pressed[event.keyCode] = false;
		}
	},
	
	update: function(data) {
		var mario = data.objects.mario;
		
		if(Input.tasks.isPressed(39)) {
			mario.direction = "right";
			
			if(mario.velocityY == 0) {
				mario.currentState = mario.state.movement;
			} else {
				if(mario.x < data.canvas.fgCanvas.width/2 || data.objects.map.x <= data.canvas.fgCanvas.width-data.objects.map.w) {
					mario.x += mario.velocityX;
				} else {
					data.objects.map.x -= mario.velocityX;
					for(var i = 0; i < data.objects.wallTable.length; i++) {
						data.objects.wallTable[i].x -= mario.velocityX;
					}
				}
			}
		}
		if(Input.tasks.isPressed(37)) {
			mario.direction = "left";
			
			if(mario.velocityY == 0) {
				mario.currentState = mario.state.movement;
			} else {
				if(mario.x > data.canvas.fgCanvas.width/2 || data.objects.map.x >= 0) {
					mario.x -= mario.velocityX;
				} else {
					data.objects.map.x += mario.velocityX;
					for(var i = 0; i < data.objects.wallTable.length; i++) {
						data.objects.wallTable[i].x += mario.velocityX;
					}
				}
			}
		}
		if(Input.tasks.isPressed(32)) {
			mario.currentState = mario.state.jumping;
		}
	},
	
	tasks: {
		pressed: {},
		
		isPressed: function(keyCode) {
			return Input.tasks.pressed[keyCode];
		}
	}
}
