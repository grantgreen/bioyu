db = db.getSiblingDB('yubio_idc');

db.contents.drop();


db.contents.save(
    {
        "name": "Kapitel 1: Idræt og sundhed",
        "sub": [
        {
            "name": "1.1 Sundhedens ansigter",
            "sub": [
            ]
        },
        {
            "name": "1.2 Er jeg sund?",
            "sub": [
                "1.2.1 Arv & miljø",
                "1.2.2 KRAM",
                "1.2.3 Søvn",
                "1.2.4 Oplevet sundhed",
                "1.2.5 Et forskruet kropsideal",
                "1.2.6 Spiseforstyrrelser"
            ]
        },

        {
            "name": "1.3 Idræt og sundhed",
            "sub": [
                "1.3.1 Fysisk aktivitet hos børn & unge",
                "1.3.2 Fysisk aktivitet hos voksne",
                "1.3.3 Effekter af fysisk aktivitet",
                "1.3.4 Hvor mange, hvem & hvor?"
            ]
        },
         {
            "name": "1.4 Min sundhedsprofil",
            "sub": [
            ]
        },
        {
            "name": "Resume",
            "sub": [],
            "color":"#26213B"
        }
        ]
    });


db.contents.save(
    {
        "name": "Kapitel 2: Menneskets fysiologi",
        "sub": [
        {
            "name": "2.1 Indledning",
            "sub": []
        },
        {
            "name": "2.2 Åndedrætssystem og blodkredsløb",
            "sub": [
                "2.2.1 Åndedræt og vejrtrækning",
                "2.2.2 Blodkredsløb og puls",
                "2.2.3 Mere om blod",
                "2.2.4 Reguleringsmekanismer"
            ]
        },
        {
            "name": "2.3 Muskler, knogler og led",
            "sub": [
                "2.3.1 Musklernes opbygning og funktion",
                "2.3.2 Tre typer muskelarbejde",
                "2.3.3 Mere om muskelarbejde",
                "2.3.4 Nervesystemet og musklerne",
                "2.3.5 Anatomi"
            ]
        },
        {
            "name": "2.4 Kost og energi",
            "sub": [
                "2.4.1 Næringsstoffer og træning",
                "2.4.2 Dannelsen af ATP i Kroppen"
            ]
        },
         {
             "name": "Resume",
             "sub": [],
             "color":"#26213B"
         }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 3: Træningslære",
        "sub": [
        {
            "name": "3.1 Superkompensation",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "3.2 Arbejdets tre faser",
            "sub": []
        },
        {
            "name": "3.3 Opvarmning/nedvarmning",
            "sub": []
        },
        {
            "name": "3.4 Aerob træning",
            "sub": [
                "3.4.1 Kondital og udholdenhed",
                "3.4.2 Kontinuerlig træning",
                "3.4.3 Intervaltræning",
                "3.4.4 Mærkbare effekter",
            ]
        },
         {
             "name": "3.5 Anerob træning",
             "sub": []
         },
          {
              "name": "3.6 Styrketræning",
              "sub": [
                  "3.6.1 Muskelstyrke",
                  "3.6.2 Muskeludholdenhed",
                  "3.6.3 Forspænding/spændstighed",
              ]
          },
          {
              "name": "3.7 Smidighedstræning",
              "sub": []
          },
        {
            "name": "Resume",
            "sub": [],
            "color":"#26213B"
        }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 4: Doping",
        "sub": [
        {
            "name": "4.1 Dopings historie",
            "sub": []
        },
        {
            "name": "4.2 Dopinglisten, tests og straf",
            "sub": [
            ]
        },
        {
            "name": "4.3 Hvem doper sig?",
            "sub": [
            ]
        },
        {
            "name": "4.4 Skal doping frigives?",
            "sub": [
            ]
        },
         {
             "name": "4.5 Doping og udholdenhed",
             "sub": [
               "4.5.1 EPO",
               "4.5.2 Bloddoping",
               "4.5.3 Andre metoder",
             ]
         },
          {
              "name": "4.6 Doping og styrke",
              "sub": [
                "4.6.1 Anabolske steorider",
                "4.6.2 Andre metoder",
              ]
          },
          {
              "name": "4.7 Andre dopingmetoder",
              "sub": [
              ]
          },
          {
              "name": "4.8 Lovlige præperater",
              "sub": [
              "4.8.1 Placebo",
              "4.8.2 Kreatin",
              "4.8.3 Aminosyrer & proteinpulver",
              "4.8.4 Koffein",
              "4.8.5 Bikarbonat & fosfat"
              ]
          },
          {
          	"name":"4.9 Opsamling","sub":[]
          },
          {
          	"name":"4.10 Mand eller kvinde?","sub":[]
          },
          {
          	"name":"4.11 Snyd ved tests","sub":[]
          },
        {
            "name": "Resume",
            "sub": [],
            "color":"#26213B"
        }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 5: Idrætspsykologi",
        "sub": [
         {
             "name": "5.1 Introduktion",
             "sub": []
         },
        {
            "name": "5.2 Den individuelle toppræstation",
            "sub": [
                  "5.2.1 Motivation og målsætning",
                  "5.2.2 Spændingsregulering",
            ],
        },
        {
            "name": "5.3 Holdets toppræstation",
            "sub": [
                "5.3.1 Det velfungerende team",
                "5.3.2 Samarbejde og kohæsion",
                "5.3.3 Roller og kommunikation"
            ]
        },
          {
              "name": "5.4 Aggression i idræt",
              "sub": [
              ]
          },
	{
		"name":"5.5 Ekstremsport",
		"sub":[
		"5.5.1 Indledning",
		"5.5.2 Hvad er ekstremsport",
		"5.5.3 Hvor mange ?",
		"5.5.4 Hvem og hvorfor ?",
		"5.5.5 Identitet, selvaktualisering & flow"
		]
	},
	{
		"name":"5.6 Besat af træning",
		"sub":[
			"5.6.1 Træningsafhængighed",
			"5.6.2 Årsager til træningsafhængighed"
		]
	},
	{
		"name":"5.7 Trænerroller og ledelse",
		"sub":[
			"5.7.1 Klassiske ledelsesstile",
			"5.7.2 Situationsbestemt ledelse",
			"5.7.3 Coaching",
			"5.7.4 Den orkestrerende leder",
			"5.7.5 Opsummering"
		]
	},
        {
            "name": "Resume",
            "sub": [],
            "color":"#26213B"
        }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 6: Idrætsskader",
        "sub": [{
            "name": "6.1 Når skaden er sket",
            "sub": [
                  "6.1.1 Den akutte behandling",
                  "6.1.2 Efterbehandling & genoptræning"
            ]
        },
         {
             "name": "6.2 Skader i musklerne",
             "sub": [
                   "6.2.1 Fibersprængning & forstrækning",
                   "6.2.2 Trælår & 'lammer'"
             ]
         },
        {
            "name": "6.3 Skader ved knæleddet",
            "sub": [
                "6.3.1 Ledbånd, korsbånd & menisk",
                "6.3.2 Løbeknæ & springerknæ",
            ]
        },
        {
            "name": "6.4 Skader i fodledet",
            "sub": [
            ]
        },
        {
            "name": "6.5 Andre skader/lidelser",
            "sub": [
                "6.5.1 Skinnebensbetændelse",
                "6.5.2 Lyskenskade",
                "6.5.3 Betændelse i akillessenen",
                "6.5.4 Albueskader",
                "6.5.5 Kramper & sidesting",
                "6.5.6 Hypermobilitet",
                "6.5.7 Knoglebrud",
                "6.5.8 Hovedskader"
            ]
        },

        {
            "name": "Resume",
            "sub": [],
            "color":"#26213B"
        }
        ]
    });

db.contents.save(
    {"name": "Kapitel 7: Tests",
     "sub": [
     {"name": "7.1 Test-typer",
	  "sub": [ ]},
	 {"name": "7.2 Test af kondition",
	 "sub": [
	      "7.2.1 Biptest/yo-yo-test",
	      "7.2.2 Coopers løbetest",
	      "7.2.3 Åstrands nomogram",
	      "7.2.4 Pulsforholdstest"
	 ]},
	 {"name": "7.3 Test af styrke",
	  "sub": [
	      "7.3.1 Bænkpres",
	      "7.3.2 Armstrækkere",
	      "7.3.3 Kropshævninger",
	      "7.3.4 Squat",
	      "7.3.5 Estimering af 1-RM"
	  ]},
	 {"name": "7.4 Allround tests",
	  "sub": [
	      "7.4.1 Yubio-test",
	      "7.4.2 Politiets optagelsesprøve",
	  ]},
	 {"name": "7.5 Opvarmningens effekt",
	  "sub": [],
	  "hasQuestions": false},
	 {"name": "7.6 Test af bevægelighed",
	  "sub": [ ],
	  "hasQuestions": false},
	 {"name": "7.7 Tests og matematik",
	  "sub": [
	  ], "hasQuestions": false},
	 {
	 	"name": "Resume",
	  "sub": [],
	   "color":"#26213B"
	}	 
     ]
    });

db.contents.save(
	{"name": "Kapitel 8: Udvidet fyiologi & træningslære",
		 "sub": [ {"name": "8.1 Indledning",
		  "sub": [],
		 "hasQuestions": false},
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
		  "sub": [],
		     "color":"#26213B"
		}	 
	 ]
});
	
	db.contents.save(
	{"name": "Kapitel 9: Idræt og samfund",
		 "sub": [ {"name": "9.1 Dansk idrætshistorie",
		  "sub": [
		  		"9.1.1 Den tidlige idræt",
		  		"9.1.2 Den moderne idræt i Danmark",
		  		"9.1.3 Den svenske gymnastik",
		  		"9.1.4 Sporten",
		  		"9.1.5 Store danske præstationer"
		  ]},
		  {"name": "9.2 Idræt og medier",
		  "sub": [
				"9.2.1 Medier og kommunikation",
				  "9.2.2 Sportsfolk og sportsjournalister",
				  "9.2.3 Stjerner og individet i fokus",
		  ]},
		 {"name": "9.3 Idræt og religion",
		  "sub": [
			  "9.3.1 Socialisering og sammenhængskraft",
			  "9.3.2 Samfund og civilreligion",
			  "9.3.3 De syv dimensioner",
		  ]},
		 {"name": "9.4 Idræt og karrierelæring",
		  "sub": [
			  "9.4.1 Sundhedssektoren",
			  "9.4.2 Formidling",
			  "9.4.3 Træner",
			  "9.4.4 Politi, forsvar og beredskab",
			  "9.4.5 Professionel idrætsudøver"
		  ]},
		 {"name": "9.5 Idræt og integration",
		  "sub": [
			  "9.5.1 Det fælles tredje",
			  "9.5.2 Anerkendelse",
			  "9.5.3 Kultur og kommunikation",
			  "9.5.4 Integration eller ej?",
		  ]},
		  {"name":"9.6 Idræt og politik",
		"sub":[
			"9.6.1 Er idræt politik?",
			"9.6.2 Idræt som mål eller middel?",
			"9.6.3 Elite eller bredde?",
			"9.6.4 Træningsplanlægning",
			"9.6.5 Den internationale scene",
		]},
		  {"name":"9.7 Sportens skyggesider",
		"sub":[
			"9.7.1 Idealisme & realisme",
			"9.7.2 Fair & foul play",
			"9.7.3 Korruption & matchfixing",
			"9.7.4 Gambling & ludomani",
			"9.7.5 Sportsfans",
		]},
		 {"name": "Resume",
		  "sub": [],
		     "color":"#26213B"
		}	 
	 ]
});


db.contents.save(
    {
        "name": "Kapitel 10: Boldbasis",
        "sub": [
        {
            "name": "10.1 Historie",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "10.2 Teori om boldspil",
            "sub": [
                "10.2.1 Boldspilsfamilierne",
                "10.2.2 Taktikker",
                "10.2.3 Læringstrinmodellen",
                "10.2.4 Spiludvikling",
            ]
        },
        {
            "name": "10.3 Øvelser",
            "sub": [
                "10.3.1 Fokus på opvarmning (A)",
                "10.3.2 Kaosspil (B)",
                "10.3.3 Net/væg-spil (C)",
                "10.3.4 Slagspil (D)",
                "10.3.5 Træfspil (E)",
                "10.3.6 Opgave"
            ]
        },
        {
            "name": "10.4 Eksempel på boldbasisforløb",
            "sub": [
                "10.4.1 Generelt boldbasis",
                "10.4.2 Kaosspil og den gode holdspiller",
            ]
        },
        {
            "name": "10.5 Evaluering",
            "sub": [
            ]
        },
        {
            "name": "10.6 Drejebog",
            "sub": [
            ]
        },
        {
            "name": "Resume",
            "sub": [],  
            "hasMC":false,
            "hasFF":false,
            "color":"#5E6BAF"
        }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 11: Fodbold",
        "sub": [
        {
            "name": "11.1 Fodboldens historie",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "11.2 Regler, ide & organisering",
            "sub": []
        },
        {
            "name": "11.3 Øvelser",
            "sub": [
              "11.3.1 Fokus på opvarming (A)",
              "11.3.2 Fokus på teknik (B)",
              "11.3.3 Fokus på taktik (C)",
              "11.3.4 Fokus på fysik (D)",
            ]
        },
        {
            "name": "11.4 Eksemple på fodboldforløb", "sub": []
        },
        {
            "name": "11.5 Evaluering", "sub": []
        },
        {
            "name": "11.6 Hooliganisme", "sub": []
        },
            {
                "name": "11.7 Træning og sundhed", "sub": []
            },
        {
            "name": "11.8 Drejebog"
        },
        {
            "name": "Resume",
            "sub": [],      
            "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
        }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 12: Basketball",
        "sub": [
        {
            "name": "12.1 Basketballs historie",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "12.2 Regler, ide & organisering",
            "sub": []
        },
        {
            "name": "12.3 Øvelser",
            "sub": [
              "12.3.1 Fokus på opvarmning (A)",
              "12.3.2 Fokus på teknik (B)",
              "12.3.3 Fokus på taktik (C)",
              "12.3.4 Fokus på fysik (D)"
            ]
        },
        {
            "name": "12.4 Eksempel på basketballforløb", "sub": []
        },
        {
            "name": "12.5 Evaluering", "sub": []
        },
        {
            "name": "12.6 Kan  du score?", "sub": []
        },
        {
            "name": "12.7 Drejebog", "sub": []
        },
        {
            "name": "12.8 Hormonregulering",
            "sub": []
        },
       {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
       }
     ]
    });


db.contents.save(
    {
        "name": "Kapitel 13: Volleyball",
        "sub": [
        {
            "name": "13.1 Volleyballs historie",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "13.2 Regler, ide & organisering",
            "sub": []
        },
        {
            "name": "13.3 Øvelser",
            "sub": [
              "13.3.1 Fokus på opvarmning (A)",
              "13.3.2 Fokus på teknik (B)",
              "13.3.3 Fokus på taktik (C)",
              "13.3.4 Fokus på fysik (D)"
            ]
        },
        {
            "name": "13.4 Eksempel på volleyballforløb", "sub": []
        },
        {
            "name": "13.5 Evaluering", "sub": []
        },
        {
            "name": "13.6 Teamudvikling", "sub": []
        },
        {
            "name": "13.7 Springtræning", "sub": []
        },
        {
            "name": "13.8 Drejebog",
            "sub": []
        },
       {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
       }
        ]
    });

db.contents.save(
  {
      "name": "Kapitel 14: Floorball",
      "sub": [
      {
          "name": "14.1 Floorballs historie",
          "sub": [],
          "hasQuestions": false
      },
      {
          "name": "14.2 Regler, ide & organisering",
          "sub": []
      },
      {
          "name": "14.3 Øvelser",
          "sub": [
            "14.3.1 Fokus på opvarmning (A)",
            "14.3.2 Fokus på teknik (B)",
            "14.3.3 Fokus på taktik (C)",
            "14.3.4 Fokus på fysik (D)"
          ]
      },
      {
          "name": "14.4 Eksempel på floorballforløb", "sub": []
      },
      {
          "name": "14.5 Evaluering", "sub": []
      },
      {
          "name": "14.6 Den gode floorballspiller", "sub": []
      },
      {
          "name": "14.7 Drejebog",
          "sub": []
      },
     {
         "name": "Resume",
         "sub": [],
             "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
     }
      ]
  });
db.contents.save(
  {
      "name": "Kapitel 15: Ultimate",
      "sub": [
      {
          "name": "15.1 Ultimates historie",
          "sub": [],
          "hasQuestions": false
      },
      {
          "name": "15.2 Regler, ide & organisering",
          "sub": []
      },
      {
          "name": "15.3 Øvelser",
          "sub": [
            "15.3.1 Fokus på opvarmning (A)",
            "15.3.2 Fokus på teknik (B)",
            "15.3.3 Fokus på taktik (C)",
            "15.3.4 Fokus på fysik (D)"
          ]
      },
      {
          "name": "15.4 Eksempel på ultimateforløb", "sub": []
      },
      {
          "name": "15.5 Evaluering", "sub": []
      },
      {
          "name": "15.6 Spirit of the game", "sub": []
      },
      {
          "name": "15.7 Drejebog",
          "sub": []
      },
     {
         "name": "Resume",
         "sub": [],
             "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
     }
      ]
  });

db.contents.save(
    {
        "name": "Kapitel 16: Flag football",
        "sub": [
        {
            "name": "16.1 Flag footballs historie",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "16.2 Regler, ide & organisering",
            "sub": []
        },
        {
            "name": "16.3 Øvelser",
            "sub": [
              "16.3.1 Fokus på opvarmning (A)",
              "16.3.2 Fokus på offence (B)",
              "16.3.3 Fokus på defence (C)",
            ]
        },
        {
            "name": "16.4 Eksempel på flag football-forløb", "sub": []
        },
        {
            "name": "16.5 Evaluering", "sub": []
        },
        {
            "name": "16.6 Den amerikanske drøm", "sub": []
        },
        {
            "name": "16.7 Drejebog",
            "sub": []
        },
       {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
              "color":"#5E6BAF"
       }
        ]
    });
    db.contents.save(
        {
            "name": "Kapitel 17:  Five-a-side Håndbold",
            "sub": [
            {
                "name": "17.1 Håndboldens historie",
                "sub": [],
                "hasQuestions": false
            },
            {
                "name": "17.2 Regler, ide & organisering",
                "sub": [
                    "17.2.1 Håndbold generelt",  
                    "17.2.2 Five-a-side Håndbold",  
                ]
            },
            {
                "name": "17.3 Øvelser",
                "sub": [
                  "17.3.1 Fokus på opvarmning (A)",
                  "17.3.2 Fokus på teknik (B)",
                  "17.3.3 Fokus på taktik (C)",
                  "17.3.3 Spilvarianter (D)",
                ]
            },
            {
                "name": "17.4 Eksempel på Five-a-side Håndboldforløb", "sub": []
            },
            {
                "name": "17.5 Evaluering", "sub": []
            },
            {
                "name": "17.6 Bevæg dig for livet", "sub": []
            },
            {
                "name": "17.7 Drejebog",
                "sub": []
            },
           {
               "name": "Resume",
               "sub": [],
                   "hasMC":false,
                "hasFF":false,
                  "color":"#5E6BAF"
           }
            ]
        });
db.contents.save(
    {
        "name": "Kapitel 20: Træningsprojekt",
        "sub": [
        {
            "name": "20.1 Formål",
            "sub": [],
            "hasQuestions": false
        },
        {
            "name": "20.2 Sundhedsmålinger",
            "sub": []
        },
          {
              "name": "20.3 Forløbet",
              "sub": [
              "20.3.1 Træningen",
              "20.3.2 Målsætningen"
              ]
          },
            {
                "name": "20.4 Rapport, resultater & log",
                "sub": []
            },
            {
                "name": "20.5 Eksempel på træningsprojektforløb",
                "sub": []
            },
            {
                "name": "20.6 Evaluering",
                "sub": []
            },
            {
                "name": "20.7 Drejebog",
                "sub": []
            },
             {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 21: Grundtræning",
        "sub": [
            {
                "name": "21.1 Formål og valg", "sub": []
            },
            {
                "name": "21.2 Opgaven", "sub": []
            },
            {
                "name": "21.3 Eksempler",
                "sub": [
                    "21.3.1 Allround, generelt (A)",
                    "21.3.2 Allround, specifikt (B)",
                    "21.3.3 Musik bruges aktivt (C)",
                    "21.3.4 Konditionsfokus (D)",
                    "21.3.5 Grundtræningstest (E)"
                ]
            },
            {
                "name": "21.4 Eksempel på grundtræningsforløb", "sub": []
            },
            {
                "name": "21.5 Evaluering", "sub": []
            },
            {
                "name": "21.6 Drejebog", "sub": []
            }, 
            {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 22: Badminton",
        "sub": [
            {
                "name": "22.1 Badmintons historie", "sub": []
            },
            {
                "name": "22.2 Regler, ide & organisering", "sub": []
            },
            {
                "name": "22.3 Øvelser", "sub":
                    [
                        "22.3.1 Fokus på grep & serv (A)",
                        "22.3.2 Fokus på opvarmning (B)",
                        "22.3.3 Fokus på forbanen (C)",
                        "22.3.4 Fokus på bagbanen (D)",
                        "22.3.5 Fokus på selve spillet (E)"
                    ]
            },
            {
                "name": "22.4 Eksempel på badmintonforløb", "sub": []
            },
            {
                "name": "22.5 Evaluering", "sub": []
            },
            {
                "name": "22.6 Komplekse bevægelser", "sub": []
            },
            {
                "name": "22.7 Drejebog"
            },
             {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 23: Atletik",
        "sub": [
        {
        	"name":"23.1 De antikke OL", "sub":[]
        },
        {
        	"name":"23.2 De moderne OL", "sub":[
    		"23.2.1 Fra 1896-1932",
    		"23.2.2 Fra 1936-1980",
    		"23.2.3 Fra 1984-nu"
        	]
        },
        {
        	"name":"23.3 Øvelser", "sub":[
        	"23.3.1 Sprint og stafet (A)",
        	"23.3.2 Mellem- og langdistance (B)",
        	"23.3.3 Længdespring (C)",
        	"23.3.4 Højdespring (D)",
        	"23.3.5 Kuglestød (E)",
        	"23.3.6 Spydkast (F)",
        	"23.3.7 Trespring (G)"	
        	]
        },
        {
        	"name":"23.4 Eksempel på atletikforløb", "sub":[]
        },
        {
        	"name":"23.5 Evaluering", "sub":[]
        },
        {
        	"name": "23.6 Bevægelsesanalyse", "sub":[]
        },
        {
        	"name": "23.7 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }

        ]
    });
db.contents.save(
   {
        "name": "Kapitel 24: Kampsport",
        "sub": [
        {
        	"name":"24.1 Kampsportens historie", "sub":[]
        },
        {
        	"name":"24.2 Regler, ide & organisering", "sub":[]
        },
        {
        	"name":"24.3 Øvelser", "sub":[
        	"24.3.1 De bløde (A)",
        	"24.3.2 De hårde (B)",
        	"24.3.3 Selvforsvar (C)",
        	"24.3.4 Show (D)"	
        	]
        },
        {
        	"name":"24.4 Eksempel på kampsportforløb", "sub":[]
        },
        {
        	"name":"24.5 Evaluering", "sub":[]
        },
        {
        	"name": "24.6 Ære og kamp", "sub":[]
        },
        {
        	"name": "24.7 Kamp og hormoner", "sub":[]
        },{
        	"name":"24.8 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }

        ]
    });

db.contents.save(
   {
        "name": "Kapitel 25: X-Fit",
        "sub": [
        {
        	"name":"25.1 X-Fits historie", "sub":[]
        },
        {
        	"name":"25.2 Regler, ide & organisering", "sub":[]
        },
        {
        	"name":"25.3 Øvelser", "sub":[
        	"25.3.1 Egen kropsvægt (A)",
        	"25.3.2 Kettlebells og vægtebolde (B)",
        	"25.3.3 Slynger/TRX (C)",
        	"25.3.4 WOD: Fight Gone Bad (D)",
        	"25.3.5 WOD: AMRAP (E)",
        	"25.3.6 WOD: EMOM (F)",
        	"25.3.7 WOD: TABATA (G)",
        	"25.3.8 WOD: X-Fit MAX (H)",
        	"25.3.9 WOD: X-Fit Team (I)",
        	"25.3.10 WOD: I Go, You Go (J)",
        	"25.3.11 WOD: Climb the ladder (K)"	
        	]
        },
        {
        	"name":"25.4 Eksempel på X-Fitforløb", "sub":[]
        },
        {
        	"name":"25.5 Evaluering", "sub":[]
        },
        {
        	"name": "25.6 Strong is the new skinny", "sub":[]
        },
        {
        	"name": "25.7 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       },
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 26: Parkour",
        "sub": [
        {
        	"name":"26.1 Parkours historie", "sub":[]
        },
        {
        	"name":"26.2 Regler, ide & organisering", "sub":[]
        },
        {
        	"name":"26.3 Øvelser", "sub":[
        	"26.3.1 Opvarmning (A)",
        	"26.3.2 Jumps (B)",
        	"26.3.3 Rails/Rail Vaults (C)",
        	"26.3.4 Wall Vaults D)"	
        	]
        },
        {
        	"name":"26.4 Eksempel på Parkourforløb", "sub":[]
        },
        {
        	"name":"26.5 Evaluering", "sub":[]
        },
        {
        	"name": "26.6 Subkultur", "sub":[]
        },
        {
        	"name":"26.7 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 27: Springgymnastik og akrobatik",
        "sub": [
        {
        	"name":"27.1 Historisk view", "sub":[]
        },
        {
        	"name":"27.2 Regler, ide & organisering", "sub":[]
        },
        {
        	"name":"27.3 Øvelser", "sub":[
        	"27.3.1 Opvarmning (A)",
        	"27.3.2 Ruller og håndstand (B)",
        	"27.3.3 Spring fra gulv og minitrampolin (C)",
        	"27.3.4 Akrobatik (D)"	
        	]
        },
        {
        	"name":"27.4 Eksempel på springgymnastik/akrobatik-forløb", "sub":[]
        },
        {
        	"name":"27.5 Evaluering", "sub":[]
        },
        {
        	"name": "27.6 God koordination", "sub":[]
        },
        {
        	"name": "27.7 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#6BC2B8"
       }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 28: Styrketræning",
        "sub": [
        {
        	"name":"28.1 Historie & organisering", "sub":[]
        },
        {
        	"name":"28.2 Træningsprincipper","sub":[
        	"28.2.1 Hvorfor dyrke styrketræning?",
        	"28.2.2 Superkompensation",
        	"28.2.3 Grundbegraber",
        	"28.2.4 De fire fokusområder",
        	"28.2.5 Vægte eller maskiner?",
        	"28.2.6 Bilateral/unilateral træning",
        	"28.2.7 Vejrtrækning",
        	"28.2.8 Træningsplanlægning"
        	]
        },
        {
        	"name":"28.3 Øvelser","sub":[
        	"28.3.1 Bench press (bænkpres)",
        	"28.3.2 Squat",
        	"28.3.3 Deadlift (dødløft)",
        	"28.3.4 Snatch (træk)",
        	"28.3.5 Clean & jerk (stød)",
        	"28.3.6 Ryg- og skulderøvelser (A)",
        	"28.3.7 Armøvelser (B)",
        	"28.3.8 Brystøvelser (C)",
        	"28.3.9 Kropsstammeøvelser (D)",
        	"28.3.10 Benøvelser (E)",
        	"28.3.11 Øvelser med egen kropsvægt (F)",
        	"28.3.12 Helkropsprogrammer",
        	"28.3.13 Splitprogrammer",
        	"28.3.14 Opgaver"
        	]
        },
        {
        	"name":"28.4 Eksempel på styrketræningsforløb","sub":[]
        },
        {
        	"name":"28.5 Evaluering", "sub":[]
        },
        {
        	"name":"28.6 Okklusionstræning", "sub":[]
        },
        {
        	"name": "28.7 Kropsidealer", "sub":[]
        },
        {
        	"name": "28.8 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 29: Friluftsliv",
        "sub": [
        {
        	"name":"29.1 Friluftslivets historie", "sub":[]
        },
        {
        	"name":"29.2 Regler, ide & organisering","sub":[]
        },
        {
        	"name":"29.3 Klatring","sub":[
        	"29.3.1 Klatreudstyr & knuder",
        	"29.3.2 Toprebssikring",
        	"29.3.3 Klatreteknik",
        	"29.3.4 Bouldering",
        	"29.3.5 Øvelser (A)",
        	"29.3.6 Eksempel på klatreforløb",
        	"29.3.7 Evaluering",
        	"29.3.8 Drejebog"
        	]
        },
        {
        	"name":"29.4 Mountainbike","sub":[
        	"29.4.1 Udstyr & sikkerhed",
        	"29.4.2 Teknik",
        	"29.4.3 Øvelser (B)",
        	"29.4.4 Eksempel på MTB-forløb",
        	"29.4.5 Evaluering",
        	"29.4.6 Drejebog"
        	]
        },
        {
        	"name":"29.5 Orienteringsløb", "sub":[
        	"29.5.1 Basal kortlæsning",
        	"29.5.2 Kompasset",
        	"29.5.3 Rutevalg",
        	"29.5.4 Øvelser (C)",
        	"29.5.5 Eksempel på O-løbsforløb",
        	"29.5.6 Evaluering",
        	"29.5.7 Drejebog"	
        	]
        },
        {
        	"name":"29.6 Kano (kommer senere)", "sub":[]
        },
        {
        	"name": "29.7 Adventurerace", "sub":[
        	"29.7.1 Hvad er adventurerace?",
        	"29.7.2 De fire elementer",
        	"29.7.3 Eget adventurerace"
        	]
        },
        {
        	"name": "29.8 Det frie liv", "sub":[]
        },
        {
        	"name": "29.9 Arbejdskravsanalyse", "sub":[]
        },
        {
        	"name": "29.10 Eksempel på friluftslivsforløb", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 30: Rytmisk opvarmning",
        "sub": [
        {
        	"name":"30.1 Hvorfor varme op?", "sub":[]
        },
        {
        	"name":"30.2 Selve musikken","sub":[]
        },
        {
        	"name":"30.3 Bevægelseskvaliteter"
        },
        {
        	"name":"30.4 Programmets opbygning","sub":[]
        },
        {
        	"name":"30.5 Øvelser", "sub":[
        	"30.5.1 Gang (A)",
        	"30.5.2 Sving (B)",
        	"30.5.3 Hop (C)",
        	"30.5.4 Styrke (D)",
        	"30.5.5 Løb (E)",
        	"30.5.6 Opvarmningslege (F)"	
        	]
        },
        {
        	"name":"30.6 Eksempel på opvarmningsforløb", "sub":[]
        },
        {
        	"name": "30.7 Evaluering", "sub":[]
        },
           {
        	"name": "30.8 Labans bevægelseslære", "sub":[]
        },
        {
        	"name": "30.9 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 31: Lanciers og andre folkedanse",
        "sub": [
        {
        	"name":"31.1 Folkedansens historie", "sub":[]
        },
         {
        	"name":"31.2 Les Lanciers", "sub":
        	[
        	"31.2.1 Første tur - La Dorset",
        	"31.2.2 Anden tur - La Victoria (Komplimentturen)",
        	"31.2.3 Tredje tur - Les Moulinets (Damemøllen)",
        	"31.2.4 Fjerde tur - Les Visites (Visitturen)",
        	"31.2.5 Femte tur - Les Lanciers (Herremøllen)",
        	"31.2.6 Indmarch"
        	]
        },
        {
        	"name": "31.3 Traditionelle folkedanse", "sub":[
        	"31.3.1 Totur til Vejle",
        	"31.3.2 Hamborg Sekstur",
        	"31.3.3 Den muntre kreds"
        	]
        },
         {
        	"name":"31.4 Eksempel på forløb i folkedanse", "sub":[]
        },
         {
        	"name":"31.5 Evaluering", "sub":[]
        },
         {
        	"name":"31.6 Drejebog", "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 32: Vild med dans",
        "sub": [
         {
        	"name":"32.1 Standard & latin", "sub":[]
        },
         {
        	"name":"32.2 Cha-cha-cha (latin)", "sub":[
        	"32.2.1 Musikforståelse & teknik",
        	"32.2.2 Grundtrin og varianter"
        	]
        },
         {
        	"name":"32.3 Jive (latin)", "sub":[
        		"32.3.1 Musikforståelse & teknik",
        	"32.3.2 Grundtrin og varianter"
        	]
        },
          {
        	"name":"32.4 Engelsk vals (standard)", "sub":[
        		"32.4.1 Musikforståelse & teknik",
        	"32.4.2 Grundtrin og varianter"
        	]
        },
          {
        	"name":"32.5 Quickstep (standard)", "sub":[
        		"32.5.1 Musikforståelse & teknik",
        	"32.5.2 Grundtrin og varianter"
        	]
        },
         {
        	"name":"32.6 Eksempel på danseforløb", "sub":[
        		"32.6.1 Fokus på én dans",
        	"32.6.2 Fokus på flere danse"
        	]
        },
         {
        	"name":"32.7 Evaluering", "sub":[	]
        },
     {
        	"name":"32.8 Drejebog", "sub":[	]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 33: Hiphop",
        "sub": [
          {
        	"name":"33.1 Hiphoppens historie", "sub":[	]
        },
          {
        	"name":"33.2 Hiphop- og breakdance", "sub":[	]
        },
          {
        	"name":"33.3 Øvelser", "sub":[
        	"33.3.1 Basic hiphop dance moves (A)",
        	"33.3.2 Body rolls (B)",
        	"33.3.3 Hiphop- og house-koreografier (C)",
        	"33.3.4 Breakdance moves (D)",
        	"33.3.5 Freezes (E)",
        	"33.3.5 Battles, poses & freestyles (F)"
        		]
        },
          {
        	"name":"33.4 Forslag på hiphop-forløb", "sub":[	]
        },
          {
        	"name":"33.5 Evaluering", "sub":[	]
        },
        {
        	"name":"33.6 Idrættens organisering",  "sub":[]
        },
          {
        	"name":"33.7 Drejebog", "sub":[	]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 34: Aerobic og stepaerobic",
        "sub": [
          {
        	"name":"34.1 Hvad er det?", "sub":[	]
        },
          {
        	"name":"34.2 Opbygning af serier", "sub":[	]
        },
          {
        	"name":"34.3 Udførelse", "sub":[
        	"34.3.1 Intensitet",
        	"33.3.2 Musik",
        		]
        },
          {
        	"name":"34.4 Øvelser", "sub":[
        	"34.4.1 Trin i aerobic (A)",
        	"33.4.2 Trin i stepaerobic (B)",
        	"33.4.3 Koreografier (C)",
        	"33.4.4 Opvarmningslege og gruppearbejde (D)",
        		]
        },
          {
        	"name":"34.5 Eksempel på aerobic- og stepaerobicforløb", "sub":[	]
        },
          {
        	"name":"34.6 Evaluering", "sub":[	]
        },
        {
        	"name":"34.7 Kontinuerlig træning",  "sub":[]
        },
          {
        	"name":"34.8 Drejebog", "sub":[	]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });
db.contents.save(
    {
        "name": "Kapitel 35: Dancefit",
        "sub": [
          {
        	"name":"35.1 Dancefits historie", "sub":[	]
        },
          {
        	"name":"35.2 Brug af musikken", "sub":[
        	"35.2.1 Teksten",
        	"35.2.2 Stilen",
        	"35.2.3 Opbygningen"
        	]
        },
          {
        	"name":"35.3 Udførelse", "sub":[
        		]
        },
          {
        	"name":"35.4 Øvelser", "sub":[
        	"35.4.1 Grupperarbejde (A)",
        	"35.4.2 Koreografier (B)",
        		]
        },
          {
        	"name":"35.5 Eksempel på dancefitforløb", "sub":[	]
        },
          {
        	"name":"35.6 Evaluering", "sub":[	]
        },
        {
        	"name":"35.7 Hvorfor dyrke dancefit?",  "sub":[]
        },
          {
        	"name":"35.8 Drejebog", "sub":[	]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
        ]
    });

db.contents.save(
    {
        "name": "Kapitel 36: Lindyhop",
        "sub": [
          {
        	"name":"36.1 Lindyhops historie", "sub":[	]
        },
          {
        	"name":"36.2 Musikforståelse og teknik", "sub":[
        	"36.2.1 Improvisation & musikforståelse",
        	"36.2.2 Generelle karakteristika",
        	"36.3.3 Dansefatninger",
        	"36.3.4 Grundtrin"
        	]
        },
          {
        	"name":"36.3 Øvelser", "sub":[
        	"36.3.1 Grundtrin (A)",
        	"36.3.2 Figurer & autentiske jazztrin (B)",
        	"36.3.3 Grupperarbejde (C)",
        	"36.3.4 Koreografier  (D)"
        		]
        },
          {
        	"name":"36.4 Eksempel på lindyhop-forløb", "sub":[
        		]
        },
          {
        	"name":"36.5 Evaluering", "sub":[	]
        },
          {
        	"name":"36.6 Dans og kultur i 30'ernes USA", "sub":[	]
        },
        {
        	"name":"36.7 Drejebog",  "sub":[]
        },
         {
           "name": "Resume",
           "sub": [],
               "hasMC":false,
            "hasFF":false,
            "color":"#EC641C"
       }
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
