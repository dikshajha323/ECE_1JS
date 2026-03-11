console.log("hello world");
var num=10;
    console.log(num);
    console.log(tyoeof(num));
    num=false;
    
    const sym1=symbol(4)
    console.log(sym1);
    const sym2= symbol(4);
    console.log(sym2);
    if(sym1==sym2){
        console.log("true");
    }
    else{
        console.log("false");
    }
    var a=10;
    var b=20;
    var linebreak=a+b;
    console.log(linebreak);
   
     var a=10;
    var b=20;
    var linebreak=a-b;
    console.log(linebreak);
     var a=10;
    var b=20;
    var linebreak=a*b;
    console.log(linebreak);
 var a=10;
    var b=20;
    var linebreak=a/b;
    console.log(linebreak);
let i;
for(i=0;i<5;i++)
{
    console.logi;
}
var count;
document.write("starting loop"+ "<br/>");
for(count=0;count<10;count++){
    document.write("current count:"+count);
    document.write("<br/>")
}
document.write("loop stopped!");
const person ={
    fname: "diksha",
    lname: "jha",

}
for(let x in person){
    console.log("preson details" + x + ":" + perrson[x])
}
var agae =20;
if(age>18){
    document.write("<b>you are eligible to cast the vote</b>")
}
let age =20;
if(age>18){
    console.log("you are an adult");
}
else{
    console.log("you are a minor");
}
var grade="A";
document.write("Entering switch block<br/>");
switch(grade){
    case "A":
        document.write("Excellent!<br/>");
        break;  
    case "B":
        document.write("Good!<br/>");
        break;                                                                  
    case "C":
        document.write("Passed!<br/>");
        break;
    case "D":
        document.write("Better luck next time!<br/>");
        break;
    default:
        document.write("Invalid grade!<br/>");
}
document.write("Exiting switch block!");

var grade="A";
document.write("Entering switch block<br/>");
switch(grade){
    case "A":
        document.write("Excellent!<br/>");
        break;  
    case "B":
        document.write("Good!<br/>");
        break;                                                                  
    case "C":
        document.write("Passed!<br/>");
        break;
    case "D":
        document.write("Better luck next time!<br/>");
        break;
    default:
        document.write("Invalid grade!<br/>");
}
document.write("Exiting switch block!");

function myFunction(){
    alert("hello world");
}
function sayHello(name, age){
    document.write(name + "is" + age + "years old");
}
var add2 = (a,b){
    console.log(a+b);
};
add2(10,20);