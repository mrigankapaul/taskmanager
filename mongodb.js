// // CRUD operations
// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require("mongodb");
// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "taskmanager";

// const id = new ObjectID();
// // console.log(id.id.length)
// // console.log(id.toHexString().length)
// // console.log(id.getTimestamp())

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to DB");
//     }

//     const db = client.db(databaseName);

//     // delete documents

//     // db.collection('users').deleteMany({ age: 28}).then((result) => {
//     //   console.log(result)
//     // }).catch((error) => {
//     //   console.log(error)
//     // })


//     db.collection('tasks').deleteOne({ description: "This is a first task"}).then((result) => {
//       console.log(result)
//     }).catch((error) => {
//       console.log(error)
//     })
//     //update the documents

//     // db.collection("users")
//     //   .updateOne(
//     //     {
//     //       _id: new ObjectID("5fbbaebeaab304fe31b8ca81"),
//     //     },
//     //     {
//     //       $set: {
//     //         name: "Sriparna",
//     //       },
//     //     }
//     //   )
//     //   .then((result) => {
//     //     console.log(result);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });

//       // db.collection("users")
//       // .updateOne(
//       //   {
//       //     _id: new ObjectID("5fbbaebeaab304fe31b8ca81"),
//       //   },
//       //   {
//       //     $inc: {
//       //       age: 1,
//       //     },
//       //   }
//       // )
//       // .then((result) => {
//       //   console.log(result);
//       // })
//       // .catch((error) => {
//       //   console.log(error);
//       // });

//     //   db.collection('tasks').updateMany({
//     //     completed: false
//     // }, {
//     //     $set: {
//     //         completed: true
//     //     }
//     // }).then((result) => {
//     //     console.log(result.modifiedCount)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })



//     // find documents
//     // db.collection('users').findOne({_id: new ObjectID("5fbbbb97f1a43fff1ac33aef")}, (error, user) => {
//     //         if(error){
//     //             return console.log('Unable to fetch')
//     //         }

//     //         console.log(user)
//     // })

//     // db.collection('users').find({age: 27}).toArray((error, users) => {
//     //     console.log(users)
//     // })

//     // db.collection('users').find({age: 27}).count((error, count) => {
//     //     console.log(count)
//     // })

//     // db.collection('tasks').findOne({_id: new ObjectID("5fbbb19fbbff5cfe6b3177c8")}, (error, task) => {
//     //     if(error){
//     //         return console.log('Unable to fetch')
//     //     }

//     //     console.log(task)
//     // })

//     // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
//     //     if(error){
//     //         return console.log('Unable to fetch')
//     //     }

//     //     console.log(tasks)
//     // })
//     // creating documents
//     // db.collection('users').insertOne({
//     //     name: 'Vikram',
//     //     age: 26
//     // }, (error, result) => {
//     //     if(error){
//     //         return console.log('Unable to insert the user')
//     //     }

//     //     console.log(result.ops)
//     // })

//     // db.collection("users").insertMany(
//     //   [
//     //     {
//     //       name: "Jen",
//     //       age: 28,
//     //     },
//     //     {
//     //       name: "Gunther",
//     //       age: 27,
//     //     },
//     //   ],
//     //   (error, result) => {
//     //     if (error) {
//     //       return console.log("Unable to insert documents");
//     //     }

//     //     console.log(result.ops);
//     //   }
//     // );

//     // db.collection("tasks").insertMany(
//     //   [
//     //     {
//     //       description: "This is a first task",
//     //       completed: true,
//     //     },
//     //     {
//     //       description: "This is a second task",
//     //       completed: true,
//     //     },
//     //     {
//     //       description: "This is a third task",
//     //       completed: false,
//     //     },
//     //   ],
//     //   (error, result) => {
//     //     if (error) {
//     //       return console.log("Unable to insert documents");
//     //     }

//     //     console.log(result.ops);
//     //   }
//     // );
//   }
// );
