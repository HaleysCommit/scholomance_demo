class Sprite {
    constructor(config) {

        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Shadow
        this.shadow = new Image();
        this.useShadow = true; //config.useShadow || false;
        if (this.useShadow) {
            this.shadow.src = "images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        //Configure animation & initial state
        this.animation = config.animation || {
           idleDown: [
            [0,0]
           ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //reference the GameObject
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y, 60, 60);

        this.isLoaded && ctx.drawImage(this.image,
            0,0, //left cut
            32,32, //width cut
            x, y, //position on map
            64,64 //size on map
            )
    }
}