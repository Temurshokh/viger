/**
 * KOMPUHTR SHOP - Core Engine
 * Apple-grade Interactivity, Bilingual UZ/RU support,
 * Multi-currency (including UZS so'm), Game Benchmark Engine,
 * Interactive Customizer & Telegram @VIGER_YT Integration.
 */

// 1. DATA REPOSITORY: 100% REALISTIC HIGH-MARGIN BUILDS (BILINGUAL)
const PC_CATALOG = [
  {
    id: "pc-199",
    name: "Kompuhtr START",
    tagline: {
      ru: "Киберспортивный входной билет",
      uz: "Kibersportga kirish chiptasi"
    },
    category: "budget",
    badge: {
      ru: "Хит Эконом",
      uz: "Hamyonbop Xit"
    },
    badgeType: "starter",
    priceUsd: 199,
    oldPriceUsd: 249,
    image: "assets/images/pc-199.jpg",
    specs: {
      cpu: {
        ru: "Intel Xeon E5-2670 v3 (12 ядер / 24 потока, 3.1 GHz)",
        uz: "Intel Xeon E5-2670 v3 (12 yadro / 24 oqim, 3.1 GHz)"
      },
      gpu: {
        ru: "AMD Radeon RX 580 8GB GDDR5 (2048SP Dual Fan)",
        uz: "AMD Radeon RX 580 8GB GDDR5 (2048SP Dual Fan)"
      },
      ram: {
        ru: "16GB DDR4 (2x8GB) Dual Channel",
        uz: "16GB DDR4 (2x8GB) Ikki kanalli"
      },
      ssd: {
        ru: "512GB M.2 NVMe SSD (2100 MB/s)",
        uz: "512GB M.2 NVMe SSD (2100 MB/s)"
      },
      motherboard: {
        ru: "Huananzhi / Atermiter X99 QD4 (LGA2011-3)",
        uz: "Huananzhi / Atermiter X99 QD4 (LGA2011-3)"
      },
      psu: {
        ru: "500W DeepCool / 1stPlayer 80+ APFC",
        uz: "500W DeepCool / 1stPlayer 80+ APFC"
      },
      case: {
        ru: "Mini-Tower со стеклом и 3x 120mm RGB вентиляторами",
        uz: "Shishali Mini-Tower va 3x 120mm RGB kulerlar"
      },
      cooler: {
        ru: "Башенный кулер 4 медные трубки (до 130W)",
        uz: "Minora kuler 4 mis trubka (130W gacha)"
      },
      thermalPaste: {
        ru: "Arctic MX-4 (свежая)",
        uz: "Arctic MX-4 (yangi surtilgan)"
      },
      os: {
        ru: "Windows 11 Pro 64-bit (чистая, оптимизированная)",
        uz: "Windows 11 Pro 64-bit (toza, o'yinlarga sozlangan)"
      }
    },
    temps: {
      ru: "CPU 58°C / GPU 68°C в FurMark",
      uz: "FurMark-da CPU 58°C / GPU 68°C"
    },
    warranty: {
      ru: "6 месяцев гарантии + поддержка",
      uz: "6 oy kafolat + texnik ko'mak"
    },
    fps: {
      cs2: 120,
      dota2: 140,
      gta5: 85,
      valorant: 180,
      cyberpunk: 42,
      warzone: 60
    },
    idealFor: {
      ru: "CS2, Dota 2, GTA V, Танки, учеба, монтаж FHD",
      uz: "CS2, Dota 2, GTA V, Tanklar, o'qish, FHD montaj"
    }
  },
  {
    id: "pc-249",
    name: "Kompuhtr CORE",
    tagline: {
      ru: "Надежный AM4 с потенциалом апгрейда",
      uz: "Keyinchalik kuchaytirish mumkin bo'lgan AM4"
    },
    category: "budget",
    badge: {
      ru: "Лучший Выбор",
      uz: "Eng Yaxshi Tanlov"
    },
    badgeType: "popular",
    priceUsd: 249,
    oldPriceUsd: 299,
    image: "assets/images/pc-249.jpg",
    specs: {
      cpu: {
        ru: "AMD Ryzen 5 2600 / 3600 (6 ядер / 12 потоков)",
        uz: "AMD Ryzen 5 2600 / 3600 (6 yadro / 12 oqim)"
      },
      gpu: {
        ru: "NVIDIA GeForce GTX 1660 Super 6GB GDDR6",
        uz: "NVIDIA GeForce GTX 1660 Super 6GB GDDR6"
      },
      ram: {
        ru: "16GB DDR4 3200MHz Kingston Fury (2x8GB)",
        uz: "16GB DDR4 3200MHz Kingston Fury (2x8GB)"
      },
      ssd: {
        ru: "512GB M.2 NVMe PCIe 3.0 (2400 MB/s)",
        uz: "512GB M.2 NVMe PCIe 3.0 (2400 MB/s)"
      },
      motherboard: {
        ru: "AMD B450M AM4 (поддержка Ryzen 5 5600/5700X3D)",
        uz: "AMD B450M AM4 (Ryzen 5 5600/5700X3D qo'llab-quvvatlaydi)"
      },
      psu: {
        ru: "550W 80+ Bronze с защитой от перегрузок",
        uz: "550W 80+ Bronze ortiqcha yuklamadan himoyalangan"
      },
      case: {
        ru: "Mesh корпус с закаленным стеклом и 4 кулерами",
        uz: "Mesh korpus toblangan shisha va 4 kuler bilan"
      },
      cooler: {
        ru: "Deepcool Gammaxx 400 EX (4 теплотрубки)",
        uz: "Deepcool Gammaxx 400 EX (4 issiqlik trubkasi)"
      },
      thermalPaste: {
        ru: "Honeywell PTM7950 фазовый переход",
        uz: "Honeywell PTM7950 faza almashinuvi"
      },
      os: {
        ru: "Windows 11 Pro 64-bit настроенная под игры",
        uz: "Windows 11 Pro 64-bit o'yinlarga sozlangan"
      }
    },
    temps: {
      ru: "CPU 54°C / GPU 64°C в 100% нагрузке",
      uz: "100% yuklamada CPU 54°C / GPU 64°C"
    },
    warranty: {
      ru: "12 месяцев гарантии",
      uz: "12 oy to'liq kafolat"
    },
    fps: {
      cs2: 175,
      dota2: 170,
      gta5: 110,
      valorant: 240,
      cyberpunk: 52,
      warzone: 78
    },
    idealFor: {
      ru: "Все соревновательные шутеры, стриминг в 1080p, апгрейд в будущем",
      uz: "Barcha otishma o'yinlari, 1080p striming, kelajakda oson kuchaytirish"
    }
  },
  {
    id: "pc-329",
    name: "Kompuhtr ADVANCED",
    tagline: {
      ru: "Ray Tracing, DLSS и терабайт памяти",
      uz: "Ray Tracing, DLSS va 1 Terabayt xotira"
    },
    category: "popular",
    badge: {
      ru: "ХИТ ПРОДАЖ",
      uz: "ENG KO'P SOTILGAN"
    },
    badgeType: "hot",
    featured: true,
    priceUsd: 329,
    oldPriceUsd: 399,
    image: "assets/images/pc-329.jpg",
    specs: {
      cpu: {
        ru: "AMD Ryzen 5 3600 / 5500 (6 ядер / 12 потоков, 4.2 GHz)",
        uz: "AMD Ryzen 5 3600 / 5500 (6 yadro / 12 oqim, 4.2 GHz)"
      },
      gpu: {
        ru: "NVIDIA GeForce RTX 2060 Super 8GB GDDR6 (256-bit, DLSS 2.0)",
        uz: "NVIDIA GeForce RTX 2060 Super 8GB GDDR6 (256-bit, DLSS 2.0)"
      },
      ram: {
        ru: "16GB DDR4 3200MHz Dual Channel (XMP 2.0)",
        uz: "16GB DDR4 3200MHz Ikki kanalli (XMP 2.0)"
      },
      ssd: {
        ru: "1TB (1024GB) M.2 NVMe PCIe (3200 MB/s)",
        uz: "1TB (1024GB) M.2 NVMe PCIe (3200 MB/s)"
      },
      motherboard: {
        ru: "Gigabyte B450M DS3H с радиаторами VRM",
        uz: "Gigabyte B450M DS3H VRM radiatorlari bilan"
      },
      psu: {
        ru: "600W DeepCool PF600 80+ Bronze",
        uz: "600W DeepCool PF600 80+ Bronze"
      },
      case: {
        ru: "Montech X3 Mesh с 6 встроенными тихими RGB кулерами",
        uz: "Montech X3 Mesh 6 ta o'rnatilgan sokin RGB kuler bilan"
      },
      cooler: {
        ru: "ID-Cooling SE-214-XT ARGB",
        uz: "ID-Cooling SE-214-XT ARGB"
      },
      thermalPaste: {
        ru: "Arctic MX-4 High Performance",
        uz: "Arctic MX-4 High Performance"
      },
      os: {
        ru: "Windows 11 Pro + пакет драйверов и тестов",
        uz: "Windows 11 Pro + barcha drayverlar to'plami"
      }
    },
    temps: {
      ru: "CPU 55°C / GPU 66°C в FurMark + Prime95",
      uz: "FurMark + Prime95 da CPU 55°C / GPU 66°C"
    },
    warranty: {
      ru: "12 месяцев официальной гарантии",
      uz: "12 oy rasmiy kafolat"
    },
    fps: {
      cs2: 215,
      dota2: 210,
      gta5: 135,
      valorant: 300,
      cyberpunk: 72,
      warzone: 95
    },
    idealFor: {
      ru: "Cyberpunk 2077 на высоких с DLSS, CS2 на 200+ FPS, монтаж видео",
      uz: "Cyberpunk 2077 yuqori grafikada DLSS bilan, CS2 200+ FPS, video montaj"
    }
  },
  {
    id: "pc-429",
    name: "Kompuhtr STREAMER",
    tagline: {
      ru: "Ryzen 5 5600 + 32GB RAM под 240Hz",
      uz: "Ryzen 5 5600 + 32GB RAM 240Hz uchun"
    },
    category: "popular",
    badge: {
      ru: "Мощь 240Hz",
      uz: "240Hz Quvvati"
    },
    badgeType: "popular",
    priceUsd: 429,
    oldPriceUsd: 519,
    image: "assets/images/pc-429.jpg",
    specs: {
      cpu: {
        ru: "AMD Ryzen 5 5600 (Zen 3, 35MB Cache, 4.4 GHz)",
        uz: "AMD Ryzen 5 5600 (Zen 3, 35MB Kesh, 4.4 GHz)"
      },
      gpu: {
        ru: "AMD Radeon RX 6600 XT 8GB / RTX 2070 Super 8GB",
        uz: "AMD Radeon RX 6600 XT 8GB / RTX 2070 Super 8GB"
      },
      ram: {
        ru: "32GB (2x16GB) DDR4 3200MHz Kingston Fury Beast",
        uz: "32GB (2x16GB) DDR4 3200MHz Kingston Fury Beast"
      },
      ssd: {
        ru: "1TB NVMe PCIe Gen3x4 (3500 MB/s быстрый запуск)",
        uz: "1TB NVMe PCIe Gen3x4 (3500 MB/s tezyurar yuklash)"
      },
      motherboard: {
        ru: "MSI B550M PRO-VDH с улучшенным звуком и питанием",
        uz: "MSI B550M PRO-VDH kuchaytirilgan audio va quvvat bilan"
      },
      psu: {
        ru: "650W DeepCool PK650D 80+ Bronze (DC-DC)",
        uz: "650W DeepCool PK650D 80+ Bronze (DC-DC)"
      },
      case: {
        ru: "Cougar Airface RGB / Deepcool Matrexx с двойным пылевиком",
        uz: "Cougar Airface RGB / Deepcool Matrexx qo'shaloq filtrli"
      },
      cooler: {
        ru: "Deepcool AG400 Digital ARGB с датчиком температуры",
        uz: "Deepcool AG400 Digital ARGB harorat ekranli"
      },
      thermalPaste: {
        ru: "Honeywell PTM7950 термопрокладка фазового перехода",
        uz: "Honeywell PTM7950 faza almashinuvchi termopasta"
      },
      os: {
        ru: "Windows 11 Pro 64-bit Gaming Edition",
        uz: "Windows 11 Pro 64-bit Gaming Edition"
      }
    },
    temps: {
      ru: "CPU 52°C / GPU 63°C в многочасовом стресс-тесте",
      uz: "Ko'p soatlik sinovda CPU 52°C / GPU 63°C"
    },
    warranty: {
      ru: "12 месяцев гарантии",
      uz: "12 oy to'liq kafolat"
    },
    fps: {
      cs2: 290,
      dota2: 240,
      gta5: 155,
      valorant: 380,
      cyberpunk: 85,
      warzone: 125
    },
    idealFor: {
      ru: "Стримы Twitch/YouTube, соревновательные шутеры на 240Hz мониторах, 3D рендер",
      uz: "Twitch/YouTube strimlari, 240Hz monitorlarda o'ynash, 3D render"
    }
  },
  {
    id: "pc-599",
    name: "Kompuhtr ULTRA",
    tagline: {
      ru: "Бескомпромиссный 2K гейминг и Аквариумный корпус",
      uz: "Murosasiz 2K geyming va Akvarium korpus"
    },
    category: "ultra",
    badge: {
      ru: "ФЛАГМАН 2K",
      uz: "2K FLAGMAN"
    },
    badgeType: "flagship",
    priceUsd: 599,
    oldPriceUsd: 729,
    image: "assets/images/pc-599.jpg",
    specs: {
      cpu: {
        ru: "AMD Ryzen 5 5600X / Intel Core i5-12400F (до 4.6 GHz)",
        uz: "AMD Ryzen 5 5600X / Intel Core i5-12400F (4.6 GHz gacha)"
      },
      gpu: {
        ru: "NVIDIA GeForce RTX 3060 12GB GDDR6 (12GB VRAM для Ultra текстур)",
        uz: "NVIDIA GeForce RTX 3060 12GB GDDR6 (Ultra teksturalar uchun 12GB VRAM)"
      },
      ram: {
        ru: "32GB (2x16GB) DDR4 3600MHz Kingston Fury Beast RGB",
        uz: "32GB (2x16GB) DDR4 3600MHz Kingston Fury Beast RGB"
      },
      ssd: {
        ru: "1TB Kingston NV2 / Samsung M.2 PCIe 4.0 (5000 MB/s)",
        uz: "1TB Kingston NV2 / Samsung M.2 PCIe 4.0 (5000 MB/s)"
      },
      motherboard: {
        ru: "ASUS TUF Gaming B550-PLUS / MSI B660M Mortar",
        uz: "ASUS TUF Gaming B550-PLUS / MSI B660M Mortar"
      },
      psu: {
        ru: "700W 80+ Bronze / Gold с плоскими черными кабелями",
        uz: "700W 80+ Bronze / Gold tekis qora kabelli"
      },
      case: {
        ru: "Панорамный аквариум (Dual Glass) без стойки + 6 ARGB вертушек",
        uz: "Panoramali akvarium (Dual Glass) tirgaksiz + 6 ARGB kuler"
      },
      cooler: {
        ru: "DeepCool AK500 Digital ARGB со статусным экранчиком",
        uz: "DeepCool AK500 Digital ARGB harorat indikatorli"
      },
      thermalPaste: {
        ru: "Honeywell PTM7950 премиум термоинтерфейс",
        uz: "Honeywell PTM7950 premium termointerfeys"
      },
      os: {
        ru: "Windows 11 Pro лицензия, BIOS настроен (XMP, Resizable BAR, PBO)",
        uz: "Windows 11 Pro litsenziya, BIOS sozlangan (XMP, Resizable BAR, PBO)"
      }
    },
    temps: {
      ru: "CPU 50°C / GPU 62°C абсолютная тишина",
      uz: "CPU 50°C / GPU 62°C mutlaq sukunat"
    },
    warranty: {
      ru: "24 месяца гарантии + пожизненная консультация",
      uz: "24 oy kafolat + doimiy konsultatsiya"
    },
    fps: {
      cs2: 360,
      dota2: 270,
      gta5: 170,
      valorant: 440,
      cyberpunk: 82,
      warzone: 140
    },
    idealFor: {
      ru: "2K Quad HD Ultra гейминг, любые игры 2026 года на ультра, видеомонтаж 4K",
      uz: "2K Quad HD Ultra o'yinlar, 2026-yilgi barcha yangi o'yinlar, 4K video montaj"
    }
  }
];

