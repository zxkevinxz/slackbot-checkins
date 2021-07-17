import express from 'express';
import { launchSettings, launchCheckIn, pushSettings, blockActionsHandler } from './slackBotFunctions.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/settings', (req, res) => {
	launchSettings(req.body);
	res.status(200).end();
});

app.post('/checkin', (req, res) => {
	launchCheckIn(req.body);
	res.status(200).end();
});

app.post('/modal', (req, res) => {
	const payloadData = JSON.parse(req.body.payload);
	console.log('button clicked', payloadData);
	if (payloadData.type === 'block_actions') {
		console.log(payloadData);
		blockActionsHandler(payloadData, res);
	} else if (payloadData.type === 'view_submission') {
		pushSettings(res);
	} else {
		res.status(200).end();
	}
  
})

app.listen(PORT, () => {
	console.log(`Slack bot started on port ${PORT}`);
});
