class Trucks_refrigerator extends Trucks {
    constructor (brand, price, year, loadCapacity, wheelsAmount, size, refrigerator, temperature, durability){
        super(brand, price, year, loadCapacity, wheelsAmount, size);
        this.refrigerator = refrigerator;
        this.temperature = temperature;
        this.durability = durability;
    }

    howLong(){
        return 'Your products will be safe for a long time'
    }
}