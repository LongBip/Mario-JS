var Render = {
update: function(data) {
Render.tasks.Draw(data.objects.sky, data.canvas.skyCtx);

    data.canvas.bgCtx.clearRect(0, 0, data.canvas.bgCanvas.width, data.canvas.bgCanvas.height);
	Render.tasks.Draw(data.objects.map, data.canvas.bgCtx);
	data.canvas.fgCtx.clearRect(0, 0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
	Render.tasks.Draw(data.objects.mario, data.canvas.fgCtx);
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