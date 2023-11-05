
let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}
let json1 = JSON.stringify(obj1)
let json2 = JSON.stringify(obj2)
if (json1===json2)
{
    console.log("Both are Equal")
}
else
{
    console.log("both are not equal");
}


var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function()
{
    var data = request.response;
    console.log(data);
    var result = JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {console.log(result[i].flag)
    }
}

var request1 = new XMLHttpRequest();
request1.open("Get","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload = function()
{
    var data1 = request1.response;
    console.log(data1);
    var result1 = JSON.parse(data1);
    for(var a=0;a<result1.length;a++)
    {
        console.log(result1[a].name);
        console.log(result1[a].region);
        console.log(result1[a].subregion);
        console.log(result1[a].population);
        
    }
}