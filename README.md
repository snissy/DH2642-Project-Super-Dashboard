# DH2642-Project-Super-Dashboard
This is the project repository for group 20 in the course DH2642

##### Mid Project Review Description
In this project we are creating a dashboard with interactive widgets for Star Wars fanatics. We want users to keep the dashboard as their homepage in their browser so that they are met by the force every time they open a new window or tab. The goal is for the dashboard to be personizable, persisting each users personal preferences between sessions. 

##### So far we have created a few widgets:
- To-Do List: The tasks added by the user will be persisted in the model.
- Clock: A must-have.
- Search Bar: Similar to the regular google search bar.
- Weather: The weather widget is using data from the SMHI API.
- Sidebar: The retractable sidebar will be used to change the preferences, more specifically what Star Wars character and planet (background) to display.

##### There are many more widgets and features that we are going to implement. Some examples:
- Star Wars Character with quote, also information about the character from the Star Wars API when clicked. 
- Google App Sidebar
- Weather pop-up: Starting as a small widget with information about today but expands when clicked to display weather forecast for multiple days. 
- News: A news widget based on API or web scrape.
- ...and more!

Here's a mock-up to get a rough idea of what we had in mind while planning: 
https://www.figma.com/file/QtAtcYcekScPrsxRS4nadq/Star-Wars-Dashboard?node-id=0%3A1 


##### Project Structure 
We are using React in the presenters and some bootstrap.js for the views. We are using the model application state, similar to the one in the lab. Thus we have a model that the presenters will observe to know if they need to re-render. Every widgets has its own view and presenter, potentially multiple views for one widget when needed. 

The index.js file finds the root-div in the index.html file where it places the App from App.js that also receives the model: 
 ```
 <App model={model}/>
 ```
The App then holds the different presenters that based on their CSS class receives a designated spot in the dashboard. Since it is a dashboard for computer screens it will not be adjusted to narrower screens, but this is of course a potential feature in the future. We are also looking into using the bootstrap grid instead of only CSS for the placement of the widgets, and we might even consider implementing drag-and-drop so that you can places the widgets as you like in the dashboard. 

The API's are similar to the one we used in the lab, we also created a promiseHook to remove some duplicate code but it's not implemented in the Star Wars API yet.


## How to install and run the project
clone the repository. 
Open up your terminal, navigate to the folder **super_dash**.
Run the followng command in directory 

```
npm install
```
Now yarn has installed all the required dependencies for the project. 
To run the application type the following command in the terminal in the super dash folder.

```
npm start
```


##### Dependancies
- javascript
- bootstrap
- node.js

##### Before you start code
Before you start to code. Create a issue on the issue page and desribe what you are aiming to solve or fix. Create a new branch for each issue.
Name your branch after your issue, see the naming template below. By creating an issue that describes a change, you make it easy for the rest of the team to understand what you are working on

Remember to document the code that you write, it could be the case another teamember has to rewrite or add code to what you have written. 
This process can be alot smother if there are good documentation in place. 

Do not write gigantic issues, this could lead to merge hell. Try to merge as often as possible. Try to split up your work in smaller steps that do not change to much of the main branch. Make commitments often and try to keep them clear and not so scattered.

##### Branch naming template

#[issueNr]-[Feat/Fix/Doc/Refac]-[Title]-[Author]

##### Commit template
#[issueNr]-[Feat/Fix/Doc/Refac]-[Title]

The title should be with an active voice, eg. write "This fixes so that the css properly show when you hover over an element." 
"...it’s plain to see that writing in the passive voice should be avoided wherever possible. Active voice immediately identifies both the action and who or what is performing the action, adding clarity and precision to your words."

##### Pull Requests
Make a pull request when you think you are done with your task. It's good if two other members review the pull requsest before you merge. You can ask for this in the pull request. Close the issue that correnspond to the issue to be solved. 

##### Statement of contributions:
 - Plannin
 - MANY OTHER STUFF 
###### Adam Särnell
 - Planning
 - MANY OTHER STUFF 
###### Love Book
 - Planning
 - MANY OTHER STUFF 
###### Hector Gonzalez Campos
 - Planning 
 - MANY OTHER STUFF 
###### Nils Merkel
 - Github management 
 - Planning 
