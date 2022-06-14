class Trucks_armored extends Trucks {
    constructor (brand, price, year, loadCapacity, wheelsAmount, size, hardness, caliber){
        super(brand, price, year, loadCapacity, wheelsAmount, size);
        this.hardness = hardness;
        this.caliber = caliber;
    }

    isSafe(){
        return "You will be totally safe in this car. Don't worry"
    }
}