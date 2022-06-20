class Ball{
    constructor(size, x){
        this.size = size;
        this.x = x;
        this.generate()
        return this.ball
    }

    generate(){
        let wrap = document.querySelector('.wrap');
        this.ball = document.createElement('div');
        this.ball.className = 'ball';
        this.ball.style.cssText = `
            position: fixed;
            top: 0px;
            left: ${this.x}px;
            height: ${this.size}px;
            width: ${this.size}px;
            background-color: rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255}, 0.7);
            border-radius: 50%;
        `;
        wrap.append(this.ball)
    }
}