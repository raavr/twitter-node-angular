const express = require('express');
const request = require('request-promise-native');
const cors = require('cors');

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;
const TWITTER_URL = 'https://api.twitter.com';

async function getTwitterAccessToken() {
  const bearer = Buffer.from(`${process.env.TWITTER_CONSUMER_KEY}:${process.env.TWITTER_CONSUMER_SECRET}`, "utf8").toString('base64');
  const options = {
    method: 'POST',
    uri: 'https://api.twitter.com/oauth2/token',
    form: {
        grant_type: 'client_credentials'
    },
    headers: {
        'Authorization': `Basic ${bearer}`
    }
  }

  return request(options);
}

async function main() {
  if(!process.env.TWITTER_CONSUMER_KEY || !process.env.TWITTER_CONSUMER_SECRET) {
    console.error('You need to add your twitter app consumer key and secret to env variables!');
    process.exit();
  }

  try {
    const response = await getTwitterAccessToken();
    process.env.TWITTER_ACCESS_TOKEN = JSON.parse(response).access_token; //temporarily set access token
  } catch(err) {
    const error = JSON.parse(err.response.body).errors[0];
    console.error(`${error.message}`);
    process.exit();
  }

  app.listen(port);
  console.log(`Listening on port ${port}`);
}

app.get('/1.1/:category/:item.json', (req, res) => {
  const options = {
    method: 'GET',
    uri: `${TWITTER_URL}${req.originalUrl}`,
    headers: {
      'Authorization': `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`
    },
    qs: req.query
  }

  request(options)
    .then(data => res.send(data))
    .catch(e => res.status(e.response.statusCode).send(e.response.body));
});

main();