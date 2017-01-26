db = db.getSiblingDB('yubio_b');

db.contents.drop();


db.contents.save(
    {"name": "Kapitel 1: Liv, evolution og celler", 
     "sub": [
	 {"name": "1.1 Der var engang...",
	  "sub": [
	      "1.1.1 Den tidlige Jord",
	      "1.1.2 Livet opstår på Jorden",
	      "1.1.3 Er vi alene?"
	  ]},
	 {"name": "1.2 Prokaryoter",
	  "sub": [
	      "1.2.1 Den prokaryote celle",
	      "1.2.2 De gode og de grumme",
	      "1.2.3 Bekæmpelse af bakterier"
	  ]},

	 {"name": "1.3 Eukaryoter",
	  "sub": [
	      "1.3.1 Den eukaryote celle",
	      "1.3.2 Membrantransport"
	  ]},

	 {"name": "1.4 Virus",
	  "sub": []},

	 {"name": "1.5 Evolution",
	  "sub": [
	      "1.5.1 Den naturlige selektion",
	      "1.5.2 Dannelsen af nye arter",
	      "1.5.3 Menneskets evolution",
	      "1.5.4 Stamtræer",
	      "1.5.5 Kreationisme"
	  ]},

	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 2: Lunger og blod",
     "sub": [
	 {"name": "2.1 Generelt",
	  "sub": []},
	 {"name": "2.2 Åndedrætssystemet",
	  "sub": [
	      "2.2.1 Luftvejenes opbygning",
	      "2.2.2 Gasudveksling i alveolerne",
	      "2.2.3 Åndedræt"
	  ]},
	 {"name": "2.3 Blodkredsløbet",
	  "sub": [
	      "2.3.1 Kredsløbets opbygning",
	      "2.3.2 Mere om hjertet",
	      "2.3.3 Blodets bestanddele",
	      "2.3.4 Blodtryk, blodprop og venepumpe"
	  ]},
	 {"name": "2.4 Den arbejdende krop",
	  "sub": [
	      "2.4.1 Lungeventilation og minutvolumen",
	      "2.4.2 Reguleringsmekanismer"
	  ]},
	 {"name": "2.5 Kroppen i ekstreme miljøer",
	  "sub": [
	      "2.5.1 Bjergbestigning",
	      "2.5.2 Dykning",
	      "2.5.3 Temperatur"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 3: Kost, fordøjelse og sundhed",
     "sub": [
	 {"name": "3.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "3.2 Kostens sammensætning",
	  "sub": [
	      "3.2.1 Energibetragtninger",
	      "3.2.2 Kostråd",
	      "3.2.3 Kulhydrater",
	      "3.2.4 Fedtstoffer",
	      "3.2.5 Proteiner",
	      "3.2.6 Vitaminer og mineraler",
	      "3.2.7 Væske",
	      "3.2.8 Kost og træning"
	  ]},
	 {"name": "3.3 Fordøjelsen",
	  "sub": [
	      "3.3.1 Fordøjelsesenzymer",
	      "3.3.2 Nedbrydning af føden",
	      "3.3.3 Optagelse til blodet",
	      "3.3.4 Tyktarm og endetarm"
	  ]},
	 {"name": "3.4 Sundhed",
	  "sub": [
	      "3.4.1 Sundhedsparametre",
	      "3.4.2 Blodsukkerregulering og diabetes",
	      "3.4.3 Overvægt og fedme",
	      "3.4.4 Slankekure",
	      "3.4.5 Spiseforstyrrelser",
	      "3.4.6 Alternativ kost",
	      "3.4.7 KRAM-faktorer"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 4: Nervesystemet",
     "sub": [
	 {"name": "4.1 Generelt",
	  "sub": []},
	 {"name": "4.2 Nervecellen",
	  "sub": [
	  ]},
	 {"name": "4.3 Nervesignaler",
	  "sub": [
	      "4.3.1 Aktionspotentialet",
	      "4.3.2 Aktionspotentialets vandring",
	      "4.3.3 Synapsen",
	      "4.3.4 Fremmende og hæmmende signaler",
	      "4.3.5 Reflekser"
	  ]},
	 {"name": "4.4 Hjernen og euforiserende stoffer",
	  "sub": [
	      "4.4.1 Hjerne og rygmarv",
	      "4.4.2 Alkohol",
	      "4.4.3 Hash",
	      "4.4.4 Ecstasy",
	      "4.4.5 Nikotin",
	      "4.4.6 Rohypnol"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 5: Sexologi",
     "sub": [
	 {"name": "5.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "5.2 Kønnet og ukønnet formering",
	  "sub": [
	  ]},
	 {"name": "5.3 Seksuel selektion og sexstrategier",
	  "sub": [
	      "5.3.1 Bryllupsgaver hos edderkopper?",
	      "5.3.2 Gemmeleg eller fangeleg?",
	      "5.3.3 Hvem er faderen?"
	  ]},
	 {"name": "5.4 Mandens anatomi",
	  "sub": [
	  ]},
	 {"name": "5.5 Kvindens anatomi",
	  "sub": [
	  ]},
	 {"name": "5.6 Hormoner og pubertet",
	  "sub": [
	      "5.6.1 Hormoner hos manden",
	      "5.6.2 Hormoner hos kvinden"
	  ]},
	 {"name": "5.7 Samleje, orgasme og befrugtning",
	  "sub": [
	  ]},
	 {"name": "5.8 Graviditet og fosterudvikling",
	  "sub": [
	  ]},
	 {"name": "5.9 Fødsel og amning",
	  "sub": [
	      "5.9.1 Veer",
	      "5.9.2 Fødselskanalen",
	      "5.9.3 Kejsersnit",
	      "5.9.4 Amning",
	      "5.9.5 For tidligt fødte børn",
	  ]},
	 {"name": "5.10 Fosterdiagnostik",
	  "sub": [
	  ]},
	 {"name": "5.11 Ufrivillig barnløshed",
	  "sub": [
	      "5.11.1 Hormonforstyrrende stoffer",
	      "5.11.2 Kunstig befrugtning"
	  ]},
	 {"name": "5.12 Prævention og abort",
	  "sub": [
	      "5.12.1 Æg og sæd mødes ikke",
	      "5.12.2 Hormonel prævention",
	      "5.12.3 Nødprævention - fortrydelsespillen",
	      "5.12.4 Abort"
	  ]},
	 {"name": "5.13 Seksuelt overførte sygdomme",
	  "sub": [
	      "5.13.1 Klamydia",
	      "5.13.2 HPV og celleforandringer",
	      "5.13.3 Kondylomer",
	      "5.13.4 HIV og AIDS",
	      "5.13.5 Herpes"
	  ]},
	 {"name": "5.14 Alternativ seksualitet",
	  "sub": [
	      "5.14.1 Homoseksualitet",
	      "5.14.2 Transseksualitet",
	      "5.14.3 Transvetisme",
	      "5.14.4 Hermafroditter",
	      "5.14.5 AIS-syndrom"
	  ]},
	 {"name": "5.15 Myter og fakta",
	  "sub": [
	      "5.15.1 Størrelsen og formen",
	      "5.15.2 Forhudsforsnævring",
	      "5.15.3 Impotens og mødom",
	      "5.15.4 Onani, debut og antal partnere",
	      "5.15.5 Graviditet, præ-sæd og sikre perioder",
	      "5.15.6 Orgasme og orgasmejagt"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 6: Muskler, træning og doping",
     "sub": [
	 {"name": "6.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "6.2 Muskler",
	  "sub": [
	      "6.2.1 Opbygning og funktion",
	      "6.2.2 Bevægelser og skader"
	  ]},
	 {"name": "6.3 Energi til arbejdet",
	  "sub": [
	      "6.3.1 Arbejdets faser",
	      "6.3.2 Næringsstoffer og RQ-værdi",
	      "6.3.3 Muskeltræthed"
	  ]},
	 {"name": "6.4 Træningslære",
	  "sub": [
	      "6.4.1 Konditionstræning",
	      "6.4.2 Styrketræning"
	  ]},
	 {"name": "6.5 Doping",
	  "sub": [
	      "6.5.1 Doping i udholdenhedssport",
	      "6.5.2 Doping i styrkesport"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 7: DNA, gener og nedarvning",
     "sub": [
	 {"name": "7.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "7.2 Kromosomer",
	  "sub": [
	      "7.2.1 Antal, størrelse og placering",
	      "7.2.2 Opbygning"
	  ]},
	 {"name": "7.3 DNA",
	  "sub": [
	  ]},
	 {"name": "7.4 Gener",
	  "sub": [
	      "7.4.1 Generelt",
	      "7.4.2 Geners opbygning",
	      "7.4.3 Særligt hos eukaryoter",
	      "7.4.4 Specielle gener",
	      "7.4.5 Mellem generne"
	  ]},
	 {"name": "7.5 Proteinsyntesen",
	  "sub": [
	      "7.5.1 RNA",
	      "7.5.2 Transkription",
	      "7.5.3 Splicing hos eukaryoter",
	      "7.5.4 Translation",
	      "7.5.5 Den genetiske kode",
	      "7.5.6 Genregulering"
	  ]},
	 {"name": "7.6 Cellens cyklus",
	  "sub": [
	      "7.6.1 Vækstfase",
	      "7.6.2 Mitosen",
	      "7.6.3 Meiosen",
	  ]},
	 {"name": "7.7 Mutationer",
	  "sub": [
	      "7.7.1 Små mutationer",
	      "7.7.2 Store mutationer"
	  ]},
	 {"name": "7.8 Nedarvninger",
	  "sub": [
	      "7.8.1 Genetiske grundbegreber",
	      "7.8.2 Autosomal etgensnedarvning",
	      "7.8.3 Autosomal togensnedarvning",
	      "7.8.4 Kønsbundet nedarvning",
	      "7.8.5 Specielle nedarvninger",
	      "7.8.6 Arv og miljø"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 8: Bioteknologi",
     "sub": [
	 {"name": "8.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "8.2 Grundlæggende genteknologi",
	  "sub": [
	      "8.2.1 Isolering og kopiering af DNA",
	      "8.2.2 Gel-elektroforese",
	      "8.2.3 Påvisning af et bestemt gen"
	  ]},
	 {"name": "8.3 Genetiske fingeraftryk",
	  "sub": [
	      "8.3.1 RFLP-metode",
	      "8.3.2 Repetitivt DNA-metode",
	      "8.3.3 PCR-baseret metode"
	  ]},
	 {"name": "8.4 Gensplejsning",
	  "sub": [
	      "8.4.1 Donor, vektor og vært",
	      "8.4.2 Udvælgelse"
	  ]},
	 {"name": "8.5 Produktion",
	  "sub": [
	      "8.5.1 Enzymproduktion",
	      "8.5.2 Fødevareproduktion",
	      "8.5.3 Biogas og biobrændsler"
	  ]},
	 {"name": "8.6 Sygdomsbehandling",
	  "sub": [
	      "8.6.1 Lægemidler ind i cellerne",
	      "8.6.2 Nanomedicin",
	      "8.6.3 Stamceller",
	      "8.6.4 Genterapi",
	      "8.6.5 Kloning"
	  ]},
	 {"name": "8.7 Etik og teknologi",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 9: Økosystemer",
     "sub": [
	 {"name": "9.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "9.2 Økosystemet",
	  "sub": [
	      "9.2.1 Biotiske og abiotiske faktorer",
	      "9.2.2 Fotosyntese og produktion",
	      "9.2.3 Primærproduktion",
	      "9.2.4 Begrænsende faktorer"
	  ]},
	 {"name": "9.3 Fødekæder og kamp om føden",
	  "sub": [
	      "9.3.1 Fødekæder",
	      "9.3.2 Energistrømme",
	      "9.3.3 Fødenet",
	      "9.3.4 Rovdyr og byttedyr",
	      "9.3.5 Konkurrence"
	  ]},
	 {"name": "9.4 Søen som økosystem",
	  "sub": [
	      "9.4.1 Søens planter",
	      "9.4.2 Søens dyr",
	      "9.4.3 Lys- og temperaturforhold"
	  ]},
	 {"name": "9.5 Vandløbet som økosystem",
	  "sub": [
	      "9.5.1 Vandløbets planter",
	      "9.5.2 Vandløbets dyr"
	  ]},
	 {"name": "9.6 Skoven som økosystem",
	  "sub": [
	      "9.6.1 Skovtyper",
	      "9.6.2 Skovens planter",
	      "9.6.3 Skovens dyr"
	  ]},
	 {"name": "9.7 Stofkredsløb",
	  "sub": [
	      "9.7.1 Flaskehaven",
	      "9.7.2 Kulstofkredsløbet",
	      "9.7.3 Kvælstofkredsløbet",
	      "9.7.4 Vandets kredsløb"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 10: Forurening",
     "sub": [
	 {"name": "10.1 Generelt",
	  "sub": [],
	  "hasQuestions": false
	 },
	 {"name": "10.2 Vandforurening",
	  "sub": [
	      "10.2.1 Primær og sekundær forurening",
	      "10.2.2 Tungmetaller",
	      "10.2.3 Pesticider og andre gifte",
	      "10.2.4 Hormonforstyrrende stoffer",
	      "10.2.5 Forurening af søer",
	      "10.2.6 Forurening af vandløb",
	      "10.2.7 Forurening af havet",
	      "10.2.8 Forurening af grundvand"
	  ]},
	 {"name": "10.3 Vandrensning",
	  "sub": [
	      "10.3.1 Renseanlæg",
	      "10.3.2 Rensning af drikkevand",
	      "10.3.3 Vandmiljøplaner"
	  ]},
	 {"name": "10.4 Luftforurening",
	  "sub": [
	      "10.4.1 Forurening med skadelige partikler",
	      "10.4.2 Forurening med radioaktive stoffer",
	      "10.4.3 Forsuring",
	      "10.4.4 Ozonlaget"
	  ]},
	 {"name": "10.5 Klimaforandringer",
	  "sub": [
	      "10.5.1 Drivhuseffekten",
	      "10.5.2 Kuldioxid og opvarmning",
	      "10.5.3 Opvarmningens effekter",
	      "10.5.4 Hvor stammer udledningen fra?",
	      "10.5.6 Hvad skal vi gøre?"
	  ]},
	 {"name": "10.6 Naturgenopretning",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 11: Immunforsvaret",
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
    {"name": "Kapitel 12: Hormonsystemet",
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
    {"name": "Kapitel 13: De organiske stoffer",
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
    {"name": "Kapitel 14: Stofskiftet",
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
    {"name": "Kapitel 15: Populationer, jord og planter",
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
    {"name": "Kapitel 1001: Ultimate Fit Fysiologi",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 1002: Ultimate Fit Biokemi",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 1003: Ultimate Fit Genetik",
     "sub": [
     ]
    });
db.contents.save(
    {"name": "Kapitel 1004: Ultimate Fit Økologi",
     "sub": [
     ]
    });

db.contents.save(
    {"name": "Kapitel 1005: Ultimate Fit",
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
