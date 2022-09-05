const express = require('express')

const app = express()
const port = 80
const path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/statics'));

var mongoose = require('mongoose');
const { userInfo } = require('os');
mongoose.connect('mongodb://localhost:27017/firstdb', { useNewUrlParser: true });
var db = mongoose.connection;// establish connection to MongoDB
db.on('error', () => { console.log('Error in database connection'); });
db.once('open', () => { console.log('database is open for once'); });
const User = mongoose.model('Users', {
  password: { type: String },
  email: { type: String },
  lname: { type: String },
  title: { type: [] },
  song: { type: [] }
});


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
let username = null

function insertsong(username) {

  User.findOneAndUpdate(
    { email: username },
    { $push: { song: 'Title.mp3' } },
    // { $push: { title: title } },
    function (error, success) {
      if (error) {
        console.log("");
      }
      // else {
      //     console.log("pppppppppppppppppp");
      // }
    });
  User.findOneAndUpdate(
    { email: username },
    // { $push: { song: uploadedFile.name } },
    { $push: { title: "This is title song" } },
    function (error, success) {
      if (error) {
        console.log("");
      }
      // else {
      //     console.log("pppppppppppppppppp");
      // }
    });
}


function check(res) {
  // console.log(username);
  if (username == null) {
    res.render(path.join(__dirname, '/statics/index.html'), { name: "" });
  }
}

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '/statics/index.html'), { name: "abcd" });
})

app.get('/login', (req, res) => {
  username = null;
  res.render(path.join(__dirname, '/statics/index.html'), { name: "" });
})

app.post('/s1', (req, res) => {

  var email = req.body.email;
  var pass = req.body.pass;



  User.find({ password: pass, email: email }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      if (docs.length >= 1) {
        username = email;
        // console.log(username)
        res.render(path.join(__dirname, '/statics/desktop.html'), { name: username })
      }
      else {
        // var mes=false

        res.render(path.join(__dirname, '/statics/index.html'), { name: "ss" });

      }
    }
  });
})


function rdata(req) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;
  var password = req.body.password;
  var song = [];

  var data = {
    'lname': lname,
    'fname': fname,
    'email': email,
    'song': [],
    'title': [],
    'password': password
  }
  db.collection('users').insertOne(data, (err, collection) => {
    if (err) throw err;
    console.log('successfully insert data');
  });
}

app.get('/register', (req, res) => {
  res.render(path.join(__dirname, '/statics/register.html'), { name: "" });

})

app.post('/registerr', (req, res) => {
  var email = req.body.email;
  User.find({ email: email }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    else {
      // console.log("Second function call : ", docs.length);
      if (docs.length >= 1) {
        res.render(path.join(__dirname, '/statics/register.html'), { name: 'aa' })
      }
      else {
        rdata(req)
        insertsong(email);
        res.render(path.join(__dirname, '/statics/index.html'), { name: '' })
      }
    }
  });
})

app.get('/desktop', (req, res) => {
  // console.log(username)
  res.render(path.join(__dirname, '/statics/desktop.html'), { name: username })
})
app.get('/motivation', (req, res) => {
  check(res)
  res.render(path.join(__dirname, '/statics/motivation.html'), { name: username })
})


app.get('/playlistb', (req, res) => {
  check(res)
  res.render(path.join(__dirname, '/statics/playlistb.html'), { name: username })
})
app.get('/singera', (req, res) => {
  check(res)

  res.render(path.join(__dirname, '/statics/singera.html'), { name: username })
})

// ----------------------------very importent code for fetch value of a key-------------------------------------//

// -----------------------------------------------------------------------------
const fileUpload = require('express-fileupload')
app.use(fileUpload())

app.get('/profile', (req, res) => {
  check(res)

  User.find({ email: username }, function (err, docs) {

    res.render(path.join(__dirname, '/statics/account.html'), { name: username, lname: Object.values(docs[0])[2].lname, fname: Object.values(docs[0])[2].fname, email: Object.values(docs[0])[2].email, song: Object.values(docs[0])[2].song });
  }).select();
})
mongoose.set('debug', true)
// ---------------------------upload-------------
app.get('/addsong', (req, res) => {
  check(res)
  res.render(path.join(__dirname, '/statics/add.html'), { name: username });
})

app.post('/profile1', (req, res) => {
  check(res)
  var title = req.body.title;
  const uploadedFile = req.files.file;
  console.log(uploadedFile);
  const uploadPath = __dirname + "/statics/" + uploadedFile.name;

  uploadedFile.mv(uploadPath, function (err) {
    if (err) {
      console.log(err);
    }
  });

  User.findOneAndUpdate(
    { email: username },
    { $push: { song: uploadedFile.name } },
    // { $push: { title: title } },
    function (error, success) {
      if (error) {
        console.log("");
      }
      else {
        console.log("successful");
      }
    });
  User.findOneAndUpdate(
    { email: username },
    // { $push: { song: uploadedFile.name } },
    { $push: { title: title } },
    function (error, success) {
      if (error) {
        console.log("");
      }
      else {
        console.log("successful");
      }
    });
  User.find({ email: username }, function (err, docs) {

    res.render(path.join(__dirname, '/statics/account.html'), { name: username, lname: Object.values(docs[0])[2].lname, fname: Object.values(docs[0])[2].fname, email: Object.values(docs[0])[2].email, song: Object.values(docs[0])[2].song });
  }).select();
})


// -------------===================================


app.get('/Latest', (req, res) => {
  check(res)

  User.find(function (err, docs) {
    console.log(docs)
    aa = Object.values(docs);
    res.render(path.join(__dirname, '/statics/allsong.html'), { name: aa, login: username })
  }).select();

})


app.get('/upcoming', (req, res) => {
  check(res)
  res.render(path.join(__dirname, '/statics/upcoming.html'), { name: username })

})

// -=--------------------------------==========================

app.post('/ab', (req, res) => {
  var email = req.body.email;
  var Comment = req.body.Comment;

  var data = {
    'Comment': Comment,
    'email': email,
  }
  db.collection('review data ').insertOne(data, (err, collection) => {
    if (err) throw err;
    console.log('successfull');
  });

  res.render(path.join(__dirname, '/statics/desktop.html'), { name: username })
})


app.get('/aboutus', (req, res) => {

  User.find({ lname: null }, function (err, docs) {
    nn = Object.values(docs);
    // console.log(nn);
    // res.render(path.join(__dirname, '/statics/aboutus.html'),{name:"",kk:nn});
    res.setHeader('Access-Control-Allow-Origin', '*').status(201).json({ kk: nn, status: 201 })

  }).select();
})

//  ================-------------usersong.html

app.get('/usersong', (req, res) => {
  check(res)

  User.find({ email: username }, function (err, docs) {
    aa = Object.values(docs);
    res.render(path.join(__dirname, '/statics/usersong.html'), { login: username, name: aa });
  }).select();
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


