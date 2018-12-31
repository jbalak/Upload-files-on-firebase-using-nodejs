const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const admin = require('firebase-admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');








var serviceAccount = require('./express-firebase-98326-firebase-adminsdk-f291h-ac40ca7dff.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://express-firebase-98326.firebaseio.com"
});


app.get('/', function(req, res){
    res.render(__dirname+'/index')
})

app.post('/upload', function(req, res){
    //get file
    var file = e.target.files[0] ;

    //freate a storage ref
    var storageRef = firebase.storage().ref('my_files/'+file.name);

    //upload file
    storageRef.put(file);


})




app.listen(8080, console.log('Listening at 8080'));