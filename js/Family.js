class Trucks extends Cars {
    constructor (brand, price, year, seatsAmount, trunkSize, fuelConsumption){
        super(brand, price, year);
        this.seatsAmount = seatsAmount;
        this.trunkSize = trunkSize;
        this.fuelConsumption = fuelConsumption;
    }

    visitWithFamily(){
        return 'You can visit and inspect this car with your family! Make a wise decision'
    }
}