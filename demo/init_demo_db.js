db = db.getSiblingDB('yubio_demo');

db.contents.drop();


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


