class Racing_secondhand extends Racing {
    constructor (brand, price, year, speed, engineVolume, old, disadvantages, mileage){
        super(brand, price, year, speed, engineVolume);
        this.old = old;
        this.disadvantages = disadvantages;
        this.mileage = mileage;
    }

    isGoodCheck(){
        return (this.old <= 8 && this.mileage < 5000)
    }
}