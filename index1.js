import express from 'express';
const app = express();
const port = 3000;


// Group members: URL: http://localhost:3000/
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Lab Assignment 2</title>
            </head>
            <body>
                <h1>Group 9</h1>
                <ul>
                    <li>Angel Kadel (200560027)</li>
                    <li>Chao-Ting Chen (200568624)</li>
                    <li>Masashi Maruyama (200575894)</li>
                </ul>
            </body>
        </html>
    `);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
