class Lvl{
    constructor(){
    }

    plusCount(){
        let c = document.querySelector('.counter');
        let l = document.querySelector('.level');

        c.textContent = parseInt(c.textContent) + 1;
        
        if (parseInt(c.textContent)%10 == 0){
            l.textContent = parseInt(l.textContent) + 1;
        }
    }

    getLvl(){
        let l = document.querySelector('.level').innerHTML;
        return l;
    }

    minusLife(){
        let lv = document.querySelector('.lives');
        lv.textContent = parseInt(lv.textContent) - 1;
    }
}