// 2. CURRENCY CONVERSION CONFIG (Now including UZS so'm!)
const CURRENCIES = {
  USD: { symbol: "$", rate: 1, position: "before" },
  UZS: { symbol: "so'm", rate: 12700, position: "after" },
  RUB: { symbol: "₽", rate: 92.5, position: "after" },
  KZT: { symbol: "₸", rate: 480, position: "after" },
  EUR: { symbol: "€", rate: 0.92, position: "before" }
};

let currentLang = "ru";
let currentCurrency = "USD";
let currentGameFilter = "cs2";
let currentCategoryFilter = "all";

// Game benchmark titles
const GAME_TITLES = {
  cs2: "Counter-Strike 2 (1080p High)",
  dota2: "Dota 2 (1080p Max Settings)",
  gta5: "GTA V (1080p Very High)",
  valorant: "Valorant (1080p High)",
  cyberpunk: "Cyberpunk 2077 (1080p DLSS/FSR)",
  warzone: "Warzone 2.0 (1080p Balanced)"
};

// Configurator Available Add-ons
const CONFIG_ADDONS = [
  { 
    id: "ram_upgrade", 
    priceUsd: 25,
    ru: { name: "+16GB ОЗУ (Итого 32GB)", desc: "Двухканал 3200MHz для тяжелых игр и браузера" },
    uz: { name: "+16GB Operativ xotira (Jami 32GB)", desc: "Og'ir o'yinlar va ko'p dasturlar uchun 3200MHz ikki kanalli" }
  },
  { 
    id: "ssd_upgrade", 
    priceUsd: 22,
    ru: { name: "+1TB Дополнительный HDD/SSD", desc: "Хранилище для коллекции из 20+ игр" },
    uz: { name: "+1TB Qo'shimcha HDD/SSD", desc: "20+ ta o'yindan iborat kolleksiya uchun katta ombor" }
  },
  { 
    id: "wifi_bt", 
    priceUsd: 15,
    ru: { name: "Wi-Fi 6 + Bluetooth 5.2 модуль", desc: "Беспроводная связь без задержек + геймпады" },
    uz: { name: "Wi-Fi 6 + Bluetooth 5.2 moduli", desc: "Kabel kerakmas, tezyurar internet + geympadlar ulash" }
  },
  { 
    id: "mouse_kb", 
    priceUsd: 32,
    ru: { name: "Игровой сетап (Мышь + Механика)", desc: "RGB подсветка, оптика 12800 DPI, быстрый отклик" },
    uz: { name: "O'yin to'plami (Sichqoncha + Mexanika)", desc: "RGB chiroqlar, 12800 DPI optika, chaqqon harakat" }
  },
  { 
    id: "cable_sleeved", 
    priceUsd: 18,
    ru: { name: "Кастомные кабели в белой оплетке", desc: "Эстетика музейного уровня как на фото" },
    uz: { name: "Maxsus oq o'rilgan kabellar", desc: "Fotosuratlardagidek muzey darajasidagi estetika" }
  }
];

