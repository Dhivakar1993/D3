
let obj1={name:"Dhivakar",age:30}
let obj2={age:30,name:"Dhivakar"}
console.log(obj1,obj2)


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