class Trucks extends Cars {
    constructor (brand, price, year, loadCapacity, wheelsAmount, size){
        super(brand, price, year);
        this.loadCapacity = loadCapacity;
        this.wheelsAmount = wheelsAmount;
        this.size = size;
    }

    rentForShipping(){
        return 'You will be able to load your stuff on the Monday'
    }
}