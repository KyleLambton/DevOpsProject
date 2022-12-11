const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

const items = require('./Kayaks.json');

//Insert Batch
MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  var dbo = db.db("ProductCatalog");
  dbo.collection("products").insertMany(items, (err, res) => {
    if (err) throw err;
    console.log("Database Created and Populated");
    db.close();
  });
});