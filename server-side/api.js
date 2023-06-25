const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = 3001;
const dbName = "termProject"
const collectionName = "requestInfoForm"
// MongoDB connection
const uri = "mongodb+srv://jmeegan8:FoxHound422$@cluster0.qq3vzdu.mongodb.net/";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jmeegan8@gmail.com',
    pass: 'qcglnykigpipllbp',
  },
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB cluster when the server starts
(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB cluster');
  } catch (error) {
    console.log('Error connecting to MongoDB cluster:', error);
  }
})();

// Routes
app.get('/', function (req, res) {
  res.send('Hello from my API server!');
});

app.get('/api/requestInfoForm', async function (req, res) {
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  try {
    const requestInfoForms = await collection.find({}).toArray();
    return res.json(requestInfoForms).status(200);
  } catch (error) {
    console.log('Error fetching requestInfoForms:', error);
    return res.status(500).json({ error: 'Sorry, an error occurred' });
  }
});

app.post('/api/requestInfoForm', async function (req, res) {
  try {
    const email = req.body.email; // Extract the email address from the request body

    const mailOptions = {
      from: 'jmeegan8@gmail.com',
      to: email, // Use the extracted email address
      subject: "Confirmation Email",
      text: "Thank you for your interest in our workshops! A member of our team will reach out soon." 
    };

    await transporter.sendMail(mailOptions);

    const db = client.db(dbName); // specify the DB's name
    const collection = db.collection(collectionName);

    await collection.insertOne(req.body);

    res.json({ result: 'Form submitted and email sent successfully' }).status(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Sorry, an error occurred' });
  }
});


app.delete('/api/requestInfoForm/:id', async (req, res) => {
  try {
    await client.connect(); // connect to the MongoDB cluster
    const db = client.db(dbName); // specify the DB's name
    const collection = db.collection(collectionName); 

    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    if(result.deletedCount === 0) {
      return res.status(404).json({ error: 'Request not found' });
    }

    res.json({message: 'Request deleted successfully'}).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Sorry an error occurred' });
  }
});

// API route to update a requestInfoForm by ID
app.put('/api/requestInfoForm/:id', async function (req, res) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const requestInfoFormId = req.params.id;
    const updateRequestInfoForm = req.body;

    const result = await collection.updateOne({ _id: new ObjectId(requestInfoFormId) }, { $set: updateRequestInfoForm });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'RequestInfoForm not found' });
    }

    res.json({ message: 'RequestInfoForm updated successfully' }).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Sorry, an error occurred' });
  }
});

// Start the server
app.listen(port, function () {
  console.log(`Server listening on port http://localhost:${port}`);
});
