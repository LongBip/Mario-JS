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
    var walls = [[0, 528, 1104, 96], [528, 336, 144, 48], [576, 144, 48, 48], [960, 480, 144, 48], [1008, 432, 96, 48],
    [1056, 384, 48, 48], [1296, 528, 480, 96], [1296, 480, 144, 48], [1296, 432, 96, 48], [1296, 384, 48, 48],
    [1776, 480, 48, 144], [1920, 432, 48, 192], [2064, 384, 48, 240], [2208, 336, 48, 288], [2352, 336, 528, 96],
    [2352, 432, 384, 96], [2352, 528, 1968, 96], [2256, 96, 144, 48], [2544, 96, 48, 48], [2736, 96, 48, 48], [2928, 96, 48, 48],
    [3120, 144, 48, 48], [3024, 336, 48, 48], [3216, 336, 48, 48], [3504, 480, 288, 48], [3552, 432, 240, 48], [3600, 384, 192, 48],
    [3648, 336, 144, 48], [3696, 288, 96, 48], [3744, 240, 48, 48]];
    data.objects = {};
    data.objects.mario = mario;
    data.objects.wallTable = [];

    data.objects.sky = sky;
    data.objects.map = map;
    walls.forEach(function(wall) {
        data.objects.wallTable.push(new Objects.tasks.Wall(wall[0],wall[1],wall[2],wall[3]));

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
        this.image = new Objects.tasks.Image(img, 1056, 208, 16, 16);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.velocityY = 1;
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

