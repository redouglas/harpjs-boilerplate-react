# Harp.js &amp; React.js Boilerplate

Setup
-----
* Install Node `brew install node`
* Install Harp.js `npm install harp`
* Install the Node dependencies `npm install` (from the repo root)
* Bundle the js `gulp bundle` (this command will uglify). Or if you're actively developing: `gulp watch` (will not uglify)
* Start the harp webserver `harp server` (from the repo root) If you want to specify a specific port: `harp server --port XXXX`

Deployment / Compilation
-----
Simply compile the HTML & CSS with `harp compile`. This will generate a `/www/` folder with all of the files. Note that this will include the last `app.build.js` that gulp assembled (it will not do a fresh bundle when you run the `harp compile` command).

Once you've generated the `www` directory, you will want to go in and delete the `/www/node_modules` folder that got carried over. 
