const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like APP.HTML)
app.use(express.static(__dirname));

// Serve APP.HTML as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'APP.HTML'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
