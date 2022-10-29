const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const users = [
    { "id": 1, "name": "Farhan", "email": "farhansharif@gmail.com" },
    { "id": 2, "name": "Sharif", "email": "sharif@gmail.com" },
    { "id": 3, "name": "Safyan", "email": "Safyan@gmail.com" }
]

app.use(cors());

app.get('/', (req, res) => {
    res.send('This is Server Project')
})

app.get('/users', (req, res) => {
    res.send(users)
})


app.listen(port, () => {
    console.log('Server Is Running on port', port);
})