# Vettery Auto Applier

This script is for those who want to show interest in all companies on Vettery.com. Puppeteer is used for automation to navigate, log in, and click on "Interested" for every company in the Discover tab.

## Requirements

- Node
- Chromium
- Vettery account

## How To Use

1. Navigate to root of this folder in a terminal
1. Run `npm install` in the terminal to install dependencies
1. In the `config` folder, make a copy of the `config.example.js` file
1. Edit the `config.js` file you created and fill in your e-mail and password and then save the file
   _Optional: If you don't want to a Chromium browser to open, go into the `scripts` folder and change `headless` to **true** in `autoapply.js`_
1. Run `npm start` in the terminal to run the script
1. The terminal will log how many companies the script applied to when complete

## Built With

- Puppeteer

## Authors

- **Francis Distor** - _Intial Work_ - [Blog](http://www.distor.home.blog)
