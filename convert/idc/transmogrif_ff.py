#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import re

folderIn = 'FF_in'
folderOut = 'FF_out'
files = os.listdir(folderIn)

rowPattern = re.compile('\<tr.*?\<\/tr\>')
cellPattern = re.compile('\<td.*?\<\/td\>')
paragraphPattern = re.compile('\<p.*?\<\/p\>')

for filename in files:
#    if filename != 'FF 26.html' and filename != 'FF 27.html' and filename != 'FF 28.html' and filename != 'FF 29.html' and filename != 'FF 30.html':
   # if filename.find("ultimate") == -1:
   #     continue

    print filename

    fOut = open(folderOut + '/' + filename.replace('.html', '.js'),'w')
    f = open(folderIn + '/' + filename, 'r')
    for line in f:
        rows = rowPattern.findall(line)
#        print m
        if(rows != []):            
            # First tr is heading
            for r in rows[1:]:
            	print r
                r = r.replace('<a name="_GoBack"/>', '')
                r = r.replace('<span class="T2">', '')                        
                r = r.replace('</span>', '')                        
                fOut.write('db.tiles_game.save(\n')
                fOut.write('    {\n')
                fOut.write('        chapter: ' + re.sub(r'FF (\d+).html', r'\1', filename) + ',\n')
                cells = cellPattern.findall(r)
                paragraphs = paragraphPattern.findall(cells[0])
                text = re.sub(r'\<p class="Standard"\>(.*)\</p\>', r'"\1"', paragraphs[0])
                fOut.write('        category: ' + text + ',\n')
                fOut.write('        matches: [\n')
                for c in cells[1:]:
                    paragraphs = paragraphPattern.findall(c)
                    paragraphCount = len(paragraphs)
                    for i in range(0,paragraphCount):
                        p = paragraphs[i]
                        text = re.sub(r'\<p class="Standard"\>(.*)\</p\>', r"'\1'", p)
                        fOut.write('            ' + text + (',' if i < (paragraphCount - 1) else '') + '\n')
                fOut.write('        ]\n')
                fOut.write('    });\n')
                fOut.write('\n')
                        
#        print line
		else:
			print "no rows"

    f.close()
    fOut.close()

"""
db.tiles_game.save(
    {
	chapter: 1,
	category: "Eukaryote organismer",
	matches: [
	    "Fugle",
	    "Hajer",
	    "Benfisk",
	    "Søstjerner",
	    "Edderkopper",
	    "Fluer",
	    "Krebsdyr",
	    "Pattedyr",
	    "Planter",
	    "Svampe",
	    "Protister",
	    "Dyr"
	]
    });
"""
