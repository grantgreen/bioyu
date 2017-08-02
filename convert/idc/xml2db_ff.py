import sys
import xml.etree.ElementTree
filename=sys.argv[1];
e = xml.etree.ElementTree.parse(filename).getroot()
outStr="db.tiles_game.Drop();";
chapter=e.get('chapter')
print chapter
fOut = open(filename.replace('.xml', '.js'),'w')
f = open(filename, 'r')
for atype in e.findall('Catagory'):
	outStr += 'db.tiles_game.save(\n'
	outStr += '    {\n'
        outStr += "        chapter: "+chapter+",\n"
	outStr += " 	category: '"+ atype.get('name') +"',\n"	
	outStr += '	matches: [\n'
	for a in atype.findall('Word'):
		outStr += "		'"+a.get('text')+"',"
		outStr += '\n'
	outStr += '	],\n'
	outStr += '    });\n\n'
	print(outStr.encode('utf-8', 'ignore'))
f.close()
fOut.write(outStr.encode('utf-8', 'ignore'))
fOut.close()
