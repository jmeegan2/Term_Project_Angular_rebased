Uses: http://localhost:4200

To run and send data to MongoDB

For teacher you will have to change the lines in server-side/api.js to test with your database connection, not sure if you'll have to do this part but just in case you'd change these lines 
to your corresponding values.

{
8:  const dbName = "termProject"
9:  const collectionName = "requestInfoForm"
11: // MongoDB connection
10: const uri = "mongodb+srv://jmeegan8:FoxHound422$@cluster0.qq3vzdu.mongodb.net/";
}



Type these command into terminal while using visual studio

* cd into server-side
* node api.js

* cd into angular project
* ng serve 
