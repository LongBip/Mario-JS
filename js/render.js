var Render = {
update: function(data) {
Render.tasks.Draw(data.objects.sky, data.canvas.skyCtx);

Render.tasks.Draw(data.objects.map, data.canvas.bgCtx);
},
tasks: {
	Draw: function(co, where) {
		where.drawImage(co.image.img, 
									co.image.x, co.image.y,
									co.image.w, co.image.h,
									co.x, co.y, co.w, co.h);
	}
}
}