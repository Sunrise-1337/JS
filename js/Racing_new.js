class Racing_new extends Racing {
    constructor (brand, price, year, speed, engineVolume, neW, documents, verification){
        super(brand, price, year, speed, engineVolume);
        this.neW = neW;
        this.documents = documents;
        this.verification = verification;
    }

    newCheck(){
        return (this.neW && this.documents && this.verification)
    }
}