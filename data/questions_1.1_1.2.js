db.questions.remove();


//SPØRGSMÅL TIL KAPITEL 1.1+1.2
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved en prokaryot celle forstås",
	answers: [
	    "En celle uden DNA",
	    "En celle uden egentlig cellekerne",
	    "En celle med RNA i stedet for DNA",
	    "En celle med cellekerne og celleorganeller"
	],
	type: "multiple_text",
	correct_answer: "1"
    });
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
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En protist er",
	answers: [
	    "En udposning på cellemembranen",
	    "Et virus",
	    "Alle nulevende celler er protister",
	    "En encellet organisme"
	],
	type: "multiple_text",
	correct_answer: "3"
    });
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvilken gruppe hører ikke til protisterne",
	answers: [
	    "Amøber",
	    "Protozoer",
	    "Flagellater",
	    "Arkæer"
	],
	type: "multiple_text",
	correct_answer: "3"
    });
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvilken gruppe hører ikke til prokaryoterne?",
	answers: [
	    "Eubakterierne",
	    "Arkæerne",
	    "De sygdomsfremkaldende bakterier",
	    "Prionerne"
	],
	type: "multiple_text",
	correct_answer: "3"
    });
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En bakteriecelle er omgivet af en såkaldt cell-envelope, der består af",
	answers: [
	    "Et slimlag yderst og en cellevæg inderst",
	    "En cellevæg inderst og et slimlag yderst",
	    "En cellulosecellevæg ligesom hos planteceller",
	    "En cellemembran opbygget på samme måde som dyrenes og planternes"
	],
	type: "multiple_text",
	correct_answer: "0"
    });
