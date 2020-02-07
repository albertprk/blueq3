const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getData', (req,res) => {
    let data = [
        {
            username: "Albert",
            user: true,
            email: "ricky@gmail.com",
            password: "abc",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg",
            points: 0,
            requesting: false
        },
        {
            username: "Janet",
            user: true,
            email: "janet@gmail.com",
            password: "abc",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg",
            points: 0,
            requesting: false
        },
        {
            username: "Artur",
            user: true,
            email: "artur@gmail.com",
            password: "abc",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg",
            points: 0,
            requesting: false
        },
        {
            username: "Employee",
            user: false,
            email: "employee@bestbuy.ca",
            password: "abc",
            profilePic: "https://i.imgur.com/rWsf1oK.jpg",
            points: 0,
            requesting: false
        }
    ];
    res.json(data);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);