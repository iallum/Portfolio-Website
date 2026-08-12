## Dinner Party Planning & Recipe Web App
*Fall 2025*

Language: Python (Flask, SQLAlchemy), PostgreSQL

#### Summary
* Developed a full-stack social web application with a partner connecting a PostgreSQL database to an interactive Flask front-end interface
* Built a platform for planning dinner parties, managing guest lists and RSVPs, meal planning, and sharing/saving recipes
* Implemented custom database triggers to automate data validation, full-text search for recipe reviews, and tag-based recipe recommendations
* Designed dynamic host vs. guest views and deployed the production application on Google Cloud Platform

#### Context
For the final project in my Introduction to Databases course (COMS 4111) at Columbia University, my project partner and I developed a full-stack web application centered around dinner party planning and recipe sharing. The goal of the project was to take an application concept from initial requirements through database normalization, complex SQL query design, real-time web integration, and cloud deployment.

We chose a dinner party planning app because it required a rich web front-end powered by frequent database interactions, multi-table joins, and real-time updates (such as event hosting, guest RSVPs, recipe bookmarking, and user reviews).

#### My Work

**Database Design & ER Modeling**:
  * Designed an entity-relationship schema to connect users, events, recipes, collections, comments, reviews, and permissions.
  * Translated the model into a normalized PostgreSQL database ensuring data integrity across events, host privileges, guest RSVPs, and user recipe collections.

Below is the E/R diagram created for our project:

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/schema.png" height="400">
  <p class="summary-text">Entity/Relationship Diagram for the Dinner Party Application</p>
</div>

**Database Features & Automated Triggers**:
  * *Recipe Tagging & Recommendations*: Added descriptive tag arrays (e.g., "vegetarian", "easy", "comfort food") to recipes, allowing users to filter dishes intuitively and powering a recommendation feature that surfaces similar recipes based on shared tags.
  * *Automated Review Validation*: Programmed a database trigger function to enforce review integrity—ensuring users can only submit a written text review if they have already rated the dish. If an unrated user attempts to post, the database automatically cleans up incomplete entries and blocks invalid data.
  * *Full-Text Search & Live Rating Aggregations*: Implemented full-text search over recipe reviews to filter feedback by key search terms. Additionally, used SQL aggregate queries (`AVG`) to dynamically recompute average star ratings on request whenever a new rating is submitted, avoiding stale stored values.

**Web Application & Interactive SQL Queries**:
  * Developed a Flask web server using SQLAlchemy and raw SQL queries to handle live front-end user actions and back-end database transactions.
  * Executed multi-table SQL queries (`JOIN`, `INSERT`, `UPDATE`, `DELETE`) to power live platform actions—such as creating events, managing guest lists, changing RSVP statuses, posting/editing/deleting event comments, and saving recipes to user collections.
  * Implemented dynamic user permissions: comparing logged-in user IDs against event host IDs to conditionally display host controls (editing time/location, uninviting guests) versus guest options (RSVPs, contributing recipes to meal plans, commenting).
  * Deployed the live web application on a Google Cloud Compute Engine virtual machine instance.

Below are screenshots of the final web application interface:

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/login_1.png" height="240">
  <p class="summary-text">Application login interface</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/home_page_2.png" height="400">
  <p class="summary-text">User home dashboard showing upcoming events and recipe feeds</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/event_page_3.png" height="400">
  <p class="summary-text">Event details page (Invitee perspective)</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/add_recipe_4.png" height="240">
  <p class="summary-text">Adding a recipe to an event meal plan</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/write_comment_6.png" height="240">
  <p class="summary-text">Real-time event comment section</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/create_event_8.png" height="240">
  <p class="summary-text">Interface for creating a new event</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/hosting_page_10.png" height="240">
  <p class="summary-text">Event management page (Host perspective)</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/recipes_11.png" height="350">
  <p class="summary-text">Public recipe directory with search and tag filtering</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/recipe_page_12.png" height="280">
  <p class="summary-text">Recipe detail page with real-time average rating calculation</p>
</div>

<div class="flex-center-container" style="margin-bottom: 35px;">
  <img src="/assets/img/proj_details/database/recipe_search_13.png" height="210">
  <p class="summary-text">Dynamic recipe search interface</p>
</div>