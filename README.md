# more dogs please!
The assignment was to select a framework, write a report on it and create a POC (Proof of Concept). This is the outcome: an app for iOS and Android that generates random dog images with the [Dog API](https://dog.ceo/dog-api/). The user decides between 'corgi' and 'pug' images and is able to repeatedly generate new images by pressing on the 'another one, please!' button. The user can always go back and switch breed on the 'go back' button. On the bottom is the 'About' tab that, when clicked on, shows the developer's account name on GitHub as well as credits to the creator of icons used within the app. The 'About' panel that slides up was made using [rn-sliding-up-panel](https://github.com/octopitus/rn-sliding-up-panel).

Made with React Native.

### Setup
1. clone this repo
2. cd to cloned repo
3. install with ```npm install``` or ```yarn```

### Run app
1. cd to cloned repo
2. run app for either OS (Xcode or Android Studio emulator *or* physical device required):
  * iOS
    * ```npx react-native run-ios```
  * Android
    * ```npx react-native run-android```

issues running on iOS? > cd cloned repo > ```cd ios``` > ```pod install``` to reinstall Cocoapods

### Notes
Tested and working on:
- (physical device) iPhone 6s version 13.3
- Xcode simulators iPhone 5s through iPhone 11
- Android Studio simulator Pixel 2

Specs:
- react-native-cli@2.0.1 / react-native@0.61.5
- Xcode version 11.3.1 (+ macOS 10.15.2)
- Android Studio 3.5.3

Run with Expo (Xcode/Android Studio/device not required) see ["How do I get my existing React Native project running with Expo?"](https://docs.expo.io/versions/latest/introduction/faq/#how-do-i-get-my-existing-react). I did not manage to convert this React Native-CLI project to Expo CLI. Might also run into issues with rn-sliding-up-panel.

#### Repo: https://github.com/boggzer/moredogs
