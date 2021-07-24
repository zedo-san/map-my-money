const express = require('express');

const app = express();

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

// PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server up and running at http://localhost:${PORT}`))