let selectedConfigBaseId = "pc-329";
let selectedAddonIds = new Set(["wifi_bt"]);

// Telegram handle
const TELEGRAM_USERNAME = "VIGER_YT";

// 3. I18N DICTIONARY FOR STATIC & DYNAMIC CONTENT
const I18N = {
  ru: {
    nav: {
      catalog: "Сборки",
      whyUs: "Преимущества",
      configurator: "Конфигуратор",
      quality: "Тесты & Гарантия",
      reviews: "Отзывы",
      faq: "FAQ"
    },
    hero: {
      badge: "Сборка и стресс-тесты в мастерской • Отправка за 24 часа",
      title1: "Максимум FPS.",
      title2: "Ноль переплат за воздух.",
      subtitle: "Игровые компьютеры от <strong>199$</strong> до <strong>599$</strong> на самых проверенных и народных комплектующих. Каждая сборка проходит 24 часа жестких стресс-тестов перед упаковкой.",
      btnCatalog: "Смотреть варианты сборок",
      btnConfig: "Собрать свой конфиг",
      btnCopyTg: "Скопировать Telegram",
      stat1: "В киберспорте (CS2, Valorant)",
      stat2: "FurMark + OCCT стресс-тесты",
      stat3: "Оптимизированная Windows 11 Pro",
      btnAskTg: "Задать вопрос в TG"
    },
    whyUs: {
      tag: "Честный подход",
      title: "Почему покупают у нас, а не в сетевых гигантах?",
      desc: "В сетевых магазинах вы платите 40–50% за аренду торговых центров и зарплату консультантов. У нас — только железо высшей пробы, ручная сборка мастером и стресс-тестирование каждого разъема.",
      f1_title: "Народные хиты без переплат",
      f1_desc: "Мы отбираем самые выгодные процессоры (Xeon E5, Ryzen 5 2600/3600/5600) и видеокарты (RX 580, GTX 1660S, RTX 2060S, RTX 3060), где каждый цент дает максимальный FPS.",
      f2_title: "24 часа стресс-тестов",
      f2_desc: "Каждый системный блок проходит непрерывный прогрев в FurMark, Prime95 и MemTest86. Никаких внезапных синих экранов или отвалов чипа.",
      f3_title: "Премиум термоинтерфейс",
      f3_desc: "Используем фазовый переход Honeywell PTM7950 и оригинальную термопасту Arctic MX-4. Температуры в играх до 10-15°C ниже, чем в магазинных сборках.",
      f4_title: "Кабель-менеджмент арт-класса",
      f4_desc: "Все провода проложены потайными каналами и зафиксированы нейлоновыми стяжками. Идеальный продув корпуса, полное отсутствие пылевых карманов.",
      f5_title: "Чистая Windows 11 Pro",
      f5_desc: "Установлена чистая Windows 11 Pro без телеметрии и предустановленного мусора. Настроен XMP профиль памяти, включен Resizable BAR, обновлен BIOS.",
      f6_title: "Прямая гарантия мастера",
      f6_desc: "Гарантия от 6 до 24 месяцев с официальным гарантийным талоном. Вы общаетесь напрямую со мной в Telegram @VIGER_YT без бюрократии сервисных центров."
    },
    catalog: {
      tag: "Каталог 2026",
      title: "Готовые конфигурации в наличии",
      desc: "От супербюджетного бойца за 199$ до панорамного 2K монстра за 599$. Выберите игру в селекторе ниже, чтобы увидеть реальный средний FPS на мониторе.",
      filterAll: "Все сборки",
      filterBudget: "Бюджетные ($199–$249)",
      filterPopular: "Хиты ($329–$429)",
      filterUltra: "Флагманы 2K ($599)",
      benchLabel: "Тест в игре:",
      btnOrder: "Заказать",
      btnDetails: "Характеристики",
      quickView: "Подробнее",
      resTag: "1080p Full HD",
      lblCpu: "ЦП:",
      lblGpu: "ГПУ:",
      lblRamSsd: "ОЗУ & SSD:",
      lblTest: "Тест:"
    },
    configurator: {
      tag: "Кастом под ключ",
      title: "Интерактивный конфигуратор апгрейдов",
      desc: "Хотите добавить больше памяти, установить сверхбыстрый Wi-Fi 6 адаптер или кастомную оплетку кабелей? Настройте конфигурацию онлайн и получите точную цену за 1 секунду.",
      step1: "Выберите базовую основу:",
      step2: "Дополнительные опции и периферия:",
      summaryTitle: "Ваша индивидуальная сборка",
      summarySub: "Включает бесплатную настройку и стресс-тесты",
      baseBuildLabel: "Базовая сборка:",
      totalLabel: "Итоговая стоимость:",
      btnOrder: "Заказать сборку в Telegram",
      note: "Менеджер ответит в течение 5–15 минут, уточнит детали доставки и пришлет видеоотчет о сборке."
    },
    quality: {
      tag: "Стандарты качества",
      title: "Как тестируется каждый системный блок",
      desc: "Мы не отправляем компьютеры «на авось». Каждый ПК проходит 4-уровневый лабораторный стресс-тест.",
      t1_title: "OCCT & Linpack",
      t1_desc: "Проверка цепей питания VRM материнской платы и процессора под пиковой нагрузкой AVX-инструкций. Исключены микрофризы.",
      t2_title: "FurMark + 3DMark",
      t2_desc: "Видеокарта прогревается в замкнутом цикле минимум 2 часа. Проверяются обороты кулеров, шум дросселей и температура видеопамяти VRAM.",
      t3_title: "MemTest86 DDR4",
      t3_desc: "Каждый модуль памяти проверяется на ошибки при активном XMP-профиле. Никаких вылетов из игр на рабочий стол.",
      t4_title: "Антиударная упаковка",
      t4_desc: "Внутрь корпуса устанавливается специальный надувной демпфер Instapak, фиксирующий тяжелую видеокарту при транспортировке."
    },
    reviews: {
      tag: "Отзывы клиентов",
      title: "Что говорят реальные покупатели",
      desc: "Более 140 довольных игроков по всей стране. Читайте честные отзывы тех, кто уже забрал свой Kompuhtr.",
      verified: "✓ Проверенный покупатель",
      r1_name: "Дмитрий М.",
      r1_model: "Сборка Kompuhtr ADVANCED ($329)",
      r1_text: "«Взял сборку за 329$ с RTX 2060 Super и Ryzen. В CS2 на средних выдает стабильные 220 кадров, Cyberpunk на высоких с DLSS идет очень плавно! Провода уложены просто идеально, в магазине за такое берут в полтора раза больше. Спасибо @VIGER_YT!»",
      r1_time: "3 дня назад",
      r2_name: "Артем В.",
      r2_model: "Сборка Kompuhtr START ($199)",
      r2_text: "«Искал сыну ПК строго до 200$. Думал, что за эти деньги сейчас только печатную машинку купишь. В итоге забрали Start на RX 580: Дота и Танки летают на ультрах, в CS2 120 FPS есть. Очень доволен, отправили СДЭКом в день заказа!»",
      r2_time: "Неделю назад",
      r3_name: "Илья К.",
      r3_model: "Сборка Kompuhtr ULTRA ($599)",
      r3_text: "«Аквариумный корпус в жизни выглядит просто бомбически, как в зарубежных сетапах на Reddit! 12GB у RTX 3060 спасают в 2K разрешении, все летает. Температуры в FurMark всего 62 градуса. Отдельный респект за быстрые ответы в телеграме.»",
      r3_time: "12 дней назад"
    },
    faq: {
      tag: "База знаний",
      title: "Часто задаваемые вопросы",
      desc: "Честные ответы на самые частые вопросы перед покупкой.",
      q1: "Новые ли детали используются в сборках?",
      a1: "Все накопители (SSD NVMe), кулеры, оперативная память, корпуса и блоки питания — 100% абсолютно новые с завода в заводских пленках. Видеокарты и процессоры проходят строжайший отбор, полный репастинг оригинальными термоинтерфейсами и многочасовые тесты под нагрузкой.",
      q2: "Как происходит доставка и упаковка?",
      a2: "Отправляем через СДЭК, Почту России, Boxberry, Авито Доставку или службы доставки по СНГ. Компьютер упаковывается в плотную заводскую коробку с пенопластом, а видеокарта внутри фиксируется специальным амортизирующим пакетом. Возможен самовывоз и личная проверка.",
      q3: "Как связаться и заказать понравившийся компьютер?",
      a3: "Напишите напрямую мастеру в Telegram: <strong>@VIGER_YT</strong>. Вы можете нажать кнопку «Заказать» на любой карточке товара — сформируется готовое сообщение с названием сборки и ценой.",
      q4: "Компьютер готов к работе сразу из коробки?",
      a4: "Да, на 100%! Мы устанавливаем чистую активированную Windows 11 Pro, все необходимые драйверы, библиотеки DirectX/Visual C++, а также настраиваем профили памяти в BIOS. Вам нужно только подключить монитор и воткнуть вилку в розетку.",
      q5: "Что если мне нужна другая конфигурация или цвет корпуса?",
      a5: "Без проблем! Напишите в Telegram <strong>@VIGER_YT</strong> ваши пожелания: можем собрать ПК в белом цвете, добавить водяное охлаждение, установить больше дискового пространства или другой процессор."
    },
    cta: {
      tag: "Готовы к новому уровню игры?",
      title: "Закажите ваш Kompuhtr прямо сейчас",
      desc: "Напишите в Telegram <strong>@VIGER_YT</strong>. Ответим на любые технические вопросы, снимем видео работы конкретного системника и согласуем быструю доставку.",
      btnTg: "Написать в Telegram @VIGER_YT",
      btnCopy: "Скопировать логин"
    },
    footer: {
      desc: "Мастерская производительных игровых систем по справедливой цене. Честные тесты, проверенные компоненты и гарантия качества.",
      col1Title: "Быстрые ссылки",
      col2Title: "Связь с нами",
      schedule: "Онлайн: 09:00 — 23:00 ежедневно",
      copyContact: "Скопировать контакт",
      rights: "© 2026 Kompuhtr Shop. Все права защищены.",
      love: "Сделано для игроков с любовью к железу."
    },
    modal: {
      specTitle: "Полная спецификация компонентов:",
      lblCpu: "Процессор (CPU):",
      lblGpu: "Видеокарта (GPU):",
      lblRam: "Оперативная память:",
      lblSsd: "Накопитель:",
      lblBoard: "Материнская плата:",
      lblPsu: "Блок питания:",
      lblCooler: "Охлаждение & Паста:",
      lblCase: "Корпус:",
      lblOs: "Система:",
      assuranceText: "Пройден 24-часовой стресс-тест в FurMark, OCCT и MemTest86. ПК полностью собран, проверен, опломбирован и готов к включению в розетку.",
      btnClose: "Закрыть",
      btnTg: "Написать в Telegram @VIGER_YT"
    },
    floatingTg: "Написать в Telegram",
    toastCopied: "Контакт @VIGER_YT скопирован в буфер обмена!"
  },
  uz: {
    nav: {
      catalog: "Yig'uvlar",
      whyUs: "Afzalliklar",
      configurator: "Konfigurator",
      quality: "Sinov & Kafolat",
      reviews: "Fikrlar",
      faq: "FAQ"
    },
    hero: {
      badge: "Ustaxonada yig'ish va stress-testlar • 24 soat ichida jo'natish",
      title1: "Maksimal FPS.",
      title2: "Ortiqcha to'lovlarsiz.",
      subtitle: "<strong>199$</strong> dan <strong>599$</strong> gacha bo'lgan ishonchli va xalqbop o'yin kompyuterlari. Har bir yig'uv jo'natishdan oldin 24 soatlik og'ir stress-testdan o'tadi.",
      btnCatalog: "Yig'uvlarni ko'rish",
      btnConfig: "O'z konfiguratsiyangiz",
      btnCopyTg: "Telegram-ni nusxalash",
      stat1: "Kibersportda (CS2, Valorant)",
      stat2: "FurMark + OCCT stress-testlar",
      stat3: "Toza optimallashtirilgan Windows 11 Pro",
      btnAskTg: "TG orqali savol berish"
    },
    whyUs: {
      tag: "Halol yondashuv",
      title: "Nega oddiy do'konlardan emas, aynan bizdan olishadi?",
      desc: "Tarmoq do'konlarida siz 40–50% savdo markazi ijarasi va maslahatchilar oyligiga ortiqcha to'laysiz. Bizda esa — faqat sinalgan yuqori sifatli temirlar, usta tomonidan sifatli yig'ish va har bir portni sinash.",
      f1_title: "Xalqbop xitlar ortiqcha to'lovlarsiz",
      f1_desc: "Biz eng foydali protsessorlar (Xeon E5, Ryzen 5 2600/3600/5600) va videokartalarni (RX 580, GTX 1660S, RTX 2060S, RTX 3060) tanlaymiz, bu yerda har bir tiyin maksimal FPS beradi.",
      f2_title: "24 soatlik stress-testlar",
      f2_desc: "Har bir tizim bloki FurMark, Prime95 va MemTest86 dasturlarida to'xtovsiz qiziydi. Hech qanday kutilmagan ko'k ekranlar yoki chip nosozliklari bo'lmaydi.",
      f3_title: "Premium termopasta",
      f3_desc: "Honeywell PTM7950 faza almashinuvi va original Arctic MX-4 dan foydalanamiz. O'yinlarda harorat do'kondagi yig'uvlardan 10-15°C sovuqroq.",
      f4_title: "San'at darajasidagi kabel boshqaruvi",
      f4_desc: "Barcha simlar orqa qopqoq ortiga yashirin kanallar orqali yotqizilgan. Korpusda ideal havo aylanishi va chang cho'kmasligi ta'minlanadi.",
      f5_title: "Toza Windows 11 Pro",
      f5_desc: "Keraksiz reklamalar va telemetriyasiz toza Windows 11 Pro o'rnatilgan. XMP xotira profili sozlangan, Resizable BAR yoqilgan, BIOS yangilangan.",
      f6_title: "Ustaning to'g'ridan-to'g'ri kafolati",
      f6_desc: "Kafolat talon bilan 6 oydan 24 oygacha kafolat. Siz Telegram @VIGER_YT orqali to'g'ridan-to'g'ri usta bilan muloqot qilasiz."
    },
    catalog: {
      tag: "2026 Katalogi",
      title: "Mavjud tayyor konfiguratsiyalar",
      desc: "199$ lik byudjetli jangchidan to 599$ lik panoramali 2K maxluqqacha. Quyidagi selektordan o'yinni tanlang va ekrandagi haqiqiy o'rtacha FPS-ni ko'ring.",
      filterAll: "Barcha yig'uvlar",
      filterBudget: "Hamyonbop ($199–$249)",
      filterPopular: "Xitlar ($329–$429)",
      filterUltra: "2K Flagmanlar ($599)",
      benchLabel: "O'yindagi test:",
      btnOrder: "Buyurtma berish",
      btnDetails: "Xususiyatlar",
      quickView: "Batafsil",
      resTag: "1080p Full HD",
      lblCpu: "CPU:",
      lblGpu: "GPU:",
      lblRamSsd: "RAM & SSD:",
      lblTest: "Sinov:"
    },
    configurator: {
      tag: "Noldan buyurtma",
      title: "Interaktiv sozlash konfiguratori",
      desc: "Ko'proq xotira, tezyurar Wi-Fi 6 adapteri yoki chiroyli oq o'rilgan kabellar qo'shmoqchimisiz? Onlayn sozlang va 1 soniyada aniq narxni oling.",
      step1: "Asosiy platformani tanlang:",
      step2: "Qo'shimcha qismlar va aksessuarlar:",
      summaryTitle: "Sizning shaxsiy yig'uvingiz",
      summarySub: "Bepul sozlash va stress-testlarni o'z ichiga oladi",
      baseBuildLabel: "Asosiy yig'uv:",
      totalLabel: "Yakuniy narx:",
      btnOrder: "Telegram orqali buyurtma berish",
      note: "Menejer 5–15 daqiqa ichida javob beradi, yetkazib berish tafsilotlarini aniqlaydi va yig'uv videosini yuboradi."
    },
    quality: {
      tag: "Sifat standartlari",
      title: "Har bir tizim bloki qanday tekshiriladi",
      desc: "Biz kompyuterlarni tavakkal jo'natmaymiz. Har bir kompyuter 4 bosqichli laboratoriya sinovidan o'tadi.",
      t1_title: "OCCT & Linpack",
      t1_desc: "Ona plata quvvat zanjirlari va protsessor AVX ko'rsatmalarining maksimal yuklamasida tekshiriladi. Mikroqotishlar yo'q.",
      t2_title: "FurMark + 3DMark",
      t2_desc: "Videokarta kamida 2 soat to'xtovsiz qizdiriladi. Kuler aylanishi, drossel shovqini va VRAM harorati tekshiriladi.",
      t3_title: "MemTest86 DDR4",
      t3_desc: "Har bir operativ xotira moduli faol XMP profilida xatoliklarga tekshiriladi. O'yinlardan chiqib ketishlar bo'lmaydi.",
      t4_title: "Zarbaga qarshi qadoqlash",
      t4_desc: "Korpus ichiga tashish paytida og'ir videokartani mustahkam ushlab turadigan maxsus Instapak pufakchasi o'rnatiladi."
    },
    reviews: {
      tag: "Mijozlar fikrlari",
      title: "Haqiqiy xaridorlar nima deyishadi",
      desc: "Mamlakat bo'ylab 140 dan ortiq mamnun o'yinchilar. Kompuhtr-ni olganlarning halol sharhlarini o'qing.",
      verified: "✓ Tasdiqlangan xaridor",
      r1_name: "Dmitriy M.",
      r1_model: "Kompuhtr ADVANCED yig'uvi ($329)",
      r1_text: "«329$ ga RTX 2060 Super va Ryzen-li yig'uvni oldim. CS2-da barqaror 220 kadr beryapti, Cyberpunk yuqori grafikada DLSS bilan judayam ravon ketyapti! Simlar shunaqangi chiroyli terilganki, do'konlarda bu uchun bir yarim barobar ko'p so'rashadi. Rahmat @VIGER_YT!»",
      r1_time: "3 kun oldin",
      r2_name: "Jasur A. (Toshkent)",
      r2_model: "Kompuhtr START yig'uvi ($199)",
      r2_text: "«O'g'limga 200$ gacha kompyuter qidirgandim. Bu narxga hozir faqat eski ofis kompyuteri keladi deb o'ylagandim. RX 580-li Start yig'uvini oldik: Dota va Tanklar ultrada uchyapti, CS2-da 120 FPS bor. Juda xursandmiz, viloyatga bir kunda BTS orqali yetkazib berishdi!»",
      r2_time: "Bir hafta oldin",
      r3_name: "Ilyos K. (Samarqand)",
      r3_model: "Kompuhtr ULTRA yig'uvi ($599)",
      r3_text: "«Akvarium korpus hayotda Reddit-dagi chet el setaplaridek daxshat ko'rinar ekan! RTX 3060-ning 12GB xotirasi 2K rezolyutsiyada asqotyapti, hamma narsa uchyapti. FurMark-da harorat atigi 62 daraja. Telegram-da tez javob berishgani uchun alohida rahmat.»",
      r3_time: "12 kun oldin"
    },
    faq: {
      tag: "Bilimlar bazasi",
      title: "Ko'p beriladigan savollar",
      desc: "Xarid qilishdan oldin eng mashhur savollarga halol javoblar.",
      q1: "Yig'uvlarda yangi qismlar ishlatiladimi?",
      a1: "Barcha xotira disklari (SSD NVMe), kulerlar, operativ xotiralar, korpuslar va blok pitaniyalar — zavod qadoqlarida 100% mutlaqo yangi. Videokartalar va protsessorlar esa qattiq saralashdan, original termopasta bilan to'liq profilaktikadan va yuklama ostidagi ko'p soatlik sinovlardan o'tadi.",
      q2: "Yetkazib berish va qadoqlash qanday amalga oshiriladi?",
      a2: "O'zbekistonning barcha viloyatlariga (BTS, Fargo, EMU pochtalari orqali) yoki Toshkent bo'ylab kuryer orqali jo'natamiz. Kompyuter penoplastli qalin zavod qutisiga solinadi, ichidagi videokarta esa amortizatsiya paketi bilan mahkamlanadi. Shuningdek, uchrashib tekshirib olish imkoniyati ham bor.",
      q3: "Qanday qilib bog'lanish va buyurtma berish mumkin?",
      a3: "To'g'ridan-to'g'ri ustaga Telegram orqali yozing: <strong>@VIGER_YT</strong>. Har qanday tovar kartochkasidagi «Buyurtma berish» tugmasini bossangiz, yig'uv nomi va narxi ko'rsatilgan tayyor xabar shakllanadi.",
      q4: "Kompyuter qutidan chiqishi bilanoq ishlashga tayyormi?",
      a4: "Ha, 100% tayyor! Biz toza aktivatsiyalangan Windows 11 Pro, barcha zarur drayverlar, DirectX/Visual C++ kutubxonalarini o'rnatamiz va BIOS-da xotira profillarini sozlab beramiz. Siz faqat monitorni ulab, tokka tiqasiz, tamom.",
      q5: "Agar menga boshqa konfiguratsiya yoki oq korpus kerak bo'lsa-chi?",
      a5: "Hech qanday muammo yo'q! Telegram <strong>@VIGER_YT</strong> ga xohishingizni yozing: oq korpusda yig'ishimiz, suvli sovutish tizimi qo'yishimiz, ko'proq disk xotirasi yoki boshqa protsessor o'rnatishimiz mumkin."
    },
    cta: {
      tag: "Yangi darajadagi o'yinga tayyormisiz?",
      title: "O'zingizning Kompuhtr-ingizga hoziroq buyurtma bering",
      desc: "Telegram <strong>@VIGER_YT</strong> ga yozing. Har qanday texnik savollarga javob beramiz, aniq tizim bloki ishlayotgani haqida video yuboramiz va tez yetkazib berishni kelishamiz.",
      btnTg: "Telegram @VIGER_YT orqali yozish",
      btnCopy: "Loginni nusxalash"
    },
    footer: {
      desc: "Hamyonbop narxda yuqori unumdorlikka ega o'yin kompyuterlari ustaxonasi. Halol sinovlar, sinalgan qismlar va sifat kafolati.",
      col1Title: "Tezkor havolalar",
      col2Title: "Bog'lanish",
      schedule: "Onlayn: 09:00 — 23:00 har kuni",
      copyContact: "Kontaktni nusxalash",
      rights: "© 2026 Kompuhtr Shop. Barcha huquqlar himoyalangan.",
      love: "O'yinchilar uchun temirga bo'lgan muhabbat bilan yaratilgan."
    },
    modal: {
      specTitle: "Komponentlarning to'liq tavsifi:",
      lblCpu: "Protsessor (CPU):",
      lblGpu: "Videokarta (GPU):",
      lblRam: "Operativ xotira:",
      lblSsd: "Xotira diski:",
      lblBoard: "Ona plata:",
      lblPsu: "Blok pitaniya:",
      lblCooler: "Sovutish & Termopasta:",
      lblCase: "Korpus:",
      lblOs: "Tizim:",
      assuranceText: "FurMark, OCCT va MemTest86-da 24 soatlik stress-testdan o'tgan. Kompyuter to'liq yig'ilgan, tekshirilgan, plombalangan va rozetkaga ulashga tayyor.",
      btnClose: "Yopish",
      btnTg: "Telegram @VIGER_YT orqali yozish"
    },
    floatingTg: "Telegram orqali yozish",
    toastCopied: "@VIGER_YT kontakti nusxalandi!"
  }
};

