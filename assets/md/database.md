## Building a Web Application Utilizing Python and PostgreSQL
*Fall 2025*

Language: Python, PostgreSQL

#### Summary
* Developed a full-stack web application with a partner using Flask to connect a PostgreSQL database to an interactive front-end interface
* App could be used to plan dinner party events, share/save recipes, and comment on events, with user interactions being integrated in real time with the back-end database
* Collaborated with my project partner via GitHub and deployed the application on Google Cloud Compute Engine

#### Context
The first semester of my MS CS program, I took a course called 4111 Introduction to Databases. For the main project of the class, we were asked to work in pairs and build a web-front application that would be able to integrate user actions with a PostgreSQL database in real time. I worked with a classmate to develop a dinner party planning app.

#### My Work
From were multiple steps we took over the course of the semester to reach a final product:

1. Decide what we wanted our app to do

We first decided that since we were aiming to make an app that would frequently query and update a database, a social app would suit our needs well. Since food/cooking was a shared interest between myself and my project partner, we settled on making a social app for planning dinner parties. We wanted users of the app to be able to create events, invite their friends, respond to invites, comment on event pages, scroll/search through a public set of recipes, save recipes to private collections, and add recipes to event pages (to indicate that they'll bring the dish to the event).

2. Create an entity/relationship diagram representing the how users would interact with different aspects of our app

For this step, we first determined what the entities would be. Then we figured what relationships we'd need to establish to fully connect the entities and faciliate all the app aspects we wanted to include.

Below is the E/R diagrma we created for our project proposal:
<div class="flex-center-container">
 <img src="/assets/img/proj_details/databases/schema.png" height="400">
</div>

3. Translate that schema into a normalized database schema

We set up our database in a PostgreSQL database based on the schema we had previous designed.

4. Input our data into a PostgreSQL database

Next, we input our recipe, user, event, and rating data into the database tables.

5. Develop a web-front application that queried from and updated the database as needed

For this stage, we implemented a web server using Flask and SQLAlchemy to create a live interface for our dinner party platform. We wrote raw SQL queries to interact with our PostgreSQL database to efficiently handle data like recipe lists and user comments. This allowed us to build dynamic features (such as real-time RSVP updates and recipe searches) where user actions directly triggered database transactions. After we finished the website, we deployed the final product on Google Cloud Platform.

Below are photos of our final site:

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/login_1.png" height="240">
  <p class="summary-text">Login page</p>
  <p class="summary-text"> </p>
</div>

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/home_page_2.png" height="400">
  <p class="summary-text">Example user's home page</p>
  <p class="summary-text"> </p>
</div>

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/event_page_3.png" height="400">
  <p class="summary-text">Example event page (invitee perspective)</p>
  <p class="summary-text"> </p>
</div>

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/add_recipe_4.png" height="240">
  <p class="summary-text">Dropdown menu for adding a recipe to an event</p>
  <p class="summary-text"> </p>
</div>

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/recipe_added_5.png" height="200">
  <p class="summary-text">Dropdown menu for adding a recipe to an event</p>
  <p class="summary-text"> </p>
</div>

<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/write_comment_6.png" height="240">
  <p class="summary-text">Writing a comment for an event page</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/edit_comment_7.png" height="240">
  <p class="summary-text">Editing a comment</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/create_event_8.png" height="240">
  <p class="summary-text">Interface for creating a new event</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/event_page_9.png" height="240">
  <p class="summary-text">Example home page's event section after creating an event</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/hosting_page_10.png" height="240">
  <p class="summary-text">Example event page (invitee perspective)</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/recipes_11.png" height="350">
  <p class="summary-text">Public recipe bank on site</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/recipe_page_12.png" height="280">
  <p class="summary-text">Example recipe page</p>
  <p class="summary-text"> </p>
</div>

</div>\\<div class="flex-center-container">
  <img src="/assets/img/proj_details/databases/recipe_search_13.png" height="210">
  <p class="summary-text">Recipe search</p>
  <p class="summary-text"> </p>
</div>