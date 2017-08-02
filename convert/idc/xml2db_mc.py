import sys
import xml.etree.ElementTree
filename=sys.argv[1];
e = xml.etree.ElementTree.parse(filename).getroot()
outStr="db.questions.drop();";
fOut = open(filename.replace('.xml', '.js'),'w')
f = open(filename, 'r')

for atype in e.findall('Chapter'):
	for xtype in atype.findall('Question'):
		outStr += 'db.questions.save(\n'
		outStr += '    {\n'
	        outStr += "        chapters: ['"+ str(atype.get('header')) +"'],\n"
		outStr += " 	text: '"+ xtype.get('name') +"',\n"	
		outStr += '	answers: [\n'
		for a in xtype.findall('Answer'):
			outStr += "		'"+a.get('text')+"',"
			outStr += '\n'
		outStr += '	],\n'
		outStr += "	type: 'multiple_text',\n"	
		outStr += " 	correct_answer: '"+str(0)+"'\n"
		outStr += '    });\n\n'
		print(outStr.encode('utf-8', 'ignore'))
f.close()
fOut.write(outStr.encode('utf-8', 'ignore'))
fOut.close()
		


