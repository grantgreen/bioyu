db = db.getSiblingDB('yubio');

db.contents.drop();

db.contents.save(
    {"name": "Kapitel 1: Mikrobiologi", 
     "sub": [
	 {"name": "1.1 Indledning",
	  "sub": []},
	 {"name": "1.2 Prokaryoter",
	  "sub": [
	      "1.2.1 Generelt",
	      "1.2.2 Eubakterier",
	      "1.2.3 Arkæer",
	      "1.2.4 Gavnlige bakterier",
	      "1.2.5 Sygdomsfremkaldende bakterier",
	      "1.2.6 Antibiotika",
	      "1.2.7 Bakterievækst",
	      "1.2.8 Bakterieoptælling",
	      "1.2.9 Taxonomi"
	  ]},
	 
	 {"name": "1.3 Eukaryoter",
	  "sub": [
	      "1.3.1 Generelt",
	      "1.3.2 Cellevæggen",
	      "1.3.3 Cellemembranen",
	      "1.3.4 Transport over cellemembranen", 
	      "1.3.5 Forskellige membranprocesser",
	      "1.3.6 Cellekernen",
	      "1.3.7 Mitokondrier",
	      "1.3.8 Grønkorn",
	      "1.3.9 Ribosomer",
	      "1.3.10 Det endoplasmatiske reticulum (E.R.)",
	      "1.3.11 Det sarkoplasmatiske reticulum (S.R.)",
	      "1.3.12 Golgikomplekset",
	      "1.3.13 Lysosomer & vakuoler",
	      "1.3.14 Celleskelet",
	      "1.3.15 Celledød",
	      "1.3.16 Protister",
	      "1.3.17 Svampe/mikrosvampe",
	      "1.3.18 Taxonomi "
	  ]},

	 {"name": "1.4 Vira",
	  "sub": [
	      "1.4.1 Generelt",
	      "1.4.2 DNA-vira",
	      "1.4.3 RNA-vira",
	      "1.4.4 Antiviral medicin",
	      "1.4.5 Endogene vira"
	  ]},

	 {"name": "1.5 Prioner ",
	  "sub": []},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 2: Lunger og blodkredsløb",
     "sub": [
	 {"name": "2.1 Generelt",
	  "sub": []},
	 {"name": "2.2 Åndedrættet",
	  "sub": [
	      "2.2.1 Indånding og udånding",
	      "2.2.2 Lungerumfang og lungeventilation "
	  ]},
	 {"name": "2.3 Iltoptagelse",
	  "sub": [
	      "2.3.1 Lungernes opbygning ",
	      "2.3.2 Gasudveksling af ilt",
	      "2.3.3 Iltens vej til cellerne",
	      "2.3.4 Transport og afgivelse af ilt"
	  ]},
	 {"name": "2.4 Kuldioxidafgivelse",
	  "sub": [
	      "2.4.1 Kuldioxidens vej ud af kroppen ",
	      "2.4.2 Transport af kuldioxid i blodet"
	  ]},
	 {"name": "2.5 Blodets bestanddele",
	  "sub": [
	      "2.5.1 Røde blodlegemer og hæmatokrit ",
	      "2.5.2 Hvide blodlegemer og blodplader ",
	      "2.5.3 Plasma"
	  ]},
	 {"name": "2.6 Sammenfatning på blodkredsløbet ",
	  "sub": [
	  ]},
	 {"name": "2.7 Hjertet",
	  "sub": [
	      "2.7.1 Hjertets eget kredsløb",
	      "2.7.2 Hjertets sammentrækning",
	      "2.7.3 Blodtryk",
	      "2.7.4 Puls, slagvolumen og minutvolumen ",
	      "2.7.5 EKG",
	      "2.7.6 Hjerteklapper og hjertelyd"
	  ]},
	 {"name": "2.8 Reguleringsmekanismer",
	  "sub": [
	      "2.8.1 Regulering af åndedrættet ",
	      "2.8.2 Regulering af blodkredsløbet"
	  ]},
	 {"name": "2.9 Bjergbestigning",
	  "sub": [
	      "2.9.1 Fysiske udfordringer i højden ",
	      "2.9.2 Fysiologiske ændringer",
	      "2.9.3 Højdesyge"
	  ]},
	 {"name": "2.10 Dykning",
	  "sub": [
	      "2.10.1 Dybde og tryk",
	      "2.10.2 Fridykning",
	      "2.10.3 Dykning med komprimeret luft"
	  ]},
	 {"name": "2.11 Sygdomme i åndedrætssystemet",
	  "sub": [
	      "2.11.1 Nikotin, CO og tjære ",
	      "2.11.2 KOL",
	      "2.11.3 Lungekræft",
	      "2.11.4 Rygestop",
	      "2.11.5 Specielle tilstande"
	  ]},
	 {"name": "2.12 Sygdomme i blodkredsløbet",
	  "sub": [
	      "2.12.1 Hjertefejl",
	      "2.12.2 Åreforkalkning og blodpropper ",
	      "2.12.3 Aneurismer",
	      "2.12.4 Åreknuder"
	  ]},
	 {"name": "2.13 Førstehjælp",
	  "sub": []},
	 {"name": "Resume",
	  "sub": []}	 

     ]
    });


db.contents.save(
    {"name": "Kapitel 3: Kost, fordøjelse og sundhed",
     "sub": [
	 {"name": "3.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "3.2 Kostens sammensætning",
	  "sub": [
	      "3.2.1 Kulhydrat, fedt og protein",
	      "3.2.2 Energibetragtninger 3.2.3 Mineraler",
	      "3.2.4 Vitaminer",
	      "3.2.5 Kostfibre",
	      "3.2.6 Kosttilskud",
	      "3.2.7 Væske",
	      "3.2.8 Alkohol",
	      "3.2.9 Kost og styrketræning",
	      "3.2.10 Kost og konditionstræning",
	      "3.2.11 Appetitregulering"
	  ]},
	 {"name": "3.3 Fordøjelsen",
	  "sub": [
	      "3.3.1 Transport af føden",
	      "3.3.2 Mundhulen",
	      "3.3.3 Mavesækken",
	      "3.3.4 Tolvfingertarmen",
	      "3.3.5 Tyndtarmen",
	      "3.3.6 Tyktarmen",
	      "3.3.7 Endetarmen"
	  ]},
	 {"name": "3.4 Sundhedsparametre",
	  "sub": [
	      "3.4.1 BMI",
	      "3.4.2 Fedtprocent",
	      "3.4.3 Talje-hofte-forhold",
	      "3.4.4 Taljeomkreds",
	      "3.4.5 Idealvægt",
	      "3.4.6 Kondital",
	      "3.4.7 Kolesterol og blodfedt",
	      "3.4.8 Blodtryk",
	      "3.4.9 Body age"
	  ]},
	 {"name": "3.5 Sundhed og ernæring",
	  "sub": [
	      "3.5.1 Overvægt og fedme",
	      "3.5.2 Slankekure",
	      "3.5.3 Fedmeoperation",
	      "3.5.4 Spiseforstyrrelser",
	      "3.5.5 Vegetarer og veganere",
	      "3.5.6 Raw-food og stenalderkost",
	      "3.5.7 Kulturelle vaner",
	      "3.5.8 Kvalme og opkast",
	      "3.5.9 Laktoseintolerans",
	      "3.5.10 Diarre",
	      "3.5.11 Light-produkter"
	  ]},
	 {"name": "3.6 Sygdomme i fordøjelseskanalen",
	  "sub": [
	      "3.6.1 Mavesår og mavekræft",
	      "3.6.2 Problemer i tyktarmen",
	      "3.6.3 Kræft i tyktarmen og endetarmen",
	      "3.6.4 Blindtarmsbetændelse",
	      "3.6.5 Galdesten",
	      "3.6.6 Betændelse og kræft i bugspytkirtlen"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 4: Lever og nyrer",
     "sub": [
	 {
	     "name": "4.1 Generelt",
	     "sub": []},
	 {"name": "4.2 Leveren og dens funktioner",
	  "sub": [
	      "4.2.1 Leverens galdeproduktion",
	      "4.2.2 Leveren og blodsukkeret",
	      "4.2.3 Leveren og fordøjelsen",
	      "4.2.4 Leveren og blodet",
	      "4.2.5 Leveren og skadelige stoffer",
	      "4.2.6 Leveren og urinstofdannelse",
	      "4.2.7 Leversygdomme"
	  ]},
	 {"name": "4.3 Nyrerne og deres funktioner",
	  "sub": [
	      "4.3.1 Nyrernes opbygning og blodforsyning",
	      "4.3.2 Nyrernes funktion",
	      "4.3.3 Nyresygdomme og dialyse"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 5: Immunforsvaret",
     "sub": [
	 {"name": "5.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "5.2 Det medfødte forsvar",
	  "sub": [
	      "5.2.1 Det passive forsvar",
	      "5.2.2 Det aktive forsvar"
	  ]},
	 {"name": "5.3 Det adaptive forsvar",
	  "sub": [
	      "5.3.1 Makrofager",
	      "5.3.2 T-lymfocytter",
	      "5.3.3 B-lymfocytter",
	      "5.3.4 Antigener og antistoffer",
	      "5.3.5 Feber",
		  "5.3.6 Regulering af immunforsvaret"
	  ]},
	 {"name": "5.4 Immunforsvaret og sundhed",
	  "sub": [
	      "5.4.1 Særligt om virusinfektioner",
	      "5.4.2 Særligt om bakterieinfektioner",
	      "5.4.3 Andre infektioner",
	      "5.4.4 Vaccinationer",
	      "5.4.5 Serumbehandling",
	      "5.4.6 Transplantationer",
	      "5.4.7 Allergi",
	      "5.4.8 Medfødte immundefekter",
	      "5.4.9 Erhvervet immundefekt (HIV)",
	      "5.4.10 Autoimmune sygdomme",
	      "5.4.11 Kostens betydning",
	      "5.4.12 Kropstemperaturens betydning",
	      "5.4.13 Alderens betydning",
	      "5.4.14 Stress",
	      "5.4.15 Omgivelsernes betydning",
	      "5.4.16 Psykologiens betydning",
	      "5.4.17 Partnervalg",
		  "5.4.18 Søvnens betydning"
	  ]},
	 {"name": "Resume",
	  "sub": []}	 
     ]
    });

db.contents.save(
    {"name": "Kapitel 6: Hormonsystemet",
     "sub": [
	 {"name": "6.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "6.2 Endokrine kirtler",
	  "sub": [
	      "6.2.1 Parakrine hormoner (lokalhormoner)"
	  ]},
	 {"name": "6.3 Typer af hormoner",
	  "sub": [
	      "6.3.1 Hormoner hos mennesket",
	      "6.3.2 Hormoner hos andre organismer"
	  ]},
	 {"name": "6.4 Hormonregulering",
	  "sub": [
	      "6.4.1 Den simple regulering",
	      "6.4.2 Den komplicerede regulering"
	  ]},
	 {"name": "6.5 Hormonernes receptorer",
	  "sub": [
	  ]},
	 {"name": "6.6 Hormoner og sundhed",
	  "sub": [
	      "6.6.1 Diabetes type I",
	      "6.6.2 Diabetes type II",
	      "6.6.3 Fejl i skjoldbruskkirtlens regulering",
	      "6.6.4 Fejl i binyrernes regulering",
	      "6.6.5 Medicinsk hormonbehandling",
	      "6.6.6 Hormoner og døgnrytme"
	  ]},
	 {"name": "6.7 Hormonlignende stoffer",
	  "sub": [
	      "6.7.1 Hormonforstyrrende stoffer og dyr",
	      "6.7.2 Hormonforstyrrende stoffer og mennesker",
	      "6.7.3 Strategier"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 7: Sexologi",
     "sub": [
	 {"name": "7.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "7.2 De hanlige kønsorganer",
	  "sub": [
	      "7.2.1 Udviklingen i fosterlivet",
	      "7.2.2 Opbygning og funktion",
	      "7.2.3 De hanlige hormoner"
	  ]},
	 {"name": "7.3 De hunlige kønsorganer",
	  "sub": [
	      "7.3.1 Udviklingen i fosterlivet",
	      "7.3.2 Opbygning og funktion",
	      "7.3.3 De hunlige hormoner",
	      "7.3.4 Menstruationscyklus",
	      "7.3.5 Hormoner og menstruationscyklus",
	      "7.3.6 Smerter og uregelmæssig menstruation"
	  ]},
	 {"name": "7.4 Graviditet og fosterudvikling",
	  "sub": [
	      "7.4.1 Befrugtning",
	      "7.4.2 Fosterudvikling",
	      "7.4.3 Graviditet uden for livmoderen",
	      "7.4.4. Mola",
	      "7.4.5 Fosterdiagnostik",
	      "7.4.6 Fosterdiagnostik"
	  ]},
	 {"name": "7.5 Fødslen og det nyfødte barn",
	  "sub": [
	      "7.5.1 Fødslen",
	      "7.5.2 Det nyfødte barn",
	      "7.5.3 For tidligt fødte børn",
	      "7.5.4 Abort"
	  ]},
	 {"name": "7.6 Fertilitetsproblemer ",
	  "sub": [
	  ]},
	 {"name": "7.7 Prævention",
	  "sub": [
	      "7.7.1 P-piller",
	      "7.7.2 Minipiller",
	      "7.7.3 Fortrydelsespiller/dagen-derpå-pille",
	      "7.7.4 Spiral",
	      "7.7.5 Sæddræbende creme",
	      "7.7.6 Pessar",
	      "7.7.7 Femidom",
	      "7.7.8 Kondom",
	      "7.7.9 Sterilisation",
	      "7.7.10 Afbrudt samleje"
	  ]},
	 {"name": "7.8 Seksuelt overførte sygdomme",
	  "sub": [
	      "7.8.1 Klamydia og Mycoplasma genitialum",
	      "7.8.2 Gonorre",
	      "7.8.3 Kønsvorter og HPV",
	      "7.8.4 Syfillis",
	      "7.8.5 Herpes",
	      "7.8.6 AIDS"
	  ]}, 

	 {"name": "7.9 Alternativ seksualitet",
	  "sub": [
	      "7.9.1 Homo- og transseksualitet",
	      "7.9.2 Transvestisme, hermafroditter og AIS"
	  ]},
	 {"name": "7.10 Myter og fakta",
	  "sub": [
	      "7.10.1 Størrelsen og formen",
	      "7.10.2 Forhudsforsnævring",
	      "7.10.3 Impotens og mødom",
	      "7.10.4 Onani, debut og antal sexpartnere",
	      "7.10.5 Orgasme og orgasmejagt"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    }); 


db.contents.save(
    {"name": "Kapitel 8: Nervesystemet",
     "sub": [
	 {"name": "8.1 Generelt",
	  "sub": []},
	 {"name": "8.2 Nervevæv",
	  "sub": [
	      "8.2.1 Neuroner",
	      "8.2.2 Gliaceller"
	  ]},
	 {"name": "8.3 Nervesignaler",
	  "sub": [
	      "8.3.1 Det hvilende neuron",
	      "8.3.2 Det aktive neuron: Aktionspotentialet",
	      "8.3.3 Summation",
	      "8.3.4 Aktionspotentialets vandring",
	      "8.3.5 Synapsen"
	  ]},
	 {"name": "8.4 Sanseceller",
	  "sub": [
	      "8.4.1 Følesansen",
	      "8.4.2 Lugtesansen",
	      "8.4.3 Smagssansen",
	      "8.4.4 Høre- og ligevægtssansen",
	      "8.4.5 Synssansen"
	  ]},
	 {"name": "8.5 Hjerne og rygmarven",
	  "sub": [
	      "8.5.1 Hjernestammen",
	      "8.5.2 Storhjernen",
	      "8.5.3 Lillehjernen",
	      "8.5.4 Rygmarven",
	      "8.5.5 Læring",
	      "8.5.6 Hukommelse",
	      "8.5.7 Intelligens",
	      "8.5.8 Bevidsthed",
	      "8.5.9 Søvn"
	  ]},
	 {"name": "8.6 Kemiske påvirkninger af nervesystemet",
	  "sub": [
	      "8.6.1 Alkohol",
	      "8.6.2 Hash",
	      "8.6.3 Ecstasy",
	      "8.6.4 Kokain",
	      "8.6.5 Amfetamin og khta",
	      "8.6.6 Opioider (morfin, heroin, kodein, metadon",
	      "8.6.7 Hallucinogener",
	      "8.6.8 Fantasy",
	      "8.6.9 Benzodiazepiner",
	      "8.6.10 Motion",
	      "8.6.11 Nervegifte",
		  "8.6.12 Nikotin",
		  "8.6.13 Rohypnol"
	  ]},
	 {"name": "8.7 Sygdomme i nervesystemet",
	  "sub": [
	      "8.7.1 Blodpropper og hjerneblødninger",
	      "8.7.2 Meningitis",
	      "8.7.3 Parkinsson syge, Alzheimer og demens",
	      "8.7.4 Sklerose, ALS og Guillan-Barres syndrom",
	      "8.7.5 Epilepsi, migræne og andre hovedpiner",
	      "8.7.6 Psykiske lidelser",
	      "8.7.7 Andre lidelser"
	  ]},
	 {"name": "Resume",
	  "sub": []}

     ]
    });

db.contents.save(
    {"name": "Kapitel 9: Muskler",
     "sub": [
	 {"name": "9.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "9.2 Tværstribet muskulatur",
	  "sub": [
	      "9.2.1 Opbygning",
	      "9.2.2 Muskelkontraktion",
	      "9.2.3 Muskelfibertypesammensætning",
	      "9.2.4 Mekaniske forhold",
	      "9.2.5 Muskler hos mænd og kvinder",
	      "9.2.6 Bevægelse af kroppen",
	      "9.2.7 Muskeltræthed",
	      "9.2.8 Muskelømhed",
	      "9.2.9 Muskelkramper og sidesting"
	  ]},
	 {"name": "9.3 Anden muskulatur",
	  "sub": [
	      "9.3.1 Glat muskulatur",
	      "9.3.2 Hjertemuskulatur"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 10: Arbejdsfysiologi",
     "sub": [
	 {"name": "10.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "10.2 Den genetiske arv",
	  "sub": [
	      "10.2.1 Kønsforskelle",
	      "10.2.2 Alder",
	      "10.2.3 Muskelfibertype",
	      "10.2.4 Andet"
	  ]},
	 {"name": "10.3 Energiproduktion under arbejde",
	  "sub": [
	      "10.3.1 Iltdeficit-periode",
	      "10.3.2 Steady state",
	      "10.3.3 Iltgæld-periode",
	      "10.3.4 RQ og fedtforbrænding",
	      "10.3.5 Afterburn"
	  ]},
	 {"name": "10.4 Fra hvile til arbejde",
	  "sub": [
	  ]},
	 {"name": "10.5 Arbejde i kulde og varme",
	  "sub": [
	      "10.5.1 Varme omgivelser",
	      "10.5.2 Kolde omgivelser"
	  ]},
	 {"name": "10.6 Træningslære",
	  "sub": [
	      "10.6.1 Opvarmning og nedvarmning",
	      "10.6.2 Konditionstræning (aerob træning)",
	      "10.6.3 Sprinttræning (anaerob træning)",
	      "10.6.4 Styrketræning (anaerob træning)",
	      "10.6.5 Smidighedstræning",
	      "10.6.6 Fysiske tests"
	  ]},
	 {"name": "10.7 Idrætsskader",
	  "sub": [
	      "10.7.1 Den akutte behandling",
	      "10.7.2 Efterbehandling og genoptræning",
	      "10.7.3 Skader i knæet",
	      "10.7.4 Fibersprængning og trælå",
	      "10.7.5 Lyskenskade",
	      "10.7.6 Skinnebensbetændelse",
	      "10.7.7 Skader i akillessenen",
	      "10.7.8 Hypermobilitet"
	  ]},
	 {"name": "10.8 Fysisk aktivitet og sundhed",
	  "sub": [
	      "10.8.1 Fysisk aktivitet hos børn og unge",
	      "10.8.2 Fysisk aktivitet hos voksne",
	      "10.8.3 Fysisk aktivitet hos ældre",
	      "10.8.4 Effekter af fysisk aktivitet"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 11: Doping",
     "sub": [
	 {"name": "11.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "11.2 Dopinglisten",
	  "sub": [
	  ]},
	 {"name": "11.3 Præstationsfremmende stoffer og metoder",
	  "sub": [
	      "11.3.1 ATP og kreatin",
	      "11.3.2 EPO",
	      "11.3.3 Bloddoping",
	      "11.3.4 Anabolske steroider",
	      "11.3.5 Væksthormon",
	      "11.3.6 Betablokkere",
	      "11.3.7 Amfetamin og efedrin",
	      "11.3.8 Vanddrivende stoffer",
	      "11.3.9 Sløringsstoffer",
	      "11.3.10 Ren ilt",
	      "11.3.11 Bikarbonat og fosfat",
	      "11.3.12 Andre præparater",
	      "11.3.13 Mand eller kvinde?",
	      "11.3.14 Fysisk manipulation",
	      "11.3.15 Placebo",
	      "11.3.16 Gendoping"
	  ]},
	 {"name": "11.4 Dopingtests og straf",
	  "sub": [
	  ]},
	 {"name": "11.5 Skal doping frigives?",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 12: Dyrefysiologi",
     "sub": [
	 {"name": "12.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "12.2 Dyrerigets inddeling",
	  "sub": [
	      "12.2.1 Hvirveldyr",
	      "12.2.2 Hvirvelløse dyr"
	  ]},
	 {"name": "12.3 Vekselvarme og ensvarme dyr",
	  "sub": [
	      "12.3.1 Vekselvarme dyr og temperaturregulering",
	      "12.3.2 Ensvarme dyr og temperaturregulering",
	      "12.3.3 Dvale og vintersøvn"
	  ]},
	 {"name": "12.4 Hvaler",
	  "sub": [
	      "12.4.1 Åndedrætsststeme",
	      "12.4.2 Blodkredsløbet",
	      "12.4.3 Biosonar og hvalsang",
	      "12.4.4 Selve dykket"
	  ]},
	 {"name": "12.5 Fugle",
	  "sub": [
	      "12.5.1 Blodkredsløbetet",
	      "12.5.2 Åndedrætssystemet",
	      "12.5.3 Fordøjelsen m.m."
	  ]},
	 {"name": "12.6 Skildpadder",
	  "sub": [
	      "12.6.1 Energibesparelse",
	      "12.6.2 Skjoldets rolle"
	  ]},
	 {"name": "12.7 Fisk",
	  "sub": [
	      "12.7.1 Blodkredsløbet",
	      "12.7.2 Gæller",
	      "12.7.3 Svømmeblæren m.m."
	  ]},
	 {"name": "12.8 Insekter",
	  "sub": [
	      "12.8.1 Blodkredsløbet",
	      "12.8.2 Trakeer"
	  ]},
	   {"name": "12.9 De vildeste dyr",
	  "sub": [
	      "12.9.1 Rovfugle",
	      "12.9.2 De store katte",
	      "12.9.3 Pingviner",
	      "12.9.4 Bjørne",
	      "12.9.5 Myrer",
	      "12.9.6 Ræve",
	      "12.9.7 Elefanter",
	      "12.9.8 Store aber",
	      "12.9.9 Krokodiller",
	      "12.9.10 Flagermus",
	      "12.9.11 Slanger"
	  ]},

	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 13: Kulhydrater",
     "sub": [
	 {"name": "13.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "13.2 Monosakkarider",
	  "sub": [
	      "13.2.1 Kemisk opbygning",
	      "13.2.2 Isomeri",
	      "13.2.3 Monosakkaridernes ringslutning",
	      "13.2.4 Biologisk betydning"
	  ]},
	 {"name": "13.3 Disakkarider",
	  "sub": [
	      "13.3.1 Kemisk opbygning",
	      "13.3.2 Biologisk betydning"
	  ]},
	 {"name": "13.4 Polysakkarider",
	  "sub": [
	      "13.4.1 Kemisk opbygning",
	      "13.4.2 Biologisk betydning"
	  ]},

	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 14: Fedtstoffer",
     "sub": [
	 {"name": "14.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "14.2 Fedt som energikilde",
	  "sub": [
	      "14.2.1 Fedtsyrer",
	      "14.2.2 Triglycerider",
	      "14.2.3 Fedtforbrænding"
	  ]},
	 {"name": "14.3 Fedt i cellemembranen",
	  "sub": [
	      "14.3.1 Fosfolipider",
	      "14.3.2 Kolesterol"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 15: Aminosyrer og proteiner",
     "sub": [
	 {"name": "15.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "15.2 Aminosyrer",
	  "sub": [
	      "15.2.1 Struktur",
	      "15.2.2 Kemiske egenskaber"
	  ]},
	 {"name": "15.3 Proteiner",
	  "sub": [
	      "15.3.1 Proteinstruktur",
	      "15.3.2 Kemiske egenskaber",
	      "15.3.3 Proteinsyntesen"
	  ]},

	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 16: Enzymer",
     "sub": [
	 {"name": "16.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "16.2 Enzymers virkemåd",
	  "sub": [
	  ]},
	 {"name": "16.3 Enzymernes aktivitet",
	  "sub": [
	      "16.3.1 Afhængighed af temperaturen",
	      "16.3.2 Afhængighed af pH",
	      "16.3.3 Afhængighed af koncentrationer",
	      "16.3.4 Afhængighed af aktivatorer",
	      "16.3.5 Afhængighed af inhibitorer"
	  ]},
	 {"name": "16.4 Inddeling af enzymerne i 6 grupper",
	  "sub": [
	      "16.4.1 Gruppe 1: Oxido-reduktaser",
	      "16.4.2 Gruppe 2: Transferaser",
	      "16.4.3 Gruppe 3: Isomeraser",
	      "16.4.3 Gruppe 4: Lyaser",
	      "16.4.5 Gruppe 5: Ligaser eller syntetaser",
	      "16.4.6 Gruppe 6: Hydrolaser"
	  ]},
	 {"name": "16.5 Coenzymerne og deres betydning",
	  "sub": [
	      "16.5.1 Hydrogenoverførende coenzymer",
	      "16.5.2 Gruppeoverførende coenzymer",
	      "16.5.3 Elektronoverførende coenzymer"
	  ]},
	 {"name": "16.6 RNA-baserede enzymer",
	  "sub": [
	  ]},
	 {"name": "16.7 Enzymers rolle i sygdom og sundhed",
	  "sub": [
	  ]},
	 {"name": "16.8 Anvendelse af enzymer i industrien",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 17: Katabolismen",
     "sub": [
	 {"name": "17.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "17.2 ATP",
	  "sub": [
	  ]},
	 {"name": "17.3 Nedbrydning af kulhydrat",
	  "sub": [
	      "17.3.1 Glykolysen",
	      "17.3.2 Gæring",
	      "17.3.3 Krebs’ cyklus",
	      "17.3.4 Respirationskæden",
	      "17.3.5 ATP-dannelse",
	      "17.3.6 ATP-regnskab"
	  ]},
	 {"name": "17.4 Nedbrydning af fedt",
	  "sub": [
	      "17.4.1 Glycerol",
	      "17.4.2 Fedtsyrer",
	      "17.4.3 ATP-regnskab",
	      "17.4.4 Særligt om fedtforbrænding"
	  ]},
	 {"name": "17.5 Nedbrydning af protein",
	  "sub": [
	      "17.5.1 Transaminering og deaminering",
	      "17.5.2 Urinstofcyklus",
	      "17.5.3 ATP-regnskab"
	  ]},
	 {"name": "17.6 Andre katabolske processer",
	  "sub": [
	  ]},
	 {"name": "17.7 Sammenfatning på katabolisme",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 18: Anabolismen",
     "sub": [
	 {"name": "18.1 Generelt",
	  "sub": [
	  ]},
	 {"name": "18.2 Dannelsen af kulhydrater hos dyr",
	  "sub": [
	      "18.2.1 Glukoneogenesen",
	      "18.2.2 Regulering"
	  ]},
	 {"name": "18.3 Dannelsen af kulhydrater hos planter",
	  "sub": [
	      "18.3.1 Fotosyntesens lysprocesser",
	      "18.3.2 Fotosyntesens mørkeprocesser",
	      "18.3.3 Speciel fotosyntese"
	  ]},
	 {"name": "18.4 Dannelse af andre stoffer",
	  "sub": [
	      "18.4.1 Fedtstoffer",
	      "18.4.2 Aminosyrer"
	  ]},
	 {"name": "18.5 Anabolismen og katabolismen",
	  "sub": [
	  ]},

	 {"name": "Resume",
	  "sub": []}
     ]
    });






db.contents.save(
    {"name": "Kapitel 19: Kromosomer og gener",
     "sub": [
	 {"name": "19.1 Generelt",
	  "sub": []},

	 {"name": "19.2 Kromosomernes opbygning",
	  "sub": []},

	 {"name": "19.3 DNA",
	  "sub": []},

	 {"name": "19.4 DNA-replikation",
	  "sub": []},

	 {"name": "19.5 Mitosen",
	  "sub": []},

	 {"name": "19.6 Meiosen",
	  "sub": [
	      "19.6.1 Første meiotiske deling",
	      "19.6.2 Anden meiotiske deling"
	  ]},
	 {"name": "19.7 Genom og gener",
	  "sub": [
	      "19.7.1 Proteinkodende gener",
	      "19.7.2 RNA-gener",
	      "19.7.3 Mellem generne",
	      "19.7.4 Genomets størrelse"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 20: Proteinsyntesen",
     "sub": [
	 {"name": "20.1 Generelt",
	  "sub": []},
	 {"name": "20.2 RNA",
	  "sub": []},
	 {"name": "20.3 Transkription",
	  "sub": [
	      "20.3.1 mRNA",
	      "20.3.2 Spliceosomer, exons og promotorer",
	      "20.3.3 tRNA",
	      "20.3.4 rRNA og snRNAs"
	  ]},
	 {"name": "20.4 Translation",
	  "sub": []},
	 {"name": "20.5 Den genetiske kode",
	  "sub": []},
	 {"name": "20.6 Genregulering",
	  "sub": [
	      "20.6.1 Nedregulering af gener",
	      "20.6.2 Opregulering af gener"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 21: Nedarvninger",
     "sub": [
	 {"name": "21.1 Generelt",
	  "sub": []},
	 {"name": "21.2 Autosomal et-gens nedarvning",
	  "sub": [
	      "21.2.1 Dominant/recessiv",
	      "21.2.2 Ufuldstændig dominans og codominans",
	      "21.2.3 Multiple alleler",
	      "21.2.4 Letale gener",
	      "21.2.5 Analysekrydsning"
	  ]},
	 {"name": "21.3 Autosomal to-gens nedarvning",
	  "sub": [
	      "21.3.1 Dominant/recessiv",
	      "21.3.2 Epistasi",
	      "21.3.3 Koblede gener"
	  ]},
	 {"name": "21.4 Statistiske tests og biologi",
	  "sub": [
	      "21.4.1 Møntkast",
	      "21.4.2 Spiringsforsøg"
	  ]},
	 {"name": "21.5 Autosomal polygen nedarvning",
	  "sub": []},
	 {"name": "21.6 Kønsbundet nedarvning",
	  "sub": [
	      "21.6.1 X-bunden nedarvning",
	      "21.6.2 Y-bunden nedarvning",
	      "21.6.3 Lyon-hypotesen"
	  ]},
	 {"name": "21.7 Specielle nedarvningsformer",
	  "sub": [
	      "21.7.1 Maternel nedarvning",
	      "21.7.2 Pleiotropi",
	      "21.7.3 Ufuldstændig penetrans",
	      "21.7.4 Imprinting (prægning)",
	      "21.7.5 Gener og kønsforskelle",
	      "21.7.6 Polyploidier",
	      "21.7.7 Mosaikker og kimærer"
	  ]},
	 {"name": "21.8 Stamtavleanalyser",
	  "sub": []},
	 {"name": "21.9 Populationsgenetik",
	  "sub": []},
	 {"name": "21.10 Gener er ikke alt",
	  "sub": [
	      "21.10.1 Arv og miljø",
	      "21.10.2 Epigenetik"
	  ]},
	 {"name": "Resume",
	  "sub": []},
     ]
    });


db.contents.save(
    {"name": "Kapitel 22: Mutationer og kræft",
     "sub": [
	 {"name": "22.1 Generelt",
	  "sub": []},
	 {"name": "22.2 Mindre DNA-mutationer",
	  "sub": [
	      "22.2.1 Substitutions-mutation",
	      "22.2.2 Deletion og insertion",
	      "22.2.3 Tavs eller sygdomsfremkaldende?",
	      "22.2.4 Dynamiske mutationer"
	  ]},
	 {"name": "22.3 Kromosommutationer",
	  "sub": [
	      "22.3.1 Deletion",
	      "22.3.2 Duplikation",
	      "22.3.3 Inversion",
	      "22.3.4 Translokation"
	  ]},
	 {"name": "22.4 Kromosomtalsmutationer",
	  "sub": [
	      "22.4.1 Kønskromosomalt monosomi",
	      "22.4.2 Kønskromosomalt trisomi",
	      "22.4.3 Autosomalt monosomi",
	      "22.4.4 Autosomalt trisomi",
	      "22.4.5 Ringkromosom",
	      "22.4.6 Isokromosom"
	  ]},
	 {"name": "22.5 Mutagener",
	  "sub": [
	      "22.5.1 Kemiske mutagener",
	      "22.5.2 Fysiske mutagener",
	      "22.5.3 Test for mutagen virkning"
	  ]},
	 {"name": "22.6 Kræft",
	  "sub": [
	      "22.6.1 Hvem får kræft?",
	      "22.6.2 Hvorfor får man kræft?",
	      "22.6.3 Svulstdannelse og diagnose",
	      "22.6.4 Brystkræft",
	      "22.6.5 Prostatakræft",
	      "22.6.6 Testikelkræft",
	      "22.6.7 Livmoderhalskræft",
	      "22.6.8 Modermærkekræft og hudkræft",
	      "22.6.9 Tarmkræft",
	      "22.6.10 Lymfekræft og leukæmi",
	      "22.6.11 Lungekræft",
	      "22.6.12 Kræftbehandling",
	      "22.6.13 Forebyggelse",
	      "22.6.14 Ny forskning"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 23: Genteknologi",
     "sub": [
	 {"name": "23.1 Generelt",
	  "sub": []},
	 {"name": "23.2 Grundlæggende genteknologi",
	  "sub": [
	      "23.2.1 Isolering af DNA",
	      "23.2.2 PCR",
	      "23.2.3 Elektroforese",
	      "23.2.4 Generel DNA-påvisning",
	      "23.2.5 Sekvens-specifik DNA-påvisning",
	      "23.2.6 FISH-teknikken"
	  ]},
	 {"name": "23.3 DNA-sekvensanalyser",
	  "sub": [
	      "23.3.1 Maxam-Gilbert-sekvensanalyse",
	      "23.3.2 Sanger-sekvensanalyse",
	      "23.3.3 Shotgun-metoden",
	      "23.3.4 Next Generation Sequencing (NGS)"
	  ]},
	 {"name": "23.4 DNA-profiler",
	  "sub": [
	      "23.4.1 RFLP",
	      "23.4.2 Repetitivt DNA",
	      "23.4.3 PCR-baseret metode"
	  ]},
	 {"name": "23.5 Fremstilling af DNA",
	  "sub": [
	      "23.5.1 cDNA",
	      "23.5.2 Syntetisk DNA"
	  ]},
	 {"name": "23.6 Andre genteknologiske metoder",
	  "sub": [
	      "23.6.1 Cellehybridisering",
	      "23.6.2 DNA-biblioteker",
	      "23.6.3 DNA-chips",
	      "23.6.4 Antisense-teknik",
	      "23.6.5 Genterapi og RNAi",
	      "23.6.6 Kloning"
	  ]},
	 {"name": "23.7 Gensplejsning",
	  "sub": [
	      "23.7.1 Fra donor til vært",
	      "23.7.2 Identifikation",
	      "23.7.3 Gensplejsning af planter",
	      "23.7.4 Mere om transgene planter",
	      "23.7.5 Mere om transgene dyr",
	      "23.7.6 Mere om transgene mennesker",
	      "23.7.7 Etik"
	  ]},
	   {"name": "23.8 CRISPR/Cas9",
	  "sub": [
	      "23.8.1 Bakteriers immunforsvar",
	      "23.8.2 Knock out",
	      "23.8.3 Knock in",
	  ]},
	 {"name": "23.9 Genetisk udredning - et eksempel",
	  "sub": [
	      "23.9.1 MCAD",
	      "23.9.2 Genetisk diagnostik af sygdommen",
	      "23.9.3 Mutationer og RNA",
	      "23.9.4 Mutationer og proteinfunktion"
	  ]},
	   {"name": "23.10 Bioetik",
	  "sub": [
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 24: Evolution og bioinformatik",
     "sub": [
   {"name": "24.1 Generelt",
    "sub": []},
   {"name": "24.2 Det første liv",
    "sub": [
	"24.2.1 Den tidlige Jord",
	"24.2.2 Det første liv - prokaryoter",
	"24.2.3 Eukaryoter opstår",
	"24.2.4 De store katastrofers tid"
    ]},
   {"name": "24.3 Evolution",
    "sub": [
	"24.3.1 Den naturlige selektion",
	"24.3.2 Den seksuelle selektion",
	"24.3.3 Hjælp til selvhjælp",
	"24.3.4 Dannelse af nye arter",
	"24.3.5 Kreationisme"
    ]},
   {"name": "24.4 Menneskets evolution",
    "sub": [
	"24.4.1 Australopithecus- og homo-slægten",
	"24.4.2 Homo-slægten",
	"24.4.3 Udvandringerne fra Afrika",
	"24.4.4 Homo sapiens i verden",
	"24.4.5 Hvorfor ser vi så forskellige ud?",
	"24.4.6 Udvikler mennesket sig stadigvæk?",
	"24.4.7 Tilfældigheder"
    ]},
   {"name": "24.5 Bioinformatik",
    "sub": [
	"24.5.1 Parvis alignment (DNA)",
	"24.5.2 Parvis alignment (Aminosyrer)",
	"24.5.3 Scoresystem",
	"24.5.4 Multiple alignments",
	"24.5.5 Stamtræer og slægtskab",
	"24.5.6 Gen- og protein-jagt i databaser"
    ]},
   {"name": "Resume",
    "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 25: Bioteknologi",
     "sub": [
	 {"name": "25.1 Generelt",
	  "sub": []},
	 {"name": "25.2 Enzymproduktion",
	  "sub": [
	      "25.2.1 Generelt",
	      "25.2.2 Vaskemidler",
	      "25.2.3 Personlig hygiejne",
	      "25.2.4 Tekstilproduktion"
	  ]},
	 {"name": "25.3 Øl- og vin-produktion",
	  "sub": [
	      "25.3.1 Generelt",
	      "25.3.2 Ølproduktion",
	      "25.3.3 Vinproduktion"
	  ]},
	 {"name": "25.4 Fødevareproduktion",
	  "sub": [
	      "25.4.1 Surmælksprodukter",
	      "25.4.2 Osteproduktion",
	      "25.4.3 Functional foods"
	  ]},
	 {"name": "25.5 Biogas og biobrændsel",
	  "sub": []},
	 {"name": "25.6 Lægemidler og teknologi",
	  "sub": [
	      "25.6.1 Generelt",
	      "25.6.2 Lægemidler ind i cellerne",
	      "25.6.3 Fremtidens lægemidler: nanomedicin",
	      "25.6.4 Nye former for antibiotika",
	      "25.6.5 Behandling med stamceller"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });


db.contents.save(
    {"name": "Kapitel 26: Grundlæggende økologi",
     "sub": [
	 {"name": "26.1 Generelt",
	  "sub": []},

	 {"name": "26.2 Energi i biosfæren",
	  "sub": []},

	 {"name": "26.3 Produktion",
	  "sub": [
	      "26.3.1 Primærproduktion",
	      "26.3.2 Måling af primærproduktion",
	      "26.3.3 Påvirkning af primærproduktion",
	      "26.3.4 Sekundærproduktion",
	      "26.3.5 Måling af sekundærproduktion"
	  ]},

	 {"name": "26.4 Energistrømme",
	  "sub": [
	      "26.4.1 Fødekæder generelt",
	      "26.4.2 Fødekæder og energistrøm",
	      "26.4.3 Pyramider",
	      "26.4.4 Fødenet"
	  ]},
	 {"name": "26.5 Populationsbiologi",
	  "sub": [
	      "26.5.1 Habitat og niche",
	      "26.5.2 Begrænsende faktor",
	      "26.5.3 Populationsvækst",
	      "26.5.4 Populationsbestemmelser",
	      "26.5.5 Konkurrence",
	      "26.5.6 Prædation",
	      "26.5.7 Herbivori",
	      "26.5.8 Parasitisme og sygdomme",
	      "26.5.9 Skadedyrsbekæmpelse",
	      "26.5.10 Truede arter",
	      "26.5.11 Succession",
	      "26.5.12 Biodiversitet"
	  ]},
	 {"name": "26.6 Adfærdsbiologi",
	  "sub": [
	      "26.6.1 Alene eller i flok?",
	      "26.6.2 Territorier",
	      "26.6.3 Fouragering",
	      "26.6.4 Kuldstørrelser",
	      "26.6.5 Alfa-dyr",
	      "26.6.6 Har dyr personlighed?"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 27: Stofkredsløb",
     "sub": [
	 {"name": "27.1 Generelt",
	  "sub": []},

	 {"name": "27.2 De vigtige nedbrydere",
	  "sub": [
	      "27.2.1 Mere om bakterierne",
	      "27.2.2 Mere om svampene",
	      "27.2.3 Mere om større nedbrydere"
	  ]},
	 {"name": "27.3 Stofkredsløb",
	  "sub": [
	      "27.3.1 Kulstofkredsløbet",
	      "27.3.2 Kvælstofkredsløbet",
	      "27.3.3 Svovlkredsløbet",
	      "27.3.4 Fosforkredsløbet",
	      "27.3.5 Vandmolekylernes kredsløb"
	  ]},
	 {"name": "Resume",
	  "sub": []}
     ]
    });

db.contents.save(
    {"name": "Kapitel 28: Jordbund og plantefysiologi",
     "sub": [

	 {"name": "28.1 Generelt",
	  "sub": []},

	 {"name": "28.2 Jordbunden",
	  "sub": [
	      "28.2.1 Hvad er jord?",
	      "28.2.2 Jordkolloider",
	      "28.2.3 Jordbundstyper"
	  ]},
	 {"name": "28.3 Planter",
	  "sub": [
	      "28.3.1 Taxonomi",
	      "28.3.2 Mosser",
	      "28.3.3 Bregner og paderokker",
	      "28.3.4 Frøplanter",
	      "28.3.5 Blomsterplantens anatomi",
	      "28.3.6 Bestøvning, befrugtning og frugtdannelse"
	  ]},
	 {"name": "28.4 Optag og transport i planter",
	  "sub": [
	      "28.4.1 Optag og transport (næringssalte & vand)",
	      "28.4.2 Fotosyntese og transport af glukose",
	      "28.4.3 Planterne og jordens mikroorganismer"
	  ]},
	 {"name": "28.5 Problemer for jordbunden",
	  "sub": [
	      "28.5.1 Udvaskning",
	      "28.5.2 Gifte"
	  ]},
	 {"name": "Resume",
	  "sub": []},
     ]
    });

db.contents.save(
    {"name": "Kapitel 29: Forskellige Økosystemer",
     "sub": [

	 {"name": "29.1 Generelt",
	  "sub": []},

	 {"name": "29.2 Søen",
	  "sub": [
	      "29.2.1 Generelt",
	      "29.2.2 Lysforhold og pH-værdier",
	      "29.2.3 Ilt- og temperaturforhold",
	      "29.2.4 Søens planter",
	      "29.2.5 Søens dyr"
	  ]},
	 {"name": "29.3 Vandløbet",
	  "sub": [
	      "29.3.1 Generelt",
	      "29.3.2 Det naturlige vandløb",
	      "29.3.3 Vandløbets planter",
	      "29.3.4 Vandløbets dyr"
	  ]},
	 {"name": "29.4 Havet",
	  "sub": [
	      "29.4.1 Generelt",
	      "29.4.2 Havstrømme og bølger",
	      "29.4.3 Iltforhold, salinitet og pH-værdi",
	      "29.4.4 Havets planter",
	      "29.4.5 Havets dyr"
	  ]},
	 {"name": "29.5 Skoven",
	  "sub": [
	      "29.5.1 Generelt",
	      "29.5.2 Nåleskove",
	      "29.5.3 Løvskove",
	      "29.5.4 De tropiske regnskove"
	  ]},
	 {"name": "29.6 Ørkenen",
	  "sub": [
	      "29.6.1 Generelt",
	      "29.6.2 Klima og jordbund",
	      "29.6.3 Ørkenens planter",
	      "29.6.4 Ørkenens dyr"
	  ]},
	 {"name": "29.7 Polarområderne",
	  "sub": [
	      "29.7.1 Generelt",
	      "29.7.2 Arktis",
	      "29.7.3 Planteliv i Arktis",
	      "29.7.4 Dyreliv i Arktis",
	      "29.7.5 Antarktis",
	      "29.7.6 Planteliv i Antarktis",
	      "29.7.7 Dyreliv i Antarktis"
	  ]},
	 {"name": "29.8 Liv udenfor Jorden",
	  "sub": [
	      "29.8.1 Liv på andre planeter?",
	      "29.8.2 Livet uden tyngdekraft"
	  ]},
	 {"name": "Resume",
	  "sub": []},
     ]
    });

db.contents.save(
    {"name": "Kapitel 30: Forurening",
     "sub": [
	 {"name": "30.1 Generelt",
	  "sub": []},

	 {"name": "30.2 Vandforurening",
	  "sub": [
	      "30.2.1 Primær og sekundær forurening",
	      "30.2.2 Tungmetaller",
	      "30.2.3 Pesticider og andre giftige stoffer",
	      "30.2.4 Hormonforstyrrende stoffer",
	      "30.2.5 Forurening af søer",
	      "30.2.6 Forurening af vandløb",
	      "30.2.7 Forurening af havet",
	      "30.2.8 Forurening af grundvand"
	  ]},
	 {"name": "30.3 Vandrensning",
	  "sub": [
	      "30.3.1 Renseanlæg",
	      "30.3.2 Rodzoneanlæg",
	      "30.3.3 Rensning af drikkevand",
	      "30.3.4 Vandmiljøplaner"
	  ]},
	 {"name": "30.4 Luftforurening",
	  "sub": [
	      "30.4.1 Forurening med skadelige partikler",
	      "30.4.2 Forurening med radioaktive stoffer",
	      "30.4.3 Forsuring",
	      "30.4.4 Ozonlaget"
	  ]},
	 {"name": "30.5 Klimaforandringer",
	  "sub": [
	      "30.5.1 Drivhuseffekten",
	      "30.5.2 Kuldioxid og opvarmning",
	      "30.5.3 Solens rolle?",
	      "30.5.4 Opvarmningens effekter",
	      "30.5.5 Hvor stammer udledningen fra?",
	      "30.5.6 Hvad skal vi gøre?"
	  ]},
	 {"name": "30.6 Naturgenopretning",
	  "sub": []},

	 {"name": "Resume",
	  "sub": []},
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
