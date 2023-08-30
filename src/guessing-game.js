class GuessingGame {
    constructor(min, max) {
        this.max;
        this.min;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
    value = null;
    guess() {
        this.value = Math.ceil((this.min + this.max) / 2)
        return this.value;
    }

    lower() {
        this.max = this.value;
    }

    greater() {
        this.min = this.value;
    }
}

module.exports = GuessingGame;
