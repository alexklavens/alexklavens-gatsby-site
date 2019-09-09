# alexklavens.com

This website is a personal portfolio site built with GatsbyJS and ReactJS, deployed at [https://alexklavens.com](https://alexklavens.com) using GitHub Pages.

## Project Goals

This project exists primarily as part of my professional online presence. It was also an opportunity to learn about front-end development using React.

So, here are a few goals of the project

1. Create reusable components
  * Components for projects, news highlights, resume entries, and more.
2. Separate data from components
  * Much of the site's data is stored in JSON files
  * Components are dynamically instantiated by using GraphQL to pull in appropriate data from the JSON files.
3. Replicate desired design from plans using CSS (and CSS modules)
  * Designed using CSS modules that tie design to components
4. Mobile-friendly
  * Made site mobile-friendly using CSS media queries and a few JavaScript functions here and there.
  * Mobile site has dedicated navigation and page formatting
5. Dynamic page generation of News Articles ([https://alexklavens.com/theCollegeVoice](https://alexklavens.com/theCollegeVoice))
  * On my [The College Voice Clips](https://alexklavens.com/theCollegeVoice) page, the user sees a series of article previews. All articles can be read within the website and are displayed by querying markdown files.
  * One article has its own dedicated page due to formatting issues.

## It's a static site

I used GatsbyJS, a static site generator, for this project. To deploy the site, Gatsby basically runs through every possible query and page on the site and spits out a bunch of static html files.

## Hosting/Deployment

The site is hosted by GitHub Pages. When I deploy a version of the site, Gatsby sends the production build to the repository at [https://github.com/alexklavens/alexklavens.github.io](https://github.com/alexklavens/alexklavens.github.io).

[That repository](https://github.com/alexklavens/alexklavens.github.io) is what holds the production build and is the source for GitHub Pages. This repository, [https://github.com/alexklavens/alexklavens-gatsby-site](https://github.com/alexklavens/alexklavens-gatsby-site), is the source code/version-control hub for the project. A `npm run deploy` command line argument will run a build and deploy opperation that sends a production build to the [https://github.com/alexklavens/alexklavens.github.io](https://github.com/alexklavens/alexklavens.github.io) repo.

This website is a GitHub Pages 'User site.' Though the site is currently deployed at [https://alexklavens.com](https://alexklavens.com), User sites are tied to a GitHub account at `<accountname>.github.io`. So, my site is also available at [https://alexklavens.github.io](https://alexklavens.github.io).
