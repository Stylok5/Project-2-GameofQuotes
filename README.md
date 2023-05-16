# Project_2 Game of Quotes

`Search for your favorite Game Of Thrones character's quotes with this simple react web page.`

1.  Overview
2.  Installation
3.  Technologies Used
4.  How to use
5.  The Components
6.  Timeline
7.  Wins and Blockers
8.  Future content and improvements
9.  Key Learnings
10. Original Planning Notes

## Overview

Game of Thrones Quotes is a web application that allows users to search for quotes from their favorite characters of the Game of Thrones TV series. It uses the Game of Thrones Quotes API to fetch character information and their quotes. This was a 5-day solo project and my first experience of using a public API and building the front-end in React.

You will find the deployed version [here](https://gameofthrones-character-quotes.netlify.app/)

![Alt text](https://i.imgur.com/HncxyCE.png "Optional title")

# Installation

To run the application locally, you'll need to have Node.js installed on your machine. To install Node.js visit its website [here](https://nodejs.org/), download the appropriate version of Node.js for your operating system. Run the downloaded installation file and follow the prompts to install Node.js on your computer. In the Visual Studio Code terminal type **node -v** and press Enter to verify that Node.js is installed and to check its version. You can then follow these steps:

1. Clone this repository to your local machine by typing git clone and using the ssh key from github in your terminal.
2. In the root directory of the project, run npm install to install the required dependencies.
3. Run npm run dev to start the server.
4. Open the url in your browser to view the application.

## Technologies Used

**Front-end** :

- React
- JSX
- Axios
- SCSS
- React Router Dom

**API Used**:

- Game Of Thrones Quotes API - https://gameofthronesquotes.xyz/\

**Dev tools**:

- VS code
- Yarn
- Git
- Github
- Google Chrome dev tools
- Netlify (deployment)

## How to use

On the **homepage**, users can search for a character by name by typing in the search bar and clicking the "Search" button or pressing the "Enter" key. The page will display a list of characters whose names match the search query. Users can click on a character's name to see a list of their quotes on the QuotePage.

On the **QuotePage**, users can view a list of quotes for the selected character, along with their name and house. They can click the **Back to homepage** button to return to the homepage.

## The components

The three components of the application:

**Header**: displays the navigation menu for the web application at the top of the screen. It consists of a nav element containing an unordered list of navigation links that are generated dynamically using the navigationLinks array.Each link in the navigation menu is represented as a list item (li) and wrapped in a Link component from the react-router-dom library to enable client-side routing.
The navigationLinks array is an array of objects that define the title of the link and its associated slug.

**Homepage**: a search page that lets users search for characters by name, using filter and find array methods, and see a list of matching results. They can then click on a character's name to see a page with a list of their quotes.

**QuotePage**: a detail page that displays information about a selected character, based on their slug which is used as a parameter, including their name, house, and a list of their quotes.

## Timeline

### Day 1:

I spent most of my time searching for the appropriate API to use and choosing the app's functionalities. I eventually decided on creating a website for a very popular and one of my favorite tv shows Game Of Thrones. I wanted the app to include a homepage for the character names, a search bar, an individual page for each character and as a strech goal, if you are logged in, an add more quotes page. I ended the day with doing some wireframing using Excalidraw and looking at the documentation of the API, to have an idea of how I would access the data.

### Day 2 and 3:

On the second day, I started with the homepage creation. First I used two hook React functions *useState and *useEffect to grab the data from the external API and console log it so that I could better understand how to handle the data.

![Alt text](https://i.imgur.com/gkCG2GX.png "Optional title")

Then in the return statement I mapped through the data to grab the character names and render them in the homepage.

![Alt text](https://i.imgur.com/7y8f8OJ.png "Optional title")

The search function was a bit trickier, as I wanted to filter throught the list of names, when searching and only show the name I searched for and I also wanted to be able to type in lowercase or uppercase and still get the name. This was my final function:

![Alt text](https://i.imgur.com/NphD9vM.png "Optional title")

I then updated my return statement so that it would show the filtered data on the page. I then moved on to making the logic for the onclick function, so that when I searched for a name and pressed enter or click the search button or the name, I would then be redirected to that character's page. I also added some logic so that you don't have to write the whole character's name to search for him and used a form for the search bar. By typing some letters and not the whole name, you could still navigate to the character's page if there was only his name left on the filtered list, meaning if the length of the names was 1.

![Alt text](https://i.imgur.com/o5nWexn.png "Optional title")

My return statement:

![Alt text](https://i.imgur.com/FWd4Ovg.png "Optional title")

### Day 4 and 5:

The fourth day was spent on creating the the individual character's page and a navbar. I first used the useEffect and useParams hooks to get the individual character's page from their slug and then a return statement to render the data on the quotes.

![Alt text](https://i.imgur.com/IOFP53D.png "Optional title")

I also added some conditions and a button with a link back to the homepage.

JSX: ![Alt text](https://i.imgur.com/NI98YsV.png "Optional title")

Finishing off I added a navbar with links for the homepage and quotes page and some additional links with their functionalities added in the future. I used SCSS for the styling and finally the app was deployed with Netlify.

Character's page: ![Alt text](https://i.imgur.com/1mz4Jkb.png "Optional title")

## Wins and Blockers

A win was making it possible to search for a character by pressing enter, if it is the only name filtered in the list, without having to write the whole name and also adding some conditional rendering if the characters had no available information for their houses.

Figuring out how to manipulate the data from the API and getting the search bar to only show the name you typed on the page and filter out the others was probably the most challenging part.

## Future content and improvements

As of now there are three navigation links that are not currently used. These are "Add your own quotes", "Register" and "Login". In the near feature I plan to update this web application so that the user is able to register, login and then add, edit or delete a quote for a character from the show, improve the styling and making it mobile responsive.

## Key Learnings

This project greatly increased my knowledge about consuming and manipulating APIs and as it was my first React project, provided me with a lot of practice about react hooks like useState and useEffect.

## Original Planning Notes

This project was initially going to be a Game Of Thrones quiz. It would provide the user with a total of 10 quotes where he had to select the correct character associated with each quote by picking the correct character image or name, scoring points if they got it right or losing if they were wrong. Due to unforseen time constraints during that project week, I decided I would do something simpler and leave the more complicated functionalities for my next bigger project.
