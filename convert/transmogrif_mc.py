#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import re

folderIn = '/Users/torben/projects/BookEnhancement/convert/MC_in'
folderOut = '/Users/torben/projects/BookEnhancement/convert/MC_out'
files = os.listdir(folderIn)

#questionPatternStr = '(?:\</ul\>)|(?:\</p\>)\<p class="Standard"\>(?:.*?\<p class="P1"\>)?(.*?)\</p\>\<ul\>'
#questionPatternStr = '(?:\<p.*?\>)(.*?)\</p\>\<ul\>'
#questionPatternStr = '\<p class="P1"\>(.*?)\</p\>\<ul\>'
questionPatternStr = '(?:\<p class="Standard"\>)?.*(?:(?:\<p class="P1"\>)|(?:\<p class="Standard"\>))(.*?)\</p\>\<ul\>'
answerPatternStr = '\<li\>\<p.*?\>\<span.*?\</span\>(\<span class="T."\>)?(.*?)(\</span\>)?\<span.*?/\>.*?\</li\>'
#rowPattern = re.compile('\<p class="Standard"\>.*?\<\/ul\>')
rowPattern = re.compile('.*?\</ul\>')
questionPattern = re.compile(questionPatternStr)
answerPattern = re.compile(answerPatternStr)

chapterPattern = re.compile('\<span class="T."\>KAPITEL (.*?)\</span\>')
chapterNoPattern = re.compile('\d+\.\d+(?:\.\d\d?)?')

"""
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved en eukaryot celle forstås",
	answers: [
	    "En celle med RNA som genetisk materiale",
	    "En celle uden cellekerne",
	    "En celle med flere cellekerner",
	    "En celle med cellekerne og celleorganeller"
	],
	type: "multiple_text",
	correct_answer: "3"
    });
"""

for filename in files:
    
    outStr = "";
    if filename != 'MC 26.html' and filename != 'MC 27.html' and filename != 'MC 28.html' and filename != 'MC 29.html' and filename != 'MC 30.html':
        continue
    print filename
    fOut = open(folderOut + '/' + filename.replace('.html', '.js'),'w')
    f = open(folderIn + '/' + filename, 'r')
    for line in f:
        line = line.replace('</li></ul><ul><li>', '</li><li>')
        rows = rowPattern.findall(line)
#        print m
        if(rows != []):            
            lineCounter = 0

            # First tr is heading
            for r in rows:
#                lineCounter += 1
#                if lineCounter > 10000:
#                    break
#                print r
                chaptersStr = chapterPattern.search(r)
                if(chaptersStr != None):
                    chapters = chapterNoPattern.findall(chaptersStr.group(1));

                r = r.replace('<a name="_GoBack"/>', '')

#                r = r.replace('<span class="T2">', '')           
#                r = r.replace('</span>', '')              
                outStr += 'db.questions.save(\n'
                outStr += '    {\n'

                if(chapters == None):
                    print 'ERROR - no chapters'
                    exit
                outStr += '        chapters: ' + str(chapters) + ',\n' 
                question = questionPattern.search(r)
#                re.sub(r'' + questionPatternStr, r'\1', question)
                answers = answerPattern.findall(r)

                if(question == None):
                    print r
                    exit
                outStr += "        text: '" + question.group(1) + "',\n"
                outStr += '        answers: [\n'

                correctIndex = -1
                answerCount = len(answers)
                for i in range(0, answerCount):
                    answer = answers[i]
                    if answer[0] != '':
                        correctIndex = i
                    outStr += "            '" + answer[1] + "'" + ("," if i < (answerCount - 1) else "") + "\n"

                outStr += '        ],\n'
                outStr += "        type: 'multiple_text',\n"
                outStr += "        correct_answer: '" + str(correctIndex) + "'\n"
                outStr += '    });\n\n'
#        print line

#    print outStr
    f.close()

    fOut.write(outStr)
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
