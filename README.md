# News Scraper Network

_News Scraper News_ is a [Node.js](https://nodejs.org/en/) application that allows the user to scrape, select and comment on articles from [The Verge}(https://theverge.com/).

## Technologies Used

* [Express](https://expressjs.com/)
* [Cheerio](https://github.com/cheeriojs/cheerio)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars/)
* [Mongoose](https://www.npmjs.com/package/express-handlebars/)
* Request

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
