class Control extends Lvl{
    constructor(){
        super();
        this.level = this.getLvl();
        this.size = 100 / Number(`1.${this.level}`);
        this.speed = 5 * Number(`1.${this.level}`);
        this.interval = 50 / Number(`1.${this.level}`);
    }

    init(){
        this.spawn();
        this.move();
    }

    spawn(){
        this.ball = new Ball (this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            this.remove()
            this.plusCount()
        })
    }

    generateX(){
        return Math.floor(Math.random() * ((window.innerWidth-this.size) - 0 + 1))
    }

    move(){
        let y = 0;

        this.fallInterval = setInterval(() => {
            y += this.speed
            this.ball.style.top = `${y}px`;

            if(y >= window.innerHeight - this.size){
                this.remove();
                this.minusLife();
            }
        }, this.interval)
    }

    remove(){
        this.ball.remove();
        delete this.ball;
        clearInterval(this.fallInterval);
    }
}