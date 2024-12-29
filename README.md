# 💻 Cake App

The following project is a ReactJS application developed for the company Cake, with the aim of showcasing my skills in web development.

## 🚀 Get Started

Pre-requisites:

- Node 22.12+

To set up the app you need to execute the following commands.

```bash
git clone https://github.com/victormarques98/cake-app
npm install
```

##### `npm run dev`

Runs the app in the development mode.\
Then, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### `npm build`

Builds the app for production to the `dist` folder.
The build is minified and the filenames include the hashes.

#### `live preview`

This project was deployed in Vercel, you can check [here]("https://main--wondrous-faun-d4f8ff.netlify.app/")

## 📂 Project Structure

In order to scale my application in the easiest and most maintainable way, I prefer to keep most of my code inside the "app" folder. Inside this folder, I categorize code based on different routes. Each route folder contains code that's specific to that feature's domain. This helps me keep functionality scoped to a feature and prevents me from mixing its declarations with shared elements. I find this approach much easier to maintain than using a flat folder structure with many files.
This approach is used for NextJs applications, but for React Native and Pure React Projects, the structure changes a little bit.

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc.
|
+-- app               # route based modules, where contains all the features
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- styles            # all global styles and theme used across the entire application
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

A route have the following structure:

```sh
src/app/route
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- page.tsx    # main component file for the route
|
```

## 🗄 Component Structure

To ensure clean and performant code, all components follow a project structure to ensure that business rules are not in the same file as the component's UI. However, all files related to that component are grouped in the same folder because they share similar behavior.

```sh
MyComponent
|
+-- index.tsx           # Folder that contains all the UI
|
+-- styles.module.scss  # Styles of the component

```

## 🎨 Styling Approach

In the development and styling of the components, I chose to use Sass Modules for several reasons, including:

- [Sass Modules](https://sass-lang.com/documentation/at-rules/use)

  - Organization and Encapsulation;

  - Style Reusability;

  - Easy to create a theme or design system;

  - Simplified Maintenance;

  - Lightweight Library.


## 🚦 Git Workflow

This project is configured to extract the maximum standardization from both commits and pull requests, and that's why I chose the `CommitLint` library to standardize all commits according to their purposes. In addition to that, I am using the `Husky` library for task automation during commits, and, finally, the project includes a defined template for PRs.

### ❓ Other questions

- Why I chose NextJs as my React Framework?
  Nextjs its a pretty good React Framework, even the own React teams recommends to use it. In this case, as you can see, we don't need SEO or SSR in most part of application but I still used this framework for this facility to deploy applications and for built-in route modules.
  Nextjs has a good developer experience, but my personal opinion is: if you don't need SEO or SSR, ViteJs its the better way to go!

- Why I didn't use Tailwind, Styled Component or other CSS-IN-JS library?

  - Less JavaScript: Many libraries that follow the CSS-IN-JS methodology significantly increase the use of JavaScript in the application, causing slow loading of screens for users with slower internet connections;

  - Separation of Concerns: For better code organization, I chose to keep all the component and page styles in a separate file for easier code maintenance.

- Why Typescript?

  - TypeScript is currently extremely useful for creating minimally typed code, ensuring a smooth development process while reducing the number of errors.


  ## ❓ What I missed

I didn't have to much time to create the entire application, so I spent more time setting up the project structure to show you my way to think when developing new projects.
Below are all the project parts that are still missing:

1. Integrate app with server using React Query or even axios to retrieve data from user;
2. Create Storybook for catalog all the components and help to create more concise components;
3. Testing the app using: CypressJs for E2E and Jest for Integration Tests;
4. Improve SCSS naming;
5. Refactor some components to apply react best practices like HOC, container pattern, etc;
