class Game extends Control{
    constructor(){
        super()
        this.interval = 1000
    }

    start(){
        this.intervalStart = setInterval(() => {
            new Control().init()
            if (document.querySelector('.lives').textContent == 0){
                this.gameOver()
            }
        }, this.interval)
    }

    gameOver(){
        clearInterval(this.intervalStart)
        let result = document.querySelector('.counter').textContent,
            bw = document.querySelector('.bigWrap'),
            wrap = document.querySelector('.wrap');
        bw.hidden = true;
        wrap.hidden = true;

        let resTab = document.createElement('div');
        resTab.className = 'result-tab';
        resTab.innerText = `Result: ${result}`;
        document.body.prepend(resTab)
    }
}