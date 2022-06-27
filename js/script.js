const opt = {
    sections: 6,
    arr: [6, 4, 3, 3, 4, 3]
}

$(document).ready(function (){
    let creatorWrap = document.createElement('div'),
        sectionWrap = document.createElement('div'),
        elemWrap = document.createElement('div'),
        sceneWrap = document.createElement('div'),
        theScene = document.createElement('div');

    creatorWrap.className = 'creatorWrap';
    sectionWrap.className = 'sectionWrap';
    elemWrap.className = 'elemWrap';
    sceneWrap.className = 'sceneWrap';
    theScene.className = 'theScene';

    document.body.append(creatorWrap);
    creatorWrap.append(sectionWrap);
    creatorWrap.append(sceneWrap);
    sceneWrap.append(theScene);

    

    for (let i = 1; i < opt.sections + 1; i++){
        // Генерация секций
        let secIc = document.createElement('div');
        secIc.className = `secIc-${i}`;
        sectionWrap.append(secIc)
        $(`.secIc-${i}`).addClass('socket')
        creatorWrap.append(elemWrap);

        if(i == opt.sections){
            let addSec = document.createElement('div');
            addSec.className = `addSec`;
            sectionWrap.append(addSec)
            $('.addSec').addClass('socket')
        }

        let secImg = document.createElement('img');
        secImg.className = `secImg-${i}`;
        secIc.append(secImg)
        $(`.secImg-${i}`).addClass('secImg')
        $(`.secImg-${i}`).attr('src', `./assets/icons/${i}.png`)

        // Навешивание классов секций
        $(`.secIc-${i}`).on('click', function (){
            $('.sectionWrap .active').removeClass('active');
            $(this).addClass('active');
            $('.elemWrap .socket').remove();
            creatorWrap.append(elemWrap);

            for (var o = 1; o < opt.arr[i - 1] + 1; o++){

                // Генерация итемов
                console.log(o)
                let elemIc = document.createElement('div');
                elemIc.className = `elemIc-${o}`;
                elemWrap.append(elemIc)
                $(`.elemIc-${o}`).addClass('socket')

                let elemImg = document.createElement('img');
                elemImg.className = `elemImg-${o}`;
                elemIc.append(elemImg)
                $(`.elemImg-${o}`).addClass('elemImg')
                $(`.elemImg-${o}`).attr('src', `./assets/${i}/${o}.png`)

                let visible = document.createElement("img"),
                    txt = `./assets/${i}/${o}.png`,
                    second = `vasya-${i}`;
                visible.className = `${second}-${o} active ${second}`

                $(`.elemIc-${o}`).on("click", function (){
                    $(`.theScene .${second}`).remove()
                    theScene.append(visible)
                    $(`.theScene .${second}`).attr("src", txt)
                })

                // Навешивание классов итемов

            }
        })
    }
})