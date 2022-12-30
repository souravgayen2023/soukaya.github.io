const express=require("express");
//const {route}=require('express/lib/application');
const routes=express.Router();
const Detail=require("../models/Detail")

routes.get("",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ad1ec15c926c9e3fe3954e"});
    //console.log(details);
    res.render("index",{details:details});
})
routes.get("/about",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ad1ec15c926c9e3fe3954e"});
    res.render("about",{details:details});
})
routes.get("/gallery",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ad1ec15c926c9e3fe3954e"});
    res.render("gallery",{details:details});
})
routes.get("/service",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ad1ec15c926c9e3fe3954e"});
    res.render("service",{details:details});
})
routes.get("/contact",async (req,res)=>{
    const details=await Detail.findOne({"_id":"63ad1ec15c926c9e3fe3954e"});
    res.render("contact",{details:details});
})
module.exports=routes;

