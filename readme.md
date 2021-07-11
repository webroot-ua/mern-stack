# mern-stack
## How to run this project
____
## Create database 
```
Create a free account for MongoDB Atlas https://account.mongodb.com/account/register
Read the chapter "Connecting to MongoDB Atlas" in the manual https://www.mongodb.com/languages/mern-stack-tutorial
Copy the connection string!
```
## Install
```
Run commands in console:
git clone https://github.com/webroot-ua/mern-stack.git
cd mern-stack
npm install
npm run client:install
npm run client:build
cd config
nano production.json
```
## Configuration
```
Put connection string to the file config/production.json - set parameter "mongoUri" for database connection.
Set parameters "port": "80" and "baseUrl": "http:mydomen.com" if use hosting.
Set "jwtSecret" as desired.
```
## Run
```
npm run start
```
  
____
