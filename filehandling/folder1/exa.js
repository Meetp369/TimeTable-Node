const fs=require('fs');
function readexa(){
    var x=fs.readFileSync('./filehandling/user.json','utf-8');
    var y = JSON.parse(x)
    console.log(y[0].name)
}
function writeexa(){
    var y="node js"
    fs.writeFileSync('./filehandling/folder1/input1.txt',y);
}
module.exports={readexa,writeexa}