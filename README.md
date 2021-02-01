# Projectify: Project Posting Website
Welcome to Projectify! Post innovative and cool projects to show off to friends, family, and recruiters. Users can also get inspiration for project ideas. Currently, Projectify is serving as my online portfolio. Many of my favourite projects can be found on the site.

## Demo
You can access the site [here](https://projectify-sun.netlify.app/).

## Development
This site can also be run locally with the following steps:

1) Create a MongoDB cluster and get it's application connection link. In server.js line 16, replace the ATLAS_URI with the url.
```
const uri = process.env.ATLAS_URI;
```

2) In client/src/api/index.js, update line 3 const with "https://localhost:5000/posts"
```
const url = 'https://projectify-sun.herokuapp.com/posts';
```

3) In the root directory of the repo, run:
```
npm install
cd client
npm install
npm run build
cd ..
npm start
cd client
npm start
```

The site will be on http://localhost:3000/

