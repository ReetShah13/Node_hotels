// Call Function:

// function callback(){
//     console.log('Now adding is sucessfully completed')
// }
// const add = function(a,b,callback){
//     var result=a+b;
//     console.log('result is '+result);
//     callback();
// }
// add(3,4,callback);

var add = function(a,b,Reet)
{
    var result = a+b;
    console.log('Result is '+result);
    Reet();
}

// add(2,3,function(){
//     console.log('Now adding is sucessfully completed');
// });

add(2,3,()=>{console.log('Now adding is sucessfully completed')});