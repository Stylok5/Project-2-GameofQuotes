
# Project_2 Game of Thrones Quotes

`Search for your favorite Game Of Thrones character's quotes with this simple react web page.`

1.  Overview
2.  The Brief
3.  Installation
5.  Technologies Used
6.  How to use
7.  Timeline
7.  Wins and Blockers
8.  Future content and improvements
9.  Key Learnings
10. Original Planning Notes

## Overview

Game of Thrones Quotes is a web application that allows users to search for quotes from their favorite characters of the Game of Thrones TV series. It uses the Game of Thrones Quotes API to fetch character information and their quotes. This was a 5-day solo project and my first experience of using a public API and building the front-end in React.

You will find the deployed version here: https://findyourfavoritegotquotes.netlify.app/

![Alt text](https://i.imgur.com/HncxyCE.png "Optional title")

# Installation

To run the application locally, you'll need to have Node.js installed on your machine. You can then follow these steps:
Clone this repository to your local machine.
In the root directory of the project, run npm install to install the required dependencies.
Run npm start to start the development server.
Open [label]http://localhost:3000 in your browser to view the application.

# How to use

On the **homepage**, users can search for a character by name by typing in the search bar and clicking the "Search" button or pressing the "Enter" key. The page will display a list of characters whose names match the search query. Users can click on a character's name to see a list of their quotes on the QuotePage.

On the **QuotePage**, users can view a list of quotes for the selected character, along with their name and house. They can click the **Back to homepage** button to return to the homepage.

## Technologies Used
 
**Front-end** :
* React
* JSX
* Axios
* SCSS
* React Router Dom

**API Used**:
* Game Of Thrones Quotes API - https://gameofthronesquotes.xyz/\

**Dev tools**:
* VS code
* Yarn
* Git
* Github
* Google Chrome dev tools
* Netlify (deployment)

## Timeline

The application consists of two main components:
**Header**: displays the navigation menu for the web application at the top of the screen. It consists of a nav element containing an unordered list of navigation links that are generated dynamically using the navigationLinks array.Each link in the navigation menu is represented as a list item (li) and wrapped in a Link component from the react-router-dom library to enable client-side routing.
The navigationLinks array is an array of objects that define the title of the link and its associated slug.

**Homepage**: a search page that lets users search for characters by name, using filter and find array methods, and see a list of matching results. They can then click on a character's name to see a page with a list of their quotes.

**QuotePage**: a detail page that displays information about a selected character, based on their slug which is used as a parameter, including their name, house, and a list of their quotes.

## Wins and Blockers



## Future content and improvements

As of now there are three navigation links that are not currently used. These are "Add your own quotes", "Register" and "Login". In the near feature I plan to update this web application so that the user is able to register, login and then add a quote for a character from the books or show and also be able to edit or delete it.

## Key Learnings

## Original Planning Notes
