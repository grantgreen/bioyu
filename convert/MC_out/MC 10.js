db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvorfor har mænd større muskelmasse end kvinder?',
        answers: [
            'Testosteron virker muskelopbyggende',
            'Østrogen virker vævsopbyggende',
            'Fordi de har større fedtprocent',
            'Fordi de træner mere'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvorfor har kvinder større fedtprocent end mænd?',
        answers: [
            'Fordi de spiser mere',
            'Fordi de har for lidt østrogen',
            'Fordi de ikke har så meget testosteron som mænd',
            'Fordi de træner for lidt'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'I hvilken sportsgren kan kvindernes fedtdepoter være en fordel?',
        answers: [
            'Maratonløb',
            'Cykling',
            'Håndbold',
            'Svømning'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvilket udsagn om mænds og kvinderes maksimalpuls er korrekt?',
        answers: [
            'Kvinders maksimalpuls er højere end mænds',
            'Kvinders maksimalpuls er lavere end mænds',
            'Der er ingen forskel i maksimalpulsen hos mænd og kvinder',
            'Maksimalpulsen afhænger af vægt og ikke af køn'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvilket udsagn om hæmoglobin-indhold i blodet er ikke korrekt?',
        answers: [
            'Mænd er ca. 15 % bedre stillet end kvinder med hensyn til hæmoglobinkoncentration',
            'Mænds højere hæmoglobinindhold skyldes især deres testosteron',
            'Kvinder har 13 g hæmoglobin/100 mL blod',
            'Mænd har 23 g hæmoglobin/100 mL blod'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvilket udsagn om mænds og kvinders muskulatur er korrekt?',
        answers: [
            'Mænd har flere muskelfibre end kvinder',
            'Mænd har flere muskler end kvinder',
            'Der er mere fedt i mænds muskler end i kvinders',
            'De enkelte muskelfibre er kraftigere hos mænd'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvornår i livet topper den fysiske præstationsevne (iltoptagelse/kg) hos mænd?',
        answers: [
            'I den tidlige barndom',
            'I 17-21 års alderen',
            'I 12-15 års alderen',
            'I 30 års alderen'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvornår i livet topper den fysiske præstationsevne (iltoptagelse/kg) hos kvinder?',
        answers: [
            'I den tidlige barndom',
            'I 17-21 års alderen',
            'I 12-15 års alderen',
            'I 30 års alderen'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvad er en typisk muskelfiberfordeling hos maratonløbere?',
        answers: [
            'Ca. lige mange type I- og type II-fibre',
            '75 % type I-fibre',
            '75 % type II-fibre',
            '30 % type I- og 70 % type II-fibre'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvad er en typisk muskelfiberfordeling hos håndboldspillere?',
        answers: [
            'Ca. lige mange type I- og type II-fibre',
            '75 % type I-fibre',
            '75 % type II-fibre',
            '30 % type I- og 70 % type-II'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvad er en typisk muskelfiberfordeling hos sprintere?',
        answers: [
            'Ca. lige mange type I- og type-II',
            '75 % type I-fibre',
            '75 % type II-fibre',
            '30 % type I- og 70 % type II-fibre'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvilket udsagn om de røde type I-fibre er ikke korrekt?',
        answers: [
            'De har mange mitokondrier',
            'De er langsomme',
            'De har mange glykolytiske enzymer',
            'De har er højt myoglobinindhold'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvilket udsagn om de hvide type II-fibre er ikke korrekt?',
        answers: [
            'De har få kapillærer',
            'De har et lavt myoglobinindhold',
            'De har en høj udholdenhed',
            'De har få mitokondrier'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Om myoglobinindholdet i type I-fibre gælder',
        answers: [
            'Der er intet myoglobin i disse fibre',
            'Der er et lavere indhold end i type II-fibrene',
            'Der er et højt indhold af myoglobin',
            'Der er samme indhold som i type II-fibrene'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.2'],
        text: 'Hvorfor må der nødvendigvis være mange mitokondrier i type I-fibre?',
        answers: [
            'Fordi de har brug for mange enzymer til glykolysen',
            'Fordi de har en høj kontraktionskraft',
            'Fordi disse fibre er meget hurtige ',
            'Fordi de udfører meget respiration'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved et submaksimalt arbejde?',
        answers: [
            'Et arbejde på præcis 50 % af den maksimale ydeevne',
            'Et arbejde mindre end den maksimale ydeevne – typisk ca. 75 %',
            'Det arbejde en kvindelig atlet kan udføre',
            'Et arbejde, der kan udføres så længe det skal være'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvilken påstand om iltdeficit-perioden er ikke korrekt?',
        answers: [
            'Det er den periode, hvor man arbejder uden tilstrækkelig iltforsyning til musklerne',
            'Det er den periode, hvor åndedræt og kredsløb endnu ikke er tilpasset arbejdet',
            'Perioden varer ca. 10 minutter',
            'Der dannes ATP fra både respirationen og mælkesyregæringen'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad skyldes iltdeficit-perioden?',
        answers: [
            'At man arbejder alt for hårdt i forhold til sin kondition',
            'At man har for lavt kondital',
            'At pulsen og lungeventilationen endnu ikke er steget tilstrækkeligt ',
            'At man har for lidt kreatinfosfat'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvordan leveres energien i iltdeficit-perioden?',
        answers: [
            'Kun respiration i mitokondrierne',
            'Kun fra kreatinfosfat og ATP-lagre',
            'Ved respiration samt fra kreatinfosfat og ATP-lagre',
            'Fra ATP-lagre, kreatinfosfat, mælkesyregæring samt respiration'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvordan leveres energien i den alaktacide anaerobe metabolisme?',
        answers: [
            'Ved respiration i mitokondrierne',
            'Fra ATP-lagre og kreatinfosfat',
            'Fra kreatinfosfat',
            'Ved mælkesyregæringen'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvor meget ATP dannes der pr. glukosemolekyle i mælkesyregæringen?',
        answers: [
            'Ingen',
            '2 ATP',
            '28 ATP',
            '30 ATP'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved den lactacide anaerobe metabolisme?',
        answers: [
            'Den energigivende proces hvor der dannes mælkesyre',
            'Den proces hvor mælkesyre nedbrydes',
            'Den proces hvor energien skaffes fra ATP-lagre samt kreatinfosfat',
            'En energigivende proces hvor der ikke dannes mælkesyre'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvordan skaffes energien i steady-state?',
        answers: [
            'Fra ATP-lagre, kreatinfosfat, mælkesyregæring samt respiration',
            'Primært fra mælkesyregæring og en anelse respiration',
            'Ved den laktacide metabolisme',
            'Fortrinsvist ved respirationen og en smule mælkesyregæring'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvor meget ATP dannes der pr. glukosemolekyle ved den aerobe nedbrydning?',
        answers: [
            '2 ATP',
            '28 ATP',
            '30 ATP',
            '60 ATP'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvor stor del af glukosens energi genfindes i den ATP, der dannes ved den aerobe nedbrydning?',
        answers: [
            '60 %',
            '40 %',
            '30 %',
            '10 %'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvor længe kan man principielt fortsætte arbejdet i steady-state?',
        answers: [
            'Indtil kernetemperaturen er blevet for høj',
            'Indtil man ikke kan svede mere',
            'Indtil man mangler salt',
            'Indtil glukoselagrene er ved at være tømte'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved iltgæld-perioden?',
        answers: [
            'Den periode hvor man mangler ilt',
            'Den periode efter arbejdet hvor man ikke skaffer nok ilt',
            'Den periode efter arbejdet hvor iltunderskuddet fra iltdeficit perioden skal dækkes ',
            'Den periode hvor en stor del af energien skaffes fra anaerobe processer'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvilket udsagn om iltgæld-perioden er ikke korrekt?',
        answers: [
            'Iltunderskuddet fra iltdeficit-perioden skal dækkes',
            'Ilten skal blandt andet bruges til at genopbygge ATP- og kreatinfosfatlagrene',
            'Ilten bruges til at danne laktat',
            'Ilten bruges blandt andet til at genopfylde hæmoglobinet og myoglobinet'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved RQ? ',
        answers: [
            'Kuldioxidproduktion/iltforbrug',
            'Iltforbrug/kuldioxidforbrug',
            'Iltforbrug/kuldioxidproduktion',
            'Kuldioxidproduktion/iltproduktion'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'RQ kaldes også:',
        answers: [
            'Den transpiratoriske kvotient',
            'Den respiratoriske kvotient',
            'Konditionskvotienten',
            'Den glykæmiske kvotient'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvilke energikilder kan bruges i den aerobe respiration?',
        answers: [
            'Kun glukose',
            'Fedt',
            'Kulhydrat og fedt',
            'Alle næringsstoffer'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad er RQ hvis der kun forbrændes kulhydrat?',
        answers: [
            '1',
            '0,71',
            '0,8',
            '0,5'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad er RQ hvis der kun forbrændes fedt?',
        answers: [
            '1',
            '0,71',
            '0,8',
            '0,5'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad er RQ hvis der forbrændes en blandet kost?',
        answers: [
            'Ca. 1,2',
            'Ca. 0,71',
            'Ca. 1',
            'Ca. 0,85'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvordan går det med RQ, når arbejdsintensiteten stiger?',
        answers: [
            'Den stiger til over 1',
            'Den stiger',
            'Den falder',
            'Den ændres ikke'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvor i kroppen findes kulhydratdepoter ikke?',
        answers: [
            'Muskler',
            'Fedtvæv',
            'Lever',
            'Blod'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvordan er sammenhængen mellem RQ og kondition?',
        answers: [
            'Bedre kondition giver lavere RQ ved et givet arbejde',
            'Bedre kondition giver højere RQ ved et givet arbejde',
            'Der er ingen sammenhæng',
            'Bedre kondition giver en lavere RQ, men kun hos ikke trænede personer'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved fedtforbrændingszonen?',
        answers: [
            'Det område i ens fedtdepoter hvor fedtet nedbrydes fra',
            'Den arbejdsintensitet hvor energien fortrinsvist kommer fra fedtforbrænding',
            'Den peripode efter et måltid hvor fedtet især forbrændes',
            'Området omkring maveregionen, hvor fedtet samler sig'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.3'],
        text: 'Hvad forstås ved begrebet afterburn?',
        answers: [
            'Det øgede stofskifte efter et fysisk arbejde',
            'Det lavere stofskifte efter et fysisk arbejde',
            'Den øgede appetit efter et fysisk arbejde',
            'Smerter i fx musklerne efter et hårdt arbejde'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvad sker der med åndedrætsdybden, når man går fra hvile til arbejde?',
        answers: [
            'Der sker normalt ikke noget med den',
            'Den stiger fra ca. 0,1 til 0,5 L',
            'Den stiger fra ca. 0,5 til 1,5 L',
            'Den falder en smule '
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvad er den arterio-venøse-iltdifference (a-v-difference) i hvile?',
        answers: [
            'Ca. 5 mL O',
            'Ca. 50 mL O',
            'Ca. 150 mL O',
            'Ca. 1,5 L O'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvad er den arterio-venøse-iltdifference (a-v-difference) under arbejde',
        answers: [
            'Ca. 5 mL O',
            'Ca. 50 mL O',
            'Ca. 150 mL O',
            'Ca. 1,5 L O'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvordan ændres blod-flowet til hjernen, når man begynder at arbejde?',
        answers: [
            'Den ændres ikke',
            'Den stiger fra 0,5-0,75 L/min',
            'Den falder',
            'Den stiger fra 0,5-1,5 L/min'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvordan ændres blod-flowet til huden, når man begynder at arbejde',
        answers: [
            'Den ændres ikke',
            'Den stiger fra 0,5-0,75 L/min',
            'Den stiger fra 0,5-1,5 L/min',
            'Den falder'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvordan ændres blod-flowet til hjertet, når man begynder at arbejde?',
        answers: [
            'Den ændres næsten ikke',
            'Den falder',
            'Den stiger fra 0,25-0,75 L/min',
            'Den stiger fra 1,25-15 L/min'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.4'],
        text: 'Hvordan ændres blod-flowet til nyrer og tarm, når man begynder at arbejde?',
        answers: [
            'Den ændres ikke',
            'Den falder ',
            'Den stiger lidt',
            'Den stiger fra 0,5-1,5 L/min'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er varmeafgivelse ved konduktion?',
        answers: [
            'Varmeafgivelse ved kontakt med faste overflader i omgivelserne',
            'Varmeafgivelse ved fordampning fra huden',
            'Varmeafgivelse til den omgivende luft',
            'Varmeafgivelse til vand'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er varmeafgivelse ved konvektion?',
        answers: [
            'Varmeafgivelse ved kontakt med faste genstande i omgivelserne',
            'Varmeafgivelse til den omgivende luft',
            'Varmeafgivelse ved fordampning fra huden',
            'Varmeafgivelse ved fordampning fra luftvejene'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er varmeafgivelse ved varmestråling?',
        answers: [
            'Varmeafgivelse til faste genstande, man er i direkte kontakt med',
            'Varmeafgivelse ved fordampning',
            'Varmeafgivelse til den omgivende luft',
            'Varmeafgivelse til faste genstande i nærheden, som man ikke er i direkte kontakt med'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvor meget vand afgives ved fordampning (i hvile) ved en ydre temperatur på under 30 grader?',
        answers: [
            'Ca. 0,7 L i døgnet',
            'Ca. 2 L i døgnet',
            'Ca. 5 L i døgnet',
            'Ca. 10-15 L i døgnet'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvordan er svedens saltindhold hos trænede sammenlignet med hos utrænede?',
        answers: [
            'Den indeholder glukose i stedet for salt',
            'Den er mindre salt',
            'Den er mere salt',
            'Der er samme saltindhold'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvor meget vand kan tabes ved sved i timen, hvis man er meget aktiv i varme omgivelser?',
        answers: [
            'Ca. 0,7 L',
            'Ca. 2 L',
            'Ca. 3-4 L',
            'Ca. 10-15 L'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvor meget kan man svede i døgnet under ekstreme forhold?',
        answers: [
            'Ca. 0,7 L',
            'Ca. 2 l',
            'Ca. 3-4 L',
            'Ca. 10-15 L'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvorfor falder hjertets slagvolumen, når man arbejder i meget varme omgivelser?',
        answers: [
            'Fordi væsketabet giver et mindre blodvolumen',
            'For at spare på energien',
            'På grund af mangel på ATP',
            'For at øge varmetabet'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvorfor stiger pulsen, når man arbejder i meget varme omgivelser, sammenlignet med det samme arbejde i koldere omgivelser? ',
        answers: [
            'For at øge varmetabet',
            'For at opretholde minutvolumen',
            'For at opretholde slagvolumen',
            'For at skaffe mere ATP'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvordan ændres konditallet sig, når man arbejder i meget varme omgivelser (43 grader)',
        answers: [
            'Det ændres ikke',
            'Det falder ca. 10 %',
            'Det falder 1 %',
            'Det stiger en smule'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er årsagen til hedekramper?',
        answers: [
            'Tab af vand og salte',
            'Mangel på næringsstoffer i blodet',
            'Opvarmning af hovedet',
            'Opvarmning af hele kroppen ved konvektion'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er årsagen til hedeudmattelse?',
        answers: [
            'At der ikke er mere glukose i blodet',
            'At selve hovedet er blevet varmet op',
            'At der bliver for meget salt i blodet',
            'At blodvolumen reduceres kraftigt på grund af væsketab via sveden '
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er et hedeslag?',
        answers: [
            'Når man får for meget stærkt sollys ind i øjnene',
            'Nå hovedet opvarmes for kraftigt af solen',
            'Når temperaturreguleringen har slået fejl, og kropstemperaturen stiger til farlige højder',
            'Det samme som solstik'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvordan går det med svedmængden, når man er akklimatiseret (har vænnet sig til at arbejde i varme omgivelser)?',
        answers: [
            'Man kan svede mere end før',
            'Man sveder mindre end før',
            'Der sker ingen ændring',
            'Svedproduktionen går senere i gang end før'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvor meget kan rektaltemperaturen stige under et hårdt arbejde hos ikke-akklimatiserede?',
        answers: [
            'Den stiger ikke, den falder derimod',
            'Den kan stige til over 40 grader',
            'Den er uændret',
            'Den kan stige til omkring 38 grader'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er hypertermi?',
        answers: [
            'En situation der kan opstå, når man har svedt for meget',
            'For høj kropstemperatur',
            'For lav kropstemperatur',
            'En situation, hvor man bliver hyperaktiv som følge af for høj kropstemperatur'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er solstik?',
        answers: [
            'Når hjernen opvarmes som følge af direkte solbestråling',
            'Når man får for meget skarpt sollys ind i hjernen via øjnene',
            'En situation, der kan opstå i varmt vejr, hvis man ikke kan svede nok',
            'En situation der kan opstå, hvis kropstemperaturen stiger for meget'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad er gåsehud?',
        answers: [
            'Det er hudens svedkirtler man kan se',
            'Det samme som perifer vasokonstriktion',
            'Det fænomen at man rejser pelsen i et forsøg på at mindske varmetabet',
            'Det fænomen, at de tværstribede muskler afkøles'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvorfor får man kulderystelser i kolde omgivelser?',
        answers: [
            'For at mindske varmetabet fra huden',
            'For at øge den perifere vasokonstriktion',
            'For at lukke svedkirtlerne',
            'For at øge varmeproduktionen fra musklerne'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvorfor skal man indtage rigeligt med mad, hvis man skal udføre et hårdt arbejde i kolde omgivelser?',
        answers: [
            'For ikke at komme til at fryse',
            'For så danner man mere isolerende fedtvæv',
            'Fordi der skal bruges rigeligt glukose til ekstra varmeproduktion, fx til kulderystelserne',
            'Fordi man ellers ikke kan producere nok sved'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad forstås ved hypotermi?',
        answers: [
            'For lav kropstemperatur',
            'For høj kropstemperatur',
            'Den situation, der kan opstå, når man opholder sig i meget varme omgivelser',
            'Hvis ens kernetemperatur ændres for meget opad eller nedad'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvorfor menes der med perifer vasokonstriktion i kolde omgivelser',
        answers: [
            'At pulsen sættes op',
            'At pulsen sættes ned',
            'At de perifere blodkar trækker sig sammen',
            'At de perifere blodkar udvides'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad forstås ved kernetemperaturen?',
        answers: [
            'Temperaturen i cellekernen hos cellerne',
            'Temperaturen i kroppens kerne',
            'Det samme som rektaltemperaturen',
            'Hudtemperaturen'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.5'],
        text: 'Hvad forstås ved rektaltemperaturen?',
        answers: [
            'Hudtemperaturen',
            'Temperaturen i endetarmen',
            'Temperaturen i munden',
            'Temperaturen i øret'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });



db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad kaldes kredsløbskondition også?',
        answers: [
            'Aerob effekt',
            'Aerob kapacitet',
            'Syretræning',
            'Stofskiftekondition'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er den relative arbejdsintensitet?',
        answers: [
            '(Arbejdspuls – Hvilepuls) / (Maksimalpuls – Hvilepuls)',
            '(Arbejdspuls – Maksimalpuls) / (Maksimalpuls – Hvilepuls)',
            '(Arbejdspuls – Hvilepuls) / Maksimalpuls',
            'Maksimalpuls / Hvilepuls'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

 
db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad kaldes stofskiftekonditionen også?',
        answers: [
            'Aerob kapacitet',
            'Aerob effekt',
            'Syretræning',
            'Stofskiftekondition'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad forstås ved HST?',
        answers: [
            'Hypertrofi Specifik Træning',
            'Halvt Styrke-Træning',
            'Hypertrofi Standard Træning',
            'Helt Standardiseret Træning'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });


db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken påstand om superkompensationsprincippet er korrekt?',
        answers: [
            'Efter passende hård træning efterfulgt af passende restitution genopbygges musklerne stærkere, end de var før',
            'Efter træning vil musklerne altid blive stærkere og større',
            'Meget hård træning vil gradvist nedbryde musklerne, så man bliver stærkere',
            'Meget hård træning giver kun stærkere muskler, hvis man samtidig tager steroider'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad sker der med konditionen, hvis man holder pause med træningen i 8 uger?',
        answers: [
            'Der sker ikke noget på så kort tid',
            'Den er aftaget med ca. 10 %',
            'Den er aftaget med 30-40 %',
            'Den er faktisk steget med 1-2 %'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad sker der med muskelstyrken, hvis man holder 8 ugers træningspause?',
        answers: [
            'Der sker ikke noget på så kort tid',
            'Den er aftaget med ca. 10 %',
            'Den er aftaget 30-40 %',
            'Den er faktisk steget med ca. 1 %'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvordan forklarer man, at trænede personer ret hurtigt kan genvinde deres muskelstyrke efter en pause?',
        answers: [
            'De trænede personer har flere cellekerner, så de hurtigere kan starte en proteinsyntese',
            'De har flere mitokondrier, der hurtigt kan starte energiproduktionen',
            'De har dannet flere muskelceller',
            'De har lært at træne på den rigtige måde '
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilket udsagn om opvarmning er ikke korrekt?',
        answers: [
            'Den giver smidighed i muskler og sener',
            'Enzymerne kommer til at arbejde hurtigere',
            'Iltoptagelsen sker hurtigere',
            'Steady-state indtræder senere'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er nedvarmning?',
        answers: [
            'At man tager et koldt bad efter endt aktivitet, fx nedsænker kroppen i isvand',
            'Den naturlige afkøling af kroppen efter en aktivitet',
            'At man afgiver varme ved fx fordampning af sved',
            'At man udfører en aktivitet ved meget lav belastning efter endt træning '
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilket udsagn om restitution er ikke korrekt?',
        answers: [
            'Mælkesyrekoncentrationen normaliseres hurtigere, hvis man hviler sig helt efter træning',
            'Mælkesyrekoncentrationen normaliseres hurtigere, hvis man udfører en let aktivitet',
            'En aktiv restitution er mest effektiv',
            'Muskelømhed kan muligvis nedsættes ved kolde bade efter en fysisk aktivitet'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvordan defineres kondital?',
        answers: [
            'Den maksimale iltoptagelse målt i mL O<span style="vertical-align:sub; font-size:58%;">2</span>/min',
            'Den maksimale iltoptagelse målt i L O<span style="vertical-align:sub; font-size:58%;">2</span>/min',
            'Den maksimale iltoptagelse målt i mL O<span style="vertical-align:sub; font-size:58%;">2</span>/min/kg',
            'Den maksimale iltoptagelse målt i mL O<span style="vertical-align:sub; font-size:58%;">2</span>/kg'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er en normal iltoptagelse for en utrænet person?',
        answers: [
            '2-4 L/min',
            '6-8 L/min',
            'Ca. 28 L/min',
            'Ca. 45 L/min'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er en normal iltoptagelse for en trænet mand?',
        answers: [
            '2-4 L/min',
            '6-8 L/min',
            'Ca. 28 L/min',
            'Ca. 45 L/min '
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvor stor er kvinders maksimale iltoptagelse sammenlignet med mænds?',
        answers: [
            '50 %',
            '60 %',
            '70-75 %',
            '90 %'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er et middelkondital for en kvinde i 20’erne?',
        answers: [
            '35-43',
            '25-33',
            '44-51',
            'Ca. 28'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad anses for et lavt kondital for en kvinde i 20’erne?',
        answers: [
            'Under 27',
            'Under 36',
            'Under 46',
            'Under 50'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad anses for et højt kondital for en kvinde i 20’erne?',
        answers: [
            'Over 40',
            'Over 46',
            'Over 47',
            'Over 49'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er et middel kondital for en mand i 20’erne?',
        answers: [
            '29-43',
            '44-51',
            '52-56',
            '57-59'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er et lavt kondital for en mand i 20’erne?',
        answers: [
            '36-38 og derunder',
            '44-51 og derunder',
            '45-53 og derunder',
            '52-56 og derunder'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad anses for et højt kondital for en mand på 60 år?',
        answers: [
            '22-26',
            '27-35',
            '36-39',
            '40-45'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er det højeste kondital, der er målt på en mand?',
        answers: [
            '71',
            '77',
            '87',
            '94'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'For hvilken sportsgren har konditallet stor betydning?',
        answers: [
            'Sprint',
            'Højdespring',
            'Langrend',
            'Skydning'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'For hvilken sportsgren har konditallet næsten ingen betydning?',
        answers: [
            'Langrend',
            'Marathon',
            '1.500 m løb',
            '100 m løb'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvordan skaffes det meste af energien til et 100 m løb?',
        answers: [
            'Der bruges ikke energi',
            'Fra ATP- og KP-systemerne',
            'Fra mælkesyregæring',
            'Fra de aerobe processer'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvordan skaffes energien primært til et maratonløb?',
        answers: [
            'Fra de anaerobe alaktacide processer',
            'Fra ATP- og KP-systemerne',
            'Fra de anaerobe laktacide processer',
            'Fra de aerobe processer'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er ikke en parameter, der indgår i konditallet?',
        answers: [
            'Mængden af glykolytiske enzymer',
            'Antallet af mitokondrier',
            'Mængden af fedtforbrændende enzymer',
            'Mængden af kapillærer i musklerne'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken effekt har konditionstræning på minutvolumen ved samme arbejdsintensitet?',
        answers: [
            'Minutvolumen er større hos de trænede personer',
            'Minutvolumen er mindre hos de trænede',
            'Der er ingen forskel',
            'Der er kun en forskel ved de meget lave arbejdsintensiteter'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken effekt har konditionstræning på pulsen ved samme arbejdsintensitet?',
        answers: [
            'Pulsen er højere hos de trænede',
            'Den er lavere hos de trænede',
            'Der er ingen forskel',
            'Der er kun en forskel ved de meget lave arbejdsintensiteter'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken effekt har konditionstræning på slagvolumen ved samme arbejdsintensitet?',
        answers: [
            'Slagvolumen er højere hos de trænede',
            'Det er lavere hos de trænede',
            'Der er ingen effekt',
            'Der er kun en forskel ved de meget lave arbejdsintensiteter'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken effekt har konditionstræning på den maksimale lungeventilation?',
        answers: [
            'Der er ingen effekt',
            'Den kan øge den maksimale lungeventilation til ca. 60 L/min',
            'Den sænker den maksimale lungeventilation',
            'Den kan øge den maksimale lungeventilation til ca. 210 L/min'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilket udsagn om konditionstræning og det maksimale minutvolumen er ikke korrekt?',
        answers: [
            'Konditionstræning øger det maksimale minutvolumen',
            'Konditionstræning har ingen effekt ',
            'Konditionstræning sænker det maksimale minutvolumen',
            'Konditionstræning sænker det maksimale minutvolumen ved de lave intensiteter'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilken effekt har konditionstræning ikke på blodet?',
        answers: [
            'Der dannes flere røde blodlegemer',
            'Der dannes mere blodplasma',
            'Hæmatokritværdien øges',
            'Hæmatokritværdien falder '
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad er ikke en effekt af anaerob træning? ',
        answers: [
            'Der dannes mere ATP og kreatinfosfat i musklerne',
            'Der dannes mere glykogen i musklerne',
            'Der dannes flere enzymer til mælkesyregæring',
            'Der dannes flere enzymer i mitokondrierne'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvilket udsagn om udstrækning er ikke korrekt?',
        answers: [
            'Den har mest psykologisk betydning',
            'Den hindrer muskelømhed',
            'Den har betydning for smidighed',
            'Leddenes maksimale bevægelsesudsving forbedres'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad bruger man en Douglassæk til?',
        answers: [
            'Til at opsamle udåndingsluft når man vil beregne iltforbruget',
            'Til at bestemme volumen af den indåndede luft',
            'Det er et luftanalyseapparat',
            'Det er en ispose, der bruges til at afkøle en skadet muskel'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvorfor kan en Cooper-test bruges til at bestemme konditallet?',
        answers: [
            'Fordi den simpelthen måler konditallet',
            'Da der ved forsøg er fundet en korrelation mellem løbetid og kondital',
            'Da der ved forsøg er fundet en korrelation mellem løbedistance og kondital',
            'Fordi det er en såkaldt direkte test'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad bruger man Åstrands nomogram til?',
        answers: [
            'Til at bestemme pulsen ved det udførte arbejde',
            'Til at bestemme pulsen ved steady state',
            'Til at bestemme arbejdsbelastningen målt i watt',
            'Til at bestemme konditallet når man kender pulsen og arbejdsintensiteten (watt)'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });
db.questions.save(
    {
        chapters: ['10.6'],
        text: 'Hvad forstås ved okklusionstræning?',
        answers: [
            'Træning hvor man hæmmer blodgennemstrømning til musklerne',
            'Træning hvor man primært bruger egen kropsvægt',
            'En speciel form for træning med vægtstænger',
            'En træning med meget få gentagelser'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });
db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad forstås ved RICE-princippet?',
        answers: [
            'Det er en metode til indirekte at måle konditallet',
            'Det er en metode til behandling af skader',
            'Det er en varmebehandling af skader',
            'At en skade kan behandles med indsprøjtninger med binyrebarkhormoner'
        ],
        type: 'multiple_text',
        correct_answer: '1'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvorfor kan man bruge varmebehandling til skader?',
        answers: [
            'Fordi det lammer smertenerverne i det skadede område',
            'Fordi det hæmmer blodkredsløbet',
            'Fordi det øger blodgennemstrømningen til det skadede område',
            'Fordi det får blodet til at koagulere'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvorfor kan man bruge kuldebehandling til skader?',
        answers: [
            'For at minimere blødningerne i vævet',
            'For at udvide blodkarrene i det skadede område',
            'For at lamme smertenerverne',
            'For at aktivere immunforsvaret'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad er en fibersprængning?',
        answers: [
            'En overrivning af en sene',
            'En overrivning af muskeltenen',
            'En overrivning af et eller flere blodkar i en muskel',
            'Overrivning af en eller flere muskelceller '
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad er en forstrækning',
        answers: [
            'En alvorlig fibersprængning',
            'En overrevet sene',
            'En mindre fibersprængning',
            'Hvis man strækker for grundigt ud'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad er årsagen til et trælår?',
        answers: [
            'En benprotese',
            'En blødning i en muskel',
            'Et slag på patella-senen',
            'At noget muskelvævet i låret knuses mod lårbenet'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad er skinnebensbetændelse?',
        answers: [
            'En infektion med bakterier i skinnebenet',
            'En allergisk reaktion i skinnebenet',
            'En irritation i skinnebenet som følge af for meget løbetræning',
            'En tilstand hos gamle mennesker, der sidder for meget ned hele dagen'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvor sidder akillessenen?',
        answers: [
            'I korsbåndet',
            'Oven på foden',
            'Ved hælbenet',
            'Under foden'
        ],
        type: 'multiple_text',
        correct_answer: '2'
    });

db.questions.save(
    {
        chapters: ['10.7'],
        text: 'Hvad forstås ved hypermobilitet?',
        answers: [
            'At ens led og muskler er for stive',
            'At ens led er for stive og ubevægelige',
            'En form for gigt',
            'At der er for stor bevægelig i leddene'
        ],
        type: 'multiple_text',
        correct_answer: '3'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvad menes med begrebet ”cluster”?',
        answers: [
            'At livsstilssygdomme har det med at følges ad',
            'At man bliver mere overvægtig med alderen',
            'At livsstilssygdomme er meget farlige',
            'At der ofte skal flere livsstilssygdomme til. før det er farligt'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvilken er ikke en anbefaling for børn og unge?',
        answers: [
            'Fysisk aktivitet i mindst 30 min/dag ved moderat eller høj intensitet',
            'Kun aktiviteter af minimum 10 minutter tæller med i regnskabet',
            'Jo mere fysisk aktiv, jo bedre',
            'Fysisk aktivitet i mindst 30 min. 3 gange ugentligt med høj intensitet'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvad er det kritiske kondital for voksne mænd?',
        answers: [
            '35',
            '30',
            '40',
            '45'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvad er det kritiske kondital for voksne kvinder?',
        answers: [
            '29',
            '23',
            '34',
            '39'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvor meget falder konditallet som følge af alder?',
        answers: [
            'Ca. 0,5 pr. år',
            'Ca. 1 pr. år',
            'Ca. 2 pr. år',
            'Det falder ikke med stigende alder'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

 
db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvilken er ikke en anbefaling for voksne?',
        answers: [
            'Fysisk aktivitet i mindst 60 min/dag ved moderat eller høj intensitet',
            'Kun aktiviteter af minimum 10 minutter tæller med i regnskabet',
            'Jo mere fysisk aktiv, jo bedre',
            'Fysisk aktivitet i mindst 20 min. 2 gange ugentligt med høj intensitet'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });

db.questions.save(
    {
        chapters: ['10.8'],
        text: 'Hvilken er ikke en anbefaling for ældre?',
        answers: [
            'Fysisk aktivitet i mindst 60 min/dag ved moderat eller høj intensitet',
            'Kun aktiviteter af minimum 10 minutter tæller med i regnskabet',
            'Jo mere fysisk aktiv, jo bedre',
            'Lav smidighedstræning'
        ],
        type: 'multiple_text',
        correct_answer: '0'
    });
