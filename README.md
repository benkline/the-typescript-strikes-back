# Software Wars, A New App 

The goal with this project is to develop a simple web application that leverages data from the Star Wars API. 

### Requirements:
* List all the Star Wars related planets (via GET /api/planets ) and allow users to select an individual planet to display related information about the selected planet - name diameter, climate, terrain, population, etc... 
* Users should also see a list of people that have lived on the selected planet (via the residents results array from GET /api/planets). 
* Users should have the ability to select an individual person from the selected planet’s list of people. When the person is selected, information about that person should be displayed (e.g. hair color, skin color, gender, etc.).  

This app uses the Angular UI framework to implement the project [discuss the overall approach and how they separated out components and application logic.]

### Time Spent
I am determined to finish this - it's not done. But so far I've spent...

* 30 min - Research, CLI new and add Material, write README 
* 45 Min - MVP with Mocked Data
* 5-6 Hours+ - Still trying to get an http.get() to the API to pass the returned JSON through a custom type/model and display on the template 

### Challenges faced (lessons learned)
I simply didn't know enough about Angular and how TypeScript's custom types relate to models. The less you actually know about a subject, the more you think you know about it, and conversely, the more you learn about a subject, the more you understand how little of it you actually know.

When you inevitibaly encounter a problem while writing code, it's too easy to start trying everything and just seeing what sticks. This will often take you longer to get through the problem, than when you stop writing, and begin reading. Aim to actually understand the problem and write the right code, right away. 

I will be spending a lot of my evenings writign some Angular side projects to understand these issues more fully.

### Design Decisions
I can see how observables and using custom typed classes as models are a better design pattern. I need to spend some time understanding how to write them correctly in order to use them in my code. 

### Future improvements
Tests, CSS, Get it actually working :joy: 


**This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.**

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

