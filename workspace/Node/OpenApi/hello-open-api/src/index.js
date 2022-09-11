const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('../swagger.json');

const app = express();
app.use(express.json());

const db = {}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConf));

app.post('/api/persist', (req, res) => {
    let key = `${req.method}_${req.body.path}`;
    let response = res.body.response;
    db[`${key}`] = response;

    res.send();
});

app.use('/', (req, res) => {
    const body = db[`${req.method}_${req.body.path}`] ? db[`${req.method}_${req.body.path}`] : {};
    res.send(body);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
