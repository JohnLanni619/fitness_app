// MongoDB 
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://FoodLog:tCPECXmBGvf5FxHG@fooddb.19dyagd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// MongoDB
//"user": "FoodLog",
// "password": "tCPECXmBGvf5FxHG",
//Connection String: mongodb+srv://<username>:<password>@fitness-app.hgfkng9.mongodb.net/?retryWrites=true&w=majority