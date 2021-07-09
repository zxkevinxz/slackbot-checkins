const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackToken = process.env.SLACK_TOKEN;
const slackPort = process.env.SLACK_PORT || 3000;

const slackEvents = createEventAdapter(slackSigningSecret);
const slackClient = new WebClient(slackToken);

slackEvents.on('app_mention', (event) => {
    console.log(`Got message from user ${event.user}: ${event.text}`);
    (async () => {
        console.log('sending ');
        try {
            const result = await slackClient.chat.postMessage({
                channel: event.channel,
                text: `HIIIII <@${event.user}>! :tada:`,
            })
            console.log(result);
        } catch (error) {
            console.log(error.data);
        }
    })();
})

slackEvents.on('error', console.error);

slackEvents.start(slackPort).then(() => {
    console.log(`Server started on port ${slackPort}.`);
})