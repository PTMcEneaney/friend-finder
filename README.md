# friend-finder
--------------------------------
## Overview
--------------------------------
This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.  This uses Express to handle routing and is deployed through Heroku.

DEPLOYED ON HEROKU: https://peaceful-dusk-83018.herokuapp.com/

--------------------------------
## Instructions & Use
--------------------------------

    "/"
Home Page

    "/survey"
User should input their name and a public web-hosted image in additon to their survey answers. Their submission will be compared to the existing bank of friend/users and their numeric answers. It then displays both the user's responses and their match. Click the survey refresh button to start over or add an additonal user.

    "/api/friends"
User can view all the existing users in JSON format

--------------------------------
## Required to run
--------------------------------
 - node.js
 - bash / terminal
 - npm
 - express
 - path
 - all files in folder

--------------------------------
## Deployed
--------------------------------
App is deployed through Heroku: https://peaceful-dusk-83018.herokuapp.com/
