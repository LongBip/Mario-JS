var Animations = {
    update: function(data)
     {
        Animations.tasks.sky(data);
        Animations.tasks.Mario(data);

    },
    
    tasks: {
        sky: function(data) 
        {
            data.objects.sky.x -= 1;
            if (data.objects.sky.x < -1440) 
            {
                data.objects.sky.x = 0;
            }
        },
        Mario: function(data) {
        data.objects.mario.currentState.animation(data);}
    }
}
