# Clip-sub Client - React Native

Clip-sub Client app, powered by [React Native](https://facebook.github.io/react-native/). With cross-platform support (iOS and Android). Originally created for fansubs websites to create their own fancy, colorful and interactive app.

- [x] Fetching and posting posts.
- [x] Reading comments.
- [x] User registration / login.
- [x] Administration.
- [x] Consistent push notifications using OneSignal.
- [x] Fully-configurable theming system.

## Getting started

### Minimum requirements:

- iOS 8 or above.
- Android v14 or above.
- Xcode 8 (for iOS app packaging and building).
- Mac OS (for iOS app).
- NodeJS 4.5 or above (6 is preferred).

### Clone the repository:

`git clone https://github.com/Clip-sub/CSClient-RN.git`

then:

`cd CSClient-RN`

then install the dependencies and modules, using NPM:

`npm install`

or Yarn:

`yarn add`

### Install necessary plugin on Wordpress back-end:

With CSClient-RN, we use two main plugin on server side to provider the REST API:

- [JSON API](https://wordpress.org/plugins/json-api/) for cookie validation, nonce generator.
- [JSON API User](https://wordpress.org/plugins/json-api-user/) for cookie authentication, user validation.
- Wordpress REST API: Included with every Wordpress package from v4.7 onward.
- [OneSignal](https://wordpress.org/plugins/onesignal-free-web-push-notifications/) for cross-platform push notification service.

Command line for starting emulator example:

`
emulator -avd Galaxy_Nexus_API_25 -netdelay none -netspeed full
`
