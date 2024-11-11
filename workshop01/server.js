// server.js
const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();

// Set up Handlebars as the template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Serve static files (like images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the route for the landing page
app.get('/', (req, res) => {
    const quotes = [
        "Logic will get you from A to B. Imagination will take you everywhere.",
        "There are 10 kinds of people. Those who know binary and those who don't.",
        "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
        "It's not that I'm so smart, it's just that I stay with problems longer.",
        "It is pitch dark. You are likely to be eaten by a grue."
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Render the landing page and pass the random quote
    res.render('index', { 
        quote: randomQuote,
        imageUrl: '/images/snowboarding.jpg', // path to your image
        repoLink: 'https://github.com/jamgeeks/courseasg.git'  // Link to your repo
    });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
