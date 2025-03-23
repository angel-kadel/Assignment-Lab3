import express from 'express';
const app = express();
const port = 3000;

// URL: http://localhost:3000/index3
// Testing of read using get() in browser
app.get('/read', (req, res) => {
    res.send(`<h1>Lab Assignment 3</h1>
        <p>This is the third file of lab assignment 3 and we are testing get method i.e read in our browser.`)
});

app.post("/create", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});

app.put("/update", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});

app.delete("/delete", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});

// last part
app.listen(port,()=>{
    console.log(`Server is running at: http://localhost${port}/index3`)
})