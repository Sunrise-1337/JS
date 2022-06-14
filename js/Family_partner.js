class Family_partner extends Family {
    constructor (brand, price, year, seatsAmount, trunkSize, fuelConsumption, promotion, advertPrice){
        super(brand, price, year, seatsAmount, trunkSize, fuelConsumption);
        this.promotion = promotion;
        this.advertPrice = advertPrice;
    }

    advertiseFamily(){
        return 'This car has been advertised. Approx 500 families have gotten to know about it'
    }
}