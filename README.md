# march-insanity
https://march-insanity.herokuapp.com

## Backburner TO DO:
1) Strip out secret credentials (db connection string, google/fb server side credentials, etc) into an uncommited environment variable file and use dotenv to manage them. This is more secure, allows us to have dev/prod dbs in the future, allows us to use correct FB auth.
2) Refactor entire project into client and server repos that build to separate heroku apps. This makes development easier.
3) Secure API endpoints.
4) Implement secure Facebook login in the same manner as Google. Requires #1.


## Installation instructions:

Install git CLI: https://git-scm.com/downloads

Install node (comes with npm): https://nodejs.org/en/download/

We don't need Heroku installed now since it pulls our code directly from GitHub.

To interact with our DB, go to https://dashboard.heroku.com/apps/march-insanity and click on JawsDB MySQL.
This will bring you to a page with the DB's connection string, and you can use a MySQL client like HeidiSQL to access/edit the database.

Make a folder on your computer to store the application, go to that path in your command prompt.

Run `git clone https://github.com/nwsm/march-insanity.git`

Again from the command line, navigate to the server directory and run `npm install`

From the root march-insanity directory (which has client and server in it) run:

`npm run buildAndStart`

The app will now be running at http://localhost:8081/#/

To develop, stop the server, make changes, run buildAndStart again.

This is an annoying process because building takes a while. Building is only necessary when running BOTH the server and the client.

If you are only doing front end developing and don't need to access the API, you can navigate to the client directory and run `npm run dev` instead. 
It's much faster and has 'hot-reloading' which means you can change files in the client and save and they will automatically update in your browser.

