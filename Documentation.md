## About

This is the overall README that collates and explains the work of the interactive graphics specialist at DOE's public affairs office. 

## How to do everything
You will need to learn a few things in order to get rolling at DOE. 

### Typical tools and workflow
The typical workflow requires access to the CMS and github, and an understanding of the following tools. To read more, go to the [App Frame README file](https://github.com/energyapps/app_frame/blob/master/README.md).

* CMS
	- **We reference our maps and interactives in the "map" content type using pym**
	- You will need access to the CMS. Ask your boss about this. 
		- Receive training
	- Familiarity with the "map" content type.
		- The "map" content type is where we paste in our pym content.
		- The map content is then referenced around the cms as a "map reference" in content like the "articles" content type. (this is the most common place it will be used. )
* Github access for energyapps group
	- **We use github to store a version controlled copy of our work, so that is safe and sound.**
	- You are here now, but you must join the energyapps group. 
* Github pages
	- **We use github pages as the production server for our small, single page graphics. Stored on github, compiled with jekyll, served on the `gh-pages` branch of the repo to `energyapps.github.io/YOUR-REPO-NAME`.**
	- [Be sure to understand how github pages work.](https://pages.github.com/)
* Jekyll Pages
	- **We use Jekyll to create small, modular single web pages for each graphic. This allows us to build our graphics in a more organized fashion and it is natively integrated to github pages.**
	- [Read up on jekyll pages and how it plays with github pages](jekyllrb.com)
* Pym.js
	- **We use pym.js to create a responsive iframe in the CMS. We put the library in our github pages, and call it on the CMS and it is brought in seamlessly without worrying about the CMS environment's CSS ever changing.**
	- [Read up on how pym creates responsive iframes](blog.apps.npr.org/pym.js/).
* Foundation CSS
	- **If we are building a lot of html and CSS on the page, we have often used Foundation CSS to help bootstrap the process and create a responsive grid**
	- [Foundation CSS](http://foundation.zurb.com/sites.html) is often used but not required. 

**For more detailed information, go to the [App Frame README file](https://github.com/energyapps/app_frame/blob/master/README.md).**

### Other stuff
* Quizzes
	- To read more on how quizzes are generated, go to the [Quizzer repo](https://github.com/energyapps/quizzer).
* Timelines
	- There is now a timeline content module on the drupal CMS environment, but a few older or larger timelines were created outside of this environment. Details about them can be found on the [EM Timeline's README](https://github.com/energyapps/EM_timeline). 
* Energy.gov/api
	- See [Egallon Serve](https://github.com/energyapps/egallon-serve) or the [Utilities Script](https://github.com/energyapps/utilities_data_processor) for info on the egallon scripts.
	- See [Social Scraper](https://github.com/energyapps/social-scraper) for more info on the social media
	- Utimately any scripts found on github are not the scripts that will serve the data. The scripts that serve the data will be served from energy.gov/api and the cron job is run through the Jenkins Job. See above Social Scraper README and issues for more info or talk to Chauncey or Ernie. 
* Social Media Org Chart and Social Media Analytics
	- The pages themselves are hosted [here](https://github.com/energyapps/social)
	- Copies of the scripts that gather and collate the data are available [here](https://github.com/energyapps/social-scraper).
	- **NOTE** facebook numbers are hard to get without manually getting them so until someone plays with the Facebook API there are no facebook numbers on the social media org chart. 
* Egallon 
	- Details on how to manage and update Egallon are found at the [Egallon-serve](https://github.com/energyapps/egallon-serve) repo.
* Outstanding broken maps
	- Can be viewed [here](https://docs.google.com/spreadsheets/d/1teQFKjR22g0lSGhcT6xmgKvDzRXyaiSKwazrlG-6aWc/edit?usp=sharing). 

