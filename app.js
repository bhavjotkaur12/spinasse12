const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const $ = require("jquery");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home");
});
app.get("/american", function(req,res){
  res.render("american");
});
app.get("/British", function(req,res){
  res.render("british");
});
app.get("/chinese", function(req,res){
  res.render("chinese");
});
app.get("/french", function(req,res){
  res.render("french");
});
app.get("/indian", function(req,res){
  res.render("indian");
});
app.get("/italian", function(req,res){
  res.render("italian");
});
app.get("/mexican", function(req,res){
  res.render("mexican");
});
app.get("/thai", function(req,res){
  res.render("thai");
});
app.get("/vietnamese", function(req,res){
  res.render("vietnamese");
});
app.get("/menu", function(req,res){
  res.render("menu");
});
app.get("/reviews", function(req,res){
  res.render("reviews");
});
app.get("/gallery", function(req,res){
  res.render("gallery");
});
app.get("/About", function(req,res){
  res.render("about");
});
app.get("/contact", function(req,res){
  res.render("contact");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
