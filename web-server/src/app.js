const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

console.log(__dirname);
console.log(path.join(__dirname, "../public"));

const app = express(); // Create Express app

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Pages to serve
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Sherief Farid",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Sherief Farid",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Sherief Farid",
    content: "This is the help content",
  });
});

//Weather Page
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address.",
    });
  } else {
    geocode(req.query.address,(error, { latitude, longitude, location } = {} ) => {
        if (error) {
          return res.send({ error });
        }

        forcast(longitude, latitude, (error, forcastData) => {
          if (error) {
            return res.send({ error });
          }

          res.send({
            address: req.query.address,
            forcast: forcastData,
            location
          });
        });
      }
    );
  }
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "Help",
    name: "Sherief Farid",
    errorMessage: "Help Article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Sherief Farid",
    errorMessage: "Page not found",
  });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server is up on port 3000");
});

// Webserver root (ex, app.com ) // replaced by publicDirecotryPath and express.static
// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

//Weather Page
// app.get('/weather' ,(req,res) => {
//     res.send({
//         forcast: 'This will be the forcast',
//         location: 'This will be the location'
//     })
// })
