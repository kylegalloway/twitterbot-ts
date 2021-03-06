import * as Collections from "typescript-collections";

export let dictionary = new Collections.Dictionary<string, string[]>();
dictionary.setValue("foods", [
    "sandwiches",
    "sandwiches",
    "wraps",
    "pies",
    "bowls",
    "burgers",
    "plates",
    "burritos",
    "crepes",
    "pancakes",
    "rolls",
    "sushi",
    "foam",
    "soups",
    "cakes",
    "cookies",
    "smoothies",
    "juices",
]);
dictionary.setValue("ingredients", [
    "quinoa",
    "oyster",
    "leek",
    "kalamari",
    "quail's egg",
    "alfalfa",
    "cheese",
    "saffron",
    "cumin",
    "goat's milk",
    "tamarind",
    "lobster",
    "venison",
    "veal",
    "swine",
    "prosciutto",
    "wasabi",
    "espresso",
    "vanilla",
    "balsamic",
]);
dictionary.setValue("descriptions", [
    "burnt",
    "greasy",
    "toasted",
    "sizzling",
    "messy",
    "gentrified",
    "gourmet",
    "hipster",
    "bourgeois",
    "heirloom",
    "organic",
    "free-range",
    "open-source",
    "pastured",
    "homeschooled",
    "braised",
    "pan-seared",
    "raw",
    "mottled",
    "limp",
    "warm",
    "cave-aged",
    "bourbon-barreled",
    "malted",
    "foraged",
    "deconstructed",
    "market",
    "intense",
    "chocolated",
    "browned",
    "salted",
    "ambrosial",
    "caramelized",
    "choice",
    "epicurean",
    "dulcified",
    "healthy",
    "kosher",
    "halal",
    "zesty",
]);
dictionary.setValue("truckTypes", [
    "truck",
    "cart",
    "van",
    "chariot",
    "pedicab",
    "trailer",
    "on wheels",
    "buggy",
]);

export default dictionary;
