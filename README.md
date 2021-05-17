# DH2642-Project-Super-Dashboard
This is the project repository for group 20 in the course DH2642

Link to deployed app: https://the-super-dash.herokuapp.com/


## Requirements:
You will need npm and node for this project. 

Guide for installing npm is here https://www.npmjs.com/get-npm 

Guide for installing node is here https://nodejs.org/en/download/ 

## Installing:
Clone the repository. Open up your terminal, navigate to the folder super_dash. Run the following command in the directory.
npm install

Now npm has installed all the required dependencies for the project. To run the application type the following command in the terminal in the super dash folder.
npm start

## Dependencies:
- node.js
- npm
- javascript.js

There are more dependencies that the project uses but npm will handle everything. 

## User studies: 
Here is the user studies that was conducted during the project. 
https://docs.google.com/document/d/1kj-fWwcI0Mx2XwBGgvK3FW5I9JuTGJEC3pKUXZklPQQ/edit?usp=sharing 

## Statement of contributions:

### Adam Särnell
- Search component
- Quote component
- Star Wars API implementation (planet and character settings)
- Character dashboard component with information box
- Option to hide/show components (visibility settings)
- Component positioning persisted in firebase
- Project proposal and mock-up
- Mid-project and final hand-in + deployment
- General project code/ux clean-up (architecture, scrollable news, import statements, draggable bugs etc.) 

### Love Book
Main responsibilities:
- Todo-List (view, presenter, css, model etc)
- Adding backgrounds to the model
- Uniform design (uniform black and yellow alá SW and star wars font where needed. No need to touch news and weatherview)
- Implementing draggable components and saving coordinates to the model. 

Some other smaller stuff:
- Implementing a (somewhat) responsive page and initial structuring of layout in App.css (we all somewhat messed with this during the process).
- Fixing some errors for mid-project and stuff and tweaks.
 
### Hector Gonzalez Campos

Main responsibilities:
- Planning
- Clock (View, Presenter)
- Sidebar (View, Presenter)
    - Log (View, Presenter)
    - Email (View, Presenter)
    - Google Apps 
- Firebase authentication
- Firebase Auth with Google
- Local persistence for the user implemented
- Firebase Persistence for each user (multi-user)

Smaller Stuff:
- Loading view when the app is loaded
- Fixing many problems with the model to be persistent
 
### Nils Merkel
- Setting up base project
- Creating a basic backend with node.js
- Github management
- Creating a newsApi that uses omni.se
- Creating the weather component 
-- Creating the weather icons
- Creating position view in sidebar
- Creating the news component
- Creating structural reusable functions for the project. 
    - usePromise()
    - BasicJsonApiCall()
- Conducting user studies and report 
    - Some redesign of components. 
- Structuring of the project. 
