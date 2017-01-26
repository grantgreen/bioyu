#!/usr/bin/python
# -*- coding: utf-8 -*-

import os
import re

folderIn = '/Users/torben/develop/yubio/convert/c/MC_in'
folderOut = '/Users/torben/develop/yubio/convert/c/MC_out'
files = os.listdir(folderIn)

print(files)

#questionPatternStr = '(?:\</ul\>)|(?:\</p\>)\<p class="Standard"\>(?:.*?\<p class="P1"\>)?(.*?)\</p\>\<ul\>'
#questionPatternStr = '(?:\<p.*?\>)(.*?)\</p\>\<ul\>'
#questionPatternStr = '\<p class="P1"\>(.*?)\</p\>\<ul\>'
questionPatternStr = '(?:\<p class="Standard"\>)?.*(?:(?:\<p class="P1"\>)|(?:\<p class="Standard"\>))(.*?)\</p\>\<ul\>'
answerPatternStr = '\<li\>\<p.*?\>\<span.*?\</span\>(\<span class="T."\>)?(.*?)(\</span\>)?\<span.*?/\>.*?\</li\>'
#rowPattern = re.compile('\<p class="Standard"\>.*?\<\/ul\>')
rowPattern = re.compile('.*?\</ul\>')
questionPattern = re.compile(questionPatternStr)
answerPattern = re.compile(answerPatternStr)

#chapterPattern = re.compile('\<span class="T."\>KAPITEL (.*?)\</span\>')
chapterPattern = re.compile('\<b\>\d+\.\d+(?:\.\d\d?)?\</b\>')
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

import html
from html.parser import HTMLParser
from html.entities import name2codepoint

class MyHTMLParser(HTMLParser):

    def __init__(self):
        self.inside_p = False
        self.chapter = False
        self.inside_correct_answer = False
        self.outStr = ""
        self.answerIndex = 0
        self.correctIndex = 0
        self.currentChapter = -1
        HTMLParser.__init__(self)

    def handle_starttag(self, tag, attrs):
        if tag == "p":
            self.inside_p = True

        if self.inside_p and tag == "b":
            self.chapter = True

        if self.inside_p and tag == "font":
            if len(attrs) == 1 and attrs[0][1] == "#ff0000":
                self.correctIndex = self.answerIndex
                self.inside_correct_answer = True
    def handle_endtag(self, tag):
        if self.inside_p and tag == "b":
            self.chapter = False

        if tag == "p":
            self.inside_p = False

        if self.inside_correct_answer and tag == "font":
            self.inside_correct_answer = False

    def handle_data(self, rawdata):
        data = rawdata.replace("\n", " ")
        data = data.replace("\t", "")
        data = data.strip();
        if data == "":
            return
        if self.chapter:
            self.currentChapter = data
        elif self.inside_p:
            if data.endswith("?"):
                self.outStr += "db.questions.save(\n"
                self.outStr += "    {\n"        
                self.outStr += "        chapters: " + self.currentChapter + ",\n"
                self.outStr += "        text: '" + data + "',\n"
                self.outStr += "        answers: [\n"
                self.answerIndex = 0
                self.correctIndex = 0
            else:
                self.outStr += "            '" + data + "'" + ("," if self.answerIndex < 3 else "") + "\n"
                if self.answerIndex == 3:
                    self.outStr += "        ],\n"
                    self.outStr += "        type: 'multiple_text',\n"
                    self.outStr += "        correct_answer: '" + str(self.correctIndex) + "'\n"
                    self.outStr += "    });\n\n"

                self.answerIndex += 1
                
                

                
                                                                   
            """            

correctIndex = -1
answerCount = len(answers)
for i in range(0, answerCount):
                    answer = answers[i]
                    if answer[0] != '':
                        correctIndex = i
                    outStr += "            '" + answer[1] + "'" + ("," if i < (answerCount - 1) e
"""

    def getOutStr(self):
        return self.outStr

    def MyReset(self):
        self.outStr = "";

parser = MyHTMLParser()


for filename in files:
    
#    if filename != 'MC 1.html' and filename != 'MC 27.html' and filename != 'MC 28.html' and filename != 'MC 29.html' and filename != 'MC 30.html':
#        continue
    print(filename)
    fOut = open(folderOut + '/' + filename.replace('.html', '.js'),'w')
    f = open(folderIn + '/' + filename, 'r')

    parser.feed(f.read())
    f.close()
    fOut.write(parser.getOutStr())
    fOut.close()
    parser.MyReset()
    continue

    for line in f:
        print(line)
        line = line.replace('</li></ul><ul><li>', '</li><li>')
        rows = rowPattern.findall(line)
#        print(m)
        if(rows != []):            
            lineCounter = 0

            # First tr is heading
            for r in rows:
#                lineCounter += 1
#                if lineCounter > 10000:
#                    break
                print(r)
                chaptersStr = chapterPattern.search(r)
                if(chaptersStr != None):
                    chapters = chapterNoPattern.findall(chaptersStr.group(1));

                r = r.replace('<a name="_GoBack"/>', '')

#                r = r.replace('<span class="T2">', '')           
#                r = r.replace('</span>', '')              
                outStr += 'db.questions.save(\n'
                outStr += '    {\n'

                if(chapters == None):
                    print('ERROR - no chapters')
                    exit
                outStr += '        chapters: ' + str(chapters) + ',\n' 
                question = questionPattern.search(r)
#                re.sub(r'' + questionPatternStr, r'\1', question)
                answers = answerPattern.findall(r)

                if(question == None):
                    print(r)
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
#        print(line)

#    print(outStr)
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
