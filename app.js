import express from 'express';
import { launchSettings, launchCheckIn } from './slackBotFunctions.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());

app.post('/settings', (req, res) => {
    console.log(req.body);
    launchSettings(req.body.user_id);
    res.status(200).end();
})

app.post('/checkin', (req, res) => {
    console.log(req.body);
    launchCheckIn(req.body.user_id);
    res.status(200).end();
})

app.listen(PORT, () => {
    console.log(`Slack bot started on port ${PORT}`);
})