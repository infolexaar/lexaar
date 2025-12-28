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
      next: "Next",
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
    },
  },
};

