export type Language = "RO" | "EN" | "RU";

export interface Translations {
  // Header
  header: {
    servicii: string;
    despreNoi: string;
    blog: string;
    solicitOferta: string;
  };
  // Home Page
  home: {
    hero: {
      title: string;
      subtitle: string;
      heading1: string;
      heading2: string;
      heading3: string;
      description: string;
      ctaButton: string;
      benefit1: string;
      benefit2: string;
      benefit3: string;
      benefit4: string;
      benefit5: string;
    };
    block2: {
      title: string;
      bucatarii: string;
      paturi: string;
      dulapuriSiComode: string;
    };
    colorBlock: {
      mainTitle: string;
      subtitle: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      feature5: string;
      buttonText: string;
    };
    qualityBlock: {
      title: string;
      subtitle: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
    };
    processBlock: {
      title: string;
      step1Title: string;
      step1Desc: string;
      step2Title: string;
      step2Desc: string;
      step3Title: string;
      step3Desc: string;
      step4Title: string;
      step4Desc: string;
      step5Title: string;
      step5Desc: string;
      step6Title: string;
      step6Desc: string;
    };
    projectsBlock: {
      title: string;
      project1Title: string;
      project2Title: string;
      project3Title: string;
      project4Title: string;
      project5Title: string;
      project6Title: string;
      project7Title: string;
      project1Description: string;
      project2Description: string;
      project3Description: string;
      project4Description: string;
      project5Description: string;
      project6Description: string;
      project7Description: string;
    };
  };
  // Services Page
  services: {
    title: string;
    intro: string;
    blocks: {
      design3d: {
        title: string;
        description: string;
      };
      planning: {
        title: string;
        description: string;
      };
      production: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      international: {
        title: string;
        description: string;
      };
    };
  };
  // CTA Block
  cta: {
    text: string;
    button: string;
  };
  // Form Block
  form: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
  };
  // Footer
  footer: {
    description: string;
    social: string;
    company: string;
    aboutUs: string;
    blog: string;
    services: string;
    copyright: string;
  };
  // Common
  common: {
    contact: string;
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  // Map Section
  map: {
    title: string;
    subtitle: string;
  };
  // Contact Modal
  modal: {
    successTitle: string;
    successMessage: string;
    from: string;
    phone: string;
    date: string;
    autoClose: string;
  };
  // About Us Page
  about: {
    whoWeAre: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    advantages: {
      title: string;
      consultation: {
        title: string;
        description: string;
      };
      measurements: {
        title: string;
        description: string;
      };
      manufacturing: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      warranty: {
        title: string;
        description: string;
      };
    };
  };
  // Reviews Block
  reviews: {
    title: string;
    review1: {
      quote: string;
      author: string;
    };
    review2: {
      quote: string;
      author: string;
    };
    review3: {
      quote: string;
      author: string;
    };
  };
  // Blog Page
  blog: {
    title: string;
    back: string;
    next: string;
    notFound: string;
    descriptionNotAdded: string;
    posts: Record<
      string,
      { title: string; description: string; fullContent?: string }
    >;
  };
  // Colors Page
  colorsPage: {
    title: string;
    ctaText: string;
    ctaButton: string;
  };
  // Category page (fallback)
  categoryPage: {
    defaultCategoryName: string;
  };
  // Categories — items translated per language
  categories: {
    next: string;
    productNotFound: string;
    placeholderDescription: string;
    bucatarii: Array<{ title: string; description?: string }>;
    paturi: Array<{ title: string; description?: string }>;
    dulapuri: Array<{ title: string; description?: string }>;
  };
  // Contact Section (home page)
  contactSection: {
    title: string;
    description: string;
    formTitle: string;
    successTitle: string;
    successMessage: string;
  };
  // Gallery modal (project popup)
  galleryModal: {
    share: string;
    linkCopied: string;
  };
  // Cookie consent
  cookieConsent: {
    title: string;
    text: string;
    privacyLink: string;
    accept: string;
    reject: string;
    privacyAlert: string;
    mustAcceptAlert: string;
  };
}

