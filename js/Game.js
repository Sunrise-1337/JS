class Game{
    constructor(){
        this.interval = 1000
    }

    start(){
        this.balls = [];
        this.intervalStart = setInterval(() => {
            this.balls.push(new Control().init())
        }, this.interval)
    }

    gameOver(){
        this.balls.forEach(el => el.remove())
        clearInterval(this.intervalStart)
    }
}