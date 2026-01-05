const fs = require('node:fs');
fs.appendFile("hamdan.txt", " helllo", function(err){
    if(err) console.log(err);
    else console.log("done");
})
