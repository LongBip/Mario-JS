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
    
    data.objects = {};
    
    data.objects.sky = sky;
    data.objects.map = map;
},

tasks: {
    Image: function(img, x, y, w, h) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}
}
