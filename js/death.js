var Death = {
	trigger: function(data) {
		Death.tasks.LifeLoss(data);
	},
	
	tasks: {
		LifeLoss: function(data) {
			var mario = data.objects.mario;
			
			if(mario.lives > 0) {
				mario.lives--;
			}
			if(mario.lives < 1) {
				setTimeout(function(){
					location.reload();
				}, 1000);
			} else {
				for(var i = 0; i < data.objects.wallTable.length; i++) {
					data.objects.wallTable[i].x -= data.objects.map.x;
				}
				
				data.objects.map.x = mario.x = mario.y = 0;
				mario.velocityY = 1;
			}
		}
	}
}
