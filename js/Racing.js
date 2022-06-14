class Racing extends Cars {
    constructor (brand, price, year, speed, engineVolume){
        super(brand, price, year);
        this.speed = speed;
        this.engineVolume = engineVolume;
    }

    orderTestDrive(){
        return 'You will be able to test this racing car tomorrow morning'
    }
}