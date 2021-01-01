import sys
import xml.etree.ElementTree
filename=sys.argv[1];
e = xml.etree.ElementTree.parse(filename).getroot()
outStr="";
fOut = open(filename.replace('.xml', '.js'),'w')
f = open(filename, 'r')

for atype in e.findall('Chapter'):
	for xtype in atype.findall('Question'):
		outStr += 'db.questions.save(\n'
		outStr += '    {\n'
		outStr += "        chapters: ['"+ str(atype.get('header')) +"'],\n"
		outStr += " 	text: '"+ xtype.get('name').replace("'","\\'") +"',\n"	
		outStr += '	answers: [\n'
		for a in xtype.findall('Answer'):
			i = a.get('text')
			if( i == None):
				i = a.get('Text')
			i = i.replace("'","\\'")
			outStr += "		'"+i+"',"
			outStr += '\n'
		outStr += '	],\n'
		outStr += "	type: 'multiple_text',\n"	
		outStr += " 	correct_answer: '"+str(0)+"'\n"
		outStr += '    });\n\n'
		print(outStr.encode('utf-8', 'ignore'))
f.close()
fOut.write(outStr.encode('utf-8', 'ignore'))
fOut.close()
		


