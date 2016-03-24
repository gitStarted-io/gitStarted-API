var async = require('async');
var path = require('path');
var fs = require('fs');

module.exports = {
    importFile: function(filePath callback) {
        fs.readFile(__dirname + filePath, function(err, data) {
            console.log(__dirname + filePath);
            if(!err) {
                console.log(data.toString());
            } else{
                console.error(err);
            }
        });
    }
}