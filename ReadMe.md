##   Revive App :heart:
### Project Title
​
Create an app that finds nearest defibrillator based on user location. Direct user towards defibrillator.
​
### Motivation
​
"If a defibrillator is used and effective CPR is performed within **3-5 minutes** of cardiac arrest, their chance of survival increases from **6% to 74%**."
​
[Source] (https://www.defibshop.co.uk/facts-and-figures)
​
### User Stories/Requirements
​```
>As a user I want to know the address of the nearest defibrillator and how long it will take me to  git get there.
​
>As a user I would like a button to dial 999 automatically.
​
>As a user I would like directions to the nearest defibrillator.
​
>As a user I would like be able to contribute defibrillator locations to the website.
​
>As a user I would like to see the what three words functionality in and use the what 3 words to    inform emergency services.
​
>As a user I would like CPR instructions on the site with a video embedded.
```
​
​
## Build Status
​
​
### Tech/Framework used
​
Frameworks    |
------------- |    
Express       |
React         |
NodeJS        |
​
​
### Installation Instruction
​
```
$ git clone "https://github.com/beccyv/Revive1.git"
​
$ npm install --save express body-parser mongoose
​
$ npm install --save-dev nodemon concurrently
​
$ npm run dev
​
```
​
### How to run the project
​
You should see the react application running on http://localhost:3000
​
To access our project via [Heroku](https://reviveyou.herokuapp.com/)
​
​
## Project Specification
​
​
### Interface Design
​
..* All Application component render on screen in a responsive mode and are usable across modern Desktop, Tablet and Phone broswers.
​
### Application Functionality
​
..* The application shows the list of defibrillator around the user location and calculate the time to reach them in fastest possible route.
​
..* Users can add a defibrillator in the list by filling a form in website.
​
### Map Marker
​
..* The map displays all location by default.
​
..* Clicking a location displays unique information about the location and displays the list of defibrillator within half a kilometre.
​
### Asynchronous API Requests
​
..* Application uses the Google API and What 3 Words API.
..* All data requests are retrieved in an asynchronous manner using Fetch API.
​
### Offline Use
​
..* We are using locally stored data to show the location but Mongodb can be added as a database store location for future purposes as it is integrated in our intial setup.
​
### Reference used
​
For our we have used resources from following source:
​
..* [HeartSafe](https://heartsafe.org.uk/)
​
..* [British Heart Foundation](https://www.bhf.org.uk/)
​
..* [St John's Ambulance](https://www.sja.org.uk/)
​
..* [Pulse point](https://www.pulsepoint.org/pulsepoint-aed/)
