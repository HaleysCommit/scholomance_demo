class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movementProgressRemaining = 16;

        this.directionUpdate = {
            "up": ["y", 1],
            "down": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    update(state) {
        this.updatePosition
    }

    updatePosition() {
        if (this.movementProgressRemaining > 0) {
            cost [property, change] = thisDirectionUpdate[this.direction];
            this[property] += change;
            this.movementProgressRemaining -= 1;
        }
}
}