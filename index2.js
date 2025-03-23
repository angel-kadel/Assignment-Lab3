import express from 'express';
// importing json from data folder which contains country data
import country from "./data/country.json" assert {type:'json'};
const app = express();
const port = 3000;

// Route to display JSON data
app.get('/country', (req, res) => {
    res.json(country);
  });
  
  // Start server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/country`);
  });
  

