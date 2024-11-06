const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Set up the directory for static files like CSS, JS, images, etc.
app.use('/public', express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
