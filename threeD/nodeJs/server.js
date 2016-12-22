/**
 * Created by hanmingyang on 16/11/10.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring")

var server = http.createServer(handle).listen(3000);

function handle(req,res){
    var filePath = "";
    if(req.url == "/"){
        filePath = "./public/html/index.html"
        //文件是否存在
        fs.exists(filePath,function(exists){
            if(exists){
                fs.readFile(filePath,function(err,data){
                    if(err){
                        return;
                    }
                    res.end(data);
                })
            }else{
                send404(res);
            }
        })
    }else if(req.url.indexOf("/form") != -1 ){
        if(req.method == "GET"){
            var parme = url.parse(req.url,true);
            var info = parme.query;
            var username = info.username;
            var password = info.password;
            var email = info.email;
            var tell = info.tell;

            fs.readFile("./tsconfig.json","utf-8",function(err,data){
                if(err){
                    return;
                }
                var data = JSON.parse(data);
                var users = data.users;
                for(var i = 0;i<users.length;i++){
                    if(users[i].username  == username && users[i].password == password && users[i].email == email && users[i].tell == tell){
                        //有此账户
                        filePath = "./public/html/login.html"
                        break;
                    }else{
                        filePath = "./public/html/reg.html"
                    }
                }
                fs.exists(filePath,function(exists){
                    if(exists){
                        fs.readFile(filePath,function(err,data){
                            if(err){
                                return;
                            }
                            res.end(data);
                        })
                    }else{
                        send404(res);
                    }
                })

            })
        }else if(req.method == "POST"){

            var postDate = "";

            req.on("data",function(chunk){
                postDate += chunk;
            })
            req.on("end",function(){

                var data = querystring.parse(postDate);
                console.log(data)
                var obj = {};
                obj.username = data.username;
                obj.password = data.password;
                obj.email = data.email;
                obj.tell = data.tell;
                fs.readFile("./tsconfig.json","utf-8",function(err,data){

                    var data = JSON.parse(data);
                    data.users.push(obj)
                    fs.writeFile("./tsconfig.json",JSON.stringify(data),function(){

                    })
                })
            })

            fs.exists(filePath,function(exists){
                if(exists){
                    fs.readFile(filePath,function(err,data){
                        if(err){
                            return;
                        }
                        res.end(data);
                    })
                }else{
                    send404(res);
                }
            })
        }
    }else{
        filePath = "./public" + req.url;
        fs.exists(filePath,function(exists){
            if(exists){
                fs.readFile(filePath,function(err,data){
                    if(err){
                        return;
                    }
                    res.end(data);
                })
            }else{
                send404(res);
            }
        })
    }
}

function send404(res){
    fs.readFile("./public/html/404.html",function(err,data){
        if(err){
            return;
        }
        res.end(data);
    })
}
