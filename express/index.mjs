import express from "express";

const app = express();

// Custom Middleware
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

const authMiddleware = (req, res, next) => {
  if (req.query.password === "scaler") {
    next();
  } else {
    res.status(401).send("Unauthorised Access");
  }
};

const fooMiddleware = (req, res, next) => {
  console.log("FOO MIDDLEWARE");
  next();
};

const barMiddleware = (req, res, next) => {
  console.log("BAR MIDDLEWARE");
  next();
};

// Define a route
app.get('/', (req, res) => {
  res.send("Home Route");
});

app.get('/about', authMiddleware, (req, res) => {
  res.status(200).send("About Route");
});

app.get('/contact', (req, res) => {
  res.send("Contact Route");
});

app.get('/contact/phone',fooMiddleware, barMiddleware, (req, res) => {
  res.send("Contact Route - Phone");
});

app.get('/contact/email', (foo, bar) => {
  console.log(foo.headers.cookie);
  bar.send("Contact Route - Email");
});

app.get('*', (req, res) => {
  res.status(404).send("Path Not Found!");
});

app.post("/:id", (req, res) => {
  console.log(req.body);
  res.send(`POST METHOD: ${JSON.stringify(req.params)}`);
});
app.delete("/", (req, res) => {
  res.send("DELETE METHOD");
});
app.patch("/", (req, res) => {
  res.send("PATCH METHOD");
});
app.put("/", (req, res) => {
  res.send("PUT METHOD");
});

app.listen(8080, () => {
  console.log("Hello World!");
});