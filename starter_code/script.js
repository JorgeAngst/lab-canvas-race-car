window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  function startGame() {
    Game.init("road");
    Game.drawRoad("road");
    Game.drawStraitLines("road");
    Game.drawDashedLines("road");
    Game.player("road");
    Game.printCar("road");
  }

  const Game = {
    canvasDom: undefined,
    ctx: undefined,
    winW: 400,
    winH: 625,

    init: function(id) {
      this.canvasDom = document.getElementById("road");
      this.ctx = this.canvasDom.getContext("2d");
      this.setDimensions();
      this.setHandelrs();
    },

    setDimensions: function() {
      this.canvasDom.setAttribute("width", this.winW);
      this.canvasDom.setAttribute("height", this.winH);
    },

    setHandelrs: function() {
      window.onresize = () => this.setDimensions();
    },

    drawRoad: function() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, this.winW, this.winH);
      this.ctx.fillStyle = "gray";
      this.ctx.fillRect(30, 0, 340, this.winH);
    },
    drawStraitLines: function() {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(40, 0, 10, this.winH);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(350, 0, 10, this.winH);
    },
    drawDashedLines: function() {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 5;
      this.ctx.setLineDash([20, 20]);

      this.ctx.beginPath();
      this.ctx.moveTo(200, 20);
      this.ctx.lineTo(200, this.winH);
      this.ctx.stroke();
    },
    player: function() {
      this.player = new Player(this.ctx, "images/car.png");
    },

    printCar: function() {
      this.setInterval = setInterval(() => {
        this.player.drawCar();
        console.log("entra");
      }, 1000 / 60);
    }
  };
};
class Player {
  constructor(ctx, img) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = img;
    this.posX = 200;
    this.posY = 625;
    this.W = 30;
    this.H = 60;
  }

  drawCar() {
    this.ctx.drawImage(
      this.image,
      this.posX - this.W / 2,
      this.posY - this.H * 2,
      this.W,
      this.H
    );
  }
}
