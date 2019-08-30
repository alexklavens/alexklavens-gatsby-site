# alexklavens.github.io

This website is a personal portfolio site built with Gatsby.js and React.

## Hosting/Deployment

The site is hosted with GitHub Pages as a "user" site, meaning that I can use the URL [https://alexklavens.github.io](https://alexklavens.github.io).

GitHub pages requires user/organization sites to be served from the `master` branch of a repository with the same name as the site.

Gatsby is a static site generator, meaning when the site is "built" for production, Gatsby generates a set of HTML files for the site.

For Gatsby to work with GitHub Pages, the statically-generated files also need to be at the `master` branch. However, these generated files are not ever directly manipulated by me.

So, the solution: two repositories. The one you're looking at right now contains the actual code I wrote for the site. The other, [https://github.com/alexklavens/alexklavens.github.io](https://github.com/alexklavens/alexklavens.github.io) contains the statically-generated Gatsby files. The site is served from there, but this repository is where development happens.

Generally, a developer would use multiple branches of the same repository for things like this. In fact, Gatsby's integration with GitHub Pages works well if the GitHub Pages project is a "project page" where the site is hosted from a `gh-pages` branch of a repository. In that case the URL for that site would look like `https://<GitHubUsername>.github.io/<ProjectName>`. But for a user site, where your URL is `https://<GitHubUsername>.github.io`, your site needs to be at the master branch.

In my case, this repository has the "master" code behind the website. I could have put the development code on another branch of the [https://github.com/alexklavens/alexklavens.github.io](https://github.com/alexklavens/alexklavens.github.io) repository, but I chose to separate the two.