// Helper: Format Price based on active currency
function formatPrice(usdAmount) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(usdAmount * curr.rate);
  const formattedNum = converted.toLocaleString("ru-RU");

  if (curr.position === "before") {
    return `${curr.symbol}${formattedNum}`;
  } else {
    return `${formattedNum} ${curr.symbol}`;
  }
}

// Helper: Generate Telegram direct URL
function getTelegramUrl(text) {
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(text)}`;
}

// 4. RENDER CATALOG CARDS
function renderCatalog() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const t = I18N[currentLang].catalog;

  const filteredPCs = PC_CATALOG.filter(pc => {
    if (currentCategoryFilter === "all") return true;
    if (currentCategoryFilter === "budget") return pc.priceUsd <= 250;
    if (currentCategoryFilter === "popular") return pc.priceUsd === 329 || pc.priceUsd === 429;
    if (currentCategoryFilter === "ultra") return pc.priceUsd >= 500;
    return true;
  });

  container.innerHTML = filteredPCs.map(pc => {
    const currentFps = pc.fps[currentGameFilter] || 100;
    const gameName = GAME_TITLES[currentGameFilter] || "FPS";
    const badgeText = pc.badge[currentLang] || pc.badge.ru;
    const taglineText = pc.tagline[currentLang] || pc.tagline.ru;
    const cpuText = (pc.specs.cpu[currentLang] || pc.specs.cpu.ru).split('(')[0];
    const gpuText = (pc.specs.gpu[currentLang] || pc.specs.gpu.ru).split('(')[0];
    const ramText = (pc.specs.ram[currentLang] || pc.specs.ram.ru).split(' ')[0];
    const ssdText = (pc.specs.ssd[currentLang] || pc.specs.ssd.ru).split(' ')[0];
    const tempsText = pc.temps[currentLang] || pc.temps.ru;

    const orderMsg = currentLang === 'uz' 
      ? `Salom! Men ${pc.name} yig'uvini ${formatPrice(pc.priceUsd)} narxida buyurtma qilmoqchiman. Mavjudmi?`
      : `Привет! Хочу заказать сборку ${pc.name} за ${formatPrice(pc.priceUsd)}. Есть ли в наличии?`;

    return `
      <article class="product-card ${pc.featured ? 'featured' : ''}" data-id="${pc.id}">
        <span class="product-badge-flag badge-${pc.badgeType}">${badgeText}</span>
        
        <div class="product-img-wrapper" onclick="openDetailsModal('${pc.id}')" style="cursor: pointer;">
          <img src="${pc.image}" alt="${pc.name} - Kompuhtr" loading="lazy">
          <div class="product-quick-view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            ${t.quickView}
          </div>
        </div>

        <div class="product-content">
          <div class="product-header-line">
            <div>
              <h3 class="product-name">${pc.name}</h3>
              <p class="product-target">${taglineText}</p>
            </div>
            <div class="product-price-box">
              <div class="product-price">${formatPrice(pc.priceUsd)}</div>
              <span class="product-price-old">${formatPrice(pc.oldPriceUsd)}</span>
            </div>
          </div>

          <!-- Dynamic FPS Meter -->
          <div class="fps-indicator-box">
            <div class="fps-game-info">
              <span class="fps-game-title">${gameName}</span>
              <span class="fps-resolution-tag">${t.resTag}</span>
            </div>
            <div class="fps-score">
              <span class="fps-val">${currentFps}</span>
              <span class="fps-unit">FPS</span>
            </div>
          </div>

          <!-- Spec highlights -->
          <ul class="specs-list">
            <li class="spec-item">
              <span class="spec-icon">⚡</span>
              <div><strong>${t.lblCpu}</strong> ${cpuText}</div>
            </li>
            <li class="spec-item">
              <span class="spec-icon">🎮</span>
              <div><strong>${t.lblGpu}</strong> ${gpuText}</div>
            </li>
            <li class="spec-item">
              <span class="spec-icon">💾</span>
              <div><strong>${t.lblRamSsd}</strong> ${ramText} DDR4 • ${ssdText} NVMe</div>
            </li>
            <li class="spec-item">
              <span class="spec-icon">🛡️</span>
              <div><strong>${t.lblTest}</strong> ${tempsText}</div>
            </li>
          </ul>

          <div class="product-card-actions">
            <a href="${getTelegramUrl(orderMsg)}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-buy-card"
               title="${t.btnOrder}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              ${t.btnOrder}
            </a>
            <button class="btn-details-card" onclick="openDetailsModal('${pc.id}')">
              ${t.btnDetails}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 5. MODAL DIALOG: DETAILED SPECS BREAKDOWN
function openDetailsModal(pcId) {
  const pc = PC_CATALOG.find(item => item.id === pcId);
  if (!pc) return;

  const modalBackdrop = document.getElementById("detailsModal");
  const modalContent = document.getElementById("modalBody");
  if (!modalBackdrop || !modalContent) return;

  const m = I18N[currentLang].modal;
  const badgeText = pc.badge[currentLang] || pc.badge.ru;
  const tempsText = pc.temps[currentLang] || pc.temps.ru;
  const warrantyText = pc.warranty[currentLang] || pc.warranty.ru;

  const cpuText = pc.specs.cpu[currentLang] || pc.specs.cpu.ru;
  const gpuText = pc.specs.gpu[currentLang] || pc.specs.gpu.ru;
  const ramText = pc.specs.ram[currentLang] || pc.specs.ram.ru;
  const ssdText = pc.specs.ssd[currentLang] || pc.specs.ssd.ru;
  const boardText = pc.specs.motherboard[currentLang] || pc.specs.motherboard.ru;
  const psuText = pc.specs.psu[currentLang] || pc.specs.psu.ru;
  const coolerText = pc.specs.cooler[currentLang] || pc.specs.cooler.ru;
  const pasteText = pc.specs.thermalPaste[currentLang] || pc.specs.thermalPaste.ru;
  const caseText = pc.specs.case[currentLang] || pc.specs.case.ru;
  const osText = pc.specs.os[currentLang] || pc.specs.os.ru;

  const tgMessage = currentLang === 'uz'
    ? `Salom! Men ${pc.name} yig'uviga qiziqyapman (${formatPrice(pc.priceUsd)}). Tafsilotlarni bilmoqchiman va buyurtma bermoqchiman!`
    : `Привет! Меня интересует сборка ${pc.name} за ${formatPrice(pc.priceUsd)}. Хочу уточнить детали и заказать!`;

  modalContent.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 24px; flex-wrap: wrap;">
      <img src="${pc.image}" alt="${pc.name}" style="width: 140px; height: 110px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-medium);">
      <div>
        <span class="product-badge-flag badge-${pc.badgeType}" style="position: static; display: inline-block; margin-bottom: 8px;">${badgeText}</span>
        <h2 style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 4px;">${pc.name}</h2>
        <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-cyan); font-family: var(--font-mono);">
          ${formatPrice(pc.priceUsd)} 
          <span style="font-size: 0.9rem; color: var(--text-muted); text-decoration: line-through; margin-left: 8px;">${formatPrice(pc.oldPriceUsd)}</span>
        </div>
      </div>
    </div>

    <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-cyan); margin-bottom: 14px;">
      ${m.specTitle}
    </h4>

    <div style="display: grid; grid-template-columns: 1fr; gap: 10px; margin-bottom: 24px;">
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblCpu}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${cpuText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblGpu}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${gpuText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblRam}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${ramText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblSsd}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${ssdText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblBoard}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${boardText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblPsu}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${psuText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblCooler}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${coolerText} • ${pasteText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblCase}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${caseText}</span>
      </div>
      <div style="background: rgba(255,255,255,0.03); padding: 12px 16px; border-radius: 8px; border: 1px solid var(--border-subtle); display: flex; justify-content: space-between;">
        <span style="color: var(--text-secondary);">${m.lblOs}</span>
        <span style="color: #fff; font-weight: 600; text-align: right;">${osText}</span>
      </div>
    </div>

    <!-- Assurance box -->
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 16px; border-radius: 12px; margin-bottom: 24px;">
      <div style="font-weight: 700; color: #34d399; margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        ${warrantyText}
      </div>
      <div style="font-size: 0.85rem; color: #a1a1aa;">
        ${m.assuranceText} (${tempsText}).
      </div>
    </div>

    <div style="display: flex; gap: 12px; justify-content: flex-end;">
      <button class="btn-secondary" onclick="closeDetailsModal()">${m.btnClose}</button>
      <a href="${getTelegramUrl(tgMessage)}" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="btn-telegram" 
         style="padding: 12px 24px; font-size: 0.95rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
        ${m.btnTg}
      </a>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailsModal() {
  const modalBackdrop = document.getElementById("detailsModal");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// 6. CONFIGURATOR & UPGRADE BUILDER
function renderConfigurator() {
  const baseListEl = document.getElementById("configBaseList");
  const addonsListEl = document.getElementById("configAddonsList");
  if (!baseListEl || !addonsListEl) return;

  // Base models
  baseListEl.innerHTML = PC_CATALOG.map(pc => {
    const isSelected = pc.id === selectedConfigBaseId;
    const cpuName = (pc.specs.cpu[currentLang] || pc.specs.cpu.ru).split('(')[0];
    const ramName = (pc.specs.ram[currentLang] || pc.specs.ram.ru).split(' ')[0];
    const ssdName = (pc.specs.ssd[currentLang] || pc.specs.ssd.ru).split(' ')[0];
    const gpuName = (pc.specs.gpu[currentLang] || pc.specs.gpu.ru).split(' ')[0] + ' ' + ((pc.specs.gpu[currentLang] || pc.specs.gpu.ru).split(' ')[1] || '');

    return `
      <div class="base-model-opt ${isSelected ? 'selected' : ''}" onclick="selectConfigBase('${pc.id}')">
        <div class="opt-left">
          <div class="opt-radio-circle"></div>
          <div>
            <div class="opt-name">${pc.name} (${gpuName})</div>
            <div class="opt-specs-snippet">${cpuName} • ${ramName} • ${ssdName}</div>
          </div>
        </div>
        <div class="opt-price">${formatPrice(pc.priceUsd)}</div>
      </div>
    `;
  }).join("");

  // Addons
  addonsListEl.innerHTML = CONFIG_ADDONS.map(addon => {
    const isChecked = selectedAddonIds.has(addon.id);
    const addonData = addon[currentLang] || addon.ru;

    return `
      <div class="addon-card ${isChecked ? 'selected' : ''}" onclick="toggleAddon('${addon.id}')">
        <div class="addon-checkbox">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div>
          <div class="addon-title">${addonData.name}</div>
          <div class="addon-desc">${addonData.desc}</div>
          <div class="addon-price">+${formatPrice(addon.priceUsd)}</div>
        </div>
      </div>
    `;
  }).join("");

  updateConfigSummary();
}

function selectConfigBase(id) {
  selectedConfigBaseId = id;
  renderConfigurator();
}

function toggleAddon(addonId) {
  if (selectedAddonIds.has(addonId)) {
    selectedAddonIds.delete(addonId);
  } else {
    selectedAddonIds.add(addonId);
  }
  renderConfigurator();
}

function updateConfigSummary() {
  const basePC = PC_CATALOG.find(pc => pc.id === selectedConfigBaseId) || PC_CATALOG[2];
  const summaryItemsEl = document.getElementById("configSummaryItems");
  const totalPriceEl = document.getElementById("configTotalPrice");
  const tgOrderBtn = document.getElementById("configTgOrderBtn");
  if (!summaryItemsEl || !totalPriceEl) return;

  const cfg = I18N[currentLang].configurator;
  let totalUsd = basePC.priceUsd;
  let itemsHtml = `
    <div class="summary-row">
      <span>${cfg.baseBuildLabel} <strong>${basePC.name}</strong></span>
      <span>${formatPrice(basePC.priceUsd)}</span>
    </div>
  `;

  const selectedAddonsList = [];
  selectedAddonIds.forEach(addonId => {
    const addon = CONFIG_ADDONS.find(a => a.id === addonId);
    if (addon) {
      totalUsd += addon.priceUsd;
      const addonData = addon[currentLang] || addon.ru;
      selectedAddonsList.push(addonData.name);
      itemsHtml += `
        <div class="summary-row" style="color: var(--accent-cyan);">
          <span>+ ${addonData.name}</span>
          <span>+${formatPrice(addon.priceUsd)}</span>
        </div>
      `;
    }
  });

  summaryItemsEl.innerHTML = itemsHtml;
  totalPriceEl.textContent = formatPrice(totalUsd);

  // Update order button link
  const addonText = selectedAddonsList.length > 0 
    ? (currentLang === 'uz' ? ` tanlangan opsiyalar: [${selectedAddonsList.join(', ')}]` : ` с опциями: [${selectedAddonsList.join(', ')}]`)
    : '';

  const message = currentLang === 'uz'
    ? `Salom! Men ${basePC.name} bazasida shaxsiy Kompuhtr konfiguratsiyasini buyurtma qilmoqchiman${addonText}. Jami summa: ${formatPrice(totalUsd)}. Yetkazib berish qanday bo'ladi?`
    : `Привет! Хочу заказать индивидуальную конфигурацию Kompuhtr на базе ${basePC.name}${addonText}. Итоговая сумма: ${formatPrice(totalUsd)}. Как оформить доставку?`;

  if (tgOrderBtn) {
    tgOrderBtn.href = getTelegramUrl(message);
  }
}

// 7. APPLY LANGUAGE TO STATIC DOM ELEMENTS
function applyLanguage(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  if (!dict) return;

  // Language buttons visual state
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Navigation
  const navMap = {
    "nav-catalog": dict.nav.catalog,
    "nav-why-us": dict.nav.whyUs,
    "nav-config": dict.nav.configurator,
    "nav-quality": dict.nav.quality,
    "nav-reviews": dict.nav.reviews,
    "nav-faq": dict.nav.faq
  };
  for (const [id, text] of Object.entries(navMap)) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // Hero Section
  setElText("heroBadgeText", dict.hero.badge);
  setElHtml("heroTitle", `<span class="gradient-text">${dict.hero.title1}</span><br><span class="highlight">${dict.hero.title2}</span>`);
  setElHtml("heroSubtitle", dict.hero.subtitle);
  setElText("heroBtnCatalog", dict.hero.btnCatalog);
  setElText("heroBtnConfig", dict.hero.btnConfig);
  setElText("heroBtnCopyTg", dict.hero.btnCopyTg);
  setElText("heroStat1", dict.hero.stat1);
  setElText("heroStat2", dict.hero.stat2);
  setElText("heroStat3", dict.hero.stat3);
  setElText("heroBtnAskTg", dict.hero.btnAskTg);

  // Why Us / Advantages
  setElText("whyUsTag", dict.whyUs.tag);
  setElText("whyUsTitle", dict.whyUs.title);
  setElText("whyUsDesc", dict.whyUs.desc);
  setElText("f1Title", dict.whyUs.f1_title);
  setElText("f1Desc", dict.whyUs.f1_desc);
  setElText("f2Title", dict.whyUs.f2_title);
  setElText("f2Desc", dict.whyUs.f2_desc);
  setElText("f3Title", dict.whyUs.f3_title);
  setElText("f3Desc", dict.whyUs.f3_desc);
  setElText("f4Title", dict.whyUs.f4_title);
  setElText("f4Desc", dict.whyUs.f4_desc);
  setElText("f5Title", dict.whyUs.f5_title);
  setElText("f5Desc", dict.whyUs.f5_desc);
  setElText("f6Title", dict.whyUs.f6_title);
  setElText("f6Desc", dict.whyUs.f6_desc);

  // Catalog Section
  setElText("catalogTag", dict.catalog.tag);
  setElText("catalogTitle", dict.catalog.title);
  setElText("catalogDesc", dict.catalog.desc);
  setElText("filterAll", dict.catalog.filterAll);
  setElText("filterBudget", dict.catalog.filterBudget);
  setElText("filterPopular", dict.catalog.filterPopular);
  setElText("filterUltra", dict.catalog.filterUltra);
  setElText("benchLabel", dict.catalog.benchLabel);

  // Configurator
  setElText("configTag", dict.configurator.tag);
  setElText("configTitle", dict.configurator.title);
  setElText("configDesc", dict.configurator.desc);
  setElText("configStep1", dict.configurator.step1);
  setElText("configStep2", dict.configurator.step2);
  setElText("configSummaryTitle", dict.configurator.summaryTitle);
  setElText("configSummarySub", dict.configurator.summarySub);
  setElText("configTotalLabel", dict.configurator.totalLabel);
  setElText("configTgOrderBtnText", dict.configurator.btnOrder);
  setElText("configNote", dict.configurator.note);

  // Quality Assurance
  setElText("qaTag", dict.quality.tag);
  setElText("qaTitle", dict.quality.title);
  setElText("qaDesc", dict.quality.desc);
  setElText("qa1Title", dict.quality.t1_title);
  setElText("qa1Desc", dict.quality.t1_desc);
  setElText("qa2Title", dict.quality.t2_title);
  setElText("qa2Desc", dict.quality.t2_desc);
  setElText("qa3Title", dict.quality.t3_title);
  setElText("qa3Desc", dict.quality.t3_desc);
  setElText("qa4Title", dict.quality.t4_title);
  setElText("qa4Desc", dict.quality.t4_desc);

  // Reviews
  setElText("reviewsTag", dict.reviews.tag);
  setElText("reviewsTitle", dict.reviews.title);
  setElText("reviewsDesc", dict.reviews.desc);
  setElText("r1Name", dict.reviews.r1_name);
  setElText("r1Model", dict.reviews.r1_model);
  setElText("r1Text", dict.reviews.r1_text);
  setElText("r1Time", dict.reviews.r1_time);
  setElText("r1Verified", dict.reviews.verified);

  setElText("r2Name", dict.reviews.r2_name);
  setElText("r2Model", dict.reviews.r2_model);
  setElText("r2Text", dict.reviews.r2_text);
  setElText("r2Time", dict.reviews.r2_time);
  setElText("r2Verified", dict.reviews.verified);

  setElText("r3Name", dict.reviews.r3_name);
  setElText("r3Model", dict.reviews.r3_model);
  setElText("r3Text", dict.reviews.r3_text);
  setElText("r3Time", dict.reviews.r3_time);
  setElText("r3Verified", dict.reviews.verified);

  // FAQ
  setElText("faqTag", dict.faq.tag);
  setElText("faqTitle", dict.faq.title);
  setElText("faqDesc", dict.faq.desc);
  setElText("faqQ1", dict.faq.q1);
  setElHtml("faqA1", dict.faq.a1);
  setElText("faqQ2", dict.faq.q2);
  setElHtml("faqA2", dict.faq.a2);
  setElText("faqQ3", dict.faq.q3);
  setElHtml("faqA3", dict.faq.a3);
  setElText("faqQ4", dict.faq.q4);
  setElHtml("faqA4", dict.faq.a4);
  setElText("faqQ5", dict.faq.q5);
  setElHtml("faqA5", dict.faq.a5);

  // Banner CTA & Footer
  setElText("ctaTag", dict.cta.tag);
  setElText("ctaTitle", dict.cta.title);
  setElHtml("ctaDesc", dict.cta.desc);
  setElText("ctaBtnTg", dict.cta.btnTg);
  setElText("ctaBtnCopy", dict.cta.btnCopy);

  setElText("footerDesc", dict.footer.desc);
  setElText("footerCol1Title", dict.footer.col1Title);
  setElText("footerCol2Title", dict.footer.col2Title);
  setElText("footerSchedule", dict.footer.schedule);
  setElText("footerCopyContact", dict.footer.copyContact);
  setElText("footerRights", dict.footer.rights);
  setElText("footerLove", dict.footer.love);
  setElText("floatingTgText", dict.floatingTg);

  // Re-render dynamic components
  renderCatalog();
  renderConfigurator();
}

function setElText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

// 8. COPY TELEGRAM TO CLIPBOARD & TOAST
function copyTelegramHandle() {
  const text = `@${TELEGRAM_USERNAME}`;
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text);
  } else {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
  showToast(I18N[currentLang].toastCopied);
}

