const express = require('express');
const bodyParser = require('body-parser'); //trả về một function hoạt động như một middleware
const adminRoutes  = require('./routes/admin-routes');  // đăng ký (midleware)
const userRoutes  = require('./routes/user-routes');
const HttpError = require('./error-handle/http-error');

const app = express();

app.use(bodyParser.json());


app.use('/admin', adminRoutes);
app.use('/user', )

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
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);  //code 500: something went wrong
    res.json({message: error.message || 'An unknown error occurred'});
})


//Start server
app.listen(5000); 