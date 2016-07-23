import { Ingredient } from '../shared';
export class Recipe {
    constructor(public recipe, public description, public imagePath, public ingredients: Ingredient[]){

    }
}
