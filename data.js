mongoose=require("mongoose")
faker=require("faker")
mongoose.connect("mongodb://localhost:27017/test")
        .then(
            console.log(`connect to mongodb`)
        )
const person=mongoose.model('persone',new mongoose.Schema({name:String, birthday:Date}))

for (let i = 0; i < 100; i++) {
    let etudiant=new person({name:faker.fake("{{name.lastName}}"),birthday:faker.fake("{{date.past(80)}}")})
    person.collection.insertOne(etudiant)
            .then(
                console.log("Persone enregistre")
            )
}
