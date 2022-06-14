class Family_popular extends Family {
    constructor (brand, price, year, seatsAmount, trunkSize, fuelConsumption, views, topRequest){
        super(brand, price, year, seatsAmount, trunkSize, fuelConsumption);
        this.views = views;
        this.topRequest = topRequest;
    }

    popularCheck(){
        return (this.views >= 500 && this.topRequest == true)
    }
}