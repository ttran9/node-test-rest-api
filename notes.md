1. Video 1 Notes:

   - REST properties. <br/>
     a. Make use of resource-based URLS. <br/>
     Webpage: <br/>
     #a1: http://www.football.com/scores <br/>
     #a2: http://www.football.com/teams/arsenal
     JSON: <br/>
     #a3: http://www.football.com/api/scores <br/>
     #a4: http://www.football.com/api/teams/arsenal

   b. Make Use of HTTP Methods <br/>
   b1. GET: Used to retrieve data from the server. <br/>
   b2. POST: Used to send data to the server. <br/>
   b3. PUT: Used to update data. <br/>
   b4. DELETE: Used to delete data. <br/>

   c. Make use of HTTP status Codes <br/>
   c1. 200: OK <br/>
   c2: 404: means resource not found <br/>
   c3: 500: Server error

2. Video 2 Notes:

   - 1. install nodeJS then use "node -v" to check the version
   - 2. Go to mongodb and look at [Install On Linux](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#install-mongodb-community-edition)
     - Follow the steps in the link.
   - For Ubuntu make sure the above shows a /var/lib/mongodb (for where the data directory is) and the log directory is /var/log/mongodb (where the logs will be)
   - 3. Run MongoDB.
   - Using the "ps --no-headers -o comm 1" command depending on the output select the appropriate tab for the commands.
   - sudo systemctl start mongod
     - start mongod
   - sudo systemctl status mongod
     - check the status
   - sudo systemctl enable mongod
     - Ensure mongo starts after system reboot.
     - sudo systemctl restart mongod
     - restart mongod.
   - sudo systemctl stop mongod
     - stop mongod
   - mongo
     - run mongo on port 27017 (default)
   - package.json
     - contain info about our project and track our dependencies.
   - npm init -y
     - "-y" tills the creation to auto fill content.
   - npm install
     - install dependencies required in our app.
   - Express is a package that will assist us with handling our http requests.
   - The node.js and express app will make our api but our api will wait for requests to come from frontend applications (such as front-end apps, mobile apps, or some other website).
   - The "other website" can make a GET request, "http://www.ninjago.com/api/ninjas", and the express app will see that it is coming to the endpoint of "api/ninjas" and it will "deal" with it to give the desired resources by communicating with MongoDB to get the information and send it back in a JSON format.
     - The "other website" can cycle through these results and display them in some customized way.

3. Video 3 Notes:

   - HTTP Methods: A way of telling the server what type of request we are making

     - GET: Reading/retrieving a list of ninja(s)
     - POST: Create a new ninja and store it.
     - PUT: Update / edit an existing ninja.
     - DELETE: Delete a ninja from the db.

   - API Routes:
   - Read / retrieve a list of ninjas
     - GET Request to http://www.ninjago.com/api/ninjas
   - Create a new ninja
     - POST request to http://www.ninjago.com/api/ninjas
   - Update (edit) an existing ninja
     - PUT request to http://www.ninjago.com/api/ninjas/:id
   - Delete a ninja

     - Delete request to http://www.ninjago.com/api/ninjas/:id

   - The express app knows how to handle different requests even though the URL is similar is because of the HTTP method that is used.

4. Video 4 Notes:

   - For this app it should be pointed out Express isn't needed but it is used to make building/bootstrapping our API easier.
   - Run the express app.
   - "node index"

5. Video 5 Notes:

   - Note: The request and response objects allow us to get information about the request and the response allows us to send content back to the requesting party.

6. Video 6 Notes:

- Nodemon: helps us with monitoring the application for changes.
- npm install -g nodemon
- nodemon index
  - does same thing as "node index"
- middleware: code that runs between request and response.

7. Video 6.5 Notes:

8. Video 7 Notes:

- Body-Parser: Dependency which can help us grab content from the request body.
- Middleware: Code that is "fired" (executed) from the user request and the server's response.
  - We can use multiple middleware and middleware before the route handlers and after the route handlers.
- npm install body-parser --save
- f

9. Video 8 Notes;

10. Video 9 Notes:

11. Video 10 Notes:

12. Video 11 Notes:

13. Video 12 Notes:

14. Video 13 Notes:

15. Video 14 Notes:

16. Video 15 Notes:

17. Video 16 Notes:
