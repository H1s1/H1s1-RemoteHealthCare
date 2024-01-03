const { MongoClient } = require("mongodb");

const username = encodeURIComponent("himanshusoni221000");
const password = encodeURIComponent("Test1234");
const cluster = "cluster0.t2on10k.mongodb.net";
const authSource = "admin";
const authMechanism = "SCRAM";

const uri = `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}&ssl=true&tlsInsecure=true`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true
});


async function run() {
  try {
    await client.connect();

    const database = client.db("H1s1");
    const patients = database.collection("patients");

    const cursor = patients.find();

    await cursor.forEach((doc) => console.dir(doc));
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
