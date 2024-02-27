const express=require("express")
const mongoose=require("mongoose")
const path =require("path")
const app=express()
const upload=require("./script/UploadPortfolio")
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
res.render('portfolio')
})
app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({message:"portfolio inserted succesfully"})
})
 app.listen(5000)
