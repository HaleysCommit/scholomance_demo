class Scholomance {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    startGameLoop() {
        const step = () => {

            //Clear Canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Draw Lower Layer
            this.map.drawLowerImage(this.ctx);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({})
                object.sprite.draw(this.ctx);
            })

            //Draw Upper Layer
            // this.map.drawUpperImage(this.ctx);


            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new ScholomanceMap(window.ScholomanceMaps.DemoRoom);
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();

        // const image = new Image();
        // image.onload = () => {
        //     this.ctx.drawImage(image, 0, 0)
        // };
        // image.src = "images/maps/cybercity_lab.png";

        // //Place Game Objects
        // const hero = new GameObject({
        //     x: 100,
        //     y: 140,
        //     src: "images/characters/davidmartinez.png"
        // })

        // const rebecca = new GameObject({
        //     x: 125,
        //     y: 155,
        //     src: "images/characters/rebecca.png"
        // })

        // setTimeout(() => {
        //     hero.sprite.draw(this.ctx);
        //     rebecca.sprite.draw(this.ctx);
        // }, 200);
    }    
}