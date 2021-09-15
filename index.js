express=require("express")
mongoose=require("mongoose")
Qrcode=require('qrcode')
faker=require("faker")
bodyparser=require("body-parser")

app=express()
app.use(bodyparser())
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
app.get("/connectionQr",async (req,res)=>{
    res.status(200).render("authentication_page")
})
app.post('/verif',(req,res)=>{
    data=req.body.content
    var s="name:"
    const nom=data.slice(data.indexOf("name:")+s.length+2,data.indexOf("birthday:")-5)
    
    persone.find({name:`${nom}`},()=>{
        console.log("ok l'utilisteur est menbre")
    })
    res.status(200).send(req.body)
})
app.listen(3000,()=>{
    console.log("Bienvenue sur le serveur 3000")
})