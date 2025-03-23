# Assignment-Lab3

### Group number: 9
### Members:
-Angel Kadel (200560027)
</br>-Chao-Ting Chen (200568624)
</br>-Masashi Maruyama (200575894)

# Project Overview
<p>This project is a simple Node.js application using the Express framework to demonstrate basic web server functionalities, JSON data handling, and HTTP methods. The project consists of three JavaScript files:</p>

## index1.js (Basic Express Server):
</br> This file sets up a basic Express server and serves an HTML page displaying the group members' names.

</br>-Runs a server on http://localhost:3000/
</br>-Displays an HTML page with group details.
</br>-Includes a route ('/') to return a basic webpage.

## index2.js - (Serving JSON Data):
</br>This file imports country data from a JSON file and sets up an API endpoint to display the data in JSON format.

</br>-Imports country.json from the /data folder.
</br>-Creates an endpoint (/country) that returns JSON data.
</br>-Runs a server on http://localhost:3000/country/.


## index3.js -(HTTP Method Testing):
</br>This file demonstrates handling different HTTP methods using Express.

</br>-GET /read - Displays an HTML page with a message.
</br>-POST /create - Responds with a message indicating a Create operation.
</br>-PUT /update -Responds with a message indicating an Update operation.
</br>-DELETE /delete - Responds with a message indicating a Delete operation.

