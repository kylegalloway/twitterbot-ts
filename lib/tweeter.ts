import * as generator from "./generator";
import * as Twit from "twit";

export function sendTweet() {
    let content: string = generator.generate();
    let tweet: Twit = new Twit({
        consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
        access_token: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
    });

    tweet.post("statuses/update", { status: content }, (error: Error) => {
        if (error) throw error;
        console.log('Posted tweet: "' + content + '"');
    });
}
