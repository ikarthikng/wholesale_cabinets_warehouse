const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Run the express server on port 3000 for local user and if deployed on a platform like heroku, user the port available in the process
const PORT = process.env.PORT || 3000
// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
// Setup partial views with handlebars
hbs.registerPartials(partialsPath)

// Setup to handle JSON body
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Render home page
app.get('', (req, res) => {
    let products = [
        {
            title: 'Deluxe White Shaker',
            productPath: 'deluxe_white_shaker',
            dimensions: '10\'x10\'',
            oldPrice: '$11,829',
            currentPrice: '$2,688.27',
            features: ['Overlay: Full Overlay', 'Smooth motion soft-close drawer guides', 'Soft close doors'],
            moreDetails: ['Drawer Front: 3/4" solid wood frame; 1/2" center recessed panel, 5-piece construction. Box: 5/8" solid wood with dovetails', 'Shelf : 3/4" plywood with wood veneer on both sides', 'Side panels: 1/2" plywood with dovetail joinery. Top & bottom: 1/2" plywood', 'Back panel: dovetail joinery; 1/2" plywood with 1 1/2" hanging rails']
        },
        {
            title: 'Deluxe Grey Shaker',
            productPath: 'deluxe_grey_shaker',
            dimensions: '10\'x10\'',
            oldPrice: '$11,829',
            currentPrice: '$2,688.27',
            features: ['Overlay: Full Overlay', 'Smooth motion soft-close drawer guides', 'Soft close doors'],
            moreDetails: ['Drawer Front: 3/4" solid wood frame; 1/2" center recessed panel, 5-piece construction. Box: 5/8" solid wood with dovetails', 'Shelf : 3/4" plywood with wood veneer on both sides', 'Side panels: 1/2" plywood with dovetail joinery. Top & bottom: 1/2" plywood', 'Back panel: dovetail joinery; 1/2" plywood with 1 1/2" hanging rails']
        },
        {
            title: 'Deluxe Grey Shaker',
            productPath: 'deluxe_espresso_shaker',
            dimensions: '10\'x10\'',
            oldPrice: '$11,829',
            currentPrice: '$2,688.27',
            features: ['Overlay: Full Overlay', 'Smooth motion soft-close drawer guides', 'Soft close doors'],
            moreDetails: ['Drawer Front: 3/4" solid wood frame; 1/2" center recessed panel, 5-piece construction. Box: 5/8" solid wood with dovetails', 'Shelf : 3/4" plywood with wood veneer on both sides', 'Side panels: 1/2" plywood with dovetail joinery. Top & bottom: 1/2" plywood', 'Back panel: dovetail joinery; 1/2" plywood with 1 1/2" hanging rails']
        }
    ]
    res.render('index', {products: products})
})

// Render login/sign up page
app.get('/login', (req, res) => {
    res.render('login')
})

// Render 404 page not found, if url is not available
app.get('*', (req, res) => {
    res.render('404')
})

// Start the express server
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})