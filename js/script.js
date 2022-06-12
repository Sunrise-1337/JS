const worKer = {
    name: '',
    surname: '',
    id: '',
    rate: '',
    days: '',
    getSalary: () => {},
    role: '',
    currentCash: '',
}

admin(cashier){
    photo: '',
    extraPremium: '',
}

cashier(worKer){
    premium: '',
    getSalary: (id) => {
        return worKer.rate * worKer.days * 1.2
    },
}

consult(worKer){
    expireDate: '',
    getSalary: (id) => {
        return worKer.rate * worKer.days
    }
}

const empl = () => {
    let employee = 3

    return ({
        add: (step = 1) => employee += step,
        remove : () => employee--,
        display: () => console.log(employee),
    })
}

let user = empl();
