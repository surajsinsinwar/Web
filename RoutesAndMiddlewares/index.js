const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

// Init middleware
//  app.use(logger);

// BOdy Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Instead of this we can set static folder

app.use(express.static(path.join(__dirname, "public")));

//Members API run
app.use("/api/members", require("./routes/api/members"));

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});
