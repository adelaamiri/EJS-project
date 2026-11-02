const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as template engine
app.set("view engine", "ejs");

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Home page route
app.get("/", (req, res) => {
  res.render("index");
});

// About page route
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact page route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Handle contact form submission
app.post("/contact", (req, res) => {
  const { fullName, email, message } = req.body;

  console.log("New Contact Message:");
  console.log("Name:", fullName);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send(`
    <h1>Thank You, ${fullName}!</h1>
    <p>Your message has been received successfully.</p>
    <a href="/contact">Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
