# React Test

This is a technical test

## Quick start
Once you have the repo cloned, run the following commands:

## Install dependencies:
npm install

## Run Project:
(on project folder) npm start
       
## Execute tests:
Execute command: npm run test and open /coverage/lcov-report/index.html on your browser to see the results well displayed


## Observations:

1. I have divided the src folder in different folders:
    - Tests --> Unit tests of the application
    - Api --> Contains the API routes 
    - Assets --> Contains the media files of the application
    - Components --> Components of the application
    - Mocks --> JSON mocks
    - Pages --> Router pages of the app
    - Router --> Contains the router configuration
    - Services --> Contains the request service and the Activities service
    - Store --> Contains the configuration of the store and the reducers
    - Styles --> Styles of the application
    - Utils --> helpers

2. Appart from that, I used Ant Design library for creating the table

3. In order to load the media information, I have used redux-saga Middleware.

4. Regarding on the Unit Tests, I have implemented a unit test of each different type of file, reducers, actions, saga and components.


