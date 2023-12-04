class ScholomanceMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc; //tiles, floor, etc

        //this.upperImage = new Image();
        //this.upperImage.src = config.upperSrc; //rooftops, treetops, etc
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    // drawUpperImage(ctx) {
    //     ctx.drawImage(this.upperImage, 0, 0);
    // }
}

window.ScholomanceMaps = {
    DemoRoom: {
        lowerSrc: "images/maps/cybercity_lab.png",
        //upperSrc: "images/maps/cybercity_lab.png",
        gameObjects: {
            hero: new Person({
                x: 100,
                y: 140,
                src: "images/characters/davidmartinez.png"
            }),
            rebecca: new GameObject({
                x: 125,
                y: 159,
                src: "images/characters/rebecca.png"
            })
        },
    },
    BedRoom: {
        lowerSrc: "images/maps/home_room.png",
        //upperSrc: "images/maps/home_room.png",
        gameObjects: {
            lucy: new GameObject({
                x: 110,
                y: 140,
                src: "images/characters/lucy.png"
            }),
            takemura: new GameObject({
                x: 135,
                y: 165,
                src: "images/characters/takemura.png"
            })
        },
    },
}