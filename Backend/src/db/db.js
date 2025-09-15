const mongoose = require('mongoose');

const DbConnection=()=>{
    mongoose.connect('mongodb://localhost:27017/MovieData')
    .then(()=>{
        console.log("Database connected successfully....");
    })
    .catch((err)=>{
        console.log('Database not connected ',err);
    })
}

module.exports = DbConnection;