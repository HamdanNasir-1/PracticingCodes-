const fs = require('node:fs');
fs.writeFile("hamdan.txt", "hamdan nasir is trying to be the good one", function(err){
    if(err) console.log(err);
    else console.log("Done")
});