function showToast(msg) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${msg}</span>
  `;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// 9. EVENT LISTENERS SETUP
document.addEventListener("DOMContentLoaded", () => {
  // Language buttons
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang;
      applyLanguage(selected);
      // If switching to UZ, also activate UZS currency if user was on USD default
      if (selected === "uz" && currentCurrency === "USD") {
        const uzsBtn = document.querySelector('.currency-btn[data-currency="UZS"]');
        if (uzsBtn) uzsBtn.click();
      }
    });
  });

  // Currency selector buttons
  const currencyBtns = document.querySelectorAll(".currency-btn");
  currencyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currencyBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCurrency = btn.dataset.currency;
      renderCatalog();
      renderConfigurator();
    });
  });

  // Game Benchmark Selector
  const gameSelect = document.getElementById("gameSelect");
  if (gameSelect) {
    gameSelect.addEventListener("change", (e) => {
      currentGameFilter = e.target.value;
      renderCatalog();
    });
  }

  // Category Filter Pills
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.dataset.category;
      renderCatalog();
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    if (btn) {
      btn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // Navbar scroll background
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("mainNavbar");
    if (nav) {
      if (window.scrollY > 40) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  });

  // Modal Backdrop click to close
  const modalBackdrop = document.getElementById("detailsModal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeDetailsModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailsModal();
    }
  });

  // Initial render
  applyLanguage(currentLang);
});
