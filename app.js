const express = require('express');
const app = express();
const port = 3000;
const user = require('./routes/user')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use('/user', user);

app.use('/', (req, res) => {
	res.status('404').send('Page Not Found');
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