db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Eubakteriernes cellevæg består af",
	answers: [
	    "Cellulose",
	    "Fosfolipid og protein",
	    "Lignin",
	    "Murein"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Murein er opbygget af",
	answers: [
	    "Cellulose og glukose",
	    "Protein, især meget store proteiner",
	    "Lipid",
	    "Peptidoglykan, som er en slags glykoproteiner"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved Gram-farvning forstås",
	answers: [
	    "En farvemetode der kan afgøre, om en bakterie er anaerob eller aerob",
	    "En farvemetode der kan adskille smitsomme bakterier fra de ikke smitsomme",
	    "En farvemetode der farver bakterier med et tykt mureinlag",
	    "En farvemetode der farver bakterier uden et tykt mureinlag"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "For Gram-negative bakterier gælder, at",
	answers: [
	    "De er svære at dræbe med antibiotika",
	    "De er nemmere at behandle med antibiotika end de Gram-positive",
	    "De kan tåle udtørring",
	    "De kan danne hvilesporer"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Bakterieceller har et højt osmotisk tryk på grund af",
	answers: [
	    "En meget gennemtrængelig cellevæg",
	    "Et meget ringe antal opløste stoffer i cellen",
	    "Et stort antal opløste stoffer i cellen",
	    "Mange store proteinmolekyler i cellen"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Når bakterier skal nedbryde store organiske molekyler fra omgivelserne, sker det på følgende måde:",
	answers: [
	    "De organiske molekyler optages ved diffusion",
	    "De organiske molekyler nedbrydes uden for cellen ved hjælp af udskilte enzymer",
	    "Bakterier kan ikke nedbryde organiske molekyler",
	    "De organiske molekyler nedbrydes af udskilt perforin"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Bakteriernes cellulære respiration er knyttet til",
	answers: [
	    "Mitokondrierne",
	    "Grønkornene",
	    "Plasmamembranen",
	    "Ribosomerne"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om bakteriernes arvemateriale gælder, at",
	answers: [
	    "Det findes i cellekernen",
	    "Det er knyttet til ribosomerne",
	    "Det findes som et ringformet molekyle",
	    "Det findes som RNA"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Plasmider er",
	answers: [
	    "En form for grønkorn",
	    "Bakteriernes plasmamembran",
	    "Bakteriernes cytoplasma",
	    "Små ringformede DNA-molekyler"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved konjugation forstås",
	answers: [
	    "At bakterier udveksler genetisk materiale",
	    "At bakterierne muterer",
	    "At bakterierne danner kønsceller",
	    "At bakterier klistres sammen ved hjælp af den klæbrige cellevæg"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvor mange bakteriekromosomer (nucleoider) findes der pr. bakterie?",
	answers: [
	    "50-100",
	    "Kun et",
	    "Ingen",
	    "Der er kun plasmider"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved arkæer forstås",
	answers: [
	    "En type af flageller",
	    "Proteiner i bakteriernes cellemembran",
	    "En slags bro mellem to bakterier",
	    "En undergruppe af prokaryoter  "
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En halofil bakterie er en bakterie, der",
	answers: [
	    "Lever i ekstremt kolde omgivelser",
	    "Lever i ekstremt varme omgivelser",
	    "Lever i ekstremt salte omgivelser",
	    "Lever i omgivelser, hvor der er et meget stærkt sollys"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En psykrofil bakterie er en bakterie der",
	answers: [
	    "Lever i ekstremt kolde omgivelser",
	    "Lever i ekstremt varme omgivelser",
	    "Lever i ekstremt salte omgivelser",
	    "Lever i omgivelser med meget høj pH"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En alkalifil bakterie er en bakterie der",
	answers: [
	    "Lever i omgivelser med meget lav pH",
	    "Lever i omgivelser med meget høj pH",
	    "Lever i meget dybe have",
	    "Lever på de højeste bjergtoppe"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om arkæer gælder, at",
	answers: [
	    "De er tæt beslægtede med virus",
	    "De er tættere beslægtede med eubakterier end med eukaryoter",
	    "De er tættere beslægtede med eukaryoter end med eubakterier",
	    "De er mest beslægtede med autotrofer"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Arkæernes evolution går langsomt, da de",
	answers: [
	    "Ikke laver mutationer",
	    "Ikke kan udveksle genetisk materiale",
	    "Har kønnet formering",
	    "Ikke kan lave celledelinger"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvilke bakterier bør der ikke være for mange af i tarmfloraen?",
	answers: [
	    "Salmonella-bakterier",
	    "Bifido-bakterier",
	    "Lactobacillus",
	    "E. coli"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved patogene bakterier forstås",
	answers: [
	    "Bakterier, der kan medføre overvægt",
	    "En form for cyanobakterier",
	    "En form for arkæer",
	    "Sygdomsfremkaldende bakterier"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om cyanobakterier gælder, at",
	answers: [
	    "De er sygdomsfremkaldende",
	    "De hører til undergruppen arkæer",
	    "De kan lave fotosyntese",
	    "De er meget mindre end andre bakterier"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Heterocyster findes hos",
	answers: [
	    "Alle celler",
	    "Alle prokaryoter",
	    "Alle eukaryoter",
	    "Cyanobakterier"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Heterocyster indeholder",
	answers: [
	    "Enzymet nitrogenase",
	    "Enzymet amylase",
	    "Ringformede DNA-molekyler",
	    "Et gulligt fedtagtigt stof"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Enzymet nitrogenases funktion er at",
	answers: [
	    "Spalte DNA",
	    "Danne nitrat",
	    "At spalte N<sub>2</sub>",
	    "At spalte det giftige stof ammoniak"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Cyanobakterier flyder ofte ovenpå vandet fordi de",
	answers: [
	    "Har flageller til at svømme med",
	    "Indeholder meget fedt, som er lettere end vand",
	    "Kan spalte luftformigt kvælstof N<sub>2</sub>",
	    "Har luftvakuoler"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved vandblomst forstås",
	answers: [
	    "Et grønt lag af cyanobakterier i en vandoverflade",
	    "En form for vandlevende blomsterplante",
	    "Et lag af arkæer i en vandoverflade",
	    "Bakterier, der danner blomsterlignende figurer på bunden af en sø"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Ved bakteriers toksiner forstås",
	answers: [
	    "Deres flageller",
	    "Deres små DNA-molekyler",
	    "De giftstoffer, de producerer",
	    "De vækstfaktorer, de producerer"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvilket udsagn om bakterien Clostridium botulinum er ikke korrekt",
	answers: [
	    "Den kan forårsage pølseforgiftning",
	    "Den bruges til fremstilling af yogurt",
	    "Den er giftig",
	    "Den er anaerob"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om bakterien Borrelia burgdoferi gælder, at",
	answers: [
	    "Den lever i menneskets tarmkanal",
	    "Den bruges i fødevareproduktion",
	    "Den kan overføres til mennesket via bid af ræve eller hunde",
	    "Den kan overføres til mennesket via bid af skovflåt"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om Salmonella-bakterier gælder, at",
	answers: [
	    "De hører ikke til eubakterier, men til arkæerne",
	    "De er gram-negative",
	    "De er gram-positive",
	    "De kan ikke dræbes ved kogning"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "En multiresistent bakterie er en bakterie, der",
	answers: [
	    "Kan dræbes af mange forskellige former for antibiotika",
	    "Ikke kan dræbes af nogen form for antibiotika",
	    "Er resistent over for mange forskellige typer af antibiotika",
	    "Ikke kan dræbes ved kogning, da den danner sporer"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Om miltbrandbakterier gælder, at",
	answers: [
	    "De bruges til gensplejsning",
	    "De lever normalt i menneskets tarmkanal",
	    "Immunforsvaret har svært ved at bekæmpe den, da den er omgivet af en kapsel",
	    "Den kan forårsage pest"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Sygdommen miltbrand spredes med",
	answers: [
	    "Insektbid",
	    "Skovflåtens bid",
	    "Drikkevandet",
	    "Luftbårne sporer"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvilken påstand om pestbakterien er ikke korrekt?",
	answers: [
	    "Den forårsages af en eubakterie af slægten Yersinia",
	    "Den er gram-negativ",
	    "Den er anaerob",
	    "Den er stavformet"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Antibiotika virker mod",
	answers: [
	    "Bakterieinfektioner",
	    "Virusinfektioner",
	    "Alt liv",
	    "Protister"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Penicillin (antibiotikum) virker på den måde, at det",
	answers: [
	    "Skader bakteriernes DNA-syntese",
	    "Skader bakteriernes mitose",
	    "Hæmmer bakteriernes proteinsyntese",
	    "Hæmmer dannelsen af bakteriernes cellevæg"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Tetracyklin (antibiotikum) virker på den måde, at det",
	answers: [
	    "Skader bakteriernes DNA-syntese",
	    "Skader bakteriernes mitose",
	    "Hæmmer bakteriernes proteinsyntese",
	    "Hæmmer dannelsen af bakteriernes cellevæg"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Qinolon (antibiotikum) virker på den måde, at det",
	answers: [
	    "Skader bakteriernes DNA-syntese",
	    "Skader bakteriernes mitose",
	    "Hæmmer bakteriernes proteinsyntese",
	    "Hæmmer dannelsen af bakteriernes cellevæg"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Et bredspektret antibiotikum kan",
	answers: [
	    "Dræbe alle slags bakterier",
	    "Dræbe alle gram-positive bakterier",
	    "Dræbe både bakterier og virus",
	    "Dræbe mange forskellige typer af bakterier"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Et smalspektret antibiotikum kan dræbe",
	answers: [
	    "En bestemt type af bakterier",
	    "Alle gram-positive bakterier",
	    "Alle gram-negative bakterier",
	    "Kun Salmonelle-bakterier"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Et for stort forbrug af antibiotika kan være skadeligt, fordi",
	answers: [
	    "Det kan medføre allergi over for mange former for antibiotika",
	    "Der kan opstå resistens hos mennesker over for antibiotika, hvis man får det for tit",
	    "Bakterierne kan blive resistente  ",
	    "Det kan medføre auto-immune sygdomme"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvis der er tilstrækkeligt med næringsstoffer kan bakterier i en kultur fordoble deres antal på",
	answers: [
	    "2 sekunder",
	    "20 min",
	    "En time",
	    "Et døgn"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Hvor mange bakterier må der typisk være i en fødevare, hvis den skal være egnet til menneskeføde",
	answers: [
	    "500/g",
	    "5.000/g",
	    "5 millioner/g",
	    "50 millioner/g"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Streptokker ser ud som følger",
	answers: [
	    "Kugleformede",
	    "Som perler på snor",
	    "Som små stave",
	    "Som kugler i en klase"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Stafylokokker ser ud som følger",
	answers: [
	    "Kugleformede",
	    "Som små skruer",
	    "Som små stave",
	    "Som kugler i en klase"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Bacillus-bakterier ser ud som følger",
	answers: [
	    "Kugleformede",
	    "Skrueformede",
	    "Som kugler i en klase",
	    "Som små stave"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Streptobacillus ser ud som følger",
	answers: [
	    "Som små stave",
	    "Som små stave i en kæde",
	    "Som små kugler i en kæde",
	    "Som skruer"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Spirokæter ser ud som følger",
	answers: [
	    "Skrueformede uden flagel",
	    "Skrueformede med flagel",
	    "Som små stave",
	    "Som perler på snor"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.1", "1.2"],
	text: "Indenfor taxonomi inddeler man organismer i flere underkategorier. Hvilken rækkefølge er den korrekte?",
	answers: [
	    "Rige-række-klasse-orden-familie-slægt-art",
	    "Rige-række-klasse-orden-slægt-familie-art",
	    "Række-rige-art-klasse-familie-orden-slægt",
	    "Rige-klasse-række-orden-familie-slægt-art"
	],
	type: "multiple_text",
	correct_answer: "0"
    });
