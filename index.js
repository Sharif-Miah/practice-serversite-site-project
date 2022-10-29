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
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is Server Project')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log('Post API callled');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user)
})


app.listen(port, () => {
    console.log('Server Is Running on port', port);
})