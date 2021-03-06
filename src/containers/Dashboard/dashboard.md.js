export default `
# ‌‌ [![LOGO][logo-image]][logo-url] React Most Wanted
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It should be a @shell@ for my further applications with the minimum features I would like them to have. Because of that it should be as simple as possible but with no regrets for the feature implementation.

You can find a example of this project in this [DEMO](https://www.react-most-wanted.com/).
 
I tried to make the project as clean as possible and to use all libraries in they@re pure way.

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [How to use](#how-to-use)
- [Libraries](#libraries)
- [react and redux](#react-and-redux)
- [create-react-app](#create-react-app)
- [material-ui](#material-ui)
- [react-router](#react-router)
- [react-intl](#react-intl)
- [redux-persist](#redux-persist)
- [material-ui-responsive-drawer](#material-ui-responsive-drawer)
- [material-ui-selectable-menu-list](#material-ui-selectable-menu-list)
- [redux-logger](#redux-logger)
- [TO DO](#to-do)
- [License](#license)
- [Logo](#logo)


## Features

@React Most Wanted@ is a "base project", "starter kit", "boilerplate" (call it however you want) project with my **personal** "Most Wanted" features:
* *easy to maintain*
* *PWA* - has Progressive Web App features
* *responsive* - included with PWA
* *material-ui*
* *routing*
* *theming*
* *internationalization*
* *authentication*

All these features can be programmed from scratch. But why should you do this? Out there are so mutch greate developers creating greate applications, libraries and tools to help them and you to develop fast and easy. This should also be a small part from my side to help other make they@r starting with react much easier.

If all that is true why did I create this project? There must be already a starter kit for react applications! Well, there are lots of them but unfortunaly non of them was as I would like it to be. Some don@t have enough fatures to just start and some are have so many that I had to delete features I don@t need. I want to create a starting point that has, as said before, my **personal** "Most Wanted" features. If someone likes it, greate :)

The further text explains witch libraries/modules are used and why. Some of them are installed and used in they@re @pure@ way as in documentation described so in that cases we will just show the link to the official documentation to awoid outdated descriptions of the usage.

## Folder Structure

The project has following folder structure:

@@@js
react-most-wanted/
.gitignore
README.md
node_modules/
package.json
sw-precache-config.js
public/
  icons/
  index.html
  favicon.ico
  manifest.json
src/
  components/
  containers/
  firebase/
  utils/
  locales/
  store/
    index.js
    reducers.js
  themes/
  config.js
  index.js
@@@

All application parts and code should be stored in the @src@ folder.

All @react@ components shold be seperated in presentational and container compnents. This greate [article](https://www.fullstackreact.com/p/using-presentational-and-container-components-with-redux/) is describing it why and how. For that purpose we have the @components@ and @containers@ folders.

All @redux@ related files are in the @store@ folder. You can find more about redux [here](http://redux.js.org/docs/introduction/).

The folders @locales@ and @themes@ are used to store data for different locales and themes.

## How to use

You can eather fork this project or clone it into your own repo. I use the second. You can find [here](https://help.github.com/articles/duplicating-a-repository/) more information about how to clone/duplicate a repo into your own.

After cloning the repo into your own you should change the configuration like project name and the firebase config. Here is a list of all changes you should make:
* **package.json**  - here you should change the name and version
* **src/config.js**  - here you should change all firebase data and the signin options
* **public/index.html**  - change the title (it will be overriden but it looks bether)
* **public/firebase-messaging-sw.js**  - change the @@messagingSenderId@@

After setting up the code we need to deploy our application to firebase. As first create an application biuld with runing @npm run build@.

To use firebase we need to install the firebase tools by running @npm install -g firebase-tools@ and after that login to firebase with @firebase login@.

After the login run @fribease init@ to setup the firebase project. Override the existing project and select yours from your firebase console. Dont forget to setup the email configs into the firebase functions using @firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"@.

You should now be able to deploy your application to your firebase using @firebase deploy@.


## Libraries

### React and Redux

You want to make a web application and use only @react@ without any library to manage the state. Hmm... well, I won@t say thats madness but... ;) It is possible but you can also go without shoes to work. I@ll stay with my confortable @redux@ "shoes". There are also other libraries but I think that @redux@ is one of the best and if you know that you are building a application that will get bigger and bigger @redux@ should be your choise.

Yes, you will need to write more code but there are much more pros than cons! There are lots of discussions on witch library is the best to use with @react@ even if you should use @react@ or some other project like [preact](https://github.com/developit/preact), [inferno](https://github.com/infernojs/inferno) and a very loooong etc....

My private favorits are @react@ and @redux@ because I can shurely say that they are not some hiped projects that will die in a couple of months or years. @react@ is maintained by Facebook so I can be shure that lots of greate developers will take care of witch path the library will go.


### create-react-app

The project should be easy to update in long term. That brings me to the first used and base library @create-react-app@. I will not explain how to use it. There is enough [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) on that. But I would like to explain why I use it:
* maintained by Facebook
* it is very easy to use
* it will take care of the nasty environment configuration
* it can be updated to the latest version without any or small changes to your application and
* if you feel strangled by the configs and setup you can @eyect@ and leave the prepared path and go your own way.

There is a large team from Facebook taking care that everything is up to date witch makes me more confortable using this tool than any other there. And there are others! My second favorite would be [nwb](https://github.com/insin/nwb). I havend made applications with it but for making standalone react or react-redux components it is just fantastic.


### material-ui

Because I make most of the time web applications and not "just" web pages and because I@m not a designer there is only one solution that I could use for design and that is Googles Material-UI design patterns. And ofcourse there is a greate react library that we can use for that: [material-ui](https://github.com/callemall/material-ui).

It has most of the parts you would need for a Material-UI designed application. It comes with a greate feature that we can use in our application and that is @theming@ or "customatisation" how they call it in they@r [documentation](http://www.material-ui.com/#/get-started/required-knowledge).

This application uses 100% @material-ui@! There are no other libraries for styling. But there are other libraries that rely on @material-ui@. We will explain them in the further text.

The team around @material-ui@ is working in the @@next@ branch on a greate new version with lots of modifications and new features and components like @Layouts@. For now it isn@t stable so we will stick with the current stable version untill the @@next@ brantch is satable enough.

This library gives use all we need for theming our application. All you have to do is to provide some theme in the @themes@ folder and update the @index.js@ file in the @themes@ folder. After that your theme should be visible and ready to use. Just watch how it is done with the @ics_theme@.

### react-router

Every application would need some kind of routing. I desided to use @react-router@ in this project.

### react-helmet

This library allows us to change the HTML meta data during runtime. With this one we change the title in our application on page change. In the @App.js@, one of the root elements of the project, we use it to change the @theme-color@ of our application witch gives a greate user expiriences when changing the application theme.

### react-intl

Internationalization is very importand. Even if you use just a single language your application should be prepared for a more of them. It is easy to aply it from beginning than refactoring the whole application afterwads. @react-intl@ has also a huge maintainer Yahoo. It is one of the larges or maby the larges Internationalization library for react so I desided to use it for our application.

There is also a redux project that should make the usage with redux easier but it has a modified @Provider@ and I@m not confortable with it to put my application @Provider@ in hands of a external library than @react-redux@. Because of that I implemented a simple solution that is very similar to the @theming@ solution. You just have to provide the locales in the @locales@ folder and to update the @index.js@ file in it. Just follow the @de@ example.

The only thing you@ll have to do more than by the @theming@ feature is that you have to add the localisationData in the [Root.js](https://github.com/TarikHuber/react-most-wanted/blob/master/src/components/Root/Root.js) folder:

@@@js

import {addLocaleData} from @react-intl@;
import en from @react-intl/locale-data/en@;
import de from @react-intl/locale-data/de@;

addLocaleData([...en, ...de]);

@@@

For example after adding the @fr@ locale it would look like this:

@@@js

import {addLocaleData} from @react-intl@;
import en from @react-intl/locale-data/en@;
import de from @react-intl/locale-data/de@;
import fr from @react-intl/locale-data/fr@;

addLocaleData([...en, ...de, ...fr]);

@@@

### redux-persist

It allows us to save the state to the @localStoreage@ or another storage and to rehidrate it on full oage reload or page visit after longer time. It allows us to load the full store even if the client is offline witch is one of the requirements for Pgrogressive Web Apps.


### material-ui-responsive-drawer

This library helps us to make the main @Drawer@ menu responsible and even to enable or disable the responsive behavior in runtime. It uses the libraries @material-ui@ and @redux-responsive@. You can find more about this library [here](https://github.com/TarikHuber/material-ui-responsive-drawer).

I hope that the @@next@ branch of @material-ui@ has some features that allow us to make the @Drawer@ responsible without such libraries.


### material-ui-selectable-menu-list

This is also a library that should make our life easier. It also uses @material-ui@ as peer dependency. It allows us to send to a single component an array of menu items we would like to have in it and the component renders all of them. You can find more about it [here](https://github.com/TarikHuber/material-ui-selectable-menu-list).


### redux-logger

We use the simple @redux-logger@ dev library to see how the redux state changes during application usage.

### sw-precache

Is also a dev library that helps us to create a service worker during build proccess. The service worker then allows the user to open our application even if he has no connection. Because the implementation is fully used how it is described in [this](https://github.com/jeffposnick/create-react-pwa) project we leave the detaile explanation to them.


## TO DO

- [X] implement all or most firebase functionalities
- [ ] finish tests
- [ ] implement [redux-offline](https://github.com/jevakallio/redux-offline) with examples
- [ ] update to material-ui@next

## License

MIT

## Logo

Thanks to SiradDev for creating the logo for this project :)

[logo-image]: https://www.react-most-wanted.com/favicon-32x32.png
[logo-url]: https://github.com/TarikHuber/react-most-wanted/blob/master/README.md
[travis-image]: https://travis-ci.org/TarikHuber/react-most-wanted.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/react-most-wanted
[daviddm-image]: https://img.shields.io/david/TarikHuber/react-most-wanted.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/react-most-wanted
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/react-most-wanted.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/react-most-wanted
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/react-most-wanted/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
`.trim().split("@").join("`");
