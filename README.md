# Assignment9

## Table of contents  
* [Objective](#Objective)
* [Task Description](#Task-description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Postman](#Postman)
* [Screenshots](#Screenshots)

## Objective

Build a Recipe Management System using Node.js, Express.js, and Sequelize. Implement the CRUD functionality and server-side data validation using Sequelize.

## Task Description

* Set up a new Express.js application and install Sequelize as a dependency.
* Create a Sequelize model and migration for the Recipe entity with the following properties:
  * id (primary key)
  * title (string)
  * description (text)
  * ingredients (text)
  * instructions (text)
  * createdAt (datetime)
  * updatedAt (datetime)
* Generate seed data to populate the Recipe table with initial records.
* Implement the following API endpoints using Sequelize to perform CRUD operations on recipes:
  * Set up the necessary Express.js routes and handlers to handle CRUD operations.
  * Create a route to retrieve all recipes from the database (GET /recipes).
  * Create a route to retrieve a specific recipe by ID from the database (GET /recipes/:id).
  * Create a route to add a new recipe to the database (POST /recipes).
  * Create a route to update a recipe by ID in the database (PATCH /recipes/:id).
  * Create a route to delete a recipe by ID from the database (DELETE /recipes/:id).
  * Use SQL queries to interact with the PostgreSQL database and perform the necessary CRUD operations.
* Implement server-side data validation using Sequelize's built-in validation methods for the following fields:
  * title: Required, minimum length of 3 characters.
  * description: Required, maximum length of 500 characters.
  * ingredients: Required, maximum length of 1000 characters.
  * instructions: Required, maximum length of 5000 characters.
* Handle errors and provide appropriate error messages for invalid requests or database errors.
* Test your application using an API testing tool like Postman  to ensure that all CRUD operations and data validations are working correctly.

## Installation

Clone the repository to your local machine

Open a terminal and navigate to the project directory

Install the dependencies by running the following command:

```
npm install
```
Make sure the .env file is set up with the correct variables (DB_USER, DB_PASSWORD, DB_NAME, and DB_HOST) and is located in the root of our project directory. The .env file is not committed to version control, so you'll need to create a new one.
```
DB_USER=
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=
```
Now, when we run our application in development mode, Sequelize will use the credentials provided in our environment variables to connect to our database.

## Usage

To start the application, run the following command in your terminal:

```
npm start
```

This will start the server on port 4000 by default. You can access the API using any REST client, such as a ReactJS app, Postman or cURL.

The following endpoints are available:

- GET /recipes - Retrieve a list of all recipes.
- GET /recipes/:id - Retrieve a specific recipe by ID.
- POST /recipes - Add a new recipe.
- PATCH /recipes/:id - Update a specific recipe by ID. 
- DELETE /recipes/:id - Delete a specific recipe by ID.

## Postman
Link to Postman Collection: https://www.postman.com/mdegrezia/workspace/recipe-management-system/collection/28381226-f856ce51-253c-419b-b935-662d1b951757?action=share&creator=28381226

## Screenshots

<img src="https://github.com/madisondegrezia/Assignment9/assets/89614960/ff77bf65-7466-4d67-b6a2-e0f61e644992" width=60% height=60%>

The above image shows the GET request to retrieve all recipes in the database.

<img src="https://github.com/madisondegrezia/Assignment9/assets/89614960/cd7a7de6-c1d8-41fb-abff-0c0c1210d792" width=60% height=60%>

The above image shows the GET request to retrieve a specific recipe by id in the database.

<img src="https://github.com/madisondegrezia/Assignment9/assets/89614960/882170d1-c537-4da6-93fd-38495dfb1c5f" width=60% height=60%>

The above image shows the POST request to add a new recipe to the database.

<img src="https://github.com/madisondegrezia/Assignment9/assets/89614960/0239aa76-267a-4477-963b-347495034783" width=60% height=60%>

The above image shows the PATCH request to update a recipe by ID in the database.

<img src="https://github.com/madisondegrezia/Assignment9/assets/89614960/c8bdb80a-68d4-446d-af07-e431f81bdb9f" width=60% height=60%>

The above image shows the DELETE request to delete a recipe by ID from the database.







