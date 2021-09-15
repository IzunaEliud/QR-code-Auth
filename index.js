express=require("express")
mongoose=require("mongoose")
Qrcode=require('qrcode')
faker=require("faker")

app=express()
mongoose.connect('mongodb://localhost:27017/test')
        .then(
            console.log("connectez\n")
        )
const persone=mongoose.model('persones',{name:String,birthday:Date})


app.set('view engine','ejs')

app.get("/",async (req,res)=>{
    try{    
        const data=await persone.find({})
        var tbIm=[]
        for (let i = 0; i < data.length; i++) {
            tbIm.push(await Qrcode.toDataURL(`${data[i]}`))
        }
        res.status(200).render("home",{data:tbIm})
    }catch{
        console.log("ereur")
    }       
})

app.listen(3000,()=>{
    console.log("Bienvenue sur le serveur 3000")
})