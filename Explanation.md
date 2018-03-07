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


TBC
