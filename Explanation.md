# How It's Made
## Web App Edition

I'll go through how the app works sequentially.

### `npm install`
This installs locally all the node packages that are specified in package.json. These files aren't commited to GitHub because there are a lot of them and it's a lot of data to send and it's easier to do it this way.

### `buildAndStart`
If you look into the root package.json this runs two commands, npm run build-client and npm run start

### `run build-client`
This first runs npm install and then npm run build inside the client directory. Run build is going to compress all of our files to minimize the file size our users have to download.
We don't want everything minimized for development because it makes debugging a pain, though, so we only give the compressed version to users.

### `npm run start`
This starts the node server, which is located in server/src/app.js.

If we look at app.js we see it mainly, right now, serves up the static files from client/dist (this is where the frontend is built to in build-client), and then listens to requests on port 8081.
Eventually though, this will have API endpoints for our frontend to call and will connect to the database.

## Clientside
Looking in the client directory we have our front end. The server actually sends up the compressed version in dist, but the pretty version where we develop is in src.

The entry point is main.js, and we see that it creates a new Vue instance. The Vue instance uses a router, located in /router, and a component called App.

Looking at App.vue, we see some HTML that will be rendered, a script that doesn't do much, and some CSS.
In the template there is `<router-view/>`. This is where the router comes in. App.vue serves as the only actual "page" in our app, but we will switch out the content shown using the router. Looking at router/index.js, we see there is only one route: the root '/' path. It puts the component HelloWorld into the App.vue template.

Now looking into components/HelloWorld.vue (I can feel your frustration at all the files), we see all the HTML and CSS that is actually showing up on the page. In our full application we will have 3 or 4 of these components, one for each page, and they will have buttons that change which route we are at, and thus which content is shown.

The full Vue documentation is here: https://vuejs.org/v2/guide/.
