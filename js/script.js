let url = 'https://pokeapi.co/api/v2/',
    pagination = {
        limit: 20,
        offset: 20,
        page: 0,
    },
    pInd = 0,
    store = [];    

    // Апи для эволюций
    apiDo = function(elem, api){
        if (api) {
            elem.addEventListener('click', () => {
                fetch(api)
                .then(res => res.json())
                .then(res => {
                    const { sprites = {}, species = {}, id = '' } = res
                    const { front_default } = sprites
                    const { name  } = species
                    document.querySelector('.infoWrap').innerHTML = ''
                    createElem('img', document.querySelector('.infoWrap'), front_default, name)
                    createElem('h3', document.querySelector('.infoWrap'), null, name)
                    createElem('div', document.querySelector('.infoWrap'))
                    evBut(id)
                    create('button', 'save', document.querySelector('.infoWrap'), 'Save')
                    document.querySelector('.save').addEventListener('click', () => {
                        store.forEach((elem) => {
                            if (elem.name == name) store.pop()
                        })
                        store.push({name: name, api: api})
                        favCol()
                        localStorage.setItem('fav', JSON.stringify(store))
                    })
                    create('button', 'unsave', document.querySelector('.infoWrap'), 'Unsave')
                    document.querySelector('.unsave').addEventListener('click', () => {
                        store.forEach((elem, i) => {
                            if (elem.name == name) {
                                store.splice(i, 1)
                            }
                        })
                        localStorage.setItem('fav', JSON.stringify(store))
                        def()
                    })
                })
            })
        }
    },

    favCol = function(){
        store.forEach((el) =>{
            document.querySelectorAll('.btnWrap button').forEach(function (elem) {
                if (el.name == elem.innerText.toLowerCase()){
                    elem.classList.add('active')
                }
            })
        })
    }

    // Апи для регионов
    apiReg = function(elem, api){
        if (api) {
            elem.addEventListener('click', () => {
                fetch(api)
                    .then(res => res.json())
                    .then(res => {
                        let pokeStore = []
                        if (/type/.test(api)){
                            res.pokemon.forEach(function(elem){
                                pokeStore.push(elem)
                                sessionStorage.setItem('info', JSON.stringify(pokeStore))
                            })    
                            doPageWrap()
                            regionCr(true)                        
                        } else {
                            res.pokemon_species.forEach(function(elem){
                                pokeStore.push(elem)
                                sessionStorage.setItem('info', JSON.stringify(pokeStore))
                            })
                            doPageWrap()
                            regionCr()
                        }
                    })
            })
        }
    }


    regionCr = function (check = false){
        let curPage = JSON.parse(sessionStorage.getItem('info')).splice(pInd * 20, pInd + (20 - pInd));
        curPage.forEach(function(elem){
            let btnWrap = document.querySelector('.btnWrap')
            createElem('button', btnWrap, null, check ? elem.pokemon.name : elem.name, null, check ? elem.pokemon.url : elem.url)
        }) 
        favCol()
    }

    speciesCheck = function(elem, apiEv){
        if (typeof(apiEv) != null){
            if (typeof(apiEv) == "string"){
                apiEv = apiEv.replace(/\-species/ig,'')
            }
            apiDo(elem, apiEv)
        }
    }

    // Создать элемент
    create = function (el, clas, appen, text = null, attr = null, val = null, apiEv = null, apiRegi = null) {
        let elem = document.createElement(`${el}`);
        elem.className = clas
        elem.innerText = text
        
        if (attr && val) {
            elem.setAttribute(attr, val)
        }

        speciesCheck(elem, apiEv)

        if (apiRegi){
            apiReg(elem, apiRegi)
        }

        appen.append(elem)
    }

    const createElem = function (el, appen, src = null, name = null, api = null, api2 = null){
        let elem = document.createElement(`${el}`)
        if (src) {
            elem.src = src
            elem.alt = name
            elem.title = capitalize(name)
        }

        speciesCheck(elem, api2)

        if (!src && name) elem.innerText = capitalize(name)
        
        apiDo(elem, api)

        appen.append(elem)
    },

    // Кнопка эволюции
    evBut = function (id){
        let btn = document.createElement(`button`)
        btn.innerText = 'Evolution chain'
        btn.className = 'evBut'
        btn.addEventListener('click', function (){
            fetch(`${url}pokemon-species/${id}/`)
                .then(res => res.json())
                .then(res => {
                    fetch(res.evolution_chain.url)
                    .then(res => res.json())
                    .then(res => {        
                        create('div','evChainWrap' , document.querySelector('.infoWrap div'))
                        evNextCheck(res.chain)
                    })
                })
        }, {'once': true},)
        document.querySelector('.infoWrap div').append(btn)
    }

    // Отрисовка эволюции
    evNextCheck = function (elem){
        create('button', 'evBtn', document.querySelector('.evChainWrap'), capitalize(elem.species.name), null, null, elem.species.url)
        if (elem){
            elem.evolves_to.forEach(function(el){
                evNextCheck(el)
            })
        }
    }

    // Большая буква в начале
    capitalize = function (word){
        let arr = word.split(''),
            fLet = arr[0].toUpperCase()
        arr.shift()
        arr.unshift(fLet)
        return arr.join('')
    },


    getApi = function (arg = false){
        let customLink = `?limit=${pagination.limit}&offset=${pagination.offset * pagination.page}`,
        btnWrap = document.querySelector('.btnWrap')

        fetch(`${url}pokemon${customLink}`)
            .then(res => res.json())
            .then(res => {
                const {results} = res
                results.forEach(elem => {
                    if (!arg){
                        createElem('button', btnWrap, null, elem.name, elem.url)
                    }
                }) 
                favCol()
            })
    }
    
    doPageWrap = function (orig = false){
        if (document.querySelector('.listWrap')) document.querySelector('.listWrap').innerHTML = ''
        create('div', 'btnWrap', document.querySelector('.listWrap'))
        create('div', 'pageWrap', document.querySelector('.listWrap'))
        for (var i = 0; i < 3; i++) {
            create('p', `link link-${i}`, document.querySelector('.pageWrap'), `${i}`)
            let b = i
            document.querySelector(`.link-${i}`).addEventListener('click', () => {
                pInd = b
                pagination.page = document.querySelector(`.link-${b}`).innerText;
                document.querySelector('.btnWrap').innerHTML = ''
                if (orig) {
                    getApi()
                } else {
                    regionCr()
                }
            })
        }
    }

    def = function (){
        doPageWrap(true)
        sessionStorage.setItem('info', '')
        getApi()
    }

    // Прогрузка страницы
    generate = function (){   
        if (!localStorage.getItem('fav')){
            localStorage.setItem('fav', JSON.stringify(store))
        } else {
            store = JSON.parse(localStorage.getItem('fav'))
        }

        createNavBtn = (clas, text, clasSearch, link, elze = false, fav = false, reg = true) => {
            create('button', clas, document.querySelector('.optWrap'), text)
            document.querySelector(clasSearch).addEventListener('click', function (){
                document.querySelector('.listWrap').innerHTML = ''
                if (!elze){
                    fetch(`${url + link}`)
                        .then(res => res.json())
                        .then(res=> {
                            res.results.forEach(function(elem){
                                if (reg){
                                    fetch(`${elem.url}`)
                                        .then(res => res.json())
                                        .then(res=> {
                                            create('button', '', document.querySelector('.listWrap'), capitalize(res.main_region.name), null, null, null, elem.url)
                                        })
                                } else {
                                    create('button', '', document.querySelector('.listWrap'), capitalize(elem.name), null, null, null, elem.url)
                                }
                            })
                        })
                } else {
                    if (fav){
                        store.forEach((elem) =>{
                            createElem('button', document.querySelector('.listWrap'), null, capitalize(elem.name), null, elem.api)
                        })
                    } else {
                        def()
                    }
                }
            })
        }

        create('div', 'infoWrap', document.body)
        create('div', 'optWrap', document.body)
        createNavBtn('def', 'Start', '.def', ``, true)
        createNavBtn('regBtn', 'Regions', '.regBtn', `generation/`)
        createNavBtn('typeBtn', 'Types', '.typeBtn', `type/`, false, false, false)
        createNavBtn('fav', 'Favourites', '.fav', ``, true, true)
        create('div', 'listWrap', document.body)
        def()
    }

    generate()