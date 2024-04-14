var fs = require('fs');
var os = require('os');

var user=os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt', 'Hello '+user.username+'!\n',()=>
{
    console.log('Greeting written to file');
});

// Search https://nodejs.org/api/ for more fs and os commands