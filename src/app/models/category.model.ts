import { Dish } from "./dish.model";

export class Category {
    public name: string;
    public dishes: Dish[];

    constructor(name: string, dishes: Dish[]) {
        this.name = name;
        this.dishes = dishes;
    }
}