var Animations = {
    update: function(data) {
        Animations.tasks.sky(data);
    },
    
    tasks: {
        sky: function(data) {
            data.objects.sky.x -= 1;
            if (data.objects.sky.x < -1440) {
                data.objects.sky.x = 0;
            }
        }
    }
}
