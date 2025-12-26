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
  },
};

