//入口文件
var express = require("express");
var app = express();

//配置模版引擎
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("index",{})
});

//配置静态资源文件
app.use(express.static("public"));
//监听
app.listen(8800);
