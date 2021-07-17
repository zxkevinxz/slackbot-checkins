import SlackWebApi from '@slack/web-api';
import { SLACK_TOKEN } from './constants.js';
import settingsSchedule from './views/settingsSchedule.js';
import checkInView from './views/checkInView.js';
import settingsQuestions from './views/settingsQuestions.js';

const slackBot = new SlackWebApi.WebClient(SLACK_TOKEN);

export async function launchSettings(payload) {
	try {
		const result = await slackBot.views.open({
			trigger_id: payload.trigger_id,
			view: settingsSchedule
		});
		console.log('launch results', result);
	} catch (error) {
		console.log(error);
	}
}

export async function pushSettings(res) {
	try {
		res.status(200).send(settingsQuestions);
	} catch (error) {
		console.log(error);
		res.status(error.code).send(error.message);
	}
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

export async function blockActionsHandler(payload, res) {
	switch (payload.actions.action_id) {
		case 'add_question': {
			console.log('adding questions');
			res.status(200).end();
			break;
		}
		default: {
			console.log('nothing to perform');
			res.status(200).end();
			break;
		}
	}
}

// export async function viewSubmissionHandler(payload, res) {
//   switch ()
// }
