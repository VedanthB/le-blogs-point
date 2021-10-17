# le-blogs-point

A web app to post blogs. 

## Features 
- Register, login with Email or Phone number.
- Quick login with Google, Facebook, SMS.
- Forgot password, reset password and register a new account by Email or SMS verification.
- Update personal information (name, password and avatar)
- Create new blog with React quill.
- Comment realtime with Socket.io
- Pagination, search with autocomplete Mongodb 

## Tech 

- Typescript 
- Redux (state management)
- Bootstrap 5 
- ReactQuill (for blogs)
- Socket.io  (realtime comments)
- Twilio (for sms/ otp login) (works only in testing,)

## Install dependencies for server 
### `npm install`

## Install dependencies for client
### cd client ---> `npm install`

## Connect to your mongodb and add info in .env

## Run the Express server only
### `npm run dev`

## Run the React client only
### cd client ---> `npm start`

## Server runs on http://localhost:5000 and client on http://localhost:3000
