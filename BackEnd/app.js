const express = require('express');
const bodyParser = require('body-parser'); //trả về một function hoạt động như một middleware
const fs = require('fs');
const path = require('path');

const adminRoutes  = require('./routes/admin-routes');  // đăng ký (midleware)
const userRoutes  = require('./routes/user-routes');
const HttpError = require('./error-handle/http-error');

const app = express();

app.use(bodyParser.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

//Handling CORS Error
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PATCH, DELETE');
    next(); 
})

app.use('/admin', adminRoutes);
app.use('/user', userRoutes)

app.get('/sync', (req, res) =>{
    let models = require('./models');
    models.sequelize.sync()
    .then(() =>{
        res.send('Database sync completed!')
    });
});

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw(error);
});

app.use((error, req, res, next) => {        //Error handling
    if(req.file) {
        fs.unlink(req.file.path, (err) => {
            console.log(err);
        });
    }
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);  //code 500: something went wrong
    res.json({message: error.message || 'An unknown error occurred'});
})


//Start server
app.listen(5000); 