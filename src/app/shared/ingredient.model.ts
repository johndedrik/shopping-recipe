import { isConstructorDeclaration } from "typescript";

export class Ingredient {

    // adding public to the params will automatically create a class level property with the same name as the param
    // and assign the values passed inks
    constructor(public name: string, public amount: number) {}

}