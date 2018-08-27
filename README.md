# The Angular Material app with infinite scroll using Twitter API

## Preview
![Demo 1][1]

## Usage

### Server
------
Open a terminal window:
1. Go to the /server directory and install all dependencies:

    ```
    npm install
    ```

2. Register a Twitter App here: https://apps.twitter.com
3. Write the below commands in your terminal (replacing XXX and YYY with your actual twitter consumer key and secret. You can find them on the page where you registered your app):

    ```
    export TWITTER_CONSUMER_KEY=XXX
    export TWITTER_CONSUMER_SECRET=YYY
    npm start
    ```

After these steps, your node server should be running.


### Client
-------
Open another terminal window:
1. Go to the /client directory and install all dependencies:

    ```
    npm install
    ```

2. Run Angular CLI command (it builds your app and starts a development server):

    ```
    ng serve
    ```

3. Then go to http://localhost:4200 in your browser.

[1]: ./demo/demo.gif