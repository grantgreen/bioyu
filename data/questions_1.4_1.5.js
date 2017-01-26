 
//SPØRGSMÅL TIL KAPITEL 1.4+1.5

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvilket udsagn om virus er ikke korrekt?",
	answers: [
	    "De har flere cellekerner",
	    "De har mitokondrier",
	    "Deres arvemateriale kan bestå af DNA eller RNA",
	    "Deres cellemembran er bygget af fedt og protein"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvordan kan vira leve i værtscellen",
	answers: [
	    "De sætter typisk deres arvemateriale ind i værtens kromosomer",
	    "De lever af værtscellens kulhydrater",
	    "De producerer deres egne kulhydrater ved en fotosyntese",
	    "De spalter og nedbryder værtscellens arvemateriale"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvilket udsagn om viras opbygning er korrekt?",
	answers: [
	    "De er omgivet af en tyk cellevæg",
	    "Deres arvemateriale er altid RNA",
	    "De er omsluttet af en proteinkappe",
	    "De minder meget om små bakterieceller"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Ved antigen-skift hos virus forstås",
	answers: [
	    "Små ændringer i virus arvemateriale på grund af mutationer",
	    "At virus klipper sine antigener af og sætter nogle nye på",
	    "At mennesker kan blive immune overfor fx influenzavirus",
	    "At en værtscelle inficeres med to forskellige vira på samme tid, så der fremkommer en ny virus med helt ændrede antigener på overfladen"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Ved antigen-drift hos virus forstås",
	answers: [
	    "Små ændringer i virus arvemateriale på grund af mutationer",
	    "At virus klipper sine antigener af og sætter nogle nye på",
	    "At mennesker kan blive immune overfor fx influenzavirus",
	    "At en værtscelle inficeres med to forskellige vira på samme tid, så der fremkommer en ny virus med helt ændrede antigener på overfladen"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvilket af følgende virus er ikke et RNA-virus",
	answers: [
	    "Røde-hunde virus",
	    "Influenza-virus",
	    "Polio-virus",
	    "HPV-virus"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvilket af følgende virus er et DNA virus",
	answers: [
	    "Ebola-virus",
	    "Rabies-virus",
	    "Mæslinge virus",
	    "HPV-virus"
	],
	type: "multiple_text",
	correct_answer: "3"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvad forstås ved endogene vira",
	answers: [
	    "Vira, der kun smitter de indre organer fx i tarmkanalen",
	    "Rester af tidligere tiders virusinfektioner der stadig sidder i menneskets arvemateriale",
	    "En virus som HIV, der kan smitte ved sex",
	    "Virus der kun kan smitte dyr inden for en art, men ikke andre dyrearter"
	],
	type: "multiple_text",
	correct_answer: "1"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvad gælder om prioner?",
	answers: [
	    "Et protein, der kan forekomme i en fejlfoldet sygdomsfremkaldende form",
	    "En encellet organisme, der kan medføre sygdom",
	    "En del af et kromosom",
	    "En del af centriolerne"
	],
	type: "multiple_text",
	correct_answer: "0"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvilke sygdomme kan forårsages af prioner",
	answers: [
	    "Influenza",
	    "Kræft",
	    "Kogalskab",
	    "Hundegalskab"
	],
	type: "multiple_text",
	correct_answer: "2"
    });

db.questions.save(
    {
	chapters: ["1.4", "1.5"],
	text: "Hvordan kan prionsygdomme behandles",
	answers: [
	    "Med virushæmmende medicin",
	    "Med bredspektret antibiotika",
	    "Med serumbehandling",
	    "De kan ikke behandles"
	],
	type: "multiple_text",
	correct_answer: "3"
    });