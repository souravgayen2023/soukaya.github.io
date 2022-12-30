const express=require('express');
const app=express();
const hbs=require("hbs")
const Detail=require("./models/Detail");
const routes=require("./routes/main.js");
app.use('',routes);
const mongoose=require("mongoose")
const slider=require("./models/slider")

app.set("view engine","hbs");
app.set("views","views");

hbs.registerPartials('views/partials',()=>{
    console.log("nav bar page calling...");
})// for nav bar

app.use('/static',express.static('public'))
//db connection
mongoose.connect("mongodb://0.0.0.0:27017/website_tut",(err)=>{
if(!err)
{    
    console.log("DataBase Connected...")
    Detail.create ({
        brandName:"Soukaya Solution",
        brandIconUrl:"E:\sourav\NODEX\projects_on_node_js\FirstProject\public\images\skts.png",
        links:[
            {
                label:"Home",
                url:"/"
            },
            {
                label:"Services",
                url:"/service"
            },
            {
                label:"Galleries",
                url:"/gallery"
            },
            {
                label:"About Us",
                url:"/about"
            },
            {
                label:"Contact Us",
                url:"/contact"
            }
            
        ]
    },(err)=>{
        if(err)
            console.log("Unable To Insert Data");
        else
            console.log("Data Insert Successfully");
    })
}//end of if
else{
    console.log("Unable To Connect"+err)
}
})
slider.create([

    {
        title:"First Slide Title",
        subTitle:"First Slide Sub Title",
        imageUrl:"/static/images/pic1.jpg"
    },
    {
        title:"Second Slide Title",
        subTitle:"Second Slide Sub Title",
        imageUrl:"/static/images/pic2.jpg"
    }, {
        title:"Third Slide Title",
        subTitle:"Third Slide Sub Title",
        imageUrl:"/static/images/pic3.jpg"
    }, {
        title:"Fourth Slide Title",
        subTitle:"Fourth Slide Sub Title",
        imageUrl:"/static/images/pic4.jpg"
    }, {
        title:"Fifth Slide Title",
        subTitle:"Fifth Slide Sub Title",
        imageUrl:"/static/images/pic5.jpg"
    }, {
        title:"Sixth Slide Title",
        subTitle:"Sixth Slide Sub Title",
        imageUrl:"/static/images/pic6.jpg"
    },
])
app.listen(process.env.PORT | 5555,()=>{
    console.log("web server started....");
});