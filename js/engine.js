var Engine = {
  ini: function() {
    var skyCanvas = document.getElementById("sky-canvas");
    var bgCanvas = document.getElementById("bg-canvas");
    var fgCanvas = document.getElementById("fg-canvas");

    var canvas = {
      skyCanvas: skyCanvas,
      bgCanvas: bgCanvas,
      fgCanvas: fgCanvas,
      skyCtx: skyCanvas.getContext("2d"),
      bgCtx: bgCanvas.getContext("2d"),
      fgCtx: fgCanvas.getContext("2d"),
    };

    var graphic = new Image();
    graphic.src = "img/stylesheet.png";

    graphic.addEventListener("load", function() {
      var graphic = this;
    });

    var data = {
      frameNumber:0,
      canvas: canvas,
      graphic: graphic
    };
    Objects.ini(data);
    Engine.start(data);
  },

  start: function(data) {
    var loop = function() {
      Engine.input(data);
      Engine.update(data);
      Engine.render(data);

      data.frameNumber++;

      window.requestAnimationFrame(loop);
    };

    loop();
  },

  input: function(data) {

  },

  update: function(data) {
    Animations.update(data);
    Physics.update(data)

  },

  render: function(data) {
 Render.update(data);
  }
};

window.onload = Engine.ini();
