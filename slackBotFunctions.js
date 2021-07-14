import SlackWebApi from '@slack/web-api';
import { SLACK_TOKEN } from './constants.js';
import settingsView from './views/settingsView.js';
import checkInView from './views/checkInView.js';

const slackBot = new SlackWebApi.WebClient(SLACK_TOKEN);

export async function launchSettings(payload) {
  try {
    const result = await slackBot.views.open({
      trigger_id: payload.trigger_id,
      view: settingsView
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

    
  // await slackBot.chat.postMessage({
  //     channel,
  //     text: `hello <@${user}>, launching settings`
  // })
}

export async function launchCheckIn(payload) {
  try {
    const result = await slackBot.views.open({
      trigger_id: payload.trigger_id,
      view: checkInView
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
