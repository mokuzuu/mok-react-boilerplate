# MOKUZU REACT BOILERPLATE
This is a boilerplate for react web application. If you are lazy like me, who hates start new portfolio app from a scratch and hates setting up react components, css for responsive web application. This might be for you.

## How to use
Clone this app, and run 
`npm install` or `yarn`
and run 
`npm start` or `yarn start`

## Folder structure
naming for components follow vue.js [documentation](https://vuejs.org/v2/style-guide/)  (I know why I don't follow react one, but I think they don't have one like this)
- apis
  - This folder stores all api functions therefore you want to return promise object from each api functions
  - naming rule is up to you, but recommend to give simple and related name.
- components
  - If the component is single instance component[Follow this rule](https://vuejs.org/v2/style-guide/#Single-instance-component-names-strongly-recommended)
  - If the component is base components, [Follow this rule](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended)
- hooks
  -  export custome hooks in here
- pages
  - all react components assigned its route
- routes
  - declare all routes to each page
- store
  - redux store
- styles
  - all global scss variables, functions can be declared here
- utils
  - some util functions can be stored here.
  