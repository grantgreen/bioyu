var fs = require('fs');

/*
Memory_A_easy
Memory_A_hard
Memory_BC_easy
Memory_BC_hard
*/

var a_23_standard = { datafolder: "A_23_easy", type: "a", outfolder: "standard" };
var a_23_special = { datafolder: "A_23_hard", type: "a", outfolder: "special" };

var a_standard = { datafolder: "Memory_A_easy", type: "a", outfolder: "standard" };
var a_special = { datafolder: "Memory_A_hard", type: "a", outfolder: "special" };
var bc_standard = { datafolder: "Memory_BC_easy", type: "bc", outfolder: "standard" };
var bc_special = { datafolder: "Memory_BC_hard", type: "bc", outfolder: "special" };

var transformFiles = function (options) {
    fs.readdir(options.datafolder, function (err, files) {
        files.forEach(function (file) {
            if (!isNaN(Number(file))) return;
            console.log(file);
            var newfilename = 'fig_' + file.replace(/ ([cCbB])(-\d)?/g, "$2").replace(" og ", "+").replace("+ ", "+").split(' ')[1].replace(/\./g, '_').replace('_svg', '.svg').replace(/\+/g, '-');
            var chapter = newfilename.match(/fig_(\d+)_.*/)[1];
            console.log(chapter);
            fs.mkdir(options.type, function (err, out) {
                fs.mkdir(options.type + "/" + chapter, function (err, out) {
                    fs.mkdir(options.type + "/" + chapter + '/' + options.outfolder, function (err, out) {
               //         console.log(err);
                        fs.rename(options.datafolder + "/" + file, options.type + '/' + chapter + '/' + options.outfolder + '/' + newfilename, function () {
                        });
                    });
                });
            });
            console.log(options.type + '/' + chapter + '/' + options.outfolder + '/' + newfilename);
        });
    })
}

transformFiles(a_23_standard);
transformFiles(a_23_special);
// transformFiles(a_standard);
// transformFiles(a_special);
// transformFiles(bc_standard);
// transformFiles(bc_special);