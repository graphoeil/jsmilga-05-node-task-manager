// Imports
const express = require('express');

// App
const app = express();

// Routes
// Homepage
app.get('/', (req, res) => {
	res.status(200).send('Task Manager App');
});

// Listen
const port = 3000;
app.listen(port, console.log(`Server is listening on port ${ port }...`));