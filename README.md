# Auction site - Semester Project 2

![homepage1](https://github.com/Gronnfrosk/Noroff-Semester-Project-2/assets/91615712/9662f0b5-b6cb-4c4a-b848-d75b123a683d)

## Description
This is an auction website where users can add items to be bid on and bid on items other users have put up for auction.

When a new user joins the website, they are given 1000 credits to use on the site. They can get credits by selling items and use credit by buying items. Non-registered users can search through the listings, but only registered users can make bids on listings and see other users profile.

1.	**Home page**
      - View active listings that is put up for auction and displayed as cards containing an image, title and amount of bids on the item. 
      - It is possiple to sort listings by when they are created, deadline date and most bids.
      - An unregistered user may search and sort through Listings. 
      - Users can add items for auction. There is validation for the create listing form.
      - Users can see total Credit in top navigation bar. Users can also logout from the top navigation bar.
3.	**Profile page**
      - Profile information (Avatar, username, email, listings, bids and wins). 
      - A user can update their avatar and see their total Credit on their own profile page.
      - Users can add items for auction on their own profile page. 
      - There is validation for the create listing and edit avatar form.
      - Users can see total Credit in top navigation bar. Users can also logout from the top navigation bar.
5.	**specific auction item pages** 
      - Dynamically built based on which auction item one has been clicked. 
      - Media gallery carousel displaying images of auction item. 
      - Basic information such as title, description and deadline.
      - Bid form and bid history of the item/listing. Theese features are resticted for none users. Users can view bidders and sellers profile.
      - Users can see total Credit in top navigation bar. Users can also logout from the top navigation bar.
4.	**Login page** 
      - Registered users may login. There is validation for login form.
6.	**Register page** 
      - One can registrate a new user with a stud.noroff.no email. There is validation for register form.

Project is hosted by GitHub Pages: https://gronnfrosk.github.io/Noroff-Semester-Project-2/

## Built With

- [Bootstrap v.5.2.3](https://getbootstrap.com)
- [SASS/SCSS v.1.62.0](https://sass-lang.com/)
- [JSDoc v.4.0.2](https://jsdoc.app/)

## 1. Getting Started

1. Clone the repo through github website or CLI command:
```
git clone https://github.com/Gronnfrosk/Noroff-Semester-Project-2.git
```
2. Run ```npm install``` to install all dependencies.
3. Run ```npm start``` to start the development server.

## 2. Compile your Sass to CSS
You can watch and output to directories by using folder paths as your input and output, and separating them with a colon. The watch flag tells Sass to watch your source files for changes, and re-compile CSS each time you save your Sass. In this project use CLI command:
```
"sass --watch src/scss:dist/css & live-server"
``` 
You can also run the command:
``` 
npm run start
``` 

## 3. Generate JSDocs documentation
To create the documentation for the whole project you can run the following command:
``` 
npm run docs
``` 

## 4. Github Action Workflow
The project is configured to run action to build and deploy to GitHub pages on 'main' and 'main-test' branch push or pull request.
 
