# this is the pay pay code Challenge repo

Here is Demo Application of a Review System. Admin will Add Employees and Employees will Give review feedBack about Other Employee's work

The Purpose of this Challenge is to build a fullstack system to demo Both front end and backend work. Here react js useds as front end, and Express js to build a backend system. there is room for Further development.

# Prerequisites

**_ before Run, install node js, npm, mongodb in your machine _**

# frontend contain Web Front End in ReactJS

**_ how to run this _**

`npm start `

this is not a full solution , but a demo version . static data is used in many places with actual API call.There is lot of scope for Improvements like Make a global Store using Redux, UI Component Testing using JEST, Mock api call using Sinon

**_ Basic Description _**

Admin and User/Employees will login into their account . Authention needs Implementation in frontend.

Admin Will View Employees , Add , Delete Them

Admin Will View Employee Reviews , Add , Delete Them

Admin Will assign Employees for Review.

# backend contains Application service in Node Js

There is lot of scope for Improvements like Testing End Points using JEST, Mocha, supertest and Using Typescript , Using Docker to Containerised this as a microservice.

**_ how to run this _**

start mongodb

`mongod `

then

`npm start `

**_ Basic Description _**

Demo Authentication is made but not connected to frontend

User Service / Routes will add Employees , return All

Post Service / Routes will View All Reviews , Add Review
