export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const routePaths = {
  home: {
    en: "",
    fr: "fr/",
  },
  privacy: {
    en: "privacy/",
    fr: "fr/privacy/",
  },
  thanks: {
    en: "thanks/",
    fr: "fr/thanks/",
  },
} as const;

export type RouteKey = keyof typeof routePaths;

export const siteContent = {
  en: {
    siteName: "Hull Leak Monitor",
    layout: {
      defaultTitle: "Hull Leak Monitor | DC leakage monitoring for metal boats",
      defaultDescription:
        "Join the waitlist for Hull Leak Monitor, a panel-mounted DC leakage monitor for aluminium and steel boats.",
    },
    nav: {
      homeAria: "Hull Leak Monitor home",
      primaryAria: "Primary navigation",
      howItWorks: "How it works",
      specs: "Specs",
      joinWaitlist: "Join waitlist",
      languageAria: "View this page in French",
      languageLabel: "FR",
    },
    footer: {
      aria: "Footer navigation",
      home: "Home",
      privacy: "Privacy",
    },
    home: {
      meta: {
        title: "Hull Leak Monitor | DC leakage monitoring for metal boats",
        description:
          "Hull Leak Monitor is a panel-mounted DC leakage monitor for aluminium and steel boats, designed to track battery-to-hull leakage trends and help troubleshoot suspect circuits.",
      },
      hero: {
        eyebrow: "DC leakage monitoring for metal-hull boats",
        title: "Hull Leak Monitor",
        body: "Monitor up to 4 battery banks, get historic trends and automatic alerts, and use continuous debug mode to help find the circuit causing the problem.",
        primaryCta: "Join the waitlist",
        secondaryCta: "See how it works",
        frontAlt:
          "Front view product mockup of the Hull Leak Monitor panel with LCD readings and leakage level indicator lights.",
      },
      how: {
        eyebrow: "How it works",
        title: "Scans up to 4 battery banks for DC hull leaks.",
        body: "Hull Leak Monitor checks the positive and negative side of each battery bank against the hull reference, logs numerical readings, and keeps simple panel status visible through the LCD and leakage level LEDs.",
        features: [
          {
            kicker: "Peace of mind, without remembering to use the tester.",
            title: "Automatic periodic scanning",
            body: [
              "Install the device and forget about it.",
              "In monitoring mode, the device wakes at the configured interval, such as every hour, scans all battery banks for leaks, stores the readings, updates status LEDs, and if necessary raises an alert by email, sounds a buzzer, or activates an external relay if configured.",
            ],
          },
          {
            kicker: "Actual trends, no more wondering when it started.",
            title: "History instead of one-off checks",
            body: [
              "Traditional indicators show the present condition. Logged trends help owners see whether a conductor is stable, slowly changing, or moving during solar panel operation, shore-power use, or heavy rain.",
            ],
          },
          {
            kicker: "Actual Ohm values and sound feedback while you work.",
            title: "Continuous troubleshooting mode",
            body: [
              "Select one battery terminal and watch the live value change as you work. Fixing one leak in presence of another has a noticeable effect, contrary to pure LED-based monitors.",
              "Higher and lower beeps keep you aware of changes while you are working deep in the hull, without calling someone back at the panel to read values to you.",
            ],
          },
        ],
      },
      specs: {
        eyebrow: "Capabilities",
        title: "Key specifications.",
        backAlt:
          "Back view product mockup of the Hull Leak Monitor panel showing the connector side.",
        items: [
          {
            label: "Power input",
            text: "12 V or 24 V DC, reverse-polarity protected.",
          },
          {
            label: "Battery monitoring",
            text: "up to 4 battery banks, positive and negative, for 8 monitored wires.",
          },
          {
            label: "Automated scans",
            text: "periodic scan interval is adjustable, between one hour and off.",
          },
          {
            label: "Alerts",
            text: "sound alerts with a sound-off switch, email alerts if Wi-Fi is set up, and external relay output.",
          },
          {
            label: "Controls",
            text: "each function has a dedicated hardware button. No fumbling through LCD menus.",
          },
          {
            label: "Status LEDs",
            text: "visual alerts.",
          },
          {
            label: "Wi-Fi",
            text: "connect to the onboard Wi-Fi to send email alerts and access the historical data dashboard.",
          },
          {
            label: "Web portal",
            text: "visualize your data or download it as a .csv text file.",
          },
        ],
      },
      waitlist: {
        eyebrow: "Join the waitlist",
        title: "Get product updates and launch news.",
        body: "Join the waitlist for updates, installation notes, and early availability announcements.",
      },
      note: {
        eyebrow: "Important note",
        body: "Hull Leak Monitor is a monitoring tool and diagnostic aid for aluminium and steel boats. It supports troubleshooting, but it is not a replacement for a qualified marine electrician.",
      },
    },
    form: {
      errorMessage: "Your subscription could not be saved. Please try again.",
      successMessage: "Success, you are on the waitlist.",
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      boatStatusLabel: "Boat status",
      optional: "optional",
      boatStatusOptions: ["Owner", "Refit or survey", "Builder or technician", "Researching"],
      featureLabel: "What feature would you love to see?",
      notesPlaceholder: "Optional",
      submit: "Join waitlist",
      providerNote: "Submits through Brevo.",
      clientMessages: {
        requiredCode: "Please choose a country code",
        invalid:
          "The information provided is invalid. Please review the field format and try again.",
        required: "This field cannot be left blank. ",
        invalidDate: "Please enter a valid date",
        requiredMultiselect: "Please select at least 1 option",
        selectedList: "{quantity} list selected",
        selectedLists: "{quantity} lists selected",
        selectedOption: "{quantity} selected",
        selectedOptions: "{quantity} selected",
      },
    },
    thanks: {
      meta: {
        title: "Thanks | Hull Leak Monitor",
        description: "Thank you page for the Hull Leak Monitor waitlist.",
      },
      eyebrow: "You're on the list",
      title: "Thanks for joining the Hull Leak Monitor waitlist.",
      body: "You'll get product updates and availability news by email.",
      cta: "Return home",
    },
    privacy: {
      meta: {
        title: "Privacy | Hull Leak Monitor",
        description: "Privacy information for the Hull Leak Monitor waitlist website.",
      },
      eyebrow: "Privacy",
      title: "Privacy for a static waitlist site",
      paragraphs: [
        "The Hull Leak Monitor waitlist website has no backend, no local database, and no local email storage.",
        "Waitlist submissions are sent directly to the configured external provider, Brevo. That provider processes the information you submit according to the settings and privacy terms configured in that account.",
        "The waitlist form asks for your email address and optional context about your boat so Hull Leak Monitor can send relevant updates. Do not submit sensitive vessel, financial, or safety-critical information through the form.",
        "This site does not include analytics, advertising pixels, or client-side tracking scripts. GitHub Pages or the external form provider may process routine technical logs needed to serve the website or handle submissions.",
      ],
      cta: "Back to waitlist",
    },
  },
  fr: {
    siteName: "Hull Leak Monitor",
    layout: {
      defaultTitle: "Hull Leak Monitor | Surveillance des fuites DC pour bateaux métalliques",
      defaultDescription:
        "Rejoignez la liste d'attente de Hull Leak Monitor, un moniteur de fuite DC encastrable pour bateaux en aluminium et en acier.",
    },
    nav: {
      homeAria: "Accueil Hull Leak Monitor",
      primaryAria: "Navigation principale",
      howItWorks: "Fonctionnement",
      specs: "Caractéristiques",
      joinWaitlist: "Liste d'attente",
      languageAria: "Voir cette page en anglais",
      languageLabel: "EN",
    },
    footer: {
      aria: "Navigation de pied de page",
      home: "Accueil",
      privacy: "Confidentialité",
    },
    home: {
      meta: {
        title: "Hull Leak Monitor | Surveillance des fuites DC pour bateaux métalliques",
        description:
          "Hull Leak Monitor est un moniteur de fuite DC encastrable pour bateaux en aluminium et en acier, conçu pour suivre les tendances de fuite entre batterie et coque et aider à identifier les circuits suspects.",
      },
      hero: {
        eyebrow: "Surveillance des fuites DC pour bateaux à coque métallique",
        title: "Hull Leak Monitor",
        body: "Surveillez jusqu'à 4 parcs de batteries, gardez une trace de vos mesures, recevez des alertes automatiques, et en cas de fuite, utilisez le mode diagnostic pour facilement répérer le circuit en cause.",
        primaryCta: "Rejoindre la liste d'attente",
        secondaryCta: "Voir le fonctionnement",
        frontAlt:
          "Vue de face d'une maquette du panneau Hull Leak Monitor avec mesures LCD et voyants de niveau de fuite.",
      },
      how: {
        eyebrow: "Fonctionnement",
        title: "Analyse jusqu'à 4 parcs de batteries pour détecter les fuites DC vers la coque.",
        body: "Hull Leak Monitor contrôle le positif et le négatif de chaque parc de batteries par rapport à la référence coque, enregistre les mesures numériques et garde un état simple visible sur l'écran LCD et les LED de niveau de fuite.",
        features: [
          {
            kicker: "La tranquillité d'esprit sans charge mentale.",
            title: "Analyses périodiques automatiques",
            body: [
              "Installez l'appareil et oubliez-le.",
              "En mode surveillance, l'appareil se réveille à l'intervalle configuré, par exemple toutes les heures, analyse tous les parcs de batteries, enregistre les mesures, met à jour les LED d'état et, si nécessaire, déclenche une alerte par email, une alarme sonore ou un relais externe.",
            ],
          },
          {
            kicker: "De vraies tendances, pour savoir quand le problème a commencé.",
            title: " Données historiques",
            body: [
              "Les indicateurs traditionnels montrent l'état présent. Les tendances enregistrées aident les propriétaires à voir si un conducteur est stable, évolue lentement ou change pendant la production solaire, le branchement au quai ou de fortes pluies.",
            ],
          },
          {
            kicker: "Valeurs réelles en ohms et retour sonore pendant l'intervention.",
            title: "Mode diagnostic",
            body: [
              "Sélectionnez une borne de batterie et suivez la valeur en direct pendant que vous intervenez. Corriger une fuite en présence d'une autre produit un effet visible, contrairement aux moniteurs basés uniquement sur des LED.",
              "Des bips plus hauts ou plus bas signalent les changements lorsque vous travaillez au fond de la coque, sans demander à quelqu'un de vous lire les valeurs au tableau.",
            ],
          },
        ],
      },
      specs: {
        eyebrow: "Capacités",
        title: "Caractéristiques clés.",
        backAlt:
          "Vue arrière du Hull Leak Monitor.",
        items: [
          {
            label: "Alimentation",
            text: "5-32 V DC, protégée contre l'inversion de polarité.",
          },
          {
            label: "Surveillance batteries",
            text: "jusqu'à 4 parcs de batteries, positif et négatif, soit 8 conducteurs surveillés.",
          },
          {
            label: "Analyses automatiques",
            text: "intervalle d'analyse périodique réglable, d'une heure à désactivé.",
          },
          {
            label: "Alertes",
            text: "alertes sonores avec interrupteur de coupure, alertes email si le Wi-Fi est configuré et sortie relais externe.",
          },
          {
            label: "Commandes",
            text: "chaque fonction possède un bouton matériel dédié. Pas de navigation fastidieuse dans les menus LCD.",
          },
          {
            label: "LED d'état",
            text: "alertes visuelles.",
          },
          {
            label: "Wi-Fi",
            text: "connexion au Wi-Fi de bord pour envoyer les alertes email et accéder au tableau de bord historique.",
          },
          {
            label: "Portail web",
            text: "visualisez vos données ou téléchargez-les au format .csv.",
          },
        ],
      },
      waitlist: {
        eyebrow: "Liste d'attente",
        title: "Recevez les nouvelles du lancement.",
        body: "Rejoignez la liste d'attente pour recevoir les nouveautés, et être prévenu de la disponibilité.",
      },
      note: {
        eyebrow: "Note importante",
        body: "Hull Leak Monitor est un outil de surveillance et une aide au diagnostic pour les bateaux en aluminium et en acier. Il aide au dépannage, mais ne remplace pas un électricien marine qualifié.",
      },
    },
    form: {
      errorMessage: "Votre inscription n'a pas pu être enregistrée. Veuillez réessayer.",
      successMessage: "C'est bon, vous êtes sur la liste d'attente.",
      emailLabel: "Adresse email",
      emailPlaceholder: "vous@exemple.com",
      boatStatusLabel: "Situation du bateau",
      optional: "facultatif",
      boatStatusOptions: [
        "Propriétaire",
        "Refit ou expertise",
        "Chantier ou technicien",
        "Recherche d'information",
      ],
      featureLabel: "Quelle fonctionnalité aimeriez-vous voir ?",
      notesPlaceholder: "Facultatif",
      submit: "Rejoindre la liste d'attente",
      providerNote: "Envoyé via Brevo.",
      clientMessages: {
        requiredCode: "Veuillez choisir un indicatif pays",
        invalid:
          "Les informations fournies sont invalides. Veuillez vérifier le format du champ et réessayer.",
        required: "Ce champ ne peut pas être laissé vide. ",
        invalidDate: "Veuillez saisir une date valide",
        requiredMultiselect: "Veuillez sélectionner au moins 1 option",
        selectedList: "{quantity} liste sélectionnée",
        selectedLists: "{quantity} listes sélectionnées",
        selectedOption: "{quantity} sélectionné",
        selectedOptions: "{quantity} sélectionnés",
      },
    },
    thanks: {
      meta: {
        title: "Merci | Hull Leak Monitor",
        description: "Page de remerciement pour la liste d'attente Hull Leak Monitor.",
      },
      eyebrow: "Vous êtes sur la liste",
      title: "Merci d'avoir rejoint la liste d'attente Hull Leak Monitor.",
      body: "Vous recevrez les actualités produit et les nouvelles de disponibilité par email.",
      cta: "Retour à l'accueil",
    },
    privacy: {
      meta: {
        title: "Confidentialité | Hull Leak Monitor",
        description: "Informations de confidentialité pour le site de liste d'attente Hull Leak Monitor.",
      },
      eyebrow: "Confidentialité",
      title: "Confidentialité d'un site statique de liste d'attente",
      paragraphs: [
        "Le site de liste d'attente Hull Leak Monitor n'a pas de backend, pas de base de données locale et ne stocke aucun email localement.",
        "Les inscriptions à la liste d'attente sont envoyées directement au prestataire externe configuré, Brevo. Ce prestataire traite les informations envoyées selon les paramètres et les conditions de confidentialité configurés dans ce compte.",
        "Le formulaire demande votre adresse email et quelques informations facultatives sur votre bateau afin que Hull Leak Monitor puisse envoyer des nouvelles pertinentes. N'envoyez pas d'informations sensibles sur le bateau, financières ou critiques pour la sécurité via ce formulaire.",
        "Ce site n'inclut pas d'analytics, de pixels publicitaires ni de scripts de suivi côté client. GitHub Pages ou le prestataire externe du formulaire peuvent traiter des journaux techniques courants nécessaires pour servir le site ou gérer les inscriptions.",
      ],
      cta: "Retour à la liste d'attente",
    },
  },
} as const;
