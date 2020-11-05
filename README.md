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


## Motivation 
This project is developed in the the subject Web Devlopment (IT2810) at NTNU. The task was to implement frontend and backend of a website with focus on search. 

We have devloped a website containing the top 156 happiest countries according to FN's 2020 World's Happiness Report. The site has the functionality to search amongst the countries and 
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

The database is set up on a virtual machine.


## Testing 
We have done e-2-e-testing using Cypress ...


## Dokumentasjon 
### Innhold og funksjonalitet 

Søkemulighet eks med en dialog/form/søkefelt for input av søk
We have implemented the possibility to search with a search field where you can type in the name of a country and the website then shows that 
specific Country, 
