export class Dish {
    public name: string;
    public price: number;
    public sundayOnly?: boolean;

    constructor(name: string, price: number, sundayOnly: boolean = false) {
        this.name = name;
        this.price = price;
        this.sundayOnly = sundayOnly;
    }
}