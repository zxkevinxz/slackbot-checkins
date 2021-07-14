import SlackWebApi from '@slack/web-api';
import { SLACK_TOKEN, CHECK_IN_CHANNEL } from './constants.js';

const { WebClient } = SlackWebApi;
const slackBot = new WebClient(SLACK_TOKEN);

export async function launchSettings(user) {
    await slackBot.chat.postMessage({
        channel: CHECK_IN_CHANNEL,
        text: `hello <@${user}>, launching settings`
    })
};

export async function launchCheckIn(user) {
    await slackBot.chat.postMessage({
        channel: CHECK_IN_CHANNEL,
        text: `hello <@${user}>, starting check-in`
    })
};