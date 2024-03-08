const mongodb = require("mongodb");

const DBHOST = process.env.DBHOST;
const DBNAME = process.env.DBNAME;

let collection = undefined;

async function connectTODB() {
  const client = await mongodb.MongoClient.connect(DBHOST);
  const db = client.db(DBNAME);
  quotations_collection = await db.collection("quotations");
  return quotations_collection;
}

async function selectAQuotation() {
  if (!collection) {
    collection = await connectTODB();
  }
  console.log(collection);
  const result = await collection.findOne({}); //select one random element from the database
  return result;
}
module.exports = { selectAQuotation };
