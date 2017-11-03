import * as express from "express";
import * as ping from "./lib/ping";
import * as tweeter from "./lib/tweeter";

function setup() {
    let app: express.Application = express();
    app.get("/", (res: express.Response) => {
        res.send("Congratulations, you sent a GET request!");
        console.log("Received a GET request and sent a response");
    });

    let port: string = (process.env.PORT as string) || "3000";
    app.listen(port, () => {
        console.log("App now listening on port", port);
    });
}

function main() {
    // Sets up the express routes
    setup();

    // Sends the first tweet
    tweeter.sendTweet();

    let tweetInterval: string =
        (process.env.TWEET_INTERVAL as string) || "3600000";
    // Sets up a recurring interval to send a new tweet
    setInterval(tweeter.sendTweet, tweetInterval);
    // Sets up a recurring interval to send a new keep alive get request
    setInterval(ping.keepAlive, 600000);
}

main();
