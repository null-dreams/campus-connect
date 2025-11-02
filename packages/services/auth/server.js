const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.get('/api/auth/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
