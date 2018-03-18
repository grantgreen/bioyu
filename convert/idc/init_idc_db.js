db = db.getSiblingDB('yubio_idc');

db.contents.drop();


db.contents.save(
    {"name": "Kapitel 1: Idræt og sundhed", 
     "sub": [
	 {"name": "1.1 Bevægelse og sundhed",
	  "sub": [
	      "1.1.1 Idræt som mål eller middel?",
	      "1.1.2 Sundhedsfordele ved fysisk aktivitet",
	      "1.1.3 Anbefalinger ved fysisk aktivitet"
	  ]},
	 {"name": "1.2 Er jeg sund?",
	  "sub": [
	      "1.2.1 Sundhedsmålinger",
	      "1.2.2 KRAM",
	      "1.2.3 Psykisk sundhed - skal jeg i bad?"
	  ]},

	 {"name": "1.3 Min sundhedsprofil",
	  "sub": [
	      "1.3.1 Den eukaryote celle",
	      "1.3.2 Membrantransport"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 2: Menneskets fysiologi",
     "sub": [
	 {"name": "2.1 Indledning",
	  "sub": []},
	 {"name": "2.2 Åndedrætssystem og blodkredsløb",
	  "sub": [
	      "2.2.1 Åndedræt og vejrtrækning",
	      "2.2.2 Blodkredsløb og puls",
	      "2.2.3 Reguleringsmekanismer"
	  ]},
	 {"name": "2.3 Muskler, knogler og led",
	  "sub": [
	      "2.3.1 Musklernes opbygning og funktion",
	      "2.3.2 Tre typer muskelarbejde",
	      "2.3.3 Mere om muskelarbejde",
	      "2.3.4 Nervesystemet og musklerne",
	      "2.3.5 Anatomi"
	  ]},
	 {"name": "2.4 Kost og energi",
	  "sub": [
	      "2.4.1 Næringsstoffer og træning",
	      "2.4.2 Dannelsen af ATP i Kroppen"
	  ]},
	  {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 3: Træningslære",
     "sub": [
	 {"name": "3.1 Superkompensation",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "3.2 Arbejdets tre faser",
	  "sub": []	},
	 {"name": "3.3 Opvarmning/nedvarmning",
	  "sub": []},
	 {"name": "3.4 Aerob træning",
	  "sub": [
	      "3.4.1 Kondital og udholdenhed",
	      "3.4.2 Kontinuerlig træning",
	      "3.4.3 Intervaltræning",
	      "3.4.4 Mærkbare effekter",
	  ]},
	  {"name": "3.5 Anerob træning",
	  "sub": []},
	   {"name": "3.6 Styrketræning",
	  "sub": [
	      "3.6.1 Muskelstyrke",
	      "3.6.2 Muskeludholdenhed",
	      "3.6.3 Forspænding/spændstighed",
	  ]},
	   {"name": "3.7 Smidighedstræning",
	  "sub": []},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 4: Doping",
     "sub": [
	 {"name": "4.1 Dopings historie",
	  "sub": []},
	 {"name": "4.2 Dopinglisten, tests og straf",
	  "sub": [
	  ]},
	 {"name": "4.3 Hvem doper sig?",
	  "sub": [
	  ]},
	 {"name": "4.4 Skal doping frigives?",
	  "sub": [
	  ]},
	  {"name": "4.5 Doping og udholdenhed",
	  "sub": [
	  	"4.5.1 EPO",
	  	"4.5.2 Bloddoping",
	  	"4.5.3 Andre metoder",
	  ]},
	   {"name": "4.6 Doping og styrke",
	  "sub": [
	  	"4.6.1 Anabolske steorider",
	  	"4.6.2 Andre metoder",
	  ]},
	   {"name": "4.7 Mand eller kvinde",
	  "sub": [
	  ]},
	   {"name": "4.8 Snyd ved tests",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 5: Idrætspsykologi",
     "sub": [
      {"name": "5.1 Introduktion",
	  "sub": []},
	 {"name": "5.2 Den individuelle toppræstation",
	  "sub": [
	   		"5.2.1 Motivation og målsætning",
	      	"5.2.2 Koncentration og spændingsregulering",
	  ],
	 },
	 {"name": "5.3 Holdets toppræstation",
	  "sub": [
	      "5.3.1 Det velfungerende team",
	      "5.3.2 Samarbejde, roller & hierarki",
	      "5.3.3 Kommunikation"
	  ]},
	   {"name": "5.4 Aggression i idræt",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 6: Idrætsskader",
     "sub": [ {"name": "6.1 Når skaden er sket",
	  "sub": [
    		"6.1.1 Den akutte behandling",
	      	"6.1.2 Efterbehandling & genoptræning"
	  ]},
      {"name": "6.2 Skader i musklerne",
	  "sub": [
    		"6.2.1 Fibersprængning og forstrækning",
	      	"6.2.2 Trælår og 'lammer'"
	  ]},
	 {"name": "6.3 Skader ved knæleddet",
	  "sub": [
	      "6.3.1 Ledbånd, korsbånd & menisk",
	      "6.3.2 Løbeknæ og springerknæ",
	  ]},
	 {"name": "6.4 Skader i fodledet",
	  "sub": [
	  ]},
	 {"name": "6.5 Andre Idrætsskader",
	  "sub": [
	      "6.5.1 Skinnebensbetændelse",
	      "6.5.2 Lyskenskade",
	      "6.5.3 Betændelse i akillessenen",
	      "6.5.4 Albueskader",
	      "6.5.5 Kramper og sidesting",
	      "6.5.6 Hypermobilitet",
	      "6.5.7 Knoglebrud",
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 7: Tests",
     "sub": [
	 {"name": "7.1 Test af kondition",
	 "sub": [
	      "7.1.1 Biptest/yo-yo-test",
	      "7.1.2 Coopers løbetest",
	      "7.1.3 Åstrands nomogram",
	      "7.1.4 Andre konditionstests"
	 ]},
	 {"name": "7.2 Test af styrke",
	  "sub": [
	      "7.2.1 Test af styrke i ben",
	      "7.2.2 Test af styrke i overkrop"
	  ]},
	 {"name": "7.3 Test af Muskeludholdenhed",
	  "sub": [
	      "7.3.1 Cirkeltræning",
	  ]},
	 {"name": "7.4 All-around test",
	  "sub": [
	      "7.4.1 Politi-testen",
	      "7.4.2 Yubio-testen",
	  ]},
	 {"name": "7.5 Test af fibersammensætning",
	  "sub": [],
	  "hasQuestions": false},
	 {"name": "7.6 Test af opvarmningens effekt",
	  "sub": [ ],
	  "hasQuestions": false},
	 {"name": "7.7 Mutationer",
	  "sub": [
	      "7.7.1 Små mutationer",
	      "7.7.2 Store mutationer"
	  ],
	  "hasQuestions": false},
	 {"name": "7.8 Nedarvninger",
	  "sub": [
	      "7.8.1 Genetiske grundbegreber",
	      "7.8.2 Autosomal etgensnedarvning",
	      "7.8.3 Autosomal togensnedarvning",
	      "7.8.4 Kønsbundet nedarvning",
	      "7.8.5 Specielle nedarvninger",
	      "7.8.6 Arv og miljø"
	  ],
	  "hasQuestions": false},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
	{"name": "Kapitel 8: Udvidet fyiologi & træningslære",
		 "sub": [ {"name": "8.1 Indledning",
		  "sub": []},
		  {"name": "8.2 Lunger, blod & ATP",
		  "sub": [
				"8.2.1 Lungevoluminer",
				  "8.2.2 Ilt- og kuldioxidtransport",
				  "8.2.3 Hjertet og blodkredsløbet",
				  "8.2.4 Hjertets sammensætning",
				  "8.2.5 Blodtryk og venepumpe",
				  "8.2.6 Hjerteklapper og hjertelyd",
				  "8.2.7 Ficks princip"
		  ]},
		 {"name": "8.3 Energi (ATP)",
		  "sub": [
			  "8.3.1 ATP-molekylet",
			  "8.3.2 ATP fra kulhydrat",
			  "8.3.3 Kulhydrat fra fedt/protein",
			  "8.3.4 RQ og fedtforbrænding",
			  "8.3.5 Cost of transport"
		  ]},
		 {"name": "8.4 Anatomi",
		  "sub": [
			  "8.4.1 Skelettet",
			  "8.4.2 Led",
			  "8.4.3 Musklerne"
		  ]},
		 {"name": "8.5 Muskelfysiologi",
		  "sub": [
			  "8.5.1 Musklens opbygning",
			  "8.5.2 Muskelkontraktion",
			  "8.5.3 Muskelfibertyper",
			  "8.5.4 Træning og fibertyper",
			  "8.5.5 Mekaniske forhold",
			  "8.5.6 Muskeltræthed",
			  "8.5.7 Muskelømhed",
			  "8.5.8 Musklernes hukommelse",
			  "8.5.9 Kønsforskelle",
			  "8.5.10 Gamle muskler"
		  ]},
		  {"name":"8.6 Konditionstræning",
		"sub":[
			"8.6.1 Præstationsevnen",
			"8.6.2 Kontinuerlig træning",
			"8.6.3 Intervaltræning",
			"8.6.4 Træningsplanlægning",
			"8.6.5 Effekter af konditionstræning",
		]},
		{"name":"8.7 Styrketræning",
		"sub":[
			"8.7.1 Præstationsevnen",
			"8.7.2 Selve træningen",
			"8.7.3 Træningsplanlægning",
			"8.7.4 Effekter af styrketræning",
			"8.7.5 Alternative træningsmetoder",
		]},
		{"name":"8.8 Ekstreme forhold",
		"sub":[
			"8.8.1 Idræt i varme",
			"8.8.2 Idræt i kulde",
			"8.8.3 Idræt i højderne",
			"8.8.4 Idræt i dybderne"		
		]},
		 {"name": "Resume",
		  "sub": []}	 
	 ]
});
	


db.contents.save(
    {"name": "Kapitel 10: Boldbasis",
     "sub": [
	 {"name": "10.1 Historie",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "10.2 Teori om boldspil",
	  "sub": [
	      "10.2.1 Boldspilsfamilierne",
	      "10.2.2 Taktikker",
	      "10.2.3 Læringstrinmodellen",
	      "10.2.4 Spiludvikling",
	  ]},
	 {"name": "10.3 Øvelser",
	  "sub": [
	      "10.3.1 Fokus på opvarmning (A)",
	      "10.3.2 Kaosspil (B)",
	      "10.3.3 Net/væg-spil (C)",
	      "10.3.4 Slagspil (D)",
	      "10.3.5 Træfspil (E)",
	  ]},
	 {"name": "10.4 Eksempel på boldbasisforløb",
	  "sub": [
	      "10.4.1 Generelt boldbasis",
	      "10.4.2 Kaosspil og den gode holdspiller",
	  ]},
	 {"name": "10.5 Evaluering",
	  "sub": [
	  ]},
	 {"name": "10.6 Drejebog",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 11: Fodbold",
     "sub": [
	 {"name": "11.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "11.2 Det medfødte forsvar",
	  "sub": []},
	 {"name": "11.3 Det adaptive forsvar",
	  "sub": [
		"11.3.1 Makrofager",
		"11.3.2 T-lymfocytter",
		"11.3.3 B-lymfocytter",
		"11.3.4 Antistoffer",
		"11.3.5 Feber"
	  ]},
	 {"name": "11.4 Immunforsvaret og sundhed",
	  "sub": [
		"11.4.1 Påvisning af antistoffer",
		"11.4.2 Vaccinationer",
		"11.4.3 Allergi",
		"11.4.4 Transplantationer",
		"11.4.5 Kostens betydning",
		"11.4.6 Stress",
		"11.4.7 Sygdomme i immunforsvaret"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 12: Basketball",
     "sub": [
	 {"name": "12.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "12.2 Endokrine kirtler",
	  "sub": []},
	 {"name": "12.3 Hormontyper og receptorer",
	  "sub": [
		"12.3.1 Fedtopløselige hormoner",
		"12.3.2 Vandopløselige hormoner",
	  ]},
	 {"name": "12.4 Hormonregulering",
	  "sub": []},
	 {"name": "12.5 Hormoner og sundhed",
	  "sub": [
		"12.5.1 Fejl i skjoldbruskkirtlens regulering",
		"12.5.2 Fejl i binyrebarkens regulering",
		"12.5.3 Hormoner og døgnrytme"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });


db.contents.save(
    {"name": "Kapitel 13: Volleyball",
     "sub": [
	 {"name": "13.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "13.2 Kulhydrater",
	  "sub": [
		"13.2.1 Monosakkarider",
		"13.2.2 Disakkarider",
		"13.2.3 Polysakkarider",
		"13.2.4 Påvisning af kulhydrater"
	  ]},
	 {"name": "13.3 Fedtstoffer",
	  "sub": [
		"13.3.1 Fedt som energikilde",
		"13.3.2 Fedt som byggesten"	  
		]},
	 {"name": "13.4 Proteiner",
	  "sub": [
		"13.4.1 Aminosyrer",
		"13.4.2 Proteinstruktur"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 14: Floorball",
     "sub": [
	 {"name": "14.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "14.2 Enzymer",
	  "sub": [
		"14.2.1 Enzymaktivitet",
		"14.2.2 Enzymnavne",
		"14.2.3 Coenzymer",
		"14.2.4 Enzymgrupper"
	  ]},
	 {"name": "14.3 ATP",
	  "sub": [
	  ]},
	 {"name": "14.4 Katabolisme af kulhydrater",
	  "sub": [
		"14.4.1 Glykolyse og gæring",
		"14.4.2 Krebs' cyklus",
		"14.4.3 Elektrontransportkæden",
		"14.4.4 ATP-regnskab"
	  ]},
	 {"name": "14.5 Andre katabolske processer",
	  "sub": [
		"14.5.1 Fedtforbrænding",
		"14.5.2 Proteinforbrænding",
		"14.5.3 Opsamling på katabolismen"
	  ]},
	 {"name": "14.6 Anabolismen",
	  "sub": [
		"14.6.1 Fotosyntesen i store træk",
		"14.6.2 Mere om lysprocesserne",
		"14.6.3 Mere om mørkeprocesserne",
		"14.6.4 Glukoneogenesen",
		"14.6.5 Lipogenesen"
	  ]},
	 {"name": "14.7 Katabolismen og anabolismen",
	  "sub": []},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 15: Ultimate",
     "sub": [
	 {"name": "15.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "15.2 Populationsbiologi",
	  "sub": [
		"15.2.1 Populationsvækst",
		"15.2.2 Populationsbestemmelse",
		"15.2.3 Herbivori - eller græsning",
		"15.2.4 Truede arter",
		"15.2.5 Succession",
		"15.2.6 Biodiversitet"
	  ]},
	 {"name": "15.3 Jordbunden",
	  "sub": [
		"15.3.1 Hvad er jord?",
		"15.3.2 Jordbundskolloider",
		"15.3.3 Jordbundstyper"
	  ]},
	 {"name": "15.4 Plantefysiologi",
	  "sub": [
		"15.4.1 Stoftransport i planter",
		"15.4.2 Planter og jordbundens mikroorganismer"
	  ]},
	 {"name": "15.5 Problemer for jordbunden",
	  "sub": [
		  "15.5.1 Udvaskning",
		  "15.5.2 Gifte"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 16: Flag football",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 20: Træningsprojekt",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 21: Grundtræning",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 22: Badminton",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 23: Atletik",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 24: Kampsport",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 25: X-Fit",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 26: Parkour",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 30: Rytmisk opvarmning",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 31: Lanciers og andre folkedanse",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 32: Vild med dans",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 33: Hiphop",
     "sub": [
     ]
    });

/*
db.users.remove();

db.users.save(
    {
      'name': 'Administrator',
      'username': 'admin',
      'password': 'admin',
      'isadmin': true
    });

db.users.save(
    {
      'name': 'Thomas Sand Skadhede',
      'username': 'thomas',
      'password': 'thomas',
      'isadmin': true
    });

db.users.save(
    {
      'name': 'Charlotte Berlin Lytzen',
      'username': 'charlotte',
      'password': 'charlotte',
      'isadmin': true
    });
*/

//db.scores.remove();
