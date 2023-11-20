class Scholomance {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };
        image.src = "images/maps/cybercity_lab.png";


        const x = 100;
        const y = 100;

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero, 
                0, //left cut
                0, //top cut
                40, //width cut
                32, //height cut
                x, //position on map
                y, //position on map
                64,
                64
            )


        }

        hero.src = "images/characters/davidmartinez.png";
    }    
}