// TEST PAGE YOUTUBE NOTES


// Cleaning up How the routes are going to look **This can work on app/server variable or users/router variable

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(req.query)
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get User With ID ${req.params.id}`)
})
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
})
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
})

// Array of users:
const users = [{ name: "Kyle" }, { name: "Sally" }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router


// Params - are functions on our router - .param runs any time it finds a param that matches the name you pass in.
// .param - is a type of middleware.
// Middleware inside of express is stuff that runs between the request being sent to your server and the actual response being returned to the user.
// Middleware (simplified) - is code that runs between the start and end of the request. 


// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`)
// })












// // *You can nest the router inside a parent route.

// const express = require('express')
// const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('User List')
// })

// router.get('/new', (req, res) => {
//     res.send('User New Form')
// })

// module.exports = router



// Router has functions such as .get, .post, etc.


// router.get('/users', (req, res) => {
//     res.send('User List')
// })

// router.get('/users/new', (req, res) => {
//     res.send('User New Form')
// })