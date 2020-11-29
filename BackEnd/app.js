require('dotenv').config();
const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const brandRoutes = require('./routes/brand-routes');  // đăng ký (midleware)
const userRoutes = require('./routes/user-routes');
const categoryRoutes = require('./routes/category-routes');
const productRoutes = require('./routes/product-routes');
const groupRoutes = require('./routes/group-routes');
const billRoutes = require('./routes/order-routes');
const promotionRoutes = require('./routes/promotion-routes');
const HttpError = require('./error-handle/http-error');
const { get } = require('http');

var cors = require('cors')

const app = express();
// app.use(bodyParser.json());

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   });

//Handling CORS Error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PATCH, DELETE');
    next();
})

// app.use(function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
//   });

app.use('/api/product', productRoutes);
app.use('/api/promotion', promotionRoutes);
app.use('/api/bills',billRoutes);
app.use('/api/brand', brandRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
        .then(() => {
            res.send('Database sync completed!')
        });
});

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw (error);
});

app.use((error, req, res, next) => {        //Error handling
    if (req.file) {
        fs.unlink(req.file.path, (err) => {
            console.log(err);
        });
    }
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);  //code 500: something went wrong
    res.json({ message: error.message || 'An unknown error occurred' });
})


//Start server
app.listen(5000);



