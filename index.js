const express = require('express');
const app = express();

// Handle GET request at '/'
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/jokes', (req, res) => {
    res.status(200).json({
        "status": "success",
        "joke": "funny joke"
    })
})

// Set the port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});