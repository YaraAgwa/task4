const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "pro-2"
mongoClient.connect(connectionUrl, (error, res) => {
    if (error) {
        console.log("error")
    }
    console.log("all prefect")
    const db = res.db(dbname)
    db.collection('users').insertOne({
        name: 'yara',
        age: 21
    }, (error, data) => {
        if (error) {
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertOne({
        name: 'sara',
        age: 25
    }, (error, data) => {
        if (error) {
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    })

    db.collection('users').insertMany([{
        name: "aya",
        age: 27
    },
    {
        name: "esraa",
        age: 27
    }
        ,
    {
        name: "ayman",
        age: 27
    }
        ,
    {
        name: "mohamed",
        age: 27
    }
        ,
    {
        name: "omnia",
        age: 15
    }
        ,
    {
        name: "malak",
        age: 12
    }
        ,
    {
        name: "ahmed",
        age: 27
    }
        ,
    {
        name: "nora",
        age: 20
    }
        ,
    {
        name: "yasmin",
        age: 30
    }
        ,
    {
        name: "omnia",
        age: 50
    }
    ], (error, data) => {
        if (error) {
            console.log("unable to insert data")
        }
        console.log(data.insertedCount)
    })




    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            return console.log("error")
        }
        console.log(users)
    })

    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
        if (error) {
            return console.log("error")
        }
        console.log(users)
    })


    //-----------------------------------------------------------------------
    db.collection('users').updateOne({ _id: mongodb.ObjectId("66020a51656a3098ef945bc0") }, {
        $set: { name: "eman" },
        $inc: { age: 4 }
    })
        .then((data) => { console.log(data.modifiedCount) })
        .catch((error) => { console.log(error) })


    db.collection('users').updateOne({ _id: mongodb.ObjectId("66020a51656a3098ef945bc1") }, {
        $set: { name: "shimaa" },
        $inc: { age: 4 }
    })
        .then((data) => { console.log(data.modifiedCount) })
        .catch((error) => { console.log(error) })


    db.collection('users').updateOne({ _id: mongodb.ObjectId("66020a51656a3098ef945bc2") }, {
        $set: { name: "rana" },
        $inc: { age: 4 }
    })
        .then((data) => { console.log(data.modifiedCount) })
        .catch((error) => { console.log(error) })


    db.collection('users').updateOne({ _id: mongodb.ObjectId("66020a51656a3098ef945bc3") }, {
        $set: { name: "omar" },
        $inc: { age: 4 }
    })
        .then((data) => { console.log(data.modifiedCount) })
        .catch((error) => { console.log(error) })



    db.collection('users').updateMany({}, {
        $inc: { age: 10 }
    })
        .then((data) => { console.log(data.modifiedCount) })
        .catch((error) => { console.log(error) })




    db.collection('users').deleteMany({ age: 41 })
        .then((data) => { console.log(data.deletedCount) })
        .catch((error) => { console.log(error) })



})