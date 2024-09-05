const express  = require('express');
const app = express();


require('dotenv').config();

const PORT = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

//the directory where the template files are located
app.set('views', './templates');


const dbConnection = require('./configs/dbConnection');

dbConnection();

app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
}
);






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

