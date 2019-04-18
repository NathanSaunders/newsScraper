![The_New_York_Times_logo](https://user-images.githubusercontent.com/43506553/56343245-0a162b80-616f-11e9-92ed-f7db15ed0c93.png)

# News Scraper Network

_News Scraper News_ application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end [Cheerio](https://github.com/cheeriojs/cheerio) and [Express-Handlebars](https://www.npmjs.com/package/express-handlebars/) to pull articles from the New York times and render them on the browser, where they can then be saved and commented on by the user.

## Installation

To install the application follow the instructions below:

    git clone https://github.com/NathanSaunders/newsScraper.git
    cd friend-finder
    npm install

## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

    export PORT=3000

After the `PORT` environment variable has been set, run the Node.js application with the command below.

    node server.js

The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.
