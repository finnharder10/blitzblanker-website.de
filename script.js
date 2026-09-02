/* =========================================================
   Blitzblank Gebäudereinigung – script.js
   Sprachumschaltung DE / EN / BG, mobiles Menü, Formular-Demo
   ========================================================= */

const translations = {
  de: {
    nav_home: "Start",
    nav_about: "Über uns",
    nav_services: "Leistungen",
    nav_contact: "Kontakt",

    hero_kicker: "Gebäudereinigung Bielefeld & Umgebung",
    hero_title: "Sauberkeit, auf die Sie sich verlassen können.",
    hero_text: "Blitzblank reinigt Büros, Praxen und Privaträume in Ihrer Region – zuverlässig, gründlich und mit Blick fürs Detail.",
    hero_cta_primary: "Kostenlos anfragen",
    hero_cta_secondary: "Unsere Leistungen",

    about_kicker: "Wer wir sind",
    about_title: "Ein Team, das gründlich putzt und geradeso spricht",
    about_text: "Seit über 15 Jahren sorgt das Team von Blitzblank für glänzende Böden, klare Fenster und ein gutes Gefühl beim Betreten jedes Raums. Wir sind ein inhabergeführter Betrieb mit rund 30 geschulten Mitarbeitenden – zuverlässig, diskret und immer pünktlich.",
    value1_title: "Zuverlässigkeit",
    value1_text: "Feste Ansprechpartner, feste Termine – ohne böse Überraschungen.",
    value2_title: "Gründlichkeit",
    value2_text: "Geschulte Fachkräfte, geprüfte Checklisten, sauberes Ergebnis.",
    value3_title: "Nachhaltigkeit",
    value3_text: "Umweltschonende Reinigungsmittel, wo immer es möglich ist.",

    home_services_kicker: "Leistungen",
    home_services_title: "Reinigung nach Maß",
    home_services_sub: "Von der Büroreinigung bis zur Fassade – ein Anruf genügt.",
    home_services_more: "Alle Leistungen ansehen",

    svc1_title: "Büroreinigung",
    svc1_text: "Regelmäßige Unterhaltsreinigung für Büros und Coworking-Spaces.",
    svc2_title: "Hausreinigung",
    svc2_text: "Individuelle Reinigungspläne für Privathaushalte.",
    svc3_title: "Fensterreinigung",
    svc3_text: "Streifenfreier Glanz für Fenster und Fassaden.",
    svc4_title: "Grundreinigung",
    svc4_text: "Intensivreinigung bei Umzug, Renovierung oder Übergabe.",
    svc5_title: "Teppich- & Polsterreinigung",
    svc5_text: "Tiefenreinigung für Textilien und empfindliche Böden.",
    svc6_title: "Treppenhausreinigung",
    svc6_text: "Gepflegte Eingangsbereiche und Treppenhäuser für Ihr Objekt.",

    services_page_kicker: "Leistungen im Überblick",
    services_page_title: "Für jeden Raum die passende Reinigung",
    services_page_sub: "Wir kombinieren feste Reinigungspläne mit flexiblen Einzelaufträgen – abgestimmt auf Ihr Objekt und Ihr Budget.",

    cta_title: "Bereit für ein sauberes Ergebnis?",
    cta_text: "Sagen Sie uns, was gereinigt werden soll – wir erstellen ein unverbindliches Angebot.",
    cta_button: "Jetzt Kontakt aufnehmen",

    contact_kicker: "Kontakt",
    contact_title: "Schreiben Sie uns",
    contact_sub: "Wir melden uns in der Regel innerhalb eines Werktages mit einem passenden Angebot.",
    form_name: "Name",
    form_name_ph: "Ihr vollständiger Name",
    form_email: "E-Mail",
    form_email_ph: "name@beispiel.de",
    form_message: "Nachricht",
    form_message_ph: "Was möchten Sie gereinigt haben? Größe, Umfang, Wunschtermin …",
    form_submit: "Nachricht senden",
    form_success: "Vielen Dank! Dies ist ein Demo-Formular – es wird keine Nachricht verschickt.",

    info_title: "Direkt erreichbar",
    info_address_label: "Adresse",
    info_phone_label: "Telefon",
    info_email_label: "E-Mail",
    info_hours_label: "Erreichbarkeit",
    info_hours_value: "Mo–Fr, 8:00–17:00 Uhr",

    footer_tagline: "Gebäudereinigung mit Charakter – gründlich, verlässlich, aus Bielefeld.",
    footer_nav_title: "Navigation",
    footer_impressum_title: "Impressum",
    footer_impressum_company: "Blitzblank Gebäudereinigung GmbH",
    footer_impressum_address_label: "Anschrift:",
    footer_impressum_represented: "Vertreten durch: Max Mustermann (Geschäftsführer)",
    footer_impressum_contact: "Kontakt: Telefon +49 (0)521 123456 · info@blitzblank-beispiel.de",
    footer_impressum_register: "Handelsregister: HRB 12345, Amtsgericht Bielefeld",
    footer_impressum_vat: "USt-IdNr.: DE123456789",
    footer_impressum_responsible: "Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV): Max Mustermann, Anschrift wie oben.",
    footer_impressum_note: "Musterimpressum zu Demonstrationszwecken – keine reale Firma.",
    footer_copyright: "© 2026 Blitzblank Gebäudereinigung GmbH. Alle Rechte vorbehalten.",

    meta_home: "Blitzblank Gebäudereinigung – Start",
    meta_services: "Leistungen – Blitzblank Gebäudereinigung",
    meta_contact: "Kontakt – Blitzblank Gebäudereinigung",
    skip_link: "Zum Inhalt springen"
  },

  en: {
    nav_home: "Home",
    nav_about: "About us",
    nav_services: "Services",
    nav_contact: "Contact",

    hero_kicker: "Cleaning services in Bielefeld & beyond",
    hero_title: "Cleanliness you can rely on.",
    hero_text: "Blitzblank cleans offices, practices and homes across your region – reliably, thoroughly and with an eye for detail.",
    hero_cta_primary: "Get a free quote",
    hero_cta_secondary: "Our services",

    about_kicker: "Who we are",
    about_title: "A team that cleans thoroughly and speaks plainly",
    about_text: "For more than 15 years, the Blitzblank team has delivered shining floors, streak-free windows and a good feeling in every room. We're an owner-run company with around 30 trained staff – reliable, discreet and always on time.",
    value1_title: "Reliability",
    value1_text: "A fixed contact person and fixed schedule – no surprises.",
    value2_title: "Thoroughness",
    value2_text: "Trained staff, tested checklists, a spotless result.",
    value3_title: "Sustainability",
    value3_text: "Environmentally friendly cleaning products wherever possible.",

    home_services_kicker: "Services",
    home_services_title: "Cleaning, tailored to you",
    home_services_sub: "From office cleaning to façades – just one call away.",
    home_services_more: "View all services",

    svc1_title: "Office cleaning",
    svc1_text: "Regular maintenance cleaning for offices and coworking spaces.",
    svc2_title: "Home cleaning",
    svc2_text: "Custom cleaning plans for private households.",
    svc3_title: "Window cleaning",
    svc3_text: "Streak-free shine for windows and façades.",
    svc4_title: "Deep cleaning",
    svc4_text: "Intensive cleaning for moves, renovations or handovers.",
    svc5_title: "Carpet & upholstery cleaning",
    svc5_text: "Deep cleaning for textiles and delicate flooring.",
    svc6_title: "Stairwell cleaning",
    svc6_text: "Well-kept entrances and stairwells for your property.",

    services_page_kicker: "Services at a glance",
    services_page_title: "The right cleaning for every space",
    services_page_sub: "We combine fixed cleaning schedules with flexible one-off jobs – tailored to your property and your budget.",

    cta_title: "Ready for a spotless result?",
    cta_text: "Tell us what needs cleaning – we'll put together a no-obligation quote.",
    cta_button: "Get in touch now",

    contact_kicker: "Contact",
    contact_title: "Send us a message",
    contact_sub: "We usually reply within one business day with a suitable quote.",
    form_name: "Name",
    form_name_ph: "Your full name",
    form_email: "Email",
    form_email_ph: "name@example.com",
    form_message: "Message",
    form_message_ph: "What would you like cleaned? Size, scope, preferred date …",
    form_submit: "Send message",
    form_success: "Thank you! This is a demo form – no message is actually sent.",

    info_title: "Reach us directly",
    info_address_label: "Address",
    info_phone_label: "Phone",
    info_email_label: "Email",
    info_hours_label: "Availability",
    info_hours_value: "Mon–Fri, 8:00 AM–5:00 PM",

    footer_tagline: "Cleaning services with character – thorough, dependable, from Bielefeld.",
    footer_nav_title: "Navigation",
    footer_impressum_title: "Legal notice (Impressum)",
    footer_impressum_company: "Blitzblank Gebäudereinigung GmbH",
    footer_impressum_address_label: "Address:",
    footer_impressum_represented: "Represented by: Max Mustermann (Managing Director)",
    footer_impressum_contact: "Contact: Phone +49 (0)521 123456 · info@blitzblank-beispiel.de",
    footer_impressum_register: "Commercial register: HRB 12345, Bielefeld Local Court",
    footer_impressum_vat: "VAT ID: DE123456789",
    footer_impressum_responsible: "Responsible for content (§ 55 (2) RStV): Max Mustermann, address as above.",
    footer_impressum_note: "Sample legal notice for demonstration purposes – not a real company.",
    footer_copyright: "© 2026 Blitzblank Gebäudereinigung GmbH. All rights reserved.",

    meta_home: "Blitzblank Gebäudereinigung – Home",
    meta_services: "Services – Blitzblank Gebäudereinigung",
    meta_contact: "Contact – Blitzblank Gebäudereinigung",
    skip_link: "Skip to content"
  },

  bg: {
    nav_home: "Начало",
    nav_about: "За нас",
    nav_services: "Услуги",
    nav_contact: "Контакти",

    hero_kicker: "Почистване в Билефелд и региона",
    hero_title: "Чистота, на която можете да разчитате.",
    hero_text: "Blitzblank почиства офиси, кабинети и домове във вашия регион – надеждно, старателно и с внимание към детайла.",
    hero_cta_primary: "Безплатна оферта",
    hero_cta_secondary: "Нашите услуги",

    about_kicker: "Кои сме ние",
    about_title: "Екип, който почиства старателно и говори ясно",
    about_text: "От над 15 години екипът на Blitzblank се грижи за блестящи подове, чисти прозорци и приятно усещане във всяко помещение. Ние сме семейна фирма с около 30 обучени служители – надеждни, дискретни и винаги точни.",
    value1_title: "Надеждност",
    value1_text: "Постоянно лице за контакт и фиксиран график – без изненади.",
    value2_title: "Старателност",
    value2_text: "Обучени служители, проверени листи за проверка, безупречен резултат.",
    value3_title: "Устойчивост",
    value3_text: "Екологични почистващи препарати, когато е възможно.",

    home_services_kicker: "Услуги",
    home_services_title: "Почистване по мярка",
    home_services_sub: "От офиси до фасади – само едно обаждане.",
    home_services_more: "Вижте всички услуги",

    svc1_title: "Почистване на офиси",
    svc1_text: "Редовно поддържащо почистване на офиси и коуъркинг пространства.",
    svc2_title: "Почистване на домове",
    svc2_text: "Индивидуални планове за почистване на жилища.",
    svc3_title: "Почистване на прозорци",
    svc3_text: "Блясък без ивици за прозорци и фасади.",
    svc4_title: "Основно почистване",
    svc4_text: "Основно почистване при преместване, ремонт или предаване на имот.",
    svc5_title: "Почистване на килими и мебели",
    svc5_text: "Дълбоко почистване на текстил и деликатни подови настилки.",
    svc6_title: "Почистване на стълбища",
    svc6_text: "Поддържани входове и стълбищни клетки за вашия обект.",

    services_page_kicker: "Услуги в кратко",
    services_page_title: "Точното почистване за всяко пространство",
    services_page_sub: "Съчетаваме фиксирани графици за почистване с гъвкави еднократни поръчки – съобразени с вашия обект и бюджет.",

    cta_title: "Готови за безупречен резултат?",
    cta_text: "Кажете ни какво трябва да се почисти – ще изготвим оферта без ангажимент.",
    cta_button: "Свържете се сега",

    contact_kicker: "Контакти",
    contact_title: "Пишете ни",
    contact_sub: "Обикновено отговаряме до един работен ден с подходяща оферта.",
    form_name: "Име",
    form_name_ph: "Вашето пълно име",
    form_email: "Имейл",
    form_email_ph: "name@example.com",
    form_message: "Съобщение",
    form_message_ph: "Какво искате да бъде почистено? Размер, обхват, желана дата …",
    form_submit: "Изпрати съобщение",
    form_success: "Благодарим ви! Това е демо формуляр – съобщението не се изпраща.",

    info_title: "Свържете се директно",
    info_address_label: "Адрес",
    info_phone_label: "Телефон",
    info_email_label: "Имейл",
    info_hours_label: "Работно време",
    info_hours_value: "Пон–Пет, 8:00–17:00 ч.",

    footer_tagline: "Почистване с характер – старателно, надеждно, от Билефелд.",
    footer_nav_title: "Навигация",
    footer_impressum_title: "Информация за фирмата (Импресум)",
    footer_impressum_company: "Blitzblank Gebäudereinigung GmbH",
    footer_impressum_address_label: "Адрес:",
    footer_impressum_represented: "Представлявано от: Макс Мустерман (Управител)",
    footer_impressum_contact: "Контакти: Телефон +49 (0)521 123456 · info@blitzblank-beispiel.de",
    footer_impressum_register: "Търговски регистър: HRB 12345, Районен съд Билефелд",
    footer_impressum_vat: "ДДС номер: DE123456789",
    footer_impressum_responsible: "Отговорен за съдържанието (§ 55, ал. 2 RStV): Макс Мустерман, адрес както по-горе.",
    footer_impressum_note: "Примерен импресум с демонстрационна цел – не е реална фирма.",
    footer_copyright: "© 2026 Blitzblank Gebäudereinigung GmbH. Всички права запазени.",

    meta_home: "Blitzblank Gebäudereinigung – Начало",
    meta_services: "Услуги – Blitzblank Gebäudereinigung",
    meta_contact: "Контакти – Blitzblank Gebäudereinigung",
    skip_link: "Към съдържанието"
  }
};

function applyLanguage(lang){
  if(!translations[lang]) lang = "de";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key] !== undefined){
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(translations[lang][key] !== undefined){
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  const titleKey = document.body.getAttribute("data-title-key");
  if(titleKey && translations[lang][titleKey]){
    document.title = translations[lang][titleKey];
  }

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  localStorage.setItem("blitzblank-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("blitzblank-lang") || "de";
  applyLanguage(saved);

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  if(navToggle && navList){
    navToggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.querySelector(".contact-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || "de";
      alert(translations[lang].form_success);
      form.reset();
    });
  }
});
