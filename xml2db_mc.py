import xml.etree.ElementTree
e = xml.etree.ElementTree.parse('mc.xml').getroot()
outStr="";
for atype in e.findall('Chapter'):
	for xtype in atype.findall('Question'):
		outStr += 'db.questions.save(\n'
		outStr += '    {\n'
        outStr += '        chapters: [' + str(atype.get('header')) + '],\n' 
		outStr += 'answers: [\n'
		for a in xtype.findall('Answer'):
			
        print(outStr)

