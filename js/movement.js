 var Movement = {
	update: function(data) {
		Movement.tasks.Mario(data);
	},
	
	tasks: {
		Mario: function(data) {
			data.objects.mario.currentState.move(data);
		}
	}
}