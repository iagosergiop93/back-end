const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/api/books/volumes', (req, res) => {

    let query = req.url.split('?')[1];
    let urlReq = `https://www.googleapis.com/books/v1/volumes?${query}`
    axios.get(urlReq).then((resp) => {
        res.send(resp.data);
    }).catch(e => {
        console.log(e);
        res.send(e);
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})