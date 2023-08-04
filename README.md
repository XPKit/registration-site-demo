# XPKit registration site demo

## Overview

This project is a [Vue](https://vuejs.org/) web app demonstrating how you can integrate XPKit's SSO for visitor registration into your applications.

:star: :star: [Demo here](https://registration-demo.xpkit.net) :star: :star:

Before using this app it is recommended you read the [quick start tutorial](https://developer.xpkit.com/getting-started/tutorials/quick-start) on the developer docs website. This guide will introduce you to the XPKit resources used in this app during the registration process.

Once a user has registered on this site the following resources will be created in XPKit: User, Profile and (registration) Activity.


## Initial setup

Before running the app you need to create the required configurations in [XPKit Portal](https://portal.xpkit.net):

- Create an OAuth 2 client ID for the app
- Create a default group users will be assigned to after registration
- Choose which auth providers you wish to enable

See the folowing sections for instructions on how to do these things...

### OAuth 2 credentials

- Login to XPKit Portal as an administrator
- Navigate to the _Authentication_ > _Users (SSO)_ section and click on the _Create a configuration_ button
- Call the application "Registration site", set the client type as public and the redirect URI as `http://localhost:5173/auth-callback/`. Note: if you know the domain where you will be deploying the app you can add this now as well (ensure you add the `/auth-callback/` path)


### Set the default group (permissions) for users

- In XPKit Portal click on the cogs icon, located top right of the screen to enter the Admin section
- Click on the _Groups_ tab and _Create a group_ button
- Call it "Registration site" and select the following resource permissions:
    - activity: create
    - profile: create
    - sso: read
- You do __not__ need to tick the "This group needs access to XPKit Portal" checkbox

### Enable auth providers

- Still in the Admin section click on the _Settings_ tab
- Under _Authentication_ select all the auth providers you wish to enable
- In the _Default group_ drop down select the "Registration site" group you just created

## Running the app

### Set the configuration

- Rename the `config.json.example` file to `config.json` and fill in all the missing values you just configured in XPKit Portal.
    - You can find your `account_id` by clicking on your name in the main menu of XPKit Portal.

### Install the dependencies

```sh
npm install
```

### Run the app

```sh
npm run dev
```

### Compile and minify for production

```sh
npm run build
```

## Support

- [XPKit Community](https://community.xpkit.com): ask the development team a question
- [XPKit Developer Docs](https://developer.xpkit.com)


## License
[ISC](LICENSE)