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
           "idle-down": [ [0,0] ],
           "idle-right": [ [0,1] ],
           "idle-up": [ [0,2] ],
           "idle-left": [ [0,3] ],
           "walk-down": [ [1,0], [0,0], [3,0], [0,0] ],
           "walk-right": [ [1,1], [0,1], [3,1], [0,1] ],
           "walk-up": [ [1,2], [0,2], [3,2], [0,2] ],
           "walk-left": [ [1,3], [0,3], [3,3], [0,3] ],
        }

        this.currentAnimation = "walk-up"; ///config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        //How many frames to wait before advancing the animation
        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;

        //reference the GameObject
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animation[this.currentAnimation][this.currentAnimationFrame];
    }

    updateAnimationProgress() {
        //Downtick frameprogress
        if (this, this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y, 60, 60);

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX * 32, frameY * 32, //left cut
            32,32, //width cut
            x, y, //position on map
            64,64 //size on map
            )

        this.updateAnimationProgress();
    

        // this.isLoaded && ctx.drawImage(this.image,
        //     0,0, //left cut
        //     32,32, //width cut
        //     x, y, //position on map
        //     64,64 //size on map
        //     )
    }
}