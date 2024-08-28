This is an incomplete but fully functional assignment for Lizmotors as my application for their Full Stack Dev Internship position.
As I mentioned, the site is completely functional and meets all the specified requirements, the frontend is however, incomplete and needs more work.

As an extra functionality, you can add the videos directly to the destination folder from the site itself.

To run-

Backend-
1. "npm i" in the backend folder
2. Add a .env file. As github does not recommend the sharing of sensitive information i will share the format for the env-
   PORT = 8000
   MONGO_URL = "Your mongodb url"
3. "npm start" to start the backend.

Frontend-
1. "npm i" in the frontend folder.
2. "npm start" to start the Frontend.

To note-
The site will not render if only the frontend is started as the frontend renders when the data is fetched from the backend.
Start both the backend and the frontend.

Random error-
If you get the following error while running the file-
  One of your dependencies, babel-preset-react-app, is importing the
  "@babel/plugin-proposal-private-property-in-object" package without
  declaring it in its dependencies. This is currently working because
  "@babel/plugin-proposal-private-property-in-object" is already in your
  node_modules folder for unrelated reasons, but it may break at any time.
  
  babel-preset-react-app is part of the create-react-app project, which
  is not maintianed anymore. It is thus unlikely that this bug will
  ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
  your devDependencies to work around this error. This will make this message
  go away.

  Run the following line of code in the frontend terminal-
    npm install --save-dev @babel/plugin-proposal-private-property-in-object
The issue is with react and some deprecating asset that has randomly occured in the past for me.
