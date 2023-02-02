const fs =require("fs");

function readDataFromFile(){
    var x=fs.readFileSync('filehandling/input.txt','utf-8');
    // var x=fs.readFileSync('./filehandling/user.json','utf-8');
    // console.log(x)
    // var y=JSON.parse(x)
    console.log(x)
}
function writefile1(){
    var d2 = [
        {
          name: "sachin",
          age: 23,
        },
        {
          name: "raj",
          age: 23,
        },
        {
          name: "mehta",
          age: 23,
        }
      ]
    fs.writeFileSync("./filehandling/user3.txt",JSON.stringify(d2));
}
function createfolder(){
    if(fs.existsSync('./filehandling/folder1')){
        console.log("already extst")
    }else{
        fs.mkdirSync('./filehandling/folder1');
    }
}

function removeFile(){
  if(fs.existsSync('./filehandling/user3.txt')){
    fs.unlinkSync('./filehandling/user3.txt')
  }
}

function rename(){
  if(fs.existsSync('./filehandling/user2.json')){
    fs.renameSync('./filehandling/user2.json','filehandling/users2.json')
  }
}

function changelocation(){
  if(fs.existsSync('./filehandling/users2.json')){
    fs.copyFileSync('./filehandling/users2.json','./filehandling/folder1/user2.json')
  }
}
module.exports={readDataFromFile,createfolder,writefile1,removeFile,rename,changelocation}