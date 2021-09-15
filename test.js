mongoose=require("mongoose")
express=require("express")

app=express()


mongoose.connect('mongodb://localhost:27017/test')
        .then(
            console.log("connectez\n")
        )
const persone=mongoose.model('persones',{name:String,birthday:Date})

app.get("/",async (req,res)=>{
    try{
        const data=await persone.find({})
        res.status(200).send(data[0])
    }catch{
        res.status(500).send("Error")
    }
})

app.listen(5000,()=>{
    console.log("connectez au port 5000")
})