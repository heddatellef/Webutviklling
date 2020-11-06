# Prosjekt 3

## Installation 
The installation reserves that Git is installed. 

To install and start the project, do the following:


1. Clone the repo: 
 git clone https://gitlab.stud.idi.ntnu.no/.git
2. Install dependencies:
 npm install 
3. Go into backend and start the server: cd backend
npm start
4. Go into frontend and start the server 
 cd ..
cd my-search-app
npm start

The website will now be running at http://localhost:3000

To run the tests(needs to be done after backend and frontend have started):

1: run npm install cypress in my-search-app
2: run npm test


## Motivation 
This project is developed in the the subject Web Devlopment (IT2810) at NTNU. The task was to implement frontend and backend of a website with focus on search. 

We have devloped a website containing the top 156 happiest countries according to FN's 2019 World's Happiness Report. The site has the functionality to search amongst the countries and 
display information about a specific country of your choice. There is also the functionality to sort the countries based on the different factors they have been judged on, such as 
perception og corruption and freedom to make life choices. This functionality will sort from top to bottom (best to worst). On the initial front page you will find a list 
of the top ten countries based on overall rank, and you have the option to load more countries by their order.


## Developers 
- Aksel Skaugestad 
- Vår Sæbøe-Larssen
- Hedda Sofie Tellefsen


## Technologies and frameworks
- Typescript 6.14.6: Programming language used for frontend and backend 
- React: Framework used for frontend 
- Express: Framework used backend 
- Redux: Library used frontend 
- HTML: language used in frotend 
- CSS: language used in frontend 
- Cypress: end to end testing framework

The database is set up on a virtual machine.

Other dependencies: 
- Material-UI: for frontend components 


## Testing 
We have done e-2-e-testing using Cypress where we go through the search function and that the data has loaded and the load more function.
We have also created a test with jest which tests redux.


## Documentation 
### Content and functionality

#### Possibility to search 
We have implemented the search functionality with a search field where you can type in the name of a country and the website then shows that 
specific country. The search functionality also autocompletes, and shows a list of all the countries so that you can chose to also scroll down the list 
and click the country you want to search on. The layout of this function, and also some of the functionality, we have gotten from Material-UI.

#### List-based scrolling 
We represent the countries in form of a list, where they are sorted on the parameter you chose (overall rank by default). The list is by default a size of ten objects, and when 
loading more elements, it expands by ten countries at a time. In this way we use scrolling and dynamical loading of elements to show the countries.

#### Possibility to see more details
For every country there is possible to show details about all parameters. This is done by searching on/chosing the country you would like to see more information about, and then 
all information is displayed. 

#### Sorting and filtering
There is possible to sort the dataset on category. Within the chosen category the countries is also automatically sorted from best to worst (ascending order). 


#### User interaction
It is possible to like/upvote each country. This increases the country's number of likes and is saved to the database (saved persistantly to the server). 

#### Design and solutions 

We have chosen to use components from material-UI to save time when developing the frontend design. 

Since we use a dataset where it is interesting to compare the countries with each other on the different parameters they are judged on and that lead to their score, we chose to alway 
have the data sorted in some way. In this way you can always se which countries that esxells in which areas. We found this to be an informative and intuitive way to deal 
with the data. Since the parameters in them selves not are that informative, we chose not to filter based on these. For exapmple we found out that filtering on "overall rank
higher than 50" would be quite uninteresting, likeways with the other parameters. For this reason we chose to only sort based on order in the different categories. 

#### Database 
We installed the database on a virtual machine. Our dataset consisted of 156 objects. We found this amount to be adaquite to test the functionality of our program.



### Technology

#### React and Typescript 
Our user interfaced is based on react and initialized with create-react-app, and implemented in Typescript. The project is based on Node.js.

We have chosen to use functional components in React because we find these easier to work with and that it leads to code that are easier to read and understand. 

We have a components-folder to keep all of our different site-components. We also have a folder "Redux" containing everything that has to do with Redux. Inside this folder we have divided into several folders, one (Types) that keeps our 
interfaces, one for our reducers and one  to keep the different actions. We see this as a reasonable division to create structure in our folders. 

#### State management with Redux 
We have used React Redux for state management in our application. Redux makes is possible and easy to store and update global state. The global state is stores in Store. We use dispatch to send the action to a reducer. In our case, we only have one reducer; 
countriesReducer.tsx. This will update the state based on which action, and which payload that has been sent from dispatch. We have used Redux to manipulate the table at the bottom of the website. Redux is used to save the category which the user has choisen to rank the results by.
A skip value in redux is used for the pagination of the table.


#### Backend 
We have used MongoDB as database because this is a popular choice with a lot of documentation that turned out to be helpful. We used a ...API(?) which consisted of [...]-files.


#### Express 
Express is a Node.js library for web applications. We have used Express to create a REST API and communicate with the database. The REST-API with Express and Node works
as an intermediary between frontend (React) and bakcend (MongoDB). This stack is called MERN (MongoDB, Express, React, Node). This is a quite popular stack which is one of the reasons 
why we chose it; this means there are a lot of documentation and also it is ineteresting to work with technologies that we know are used frequently in the business. 

We have used a router, and GET and PUT to fetch from and put to the database (router.get, router.put). Express also models the data nicely. We have also used Mongoose to model the scheme
with the database. 

#### Other components and libraries 
Axios is a client-library to send http-requests and handle the response. We have used axios to fetch data from the database.