export const translations: Record<Language, Translations> = {
  RO: {
    header: {
      servicii: "Servicii",
      despreNoi: "Despre noi",
      blog: "Blog",
      solicitOferta: "Solicită ofertă",
    },
    home: {
      hero: {
        title: "Mobila la comandă",
        subtitle: "Bucătării moderne",
        heading1: "Mobila la comandă.",
        heading2: "Design profesionist.",
        heading3: "Execuție premium.",
        description:
          "Noi ne ocupăm de măsurători, proiectare, fabricație și montajul gratuit — tu doar te bucuri de rezultatul final.",
        ctaButton: "Solicită oferta",
        benefit1: "10.000+ clienți mulțumiți",
        benefit2: "15+ ani experiență",
        benefit3: "Proiectare 3D",
        benefit4: "De 5 ani exportăm mobilier în Europa",
        benefit5: "Montaj gratuit",
      },
      block2: {
        title: "Descoperă colecțiile noastre",
        bucatarii: "Bucătării",
        paturi: "Paturi",
        dulapuriSiComode: "Dulapuri și Comode",
      },
      colorBlock: {
        mainTitle: "CULORI PERSONALIZATE PENTRU BUCĂTĂRIA TA",
        subtitle: "FUNCTIONAL. ELEGANT. PERSONAL.",
        feature1: "Alege culoarea care îți spune povestea",
        feature2: "Descoperă ce se potrivește cel mai bine stilului tău",
        feature3: "Inspiră-te și apropie-te de stilul tău ideal",
        feature4: "Finisaje premium, ușor de întreținut",
        feature5: "Design modern, gata de integrat în orice locuință",
        buttonText: "Vezi culorile",
      },
      qualityBlock: {
        title: "Calitatea muncii noastre contează pentru fiecare client",
        subtitle:
          "Ne asigurăm că fiecare proiect de mobilier este perfect, de la consultanță până la garanție.",
        item1: "Consultație individuală gratuită pentru fiecare client",
        item2: "Instalare și montaj mobilă fără cost suplimentar",
        item3: "Soluții personalizate pentru orice comandă",
        item4: "Garanție 5 ani pentru liniștea și comfortul tău",
      },
      processBlock: {
        title: "De la idee la realitate:\n6 pași spre mobilierul tău perfect",
        step1Title: "Completează formularul",
        step1Desc: "Managerul nostru te va contacta pentru a discuta mai multe detalii.",
        step2Title: "Proiectare personalizată & Vizualizare 3D",
        step2Desc: "Venim, măsurăm și îți arătăm mobilierul în 3D înainte de realizare.",
        step3Title: "Mobilier personalizat pe gustul tău",
        step3Desc: "Mobilierul tău va fi realizat cu atenție, folosind tehnologie de ultimă oră.",
        step4Title: "Livrăm rapid și gratuit",
        step4Desc: "Asigurăm livrare și siguranță. Livrare gratuită în Chișinău",
        step5Title: "Montaj profesional",
        step5Desc: "Montăm cu precizie, asigurând integrarea perfectă a mobilierului.",
        step6Title: "Garanție inclusă",
        step6Desc: "După montaj, îți oferim și garanție de 5 ani pentru mobilierul realizat.",
      },
      projectsBlock: {
        title: "Proiecte recente",
        project1Title: "Bucătărie Industrial Grey",
        project2Title: "Bucătărie Marble Line",
        project3Title: "Bucătărie Urban Wood",
        project4Title: "Proiect recent",
        project5Title: "Proiect recent",
        project6Title: "Proiect recent",
        project7Title: "Proiect recent",
        project1Description:
          "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate.",
        project2Description:
          "Suprafețe de marmură albă și finisaje lucioase creează o atmosferă de lux rafinat, ideală pentru bucătăriile moderne.",
        project3Description:
          "Lemnul natural în tonuri calde îmbină estetica rustică cu funcționalitatea contemporană, oferind un spațiu primitor.",
        project4Description:
          "Proiect realizat de LexAar. Mobilier la comandă, adaptat spațiului și nevoilor clientului.",
        project5Description:
          "Proiect realizat de LexAar. Mobilier la comandă, adaptat spațiului și nevoilor clientului.",
        project6Description:
          "Proiect realizat de LexAar. Mobilier la comandă, adaptat spațiului și nevoilor clientului.",
        project7Description:
          "Proiect realizat de LexAar. Mobilier la comandă, adaptat spațiului și nevoilor clientului.",
      },
  },
  services: {
    title: "Serviciile noastre",
      intro:
        "Ne ocupăm de fiecare etapă a proiectului tău, de la planificare până la montaj, astfel încât mobilierul să fie exact așa cum îți-l dorești.",
      blocks: {
        design3d: {
          title: "Proiectare personalizată & Vizualizare 3D",
          description:
            "Primul pas în realizarea unui mobilier reușit este să îți înțelegem spațiul și nevoile. Venim la tine, facem măsurători precise și discutăm împreună despre stil, funcționalitate și preferințe. Ne asigurăm că luăm în calcul fiecare detaliu, de la dimensiuni și compartimentare până la modul în care mobilierul se va integra armonios în locuința ta. Această etapă ne oferă fundația pentru a construi exact ceea ce îți dorești, fără compromisuri.",
        },
        planning: {
          title: "Proiectare și planificare",
          description:
            "După ce avem toate informațiile necesare, trecem la partea de proiectare. Îți prezentăm ideile într-o formă clară, discutăm opțiuni de materiale, culori și finisaje, și alegem împreună soluțiile potrivite. Obiectivul nostru este să îmbinăm aspectul estetic cu funcționalitatea, astfel încât mobilierul să fie nu doar frumos, ci și practic. În această etapă, fiecare detaliu este gândit cu atenție, pentru ca rezultatul final să se potrivească perfect stilului tău de viață și spațiului pe care îl ai la dispoziție.",
        },
        production: {
          title: "Producție și finisaje",
          description:
            "Odată aprobat proiectul, mobilierul intră în producție. Folosim materiale de calitate și tehnologii moderne, dar păstrăm totodată atenția la detalii și grija pentru finisaje impecabile. Echipa noastră lucrează cu profesionalism pentru a transforma planul în realitate, respectând exact cerințele stabilite cu tine. Fiecare piesă este verificată și finisată cu grijă, pentru ca tu să te bucuri de un mobilier durabil, elegant și adaptat perfect casei tale.",
        },
        delivery: {
          title: "Livrare și montaj",
          description:
            "Când mobilierul este gata, îl aducem direct la tine și ne ocupăm de montaj. Tot procesul este realizat rapid și profesionist, pentru ca tu să nu ai nicio bătaie de cap. Instalăm fiecare element cu atenție și verificăm ca totul să fie funcțional și așezat corect. În final, primești un spațiu complet amenajat, cu mobilier gata de utilizare imediat, astfel încât să te bucuri de confort și de un rezultat exact așa cum ți l-ai imaginat.",
        },
        international: {
          title: "Serviciile noastre ajung oriunde ai nevoie",
          description:
            "Fie că te afli în România, Germania, Italia, Franța, Austria sau Spania, tot ceea ce facem la comandă pentru clienții noștri – de la design și producție până la livrare și instalare – poate fi accesat nu doar local, ci și peste hotare. Echipa noastră se asigură că mobilierul ajunge în siguranță și este montat profesional, păstrând aceeași atenție la detalii și calitate care ne definește. Astfel, experiența completă pe care o oferim clienților noștri rămâne aceeași, fără compromisuri, oriunde în lume.",
        },
      },
    },
    cta: {
      text: "Mobilierul perfect începe cu un pas simplu: contactează-ne! Nu trebuie să știi toate detaliile de la început – noi îți aducem idei, soluții și te ghidăm la fiecare etapă. De la proiectare până la montaj și garanție, ne ocupăm de tot, ca tu să ai o experiență ușoară și plăcută.",
      button: "Solicită ofertă",
    },
    form: {
      title: "Ai idei? Noi te ghidăm.",
      subtitle: "Completează formularul și descoperă soluțiile perfecte pentru mobila ta",
      name: "Nume, Prenume",
      phone: "Telefon",
      email: "Email",
      message: "Mesaj",
      send: "Trimite",
      sending: "Se trimite...",
      successTitle: "Mesajul a fost trimis!",
      successMessage: "Vă mulțumim! Vă vom contacta în cel mai scurt timp posibil.",
    },
    footer: {
      description:
        "De peste 15 ani creăm mobilier la comandă, cu soluții adaptate oricărui spațiu și buget.",
      social: "Social",
      company: "Companie",
      aboutUs: "Despre noi",
      blog: "Blog",
      services: "Servicii",
      copyright: "© 2025 LEXLAAR.",
    },
    common: {
      contact: "Contacte",
      address: "Strada Bucovina 9F, Stăuceni, Chișinău (Port Mall)",
      phone: "+373 78 90 00 07",
      email: "lexlaar@gmail.com",
      workingHours: "Luni-Duminică: 10:00-19:00",
    },
    map: {
      title: "Locația noastră",
      subtitle:
        "Vă așteptăm să discutăm despre bucătăria visurilor voastre. Veniți să ne vizitați pentru a vedea calitatea execuției noastre!",
    },
    modal: {
      successTitle: "Mesajul a fost trimis!",
      successMessage: "Vă mulțumim! Vă vom contacta în cel mai scurt timp posibil.",
      from: "De la:",
      phone: "Telefon:",
      date: "Data:",
      autoClose: "Se va închide automat...",
    },
    about: {
      whoWeAre: {
        title: "Cine suntem noi?",
        description:
          "Suntem o echipă cu peste 15 ani de experiență în mobilier, pasionați să creăm piese care se potrivesc perfect casei tale. Ne ocupăm exclusiv de mobilier solid – bucătării, dulapuri, biblioteci, mese, paturi și orice ține de depozitare și living. Lucrăm cu materiale de calitate, atenți la detalii, și, mai ales, aproape de tine: ascultăm, înțelegem și transformăm ideile tale în mobilier care îți face viața mai frumoasă și mai practică. Colaborăm atât cu clienți din țară, cât și cu cei din străinătate, oferind aceeași atenție și profesionalism indiferent de locație.",
      },
      mission: {
        title: "Misiunea și valorile noastre",
        description:
          "Pentru noi, mobilierul nu e doar funcțional – e parte din personalitatea ta și din povestea casei tale. De aceea începem fiecare proiect printr-o discuție sinceră, ca să înțelegem exact ce îți dorești și cum trăiești în spațiul tău.\n\nNe ghidăm după câteva principii simple: calitate fără compromisuri, comunicare clară și respect pentru timpul și bugetul tău. Nu lucrăm pe bandă – fiecare piesă este gândită special pentru tine, cu măsuri exacte și finisaje atent lucrate.\n\nCeea ce ne motivează sunt oamenii: bucuria clienților când își văd spațiul transformat și încrederea cu care ne recomandă mai departe. Aceasta este energia care ne face să ridicăm ștacheta la fiecare proiect.",
      },
      advantages: {
        title: "De ce să alegi  LexAar",
        consultation: {
          title: "Consultanță gratuită și personalizată",
          description:
            "Venim la tine acasă, măsurăm spațiul și discutăm împreună exact ce îți trebuie, ca să găsim soluția care se potrivește cel mai bine, fără niciun cost.",
        },
        measurements: {
          title: "Măsurători de precizie",
          description:
            "Folosim echipamente profesionale pentru măsurători exacte, astfel încât mobilierul să se integreze perfect în spațiul tău.",
        },
        manufacturing: {
          title: "Fabricație locală cu materiale premium",
          description:
            "Lucrăm doar cu furnizori de încredere, iar tot procesul de fabricație se desfășoară în atelierul nostru, sub supravegherea directă.",
        },
        delivery: {
          title: "Livrare și montaj profesionist",
          description:
            "Echipa noastră se ocupă de transport în condiții sigure și montaj rapid, cu atenție la fiecare detaliu.",
        },
        warranty: {
          title: "Garanție și suport post-vânzare",
          description:
            "Îți oferim garanție completă și rămânem alături de tine pentru orice ajustări sau întrebări viitoare.",
        },
      },
    },
    reviews: {
      title: "Ce spun clienții noștri",
      review1: {
        quote:
          "Mobilierul a fost livrat exact cum am discutat, cu finisaje impecabile. Echipa a fost foarte profesionistă și atentă la fiecare detaliu. Recomand!",
        author: "Maria P., Chișinău",
      },
      review2: {
        quote:
          "Am fost impresionată de seriozitatea și promptitudinea cu care s-au ocupat de proiectul nostru. Bucătăria arată exact cum mi-am dorit.",
        author: "Alexandru M., Rezina",
      },
      review3: {
        quote:
          "Consultanța gratuită m-a convins să lucrez cu ei. M-au ajutat să optimizez spațiul mult mai bine decât îmi imaginam. Sunt foarte mulțumită!",
        author: "Elena R., Orhei",
      },
    },
    blog: {
      title: "Blog",
      back: "Înapoi",
      next: "Înainte",
      notFound: "Pagina nu a fost găsită.",
      descriptionNotAdded: "Descrierea nu a fost adăugată încă.",
      posts: {
        "1": {
          title: "Cum aleg materialul potrivit pentru mobila mea?",
          description:
            "Alegerea materialului potrivit depinde de mai mulți factori: buget, durabilitate, stilul dorit și...",
          fullContent: `Alegerea materialului potrivit depinde de mai mulți factori: buget, durabilitate, stilul dorit și funcționalitatea camerei. MDF-ul este un material accesibil, ușor de prelucrat și ideal pentru mobilier cu design modern, deoarece permite realizarea de forme complexe și finisaje variate. Lemnul masiv oferă durabilitate și un aspect premium, însă necesită întreținere regulată, protecție împotriva umezelii și a razelor directe de soare și are un cost mai ridicat. Blaturile pot fi fabricate din PAL laminat, quartz sau piatră naturală. PAL-ul laminat este economic și ușor de întreținut, quartz-ul este rezistent la zgârieturi și pete și oferă o durată lungă de viață, iar piatra naturală conferă eleganță, rezistență și o notă exclusivistă, dar necesită o atenție mai mare la întreținere. Alegerea corectă se face în funcție de buget, stilul camerei și nivelul de uzură preconizat.

## MDF-ul

este un material accesibil, ușor de prelucrat și ideal pentru mobilier cu design modern, deoarece permite realizarea de forme complexe și finisaje variate. Se folosește în special pentru fațadele bucătăriilor, dar și pentru dulapuri, corpuri de depozitare sau mobilier de birou, unde greutatea redusă și flexibilitatea în design sunt avantaje importante. MDF-ul poate fi vopsit în orice culoare, oferind astfel libertate mare de personalizare. Totuși, trebuie ferit de umezeală excesivă și de expunerea directă la soare, deoarece acestea pot afecta finisajul și stabilitatea materialului.

## Lemnul masiv

oferă durabilitate și un aspect premium, conferind mobilierului un aer natural și elegant. Este ideal pentru piese centrale, cum ar fi mese, paturi sau dulapuri mari, care trebuie să reziste mult timp. Lemnul masiv poate fi finisat cu lacuri, uleiuri sau ceară specială, protejându-l împotriva zgârieturilor, umezelii și variațiilor de temperatură. Avantajul major este că lemnul masiv poate fi recondiționat și șlefuit pentru a-și recăpăta aspectul inițial, oferind astfel o durată de viață foarte lungă. Dezavantajul constă în costul mai ridicat și necesitatea unei întrețineri periodice.

## Blaturile pot fi fabricate din PAL laminat, HPL, quartz sau piatră naturală.

• PAL laminat: economic, ușor de întreținut, rezistent la zgârieturi moderate. Ideal pentru mobilier de bucătărie sau birou, unde întreținerea simplă este un avantaj.
• HPL (High Pressure Laminate): foarte rezistent la zgârieturi, umezeală și temperaturi ridicate. Este în prezent unul dintre cele mai utilizate materiale pentru blaturi de bucătărie, datorită durabilității ridicate, întreținerii ușoare și gamei variate de culori și texturi.
• Quartz: foarte rezistent la zgârieturi, pete și temperaturi ridicate, ideal pentru blaturi de lucru și bucătării cu trafic intens. Necesită întreținere minimă și oferă un aspect uniform.
• Piatra naturală: oferă eleganță și rezistență, cu un aspect exclusivist. Este durabilă, dar necesită protecție împotriva petelor și curățare atentă pentru a preveni deteriorarea suprafeței.

## Sfaturi practice pentru alegerea materialului corect:

1. Stabilește bugetul și compară costurile pe termen lung, nu doar prețul inițial.
2. Ia în considerare funcționalitatea mobilierului și camera unde va fi plasat (bucătărie, living, dormitor, birou).
3. Alege materiale ușor de întreținut pentru camere cu trafic intens sau copii.
4. Testează mostre de materiale în lumina naturală a camerei pentru a observa nuanțele și efectul real al finisajului.
5. Gândește-te la combinarea materialelor pentru un efect estetic armonios și durabil (de exemplu, lemn masiv cu sticlă sau MDF cu metal).
6. Protejează mobilierul sensibil la umezeală și soare pentru a-i prelungi viața și a păstra aspectul inițial.

## Concluzie:

Alegerea corectă a materialului se face în funcție de buget, stilul camerei, nivelul de uzură preconizat și preferințele estetice. MDF și PAL sunt ideale pentru mobilier modern și economic, lemnul masiv conferă durabilitate și un aspect premium, iar blaturile din quartz sau piatră naturală aduc rezistență și eleganță. O alegere informată asigură mobilier practic, durabil și plăcut vizual pentru mulți ani.`,
        },
        "2": {
          title: "Ce culori și finisaje sunt potrivite pentru camerele mici?",
          description:
            "Culorile deschise, neutre sau pastelate fac ca încăperile mici să pară mai spațioase și luminoase. Finisajele mate dau un aspect elegant și modern...",
          fullContent: `Culorile deschise, neutre sau pastelate fac ca încăperile mici să pară mai spațioase și luminoase. Finisajele mate dau un aspect elegant și modern, în timp ce finisajele lucioase reflectă lumina și pot amplifica vizual dimensiunea camerei. Este recomandat să testezi mostre de materiale și culori în lumina naturală a camerei, pentru a observa cum se schimbă nuanțele pe parcursul zilei. Combinarea tonurilor calde cu cele reci poate adăuga profunzime și armonie, dar este important să nu aglomerezi vizual spațiul cu prea multe contraste. Finisajele trebuie să fie și ușor de întreținut, mai ales în zonele cu trafic intens sau cu risc de murdărire, cum ar fi bucătăriile și băile.

## Detalii practice:

• Culorile deschise precum alb, crem, gri deschis sau pasteluri (mentă, bleu, roz pal) măresc vizual spațiul.
• Finisajele lucioase pe mobilier sau pereți reflectă lumina și sporesc senzația de aerisire.
• Finisajele mate sunt ideale pentru a evita reflexiile excesive și pentru a crea o atmosferă elegantă.
• În camere cu iluminat natural redus, combinația de finisaje lucioase și culori calde poate compensa lumina slabă.
• Testează mostre pe pereți, mobilier sau podea, deoarece lumina naturală și artificială pot schimba vizibil culoarea.

## Sfaturi practice:

• Evită culorile foarte închise în camerele mici, deoarece reduc vizual dimensiunea spațiului.
• Combină culori complementare cu moderație pentru a crea profunzime fără aglomerare vizuală.
• Folosește finisaje ușor de întreținut în bucătării și băi (ex.: vopsea lavabilă sau MDF cu folii rezistente la apă).
• Poți adăuga oglinzi sau suprafețe reflectorizante pentru a amplifica senzația de spațiu.

## Concluzie:

Alegerea culorilor și finisajelor potrivite nu doar mărește vizual spațiul, ci definește și atmosfera camerei, îmbinând estetica cu funcționalitatea.`,
        },
        "3": {
          title: "Cum aleg între mobilier modular și personalizat?",
          description:
            "Mobilierul modular este o soluție rapidă și accesibilă, ideal pentru spațiile standard, unde dimensiunile pot fi adaptate ușor...",
          fullContent: `Mobilierul modular este o soluție rapidă și accesibilă, ideal pentru spațiile standard, unde dimensiunile pot fi adaptate ușor. Este ușor de montat și de reconfigurat, însă oferă mai puțină libertate de design. Mobilierul personalizat, pe de altă parte, este realizat exact pe măsura spațiului, permițând optimizarea fiecărui colț și integrarea funcționalităților specifice dorite. Deși costă mai mult și implică un timp de livrare mai mare, rezultatul final este unic și se potrivește perfect stilului locuinței și nevoilor utilizatorului. Alegerea depinde de dimensiunea camerei, complexitatea designului dorit și bugetul disponibil.

## Detalii practice:

• Mobilier modular: soluție rapidă, standardizată, ideală pentru camere cu dimensiuni obișnuite.
• Mobilier personalizat: optimizat pentru colțuri dificile, spații neregulate, și nevoi specifice de depozitare.
• Modularul permite înlocuirea sau reconfigurarea pieselor pe termen scurt.
• Personalizat poate integra tehnologii moderne (sertare cu soft-close, iluminat LED încorporat, prize ascunse, etc.).

## Sfaturi practice:

• Analizează funcționalitatea camerei: un birou modular poate fi suficient, dar un dressing în nișă necesită personalizare.
• Calculați bugetul total: mobilierul modular este mai economic inițial, dar personalizat poate oferi valoare pe termen lung prin utilizarea optimă a spațiului.
• Alege personalizat pentru mobilier pe măsura spațiului cu forme neregulate sau cu cerințe speciale.

## Concluzie:

Alegerea între modular și personalizat depinde de spațiu, buget și complexitatea funcționalităților dorite, asigurând eficiență și armonie vizuală.`,
        },
        "4": {
          title: "Cum se desfășoară procesul de comandă a mobilei la comandă?",
          description:
            "Procesul începe cu consultanța inițială, unde se discută preferințele de design, funcționalitatea dorită și bugetul...",
          fullContent: `Procesul începe cu consultanța inițială, unde se discută preferințele de design, funcționalitatea dorită și bugetul. Urmează măsurătorile precise ale spațiului, pentru a garanta o potrivire perfectă. Designerul creează un plan vizual și un model 3D al mobilierului, astfel încât clientul să poată vizualiza produsul final. După aprobarea designului, urmează producția mobiliei, folosind materiale și finisaje alese anterior. Ultimul pas este instalarea și verificarea finală pentru a te asigura că totul este conform specificațiilor și funcționalității. Planificarea atentă a fiecărei etape minimizează erorile și asigură un rezultat de calitate.

## Detalii practice:

• Consultanță inițială: discutarea stilului, funcționalităților și bugetului.
• Măsurători precise: folosirea echipamentelor speciale pentru o potrivire exactă.
• Model 3D: permite vizualizarea culorilor, finisajelor și proporțiilor mobilierului în spațiul real.
• Producție: folosirea materialelor selectate și verificarea calității în timpul procesului.
• Instalare: alinierea, fixarea și testarea funcțională a sertarelor, ușilor și accesoriilor.

## Sfaturi practice:

• Cere detalii despre materiale și finisaje disponibile înainte de proiectare.
• Asigură-te că designerul folosește modele 3D și randări realiste.
• Verifică contractul și termenele de livrare pentru a evita întârzierile.

## Concluzie:

Urmând un proces clar și structurat, mobilă la comandă garantează potrivire perfectă, calitate superioară și satisfacție maximă.`,
        },
        "5": {
          title: "Cum întrețin mobila din MDF sau lemn masiv?",
          description:
            "Întreținerea corectă prelungește durata de viață a mobilierului și păstrează aspectul său. Folosește cârpe moi și soluții de curățare blânde, evitând substanțele chimice agresive...",
          fullContent: `Întreținerea corectă prelungește durata de viață a mobilierului și păstrează aspectul său. Folosește cârpe moi și soluții de curățare blânde, evitând substanțele chimice agresive sau apa în exces, care pot deteriora finisajul. Protejează mobila de expunerea directă la soare și de umezeală excesivă. Evită zgârieturile prin plasarea de suporturi sau protecții pe suprafețele de lucru. Curățarea regulată și aplicarea de soluții de protecție pentru lemn sau finisaje specifice menține aspectul original și previne uzura prematură.

## Detalii practice:

• Folosește cârpe moi, din microfibră, pentru curățarea zilnică.
• Aplică produse speciale de întreținere pentru lemn sau MDF la intervale regulate.
• Protejează mobilierul de soare și umezeală pentru a preveni decolorarea sau deformarea.
• Folosește suporturi pentru tacâmuri, vase sau obiecte grele pentru a evita zgârieturile.

## Sfaturi practice:

• Evită folosirea detergenților agresivi sau a bureților abrazivi.
• Șterge imediat lichidele vărsate pentru a preveni deteriorarea.
• Folosește ceară sau ulei special pentru lemn masiv pentru a menține strălucirea.

## Concluzie:

Întreținerea regulată și corectă prelungește viața mobilierului și menține aspectul său estetic.`,
        },
        "6": {
          title: "Ce trebuie să știu despre combinarea diferitelor materiale?",
          description:
            "Combinarea MDF, lemn și sticlă trebuie făcută ținând cont de rezistența și compatibilitatea fiecărui material. Structura mobilierului trebuie să fie stabilă, iar greutatea distribuită uniform...",
          fullContent: `Combinarea MDF, lemn și sticlă trebuie făcută ținând cont de rezistența și compatibilitatea fiecărui material. Structura mobilierului trebuie să fie stabilă, iar greutatea distribuită uniform. Estetica este la fel de importantă: textura lemnului masiv poate fi completată de suprafețe lucioase sau mate de MDF, iar sticla poate adăuga un efect vizual elegant și modern. Consultarea unui designer ajută la alegerea combinațiilor potrivite, astfel încât mobilierul să fie atât sigur, cât și estetic.

## Detalii practice:

• MDF – se combină foarte bine cu metal sau sticlă, creând un look modern și minimalist. Este ușor de finisat în culori variate și se potrivește în spații unde se dorește uniformitate vizuală. Totuși, trebuie evitat contactul excesiv cu apa, fiind mai puțin rezistent la umezeală decât lemnul masiv.
• Lemn masiv – este un material nobil și rezistent, care poate fi pus în valoare prin contrast cu sticlă (pentru un efect elegant și aerisit), cu MDF (pentru o combinație clasic-modernă), sau cu piatră (pentru un design sofisticat și durabil). Textura naturală a lemnului face ca fiecare piesă să fie unică, iar întreținerea corectă îi prelungește viața.
• Sticla – aduce transparență și luminozitate. Poate fi folosită ca blat, poliță sau ușă de vitrină, combinată cu lemn pentru contrast natural, cu metal pentru un design industrial, sau cu MDF pentru un stil modern. Sticla poate fi transparentă, mată, sablată sau colorată, în funcție de efectul dorit.
• Metalul – se potrivește în special cu lemn și MDF, oferind rezistență și un aer contemporan. Poate fi folosit ca detaliu decorativ (mânere, rame, picioare de mobilier) sau ca parte structurală. Finisajele variază de la inox lucios la fier forjat sau metal vopsit, fiecare schimbând complet percepția estetică.
• Piatra naturală sau compozit (marmură, granit, quartz) – este ideală pentru blaturi sau zone cu uz intens. Se combină bine cu lemn pentru un contrast între cald și rece, sau cu metal pentru un aspect industrial-luxos. Este rezistentă, dar necesită întreținere specifică pentru a evita petele sau zgârieturile.
• Textilele (stofă, piele naturală sau ecologică) – completează mobilierul prin confort și echilibru vizual. Folosite alături de lemn aduc căldură, iar lângă metal sau sticlă înmoaie aspectul rece. Culorile și texturile textilelor pot lega întreaga compoziție a unei camere.

## Sfaturi practice:

• Distribuie greutatea uniform: sticla și piatra sunt grele și fragile, deci trebuie sprijinite corect pe structuri rezistente din lemn sau metal.
• Alege combinații care se completează estetic: lemnul cald echilibrează metalul rece, sticla aerisește MDF-ul lucios, iar piatra adaugă eleganță lângă lemnul rustic.
• Ține cont de întreținere: piatra trebuie tratată periodic, MDF-ul protejat de umezeală, lemnul masiv ceruit sau lăcuit, sticla curățată regulat pentru a rămâne clară.
• Folosește materialele în funcție de funcționalitate: MDF pentru suprafețe mari și uniforme, lemn pentru structuri durabile, metal pentru rezistență, sticlă pentru detalii elegante, textile pentru confort.
• Consultă un designer: îți poate recomanda raportul corect între materiale, astfel încât piesa finală să fie armonioasă, sigură și practică.

## Concluzie:

Combinarea corectă a materialelor nu ține doar de aspectul vizual, ci și de rezistență, întreținere și funcționalitate. Alegerea atentă a proporțiilor între MDF, lemn, sticlă, metal, piatră și textile poate transforma mobilierul într-o piesă echilibrată, practică și durabilă. Un design bine gândit îmbină frumusețea naturală a lemnului, modernitatea MDF-ului, transparența sticlei și soliditatea metalului sau pietrei, creând un mobilier care îmbină utilul cu esteticul.`,
        },
        "7": {
          title: "Cum planific iluminatul în camere cu mobilă personalizată?",
          description:
            "Iluminatul trebuie să fie funcțional și estetic. Spoturile și benzile LED pot evidenția anumite zone, cum ar fi rafturile sau blaturile de lucru...",
          fullContent: `Iluminatul trebuie să fie funcțional și estetic. Spoturile și benzile LED pot evidenția anumite zone, cum ar fi rafturile sau blaturile de lucru. Lumina ambientală creează atmosferă, iar iluminatul direct permite desfășurarea activităților cotidiene. Distribuția corectă a surselor de lumină poate evidenția designul mobilierului și poate da senzația de spațiu mai mare. De asemenea, alegerea temperaturii de culoare potrivite (caldă sau rece) influențează atmosfera generală a camerei și confortul vizual.

## Detalii practice:

• Spoturi LED: perfecte pentru evidențierea rafturilor, sertarelor sau obiectelor decorative.
• Benzile LED: integrate sub rafturi sau cornișe pentru accentuarea mobilierului și iluminare indirectă.
• Lumina ambientală: creează senzația de spațiu și confort vizual, reducând contrastul între zonele luminoase și cele întunecate.
• Iluminatul direct: necesar în zone de lucru (birouri, blaturi de bucătărie, mese) pentru a evita umbrele și oboseala vizuală.
• Temperatura de culoare: caldă (2700–3500K) pentru living și dormitoare, rece (4000–6000K) pentru bucătării, birouri sau zone de lucru.
• Distribuția surselor: combină lumina generală cu cea accentuată și ambientală pentru flexibilitate și efect estetic.

## Sfaturi practice:

• Planifică mai multe surse de lumină pentru a evita umbrele nedorite.
• Încorporează iluminatul în mobilier pentru un design curat și modern.
• Folosește variatoare (dimmer) pentru ajustarea intensității în funcție de activitate.
• Testează amplasamentul luminilor în 3D sau cu mostre reale înainte de instalare.

## Concluzie:

Un iluminat bine planificat evidențiază designul mobilierului, sporește funcționalitatea și creează atmosferă. Combinarea luminii ambientale, directe și accentuate, ajustată corespunzător temperaturii de culoare, transformă orice cameră într-un spațiu confortabil și elegant.`,
        },
        "8": {
          title:
            "Ce garanție oferă mobila la comandă și cum funcționează serviciile post-livrare?",
          description:
            "Garanția acoperă defectele de fabricație și problemele de calitate care apar în mod normal. Nu acoperă uzura normală sau deteriorările cauzate de factori externi...",
          fullContent: `Garanția acoperă defectele de fabricație și problemele de calitate care apar în mod normal. Nu acoperă uzura normală sau deteriorările cauzate de factori externi, cum ar fi umezeala excesivă sau impactul fizic. Pentru reclamații, este important să păstrezi contractul și documentele de achiziție și să contactezi furnizorul. Serviciile post-livrare includ repararea sau înlocuirea pieselor defecte, iar respectarea procedurii corecte asigură o soluționare rapidă și eficientă.

## Detalii practice:

• Garanția tipică variază între 12 și 36 luni, în funcție de producător și tipul de mobilier.
• Include reparații, înlocuirea pieselor defecte și verificarea funcționalității.
• Nu acoperă deteriorări cauzate de apă, foc, impact fizic sau uzură normală.

## Sfaturi practice:

• Păstrează factura și contractul pentru a facilita reclamațiile.
• Verifică termenii garanției înainte de achiziție.
• Contactează furnizorul imediat ce observi defecte pentru rezolvare rapidă.

## Concluzie:

Serviciile post-livrare și garanția corect administrată oferă siguranță și confort, asigurând protecția investiției tale în mobilă.`,
        },
        "9": {
          title:
            "Cum pot evalua calitatea unei mobile la comandă înainte de a o comanda?",
          description:
            "Pentru a evalua calitatea mobilei, verifică tipul de materiale folosite, grosimea și densitatea plăcilor MDF sau PAL, precum și finisajele...",
          fullContent: `Pentru a evalua calitatea mobilei, verifică tipul de materiale folosite, grosimea și densitatea plăcilor MDF sau PAL, precum și finisajele. Mobilierul de calitate are îmbinări precise, fără spații inegale sau margini proaste. Testează deschiderea sertarelor și ușilor, care trebuie să fie line și fără zgomot. Este important să ceri mostre de materiale și să inspectezi lucrări anterioare realizate de furnizor pentru a te asigura că standardele de execuție sunt înalte.

## Detalii practice:

• Materiale: MDF dens, PAL de calitate superioară sau lemn masiv verificat.
• Finisaje: uniformitate, netezime, fără defecte sau imperfecțiuni vizibile.
• Îmbinări: precise, fără spații vizibile sau margini inegale.
• Funcționalitate: uși și sertare deschid/închid lin, fără zgomot.

## Sfaturi practice:

• Cere mostre și testează culorile și textura.
• Verifică lucrările anterioare ale furnizorului pentru referințe.
• Compară grosimea plăcilor și calitatea finisajelor între mai mulți furnizori.

## Concluzie:

O evaluare atentă a materialelor, finisajelor și execuției asigură alegerea unei mobile durabile și estetic plăcute.`,
        },
        "10": {
          title: "Cât durează producția și livrarea mobilei la comandă?",
          description:
            "Timpul de producție și livrare a mobilei la comandă diferă în funcție de complexitatea proiectului, materialele alese și disponibilitatea resurselor...",
          fullContent: `Timpul de producție și livrare a mobilei la comandă diferă în funcție de complexitatea proiectului, materialele alese și disponibilitatea resurselor. Mobilierul realizat la comandă trece prin mai multe etape: consultanță, proiectare, alegerea materialelor, execuție, finisare, transport și montaj. Fiecare dintre aceste etape adaugă timp la proces, însă rezultatul final este o piesă de mobilier adaptată perfect spațiului și nevoilor clientului.

Un proiect simplu, cu linii drepte și materiale standard, poate fi finalizat mai repede, în timp ce un proiect complex, care implică fronturi vopsite, elemente curbe, finisaje manuale sau feronerie specială, necesită mai mult timp de lucru. De asemenea, disponibilitatea materialelor joacă un rol important: anumite finisaje sau tipuri de blat pot avea timpi de livrare mai mari dacă sunt pe comandă specială.

## Sfaturi practice:

• Stabilește de la început un calendar realist împreună cu producătorul.
• Întreabă care este termenul estimat pentru fiecare etapă (proiectare, producție, montaj).
• Ia în calcul eventualele întârzieri cauzate de lipsa materialelor sau de modificările ulterioare în proiect.

## Concluzie:

Durata de producție și livrare nu este fixă, ci depinde de complexitatea designului, tipul de materiale și disponibilitatea lor. Comunicarea constantă cu producătorul și stabilirea unor termene clare ajută la evitarea neplăcerilor.`,
        },
        "11": {
          title: "Cum iau corect măsurătorile pentru mobila la comandă?",
          description:
            "Măsurătorile exacte sunt fundamentale pentru ca mobilierul la comandă să se potrivească perfect în spațiul ales. Un centimetru în plus sau în minus poate face diferența...",
          fullContent: `Măsurătorile exacte sunt fundamentale pentru ca mobilierul la comandă să se potrivească perfect în spațiul ales. Un centimetru în plus sau în minus poate face diferența între un montaj impecabil și o situație dificilă care necesită ajustări costisitoare.

Pentru început, pereții trebuie măsurați în mai multe puncte, deoarece rareori sunt perfect drepți. Este important să verifici lungimea, lățimea și înălțimea în cel puțin trei locuri diferite pentru fiecare dimensiune. Apoi, notează poziția prizelor, a întrerupătoarelor, a țevilor și a altor obstacole care pot influența proiectarea mobilierului. Înălțimea camerei, deschiderea ușilor și a ferestrelor, precum și eventualele grinzi sau coloane trebuie luate în calcul.

## Sfaturi practice:

• Măsoară cu o ruletă metalică și verifică de două ori fiecare valoare.
• Marchează pe o schiță poziția elementelor fixe din cameră.
• Dacă nu ai experiență, apelează la un specialist pentru măsurători finale, înainte de începerea producției.

## Concluzie:

Măsurătorile corecte sunt cheia unui mobilier personalizat reușit. Investind timp în această etapă, vei evita ajustările ulterioare și vei obține un produs care se integrează perfect în spațiu.`,
        },
        "12": {
          title: "Ce feronerie să aleg pentru mobila la comandă?",
          description:
            "Feroneria este componenta invizibilă care influențează direct funcționalitatea și durata de viață a mobilierului. Chiar dacă par detalii minore, balamalele, glisierele sau sistemele de ridicare fac diferența...",
          fullContent: `Feroneria este componenta invizibilă care influențează direct funcționalitatea și durata de viață a mobilierului. Chiar dacă, la prima vedere, balamalele, glisierele sau sistemele de ridicare par detalii minore, ele fac diferența între o mobilă care funcționează impecabil ani la rând și una care începe să se deterioreze rapid.

Balamalele cu amortizare sunt recomandate pentru uși, deoarece reduc zgomotul și previn trântirea, protejând în același timp materialul. Glisierele de calitate permit sertarelor să culiseze lin și să suporte greutăți mari, fără să se blocheze sau să se strâmbe în timp. Pentru dulapurile suspendate sau fronturile mari, sistemele lift și mecanismele push-to-open adaugă confort și ușurință în utilizare.

## Sfaturi practice:

• Investește în feronerie de calitate pentru piesele folosite zilnic.
• Alege mecanisme cu amortizare pentru sertare și balamale.
• În showroom-uri, testează funcționalitatea sertarelor și a ușilor pentru a simți diferența între feroneria standard și cea premium.

## Concluzie:

Feroneria este o investiție pe termen lung. Alegerea unor mecanisme de calitate garantează confort, durabilitate și funcționalitate zilnică fără probleme.`,
        },
        "13": {
          title: "Pot returna mobila personalizată?",
          description:
            "Mobila personalizată este realizată special pentru nevoile și dimensiunile clientului, ceea ce o face diferită de produsele standardizate. Din acest motiv, legislația privind retururile se aplică diferit...",
          fullContent: `Mobila personalizată este realizată special pentru nevoile și dimensiunile clientului, ceea ce o face diferită de produsele standardizate. Din acest motiv, legislația privind retururile se aplică diferit: în timp ce produsele standard pot fi returnate în termen legal, piesele personalizate nu beneficiază, de obicei, de același regim, deoarece nu pot fi revândute altui client.

Totuși, drepturile consumatorului rămân valabile în cazul unor defecte de fabricație, probleme de montaj sau neconcordanțe între produsul livrat și proiectul semnat. În aceste situații, producătorul este obligat să repare, să înlocuiască sau să ofere soluții pentru remediere.

## Sfaturi practice:

• Citește cu atenție contractul și politica de retur înainte de a comanda.
• Păstrează documentele, proiectele și schițele semnate.
• Cere mostre de materiale și confirmă în scris toate detaliile (culori, finisaje, dimensiuni).

## Concluzie:

Mobila personalizată nu poate fi returnată ca un produs standard, dar beneficiile de garanție și obligațiile producătorului rămân valabile. Claritatea în comunicare și contract protejează ambele părți.`,
        },
        "14": {
          title: "Cum se calculează prețul unei comenzi de mobilă?",
          description:
            "Prețul unei comenzi de mobilă personalizată se calculează pe baza mai multor factori: tipul de material, complexitatea designului, feroneria folosită, finisajele alese și manopera necesară...",
          fullContent: `Prețul unei comenzi de mobilă personalizată se calculează pe baza mai multor factori: tipul de material, complexitatea designului, feroneria folosită, finisajele alese și manopera necesară. Nu există un tarif fix universal, ci fiecare proiect este evaluat individual.

Materialele influențează cel mai mult costul: PAL-ul melaminat este o opțiune economică, MDF-ul vopsit oferă un aspect elegant, iar lemnul masiv aduce durabilitate și valoare premium. Finisajele speciale, vopsirea în culori personalizate sau inserțiile din sticlă și metal adaugă complexitate și, implicit, un cost mai mare.

## Sfaturi practice:

• Solicită o ofertă detaliată, care să includă materiale, feronerie, finisaje și servicii de montaj.
• Compară ofertele în funcție de calitate, nu doar de preț.
• Alege transparența: un producător serios explică ce intră în costul final.

## Concluzie:

Prețul mobilei la comandă reflectă calitatea materialelor și complexitatea proiectului. Un deviz clar și detaliat îți permite să faci o alegere informată și să înțelegi unde se duc resursele.`,
        },
        "15": {
          title: "Cum optimizez spațiul mic cu mobilă personalizată?",
          description:
            "Mobilierul personalizat este soluția ideală pentru apartamente sau garsoniere, unde fiecare centimetru contează. Prin proiectare inteligentă, spațiile aparent inutile pot deveni zone de depozitare...",
          fullContent: `Mobilierul personalizat este soluția ideală pentru apartamente sau garsoniere, unde fiecare centimetru contează. Prin proiectare inteligentă, spațiile aparent inutile pot deveni zone de depozitare, iar piesele multifuncționale pot transforma o cameră mică într-un spațiu practic și organizat.

Mobilierul pe verticală valorifică pereții până la tavan, creând spațiu suplimentar fără a încărca zona de circulație. Sertarele integrate sub pat sau canapelele cu spațiu de depozitare sunt soluții practice și discrete. Pentru bucătării mici, mesele rabatabile și corpurile suspendate cu adâncime redusă sunt extrem de utile.

## Sfaturi practice:

• Folosește mobilier modular și piese multifuncționale.
• Alege culori deschise și finisaje lucioase pentru a da impresia de spațiu.
• Planifică iluminatul astfel încât să scoată în evidență zonele utile.

## Concluzie:

Mobilierul personalizat transformă spațiile mici în încăperi eficiente și estetice, prin exploatarea inteligentă a fiecărui centimetru.`,
        },
        "16": {
          title: "Cum întrețin corect mobila personalizată pentru a-i prelungi durata de viață?",
          description:
            "Întreținerea corectă a mobilei la comandă este esențială pentru păstrarea aspectului și funcționalității pe termen lung. Fiecare material necesită un regim specific de curățare și protecție...",
          fullContent: `Întreținerea corectă a mobilei la comandă este esențială pentru păstrarea aspectului și funcționalității pe termen lung. Fiecare material necesită un regim specific de curățare și protecție.

PAL-ul și MDF-ul melaminat se curăță ușor cu o lavetă umedă și soluții blânde, evitând substanțele abrazive. MDF-ul vopsit necesită mai multă atenție: se recomandă produse de curățare delicate și evitarea expunerii prelungite la soare. Lemnul masiv are nevoie de întreținere periodică cu uleiuri sau lacuri speciale, care îi păstrează frumusețea naturală și îl protejează de umiditate.

## Sfaturi practice:

• Evită șocurile mecanice și temperaturile extreme.
• Folosește suporturi pentru pahare fierbinți sau obiecte grele.
• Verifică periodic feroneria și strânge șuruburile dacă este nevoie.

## Concluzie:

O rutină simplă de curățare și protecție prelungește durata de viață a mobilei și menține aspectul estetic al acesteia.`,
        },
        "17": {
          title: "Ce garanție are mobila personalizată și cum funcționează serviciile post-livrare?",
          description:
            "Mobila realizată la comandă beneficiază de garanție legală și, în multe cazuri, de servicii post-livrare care includ montaj, ajustări sau reparații. Durata și condițiile garanției diferă în funcție de producător și de materialele utilizate...",
          fullContent: `Mobila realizată la comandă beneficiază de garanție legală și, în multe cazuri, de servicii post-livrare care includ montaj, ajustări sau reparații. Durata și condițiile garanției diferă în funcție de producător și de materialele utilizate.

Garanția acoperă, în general, defectele de fabricație, problemele de structură și funcționalitate ale feroneriei sau ale îmbinărilor. Nu sunt incluse daunele cauzate de utilizarea necorespunzătoare, lovituri sau expunerea la factori externi precum umezeala excesivă sau focul.

## Sfaturi practice:

• Solicită certificatul de garanție și păstrează factura de achiziție.
• Întreabă dacă producătorul oferă servicii de reglaj gratuit după montaj.
• Verifică dacă există opțiuni de service și după expirarea garanției.

## Concluzie:

Garanția și serviciile post-livrare oferă siguranță și sprijin clientului. Un producător serios va răspunde prompt la eventualele probleme și va asigura suport pe termen lung.`,
        },
        "18": {
          title: "Cum verific calitatea mobilei la comandă înainte de a o comanda?",
          description:
            "Evaluarea calității mobilei înainte de plasarea unei comenzi este crucială pentru a evita dezamăgirile. Calitatea se reflectă în materialele folosite, în atenția la detalii și în modul în care sunt realizate îmbinările...",
          fullContent: `Evaluarea calității mobilei înainte de plasarea unei comenzi este crucială pentru a evita dezamăgirile. Calitatea se reflectă în materialele folosite, în atenția la detalii și în modul în care sunt realizate îmbinările.

Verifică grosimea plăcilor, finisajele aplicate și stabilitatea structurii. Sertarele trebuie să culiseze lin, balamalele să fie reglabile și solide, iar suprafețele să fie uniforme și fără imperfecțiuni. Întreabă despre proveniența materialelor și cere mostre pentru a vedea textura și culoarea reale.

## Sfaturi practice:

• Vizitează showroom-ul și testează piesele expuse.
• Cere mostre de materiale pentru a le analiza în lumina naturală a casei.
• Solicită referințe sau fotografii cu lucrări anterioare ale producătorului.

## Concluzie:

O evaluare atentă a calității înainte de comandă te ajută să faci o alegere corectă și să te bucuri de mobilier durabil și estetic.`,
        },
      },
    },
    colorsPage: {
      title: "Culori personalizate pentru bucătăria ta",
      ctaText: "Pentru recomandări personalizate, contactează-ne.",
      ctaButton: "Solicită oferta",
    },
    categoryPage: {
      defaultCategoryName: "Categorie",
    },
    categories: {
      next: "Următor",
      productNotFound: "Produsul nu a fost găsit.",
      placeholderDescription:
        "Acest model este disponibil la comandă cu dimensiunile și finisajele dorite. Contactați-ne pentru o consultație personalizată gratuită și o ofertă adaptată spațiului dumneavoastră.",
      bucatarii: [
        {
          title: "Bucătărie Urban Wood",
          description:
            "Design elegant, cu linii curate şi finisaje mate, această bucătărie îmbină funcționalitatea cu rafinamentul contemporan. Fronturile gri antracit oferă un aspect sofisticat și ușor de întreţinut, iar accentele din lemn adaugă căldură și echilibru vizual. Blatul și peretele din spate sunt realizate din material cu textură de marmură gri, conferind un plus de eleganță și rezistență în timp. Iluminarea minimalistă pe șină pune în valoare fiecare detaliu al mobilierului. Ideală pentru spații moderne, această bucătărie oferă o combinație perfectă între estetică și funcționalitate.",
        },
        {
          title: "Bucătărie Arctic Line",
          description:
            "Design minimalist și luminos, definit de fronturi albe mate combinate cu accente grafit și o insulă centrală practică. Liniile curate și iluminarea discretă creează un spațiu aerisit și modern, ideal pentru interioare contemporane. Materialele rezistente și organizarea ergonomică oferă un echilibru perfect între estetică și confort zilnic.",
        },
        {
          title: "Bucătărie Nordic Home",
          description:
            "O bucătărie caldă și primitoare, unde nuanțele naturale de lemn se îmbină armonios cu suprafețele albe și lumina generoasă. Designul inspirat din stilul scandinav oferă funcționalitate, simplitate și o atmosferă relaxantă, perfectă pentru spații deschise și viață de familie.",
        },
        {
          title: "Bucătărie Loft Beige",
          description:
            "Eleganță discretă prin tonuri bej mate și iluminare ambientală integrată. Fronturile fără mânere și finisajele uniforme creează un aspect rafinat și modern, în timp ce accentele calde adaugă confort vizual. Ideală pentru interioare sofisticate și spații luminoase.",
        },
        {
          title: "Bucătărie Amber Touch",
          description:
            "Un design spectaculos cu insulă generoasă și accente calde de lemn, completate de un contrast elegant cu blatul și backsplash-ul închis. Zona de bar adaugă funcționalitate și stil, transformând bucătăria într-un spațiu perfect pentru socializare și gătit.",
        },
        {
          title: "Bucătărie Walnut Flow",
          description:
            "Textura bogată a lemnului nuc se combină cu suprafețe moderne și un blat masiv cu prezență vizuală puternică. Designul transmite căldură și stabilitate, fiind ideal pentru interioare premium care pun accent pe materiale naturale și detalii sofisticate.",
        },
        {
          title: "Bucătărie Industrial Grey",
          description:
            "Stil industrial autentic, caracterizat de tonuri închise, texturi brute și iluminare direcționată. Contrastul dintre lemn și suprafețele mate creează profunzime și personalitate, oferind un spațiu modern, masculin și extrem de practic.",
        },
        {
          title: "Bucătărie Soft Contrast",
          description:
            "O combinație echilibrată între fronturi deschise și accente naturale de lemn, ce oferă un aspect calm și elegant. Designul suspendat și liniile minimaliste creează senzația de spațiu și ordine, fiind ideal pentru interioare moderne și rafinate.",
        },
        {
          title: "Bucătărie Marble Line",
          description:
            "Fronturi albe lucioase completate de un backsplash cu textură de marmură ce devine elementul central al designului. Aspectul curat și luminos oferă eleganță atemporală, iar materialele durabile asigură funcționalitate pe termen lung.",
        },
        {
          title: "Bucătărie Concrete Mood",
          description:
            "Un design îndrăzneț cu finisaje ce imită betonul și electrocasnice integrate perfect. Contrastul dintre texturile industriale și suprafețele minimaliste creează o atmosferă modernă, ideală pentru interioare urbane cu personalitate.",
        },
        {
          title: "Bucătărie Sand Gloss",
          description:
            "Fronturi lucioase în tonuri nisipii ce reflectă lumina și creează o atmosferă caldă și elegantă. Configurația ergonomică și spațiile bine optimizate transformă bucătăria într-un loc confortabil, potrivit pentru utilizare zilnică și design rafinat.",
        },
        {
          title: "Bucătărie Forest Light",
          description:
            "Un mix armonios între lemn natural și suprafețe deschise, completat de un backsplash cu textură expresivă. Iluminarea integrată evidențiază materialele și creează o atmosferă relaxantă, perfectă pentru interioare moderne cu accente naturale.",
        },
      ],
      paturi: [
        { title: "Pat Modern" },
        { title: "Pat Classic" },
        { title: "Pat Premium" },
      ],
      dulapuri: [
        { title: "Dulap Modern" },
        { title: "Comodă Premium" },
        { title: "Dulap Classic" },
      ],
    },
    contactSection: {
      title: "Visezi la o Bucătărie Nouă? Oferim consultanță gratuită pentru bucătăria ta.",
      description: "Te ajutăm să îți aduci ideile la viață, cu sfaturi personalizate care se potrivesc perfect stilului tău.",
      formTitle: "Începe transformarea bucătăriei tale",
      successTitle: "Mesajul a fost trimis!",
      successMessage: "Vă mulțumim! Vă vom contacta în cel mai scurt timp posibil.",
    },
    galleryModal: {
      share: "Distribuie",
      linkCopied: "Link copiat",
    },
    cookieConsent: {
      title: "Utilizarea Cookie-urilor",
      text: "Utilizăm cookie-uri pentru a ne asigura că vă oferim cea mai bună experiență pe site-ul nostru. Dacă continuați să utilizați acest site, vom presupune că sunteți mulțumit de acest lucru.",
      privacyLink: "Politica de confidențialitate",
      accept: "De acord",
      reject: "Refuz",
      privacyAlert: "Politica de confidențialitate va fi disponibilă în curând.",
      mustAcceptAlert: "Pentru a utiliza site-ul, trebuie să acceptați utilizarea cookie-urilor.",
    },
  },
  EN: {
    header: {
      servicii: "Services",
      despreNoi: "About us",
      blog: "Blog",
      solicitOferta: "Request offer",
    },
    home: {
      hero: {
        title: "Custom furniture",
        subtitle: "Modern kitchens",
        heading1: "Custom furniture.",
        heading2: "Professional design.",
        heading3: "Premium execution.",
        description:
          "We handle measurements, design, manufacturing and free installation — you just enjoy the final result.",
        ctaButton: "Request offer",
        benefit1: "10,000+ satisfied clients",
        benefit2: "15+ years of experience",
        benefit3: "3D design",
        benefit4: "5 years exporting furniture to Europe",
        benefit5: "Free installation",
      },
      block2: {
        title: "Discover our collections",
        bucatarii: "Kitchens",
        paturi: "Beds",
        dulapuriSiComode: "Wardrobes & Dressers",
      },
      colorBlock: {
        mainTitle: "CUSTOM COLORS FOR YOUR KITCHEN",
        subtitle: "FUNCTIONAL. ELEGANT. PERSONAL.",
        feature1: "Choose the color that tells your story",
        feature2: "Discover what fits your style best",
        feature3: "Get inspired and get closer to your ideal style",
        feature4: "Premium finishes, easy to maintain",
        feature5: "Modern design, ready to integrate into any home",
        buttonText: "View colors",
      },
      qualityBlock: {
        title: "The quality of our work matters to every client",
        subtitle:
          "We ensure that every furniture project is perfect, from consultation to warranty.",
        item1: "Free individual consultation for each client",
        item2: "Furniture installation at no extra cost",
        item3: "Custom solutions for every order",
        item4: "5-year warranty for your peace of mind",
      },
      processBlock: {
        title: "From idea to reality:\n6 steps to your perfect furniture",
        step1Title: "Fill out the form",
        step1Desc: "Our manager will contact you to discuss further details.",
        step2Title: "Custom design & 3D visualization",
        step2Desc: "We come, measure, and show you the furniture in 3D before production.",
        step3Title: "Custom furniture to your taste",
        step3Desc: "Your furniture will be made with care, using state-of-the-art technology.",
        step4Title: "Fast and free delivery",
        step4Desc: "We ensure delivery and safety. Free delivery in Chișinău",
        step5Title: "Professional installation",
        step5Desc: "We install with precision, ensuring perfect integration of the furniture.",
        step6Title: "Warranty included",
        step6Desc: "After installation, we offer a 5-year warranty on the furniture.",
      },
      projectsBlock: {
        title: "Recent projects",
        project1Title: "Kitchen Industrial Grey",
        project2Title: "Kitchen Marble Line",
        project3Title: "Kitchen Urban Wood",
        project4Title: "Recent project",
        project5Title: "Recent project",
        project6Title: "Recent project",
        project7Title: "Recent project",
        project1Description:
          "Modern kitchen with minimalist design, elegant combination of natural wood and anthracite, perfectly balanced between style and functionality.",
        project2Description:
          "White marble surfaces and glossy finishes create an atmosphere of refined luxury, ideal for modern kitchens.",
        project3Description:
          "Natural wood in warm tones blends rustic aesthetics with contemporary functionality, offering a welcoming space.",
        project4Description:
          "Project by LexAar. Custom furniture tailored to the space and client's needs.",
        project5Description:
          "Project by LexAar. Custom furniture tailored to the space and client's needs.",
        project6Description:
          "Project by LexAar. Custom furniture tailored to the space and client's needs.",
        project7Description:
          "Project by LexAar. Custom furniture tailored to the space and client's needs.",
      },
  },
  services: {
    title: "Our services",
      intro:
        "We take care of every stage of your project, from planning to installation, so that the furniture is exactly as you wish.",
      blocks: {
        design3d: {
          title: "Custom Design & 3D Visualization",
          description:
            "The first step in creating successful furniture is to understand your space and needs. We come to you, take precise measurements, and discuss together style, functionality, and preferences. We ensure that we take into account every detail, from dimensions and compartmentalization to how the furniture will harmoniously integrate into your home. This stage provides the foundation for building exactly what you want, without compromises.",
        },
        planning: {
          title: "Design and planning",
          description:
            "After we have all the necessary information, we move on to the design phase. We present ideas in a clear form, discuss material options, colors and finishes, and together choose the right solutions. Our goal is to combine aesthetic aspect with functionality, so that the furniture is not only beautiful, but also practical. At this stage, every detail is carefully thought out, so that the final result perfectly matches your lifestyle and the space you have available.",
        },
        production: {
          title: "Production and finishing",
          description:
            "Once the project is approved, the furniture goes into production. We use quality materials and modern technologies, but we also maintain attention to detail and care for impeccable finishes. Our team works professionally to transform the plan into reality, respecting exactly the requirements established with you. Each piece is carefully checked and finished, so that you can enjoy durable, elegant furniture perfectly adapted to your home.",
        },
        delivery: {
          title: "Delivery and installation",
          description:
            "When the furniture is ready, we bring it directly to you and take care of the installation. The entire process is carried out quickly and professionally, so that you have no hassle. We install each element carefully and check that everything is functional and correctly placed. In the end, you receive a fully furnished space, with furniture ready for immediate use, so that you can enjoy comfort and a result exactly as you imagined.",
        },
        international: {
          title: "Our services reach wherever you need",
          description:
            "Whether you are in Romania, Germany, Italy, France, Austria or Spain, everything we make to order for our clients – from design and production to delivery and installation – can be accessed not only locally, but also across borders. Our team ensures that the furniture arrives safely and is professionally installed, maintaining the same attention to detail and quality that defines us. Thus, the complete experience we offer our clients remains the same, without compromises, anywhere in the world.",
        },
      },
    },
    cta: {
      text: "Perfect furniture starts with a simple step: contact us! You don't need to know all the details from the beginning – we bring you ideas, solutions and guide you through every stage. From design to installation and warranty, we take care of everything, so you have an easy and pleasant experience.",
      button: "Request offer",
    },
    form: {
      title: "Have ideas? We guide you.",
      subtitle: "Fill out the form and discover the perfect solutions for your furniture",
      name: "First Name, Last Name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage: "Thank you! We will contact you as soon as possible.",
    },
    footer: {
      description:
        "For over 15 years we have been creating custom furniture, with solutions adapted to any space and budget.",
      social: "Social",
      company: "Company",
      aboutUs: "About us",
      blog: "Blog",
      services: "Services",
      copyright: "© 2025 LEXLAAR.",
    },
    common: {
      contact: "Contacts",
      address: "Bucharest Street 19, Chisinau, Chisinau (Port Mall)",
      phone: "+373 78 90 00 07",
      email: "lexlaar@gmail.com",
      workingHours: "Mon-Sun: 10:00-19:00",
    },
    map: {
      title: "Our location",
      subtitle:
        "We look forward to discussing your dream kitchen. Come visit us to see the quality of our work!",
    },
    modal: {
      successTitle: "Message sent!",
      successMessage: "Thank you! We will contact you as soon as possible.",
      from: "From:",
      phone: "Phone:",
      date: "Date:",
      autoClose: "Will close automatically...",
    },
    about: {
      whoWeAre: {
        title: "Who are we?",
        description:
          "We are a team with over 15 years of experience in furniture, passionate about creating pieces that fit perfectly in your home. We work exclusively with solid furniture – kitchens, wardrobes, libraries, tables, beds, and anything related to storage and living. We work with quality materials, pay attention to details, and, above all, stay close to you: we listen, understand, and transform your ideas into furniture that makes your life more beautiful and practical. We work with both local and international clients, offering the same attention and professionalism regardless of location.",
      },
      mission: {
        title: "Our mission and values",
        description:
          "For us, furniture is not just functional – it's part of your personality and your home's story. That's why we start every project with an honest discussion, to understand exactly what you want and how you live in your space.\n\nWe are guided by a few simple principles: uncompromising quality, clear communication, and respect for your time and budget. We don't work on an assembly line – each piece is specially designed for you, with exact measurements and carefully crafted finishes.\n\nWhat motivates us are people: the joy of clients when they see their space transformed and the trust with which they recommend us further. This is the energy that makes us raise the bar with every project.",
      },
      advantages: {
        title: "Why choose LexAar",
        consultation: {
          title: "Free and personalized consultation",
          description:
            "We come to your home, measure the space, and discuss together exactly what you need, to find the solution that fits best, at no cost.",
        },
        measurements: {
          title: "Precision measurements",
          description:
            "We use professional equipment for exact measurements, so that the furniture integrates perfectly into your space.",
        },
        manufacturing: {
          title: "Local manufacturing with premium materials",
          description:
            "We work only with trusted suppliers, and the entire manufacturing process takes place in our workshop, under direct supervision.",
        },
        delivery: {
          title: "Professional delivery and installation",
          description:
            "Our team handles transport in safe conditions and rapid installation, with attention to every detail.",
        },
        warranty: {
          title: "Warranty and after-sales support",
          description:
            "We offer you a complete warranty and remain by your side for any adjustments or future questions.",
        },
      },
    },
    reviews: {
      title: "What our clients say",
      review1: {
        quote:
          "The furniture was delivered exactly as we discussed, with impeccable finishes. The team was very professional and attentive to every detail. I recommend!",
        author: "Maria P., Chisinau",
      },
      review2: {
        quote:
          "I was impressed by the seriousness and promptness with which they handled our project. The kitchen looks exactly as I wanted.",
        author: "Alexandru M., Rezina",
      },
      review3: {
        quote:
          "The free consultation convinced me to work with them. They helped me optimize the space much better than I imagined. I am very satisfied!",
        author: "Elena R., Orhei",
      },
    },
    blog: {
      title: "Blog",
      back: "Back",
      next: "Next",
      notFound: "Page not found.",
      descriptionNotAdded: "Description has not been added yet.",
      posts: {
        "1": {
          title: "How do I choose the right material for my furniture?",
          description:
            "Choosing the right material depends on several factors: budget, durability, desired style and...",
          fullContent: `Choosing the right material depends on several factors: budget, durability, desired style and room functionality. MDF is an affordable, easy-to-work material ideal for modern furniture design, as it allows for complex shapes and varied finishes. Solid wood offers durability and a premium look, but requires regular maintenance, protection from moisture and direct sunlight, and has a higher cost. Worktops can be made from laminated chipboard, quartz or natural stone. Laminated chipboard is economical and easy to maintain, quartz is scratch- and stain-resistant and offers a long lifespan, while natural stone adds elegance, strength and an exclusive touch, but requires more careful maintenance. The right choice depends on budget, room style and expected wear.

## MDF

is an affordable, easy-to-work material ideal for modern furniture design, as it allows for complex shapes and varied finishes. It is used especially for kitchen fronts, but also for wardrobes, storage units or office furniture, where reduced weight and design flexibility are important advantages. MDF can be painted in any colour, offering great customisation. However, it should be protected from excess moisture and direct sunlight, as these can affect the finish and stability of the material.

## Solid wood

offers durability and a premium look, giving furniture a natural and elegant feel. It is ideal for centre pieces such as tables, beds or large wardrobes that need to last a long time. Solid wood can be finished with varnishes, oils or special wax, protecting it from scratches, moisture and temperature changes. A major advantage is that solid wood can be refurbished and sanded to restore its original appearance, offering a very long lifespan. The downside is the higher cost and the need for periodic maintenance.

## Worktops can be made from laminated chipboard, HPL, quartz or natural stone.

• Laminated chipboard: economical, easy to maintain, resistant to moderate scratches. Ideal for kitchen or office furniture where simple maintenance is an advantage.
• HPL (High Pressure Laminate): highly resistant to scratches, moisture and high temperatures. It is currently one of the most used materials for kitchen worktops due to its durability, easy maintenance and wide range of colours and textures.
• Quartz: very resistant to scratches, stains and high temperatures, ideal for worktops and high-traffic kitchens. Requires minimal maintenance and offers a uniform look.
• Natural stone: offers elegance and strength with an exclusive look. It is durable but requires protection from stains and careful cleaning to prevent surface damage.

## Practical tips for choosing the right material:

1. Set your budget and compare long-term costs, not just the initial price.
2. Consider the functionality of the furniture and the room where it will be placed (kitchen, living room, bedroom, office).
3. Choose easy-to-maintain materials for high-traffic rooms or homes with children.
4. Test material samples in the room's natural light to see the true shades and finish effect.
5. Think about combining materials for a harmonious and durable aesthetic (e.g. solid wood with glass or MDF with metal).
6. Protect furniture that is sensitive to moisture and sun to extend its life and preserve its appearance.

## Conclusion:

The right material choice depends on budget, room style, expected wear and aesthetic preferences. MDF and chipboard are ideal for modern, economical furniture, solid wood offers durability and a premium look, and quartz or natural stone worktops add strength and elegance. An informed choice ensures practical, durable and visually pleasing furniture for many years.`,
        },
        "2": {
          title: "What colours and finishes suit small rooms?",
          description:
            "Light, neutral or pastel colours make small rooms appear more spacious and bright. Matte finishes give an elegant and modern look...",
          fullContent: `Light, neutral or pastel colours make small rooms appear more spacious and bright. Matte finishes give an elegant and modern look, while gloss finishes reflect light and can visually amplify the size of the room. It is recommended to test material and colour samples in the room's natural light, to observe how the shades change throughout the day. Combining warm and cool tones can add depth and harmony, but it is important not to visually clutter the space with too many contrasts. Finishes should also be easy to maintain, especially in high-traffic areas or areas prone to staining, such as kitchens and bathrooms.

## Practical details:

• Light colours such as white, cream, light grey or pastels (mint, sky blue, pale pink) visually enlarge the space.
• Gloss finishes on furniture or walls reflect light and enhance the feeling of airiness.
• Matte finishes are ideal for avoiding excessive reflections and creating an elegant atmosphere.
• In rooms with limited natural light, the combination of glossy finishes and warm colours can compensate for low light.
• Test samples on walls, furniture or floors, as natural and artificial light can visibly change the colour.

## Practical tips:

• Avoid very dark colours in small rooms, as they visually reduce the size of the space.
• Combine complementary colours in moderation to create depth without visual clutter.
• Use easy-to-clean finishes in kitchens and bathrooms (e.g. washable paint or MDF with water-resistant films).
• You can add mirrors or reflective surfaces to amplify the feeling of space.

## Conclusion:

Choosing the right colours and finishes not only visually enlarges the space, but also defines the atmosphere of the room, combining aesthetics with functionality.`,
        },
        "3": {
          title: "How do I choose between modular and custom furniture?",
          description:
            "Modular furniture is a quick and affordable solution, ideal for standard spaces where dimensions can be easily adapted...",
          fullContent: `Modular furniture is a quick and affordable solution, ideal for standard spaces where dimensions can be easily adapted. It is easy to assemble and reconfigure, but offers less design freedom. Custom furniture, on the other hand, is made exactly to the size of the space, allowing the optimisation of every corner and the integration of specific desired functionalities. Although it costs more and involves a longer delivery time, the final result is unique and perfectly suits the style of the home and the user's needs. The choice depends on the size of the room, the complexity of the desired design and the available budget.

## Practical details:

• Modular furniture: a quick, standardised solution, ideal for rooms with standard dimensions.
• Custom furniture: optimised for difficult corners, irregular spaces, and specific storage needs.
• Modular allows replacement or reconfiguration of pieces in the short term.
• Custom can integrate modern technologies (soft-close drawers, built-in LED lighting, hidden sockets, etc.).

## Practical tips:

• Analyse the functionality of the room: a modular desk may be sufficient, but a niche dressing room requires customisation.
• Calculate the total budget: modular furniture is more economical initially, but custom can offer long-term value through optimal use of space.
• Choose custom for furniture tailored to spaces with irregular shapes or special requirements.

## Conclusion:

The choice between modular and custom depends on space, budget and the complexity of the desired functionalities, ensuring efficiency and visual harmony.`,
        },
        "4": {
          title: "How does the custom furniture ordering process work?",
          description:
            "The process starts with an initial consultation, where design preferences, desired functionality and budget are discussed...",
          fullContent: `The process starts with an initial consultation, where design preferences, desired functionality and budget are discussed. Precise measurements of the space follow, to guarantee a perfect fit. The designer creates a visual plan and a 3D model of the furniture, so that the client can visualise the final product. After design approval, furniture production begins using previously chosen materials and finishes. The final step is installation and final verification to ensure everything meets specifications and functionality. Careful planning of each stage minimises errors and ensures a quality result.

## Practical details:

• Initial consultation: discussing style, functionalities and budget.
• Precise measurements: using specialist equipment for an exact fit.
• 3D model: allows visualisation of colours, finishes and furniture proportions in the real space.
• Production: using selected materials and quality checks throughout the process.
• Installation: alignment, fixing and functional testing of drawers, doors and accessories.

## Practical tips:

• Ask for details about available materials and finishes before design begins.
• Make sure the designer uses 3D models and realistic renders.
• Check the contract and delivery deadlines to avoid delays.

## Conclusion:

By following a clear and structured process, custom furniture guarantees a perfect fit, superior quality and maximum satisfaction.`,
        },
        "5": {
          title: "How do I maintain MDF or solid wood furniture?",
          description:
            "Proper maintenance extends the life of furniture and preserves its appearance. Use soft cloths and gentle cleaning solutions, avoiding aggressive chemicals...",
          fullContent: `Proper maintenance extends the life of furniture and preserves its appearance. Use soft cloths and gentle cleaning solutions, avoiding aggressive chemicals or excess water, which can damage the finish. Protect furniture from direct sunlight and excessive humidity. Prevent scratches by placing pads or protectors on work surfaces. Regular cleaning and application of protective solutions for wood or specific finishes maintains the original look and prevents premature wear.

## Practical details:

• Use soft microfibre cloths for daily cleaning.
• Apply special maintenance products for wood or MDF at regular intervals.
• Protect furniture from sunlight and humidity to prevent discolouration or warping.
• Use pads for cutlery, dishes or heavy objects to avoid scratches.

## Practical tips:

• Avoid using aggressive detergents or abrasive sponges.
• Wipe up spilled liquids immediately to prevent damage.
• Use special wax or oil for solid wood to maintain its shine.

## Conclusion:

Regular and proper maintenance extends the life of furniture and preserves its aesthetic appearance.`,
        },
        "6": {
          title: "What should I know about combining different materials?",
          description:
            "Combining MDF, wood and glass must take into account the resistance and compatibility of each material. The furniture structure must be stable and the weight evenly distributed...",
          fullContent: `Combining MDF, wood and glass must take into account the resistance and compatibility of each material. The furniture structure must be stable and the weight evenly distributed. Aesthetics are equally important: the texture of solid wood can be complemented by glossy or matt MDF surfaces, and glass can add an elegant and modern visual effect. Consulting a designer helps to choose the right combinations, so that the furniture is both safe and aesthetic.

## Practical details:

• MDF – combines very well with metal or glass, creating a modern and minimalist look. It is easy to finish in various colours and suits spaces where visual uniformity is desired. However, excessive contact with water must be avoided, as it is less resistant to moisture than solid wood.
• Solid wood – is a noble and resistant material that can be enhanced by contrast with glass (for an elegant and airy effect), with MDF (for a classic-modern combination), or with stone (for a sophisticated and durable design). The natural texture of the wood makes each piece unique, and proper maintenance extends its life.
• Glass – brings transparency and luminosity. It can be used as a worktop, shelf or display door, combined with wood for a natural contrast, with metal for an industrial design, or with MDF for a modern style. Glass can be transparent, frosted, sandblasted or coloured, depending on the desired effect.
• Metal – suits particularly well with wood and MDF, offering strength and a contemporary feel. It can be used as a decorative detail (handles, frames, furniture legs) or as a structural part. Finishes range from glossy stainless steel to wrought iron or painted metal, each completely changing the aesthetic perception.
• Natural or composite stone (marble, granite, quartz) – is ideal for worktops or areas with intensive use. It combines well with wood for a contrast between warm and cold, or with metal for an industrial-luxurious look. It is durable but requires specific maintenance to avoid stains or scratches.
• Textiles (fabric, natural or eco leather) – complement furniture through comfort and visual balance. Used alongside wood they bring warmth, while next to metal or glass they soften the cold appearance. The colours and textures of textiles can tie together the entire composition of a room.

## Practical tips:

• Distribute weight evenly: glass and stone are heavy and fragile, so they must be properly supported on resistant structures of wood or metal.
• Choose combinations that complement each other aesthetically: warm wood balances cold metal, glass lightens glossy MDF, and stone adds elegance next to rustic wood.
• Consider maintenance: stone must be treated periodically, MDF protected from moisture, solid wood waxed or lacquered, glass cleaned regularly to stay clear.
• Use materials according to functionality: MDF for large uniform surfaces, wood for durable structures, metal for strength, glass for elegant details, textiles for comfort.
• Consult a designer: they can recommend the right ratio between materials, so that the final piece is harmonious, safe and practical.

## Conclusion:

Combining materials correctly is not just about visual appearance, but also about strength, maintenance and functionality. Careful selection of the proportions between MDF, wood, glass, metal, stone and textiles can transform furniture into a balanced, practical and durable piece. A well-thought-out design blends the natural beauty of wood, the modernity of MDF, the transparency of glass and the solidity of metal or stone, creating furniture that combines the useful with the aesthetic.`,
        },
        "7": {
          title: "How do I plan lighting in rooms with custom furniture?",
          description:
            "Lighting should be both functional and aesthetic. Spotlights and LED strips can highlight certain areas, such as shelves or work surfaces...",
          fullContent: `Lighting should be both functional and aesthetic. Spotlights and LED strips can highlight certain areas, such as shelves or work surfaces. Ambient light creates atmosphere, while direct lighting allows everyday activities to take place. The correct distribution of light sources can highlight the furniture design and give the sensation of a larger space. Also, choosing the right colour temperature (warm or cool) influences the overall atmosphere of the room and visual comfort.

## Practical details:

• LED spotlights: perfect for highlighting shelves, drawers or decorative objects.
• LED strips: integrated under shelves or cornices for furniture accentuation and indirect lighting.
• Ambient light: creates the sensation of space and visual comfort, reducing contrast between bright and dark areas.
• Direct lighting: necessary in work areas (desks, kitchen worktops, tables) to avoid shadows and visual fatigue.
• Colour temperature: warm (2700–3500K) for living rooms and bedrooms, cool (4000–6000K) for kitchens, offices or work areas.
• Source distribution: combine general light with accent and ambient for flexibility and aesthetic effect.

## Practical tips:

• Plan multiple light sources to avoid unwanted shadows.
• Incorporate lighting into furniture for a clean and modern design.
• Use dimmers to adjust intensity according to activity.
• Test the placement of lights in 3D or with real samples before installation.

## Conclusion:

Well-planned lighting highlights the furniture design, increases functionality and creates atmosphere. Combining ambient, direct and accent light, adjusted to the appropriate colour temperature, transforms any room into a comfortable and elegant space.`,
        },
        "8": {
          title:
            "What warranty does custom furniture offer and how do after-sales services work?",
          description:
            "The warranty covers manufacturing defects and quality issues that normally occur. It does not cover normal wear or damage caused by external factors such as excessive moisture or physical impact...",
          fullContent: `The warranty covers manufacturing defects and quality issues that normally occur. It does not cover normal wear or damage caused by external factors, such as excessive moisture or physical impact. For complaints, it is important to keep the contract and purchase documents and to contact the supplier. After-sales services include repair or replacement of defective parts, and following the correct procedure ensures a quick and efficient resolution.

## Practical details:

• The typical warranty ranges from 12 to 36 months, depending on the manufacturer and type of furniture.
• It includes repairs, replacement of defective parts and functionality checks.
• It does not cover damage caused by water, fire, physical impact or normal wear.

## Practical tips:

• Keep the invoice and contract to facilitate complaints.
• Check the warranty terms before purchase.
• Contact the supplier as soon as you notice defects for a quick resolution.

## Conclusion:

After-sales services and a properly managed warranty provide safety and comfort, ensuring the protection of your furniture investment.`,
        },
        "9": {
          title:
            "How can I assess the quality of custom furniture before ordering?",
          description:
            "To assess furniture quality, check the type of materials used, the thickness and density of MDF or chipboard panels, as well as the finishes...",
          fullContent: `To assess furniture quality, check the type of materials used, the thickness and density of MDF or chipboard panels, as well as the finishes. Quality furniture has precise joints, without uneven gaps or poor edges. Test the opening of drawers and doors, which should be smooth and silent. It is important to request material samples and inspect previous work carried out by the supplier to ensure that execution standards are high.

## Practical details:

• Materials: dense MDF, premium chipboard or verified solid wood.
• Finishes: uniformity, smoothness, without visible defects or imperfections.
• Joints: precise, without visible gaps or uneven edges.
• Functionality: doors and drawers open and close smoothly, without noise.

## Practical tips:

• Request samples and test colours and texture.
• Check the supplier's previous work for references.
• Compare panel thickness and finish quality between multiple suppliers.

## Conclusion:

A careful evaluation of materials, finishes and workmanship ensures the selection of durable and aesthetically pleasing furniture.`,
        },
        "10": {
          title: "How long does the production and delivery of custom furniture take?",
          description:
            "The production and delivery time for custom furniture varies depending on the complexity of the project, the materials chosen and resource availability...",
          fullContent: `The production and delivery time for custom furniture varies depending on the complexity of the project, the materials chosen and resource availability. Custom furniture goes through several stages: consultation, design, material selection, production, finishing, transport and installation. Each of these stages adds time to the process, but the final result is a piece of furniture perfectly adapted to the space and the client's needs.

A simple project, with straight lines and standard materials, can be completed more quickly, while a complex project involving painted fronts, curved elements, hand finishes or special hardware requires more working time. The availability of materials also plays an important role: certain finishes or worktop types may have longer delivery times if they are on special order.

## Practical tips:

• Set a realistic timeline with the manufacturer from the outset.
• Ask for the estimated deadline for each stage (design, production, installation).
• Factor in possible delays caused by material shortages or subsequent changes to the project.

## Conclusion:

Production and delivery time is not fixed, but depends on the complexity of the design, the type of materials and their availability. Constant communication with the manufacturer and setting clear deadlines helps to avoid unpleasant surprises.`,
        },
        "11": {
          title: "How do I take correct measurements for custom furniture?",
          description:
            "Precise measurements are fundamental for custom furniture to fit perfectly in the chosen space. A centimetre more or less can make the difference...",
          fullContent: `Precise measurements are fundamental for custom furniture to fit perfectly in the chosen space. A centimetre more or less can make the difference between an impeccable installation and a difficult situation requiring costly adjustments.

To begin with, walls must be measured at multiple points, as they are rarely perfectly straight. It is important to check the length, width and height in at least three different places for each dimension. Then note the position of sockets, switches, pipes and other obstacles that may influence the furniture design. The room height, the opening of doors and windows, as well as any beams or columns must be taken into account.

## Practical tips:

• Measure with a metal tape measure and double-check every value.
• Mark the position of fixed elements in the room on a sketch.
• If you lack experience, call in a specialist for final measurements before production begins.

## Conclusion:

Correct measurements are the key to successful custom furniture. By investing time in this stage, you will avoid subsequent adjustments and obtain a product that integrates perfectly into the space.`,
        },
        "12": {
          title: "What hardware should I choose for custom furniture?",
          description:
            "Hardware is the invisible component that directly influences the functionality and lifespan of furniture. Although hinges, runners or lifting systems may seem like minor details, they make all the difference...",
          fullContent: `Hardware is the invisible component that directly influences the functionality and lifespan of furniture. Although, at first glance, hinges, runners or lifting systems may seem like minor details, they make the difference between furniture that works impeccably for years and one that begins to deteriorate quickly.

Soft-close hinges are recommended for doors, as they reduce noise and prevent slamming, while also protecting the material. Quality runners allow drawers to glide smoothly and support heavy weights, without jamming or warping over time. For wall-mounted cabinets or large fronts, lift systems and push-to-open mechanisms add comfort and ease of use.

## Practical tips:

• Invest in quality hardware for pieces used daily.
• Choose soft-close mechanisms for drawers and hinges.
• In showrooms, test the functionality of drawers and doors to feel the difference between standard and premium hardware.

## Conclusion:

Hardware is a long-term investment. Choosing quality mechanisms guarantees comfort, durability and trouble-free daily functionality.`,
        },
        "13": {
          title: "Can I return custom furniture?",
          description:
            "Custom furniture is made specifically for the client's needs and dimensions, which makes it different from standardised products. For this reason, return legislation applies differently...",
          fullContent: `Custom furniture is made specifically for the client's needs and dimensions, which makes it different from standardised products. For this reason, return legislation applies differently: while standard products can be returned within the legal period, personalised pieces do not usually benefit from the same regime, as they cannot be resold to another client.

However, consumer rights remain valid in the case of manufacturing defects, installation problems or discrepancies between the delivered product and the signed project. In these situations, the manufacturer is obliged to repair, replace or offer remediation solutions.

## Practical tips:

• Read the contract and return policy carefully before ordering.
• Keep the signed documents, projects and sketches.
• Request material samples and confirm all details in writing (colours, finishes, dimensions).

## Conclusion:

Custom furniture cannot be returned like a standard product, but warranty benefits and manufacturer obligations remain valid. Clarity in communication and contract protects both parties.`,
        },
        "14": {
          title: "How is the price of a custom furniture order calculated?",
          description:
            "The price of a custom furniture order is calculated based on several factors: type of material, design complexity, hardware used, finishes chosen and labour required. There is no universal fixed rate...",
          fullContent: `The price of a custom furniture order is calculated based on several factors: type of material, design complexity, hardware used, finishes chosen and labour required. There is no universal fixed rate; each project is assessed individually.

Materials have the greatest impact on cost: melamine chipboard is an economical option, painted MDF offers an elegant look, and solid wood brings durability and premium value. Special finishes, custom colour painting or glass and metal inserts add complexity and, consequently, higher cost.

## Practical tips:

• Request a detailed quote that includes materials, hardware, finishes and installation services.
• Compare quotes based on quality, not just price.
• Choose transparency: a serious manufacturer explains what goes into the final cost.

## Conclusion:

The price of custom furniture reflects the quality of materials and the complexity of the project. A clear, detailed quote allows you to make an informed choice and understand where the resources go.`,
        },
        "15": {
          title: "How do I optimize small space with custom furniture?",
          description:
            "Custom furniture is the ideal solution for apartments or studios, where every centimetre counts. Through smart design, seemingly useless spaces can become storage areas, and multifunctional pieces can turn a small room into a practical, organised space...",
          fullContent: `Custom furniture is the ideal solution for apartments or studios, where every centimetre counts. Through smart design, seemingly useless spaces can become storage areas, and multifunctional pieces can turn a small room into a practical, organised space.

Vertical furniture makes use of walls up to the ceiling, creating extra space without cluttering the circulation area. Integrated drawers under the bed or sofas with storage are practical and discreet solutions. For small kitchens, drop-leaf tables and wall-mounted units with reduced depth are extremely useful.

## Practical tips:

• Use modular furniture and multifunctional pieces.
• Choose light colours and glossy finishes to create an impression of space.
• Plan lighting to highlight useful areas.

## Conclusion:

Custom furniture turns small spaces into efficient, aesthetic rooms through the smart use of every centimetre.`,
        },
        "16": {
          title: "How do I properly maintain custom furniture to extend its lifespan?",
          description:
            "Proper maintenance of custom furniture is essential for preserving its appearance and functionality in the long term. Each material requires a specific cleaning and care regime...",
          fullContent: `Proper maintenance of custom furniture is essential for preserving its appearance and functionality in the long term. Each material requires a specific cleaning and care regime.

Melamine chipboard and MDF are easy to clean with a damp cloth and mild solutions, avoiding abrasive substances. Painted MDF needs more care: delicate cleaning products are recommended and prolonged exposure to sunlight should be avoided. Solid wood needs periodic maintenance with special oils or lacquers, which preserve its natural beauty and protect it from moisture.

## Practical tips:

• Avoid mechanical shocks and extreme temperatures.
• Use coasters for hot glasses or heavy objects.
• Check the hardware periodically and tighten screws if needed.

## Conclusion:

A simple cleaning and protection routine extends the life of your furniture and keeps its aesthetic appearance.`,
        },
        "17": {
          title: "What warranty does custom furniture have and how do after-sales services work?",
          description:
            "Custom-made furniture benefits from legal warranty and, in many cases, from after-sales services including installation, adjustments or repairs. The duration and conditions of the warranty vary depending on the manufacturer and materials used...",
          fullContent: `Custom-made furniture benefits from legal warranty and, in many cases, from after-sales services including installation, adjustments or repairs. The duration and conditions of the warranty vary depending on the manufacturer and materials used.

The warranty generally covers manufacturing defects, structural issues and the functionality of hardware or joints. It does not include damage caused by improper use, impact or exposure to external factors such as excessive moisture or fire.

## Practical tips:

• Request the warranty certificate and keep your purchase invoice.
• Ask whether the manufacturer offers free adjustment services after installation.
• Check if there are service options after the warranty has expired.

## Conclusion:

Warranty and after-sales services provide security and support for the customer. A serious manufacturer will respond promptly to any issues and provide long-term support.`,
        },
        "18": {
          title: "How do I check the quality of custom furniture before ordering?",
          description:
            "Assessing the quality of furniture before placing an order is crucial to avoid disappointment. Quality is reflected in the materials used, attention to detail and how the joints are made...",
          fullContent: `Assessing the quality of furniture before placing an order is crucial to avoid disappointment. Quality is reflected in the materials used, attention to detail and how the joints are made.

Check the thickness of the panels, the finishes applied and the stability of the structure. Drawers should glide smoothly, hinges should be adjustable and solid, and surfaces should be even and free of imperfections. Ask about the origin of the materials and request samples to see the real texture and colour.

## Practical tips:

• Visit the showroom and test the pieces on display.
• Request material samples to analyse them in your home's natural light.
• Ask for references or photos of the manufacturer's previous work.

## Conclusion:

A careful assessment of quality before ordering helps you make the right choice and enjoy durable, aesthetic furniture.`,
        },
      },
    },
    colorsPage: {
      title: "Custom colors for your kitchen",
      ctaText: "For personalized recommendations, contact us.",
      ctaButton: "Request offer",
    },
    categoryPage: {
      defaultCategoryName: "Category",
    },
    categories: {
      next: "Next",
      productNotFound: "Product not found.",
      placeholderDescription:
        "This model is available to order with your desired dimensions and finishes. Contact us for a free personalized consultation and a quote tailored to your space.",
      bucatarii: [
        {
          title: "Kitchen Urban Wood",
          description:
            "Elegant design with clean lines and matte finishes, this kitchen combines functionality with contemporary refinement. The anthracite grey fronts offer a sophisticated and easy-to-maintain appearance, while wood accents add warmth and visual balance. The worktop and back wall are made of grey marble-textured material, adding elegance and lasting durability. Minimalist track lighting highlights every furniture detail. Ideal for modern spaces, this kitchen offers a perfect combination of aesthetics and functionality.",
        },
        {
          title: "Kitchen Arctic Line",
          description:
            "Minimalist and bright design, defined by matte white fronts combined with graphite accents and a practical central island. Clean lines and discreet lighting create an airy, modern space, ideal for contemporary interiors. Durable materials and ergonomic organization offer the perfect balance between aesthetics and everyday comfort.",
        },
        {
          title: "Kitchen Nordic Home",
          description:
            "A warm and welcoming kitchen where natural wood tones blend harmoniously with white surfaces and generous light. Scandinavian-inspired design offers functionality, simplicity and a relaxing atmosphere, perfect for open spaces and family life.",
        },
        {
          title: "Kitchen Loft Beige",
          description:
            "Understated elegance through matte beige tones and integrated ambient lighting. Handleless fronts and uniform finishes create a refined, modern look, while warm accents add visual comfort. Ideal for sophisticated interiors and bright spaces.",
        },
        {
          title: "Kitchen Amber Touch",
          description:
            "A striking design with a generous island and warm wood accents, complemented by an elegant contrast with the dark worktop and backsplash. The bar area adds functionality and style, turning the kitchen into the perfect space for entertaining and cooking.",
        },
        {
          title: "Kitchen Walnut Flow",
          description:
            "The rich texture of walnut wood combines with modern surfaces and a substantial worktop with strong visual presence. The design conveys warmth and stability, ideal for premium interiors that emphasise natural materials and refined details.",
        },
        {
          title: "Kitchen Industrial Grey",
          description:
            "Authentic industrial style, characterised by dark tones, raw textures and directed lighting. The contrast between wood and matte surfaces creates depth and character, offering a modern, masculine and highly practical space.",
        },
        {
          title: "Kitchen Soft Contrast",
          description:
            "A balanced combination of light fronts and natural wood accents for a calm, elegant look. Floating design and minimalist lines create a sense of space and order, ideal for modern, refined interiors.",
        },
        {
          title: "Kitchen Marble Line",
          description:
            "Glossy white fronts paired with a marble-textured backsplash that becomes the focal point of the design. The clean, bright look offers timeless elegance, while durable materials ensure long-term functionality.",
        },
        {
          title: "Kitchen Concrete Mood",
          description:
            "A bold design with concrete-look finishes and seamlessly integrated appliances. The contrast between industrial textures and minimalist surfaces creates a modern atmosphere, ideal for urban interiors with character.",
        },
        {
          title: "Kitchen Sand Gloss",
          description:
            "Glossy fronts in sandy tones that reflect light and create a warm, elegant atmosphere. Ergonomic layout and well-optimised space turn the kitchen into a comfortable place suited to daily use and refined design.",
        },
        {
          title: "Kitchen Forest Light",
          description:
            "A harmonious mix of natural wood and light surfaces, paired with an expressive textured backsplash. Integrated lighting highlights the materials and creates a relaxing atmosphere, perfect for modern interiors with natural accents.",
        },
      ],
      paturi: [
        { title: "Bed Modern" },
        { title: "Bed Classic" },
        { title: "Bed Premium" },
      ],
      dulapuri: [
        { title: "Wardrobe Modern" },
        { title: "Dresser Premium" },
        { title: "Wardrobe Classic" },
      ],
    },
    contactSection: {
      title: "Dreaming of a New Kitchen? We offer free consultation for your kitchen.",
      description: "We help you bring your ideas to life, with personalized advice that fits your style perfectly.",
      formTitle: "Start transforming your kitchen",
      successTitle: "Message sent!",
      successMessage: "Thank you! We will contact you as soon as possible.",
    },
    galleryModal: {
      share: "Share",
      linkCopied: "Link copied",
    },
    cookieConsent: {
      title: "Use of cookies",
      text: "We use cookies to ensure we give you the best experience on our site. If you continue to use this site, we will assume you are happy with it.",
      privacyLink: "Privacy policy",
      accept: "I agree",
      reject: "Decline",
      privacyAlert: "Privacy policy will be available soon.",
      mustAcceptAlert: "To use the site, you must accept the use of cookies.",
    },
  },
  RU: {
    header: {
      servicii: "Услуги",
      despreNoi: "О нас",
      blog: "Блог",
      solicitOferta: "Запросить предложение",
    },
    home: {
      hero: {
        title: "Мебель на заказ",
        subtitle: "Современные кухни",
        heading1: "Мебель на заказ.",
        heading2: "Профессиональный дизайн.",
        heading3: "Премиальное исполнение.",
        description:
          "Мы занимаемся замерами, проектированием, производством и бесплатной установкой — вы просто наслаждаетесь результатом.",
        ctaButton: "Запросить предложение",
        benefit1: "10 000+ довольных клиентов",
        benefit2: "15+ лет опыта",
        benefit3: "3D-проектирование",
        benefit4: "5 лет экспорта мебели в Европу",
        benefit5: "Бесплатная установка",
      },
      block2: {
        title: "Откройте наши коллекции",
        bucatarii: "Кухни",
        paturi: "Кровати",
        dulapuriSiComode: "Шкафы и комоды",
      },
      colorBlock: {
        mainTitle: "ИНДИВИДУАЛЬНЫЕ ЦВЕТА ДЛЯ ВАШЕЙ КУХНИ",
        subtitle: "ФУНКЦИОНАЛЬНО. ЭЛЕГАНТНО. ПЕРСОНАЛЬНО.",
        feature1: "Выберите цвет, который расскажет вашу историю",
        feature2: "Узнайте, что лучше всего подходит вашему стилю",
        feature3: "Вдохновляйтесь и приближайтесь к идеалу",
        feature4: "Премиальная отделка, легко в уходе",
        feature5: "Современный дизайн для любого интерьера",
        buttonText: "Смотреть цвета",
      },
      qualityBlock: {
        title: "Качество нашей работы важно для каждого клиента",
        subtitle:
          "Мы гарантируем, что каждый проект мебели идеален — от консультации до гарантии.",
        item1: "Бесплатная индивидуальная консультация для каждого клиента",
        item2: "Установка и монтаж мебели без доплат",
        item3: "Индивидуальные решения под любой заказ",
        item4: "Гарантия 5 лет для вашего спокойствия",
      },
      processBlock: {
        title: "От идеи к реальности:\n6 шагов к вашей идеальной мебели",
        step1Title: "Заполните форму",
        step1Desc: "Наш менеджер свяжется с вами для обсуждения деталей.",
        step2Title: "Индивидуальный дизайн и 3D-визуализация",
        step2Desc: "Приедем, замерим и покажем мебель в 3D до изготовления.",
        step3Title: "Мебель по вашему вкусу",
        step3Desc: "Ваша мебель будет сделана с заботой, на современном оборудовании.",
        step4Title: "Быстрая и бесплатная доставка",
        step4Desc: "Гарантируем доставку и сохранность. Бесплатная доставка по Кишинёву",
        step5Title: "Профессиональный монтаж",
        step5Desc: "Установим аккуратно, обеспечивая идеальную интеграцию мебели.",
        step6Title: "Гарантия включена",
        step6Desc: "После установки даём гарантию 5 лет на мебель.",
      },
      projectsBlock: {
        title: "Недавние проекты",
        project1Title: "Кухня Industrial Grey",
        project2Title: "Кухня Marble Line",
        project3Title: "Кухня Urban Wood",
        project4Title: "Недавний проект",
        project5Title: "Недавний проект",
        project6Title: "Недавний проект",
        project7Title: "Недавний проект",
        project1Description:
          "Современная кухня с минималистичным дизайном, элегантное сочетание натурального дерева и антрацита, идеальный баланс стиля и функциональности.",
        project2Description:
          "Белый мрамор и глянцевые поверхности создают атмосферу изысканной роскоши, идеальную для современных кухонь.",
        project3Description:
          "Натуральное дерево в тёплых тонах сочетает деревенскую эстетику с современной функциональностью, создавая уютное пространство.",
        project4Description:
          "Проект LexAar. Мебель на заказ под ваше пространство и потребности.",
        project5Description:
          "Проект LexAar. Мебель на заказ под ваше пространство и потребности.",
        project6Description:
          "Проект LexAar. Мебель на заказ под ваше пространство и потребности.",
        project7Description:
          "Проект LexAar. Мебель на заказ под ваше пространство и потребности.",
      },
  },
  services: {
    title: "Наши услуги",
      intro:
        "Мы занимаемся каждым этапом вашего проекта, от планирования до установки, чтобы мебель была именно такой, как вы хотите.",
      blocks: {
        design3d: {
          title: "Индивидуальный дизайн и 3D визуализация",
          description:
            "Первый шаг в создании успешной мебели – понять ваше пространство и потребности. Мы приезжаем к вам, делаем точные замеры и вместе обсуждаем стиль, функциональность и предпочтения. Мы гарантируем, что учитываем каждую деталь, от размеров и планировки до того, как мебель гармонично впишется в ваш дом. Этот этап дает основу для создания именно того, что вы хотите, без компромиссов.",
        },
        planning: {
          title: "Проектирование и планирование",
          description:
            "После того, как у нас есть вся необходимая информация, мы переходим к этапу проектирования. Мы представляем идеи в понятной форме, обсуждаем варианты материалов, цветов и отделки, и вместе выбираем подходящие решения. Наша цель – объединить эстетический аспект с функциональностью, чтобы мебель была не только красивой, но и практичной. На этом этапе каждая деталь тщательно продумана, чтобы конечный результат идеально соответствовал вашему образу жизни и имеющемуся пространству.",
        },
        production: {
          title: "Производство и отделка",
          description:
            "После утверждения проекта мебель поступает в производство. Мы используем качественные материалы и современные технологии, но при этом сохраняем внимание к деталям и заботу о безупречной отделке. Наша команда работает профессионально, чтобы превратить план в реальность, точно соблюдая требования, установленные с вами. Каждое изделие тщательно проверяется и отделывается, чтобы вы могли наслаждаться долговечной, элегантной мебелью, идеально адаптированной к вашему дому.",
        },
        delivery: {
          title: "Доставка и установка",
          description:
            "Когда мебель готова, мы привозим её прямо к вам и занимаемся установкой. Весь процесс выполняется быстро и профессионально, чтобы у вас не было никаких хлопот. Мы аккуратно устанавливаем каждый элемент и проверяем, что всё функционально и правильно размещено. В итоге вы получаете полностью обставленное пространство с мебелью, готовой к немедленному использованию, чтобы вы могли наслаждаться комфортом и результатом именно таким, каким вы его представляли.",
        },
        international: {
          title: "Наши услуги доступны везде, где вам нужно",
          description:
            "Будь то Румыния, Германия, Италия, Франция, Австрия или Испания, всё, что мы делаем на заказ для наших клиентов – от дизайна и производства до доставки и установки – доступно не только локально, но и за границей. Наша команда гарантирует, что мебель доставляется безопасно и устанавливается профессионально, сохраняя то же внимание к деталям и качеству, которое нас определяет. Таким образом, полный опыт, который мы предлагаем нашим клиентам, остается одинаковым, без компромиссов, в любой точке мира.",
        },
      },
    },
    cta: {
      text: "Идеальная мебель начинается с простого шага: свяжитесь с нами! Вам не нужно знать все детали с самого начала – мы приносим вам идеи, решения и направляем на каждом этапе. От дизайна до установки и гарантии мы заботимся обо всём, чтобы у вас был легкий и приятный опыт.",
      button: "Запросить предложение",
    },
    form: {
      title: "Есть идеи? Мы поможем.",
      subtitle: "Заполните форму и откройте для себя идеальные решения для вашей мебели",
      name: "Имя, Фамилия",
      phone: "Телефон",
      email: "Email",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправляется...",
      successTitle: "Сообщение отправлено!",
      successMessage: "Спасибо! Мы свяжемся с вами в кратчайшие сроки.",
    },
    footer: {
      description:
        "Более 15 лет мы создаем мебель на заказ, с решениями, адаптированными к любому пространству и бюджету.",
      social: "Социальные сети",
      company: "Компания",
      aboutUs: "О нас",
      blog: "Блог",
      services: "Услуги",
      copyright: "© 2025 LEXLAAR.",
    },
    common: {
      contact: "Контакты",
      address: "Улица Букурешть 19, Кишинёв, Кишинёв (Port Mall)",
      phone: "+373 78 90 00 07",
      email: "lexlaar@gmail.com",
      workingHours: "Пн-Вс: 10:00-19:00",
    },
    map: {
      title: "Наше местоположение",
      subtitle:
        "Мы с нетерпением ждем обсуждения кухни вашей мечты. Приходите к нам, чтобы увидеть качество нашей работы!",
    },
    modal: {
      successTitle: "Сообщение отправлено!",
      successMessage: "Спасибо! Мы свяжемся с вами в кратчайшие сроки.",
      from: "От:",
      phone: "Телефон:",
      date: "Дата:",
      autoClose: "Закроется автоматически...",
    },
    about: {
      whoWeAre: {
        title: "Кто мы?",
        description:
          "Мы команда с более чем 15-летним опытом в мебели, увлеченные созданием изделий, которые идеально подходят вашему дому. Мы работаем исключительно с массивной мебелью – кухни, шкафы, библиотеки, столы, кровати и все, что связано с хранением и гостиной. Мы работаем с качественными материалами, уделяем внимание деталям и, прежде всего, остаемся рядом с вами: мы слушаем, понимаем и превращаем ваши идеи в мебель, которая делает вашу жизнь красивее и практичнее. Мы сотрудничаем как с местными, так и с зарубежными клиентами, предлагая одинаковое внимание и профессионализм независимо от местоположения.",
      },
      mission: {
        title: "Наша миссия и ценности",
        description:
          "Для нас мебель – это не просто функциональность, это часть вашей личности и истории вашего дома. Поэтому мы начинаем каждый проект с честного обсуждения, чтобы понять точно, что вы хотите и как вы живете в своем пространстве.\n\nНами руководят несколько простых принципов: бескомпромиссное качество, четкая коммуникация и уважение к вашему времени и бюджету. Мы не работаем на конвейере – каждое изделие специально разработано для вас, с точными размерами и тщательно обработанной отделкой.\n\nНас мотивируют люди: радость клиентов, когда они видят свое пространство преображенным, и доверие, с которым они рекомендуют нас дальше. Это энергия, которая заставляет нас поднимать планку с каждым проектом.",
      },
      advantages: {
        title: "Почему выбрать LexAar",
        consultation: {
          title: "Бесплатная и персонализированная консультация",
          description:
            "Мы приезжаем к вам домой, измеряем пространство и вместе обсуждаем точно, что вам нужно, чтобы найти решение, которое лучше всего подходит, без каких-либо затрат.",
        },
        measurements: {
          title: "Точные измерения",
          description:
            "Мы используем профессиональное оборудование для точных измерений, чтобы мебель идеально интегрировалась в ваше пространство.",
        },
        manufacturing: {
          title: "Местное производство с премиальными материалами",
          description:
            "Мы работаем только с проверенными поставщиками, и весь процесс производства проходит в нашей мастерской, под прямым надзором.",
        },
        delivery: {
          title: "Профессиональная доставка и установка",
          description:
            "Наша команда занимается транспортировкой в безопасных условиях и быстрой установкой, с вниманием к каждой детали.",
        },
        warranty: {
          title: "Гарантия и послепродажная поддержка",
          description:
            "Мы предлагаем полную гарантию и остаемся рядом с вами для любых корректировок или будущих вопросов.",
        },
      },
    },
    reviews: {
      title: "Что говорят наши клиенты",
      review1: {
        quote:
          "Мебель была доставлена точно так, как мы обсуждали, с безупречной отделкой. Команда была очень профессиональной и внимательной к каждой детали. Рекомендую!",
        author: "Мария П., Кишинёв",
      },
      review2: {
        quote:
          "Я была впечатлена серьезностью и оперативностью, с которой они занимались нашим проектом. Кухня выглядит именно так, как я хотела.",
        author: "Александру М., Резина",
      },
      review3: {
        quote:
          "Бесплатная консультация убедила меня работать с ними. Они помогли мне оптимизировать пространство намного лучше, чем я представляла. Я очень довольна!",
        author: "Елена Р., Орхей",
      },
    },
    blog: {
      title: "Блог",
      back: "Назад",
      next: "Далее",
      notFound: "Страница не найдена.",
      descriptionNotAdded: "Описание пока не добавлено.",
      posts: {
        "1": {
          title: "Как выбрать подходящий материал для моей мебели?",
          description:
            "Выбор материала зависит от нескольких факторов: бюджет, долговечность, желаемый стиль и...",
          fullContent: `Выбор подходящего материала зависит от нескольких факторов: бюджет, долговечность, желаемый стиль и функциональность помещения. МДФ — доступный, легко обрабатываемый материал, идеален для мебели современного дизайна, так как позволяет создавать сложные формы и разнообразную отделку. Массив дерева даёт долговечность и премиальный вид, но требует регулярного ухода, защиты от влаги и прямых солнечных лучей и имеет более высокую стоимость. Столешницы могут быть из ламинированного ДСП, кварца или натурального камня. Ламинированный ДСП экономичен и прост в уходе, кварц устойчив к царапинам и пятнам и имеет длительный срок службы, а натуральный камень придаёт элегантность, прочность и эксклюзивность, но требует более тщательного ухода. Правильный выбор делается с учётом бюджета, стиля помещения и ожидаемой нагрузки.

## МДФ

— доступный, легко обрабатываемый материал, идеален для мебели современного дизайна, так как позволяет создавать сложные формы и разнообразную отделку. Используется в основном для фасадов кухонь, а также для шкафов, систем хранения и офисной мебели, где важны малый вес и гибкость в дизайне. МДФ можно окрашивать в любой цвет, что даёт широкие возможности для персонализации. Однако его нужно беречь от избыточной влаги и прямого солнца, так как это может повлиять на отделку и стабильность материала.

## Массив дерева

даёт долговечность и премиальный вид, придавая мебели естественный и элегантный характер. Идеален для центральных элементов — столов, кроватей или больших шкафов, которые должны служить долго. Массив можно отделывать лаками, маслами или специальным воском, защищая от царапин, влаги и перепадов температуры. Большой плюс в том, что массив можно реставрировать и шлифовать, возвращая первоначальный вид, что обеспечивает очень долгий срок службы. Минус — более высокая стоимость и необходимость периодического ухода.

## Столешницы могут быть из ламинированного ДСП, HPL, кварца или натурального камня.

• Ламинированный ДСП: экономичен, прост в уходе, устойчив к умеренным царапинам. Идеален для кухонной или офисной мебели, где важен простой уход.
• HPL (ламинат высокого давления): очень устойчив к царапинам, влаге и высоким температурам. Один из самых популярных материалов для кухонных столешниц благодаря долговечности, лёгкому уходу и большому выбору цветов и фактур.
• Кварц: очень устойчив к царапинам, пятнам и высоким температурам, идеален для рабочих поверхностей и кухонь с высокой нагрузкой. Требует минимального ухода и даёт ровный вид.
• Натуральный камень: даёт элегантность и прочность, эксклюзивный вид. Долговечен, но требует защиты от пятен и аккуратной чистки, чтобы сохранить поверхность.

## Практические советы по выбору материала:

1. Определите бюджет и сравнивайте затраты в долгосрочной перспективе, а не только начальную цену.
2. Учитывайте назначение мебели и комнату, где она будет стоять (кухня, гостиная, спальня, офис).
3. Выбирайте легко ухаживаемые материалы для помещений с высокой проходимостью или при наличии детей.
4. Проверяйте образцы материалов при естественном свете комнаты, чтобы оценить оттенки и вид отделки.
5. Продумайте комбинацию материалов для гармоничного и долговечного результата (например, массив со стеклом или МДФ с металлом).
6. Защищайте мебель, чувствительную к влаге и солнцу, чтобы продлить срок службы и сохранить вид.

## Заключение:

Правильный выбор материала зависит от бюджета, стиля помещения, ожидаемой нагрузки и эстетических предпочтений. МДФ и ДСП подходят для современной и экономичной мебели, массив даёт долговечность и премиальный вид, а столешницы из кварца или натурального камня добавляют прочность и элегантность. Осознанный выбор обеспечит практичную, долговечную и приятную глазу мебель на многие годы.`,
        },
        "2": {
          title: "Какие цвета и отделка подходят для маленьких комнат?",
          description:
            "Светлые, нейтральные или пастельные тона делают маленькие комнаты визуально просторнее и светлее. Матовые покрытия придают элегантный и современный вид...",
          fullContent: `Светлые, нейтральные или пастельные тона делают маленькие комнаты визуально просторнее и светлее. Матовые покрытия придают элегантный и современный вид, тогда как глянцевые отражают свет и могут визуально увеличить размер комнаты. Рекомендуется тестировать образцы материалов и цветов при естественном освещении комнаты, чтобы наблюдать, как меняются оттенки в течение дня. Сочетание тёплых и холодных тонов может добавить глубину и гармонию, но важно не загромождать визуально пространство слишком большим количеством контрастов. Отделочные материалы также должны быть простыми в уходе, особенно в зонах с интенсивным трафиком или риском загрязнения, таких как кухни и ванные комнаты.

## Практические детали:

• Светлые цвета — белый, кремовый, светло-серый или пастельные тона (мята, голубой, бледно-розовый) — визуально увеличивают пространство.
• Глянцевые покрытия на мебели или стенах отражают свет и усиливают ощущение воздушности.
• Матовые покрытия идеальны для избежания лишних отражений и создания элегантной атмосферы.
• В комнатах с ограниченным естественным освещением сочетание глянцевых покрытий и тёплых цветов может компенсировать недостаток света.
• Тестируйте образцы на стенах, мебели или полу, так как естественное и искусственное освещение может заметно изменить цвет.

## Практические советы:

• Избегайте очень тёмных цветов в маленьких комнатах, поскольку они визуально уменьшают пространство.
• Сочетайте дополнительные цвета умеренно, чтобы создать глубину без визуальной перегруженности.
• Используйте легко моющиеся покрытия на кухнях и в ванных комнатах (например, моющаяся краска или МДФ с водостойкими плёнками).
• Вы можете добавить зеркала или отражающие поверхности для усиления ощущения пространства.

## Заключение:

Выбор правильных цветов и отделочных материалов не только визуально увеличивает пространство, но и определяет атмосферу комнаты, сочетая эстетику с функциональностью.`,
        },
        "3": {
          title: "Как выбрать между модульной и индивидуальной мебелью?",
          description:
            "Модульная мебель — быстрое и доступное решение, идеально для типовых пространств, где размеры легко адаптируются...",
          fullContent: `Модульная мебель — быстрое и доступное решение, идеально для типовых пространств, где размеры легко адаптируются. Её легко собирать и перенастраивать, однако она предлагает меньше свободы в дизайне. Мебель на заказ, напротив, изготавливается точно под размер помещения, позволяя оптимизировать каждый угол и интегрировать нужные функции. Хотя она стоит дороже и требует больше времени на изготовление, конечный результат уникален и идеально соответствует стилю жилья и потребностям владельца. Выбор зависит от размера комнаты, сложности желаемого дизайна и доступного бюджета.

## Практические детали:

• Модульная мебель: быстрое, стандартизированное решение, идеально для комнат стандартных размеров.
• Мебель на заказ: оптимизирована для сложных углов, нестандартных помещений и специфических потребностей хранения.
• Модульная позволяет заменять или перенастраивать элементы в краткосрочной перспективе.
• На заказ может интегрировать современные технологии (ящики с доводчиком, встроенная LED-подсветка, скрытые розетки и т.д.).

## Практические советы:

• Проанализируйте функциональность комнаты: модульный стол может быть достаточен, но гардеробная в нише требует индивидуального подхода.
• Рассчитайте общий бюджет: модульная мебель экономичнее на старте, но мебель на заказ может дать долгосрочную ценность за счёт оптимального использования пространства.
• Выбирайте индивидуальный заказ для помещений с нестандартными формами или особыми требованиями.

## Заключение:

Выбор между модульной и индивидуальной мебелью зависит от пространства, бюджета и сложности желаемых функций, обеспечивая эффективность и визуальную гармонию.`,
        },
        "4": {
          title: "Как проходит процесс заказа мебели на заказ?",
          description:
            "Процесс начинается с первичной консультации, где обсуждаются предпочтения по дизайну, желаемая функциональность и бюджет...",
          fullContent: `Процесс начинается с первичной консультации, где обсуждаются предпочтения по дизайну, желаемая функциональность и бюджет. Затем проводятся точные замеры помещения, чтобы гарантировать идеальное соответствие. Дизайнер создаёт визуальный план и 3D-модель мебели, чтобы клиент мог увидеть конечный результат. После утверждения дизайна начинается производство с использованием ранее выбранных материалов и отделки. Последний шаг — монтаж и финальная проверка для подтверждения соответствия всем требованиям и функциональности. Тщательное планирование каждого этапа минимизирует ошибки и гарантирует качественный результат.

## Практические детали:

• Первичная консультация: обсуждение стиля, функциональности и бюджета.
• Точные замеры: использование специального оборудования для идеального соответствия.
• 3D-модель: позволяет визуализировать цвета, отделку и пропорции мебели в реальном пространстве.
• Производство: использование выбранных материалов и контроль качества на всех этапах.
• Монтаж: выравнивание, крепление и функциональное тестирование ящиков, дверей и фурнитуры.

## Практические советы:

• Уточните детали о доступных материалах и отделке до начала проектирования.
• Убедитесь, что дизайнер использует 3D-модели и реалистичные визуализации.
• Проверьте договор и сроки поставки, чтобы избежать задержек.

## Заключение:

Следуя чёткому и структурированному процессу, мебель на заказ гарантирует идеальное соответствие, превосходное качество и максимальное удовлетворение.`,
        },
        "5": {
          title: "Как ухаживать за мебелью из МДФ или массива?",
          description:
            "Правильный уход продлевает срок службы мебели и сохраняет её внешний вид. Используйте мягкие тряпки и бережные чистящие средства, избегая агрессивной химии...",
          fullContent: `Правильный уход продлевает срок службы мебели и сохраняет её внешний вид. Используйте мягкие тряпки и бережные чистящие средства, избегая агрессивной химии или избытка воды, которые могут повредить покрытие. Защищайте мебель от прямых солнечных лучей и чрезмерной влажности. Предотвращайте царапины, используя подставки или защитные накладки на рабочих поверхностях. Регулярная чистка и нанесение защитных составов для дерева или специфических покрытий сохраняют первоначальный вид и предотвращают преждевременный износ.

## Практические детали:

• Используйте мягкие тряпки из микрофибры для ежедневной уборки.
• Наносите специальные средства по уходу за деревом или МДФ с регулярными интервалами.
• Защищайте мебель от солнца и влаги, чтобы предотвратить выцветание или деформацию.
• Используйте подставки для приборов, посуды или тяжёлых предметов, чтобы избежать царапин.

## Практические советы:

• Избегайте агрессивных моющих средств и абразивных губок.
• Немедленно вытирайте пролитые жидкости, чтобы предотвратить повреждение.
• Используйте специальный воск или масло для массива дерева, чтобы поддерживать блеск.

## Заключение:

Регулярный и правильный уход продлевает жизнь мебели и сохраняет её эстетичный вид.`,
        },
        "6": {
          title: "Что нужно знать о сочетании разных материалов?",
          description:
            "Сочетание МДФ, дерева и стекла нужно подбирать с учётом прочности и совместимости каждого материала. Конструкция мебели должна быть устойчивой, а вес распределён равномерно...",
          fullContent: `Сочетание МДФ, дерева и стекла нужно подбирать с учётом прочности и совместимости каждого материала. Конструкция мебели должна быть устойчивой, а вес распределён равномерно. Эстетика не менее важна: текстура массива дерева может быть дополнена глянцевыми или матовыми поверхностями МДФ, а стекло добавит элегантный и современный визуальный эффект. Консультация с дизайнером поможет выбрать правильные сочетания, чтобы мебель была одновременно безопасной и эстетичной.

## Практические детали:

• МДФ — отлично сочетается с металлом или стеклом, создавая современный и минималистичный вид. Легко отделывается в разные цвета и подходит для пространств, где желательна визуальная однородность. Однако следует избегать избыточного контакта с водой, так как МДФ менее устойчив к влаге, чем массив.
• Массив дерева — благородный и прочный материал, который можно эффектно подчеркнуть контрастом со стеклом (для элегантного и воздушного эффекта), с МДФ (для сочетания классики и модерна) или с камнем (для изысканного и долговечного дизайна). Природная текстура дерева делает каждое изделие уникальным, а правильный уход продлевает его жизнь.
• Стекло — привносит прозрачность и световую открытость. Может использоваться как столешница, полка или дверца витрины в сочетании с деревом для природного контраста, с металлом для индустриального дизайна или с МДФ для современного стиля. Стекло бывает прозрачным, матовым, пескоструйным или тонированным — в зависимости от желаемого эффекта.
• Металл — особенно гармоничен с деревом и МДФ: придаёт прочность и современный облик. Используется как декоративная деталь (ручки, рамки, ножки мебели) или как конструктивный элемент. Отделка варьируется от глянцевой нержавейки до кованого железа или крашеного металла — каждый вариант кардинально меняет эстетическое восприятие.
• Натуральный или композитный камень (мрамор, гранит, кварц) — идеален для столешниц или зон интенсивного использования. Хорошо сочетается с деревом для контраста тёплого и холодного или с металлом для индустриально-роскошного вида. Прочный, но требует специального ухода, чтобы избежать пятен и царапин.
• Текстиль (ткань, натуральная или экологическая кожа) — дополняет мебель комфортом и визуальным балансом. В сочетании с деревом привносит теплоту, а рядом с металлом или стеклом смягчает холодный облик. Цвета и текстуры текстиля могут объединить всю композицию комнаты.

## Практические советы:

• Распределяйте вес равномерно: стекло и камень тяжёлые и хрупкие, поэтому их нужно правильно опирать на прочные конструкции из дерева или металла.
• Выбирайте сочетания, эстетически дополняющие друг друга: тёплое дерево уравновешивает холодный металл, стекло облегчает глянцевый МДФ, а камень добавляет элегантности рядом с деревом в стиле рустик.
• Учитывайте уход: камень нужно периодически обрабатывать, МДФ защищать от влаги, массив воском или лаком, стекло регулярно чистить для сохранения прозрачности.
• Используйте материалы по назначению: МДФ — для больших однородных поверхностей, дерево — для прочных конструкций, металл — для надёжности, стекло — для элегантных деталей, текстиль — для комфорта.
• Проконсультируйтесь с дизайнером: он подберёт правильное соотношение материалов, чтобы итоговое изделие было гармоничным, безопасным и практичным.

## Заключение:

Правильное сочетание материалов — это не только вопрос визуального облика, но и прочности, обслуживания и функциональности. Тщательный подбор пропорций между МДФ, деревом, стеклом, металлом, камнем и текстилем способен превратить мебель в сбалансированное, практичное и долговечное изделие. Продуманный дизайн объединяет природную красоту дерева, современность МДФ, прозрачность стекла и надёжность металла или камня, создавая мебель, в которой полезное сочетается с эстетичным.`,
        },
        "7": {
          title: "Как спланировать освещение в комнатах с индивидуальной мебелью?",
          description:
            "Освещение должно быть функциональным и эстетичным. Точечные светильники и LED-ленты могут подчеркнуть определённые зоны, например полки или рабочие поверхности...",
          fullContent: `Освещение должно быть функциональным и эстетичным. Точечные светильники и LED-ленты могут подчеркнуть определённые зоны, например полки или рабочие поверхности. Рассеянный свет создаёт атмосферу, а направленное освещение позволяет выполнять повседневные задачи. Правильное распределение источников света способно подчеркнуть дизайн мебели и создать ощущение большего пространства. Кроме того, выбор подходящей цветовой температуры (тёплой или холодной) влияет на общую атмосферу комнаты и визуальный комфорт.

## Практические детали:

• Точечные LED-светильники: идеальны для подсветки полок, ящиков или декоративных объектов.
• LED-ленты: встроенные под полки или карнизы для акцентирования мебели и косвенного освещения.
• Рассеянный свет: создаёт ощущение пространства и визуального комфорта, уменьшая контраст между светлыми и тёмными зонами.
• Направленное освещение: необходимо в рабочих зонах (столы, кухонные столешницы, рабочие поверхности) для устранения теней и снижения нагрузки на зрение.
• Цветовая температура: тёплая (2700–3500K) для гостиной и спальни, холодная (4000–6000K) для кухни, кабинетов или рабочих зон.
• Распределение источников: сочетайте общее освещение с акцентным и рассеянным для гибкости и эстетического эффекта.

## Практические советы:

• Планируйте несколько источников света, чтобы избежать нежелательных теней.
• Встраивайте освещение в мебель для чистого и современного дизайна.
• Используйте диммеры для регулировки интенсивности в зависимости от деятельности.
• Протестируйте расположение светильников в 3D или с реальными образцами перед установкой.

## Заключение:

Грамотно спланированное освещение подчёркивает дизайн мебели, повышает функциональность и создаёт атмосферу. Сочетание рассеянного, направленного и акцентного света, подобранного с учётом нужной цветовой температуры, превращает любую комнату в уютное и элегантное пространство.`,
        },
        "8": {
          title:
            "Какую гарантию даёт мебель на заказ и как работают услуги после доставки?",
          description:
            "Гарантия покрывает производственные дефекты и проблемы качества, возникающие в обычных условиях. Она не распространяется на естественный износ или повреждения, вызванные внешними факторами...",
          fullContent: `Гарантия покрывает производственные дефекты и проблемы качества, возникающие в обычных условиях. Она не распространяется на естественный износ или повреждения, вызванные внешними факторами, такими как чрезмерная влажность или физический удар. Для подачи рекламации важно сохранить договор и документы о покупке и связаться с поставщиком. Послепродажное обслуживание включает ремонт или замену дефектных деталей, а соблюдение правильной процедуры обеспечивает быстрое и эффективное решение.

## Практические детали:

• Стандартный срок гарантии составляет от 12 до 36 месяцев в зависимости от производителя и типа мебели.
• Включает ремонт, замену дефектных деталей и проверку функциональности.
• Не распространяется на повреждения, вызванные водой, огнём, физическим воздействием или естественным износом.

## Практические советы:

• Сохраняйте счёт и договор для упрощения подачи рекламаций.
• Ознакомьтесь с условиями гарантии до покупки.
• Свяжитесь с поставщиком сразу после обнаружения дефектов для оперативного решения.

## Заключение:

Послепродажное обслуживание и правильно оформленная гарантия обеспечивают надёжность и комфорт, защищая ваши инвестиции в мебель.`,
        },
        "9": {
          title:
            "Как оценить качество мебели на заказ до оформления заказа?",
          description:
            "Чтобы оценить качество мебели, проверьте тип используемых материалов, толщину и плотность панелей МДФ или ДСП, а также отделку...",
          fullContent: `Чтобы оценить качество мебели, проверьте тип используемых материалов, толщину и плотность панелей МДФ или ДСП, а также отделку. Качественная мебель имеет точные соединения без неровных зазоров или плохих краёв. Проверьте открывание ящиков и дверей — они должны двигаться плавно и бесшумно. Важно запросить образцы материалов и ознакомиться с предыдущими работами поставщика, чтобы убедиться в высоком стандарте исполнения.

## Практические детали:

• Материалы: плотный МДФ, качественный ДСП или проверенный массив дерева.
• Отделка: равномерность, гладкость, отсутствие видимых дефектов или несовершенств.
• Соединения: точные, без видимых зазоров или неровных краёв.
• Функциональность: двери и ящики открываются и закрываются плавно, без шума.

## Практические советы:

• Запросите образцы и протестируйте цвета и текстуру.
• Ознакомьтесь с предыдущими работами поставщика для получения рекомендаций.
• Сравните толщину панелей и качество отделки у нескольких поставщиков.

## Заключение:

Тщательная оценка материалов, отделки и качества исполнения обеспечивает выбор долговечной и эстетически привлекательной мебели.`,
        },
        "10": {
          title: "Сколько времени занимает производство и доставка мебели на заказ?",
          description:
            "Время производства и доставки мебели на заказ варьируется в зависимости от сложности проекта, выбранных материалов и наличия ресурсов...",
          fullContent: `Время производства и доставки мебели на заказ варьируется в зависимости от сложности проекта, выбранных материалов и наличия ресурсов. Мебель на заказ проходит несколько этапов: консультация, проектирование, выбор материалов, производство, отделка, транспортировка и монтаж. Каждый из этих этапов добавляет время к процессу, однако конечный результат — мебель, идеально адаптированная к пространству и потребностям клиента.

Простой проект с прямыми линиями и стандартными материалами может быть завершён быстрее, тогда как сложный проект с крашеными фасадами, изогнутыми элементами, ручной отделкой или специальной фурнитурой требует больше времени. Наличие материалов также играет важную роль: некоторые отделки или типы столешниц могут иметь более длительные сроки поставки при спецзаказе.

## Практические советы:

• Согласуйте с производителем реалистичный календарь с самого начала.
• Уточните ориентировочные сроки каждого этапа (проектирование, производство, монтаж).
• Учитывайте возможные задержки из-за нехватки материалов или последующих изменений в проекте.

## Заключение:

Срок производства и доставки не фиксирован — он зависит от сложности дизайна, типа материалов и их доступности. Постоянное общение с производителем и установка чётких сроков помогают избежать неприятных сюрпризов.`,
        },
        "11": {
          title: "Как правильно снять мерки для мебели на заказ?",
          description:
            "Точные замеры — основа для того, чтобы мебель на заказ идеально вписалась в выбранное пространство. Лишний или недостающий сантиметр может стать разницей между безупречным монтажом и сложной ситуацией...",
          fullContent: `Точные замеры — основа для того, чтобы мебель на заказ идеально вписалась в выбранное пространство. Лишний или недостающий сантиметр может стать разницей между безупречным монтажом и сложной ситуацией, требующей дорогостоящих корректировок.

Для начала стены необходимо измерять в нескольких точках, так как они редко бывают идеально ровными. Важно проверить длину, ширину и высоту не менее чем в трёх разных местах по каждому измерению. Затем зафиксируйте расположение розеток, выключателей, труб и других препятствий, которые могут повлиять на проектирование мебели. Необходимо учесть высоту потолка, ширину открывания дверей и окон, а также возможные балки или колонны.

## Практические советы:

• Измеряйте металлической рулеткой и дважды проверяйте каждое значение.
• Отмечайте положение стационарных элементов комнаты на схеме.
• Если нет опыта, обратитесь к специалисту для финальных замеров перед началом производства.

## Заключение:

Правильные замеры — залог успешной мебели на заказ. Уделив этому этапу достаточно времени, вы избежите последующих корректировок и получите изделие, которое идеально вписывается в пространство.`,
        },
        "12": {
          title: "Какую фурнитуру выбрать для мебели на заказ?",
          description:
            "Фурнитура — невидимый компонент, который напрямую влияет на функциональность и срок службы мебели. Хотя петли, направляющие и подъёмные механизмы кажутся незначительными деталями, именно они определяют разницу...",
          fullContent: `Фурнитура — невидимый компонент, который напрямую влияет на функциональность и срок службы мебели. Хотя на первый взгляд петли, направляющие или подъёмные механизмы кажутся незначительными деталями, именно они определяют разницу между мебелью, которая безупречно работает долгие годы, и той, что начинает быстро приходить в негодность.

Петли с доводчиком рекомендуются для дверей, так как снижают шум и предотвращают хлопание, одновременно защищая материал. Качественные направляющие позволяют ящикам скользить плавно и выдерживать большие нагрузки, не заклинивая и не деформируясь со временем. Для навесных шкафов или крупных фасадов подъёмные системы и механизмы push-to-open добавляют комфорт и лёгкость использования.

## Практические советы:

• Инвестируйте в качественную фурнитуру для изделий, которыми пользуются ежедневно.
• Выбирайте механизмы с доводчиком для ящиков и петель.
• В шоурумах тестируйте функциональность ящиков и дверей, чтобы почувствовать разницу между стандартной и премиальной фурнитурой.

## Заключение:

Фурнитура — это долгосрочная инвестиция. Выбор качественных механизмов гарантирует комфорт, долговечность и бесперебойную повседневную функциональность.`,
        },
        "13": {
          title: "Можно ли вернуть мебель на заказ?",
          description:
            "Мебель на заказ изготавливается специально под потребности и размеры клиента, что отличает её от стандартных изделий. По этой причине законодательство о возврате применяется иначе...",
          fullContent: `Мебель на заказ изготавливается специально под потребности и размеры клиента, что отличает её от стандартных изделий. По этой причине законодательство о возврате применяется иначе: если стандартные товары можно вернуть в установленный законом срок, то персонализированные изделия, как правило, не подпадают под тот же режим, поскольку не могут быть перепроданы другому покупателю.

Тем не менее права потребителя остаются в силе при наличии производственных дефектов, проблем с монтажом или несоответствий между поставленным изделием и подписанным проектом. В таких случаях производитель обязан произвести ремонт, замену или предложить решения по устранению недостатков.

## Практические советы:

• Внимательно читайте договор и политику возврата перед оформлением заказа.
• Сохраняйте подписанные документы, проекты и эскизы.
• Запрашивайте образцы материалов и подтверждайте все детали письменно (цвета, отделка, размеры).

## Заключение:

Мебель на заказ нельзя вернуть как стандартный товар, однако гарантийные права и обязательства производителя остаются в силе. Чёткость в общении и договоре защищает обе стороны.`,
        },
        "14": {
          title: "Как рассчитывается цена заказа мебели на заказ?",
          description:
            "Цена заказа мебели на заказ складывается из нескольких факторов: тип материала, сложность дизайна, используемая фурнитура, выбранная отделка и трудозатраты. Универсального фиксированного тарифа нет...",
          fullContent: `Цена заказа мебели на заказ складывается из нескольких факторов: тип материала, сложность дизайна, используемая фурнитура, выбранная отделка и трудозатраты. Универсального фиксированного тарифа нет — каждый проект оценивается отдельно.

На стоимость больше всего влияют материалы: ламинированный ДСП — экономичный вариант, крашеный МДФ даёт аккуратный вид, массив дерева добавляет долговечность и премиальную ценность. Специальная отделка, покраска в индивидуальные цвета или вставки из стекла и металла увеличивают сложность и, соответственно, стоимость.

## Практические советы:

• Запрашивайте детальную смету с учётом материалов, фурнитуры, отделки и услуг по монтажу.
• Сравнивайте предложения по качеству, а не только по цене.
• Выбирайте прозрачность: серьёзный производитель объясняет, из чего складывается итоговая стоимость.

## Заключение:

Цена мебели на заказ отражает качество материалов и сложность проекта. Понятная и подробная смета помогает принять обоснованное решение и понять, на что идут средства.`,
        },
        "15": {
          title: "Как оптимизировать маленькое пространство мебелью на заказ?",
          description:
            "Мебель на заказ — идеальное решение для квартир и студий, где важен каждый сантиметр. Благодаря продуманному проектированию неиспользуемые зоны превращаются в места хранения, а многофункциональные элементы делают маленькую комнату практичной и упорядоченной...",
          fullContent: `Мебель на заказ — идеальное решение для квартир и студий, где важен каждый сантиметр. Благодаря продуманному проектированию неиспользуемые зоны превращаются в места хранения, а многофункциональные элементы делают маленькую комнату практичной и упорядоченной.

Вертикальная мебель задействует стены до потолка и добавляет места без загромождения проходов. Встроенные ящики под кроватью или диваны с местом для хранения — практичные и незаметные решения. Для маленьких кухонь удобны откидные столы и навесные шкафы с небольшой глубиной.

## Практические советы:

• Используйте модульную и многофункциональную мебель.
• Выбирайте светлые цвета и глянцевую отделку, чтобы визуально расширить пространство.
• Продумайте освещение так, чтобы подчеркнуть полезные зоны.

## Заключение:

Мебель на заказ превращает маленькие пространства в удобные и аккуратные комнаты за счёт продуманного использования каждого сантиметра.`,
        },
        "16": {
          title: "Как правильно ухаживать за мебелью на заказ, чтобы продлить срок службы?",
          description:
            "Правильный уход за мебелью на заказ необходим для сохранения внешнего вида и функциональности в долгосрочной перспективе. Каждый материал требует своего режима чистки и защиты...",
          fullContent: `Правильный уход за мебелью на заказ необходим для сохранения внешнего вида и функциональности в долгосрочной перспективе. Каждый материал требует своего режима чистки и защиты.

Ламинированный ДСП и МДФ легко чистятся влажной тряпкой и мягкими средствами, без абразивов. Крашеный МДФ требует больше внимания: рекомендуются деликатные чистящие средства и защита от длительного воздействия солнца. Массив дерева нуждается в периодическом уходе специальными маслами или лаками, которые сохраняют его вид и защищают от влаги.

## Практические советы:

• Избегайте механических ударов и резких перепадов температуры.
• Используйте подставки под горячие стаканы и тяжёлые предметы.
• Периодически проверяйте фурнитуру и при необходимости подтягивайте крепёж.

## Заключение:

Простая регулярная чистка и защита продлевают срок службы мебели и сохраняют её внешний вид.`,
        },
        "17": {
          title: "Какая гарантия у мебели на заказ и как работают услуги после доставки?",
          description:
            "Мебель на заказ подпадает под законодательную гарантию и во многих случаях под послепродажное обслуживание: монтаж, регулировки или ремонт. Срок и условия гарантии зависят от производителя и используемых материалов...",
          fullContent: `Мебель на заказ подпадает под законодательную гарантию и во многих случаях под послепродажное обслуживание: монтаж, регулировки или ремонт. Срок и условия гарантии зависят от производителя и используемых материалов.

Гарантия обычно покрывает производственные дефекты, проблемы конструкции и работоспособность фурнитуры и соединений. Не входят повреждения из-за неправильной эксплуатации, ударов или воздействия внешних факторов (например, избыточная влажность или огонь).

## Практические советы:

• Запрашивайте гарантийный талон и сохраняйте чек о покупке.
• Уточняйте, предлагает ли производитель бесплатную регулировку после монтажа.
• Узнайте, есть ли возможность сервисного обслуживания после окончания гарантии.

## Заключение:

Гарантия и послепродажное обслуживание дают уверенность и поддержку клиенту. Надёжный производитель оперативно реагирует на возможные проблемы и обеспечивает поддержку в долгосрочной перспективе.`,
        },
        "18": {
          title: "Как проверить качество мебели на заказ до оформления заказа?",
          description:
            "Оценка качества мебели до оформления заказа важна, чтобы избежать разочарований. Качество видно по используемым материалам, вниманию к деталям и качеству соединений...",
          fullContent: `Оценка качества мебели до оформления заказа важна, чтобы избежать разочарований. Качество видно по используемым материалам, вниманию к деталям и качеству соединений.

Проверяйте толщину панелей, тип отделки и устойчивость конструкции. Ящики должны плавно выдвигаться, петли — быть регулируемыми и надёжными, поверхности — ровными и без дефектов. Уточняйте происхождение материалов и запрашивайте образцы, чтобы оценить текстуру и цвет.

## Практические советы:

• Посетите шоурум и протестируйте выставленные образцы.
• Запросите образцы материалов, чтобы оценить их при естественном свете у себя дома.
• Запросите отзывы или фото предыдущих работ производителя.

## Заключение:

Внимательная оценка качества до заказа помогает сделать верный выбор и получить долговечную и аккуратную мебель.`,
        },
      },
    },
    colorsPage: {
      title: "Индивидуальные цвета для вашей кухни",
      ctaText: "Для персональных рекомендаций свяжитесь с нами.",
      ctaButton: "Запросить предложение",
    },
    categoryPage: {
      defaultCategoryName: "Категория",
    },
    categories: {
      next: "Далее",
      productNotFound: "Товар не найден.",
      placeholderDescription:
        "Эта модель доступна на заказ с нужными вам размерами и отделкой. Свяжитесь с нами для бесплатной персональной консультации и расчёта стоимости под ваше пространство.",
      bucatarii: [
        {
          title: "Кухня Urban Wood",
          description:
            "Элегантный дизайн с чёткими линиями и матовыми покрытиями — эта кухня сочетает функциональность с современным изяществом. Антрацитово-серые фасады создают утончённый и простой в уходе вид, а деревянные акценты добавляют тепло и визуальный баланс. Столешница и стеновая панель выполнены из материала с текстурой серого мрамора, придавая элегантность и долговечность. Минималистичное трековое освещение подчёркивает каждую деталь мебели. Идеально для современных интерьеров — кухня предлагает сочетание эстетики и функциональности.",
        },
        {
          title: "Кухня Arctic Line",
          description:
            "Минималистичный и светлый дизайн с матовыми белыми фасадами в сочетании с графитовыми акцентами и практичным центральным островом. Чистые линии и сдержанное освещение создают воздушное современное пространство, идеальное для современных интерьеров. Прочные материалы и эргономичная организация обеспечивают идеальный баланс эстетики и повседневного комфорта.",
        },
        {
          title: "Кухня Nordic Home",
          description:
            "Тёплая и уютная кухня, где природные оттенки дерева гармонично сочетаются с белыми поверхностями и обилием света. Дизайн в скандинавском стиле даёт функциональность, простоту и расслабляющую атмосферу — идеально для открытых пространств и семейной жизни.",
        },
        {
          title: "Кухня Loft Beige",
          description:
            "Сдержанная элегантность в матовых бежевых тонах с интегрированным ambient-освещением. Фасады без ручек и ровная отделка создают изысканный современный вид, тёплые акценты добавляют визуальный комфорт. Идеально для изысканных интерьеров и светлых пространств.",
        },
        {
          title: "Кухня Amber Touch",
          description:
            "Яркий дизайн с просторным островом и тёплыми деревянными акцентами в сочетании с контрастной тёмной столешницей и фартуком. Барная зона добавляет функциональность и стиль, превращая кухню в идеальное пространство для общения и готовки.",
        },
        {
          title: "Кухня Walnut Flow",
          description:
            "Богатая текстура ореха сочетается с современными поверхностями и массивной столешницей с выразительным видом. Дизайн передаёт тепло и основательность — идеально для премиальных интерьеров с акцентом на натуральные материалы и продуманные детали.",
        },
        {
          title: "Кухня Industrial Grey",
          description:
            "Настоящий индустриальный стиль: тёмные тона, грубые текстуры и направленный свет. Контраст дерева и матовых поверхностей создаёт глубину и характер — современное, мужское и очень практичное пространство.",
        },
        {
          title: "Кухня Soft Contrast",
          description:
            "Сбалансированное сочетание светлых фасадов и природных деревянных акцентов создаёт спокойный и элегантный вид. Подвесные элементы и минималистичные линии дают ощущение простора и порядка — идеально для современных изысканных интерьеров.",
        },
        {
          title: "Кухня Marble Line",
          description:
            "Глянцевые белые фасады в сочетании с фартуком под мрамор, который становится центром композиции. Чистый светлый вид даёт вневременную элегантность, а долговечные материалы обеспечивают функциональность на годы.",
        },
        {
          title: "Кухня Concrete Mood",
          description:
            "Смелый дизайн с отделкой под бетон и встроенной техникой. Контраст индустриальных текстур и минималистичных поверхностей создаёт современную атмосферу — идеально для городских интерьеров с характером.",
        },
        {
          title: "Кухня Sand Gloss",
          description:
            "Глянцевые фасады в песочных тонах отражают свет и создают тёплую элегантную атмосферу. Эргономичная планировка и продуманные зоны делают кухню комфортным местом для ежедневного использования и изысканного дизайна.",
        },
        {
          title: "Кухня Forest Light",
          description:
            "Гармоничное сочетание натурального дерева и светлых поверхностей с выразительным фактурным фартуком. Встроенное освещение подчёркивает материалы и создаёт расслабляющую атмосферу — идеально для современных интерьеров с природными акцентами.",
        },
      ],
      paturi: [
        { title: "Кровать Модерн" },
        { title: "Кровать Классик" },
        { title: "Кровать Премиум" },
      ],
      dulapuri: [
        { title: "Шкаф Модерн" },
        { title: "Комод Премиум" },
        { title: "Шкаф Классик" },
      ],
    },
    contactSection: {
      title: "Мечтаете о новой кухне? Предлагаем бесплатную консультацию.",
      description: "Поможем воплотить идеи в жизнь с персональными советами под ваш стиль.",
      formTitle: "Начните преображение вашей кухни",
      successTitle: "Сообщение отправлено!",
      successMessage: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    },
    galleryModal: {
      share: "Поделиться",
      linkCopied: "Ссылка скопирована",
    },
    cookieConsent: {
      title: "Использование cookie",
      text: "Мы используем cookie, чтобы обеспечить вам лучший опыт на нашем сайте. Продолжая пользоваться сайтом, вы соглашаетесь с этим.",
      privacyLink: "Политика конфиденциальности",
      accept: "Согласен",
      reject: "Отклонить",
      privacyAlert: "Политика конфиденциальности скоро будет доступна.",
      mustAcceptAlert: "Для использования сайта необходимо принять использование cookie.",
    },
  },
};

