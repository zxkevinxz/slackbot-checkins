import express from 'express';
import { launchSettings, launchCheckIn } from './slackBotFunctions.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/settings', (req, res) => {
  console.log(req.body);
  launchSettings(req.body);
  res.status(200).end();
});

app.post('/checkin', (req, res) => {
  console.log(req.body);
  launchCheckIn(req.body);
  res.status(200).end();
});

app.post('/modal', (req, res) => {
  console.log(req.body);
  res.status(200).end();
})

app.listen(PORT, () => {
  console.log(`Slack bot started on port ${PORT}`);
});
