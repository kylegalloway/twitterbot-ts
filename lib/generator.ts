import dictionary from "./dictionary";
import { capitalize, random } from "lodash";

function capitalizeEachWord(phrase: string): string {
    return phrase
        .split(" ")
        .map(capitalize)
        .join(" ");
}

function randomFrom(arr: string[]): string {
    return arr[random(0, arr.length - 1)];
}

function singleizeIfNecessary(str: string): string {
    if (str.slice(-1) === "s") {
        str = str.slice(0, -1);
    }
    return str;
}

export function generate(): string {
    let food: string = capitalizeEachWord(
        randomFrom(dictionary.getValue("foods"))
    );
    let ingredient: string = capitalizeEachWord(
        randomFrom(dictionary.getValue("ingredients"))
    );
    let description: string = capitalizeEachWord(
        randomFrom(dictionary.getValue("descriptions"))
    );
    let truckType: string = capitalizeEachWord(
        randomFrom(dictionary.getValue("truckTypes"))
    );

    let name: string = "";

    switch (random(1, 8)) {
        case 1:
            singleizeIfNecessary(food);
            name = ["The", food, truckType].join(" ");
            break;
        case 2:
            singleizeIfNecessary(food);
            name = [description, food, truckType].join(" ");
            break;
        case 3:
            name = ["The", description, food].join(" ");
            break;
        case 4:
            singleizeIfNecessary(food);
            name = ["The", description, food, truckType].join(" ");
            break;
        case 5:
            singleizeIfNecessary(food);
            name = ["The", ingredient, food, truckType].join(" ");
            break;
        case 6:
            singleizeIfNecessary(food);
            name = [description, ingredient, food, truckType].join(" ");
            break;
        case 7:
            name = ["The", description, ingredient, food].join(" ");
            break;
        case 8:
        default:
            singleizeIfNecessary(food);
            name = ["The", description, ingredient, food, truckType].join(" ");
    }

    return name;
}
