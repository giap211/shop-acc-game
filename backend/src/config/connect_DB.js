const mongoose = require('mongoose');

function connectDB(){
    //mongoose.connect(`${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    mongoose.connect("mongodb+srv://giap21:wapkavn21@cluster0.lgeg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    
    // try connect mongodb
    const db = mongoose.connection;

    // log result
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('Connect mongDB success');
    });
}

module.exports = connectDB