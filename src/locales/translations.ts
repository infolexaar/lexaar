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
      project1Description: string;
      project2Description: string;
      project3Description: string;
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
        project1Description:
          "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate.",
        project2Description:
          "Suprafețe de marmură albă și finisaje lucioase creează o atmosferă de lux rafinat, ideală pentru bucătăriile moderne.",
        project3Description:
          "Lemnul natural în tonuri calde îmbină estetica rustică cu funcționalitatea contemporană, oferind un spațiu primitor.",
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
        title: "De ce să alegi Mobilia",
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
            "Culorile deschise, neutre sau pastelate fac ca încăperile mici să pară mai spațioase și...",
        },
        "3": {
          title: "Cum aleg între mobilier modular și personalizat?",
          description:
            "Mobilierul modular este o soluție rapidă și accesibilă, ideal pentru spațiile standard...",
        },
        "4": {
          title: "Cum se desfășoară procesul de comandă a mobilei la comandă?",
          description:
            "Procesul începe cu consultanța inițială, unde se discută preferințele de design...",
        },
        "5": {
          title: "Cum întrețin mobila din MDF sau lemn masiv?",
          description:
            "Întreținerea corectă prelungește durata de viață a mobilierului și păstrează aspectul său.",
        },
        "6": {
          title: "Ce trebuie să știu despre combinarea diferitelor materiale?",
          description:
            "Combinarea MDF, lemn și sticlă trebuie făcută ținând cont de rezistența și compatibilitatea...",
        },
        "7": {
          title: "Cum planific iluminatul în camere cu mobilă personalizată?",
          description:
            "Iluminatul trebuie să fie funcțional și estetic. Spoturile și benzile LED pot evidenția anumite...",
        },
        "8": {
          title:
            "Ce garanție oferă mobila la comandă și cum funcționează serviciile post-livrare?",
          description:
            "Garanția acoperă defectele de fabricație și problemele de calitate care apar în mod normal...",
        },
        "9": {
          title:
            "Cum pot evalua calitatea unei mobile la comandă înainte de a o comanda?",
          description:
            "Pentru a evalua calitatea mobilei, verifică tipul de materiale folosite, grosimea și densitatea plăcilor...",
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
        { title: "Bucătărie Arctic Line" },
        { title: "Bucătărie Nordic Home" },
        { title: "Bucătărie Loft Beige" },
        { title: "Bucătărie Amber Touch" },
        { title: "Bucătărie Walnut Flow" },
        {
          title: "Bucătărie Industrial Grey",
          description:
            "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate.",
        },
        { title: "Bucătărie Soft Contrast" },
        { title: "Bucătărie Marble Line" },
        { title: "Bucătărie Concrete Mood" },
        { title: "Bucătărie Sand Gloss" },
        { title: "Bucătărie Forest Light" },
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
        project1Description:
          "Modern kitchen with minimalist design, elegant combination of natural wood and anthracite, perfectly balanced between style and functionality.",
        project2Description:
          "White marble surfaces and glossy finishes create an atmosphere of refined luxury, ideal for modern kitchens.",
        project3Description:
          "Natural wood in warm tones blends rustic aesthetics with contemporary functionality, offering a welcoming space.",
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
        title: "Why choose Mobilia",
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
            "Light, neutral or pastel colours make small rooms appear more spacious and...",
        },
        "3": {
          title: "How do I choose between modular and custom furniture?",
          description:
            "Modular furniture is a quick and affordable solution, ideal for standard spaces...",
        },
        "4": {
          title: "How does the custom furniture ordering process work?",
          description:
            "The process starts with an initial consultation, where design preferences are discussed...",
        },
        "5": {
          title: "How do I maintain MDF or solid wood furniture?",
          description:
            "Proper maintenance extends the life of furniture and preserves its appearance.",
        },
        "6": {
          title: "What should I know about combining different materials?",
          description:
            "Combining MDF, wood and glass must take into account resistance and compatibility...",
        },
        "7": {
          title: "How do I plan lighting in rooms with custom furniture?",
          description:
            "Lighting should be both functional and aesthetic. Spotlights and LED strips can highlight certain...",
        },
        "8": {
          title:
            "What warranty does custom furniture offer and how do after-sales services work?",
          description:
            "The warranty covers manufacturing defects and quality issues that normally occur...",
        },
        "9": {
          title:
            "How can I assess the quality of custom furniture before ordering?",
          description:
            "To assess furniture quality, check the type of materials used, the thickness and density of panels...",
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
        { title: "Kitchen Arctic Line" },
        { title: "Kitchen Nordic Home" },
        { title: "Kitchen Loft Beige" },
        { title: "Kitchen Amber Touch" },
        { title: "Kitchen Walnut Flow" },
        {
          title: "Kitchen Industrial Grey",
          description:
            "Modern kitchen with minimalist design, elegant combination of natural wood and anthracite, perfectly balanced between style and functionality.",
        },
        { title: "Kitchen Soft Contrast" },
        { title: "Kitchen Marble Line" },
        { title: "Kitchen Concrete Mood" },
        { title: "Kitchen Sand Gloss" },
        { title: "Kitchen Forest Light" },
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
        project1Description:
          "Современная кухня с минималистичным дизайном, элегантное сочетание натурального дерева и антрацита, идеальный баланс стиля и функциональности.",
        project2Description:
          "Белый мрамор и глянцевые поверхности создают атмосферу изысканной роскоши, идеальную для современных кухонь.",
        project3Description:
          "Натуральное дерево в тёплых тонах сочетает деревенскую эстетику с современной функциональностью, создавая уютное пространство.",
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
        title: "Почему выбрать Mobilia",
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
            "Светлые, нейтральные или пастельные тона делают маленькие комнаты визуально просторнее и...",
        },
        "3": {
          title: "Как выбрать между модульной и индивидуальной мебелью?",
          description:
            "Модульная мебель — быстрое и доступное решение, идеально для типовых пространств...",
        },
        "4": {
          title: "Как проходит процесс заказа мебели на заказ?",
          description:
            "Процесс начинается с первичной консультации, где обсуждаются предпочтения по дизайну...",
        },
        "5": {
          title: "Как ухаживать за мебелью из МДФ или массива?",
          description:
            "Правильный уход продлевает срок службы мебели и сохраняет её внешний вид.",
        },
        "6": {
          title: "Что нужно знать о сочетании разных материалов?",
          description:
            "Сочетание МДФ, дерева и стекла нужно подбирать с учётом прочности и совместимости...",
        },
        "7": {
          title: "Как спланировать освещение в комнатах с индивидуальной мебелью?",
          description:
            "Освещение должно быть функциональным и эстетичным. Точечные светильники и LED-ленты могут подчеркнуть...",
        },
        "8": {
          title:
            "Какую гарантию даёт мебель на заказ и как работают услуги после доставки?",
          description:
            "Гарантия покрывает производственные дефекты и проблемы качества, возникающие в обычных условиях...",
        },
        "9": {
          title:
            "Как оценить качество мебели на заказ до оформления заказа?",
          description:
            "Чтобы оценить качество мебели, проверьте тип используемых материалов, толщину и плотность панелей...",
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
        { title: "Кухня Arctic Line" },
        { title: "Кухня Nordic Home" },
        { title: "Кухня Loft Beige" },
        { title: "Кухня Amber Touch" },
        { title: "Кухня Walnut Flow" },
        {
          title: "Кухня Industrial Grey",
          description:
            "Современная кухня с минималистичным дизайном, элегантное сочетание натурального дерева и антрацита, идеальный баланс стиля и функциональности.",
        },
        { title: "Кухня Soft Contrast" },
        { title: "Кухня Marble Line" },
        { title: "Кухня Concrete Mood" },
        { title: "Кухня Sand Gloss" },
        { title: "Кухня Forest Light" },
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

