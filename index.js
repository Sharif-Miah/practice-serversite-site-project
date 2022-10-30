const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
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
    if (req.query.name) {
        const search = req.query.name;
        const filltered = users.filter(usr => usr.name.toLocaleLowerCase().indexOf(search))
        res.send(filltered)
    }
    else {
        res.send(users)
    }

})

// userName: dbuser1
// password: IDdMqcq21tCLhYhy



const uri = "mongodb+srv://dbuser1:IDdMqcq21tCLhYhy@cluster0.dfmvdpa.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('simpleNoNode').collection('users');
        const user = { name: ' Sharif', email: 'sharif@gmail.com' }

        app.post('/users', async (req, res) => {
            console.log('Post API callled');
            const user = req.body;

            // users.push(user);
            // console.log(user);
            const result = await userCollection.insertOne(user);
            console.log(result);
            user.id = result.insertedId;
            res.send(user)
        })
    }
    finally {

    }
}

run().catch(err => console.log(err))


// app.post('/users', (req, res) => {
//     console.log('Post API callled');
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user);
//     console.log(user);
//     res.send(user)
// })


app.listen(port, () => {
    console.log('Server Is Running on port', port);
})