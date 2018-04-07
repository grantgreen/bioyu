db = db.getSiblingDB('yubio_idc');

db.contents.drop();


db.contents.save(
    {
        "name": "Kapitel 1: Idræt og sundhed",
        "sub": [
        {
            "name": "1.1 Bevægelse og sundhed",
            "sub": [
                "1.1.1 Idræt som mål eller middel?",
                "1.1.2 Sundhedsfordele ved fysisk aktivitet",
                "1.1.3 Anbefalinger ved fysisk aktivitet"
            ]
        },
        {
            "name": "1.2 Er jeg sund?",
            "sub": [
                "1.2.1 Sundhedsmålinger",
                "1.2.2 KRAM",
                "1.2.3 Psykisk sundhed - skal jeg i bad?"
            ]
        },

        {
            "name": "1.3 Idræt og sundhed",
            "sub": [
                "1.3.1 Den eukaryote celle",
                "1.3.2 Membrantransport"
            ]
        },
         {
            "name": "1.4 Min idrætsprofil",
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
                "2.2.3 Reguleringsmekanismer"
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
              "name": "4.7 Mand eller kvinde",
              "sub": [
              ]
          },
          {
              "name": "4.8 Snyd ved tests",
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
                  "5.2.2 Koncentration og spændingsregulering",
            ],
        },
        {
            "name": "5.3 Holdets toppræstation",
            "sub": [
                "5.3.1 Det velfungerende team",
                "5.3.2 Samarbejde, roller & hierarki",
                "5.3.3 Kommunikation"
            ]
        },
          {
              "name": "5.4 Aggression i idræt",
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
                   "6.2.1 Fibersprængning og forstrækning",
                   "6.2.2 Trælår og 'lammer'"
             ]
         },
        {
            "name": "6.3 Skader ved knæleddet",
            "sub": [
                "6.3.1 Ledbånd, korsbånd & menisk",
                "6.3.2 Løbeknæ og springerknæ",
            ]
        },
        {
            "name": "6.4 Skader i fodledet",
            "sub": [
            ]
        },
        {
            "name": "6.5 Andre Idrætsskader",
            "sub": [
                "6.5.1 Skinnebensbetændelse",
                "6.5.2 Lyskenskade",
                "6.5.3 Betændelse i akillessenen",
                "6.5.4 Albueskader",
                "6.5.5 Kramper og sidesting",
                "6.5.6 Hypermobilitet",
                "6.5.7 Knoglebrud",
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
            "name": "11.2 Regler,  id & organisering",
            "sub": []
        },
        {
            "name": "11.3 Øvelser",
            "sub": [
              "11.3.1 Fokus på opvarming (A)",
              "11.3.2 Fokus på teknik (B)",
              "11.3.3 Fokus på taktik (C)",
              "11.3.4 Fokus på fysik (D)",
              "11.3.5 Feber"
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
            "name": "12.4 Hormonregulering",
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
                "name": "20.5 Evaluering",
                "sub": []
            },
            {
                "name": "20.6 Drejebog",
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
                    "21.3.4 Konditionsfokus (D)"
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
        	"name":"23.1 Atletikkens historie", "sub":[]
        },
        {
        	"name":"23.2 Regler, ide & organisering", "sub":[]
        },
        {
        	"name":"23.3 Øvelser", "sub":[
        	"23.3.1 Fokus på løb (A)",
        	"23.3.2 Fokus på spring (B)",
        	"23.3.3 Fokus på kast/stød (C)"	
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
        	"25.3.1 Øvelser memd egen kropsvægt",
        	"25.3.2 Øvelser med kettlebells og vægte",
        	"25.3.3 Øvelser med slynger",
        	"25.3.4 WOD"	
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
        	"26.3.1 Crawling/Balance",
        	"26.3.2 Jumps",
        	"26.3.3 Rails/Rail Vaults",
        	"26.3.4 Wall Vaults"	
        	]
        },
        {
        	"name":"26.4 Eksempel på Parkour-forløb", "sub":[]
        },
        {
        	"name":"26.5 Evaluering", "sub":[]
        },
        {
        	"name": "26.6 Subkultur", "sub":[]
        },
        {
        	"name": "26.7 Flow", "sub":[]
        },
        {
        	"name":"26.8 Evaluering", "sub":[]
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
        	"name": "30.8 Drejebog", "sub":[]
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
        	"name":"31.4 Eksempel på forløb i lanciers & andre folkedanse", "sub":[]
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
        	"33.3.3 Hiphop-koreografier (C)",
        	"33.3.4 Breakdance moves (D)",
        	"33.3.5 Freezes (E)",
        	"33.3.5 Battles, poses & freestyles (F)"
        		]
        },
          {
        	"name":"33.4 Forslag til hiphop-forløb", "sub":[	]
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
