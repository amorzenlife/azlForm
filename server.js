// SERVER TO PULL-IN FORM INFORMATION.

//Declaration
const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true })); // Use to get FORM DATA

// app.set('view engine', 'ejs') // Not required but can be added to support EJS

app.use(express.static('views'));   // Serves files base on directory (View Folder)


const processRouter = require('./routes/process');  // Route Logic in routes folder
app.use('/process', processRouter);



app.listen(3000, 'localhost', ()=> {    // localhost not required but i prefer explicit 
    console.log('Server Running!');
});


app.listen(3000)










// app.get('/', (req, res) => {    // Define Home otherwise View index.<fileExtension> will show be default
//   res.sendFile(__dirname + '/views/index.html');
//   res.send('Hello World');
// });


// app.get('/', (req, res) => {
//     res.render('index')
// })

// const userRouter = require('./routes/users')
// // const postRouter = require('./routes/posts')
// const processRouter = require('./routes/process')

// app.use('/users', userRouter)
// // app.use('/posts', postRouter)
// app.use('/process', processRouter)

// function logger(req, res, next) {
//     console.log(req.originalUrl);
//     next()
// }




