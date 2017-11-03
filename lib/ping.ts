import * as http from "http";

export function keepAlive() {
    try {
        http.get("http://foodtruckbot1.herokuapp.com/");
        console.log("GET request sent; kept alive.");
    } catch (e) {
        console.log(e);
    }
}
