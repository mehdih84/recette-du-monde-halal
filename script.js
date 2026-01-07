/* =========================
   DICTIONNAIRE MULTILINGUE
========================= */
const translations = {
    fr: {
        title: "Cuisine du Monde Halal",
        partners: "Liens partenaires",
        shop: "Boutique",
        shop_category: "Choisir une catégorie",
        amazon: "Amazon",
        
        lang_fr: "Français",
        lang_ar: "العربية",
        lang_en: "English",
        lang_nl: "Nederlands",
        country: "Pays",
        belgique: "Belgique",
        france: "France",
        italie: "Italie",
        maroc: "Maroc",
        liban: "Liban",
        turquie: "Turquie",
        afrique: "Afrique",
        asie: "Asie",
        europe: "Europe",
        amerique: "Amérique",
        type: "Type de plat",
        entree: "Entrée",
        plat: "Plat",
        dessert: "Dessert",
        patisserie: "Pâtisserie",
        recipes: "Recettes",
        equipment: "Matériel nécessaire",
        ingredients: "Ingrédients",
        preparation: "Préparation",
        legal: "Ce site contient des liens d’affiliation. En tant que partenaire, je peux percevoir une commission sans coût supplémentaire pour vous. Le site n’est pas responsable des achats effectués sur les plateformes partenaires."
    },

    en: {
        title: "Halal World Cuisine",
        partners: "Partner links",
        shop: "Shop",
        shop_category: "Choose a category",
        amazon: "Amazon",
        
        lang_fr: "French",
        lang_ar: "Arabic",
        lang_en: "English",
        lang_nl: "Nederlands",
        country: "Country",
        belgique: "Belgium",
        france: "France",
        italie: "Italy",
        maroc: "Morocco",
        liban: "Lebanon",
        turquie: "Turkey",
        afrique: "Africa",
        asie: "Asia",
        europe: "Europe",
        amerique: "America",
        type: "Dish type",
        entree: "Starter",
        plat: "Main dish",
        dessert: "Dessert",
        patisserie: "Pastry",
        recipes: "Recipes",
        equipment: "Equipment",
        ingredients: "Ingredients",
        preparation: "Preparation",
        legal: "This site contains affiliate links. As a partner, I may earn a commission at no extra cost to you. The site is not responsible for purchases made on partner platforms."
    },

    ar: {
        title: "مطبخ العالم الحلال",
        partners: "روابط الشركاء",
        shop: "المتجر",
        shop_category: "اختر فئة",
        amazon: "أمازون",
        
        lang_fr: "الفرنسية",
        lang_ar: "العربية",
        lang_en: "الإنجليزية",
        lang_nl: "الهولندية",
        country: "البلد",
        belgique: "بلجيكا",
        france: "فرنسا",
        italie: "إيطاليا",
        maroc: "المغرب",
        liban: "لبنان",
        turquie: "تركيا",
        afrique: "أفريقيا",
        asie: "آسيا",
        europe: "أوروبا",
        amerique: "أمريكا",
        type: "نوع الطبق",
        entree: "مقبلات",
        plat: "طبق رئيسي",
        dessert: "تحلية",
        patisserie: "حلويات",
        recipes: "الوصفات",
        equipment: "المعدات",
        ingredients: "المكونات",
        preparation: "طريقة التحضير",
        legal: "يحتوي هذا الموقع على روابط تابعة. قد أحصل على عمولة دون أي تكلفة إضافية عليك. الموقع غير مسؤول عن المشتريات من المنصات الشريكة."
    },

    nl: {
        title: "Halal Wereldkeuken",
        partners: "Partnerlinks",
        shop: "Winkel",
        shop_category: "Kies een categorie",
        amazon: "Amazon",
        
        lang_fr: "Frans",
        lang_ar: "Arabisch",
        lang_en: "Engels",
        lang_nl: "Nederlands",
        country: "Land",
        belgique: "België",
        france: "Frankrijk",
        italie: "Italië",
        maroc: "Marokko",
        liban: "Libanon",
        turquie: "Turkije",
        afrique: "Afrika",
        asie: "Azië",
        europe: "Europa",
        amerique: "Amerika",
        type: "Soort gerecht",
        entree: "Voorgerecht",
        plat: "Hoofdgerecht",
        dessert: "Dessert",
        patisserie: "Gebak",
        recipes: "Recepten",
        equipment: "Benodigd materiaal",
        ingredients: "Ingrediënten",
        preparation: "Bereiding",
        legal: "Deze site bevat affiliate links. Als partner kan ik een commissie verdienen zonder extra kosten voor u. De site is niet verantwoordelijk voor aankopen op partnerplatforms."
    }
};



/* =========================
   LIENS AFFILIÉS PAR CATÉGORIE
========================= */
const affiliateLinks = {
    couteaux: {
        "Couteaux de cuisine": {
            amazon: "https://www.amazon.com.be/s?k=couteau+de+cuisine"
        }
    },
    poeles: {
        "Poêles de cuisine": {
            amazon: "https://www.amazon.com.be/s?k=poêle+de+cuisine"
        }
    },
    casseroles: {
        "Casseroles inox": {
            amazon: "https://www.amazon.com.be/s?k=casserole+inox"
        }
    },
    batterie: {
        "Batterie de cuisine": {
            amazon: "https://www.amazon.com.be/s?k=batterie+de+cuisine"
        }
    },
    ustensiles: {
        "Ustensiles de cuisine": {
            amazon: "https://www.amazon.com.be/s?k=ustensiles+de+cuisine"
        }
    },
    planches: {
        "Planches à découper": {
            amazon: "https://www.amazon.com.be/s?k=planche+à+découper+cuisine"
        }
    }
};


/* =========================
   TRADUCTION
========================= */
function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

/* Écouteur pour changement de langue */
document.getElementById("language").addEventListener("change", (e) => {
    applyTranslations(e.target.value);
});

/* =========================
   BOUTIQUE
========================= */
const shopButton = document.getElementById("shopButton");
const shopContainer = document.getElementById("shopContainer");
const shopSelect = document.getElementById("shopCategory");
const shopLinksDiv = document.getElementById("shopLinks");

shopButton.addEventListener("click", () => {
    shopContainer.classList.toggle("hidden"); // bascule simplement l'affichage
    shopLinksDiv.innerHTML = ""; // vide les liens si on ré-ouvre
    // si boutique s'ouvre, on cache la recette
if (!shopContainer.classList.contains("hidden")) {
    recipeContainer.classList.add("hidden");
}

});


shopSelect.addEventListener("change", () => {
    const category = shopSelect.value;
    shopLinksDiv.innerHTML = "";

    if (!category || !affiliateLinks[category]) return;

    const ul = document.createElement("ul");

    Object.keys(affiliateLinks[category]).forEach(item => {
        const li = document.createElement("li");

        const amazonLink = document.createElement("a");
        amazonLink.href = affiliateLinks[category][item].amazon;
        amazonLink.textContent = item + " – Voir sur Amazon";
        amazonLink.target = "_blank";
        amazonLink.rel = "nofollow noopener noreferrer";
        amazonLink.style.color = "#FFD700";
        amazonLink.style.fontWeight = "bold";
        amazonLink.style.textDecoration = "none";
        amazonLink.style.display = "inline-block";
        amazonLink.style.marginBottom = "8px";

        li.appendChild(amazonLink);
        ul.appendChild(li);
    });

    shopLinksDiv.appendChild(ul);
});


/* =========================
   INITIALISATION
========================= */
applyTranslations("fr"); // langue par défaut



/* =========================
   RECETTES MULTILINGUES
   Tu peux coller les recettes dans n’importe quel ordre
========================= */

const recipesData = {
    entree: {},
    plat: {},
    dessert: {},
    patisserie: {}
};

// Exemple recette : Harira (Maroc)
recipesData.entree.harira = {
    country: "maroc",
    image: "images/harira.jpg",
    fr: {
        title: "Harira marocaine traditionnelle (4 personnes)",
        equipment: [
            "1 grande marmite ou casserole (minimum 5 litres)",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 verre doseur",
            "1 passoire"
        ],
        ingredients: [
            "200 g de pois chiches secs (trempés 12 heures)",
            "150 g de lentilles sèches",
            "400 g de tomates concassées",
            "1 oignon moyen (120 g)",
            "1 branche de céleri (50 g)",
            "1 bouquet de coriandre fraîche (30 g)",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "1 cuillère à café rase de gingembre moulu (2 g)",
            "1 cuillère à café rase de curcuma (2 g)",
            "1 cuillère à café rase de paprika (2 g)",
            "1 cuillère à café rase de sel (5 g)",
            "1/2 cuillère à café de poivre noir",
            "1,5 litre d’eau"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes. Égoutter les pois chiches trempés. Rincer les lentilles à l’eau froide. Éplucher et hacher finement l’oignon. Laver le céleri et la coriandre puis les hacher finement. Mettre la marmite sur feu moyen. Ajouter l’huile d’olive et attendre 1 minute. Ajouter l’oignon, le céleri et la coriandre. Faire revenir pendant 5 minutes en remuant. Ajouter les tomates concassées, les pois chiches et les lentilles. Ajouter le gingembre, le curcuma, le paprika, le sel et le poivre. Mélanger soigneusement. Verser 1,5 litre d’eau. Couvrir et laisser cuire à feu moyen pendant 45 minutes. Remuer de temps en temps. Vérifier la cuisson des pois chiches et des lentilles avant de servir bien chaud."
    },
    en: {
        title: "Traditional Moroccan Harira (Serves 4)",
        equipment: [
            "1 large pot (minimum 5 liters)",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 measuring cup",
            "1 strainer"
        ],
        ingredients: [
            "200 g dried chickpeas (soaked 12 hours)",
            "150 g dried lentils",
            "400 g crushed tomatoes",
            "1 medium onion (120 g)",
            "1 celery stalk (50 g)",
            "1 bunch fresh coriander (30 g)",
            "3 tablespoons olive oil (45 ml)",
            "1 level teaspoon ground ginger (2 g)",
            "1 level teaspoon turmeric (2 g)",
            "1 level teaspoon paprika (2 g)",
            "1 level teaspoon salt (5 g)",
            "1/2 teaspoon black pepper",
            "1.5 liters water"
        ],
        preparation:
            "This recipe serves 4 people. Drain soaked chickpeas. Rinse lentils under cold water. Peel and finely chop the onion. Wash and finely chop celery and coriander. Heat the pot over medium heat. Add olive oil and wait 1 minute. Add onion, celery, and coriander. Cook for 5 minutes, stirring. Add crushed tomatoes, chickpeas, and lentils. Add ginger, turmeric, paprika, salt, and pepper. Mix well. Pour in 1.5 liters of water. Cover and cook over medium heat for 45 minutes, stirring occasionally. Check that chickpeas and lentils are tender before serving hot."
    },
    nl: {
        title: "Traditionele Marokkaanse harira (voor 4 personen)",
        equipment: [
            "1 grote pan (minimaal 5 liter)",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 maatbeker",
            "1 vergiet"
        ],
        ingredients: [
            "200 g gedroogde kikkererwten (12 uur geweekt)",
            "150 g gedroogde linzen",
            "400 g tomatenblokjes",
            "1 middelgrote ui (120 g)",
            "1 stengel selderij (50 g)",
            "1 bos verse koriander (30 g)",
            "3 eetlepels olijfolie (45 ml)",
            "1 afgestreken theelepel gemalen gember (2 g)",
            "1 afgestreken theelepel kurkuma (2 g)",
            "1 afgestreken theelepel paprikapoeder (2 g)",
            "1 afgestreken theelepel zout (5 g)",
            "1/2 theelepel zwarte peper",
            "1,5 liter water"
        ],
        preparation:
            "Dit recept is voor 4 personen. Laat de kikkererwten uitlekken. Spoel de linzen af met koud water. Schil en snipper de ui fijn. Was en hak selderij en koriander fijn. Verhit de pan op middelhoog vuur. Voeg de olijfolie toe en wacht 1 minuut. Voeg ui, selderij en koriander toe en bak 5 minuten. Voeg tomaten, kikkererwten en linzen toe. Voeg kruiden toe en meng goed. Giet 1,5 liter water erbij. Laat 45 minuten koken en roer af en toe. Serveer heet."
    },
    ar: {
        title: "الحريرة المغربية التقليدية (تكفي 4 أشخاص)",
        equipment: [
            "قدر كبير (سعة 5 لترات على الأقل)",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "كوب قياس",
            "مصفاة"
        ],
        ingredients: [
            "200غ حمص يابس (منقوع 12 ساعة)",
            "150غ عدس يابس",
            "400غ طماطم مطحونة",
            "بصلة متوسطة (120غ)",
            "عود كرفس (50غ)",
            "حزمة كزبرة طازجة (30غ)",
            "3 ملاعق كبيرة زيت زيتون (45مل)",
            "ملعقة صغيرة زنجبيل مطحون (2غ)",
            "ملعقة صغيرة كركم (2غ)",
            "ملعقة صغيرة بابريكا (2غ)",
            "ملعقة صغيرة ملح (5غ)",
            "نصف ملعقة صغيرة فلفل أسود",
            "1.5 لتر ماء"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. صفِّ الحمص المنقوع. اغسل العدس بالماء البارد. قشر البصل وقطعه ناعماً. اغسل الكرفس والكزبرة وقطعهما ناعماً. ضع القدر على نار متوسطة. أضف زيت الزيتون وانتظر دقيقة. أضف البصل والكرفس والكزبرة وحرّك 5 دقائق. أضف الطماطم والحمص والعدس. أضف التوابل وامزج جيداً. أضف 1.5 لتر ماء. غطِّ القدر واتركه يطهى 45 دقيقة مع التحريك أحياناً. قدمه ساخناً."
    }
};
recipesData.entree.zaalouk = {
    country: "maroc",
    image: "images/zaalouk.jpg",
    fr: {
        title: "Zaalouk – Salade marocaine d’aubergines",
        equipment: [
            "1 casserole",
            "1 poêle",
            "1 cuillère en bois",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "2 grosses aubergines",
            "3 tomates mûres",
            "2 gousses d’ail, hachées",
            "3 cuillères à soupe d’huile d’olive",
            "1 cuillère à café cumin",
            "1 cuillère à café paprika",
            "Sel selon goût",
            "Persil ou coriandre fraîche"
        ],
        preparation:
            "1. Faire cuire les aubergines à l’eau jusqu’à ce qu’elles soient tendres.\n" +
            "2. Égoutter, peler et écraser grossièrement.\n" +
            "3. Dans une poêle, chauffer l’huile d’olive et faire revenir l’ail.\n" +
            "4. Ajouter les tomates râpées, cumin, paprika et sel.\n" +
            "5. Laisser mijoter 10 minutes.\n" +
            "6. Ajouter les aubergines et cuire encore 5 minutes.\n" +
            "7. Parsemer de persil ou coriandre et servir tiède."
    },
    en: {
        title: "Zaalouk – Moroccan Eggplant Salad",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "2 large eggplants",
            "3 ripe tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt to taste",
            "Fresh parsley or coriander"
        ],
        preparation:
            "1. Boil eggplants until tender.\n" +
            "2. Drain, peel and mash.\n" +
            "3. Heat olive oil and sauté garlic.\n" +
            "4. Add grated tomatoes, cumin, paprika and salt.\n" +
            "5. Simmer 10 minutes.\n" +
            "6. Add eggplants and cook 5 more minutes.\n" +
            "7. Garnish with herbs and serve warm."
    },
    nl: {
        title: "Zaalouk – Marokkaanse auberginesalade",
        equipment: ["1 pan", "1 koekenpan", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "2 grote aubergines",
            "3 rijpe tomaten",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie",
            "1 theelepel komijn",
            "1 theelepel paprika",
            "Zout naar smaak",
            "Verse peterselie of koriander"
        ],
        preparation:
            "1. Kook de aubergines tot ze zacht zijn.\n" +
            "2. Laat uitlekken, schil en prak grof.\n" +
            "3. Verhit olijfolie en fruit knoflook.\n" +
            "4. Voeg tomaten, komijn, paprika en zout toe.\n" +
            "5. Laat 10 minuten sudderen.\n" +
            "6. Voeg aubergines toe en kook 5 minuten.\n" +
            "7. Garneer met kruiden en serveer warm."
    },
    ar: {
        title: "الزعلوك – سلطة الباذنجان المغربية",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "2 باذنجان كبير",
            "3 طماطم ناضجة",
            "2 فص ثوم مفروم",
            "3 ملاعق كبيرة زيت زيتون",
            "ملعقة صغيرة كمون",
            "ملعقة صغيرة بابريكا",
            "ملح حسب الذوق",
            "بقدونس أو كزبرة طازجة"
        ],
        preparation:
            "1. اسلق الباذنجان حتى يصبح طريًا.\n" +
            "2. صفِّه، قشره واهرِسه.\n" +
            "3. سخّن زيت الزيتون وقلِّ الثوم.\n" +
            "4. أضف الطماطم، الكمون، البابريكا والملح.\n" +
            "5. اتركه يطهى 10 دقائق.\n" +
            "6. أضف الباذنجان واطهه 5 دقائق إضافية.\n" +
            "7. زيّن بالأعشاب وقدّم دافئًا."
    }
};
recipesData.entree.taktouka = {
    country: "maroc",
    image: "images/taktouka.jpg",
    fr: {
        title: "Taktouka – Salade marocaine de poivrons",
        equipment: ["1 poêle", "1 couteau", "1 planche à découper", "1 cuillère"],
        ingredients: [
            "3 poivrons",
            "3 tomates",
            "2 gousses d’ail",
            "3 cuillères à soupe huile d’olive",
            "1 cuillère à café paprika",
            "Sel selon goût"
        ],
        preparation:
            "1. Griller les poivrons, les peler et les couper.\n" +
            "2. Couper les tomates en petits dés.\n" +
            "3. Chauffer l’huile et faire revenir l’ail.\n" +
            "4. Ajouter poivrons, tomates, paprika et sel.\n" +
            "5. Laisser mijoter 10 minutes.\n" +
            "6. Servir tiède ou froid."
    },
    en: {
        title: "Taktouka – Moroccan Pepper Salad",
        equipment: ["1 pan", "1 knife", "1 cutting board", "1 spoon"],
        ingredients: [
            "3 bell peppers",
            "3 tomatoes",
            "2 garlic cloves",
            "3 tablespoons olive oil",
            "1 teaspoon paprika",
            "Salt to taste"
        ],
        preparation:
            "1. Roast peppers, peel and chop.\n" +
            "2. Dice tomatoes.\n" +
            "3. Heat oil and sauté garlic.\n" +
            "4. Add peppers, tomatoes, paprika and salt.\n" +
            "5. Simmer 10 minutes.\n" +
            "6. Serve warm or cold."
    },
    nl: {
        title: "Taktouka – Marokkaanse paprikasalade",
        equipment: ["1 pan", "1 mes", "1 snijplank", "1 lepel"],
        ingredients: [
            "3 paprika’s",
            "3 tomaten",
            "2 teentjes knoflook",
            "3 eetlepels olijfolie",
            "1 theelepel paprika",
            "Zout naar smaak"
        ],
        preparation:
            "1. Rooster paprika’s, pel en snijd.\n" +
            "2. Snijd tomaten fijn.\n" +
            "3. Verhit olie en fruit knoflook.\n" +
            "4. Voeg paprika, tomaten en kruiden toe.\n" +
            "5. Laat 10 minuten sudderen.\n" +
            "6. Serveer warm of koud."
    },
    ar: {
        title: "تكتوكة – سلطة الفلفل المغربية",
        equipment: ["مقلاة", "سكين", "لوح تقطيع", "ملعقة"],
        ingredients: [
            "3 فلفل",
            "3 طماطم",
            "2 فص ثوم",
            "3 ملاعق زيت زيتون",
            "ملعقة صغيرة بابريكا",
            "ملح حسب الذوق"
        ],
        preparation:
            "1. اشوِ الفلفل وقشره وقطّعه.\n" +
            "2. قطّع الطماطم.\n" +
            "3. سخّن الزيت وقلِّ الثوم.\n" +
            "4. أضف الفلفل والطماطم والتوابل.\n" +
            "5. اتركه يطهى 10 دقائق.\n" +
            "6. قدّم دافئًا أو باردًا."
    }
};
recipesData.entree.briouatesLegumes = {
    country: "maroc",
    image: "images/briouates-legumes.jpg",
    fr: {
        title: "Briouates aux légumes",
        equipment: ["1 poêle", "1 saladier", "1 pince", "1 couteau"],
        ingredients: [
            "Feuilles de brick",
            "1 carotte râpée",
            "1 courgette râpée",
            "1 oignon haché",
            "2 cuillères à soupe huile d’olive",
            "Sel et poivre"
        ],
        preparation:
            "1. Faire revenir l’oignon dans l’huile.\n" +
            "2. Ajouter carotte et courgette.\n" +
            "3. Assaisonner et cuire 5 minutes.\n" +
            "4. Garnir les feuilles de brick et plier.\n" +
            "5. Cuire à la poêle jusqu’à doré.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Vegetable Briouates",
        equipment: ["1 pan", "1 bowl", "1 tongs", "1 knife"],
        ingredients: [
            "Brick pastry sheets",
            "1 grated carrot",
            "1 grated zucchini",
            "1 chopped onion",
            "2 tablespoons olive oil",
            "Salt and pepper"
        ],
        preparation:
            "1. Sauté onion in oil.\n" +
            "2. Add vegetables.\n" +
            "3. Season and cook 5 minutes.\n" +
            "4. Fill pastry and fold.\n" +
            "5. Cook until golden.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Briouates met groenten",
        equipment: ["1 pan", "1 kom", "1 tang", "1 mes"],
        ingredients: [
            "Brickdeeg",
            "1 geraspte wortel",
            "1 geraspte courgette",
            "1 ui, gesnipperd",
            "2 eetlepels olijfolie",
            "Zout en peper"
        ],
        preparation:
            "1. Fruit ui in olie.\n" +
            "2. Voeg groenten toe.\n" +
            "3. Breng op smaak en bak 5 minuten.\n" +
            "4. Vul deeg en vouw.\n" +
            "5. Bak goudbruin.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "بريوات بالخضار",
        equipment: ["مقلاة", "وعاء", "ملقط", "سكين"],
        ingredients: [
            "أوراق البريك",
            "جزرة مبشورة",
            "كوسة مبشورة",
            "بصلة مفرومة",
            "2 ملاعق زيت زيتون",
            "ملح وفلفل"
        ],
        preparation:
            "1. شوّح البصل في الزيت.\n" +
            "2. أضف الخضار.\n" +
            "3. تبّل واطهه 5 دقائق.\n" +
            "4. احشُ ولفّ البريك.\n" +
            "5. اطهه حتى يذهب اللون الذهبي.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.entree.briouatesPoulet = {
    country: "maroc",
    image: "images/briouates-poulet.jpg",
    fr: {
        title: "Briouates au poulet",
        equipment: [
            "1 poêle",
            "1 saladier",
            "1 couteau",
            "1 planche à découper",
            "1 pince"
        ],
        ingredients: [
            "Feuilles de brick",
            "300 g de poulet coupé finement",
            "1 oignon haché",
            "2 cuillères à soupe huile d’olive",
            "1 cuillère à café cumin",
            "1 cuillère à café paprika",
            "Sel et poivre"
        ],
        preparation:
            "1. Chauffer l’huile et faire revenir l’oignon.\n" +
            "2. Ajouter le poulet et les épices.\n" +
            "3. Cuire jusqu’à évaporation du jus.\n" +
            "4. Laisser tiédir.\n" +
            "5. Garnir les feuilles de brick et plier.\n" +
            "6. Cuire à la poêle jusqu’à doré.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Chicken Briouates",
        equipment: ["1 pan", "1 bowl", "1 knife", "1 cutting board", "1 tongs"],
        ingredients: [
            "Brick pastry sheets",
            "300 g finely chopped chicken",
            "1 chopped onion",
            "2 tablespoons olive oil",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt and pepper"
        ],
        preparation:
            "1. Heat oil and sauté onion.\n" +
            "2. Add chicken and spices.\n" +
            "3. Cook until liquid evaporates.\n" +
            "4. Let cool slightly.\n" +
            "5. Fill and fold pastry.\n" +
            "6. Pan-fry until golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Briouates met kip",
        equipment: ["1 pan", "1 kom", "1 mes", "1 snijplank", "1 tang"],
        ingredients: [
            "Brickdeeg",
            "300 g fijngesneden kip",
            "1 ui, gesnipperd",
            "2 eetlepels olijfolie",
            "1 theelepel komijn",
            "1 theelepel paprika",
            "Zout en peper"
        ],
        preparation:
            "1. Verhit olie en fruit ui.\n" +
            "2. Voeg kip en kruiden toe.\n" +
            "3. Bak tot het vocht verdampt.\n" +
            "4. Laat even afkoelen.\n" +
            "5. Vul en vouw het deeg.\n" +
            "6. Bak goudbruin.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بريوات بالدجاج",
        equipment: ["مقلاة", "وعاء", "سكين", "لوح تقطيع", "ملقط"],
        ingredients: [
            "أوراق البريك",
            "300 غ دجاج مفروم",
            "بصلة مفرومة",
            "2 ملاعق زيت زيتون",
            "ملعقة صغيرة كمون",
            "ملعقة صغيرة بابريكا",
            "ملح وفلفل"
        ],
        preparation:
            "1. سخّن الزيت وقلِّ البصل.\n" +
            "2. أضف الدجاج والتوابل.\n" +
            "3. اطهه حتى يتبخر السائل.\n" +
            "4. اتركه يبرد قليلاً.\n" +
            "5. احشُ ولفّ البريك.\n" +
            "6. اطهه حتى يذهب اللون الذهبي.\n" +
            "7. قدّم ساخنًا."
    }
};
recipesData.entree.briouatesFruitsMer = {
    country: "maroc",
    image: "images/briouates-fruits-mer.jpg",
    fr: {
        title: "Briouates aux fruits de mer",
        equipment: ["1 poêle", "1 saladier", "1 couteau", "1 pince"],
        ingredients: [
            "Feuilles de brick",
            "200 g crevettes décortiquées",
            "100 g calamars coupés",
            "1 gousse d’ail hachée",
            "2 cuillères à soupe huile d’olive",
            "Persil haché",
            "Sel et poivre"
        ],
        preparation:
            "1. Chauffer l’huile et faire revenir l’ail.\n" +
            "2. Ajouter crevettes et calamars.\n" +
            "3. Assaisonner et cuire 5 minutes.\n" +
            "4. Ajouter le persil et laisser tiédir.\n" +
            "5. Garnir les feuilles de brick et plier.\n" +
            "6. Cuire à la poêle jusqu’à doré.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Seafood Briouates",
        equipment: ["1 pan", "1 bowl", "1 knife", "1 tongs"],
        ingredients: [
            "Brick pastry sheets",
            "200 g peeled shrimp",
            "100 g sliced squid",
            "1 garlic clove, chopped",
            "2 tablespoons olive oil",
            "Chopped parsley",
            "Salt and pepper"
        ],
        preparation:
            "1. Heat oil and sauté garlic.\n" +
            "2. Add shrimp and squid.\n" +
            "3. Season and cook 5 minutes.\n" +
            "4. Add parsley and cool slightly.\n" +
            "5. Fill and fold pastry.\n" +
            "6. Pan-fry until golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Briouates met zeevruchten",
        equipment: ["1 pan", "1 kom", "1 mes", "1 tang"],
        ingredients: [
            "Brickdeeg",
            "200 g gepelde garnalen",
            "100 g in ringen gesneden inktvis",
            "1 teentje knoflook",
            "2 eetlepels olijfolie",
            "Peterselie",
            "Zout en peper"
        ],
        preparation:
            "1. Verhit olie en fruit knoflook.\n" +
            "2. Voeg zeevruchten toe.\n" +
            "3. Kruid en bak 5 minuten.\n" +
            "4. Voeg peterselie toe.\n" +
            "5. Vul en vouw deeg.\n" +
            "6. Bak goudbruin.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بريوات بالمأكولات البحرية",
        equipment: ["مقلاة", "وعاء", "سكين", "ملقط"],
        ingredients: [
            "أوراق البريك",
            "200 غ روبيان مقشر",
            "100 غ حبار مقطع",
            "فص ثوم مفروم",
            "2 ملاعق زيت زيتون",
            "بقدونس مفروم",
            "ملح وفلفل"
        ],
        preparation:
            "1. سخّن الزيت وقلِّ الثوم.\n" +
            "2. أضف المأكولات البحرية.\n" +
            "3. تبّل واطهه 5 دقائق.\n" +
            "4. أضف البقدونس واتركه يبرد قليلاً.\n" +
            "5. احشُ ولفّ البريك.\n" +
            "6. اطهه حتى يصبح ذهبيًا.\n" +
            "7. قدّم ساخنًا."
    }
};
recipesData.entree.saladePoisChiches = {
    country: "maroc",
    image: "images/salade-pois-chiches.jpg",
    fr: {
        title: "Salade marocaine de pois chiches",
        equipment: ["1 saladier", "1 couteau"],
        ingredients: [
            "300 g pois chiches cuits",
            "1 tomate",
            "1 oignon rouge",
            "2 cuillères à soupe huile d’olive",
            "Cumin",
            "Sel"
        ],
        preparation:
            "1. Couper tomate et oignon.\n" +
            "2. Mélanger avec pois chiches.\n" +
            "3. Ajouter huile, cumin et sel.\n" +
            "4. Bien mélanger.\n" +
            "5. Servir frais."
    },
    en: {
        title: "Moroccan Chickpea Salad",
        equipment: ["1 bowl", "1 knife"],
        ingredients: [
            "300 g cooked chickpeas",
            "1 tomato",
            "1 red onion",
            "2 tablespoons olive oil",
            "Cumin",
            "Salt"
        ],
        preparation:
            "1. Chop tomato and onion.\n" +
            "2. Mix with chickpeas.\n" +
            "3. Add oil, cumin and salt.\n" +
            "4. Mix well.\n" +
            "5. Serve fresh."
    },
    nl: {
        title: "Marokkaanse kikkererwtensalade",
        equipment: ["1 kom", "1 mes"],
        ingredients: [
            "300 g gekookte kikkererwten",
            "1 tomaat",
            "1 rode ui",
            "2 eetlepels olijfolie",
            "Komijn",
            "Zout"
        ],
        preparation:
            "1. Snijd tomaat en ui.\n" +
            "2. Meng met kikkererwten.\n" +
            "3. Voeg olie, komijn en zout toe.\n" +
            "4. Meng goed.\n" +
            "5. Serveer koel."
    },
    ar: {
        title: "سلطة الحمص المغربية",
        equipment: ["وعاء", "سكين"],
        ingredients: [
            "300 غ حمص مطبوخ",
            "طماطم",
            "بصلة حمراء",
            "2 ملاعق زيت زيتون",
            "كمون",
            "ملح"
        ],
        preparation:
            "1. قطّع الطماطم والبصل.\n" +
            "2. اخلط مع الحمص.\n" +
            "3. أضف الزيت والكمون والملح.\n" +
            "4. اخلط جيدًا.\n" +
            "5. قدّم باردًا."
    }
};
recipesData.entree.saladeConcombreTomate = {
    country: "maroc",
    image: "images/salade-concombre-tomate.jpg",
    fr: {
        title: "Salade marocaine de concombre et tomate",
        equipment: ["1 saladier", "1 couteau"],
        ingredients: [
            "2 concombres",
            "3 tomates",
            "2 cuillères à soupe huile d’olive",
            "Persil frais",
            "Sel"
        ],
        preparation:
            "1. Couper concombres et tomates en dés.\n" +
            "2. Mettre dans un saladier.\n" +
            "3. Ajouter huile d’olive et sel.\n" +
            "4. Mélanger délicatement.\n" +
            "5. Parsemer de persil et servir frais."
    },
    en: {
        title: "Moroccan Cucumber and Tomato Salad",
        equipment: ["1 bowl", "1 knife"],
        ingredients: [
            "2 cucumbers",
            "3 tomatoes",
            "2 tablespoons olive oil",
            "Fresh parsley",
            "Salt"
        ],
        preparation:
            "1. Dice cucumbers and tomatoes.\n" +
            "2. Place in a bowl.\n" +
            "3. Add olive oil and salt.\n" +
            "4. Mix gently.\n" +
            "5. Garnish with parsley and serve fresh."
    },
    nl: {
        title: "Marokkaanse komkommer-tomatensalade",
        equipment: ["1 kom", "1 mes"],
        ingredients: [
            "2 komkommers",
            "3 tomaten",
            "2 eetlepels olijfolie",
            "Verse peterselie",
            "Zout"
        ],
        preparation:
            "1. Snijd komkommer en tomaat in blokjes.\n" +
            "2. Doe in een kom.\n" +
            "3. Voeg olie en zout toe.\n" +
            "4. Meng voorzichtig.\n" +
            "5. Bestrooi met peterselie en serveer fris."
    },
    ar: {
        title: "سلطة الخيار والطماطم المغربية",
        equipment: ["وعاء", "سكين"],
        ingredients: [
            "2 خيار",
            "3 طماطم",
            "2 ملاعق زيت زيتون",
            "بقدونس طازج",
            "ملح"
        ],
        preparation:
            "1. قطّع الخيار والطماطم.\n" +
            "2. ضعهم في وعاء.\n" +
            "3. أضف الزيت والملح.\n" +
            "4. اخلط بلطف.\n" +
            "5. زيّن بالبقدونس وقدّم باردًا."
    }
};
recipesData.entree.batboutLegumes = {
    country: "maroc",
    image: "images/batbout-legumes.jpg",
    fr: {
        title: "Batbout farci aux légumes",
        equipment: ["1 poêle", "1 couteau", "1 planche"],
        ingredients: [
            "Batbouts (pain marocain)",
            "1 poivron",
            "1 oignon",
            "1 courgette",
            "2 cuillères à soupe huile d’olive",
            "Sel et poivre"
        ],
        preparation:
            "1. Couper les légumes en fines lamelles.\n" +
            "2. Faire revenir dans l’huile.\n" +
            "3. Assaisonner.\n" +
            "4. Couper le batbout en deux.\n" +
            "5. Garnir avec les légumes.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Vegetable Stuffed Batbout",
        equipment: ["1 pan", "1 knife", "1 cutting board"],
        ingredients: [
            "Batbout bread",
            "1 bell pepper",
            "1 onion",
            "1 zucchini",
            "2 tablespoons olive oil",
            "Salt and pepper"
        ],
        preparation:
            "1. Slice vegetables thinly.\n" +
            "2. Sauté in oil.\n" +
            "3. Season.\n" +
            "4. Cut batbout open.\n" +
            "5. Fill with vegetables.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Batbout gevuld met groenten",
        equipment: ["1 pan", "1 mes", "1 snijplank"],
        ingredients: [
            "Batbout brood",
            "1 paprika",
            "1 ui",
            "1 courgette",
            "2 eetlepels olijfolie",
            "Zout en peper"
        ],
        preparation:
            "1. Snijd groenten fijn.\n" +
            "2. Bak ze in olie.\n" +
            "3. Kruid.\n" +
            "4. Snijd batbout open.\n" +
            "5. Vul met groenten.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "بطبوط محشو بالخضار",
        equipment: ["مقلاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "خبز البطبوط",
            "فلفل",
            "بصل",
            "كوسة",
            "2 ملاعق زيت زيتون",
            "ملح وفلفل"
        ],
        preparation:
            "1. قطّع الخضار شرائح.\n" +
            "2. شوّحها في الزيت.\n" +
            "3. تبّل.\n" +
            "4. افتح البطبوط.\n" +
            "5. احشُ بالخضار.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.entree.maakouda = {
    country: "maroc",
    image: "images/maakouda.jpg",
    fr: {
        title: "Maakouda – Galettes marocaines de pommes de terre",
        equipment: ["1 casserole", "1 poêle", "1 saladier"],
        ingredients: [
            "500 g pommes de terre",
            "2 cuillères à soupe farine",
            "Persil",
            "Sel et poivre",
            "Huile pour cuisson"
        ],
        preparation:
            "1. Cuire les pommes de terre.\n" +
            "2. Écraser en purée.\n" +
            "3. Ajouter farine, persil, sel et poivre.\n" +
            "4. Former des galettes.\n" +
            "5. Cuire à la poêle jusqu’à doré.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Maakouda – Moroccan Potato Fritters",
        equipment: ["1 pot", "1 pan", "1 bowl"],
        ingredients: [
            "500 g potatoes",
            "2 tablespoons flour",
            "Parsley",
            "Salt and pepper",
            "Oil for cooking"
        ],
        preparation:
            "1. Boil potatoes.\n" +
            "2. Mash them.\n" +
            "3. Add flour, parsley, salt and pepper.\n" +
            "4. Shape patties.\n" +
            "5. Pan-fry until golden.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Maakouda – Marokkaanse aardappelkoekjes",
        equipment: ["1 pan", "1 kom"],
        ingredients: [
            "500 g aardappelen",
            "2 eetlepels bloem",
            "Peterselie",
            "Zout en peper",
            "Olie om te bakken"
        ],
        preparation:
            "1. Kook aardappelen.\n" +
            "2. Prak ze fijn.\n" +
            "3. Voeg bloem en kruiden toe.\n" +
            "4. Vorm koekjes.\n" +
            "5. Bak goudbruin.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "معقودة – كريات البطاطس المغربية",
        equipment: ["قدر", "مقلاة", "وعاء"],
        ingredients: [
            "500 غ بطاطس",
            "2 ملاعق دقيق",
            "بقدونس",
            "ملح وفلفل",
            "زيت للقلي"
        ],
        preparation:
            "1. اسلق البطاطس.\n" +
            "2. اهرسها.\n" +
            "3. أضف الدقيق والتوابل.\n" +
            "4. شكّل كريات.\n" +
            "5. اطهه حتى يصبح ذهبيًا.\n" +
            "6. قدّم ساخنًا."
    }
};

recipesData.plat.tajinePouletLegumes = {
    country: "maroc",
    image: "images/tajine-poulet.jpg",
    fr: {
        title: "Tajine de poulet aux légumes (4 personnes)",
        equipment: [
            "1 tajine ou grande cocotte",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "1 poulet entier découpé (1,2 kg)",
            "3 carottes moyennes (300 g)",
            "2 pommes de terre moyennes (300 g)",
            "1 oignon moyen (120 g)",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "1 cuillère à café gingembre moulu (2 g)",
            "1 cuillère à café curcuma (2 g)",
            "1 cuillère à café paprika (2 g)",
            "1 cuillère à café sel (5 g)",
            "1/2 cuillère à café poivre noir",
            "500 ml d’eau"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes. Éplucher et couper les carottes en bâtonnets. Éplucher les pommes de terre et les couper en quartiers. Éplucher et émincer l’oignon. Mettre le tajine sur feu moyen. Ajouter l’huile d’olive puis l’oignon. Faire revenir 5 minutes. Ajouter les morceaux de poulet, les épices, le sel et le poivre. Mélanger. Ajouter les légumes autour du poulet. Verser 500 ml d’eau. Couvrir et laisser cuire à feu doux pendant 1 heure. Vérifier la cuisson avant de servir chaud."
    },
    en: {
        title: "Moroccan Chicken and Vegetable Tagine (Serves 4)",
        equipment: [
            "1 tagine or large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "1 whole chicken cut into pieces (1.2 kg)",
            "3 carrots (300 g)",
            "2 potatoes (300 g)",
            "1 medium onion (120 g)",
            "3 tablespoons olive oil (45 ml)",
            "1 teaspoon ground ginger (2 g)",
            "1 teaspoon turmeric (2 g)",
            "1 teaspoon paprika (2 g)",
            "1 teaspoon salt (5 g)",
            "1/2 teaspoon black pepper",
            "500 ml water"
        ],
        preparation:
            "This recipe serves 4 people. Peel and cut carrots into sticks. Peel potatoes and cut into quarters. Peel and slice the onion. Heat the tagine over medium heat. Add olive oil and onion. Cook for 5 minutes. Add chicken pieces, spices, salt, and pepper. Mix well. Arrange vegetables around the chicken. Pour in 500 ml water. Cover and cook on low heat for 1 hour. Serve hot."
    },
    nl: {
        title: "Marokkaanse kip-tajine met groenten (voor 4 personen)",
        equipment: [
            "1 tajine of grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "1 hele kip in stukken (1,2 kg)",
            "3 wortelen (300 g)",
            "2 aardappelen (300 g)",
            "1 middelgrote ui (120 g)",
            "3 eetlepels olijfolie (45 ml)",
            "1 theelepel gemalen gember (2 g)",
            "1 theelepel kurkuma (2 g)",
            "1 theelepel paprikapoeder (2 g)",
            "1 theelepel zout (5 g)",
            "1/2 theelepel zwarte peper",
            "500 ml water"
        ],
        preparation:
            "Dit recept is voor 4 personen. Schil en snijd de wortelen in stukken. Schil de aardappelen en snijd in parten. Schil en snipper de ui. Verhit de tajine op middelhoog vuur. Voeg olie en ui toe en bak 5 minuten. Voeg kip en kruiden toe. Voeg groenten toe. Giet 500 ml water erbij. Laat 1 uur zachtjes koken. Serveer warm."
    },
    ar: {
        title: "طاجين الدجاج بالخضار (يكفي 4 أشخاص)",
        equipment: [
            "طاجين أو قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "دجاجة كاملة مقطعة (1.2 كغ)",
            "3 جزر (300غ)",
            "2 بطاطس (300غ)",
            "بصلة متوسطة (120غ)",
            "3 ملاعق كبيرة زيت زيتون (45مل)",
            "ملعقة صغيرة زنجبيل (2غ)",
            "ملعقة صغيرة كركم (2غ)",
            "ملعقة صغيرة بابريكا (2غ)",
            "ملعقة صغيرة ملح (5غ)",
            "نصف ملعقة صغيرة فلفل أسود",
            "500 مل ماء"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. قشر الجزر وقطعه. قشر البطاطس وقطعها. قشر البصل وقطعه. ضع الطاجين على نار متوسطة. أضف الزيت والبصل وحرّك 5 دقائق. أضف الدجاج والتوابل. أضف الخضار. أضف الماء. غطِّ واتركه يطهى ساعة كاملة. قدمه ساخناً."
    }
};
recipesData.plat.tajinePouletOlives = {
    country: "maroc",
    image: "images/tajine-poulet-olives.jpg",
    fr: {
        title: "Tajine de poulet aux olives et citron confit",
        equipment: [
            "1 tajine ou cocotte",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "1 poulet découpé",
            "1 oignon émincé",
            "2 gousses d’ail",
            "1 citron confit",
            "150 g olives vertes",
            "3 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "Sel et poivre",
            "Coriandre fraîche"
        ],
        preparation:
            "1. Chauffer l’huile dans le tajine.\n" +
            "2. Faire revenir l’oignon et l’ail.\n" +
            "3. Ajouter le poulet et les épices.\n" +
            "4. Ajouter un verre d’eau et couvrir.\n" +
            "5. Cuire à feu doux 40 minutes.\n" +
            "6. Ajouter olives et citron confit.\n" +
            "7. Poursuivre la cuisson 10 minutes.\n" +
            "8. Parsemer de coriandre et servir chaud."
    },
    en: {
        title: "Chicken Tagine with Olives and Preserved Lemon",
        equipment: ["1 tagine or pot", "1 knife", "1 cutting board"],
        ingredients: [
            "1 whole chicken, cut",
            "1 sliced onion",
            "2 garlic cloves",
            "1 preserved lemon",
            "150 g green olives",
            "3 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "Salt and pepper",
            "Fresh coriander"
        ],
        preparation:
            "1. Heat oil in the tagine.\n" +
            "2. Sauté onion and garlic.\n" +
            "3. Add chicken and spices.\n" +
            "4. Add water and cover.\n" +
            "5. Simmer 40 minutes.\n" +
            "6. Add olives and lemon.\n" +
            "7. Cook 10 more minutes.\n" +
            "8. Garnish and serve."
    },
    nl: {
        title: "Kiptajine met olijven en ingelegde citroen",
        equipment: ["1 tajine of pot", "1 mes", "1 snijplank"],
        ingredients: [
            "1 kip in stukken",
            "1 ui",
            "2 teentjes knoflook",
            "1 ingelegde citroen",
            "150 g groene olijven",
            "3 eetlepels olijfolie",
            "1 theelepel gember",
            "1 theelepel kurkuma",
            "Zout en peper",
            "Koriander"
        ],
        preparation:
            "1. Verhit olie.\n" +
            "2. Fruit ui en knoflook.\n" +
            "3. Voeg kip en kruiden toe.\n" +
            "4. Voeg water toe en laat sudderen.\n" +
            "5. Kook 40 minuten.\n" +
            "6. Voeg olijven en citroen toe.\n" +
            "7. Laat 10 minuten koken.\n" +
            "8. Serveer warm."
    },
    ar: {
        title: "طاجين الدجاج بالزيتون والليمون المصير",
        equipment: ["طاجين", "سكين", "لوح تقطيع"],
        ingredients: [
            "دجاجة مقطعة",
            "بصلة",
            "2 فص ثوم",
            "ليمون مصير",
            "150 غ زيتون أخضر",
            "3 ملاعق زيت زيتون",
            "زنجبيل",
            "كركم",
            "ملح وفلفل",
            "كزبرة"
        ],
        preparation:
            "1. سخّن الزيت.\n" +
            "2. شوّح البصل والثوم.\n" +
            "3. أضف الدجاج والتوابل.\n" +
            "4. أضف الماء وغطي.\n" +
            "5. اطهه 40 دقيقة.\n" +
            "6. أضف الزيتون والليمون.\n" +
            "7. اطهه 10 دقائق إضافية.\n" +
            "8. قدّم ساخنًا."
    }
};
recipesData.plat.tajineBoeufPruneaux = {
    country: "maroc",
    image: "images/tajine-boeuf-pruneaux.jpg",
    fr: {
        title: "Tajine de bœuf aux pruneaux",
        equipment: ["1 tajine", "1 couteau"],
        ingredients: [
            "700 g bœuf",
            "1 oignon",
            "2 cuillères à soupe huile d’olive",
            "1 cuillère à café cannelle",
            "1 cuillère à café gingembre",
            "200 g pruneaux",
            "Sel",
            "Amandes (optionnel)"
        ],
        preparation:
            "1. Faire revenir l’oignon dans l’huile.\n" +
            "2. Ajouter la viande et les épices.\n" +
            "3. Couvrir d’eau et cuire 1h.\n" +
            "4. Ajouter les pruneaux.\n" +
            "5. Cuire encore 20 minutes.\n" +
            "6. Garnir d’amandes et servir."
    },
    en: {
        title: "Beef Tagine with Prunes",
        equipment: ["1 tagine", "1 knife"],
        ingredients: [
            "700 g beef",
            "1 onion",
            "2 tablespoons olive oil",
            "1 teaspoon cinnamon",
            "1 teaspoon ginger",
            "200 g prunes",
            "Salt",
            "Almonds (optional)"
        ],
        preparation:
            "1. Sauté onion in oil.\n" +
            "2. Add beef and spices.\n" +
            "3. Add water and cook 1 hour.\n" +
            "4. Add prunes.\n" +
            "5. Cook 20 minutes more.\n" +
            "6. Garnish and serve."
    },
    nl: {
        title: "Rundertajine met pruimen",
        equipment: ["1 tajine", "1 mes"],
        ingredients: [
            "700 g rundvlees",
            "1 ui",
            "2 eetlepels olijfolie",
            "Kaneel",
            "Gember",
            "200 g pruimen",
            "Zout"
        ],
        preparation:
            "1. Fruit ui in olie.\n" +
            "2. Voeg vlees en kruiden toe.\n" +
            "3. Voeg water toe en kook 1 uur.\n" +
            "4. Voeg pruimen toe.\n" +
            "5. Laat 20 minuten koken.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "طاجين اللحم بالبرقوق",
        equipment: ["طاجين", "سكين"],
        ingredients: [
            "700 غ لحم",
            "بصلة",
            "2 ملاعق زيت زيتون",
            "قرفة",
            "زنجبيل",
            "200 غ برقوق",
            "ملح"
        ],
        preparation:
            "1. شوّح البصل.\n" +
            "2. أضف اللحم والتوابل.\n" +
            "3. اطهه ساعة.\n" +
            "4. أضف البرقوق.\n" +
            "5. اطهه 20 دقيقة.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.plat.tajineKeftaOeufs = {
    country: "maroc",
    image: "images/tajine-kefta-oeufs.jpg",
    fr: {
        title: "Tajine de kefta aux œufs",
        equipment: ["1 tajine"],
        ingredients: [
            "500 g viande hachée",
            "2 tomates",
            "1 oignon",
            "2 œufs",
            "Persil",
            "Paprika",
            "Cumin",
            "Sel"
        ],
        preparation:
            "1. Former des boulettes.\n" +
            "2. Préparer une sauce tomate.\n" +
            "3. Ajouter les keftas.\n" +
            "4. Cuire 20 minutes.\n" +
            "5. Ajouter les œufs.\n" +
            "6. Couvrir jusqu’à cuisson.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Kefta Tagine with Eggs",
        equipment: ["1 tagine"],
        ingredients: [
            "500 g ground meat",
            "2 tomatoes",
            "1 onion",
            "2 eggs",
            "Parsley",
            "Paprika",
            "Cumin",
            "Salt"
        ],
        preparation:
            "1. Shape meatballs.\n" +
            "2. Prepare tomato sauce.\n" +
            "3. Add kefta.\n" +
            "4. Cook 20 minutes.\n" +
            "5. Add eggs.\n" +
            "6. Cover until set.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Keftatajine met eieren",
        equipment: ["1 tajine"],
        ingredients: [
            "500 g gehakt",
            "2 tomaten",
            "1 ui",
            "2 eieren",
            "Peterselie",
            "Paprika",
            "Komijn",
            "Zout"
        ],
        preparation:
            "1. Vorm balletjes.\n" +
            "2. Maak tomatensaus.\n" +
            "3. Voeg gehakt toe.\n" +
            "4. Kook 20 minuten.\n" +
            "5. Voeg eieren toe.\n" +
            "6. Laat stollen.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "طاجين الكفتة بالبيض",
        equipment: ["طاجين"],
        ingredients: [
            "500 غ لحم مفروم",
            "2 طماطم",
            "بصلة",
            "2 بيض",
            "بقدونس",
            "بابريكا",
            "كمون",
            "ملح"
        ],
        preparation:
            "1. شكّل كرات.\n" +
            "2. حضّر صلصة الطماطم.\n" +
            "3. أضف الكفتة.\n" +
            "4. اطهه 20 دقيقة.\n" +
            "5. أضف البيض.\n" +
            "6. غطِّ حتى ينضج.\n" +
            "7. قدّم ساخنًا."
    }
};
recipesData.plat.tajineAgneauLegumes = {
    country: "maroc",
    image: "images/tajine-agneau-legumes.jpg",
    fr: {
        title: "Tajine d’agneau aux légumes",
        equipment: ["1 tajine", "1 couteau", "1 planche"],
        ingredients: [
            "800 g agneau",
            "2 carottes",
            "2 pommes de terre",
            "1 courgette",
            "1 oignon",
            "3 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "Sel et poivre",
            "Coriandre fraîche"
        ],
        preparation:
            "1. Faire revenir l’oignon dans l’huile.\n" +
            "2. Ajouter l’agneau et les épices.\n" +
            "3. Ajouter un verre d’eau.\n" +
            "4. Disposer les légumes dessus.\n" +
            "5. Couvrir et cuire à feu doux 1h30.\n" +
            "6. Parsemer de coriandre et servir."
    },
    en: {
        title: "Lamb and Vegetable Tagine",
        equipment: ["1 tagine", "1 knife", "1 cutting board"],
        ingredients: [
            "800 g lamb",
            "2 carrots",
            "2 potatoes",
            "1 zucchini",
            "1 onion",
            "3 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "Salt and pepper",
            "Fresh coriander"
        ],
        preparation:
            "1. Sauté onion in oil.\n" +
            "2. Add lamb and spices.\n" +
            "3. Add water.\n" +
            "4. Arrange vegetables on top.\n" +
            "5. Cover and simmer 1.5 hours.\n" +
            "6. Garnish and serve."
    },
    nl: {
        title: "Lamstajine met groenten",
        equipment: ["1 tajine", "1 mes", "1 snijplank"],
        ingredients: [
            "800 g lamsvlees",
            "2 wortelen",
            "2 aardappelen",
            "1 courgette",
            "1 ui",
            "3 eetlepels olijfolie",
            "Gember",
            "Kurkuma",
            "Zout en peper",
            "Koriander"
        ],
        preparation:
            "1. Fruit ui in olie.\n" +
            "2. Voeg lamsvlees en kruiden toe.\n" +
            "3. Voeg water toe.\n" +
            "4. Leg groenten erbovenop.\n" +
            "5. Laat 1,5 uur sudderen.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "طاجين لحم الغنم بالخضار",
        equipment: ["طاجين", "سكين", "لوح تقطيع"],
        ingredients: [
            "800 غ لحم غنم",
            "جزر",
            "بطاطس",
            "كوسة",
            "بصلة",
            "زيت زيتون",
            "زنجبيل",
            "كركم",
            "ملح وفلفل",
            "كزبرة"
        ],
        preparation:
            "1. شوّح البصل.\n" +
            "2. أضف اللحم والتوابل.\n" +
            "3. أضف الماء.\n" +
            "4. رتب الخضار.\n" +
            "5. اطهه ساعة ونصف.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.plat.tajinePoissonChermoula = {
    country: "maroc",
    image: "images/tajine-poisson.jpg",
    fr: {
        title: "Tajine de poisson à la chermoula",
        equipment: ["1 tajine"],
        ingredients: [
            "1 kg poisson en tranches",
            "2 tomates",
            "1 poivron",
            "2 gousses d’ail",
            "3 cuillères à soupe huile d’olive",
            "Coriandre",
            "Paprika",
            "Cumin",
            "Sel"
        ],
        preparation:
            "1. Préparer la chermoula avec ail, épices et huile.\n" +
            "2. Enduire le poisson.\n" +
            "3. Disposer légumes dans le tajine.\n" +
            "4. Ajouter le poisson.\n" +
            "5. Cuire à feu doux 35 minutes.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Fish Tagine with Chermoula",
        equipment: ["1 tagine"],
        ingredients: [
            "1 kg fish slices",
            "2 tomatoes",
            "1 bell pepper",
            "2 garlic cloves",
            "3 tablespoons olive oil",
            "Coriander",
            "Paprika",
            "Cumin",
            "Salt"
        ],
        preparation:
            "1. Prepare chermoula with spices and oil.\n" +
            "2. Coat fish.\n" +
            "3. Arrange vegetables in tagine.\n" +
            "4. Add fish.\n" +
            "5. Cook gently 35 minutes.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Vis-tajine met chermoula",
        equipment: ["1 tajine"],
        ingredients: [
            "1 kg vis",
            "2 tomaten",
            "1 paprika",
            "2 teentjes knoflook",
            "3 eetlepels olijfolie",
            "Koriander",
            "Paprika",
            "Komijn",
            "Zout"
        ],
        preparation:
            "1. Maak chermoula.\n" +
            "2. Marineer de vis.\n" +
            "3. Leg groenten in tajine.\n" +
            "4. Voeg vis toe.\n" +
            "5. Laat 35 minuten garen.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "طاجين السمك بالشرمولة",
        equipment: ["طاجين"],
        ingredients: [
            "1 كلغ سمك",
            "طماطم",
            "فلفل",
            "ثوم",
            "زيت زيتون",
            "كزبرة",
            "بابريكا",
            "كمون",
            "ملح"
        ],
        preparation:
            "1. حضّر الشرمولة.\n" +
            "2. تبّل السمك.\n" +
            "3. ضع الخضار في الطاجين.\n" +
            "4. أضف السمك.\n" +
            "5. اطهه 35 دقيقة.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.plat.taginePoisson = {
    country: "maroc",
    image: "images/tagine-poisson.jpg",
    fr: {
        title: "Tagine de poisson aux légumes",
        equipment: ["1 tajine ou grande poêle à fond épais", "1 couteau", "1 planche à découper", "1 cuillère en bois"],
        ingredients: [
            "500 g de filets de poisson blanc (merlan, cabillaud)",
            "2 pommes de terre, coupées en rondelles",
            "1 poivron rouge, coupé en lanières",
            "1 oignon, émincé",
            "2 tomates, coupées en dés",
            "2 gousses d’ail, hachées",
            "1 cuillère à café paprika",
            "1/2 cuillère à café curcuma",
            "1/2 cuillère à café gingembre",
            "2 cuillères à soupe huile d’olive",
            "Sel et poivre",
            "Quelques brins de coriandre fraîche"
        ],
        preparation:
            "1. Chauffer l’huile dans le tajine et faire revenir l’oignon et l’ail 2-3 minutes.\n" +
            "2. Ajouter les tomates, poivron, pommes de terre, épices, sel et poivre.\n" +
            "3. Laisser mijoter 10 minutes à feu doux.\n" +
            "4. Déposer les filets de poisson sur les légumes.\n" +
            "5. Couvrir et cuire 15-20 minutes jusqu’à ce que le poisson soit tendre.\n" +
            "6. Parsemer de coriandre fraîche avant de servir chaud."
    },
    en: {
        title: "Fish Tagine with Vegetables",
        equipment: ["1 tagine or large heavy pan", "1 knife", "1 cutting board", "1 wooden spoon"],
        ingredients: [
            "500 g white fish fillets (whiting, cod)",
            "2 potatoes, sliced",
            "1 red bell pepper, sliced",
            "1 onion, sliced",
            "2 tomatoes, diced",
            "2 garlic cloves, chopped",
            "1 teaspoon paprika",
            "1/2 teaspoon turmeric",
            "1/2 teaspoon ginger",
            "2 tablespoons olive oil",
            "Salt and pepper",
            "Some fresh coriander sprigs"
        ],
        preparation:
            "1. Heat oil in tagine and sauté onion and garlic 2-3 minutes.\n" +
            "2. Add tomatoes, bell pepper, potatoes, spices, salt, and pepper.\n" +
            "3. Simmer 10 minutes over low heat.\n" +
            "4. Place fish fillets on top of vegetables.\n" +
            "5. Cover and cook 15-20 minutes until fish is tender.\n" +
            "6. Sprinkle with fresh coriander and serve hot."
    },
    nl: {
        title: "Vis Tagine met Groenten",
        equipment: ["1 tajine of grote zware pan", "1 mes", "1 snijplank", "1 houten lepel"],
        ingredients: [
            "500 g witte visfilets (wijting, kabeljauw)",
            "2 aardappelen, in plakjes",
            "1 rode paprika, in reepjes",
            "1 ui, gesneden",
            "2 tomaten, in blokjes",
            "2 teentjes knoflook, gehakt",
            "1 theelepel paprika",
            "1/2 theelepel kurkuma",
            "1/2 theelepel gember",
            "2 eetlepels olijfolie",
            "Zout en peper",
            "Enkele takjes verse koriander"
        ],
        preparation:
            "1. Verhit olie in de tajine en fruit ui en knoflook 2-3 minuten.\n" +
            "2. Voeg tomaten, paprika, aardappelen, kruiden, zout en peper toe.\n" +
            "3. Laat 10 minuten sudderen op laag vuur.\n" +
            "4. Leg de visfilets bovenop de groenten.\n" +
            "5. Dek af en kook 15-20 minuten tot de vis gaar is.\n" +
            "6. Bestrooi met verse koriander en serveer heet."
    },
    ar: {
        title: "طاجين السمك بالخضار",
        equipment: ["طنجية أو مقلاة ثقيلة كبيرة", "سكين", "لوح تقطيع", "ملعقة خشبية"],
        ingredients: [
            "500 غ شرائح سمك أبيض (ميرلان، كود)",
            "2 بطاطس، مقطعة شرائح",
            "1 فلفل أحمر، مقطع شرائح",
            "1 بصلة، مقطعة شرائح",
            "2 طماطم، مقطعة مكعبات",
            "2 فصوص ثوم، مفرومة",
            "1 ملعقة صغيرة فلفل أحمر",
            "1/2 ملعقة صغيرة كركم",
            "1/2 ملعقة صغيرة زنجبيل",
            "2 ملاعق زيت زيتون",
            "ملح وفلفل",
            "بضع سيقان كزبرة طازجة"
        ],
        preparation:
            "1. سخّن الزيت في الطنجية وشوّح البصل والثوم 2-3 دقائق.\n" +
            "2. أضف الطماطم، الفلفل، البطاطس، التوابل، الملح والفلفل.\n" +
            "3. اتركه على نار هادئة 10 دقائق.\n" +
            "4. ضع شرائح السمك فوق الخضار.\n" +
            "5. غطِّ واطبخ 15-20 دقيقة حتى ينضج السمك.\n" +
            "6. رش الكزبرة الطازجة وقدمه ساخناً."
    }
};

recipesData.plat.tajineLegumes = {
    country: "maroc",
    image: "images/tajine-legumes.jpg",
    fr: {
        title: "Tajine marocain aux légumes",
        equipment: ["1 tajine"],
        ingredients: [
            "Carottes",
            "Pommes de terre",
            "Courgettes",
            "Pois chiches cuits",
            "Oignon",
            "Huile d’olive",
            "Cumin",
            "Curcuma",
            "Sel"
        ],
        preparation:
            "1. Mettre l’oignon et l’huile dans le tajine.\n" +
            "2. Ajouter les légumes.\n" +
            "3. Ajouter les épices.\n" +
            "4. Ajouter un verre d’eau.\n" +
            "5. Cuire à feu doux 45 minutes.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Vegetable Moroccan Tagine",
        equipment: ["1 tagine"],
        ingredients: [
            "Carrots",
            "Potatoes",
            "Zucchini",
            "Cooked chickpeas",
            "Onion",
            "Olive oil",
            "Cumin",
            "Turmeric",
            "Salt"
        ],
        preparation:
            "1. Add onion and oil to tagine.\n" +
            "2. Add vegetables.\n" +
            "3. Add spices.\n" +
            "4. Add water.\n" +
            "5. Simmer 45 minutes.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Groentetajine",
        equipment: ["1 tajine"],
        ingredients: [
            "Wortelen",
            "Aardappelen",
            "Courgette",
            "Kikkererwten",
            "Ui",
            "Olijfolie",
            "Komijn",
            "Kurkuma",
            "Zout"
        ],
        preparation:
            "1. Doe ui en olie in tajine.\n" +
            "2. Voeg groenten toe.\n" +
            "3. Voeg kruiden toe.\n" +
            "4. Voeg water toe.\n" +
            "5. Laat 45 minuten sudderen.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "طاجين الخضار المغربي",
        equipment: ["طاجين"],
        ingredients: [
            "جزر",
            "بطاطس",
            "كوسة",
            "حمص مطبوخ",
            "بصل",
            "زيت زيتون",
            "كمون",
            "كركم",
            "ملح"
        ],
        preparation:
            "1. ضع البصل والزيت في الطاجين.\n" +
            "2. أضف الخضار.\n" +
            "3. أضف التوابل.\n" +
            "4. أضف الماء.\n" +
            "5. اطهه 45 دقيقة.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.plat.tajineSardines = {
    country: "maroc",
    image: "images/tajine-sardines.jpg",
    fr: {
        title: "Tajine de sardines à la marocaine",
        equipment: ["1 tajine"],
        ingredients: [
            "500 g sardines hachées",
            "2 tomates",
            "2 gousses d’ail",
            "Coriandre",
            "Paprika",
            "Cumin",
            "Huile d’olive",
            "Sel"
        ],
        preparation:
            "1. Mélanger sardines, ail et épices.\n" +
            "2. Former des boulettes.\n" +
            "3. Préparer sauce tomate.\n" +
            "4. Ajouter les boulettes.\n" +
            "5. Cuire 25 minutes.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Moroccan Sardine Tagine",
        equipment: ["1 tagine"],
        ingredients: [
            "500 g chopped sardines",
            "2 tomatoes",
            "2 garlic cloves",
            "Coriander",
            "Paprika",
            "Cumin",
            "Olive oil",
            "Salt"
        ],
        preparation:
            "1. Mix sardines with spices.\n" +
            "2. Shape balls.\n" +
            "3. Prepare tomato sauce.\n" +
            "4. Add sardines.\n" +
            "5. Cook 25 minutes.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Sardinetajine",
        equipment: ["1 tajine"],
        ingredients: [
            "500 g sardines",
            "2 tomaten",
            "2 teentjes knoflook",
            "Koriander",
            "Paprika",
            "Komijn",
            "Olijfolie",
            "Zout"
        ],
        preparation:
            "1. Meng sardines en kruiden.\n" +
            "2. Vorm balletjes.\n" +
            "3. Maak tomatensaus.\n" +
            "4. Voeg sardines toe.\n" +
            "5. Laat 25 minuten koken.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "طاجين السردين المغربي",
        equipment: ["طاجين"],
        ingredients: [
            "500 غ سردين مفروم",
            "طماطم",
            "ثوم",
            "كزبرة",
            "بابريكا",
            "كمون",
            "زيت زيتون",
            "ملح"
        ],
        preparation:
            "1. اخلط السردين مع التوابل.\n" +
            "2. شكّل كرات.\n" +
            "3. حضّر صلصة الطماطم.\n" +
            "4. أضف السردين.\n" +
            "5. اطهه 25 دقيقة.\n" +
            "6. قدّم ساخنًا."
    }
};
recipesData.plat.couscousPoulet = {
    country: "maroc",
    image: "images/couscous-poulet.jpg",
    fr: {
        title: "Couscous marocain au poulet et légumes",
        equipment: ["1 couscoussier ou grande marmite", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "1 poulet découpé",
            "500 g semoule moyenne",
            "3 carottes",
            "2 courgettes",
            "2 navets",
            "1 oignon",
            "Pois chiches cuits",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "1 cuillère à café poivre",
            "Sel",
            "Eau chaude"
        ],
        preparation:
            "1. Mettre l’huile dans la marmite et faire revenir l’oignon émincé.\n" +
            "2. Ajouter le poulet, le sel et les épices. Bien mélanger.\n" +
            "3. Couvrir d’eau chaude et laisser cuire 30 minutes à feu moyen.\n" +
            "4. Ajouter les carottes et navets coupés.\n" +
            "5. Après 20 minutes, ajouter les courgettes et pois chiches.\n" +
            "6. Préparer la semoule : verser dans un saladier, arroser d’un peu d’eau salée, mélanger.\n" +
            "7. Mettre la semoule dans le haut du couscoussier et cuire à la vapeur 20 minutes.\n" +
            "8. Retirer, arroser légèrement d’eau, égrainer, puis cuire encore 15 minutes.\n" +
            "9. Servir la semoule, disposer le poulet et les légumes, arroser de bouillon."
    },
    en: {
        title: "Moroccan Couscous with Chicken and Vegetables",
        equipment: ["1 couscoussier or large pot", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "1 chicken, cut",
            "500 g medium couscous",
            "3 carrots",
            "2 zucchinis",
            "2 turnips",
            "1 onion",
            "Cooked chickpeas",
            "4 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "1 teaspoon pepper",
            "Salt",
            "Hot water"
        ],
        preparation:
            "1. Heat oil in the pot and sauté sliced onion.\n" +
            "2. Add chicken, salt, and spices. Mix well.\n" +
            "3. Cover with hot water and cook 30 minutes over medium heat.\n" +
            "4. Add chopped carrots and turnips.\n" +
            "5. After 20 minutes, add zucchinis and chickpeas.\n" +
            "6. Prepare couscous: put in a bowl, sprinkle with salted water, mix.\n" +
            "7. Place couscous in the top of the couscoussier and steam 20 minutes.\n" +
            "8. Remove, sprinkle lightly with water, fluff, and steam another 15 minutes.\n" +
            "9. Serve couscous, arrange chicken and vegetables, pour broth on top."
    },
    nl: {
        title: "Marokkaanse couscous met kip en groenten",
        equipment: ["1 couscouspan of grote pot", "1 kom", "1 houten lepel"],
        ingredients: [
            "1 kip, in stukken",
            "500 g middelgrote couscous",
            "3 wortelen",
            "2 courgettes",
            "2 pastinaken",
            "1 ui",
            "Gekookte kikkererwten",
            "4 eetlepels olijfolie",
            "1 theelepel gember",
            "1 theelepel kurkuma",
            "1 theelepel peper",
            "Zout",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie in de pot en fruit de ui.\n" +
            "2. Voeg kip, zout en kruiden toe. Goed mengen.\n" +
            "3. Voeg heet water toe en kook 30 minuten op middelhoog vuur.\n" +
            "4. Voeg gesneden wortelen en pastinaken toe.\n" +
            "5. Na 20 minuten, voeg courgettes en kikkererwten toe.\n" +
            "6. Bereid de couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "7. Doe de couscous in de bovenkant van de couscouspan en stoom 20 minuten.\n" +
            "8. Haal eruit, besprenkel licht met water, maak los en stoom nog 15 minuten.\n" +
            "9. Serveer couscous, leg kip en groenten erop, giet bouillon over."
    },
    ar: {
        title: "كسكس مغربي بالدجاج والخضار",
        equipment: ["طنجرة الكسكس أو قدر كبير", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "دجاجة مقطعة",
            "500 غ سميد متوسط",
            "3 جزر",
            "2 كوسة",
            "2 لفت",
            "بصلة",
            "حمص مطبوخ",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة زنجبيل",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة فلفل",
            "ملح",
            "ماء ساخن"
        ],
        preparation:
            "1. ضع الزيت في القدر وشوّح البصل المقطع.\n" +
            "2. أضف الدجاج والملح والتوابل، وامزج جيداً.\n" +
            "3. غطِّ بالماء الساخن واتركه يطبخ 30 دقيقة على نار متوسطة.\n" +
            "4. أضف الجزر واللفت المقطع.\n" +
            "5. بعد 20 دقيقة، أضف الكوسة والحمص.\n" +
            "6. حضّر السميد: ضع في وعاء، رش القليل من الماء المملح وامزج.\n" +
            "7. ضع السميد في الجزء العلوي من طنجرة الكسكس واطهه على البخار 20 دقيقة.\n" +
            "8. أخرجه، رش عليه قليل من الماء، فكه، واطهه مرة أخرى 15 دقيقة.\n" +
            "9. قدم الكسكس وضع الدجاج والخضار، واسكب المرق فوقه."
    }
};
recipesData.plat.couscousBoeuf = {
    country: "maroc",
    image: "images/couscous-boeuf.jpg",
    fr: {
        title: "Couscous marocain au bœuf et légumes",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "800 g de bœuf en morceaux",
            "500 g de semoule moyenne",
            "3 carottes",
            "2 courgettes",
            "1 chou blanc",
            "2 navets",
            "Pois chiches cuits",
            "1 oignon",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "1 cuillère à café poivre",
            "Sel",
            "Eau chaude"
        ],
        preparation:
            "1. Faire chauffer l’huile dans la marmite et faire revenir l’oignon émincé.\n" +
            "2. Ajouter les morceaux de bœuf et les épices. Bien mélanger.\n" +
            "3. Couvrir d’eau chaude et laisser cuire 45 minutes à feu moyen.\n" +
            "4. Ajouter les carottes et navets coupés.\n" +
            "5. Après 20 minutes, ajouter le chou et les courgettes.\n" +
            "6. Ajouter les pois chiches 10 minutes avant la fin de la cuisson.\n" +
            "7. Préparer la semoule : mettre dans un saladier, arroser d’eau salée, mélanger.\n" +
            "8. Cuire la semoule à la vapeur 20 minutes, égrainer, arroser légèrement d’eau et cuire encore 15 minutes.\n" +
            "9. Servir la semoule chaude, disposer le bœuf et les légumes, arroser de bouillon."
    },
    en: {
        title: "Moroccan Couscous with Beef and Vegetables",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "800 g beef chunks",
            "500 g medium couscous",
            "3 carrots",
            "2 zucchinis",
            "1 white cabbage",
            "2 turnips",
            "Cooked chickpeas",
            "1 onion",
            "4 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "1 teaspoon pepper",
            "Salt",
            "Hot water"
        ],
        preparation:
            "1. Heat oil in the pot and sauté sliced onion.\n" +
            "2. Add beef and spices. Mix well.\n" +
            "3. Cover with hot water and cook 45 minutes over medium heat.\n" +
            "4. Add chopped carrots and turnips.\n" +
            "5. After 20 minutes, add cabbage and zucchinis.\n" +
            "6. Add chickpeas 10 minutes before end of cooking.\n" +
            "7. Prepare couscous: place in a bowl, sprinkle with salted water, mix.\n" +
            "8. Steam couscous 20 minutes, fluff, sprinkle lightly with water, steam another 15 minutes.\n" +
            "9. Serve couscous, arrange beef and vegetables, pour broth over."
    },
    nl: {
        title: "Marokkaanse couscous met rundvlees en groenten",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "800 g rundvlees in stukken",
            "500 g middelgrote couscous",
            "3 wortelen",
            "2 courgettes",
            "1 witte kool",
            "2 pastinaken",
            "Gekookte kikkererwten",
            "1 ui",
            "4 eetlepels olijfolie",
            "1 theelepel gember",
            "1 theelepel kurkuma",
            "1 theelepel peper",
            "Zout",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie in de pot en fruit de ui.\n" +
            "2. Voeg rundvlees en kruiden toe, meng goed.\n" +
            "3. Voeg heet water toe en kook 45 minuten op middelhoog vuur.\n" +
            "4. Voeg gesneden wortelen en pastinaken toe.\n" +
            "5. Na 20 minuten, voeg kool en courgettes toe.\n" +
            "6. Voeg kikkererwten 10 minuten voor het einde toe.\n" +
            "7. Bereid couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "8. Stoom couscous 20 minuten, maak los, besprenkel licht met water, stoom nog 15 minuten.\n" +
            "9. Serveer couscous, leg rundvlees en groenten erop, giet bouillon over."
    },
    ar: {
        title: "كسكس مغربي باللحم البقري والخضار",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "800 غ لحم بقر مقطع",
            "500 غ سميد متوسط",
            "3 جزر",
            "2 كوسة",
            "1 ملفوف أبيض",
            "2 لفت",
            "حمص مطبوخ",
            "1 بصلة",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة زنجبيل",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة فلفل",
            "ملح",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الزيت في القدر وشوّح البصل المقطع.\n" +
            "2. أضف قطع اللحم والتوابل وامزج جيداً.\n" +
            "3. غط بالماء الساخن واطبخ 45 دقيقة على نار متوسطة.\n" +
            "4. أضف الجزر واللفت المقطع.\n" +
            "5. بعد 20 دقيقة، أضف الملفوف والكوسة.\n" +
            "6. أضف الحمص قبل 10 دقائق من نهاية الطهي.\n" +
            "7. حضّر السميد: ضع في وعاء، رش الماء المملح وامزج.\n" +
            "8. اطهِ السميد على البخار 20 دقيقة، فكه، رش قليل من الماء، واطهِ مرة أخرى 15 دقيقة.\n" +
            "9. قدّم الكسكس، ضع اللحم والخضار، واسكب المرق فوقه."
    }
};
recipesData.plat.couscousLegumes = {
    country: "maroc",
    image: "images/couscous-legumes.jpg",
    fr: {
        title: "Couscous marocain aux sept légumes",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "500 g semoule moyenne",
            "2 carottes",
            "2 courgettes",
            "1 navet",
            "200 g potiron",
            "1/2 chou",
            "Pois chiches cuits",
            "1 oignon",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café curcuma",
            "1 cuillère à café gingembre",
            "1 cuillère à café poivre",
            "Sel",
            "Eau chaude"
        ],
        preparation:
            "1. Faire chauffer l’huile dans la marmite et faire revenir l’oignon émincé.\n" +
            "2. Ajouter les épices et un peu d’eau chaude.\n" +
            "3. Ajouter les légumes durs d’abord (carottes, navets, potiron), cuire 20 minutes.\n" +
            "4. Ajouter les légumes tendres (courgettes, chou) et les pois chiches.\n" +
            "5. Cuire encore 20 minutes à feu moyen.\n" +
            "6. Préparer la semoule : mettre dans un saladier, arroser d’eau salée, mélanger.\n" +
            "7. Cuire la semoule à la vapeur 20 minutes, égrainer, arroser légèrement d’eau et cuire encore 15 minutes.\n" +
            "8. Servir la semoule chaude avec les légumes et le bouillon."
    },
    en: {
        title: "Moroccan Couscous with Seven Vegetables",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "500 g medium couscous",
            "2 carrots",
            "2 zucchinis",
            "1 turnip",
            "200 g pumpkin",
            "1/2 cabbage",
            "Cooked chickpeas",
            "1 onion",
            "4 tablespoons olive oil",
            "1 teaspoon turmeric",
            "1 teaspoon ginger",
            "1 teaspoon pepper",
            "Salt",
            "Hot water"
        ],
        preparation:
            "1. Heat oil in the pot and sauté onion.\n" +
            "2. Add spices and some hot water.\n" +
            "3. Add hard vegetables first (carrots, turnip, pumpkin), cook 20 minutes.\n" +
            "4. Add soft vegetables (zucchinis, cabbage) and chickpeas.\n" +
            "5. Cook another 20 minutes over medium heat.\n" +
            "6. Prepare couscous: place in a bowl, sprinkle with salted water, mix.\n" +
            "7. Steam couscous 20 minutes, fluff, sprinkle lightly with water, steam another 15 minutes.\n" +
            "8. Serve couscous with vegetables and broth."
    },
    nl: {
        title: "Marokkaanse couscous met zeven groenten",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "500 g middelgrote couscous",
            "2 wortelen",
            "2 courgettes",
            "1 pastinaak",
            "200 g pompoen",
            "1/2 kool",
            "Gekookte kikkererwten",
            "1 ui",
            "4 eetlepels olijfolie",
            "1 theelepel kurkuma",
            "1 theelepel gember",
            "1 theelepel peper",
            "Zout",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie in de pot en fruit de ui.\n" +
            "2. Voeg kruiden en wat heet water toe.\n" +
            "3. Voeg harde groenten eerst toe (wortelen, pastinaak, pompoen), kook 20 minuten.\n" +
            "4. Voeg zachte groenten (courgettes, kool) en kikkererwten toe.\n" +
            "5. Kook nog 20 minuten op middelhoog vuur.\n" +
            "6. Bereid couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "7. Stoom couscous 20 minuten, maak los, besprenkel licht met water, stoom nog 15 minuten.\n" +
            "8. Serveer couscous met groenten en bouillon."
    },
    ar: {
        title: "كسكس مغربي بسبعة خضار",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "500 غ سميد متوسط",
            "2 جزر",
            "2 كوسة",
            "1 لفت",
            "200 غ يقطين",
            "نصف ملفوف",
            "حمص مطبوخ",
            "1 بصلة",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة زنجبيل",
            "1 ملعقة صغيرة فلفل",
            "ملح",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الزيت في القدر وشوّح البصل.\n" +
            "2. أضف التوابل والقليل من الماء الساخن.\n" +
            "3. أضف الخضار الصلبة أولاً (جزر، لفت، يقطين) واطبخ 20 دقيقة.\n" +
            "4. أضف الخضار الطرية (كوسة، ملفوف) والحمص.\n" +
            "5. اطبخ 20 دقيقة إضافية على نار متوسطة.\n" +
            "6. حضّر السميد: ضع في وعاء، رش الماء المملح وامزج.\n" +
            "7. اطهِ السميد على البخار 20 دقيقة، فكه، رش قليل من الماء، واطهه مرة أخرى 15 دقيقة.\n" +
            "8. قدم الكسكس مع الخضار والمرق."
    }
};
recipesData.plat.couscousRoyal = {
    country: "maroc",
    image: "images/couscous-royal.jpg",
    fr: {
        title: "Couscous royal marocain",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "400 g de poulet en morceaux",
            "400 g de bœuf en morceaux",
            "6 merguez",
            "500 g de semoule moyenne",
            "2 carottes",
            "2 courgettes",
            "1/2 chou",
            "2 navets",
            "Pois chiches cuits",
            "1 oignon",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "1 cuillère à café poivre",
            "Sel",
            "Eau chaude"
        ],
        preparation:
            "1. Faire chauffer l’huile dans la marmite et faire revenir l’oignon émincé.\n" +
            "2. Ajouter le poulet et le bœuf, saler et ajouter les épices, mélanger.\n" +
            "3. Couvrir d’eau chaude et cuire 30 minutes.\n" +
            "4. Ajouter les carottes et navets, cuire 15 minutes.\n" +
            "5. Ajouter le chou et les courgettes, cuire 15 minutes.\n" +
            "6. Ajouter les pois chiches et disposer les merguez sur le dessus, cuire 10 minutes.\n" +
            "7. Préparer la semoule : mettre dans un saladier, arroser d’eau salée, mélanger.\n" +
            "8. Cuire la semoule à la vapeur 20 minutes, égrainer, arroser légèrement d’eau, cuire encore 15 minutes.\n" +
            "9. Servir la semoule chaude, disposer viandes et légumes, arroser généreusement de bouillon."
    },
    en: {
        title: "Moroccan Royal Couscous",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "400 g chicken pieces",
            "400 g beef chunks",
            "6 merguez sausages",
            "500 g medium couscous",
            "2 carrots",
            "2 zucchinis",
            "1/2 cabbage",
            "2 turnips",
            "Cooked chickpeas",
            "1 onion",
            "4 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "1 teaspoon pepper",
            "Salt",
            "Hot water"
        ],
        preparation:
            "1. Heat oil in the pot and sauté sliced onion.\n" +
            "2. Add chicken and beef, salt and spices, mix well.\n" +
            "3. Cover with hot water and cook 30 minutes.\n" +
            "4. Add carrots and turnips, cook 15 minutes.\n" +
            "5. Add cabbage and zucchinis, cook 15 minutes.\n" +
            "6. Add chickpeas and place merguez on top, cook 10 minutes.\n" +
            "7. Prepare couscous: put in a bowl, sprinkle with salted water, mix.\n" +
            "8. Steam couscous 20 minutes, fluff, sprinkle lightly with water, steam another 15 minutes.\n" +
            "9. Serve couscous hot, arrange meats and vegetables, pour generous broth on top."
    },
    nl: {
        title: "Marokkaanse koninklijke couscous",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "400 g kipstukken",
            "400 g rundvlees in stukken",
            "6 merguez worstjes",
            "500 g middelgrote couscous",
            "2 wortelen",
            "2 courgettes",
            "1/2 kool",
            "2 pastinaken",
            "Gekookte kikkererwten",
            "1 ui",
            "4 eetlepels olijfolie",
            "1 theelepel gember",
            "1 theelepel kurkuma",
            "1 theelepel peper",
            "Zout",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie in de pan en fruit de ui.\n" +
            "2. Voeg kip en rundvlees toe, zout en kruiden, meng goed.\n" +
            "3. Voeg heet water toe en kook 30 minuten.\n" +
            "4. Voeg wortelen en pastinaken toe, kook 15 minuten.\n" +
            "5. Voeg kool en courgettes toe, kook 15 minuten.\n" +
            "6. Voeg kikkererwten toe en leg de merguez erop, kook 10 minuten.\n" +
            "7. Bereid couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "8. Stoom couscous 20 minuten, maak los, besprenkel licht met water, stoom nog 15 minuten.\n" +
            "9. Serveer couscous heet, leg vlees en groenten erop, giet royaal bouillon over."
    },
    ar: {
        title: "كسكس ملكي مغربي",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "400 غ قطع دجاج",
            "400 غ لحم بقري مقطع",
            "6 سجق ميرغيز",
            "500 غ سميد متوسط",
            "2 جزر",
            "2 كوسة",
            "نصف ملفوف",
            "2 لفت",
            "حمص مطبوخ",
            "1 بصلة",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة زنجبيل",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة فلفل",
            "ملح",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الزيت في القدر وشوّح البصل المقطع.\n" +
            "2. أضف الدجاج واللحم، الملح والتوابل، وامزج جيداً.\n" +
            "3. غط بالماء الساخن واطبخ 30 دقيقة.\n" +
            "4. أضف الجزر واللفت واطبخ 15 دقيقة.\n" +
            "5. أضف الملفوف والكوسة واطبخ 15 دقيقة.\n" +
            "6. أضف الحمص وضع الميرغيز فوقه، اطبخ 10 دقائق.\n" +
            "7. حضّر السميد: ضع في وعاء، رش الماء المملح وامزج.\n" +
            "8. اطهِ السميد على البخار 20 دقيقة، فكه، رش قليل من الماء، واطهه مرة أخرى 15 دقيقة.\n" +
            "9. قدم الكسكس ساخناً، ضع اللحم والخضار، واسكب المرق بسخاء."
    }
};
recipesData.plat.couscousPoisson = {
    country: "maroc",
    image: "images/couscous-poisson.jpg",
    fr: {
        title: "Couscous marocain au poisson",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "500 g de filet de poisson blanc ferme (cabillaud, merlan, etc.)",
            "500 g de semoule moyenne",
            "2 carottes",
            "2 courgettes",
            "1/2 chou",
            "1 oignon",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café paprika",
            "1 cuillère à café curcuma",
            "1 cuillère à café gingembre",
            "Sel et poivre",
            "Eau chaude"
        ],
        preparation:
            "1. Chauffer l’huile dans la marmite et faire revenir l’oignon émincé.\n" +
            "2. Ajouter les épices, sel et poivre, mélanger.\n" +
            "3. Couvrir d’eau chaude et laisser mijoter 10 minutes.\n" +
            "4. Ajouter les carottes et navets, cuire 10 minutes.\n" +
            "5. Ajouter le chou et les courgettes, cuire 10 minutes.\n" +
            "6. Ajouter le poisson sur le dessus, couvrir et cuire 10 à 15 minutes selon épaisseur.\n" +
            "7. Préparer la semoule : mettre dans un saladier, arroser d’eau salée, mélanger.\n" +
            "8. Cuire la semoule à la vapeur 20 minutes, égrainer, arroser légèrement d’eau et cuire encore 15 minutes.\n" +
            "9. Servir la semoule chaude avec le poisson et les légumes, arroser de bouillon."
    },
    en: {
        title: "Moroccan Couscous with Fish",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "500 g firm white fish fillets (cod, whiting, etc.)",
            "500 g medium couscous",
            "2 carrots",
            "2 zucchinis",
            "1/2 cabbage",
            "1 onion",
            "4 tablespoons olive oil",
            "1 teaspoon paprika",
            "1 teaspoon turmeric",
            "1 teaspoon ginger",
            "Salt and pepper",
            "Hot water"
        ],
        preparation:
            "1. Heat oil in the pot and sauté sliced onion.\n" +
            "2. Add spices, salt and pepper, mix well.\n" +
            "3. Cover with hot water and simmer 10 minutes.\n" +
            "4. Add carrots and turnips, cook 10 minutes.\n" +
            "5. Add cabbage and zucchinis, cook 10 minutes.\n" +
            "6. Place fish on top, cover and cook 10–15 minutes depending on thickness.\n" +
            "7. Prepare couscous: put in a bowl, sprinkle with salted water, mix.\n" +
            "8. Steam couscous 20 minutes, fluff, sprinkle lightly with water, steam another 15 minutes.\n" +
            "9. Serve couscous hot with fish and vegetables, pour broth on top."
    },
    nl: {
        title: "Marokkaanse couscous met vis",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "500 g stevige witte visfilets (kabeljauw, wijting, enz.)",
            "500 g middelgrote couscous",
            "2 wortelen",
            "2 courgettes",
            "1/2 kool",
            "1 ui",
            "4 eetlepels olijfolie",
            "1 theelepel paprika",
            "1 theelepel kurkuma",
            "1 theelepel gember",
            "Zout en peper",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie in de pan en fruit de ui.\n" +
            "2. Voeg kruiden, zout en peper toe, meng goed.\n" +
            "3. Voeg heet water toe en laat 10 minuten sudderen.\n" +
            "4. Voeg wortelen en pastinaken toe, kook 10 minuten.\n" +
            "5. Voeg kool en courgettes toe, kook 10 minuten.\n" +
            "6. Leg de vis erop, dek af en kook 10–15 minuten afhankelijk van de dikte.\n" +
            "7. Bereid couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "8. Stoom couscous 20 minuten, maak los, besprenkel licht met water, stoom nog 15 minuten.\n" +
            "9. Serveer couscous heet met vis en groenten, giet bouillon erover."
    },
    ar: {
        title: "كسكس مغربي بالسمك",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "500 غ فيليه سمك أبيض متماسك (قد، ميرلان، إلخ)",
            "500 غ سميد متوسط",
            "2 جزر",
            "2 كوسة",
            "نصف ملفوف",
            "بصلة",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة فلفل حلو",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة زنجبيل",
            "ملح وفلفل",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الزيت في القدر وشوّح البصل المقطع.\n" +
            "2. أضف التوابل والملح والفلفل وامزج جيداً.\n" +
            "3. غطِّ بالماء الساخن واتركه يغلي 10 دقائق.\n" +
            "4. أضف الجزر واللفت، اطبخ 10 دقائق.\n" +
            "5. أضف الملفوف والكوسة، اطبخ 10 دقائق.\n" +
            "6. ضع السمك على الوجه، غطّ واتركه يطبخ 10–15 دقيقة حسب السمك.\n" +
            "7. حضّر السميد: ضع في وعاء، رش الماء المملح وامزج.\n" +
            "8. اطهِ السميد على البخار 20 دقيقة، فكه، رش قليل من الماء، واطهه مرة أخرى 15 دقيقة.\n" +
            "9. قدم الكسكس ساخناً مع السمك والخضار واسكب المرق فوقه."
    }
};
recipesData.plat.couscousFruitsDeMer = {
    country: "maroc",
    image: "images/couscous-fruits-de-mer.jpg",
    fr: {
        title: "Couscous marocain aux fruits de mer",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "300 g crevettes décortiquées",
            "300 g calamars coupés en rondelles",
            "300 g moules nettoyées",
            "500 g semoule moyenne",
            "2 carottes",
            "2 courgettes",
            "1/2 chou",
            "1 oignon",
            "4 cuillères à soupe huile d’olive",
            "1 cuillère à café paprika",
            "1 cuillère à café curcuma",
            "1 cuillère à café gingembre",
            "Sel et poivre",
            "Eau chaude"
        ],
        preparation:
            "1. Faire chauffer l’huile et faire revenir l’oignon émincé.\n" +
            "2. Ajouter les épices et un peu d’eau chaude, cuire 5 minutes.\n" +
            "3. Ajouter carottes et navets, cuire 10 minutes.\n" +
            "4. Ajouter courgettes et chou, cuire 10 minutes.\n" +
            "5. Ajouter les fruits de mer sur le dessus, couvrir et cuire 8 à 10 minutes.\n" +
            "6. Préparer la semoule : mettre dans un saladier, arroser d’eau salée, mélanger.\n" +
            "7. Cuire la semoule à la vapeur 20 minutes, égrainer, arroser légèrement d’eau, cuire encore 15 minutes.\n" +
            "8. Servir la semoule chaude avec les fruits de mer et les légumes, arroser de bouillon."
    },
    en: {
        title: "Moroccan Couscous with Seafood",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "300 g peeled shrimp",
            "300 g squid rings",
            "300 g cleaned mussels",
            "500 g medium couscous",
            "2 carrots",
            "2 zucchinis",
            "1/2 cabbage",
            "1 onion",
            "4 tablespoons olive oil",
            "1 teaspoon paprika",
            "1 teaspoon turmeric",
            "1 teaspoon ginger",
            "Salt and pepper",
            "Hot water"
        ],
        preparation:
            "1. Heat oil and sauté sliced onion.\n" +
            "2. Add spices and some hot water, cook 5 minutes.\n" +
            "3. Add carrots and turnips, cook 10 minutes.\n" +
            "4. Add zucchinis and cabbage, cook 10 minutes.\n" +
            "5. Place seafood on top, cover and cook 8–10 minutes.\n" +
            "6. Prepare couscous: put in a bowl, sprinkle with salted water, mix.\n" +
            "7. Steam couscous 20 minutes, fluff, sprinkle lightly with water, steam another 15 minutes.\n" +
            "8. Serve couscous hot with seafood and vegetables, pour broth on top."
    },
    nl: {
        title: "Marokkaanse couscous met zeevruchten",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "300 g gepelde garnalen",
            "300 g in ringen gesneden inktvis",
            "300 g schoongemaakte mosselen",
            "500 g middelgrote couscous",
            "2 wortelen",
            "2 courgettes",
            "1/2 kool",
            "1 ui",
            "4 eetlepels olijfolie",
            "1 theelepel paprika",
            "1 theelepel kurkuma",
            "1 theelepel gember",
            "Zout en peper",
            "Heet water"
        ],
        preparation:
            "1. Verhit olie en fruit de ui.\n" +
            "2. Voeg kruiden en wat heet water toe, kook 5 minuten.\n" +
            "3. Voeg wortelen en pastinaken toe, kook 10 minuten.\n" +
            "4. Voeg courgettes en kool toe, kook 10 minuten.\n" +
            "5. Leg zeevruchten erop, dek af en kook 8–10 minuten.\n" +
            "6. Bereid couscous: doe in een kom, besprenkel met gezouten water, meng.\n" +
            "7. Stoom couscous 20 minuten, maak los, besprenkel licht met water, stoom nog 15 minuten.\n" +
            "8. Serveer couscous heet met zeevruchten en groenten, giet bouillon erover."
    },
    ar: {
        title: "كسكس مغربي بالمأكولات البحرية",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "300 غ روبيان مقشر",
            "300 غ حلقات كاليماري",
            "300 غ بلح البحر منظف",
            "500 غ سميد متوسط",
            "2 جزر",
            "2 كوسة",
            "نصف ملفوف",
            "بصلة",
            "4 ملاعق زيت زيتون",
            "1 ملعقة صغيرة فلفل حلو",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة زنجبيل",
            "ملح وفلفل",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الزيت وشوّح البصل المقطع.\n" +
            "2. أضف التوابل والقليل من الماء الساخن، اطبخ 5 دقائق.\n" +
            "3. أضف الجزر واللفت، اطبخ 10 دقائق.\n" +
            "4. أضف الكوسة والملفوف، اطبخ 10 دقائق.\n" +
            "5. ضع المأكولات البحرية على الوجه، غطّ واطبخ 8–10 دقائق.\n" +
            "6. حضّر السميد: ضع في وعاء، رش الماء المملح وامزج.\n" +
            "7. اطهِ السميد على البخار 20 دقيقة، فكه، رش قليل من الماء، واطهه مرة أخرى 15 دقيقة.\n" +
            "8. قدم الكسكس ساخناً مع المأكولات البحرية والخضار واسكب المرق فوقه."
    }
};
recipesData.plat.couscousSucre = {
    country: "maroc",
    image: "images/couscous-sucre.jpg",
    fr: {
        title: "Couscous sucré marocain aux raisins et amandes",
        equipment: ["1 couscoussier", "1 saladier", "1 cuillère en bois"],
        ingredients: [
            "500 g semoule moyenne",
            "100 g raisins secs",
            "50 g amandes effilées",
            "4 cuillères à soupe sucre",
            "1 cuillère à café cannelle",
            "1 cuillère à soupe huile d’olive",
            "Eau chaude"
        ],
        preparation:
            "1. Faire chauffer la semoule à la vapeur 20 minutes, égrainer.\n" +
            "2. Arroser légèrement d’eau, cuire encore 15 minutes.\n" +
            "3. Dans une petite poêle, griller les amandes sans huile.\n" +
            "4. Mélanger la semoule avec sucre, cannelle, raisins secs et amandes.\n" +
            "5. Servir tiède ou froid, en dessert."
    },
    en: {
        title: "Moroccan Sweet Couscous with Raisins and Almonds",
        equipment: ["1 couscoussier", "1 bowl", "1 wooden spoon"],
        ingredients: [
            "500 g medium couscous",
            "100 g raisins",
            "50 g sliced almonds",
            "4 tablespoons sugar",
            "1 teaspoon cinnamon",
            "1 tablespoon olive oil",
            "Hot water"
        ],
        preparation:
            "1. Steam couscous 20 minutes, fluff.\n" +
            "2. Sprinkle lightly with water, steam another 15 minutes.\n" +
            "3. In a small pan, toast almonds without oil.\n" +
            "4. Mix couscous with sugar, cinnamon, raisins, and almonds.\n" +
            "5. Serve warm or cold as dessert."
    },
    nl: {
        title: "Marokkaanse zoete couscous met rozijnen en amandelen",
        equipment: ["1 couscouspan", "1 kom", "1 houten lepel"],
        ingredients: [
            "500 g middelgrote couscous",
            "100 g rozijnen",
            "50 g geschaafde amandelen",
            "4 eetlepels suiker",
            "1 theelepel kaneel",
            "1 eetlepel olijfolie",
            "Heet water"
        ],
        preparation:
            "1. Stoom couscous 20 minuten, maak los.\n" +
            "2. Besprenkel licht met water, stoom nog 15 minuten.\n" +
            "3. Rooster de amandelen in een kleine pan zonder olie.\n" +
            "4. Meng couscous met suiker, kaneel, rozijnen en amandelen.\n" +
            "5. Serveer warm of koud als dessert."
    },
    ar: {
        title: "كسكس مغربي حلو بالزبيب واللوز",
        equipment: ["طنجرة الكسكس", "وعاء", "ملعقة خشبية"],
        ingredients: [
            "500 غ سميد متوسط",
            "100 غ زبيب",
            "50 غ لوز مقطع شرائح",
            "4 ملاعق سكر",
            "1 ملعقة صغيرة قرفة",
            "1 ملعقة زيت زيتون",
            "ماء ساخن"
        ],
        preparation:
            "1. اطهِ السميد على البخار 20 دقيقة، فكه.\n" +
            "2. رش عليه قليل من الماء، اطهه مرة أخرى 15 دقيقة.\n" +
            "3. في مقلاة صغيرة، حمّص اللوز بدون زيت.\n" +
            "4. امزج السميد مع السكر والقرفة والزبيب واللوز.\n" +
            "5. قدّم دافئاً أو بارداً كحلوى."
    }
};
recipesData.plat.pastillaPoulet = {
    country: "maroc",
    image: "images/pastilla-poulet.jpg",
    fr: {
        title: "Pastilla au poulet",
        equipment: ["1 poêle", "1 bol", "1 pinceau", "1 couteau", "1 plat allant au four"],
        ingredients: [
            "500 g de poulet désossé et coupé en morceaux",
            "6 feuilles de pâte filo",
            "1 oignon",
            "50 g amandes effilées",
            "2 cuillères à soupe sucre",
            "1 cuillère à café cannelle",
            "3 cuillères à soupe huile d’olive",
            "Sel et poivre",
            "1 jaune d’œuf pour la dorure"
        ],
        preparation:
            "1. Chauffer l’huile dans une poêle et faire revenir l’oignon émincé.\n" +
            "2. Ajouter le poulet, saler, poivrer et cuire jusqu’à ce qu’il soit tendre.\n" +
            "3. Faire griller les amandes dans une poêle séparée, puis les hacher et mélanger avec sucre et cannelle.\n" +
            "4. Préchauffer le four à 180°C.\n" +
            "5. Disposer une feuille de pâte filo dans le plat, badigeonner légèrement d’huile, répéter avec 2 autres feuilles.\n" +
            "6. Ajouter le poulet cuit au centre, puis les amandes sucrées.\n" +
            "7. Recouvrir avec les feuilles restantes, replier les bords et badigeonner de jaune d’œuf.\n" +
            "8. Cuire au four 25-30 minutes jusqu’à ce que la pastilla soit dorée et croustillante.\n" +
            "9. Servir chaud, saupoudré de sucre glace et cannelle."
    },
    en: {
        title: "Chicken Pastilla",
        equipment: ["1 pan", "1 bowl", "1 brush", "1 knife", "1 ovenproof dish"],
        ingredients: [
            "500 g boneless chicken pieces",
            "6 filo pastry sheets",
            "1 onion",
            "50 g sliced almonds",
            "2 tablespoons sugar",
            "1 teaspoon cinnamon",
            "3 tablespoons olive oil",
            "Salt and pepper",
            "1 egg yolk for glaze"
        ],
        preparation:
            "1. Heat oil in a pan and sauté sliced onion.\n" +
            "2. Add chicken, salt, pepper, and cook until tender.\n" +
            "3. Toast almonds in a separate pan, chop, and mix with sugar and cinnamon.\n" +
            "4. Preheat oven to 180°C.\n" +
            "5. Place one filo sheet in the dish, brush lightly with oil, repeat with 2 more sheets.\n" +
            "6. Place cooked chicken in the center, then the sugared almonds.\n" +
            "7. Cover with remaining sheets, fold edges, brush with egg yolk.\n" +
            "8. Bake 25-30 minutes until golden and crispy.\n" +
            "9. Serve hot, sprinkled with powdered sugar and cinnamon."
    },
    nl: {
        title: "Kip Pastilla",
        equipment: ["1 pan", "1 kom", "1 kwast", "1 mes", "1 ovenschaal"],
        ingredients: [
            "500 g kip zonder bot, in stukken",
            "6 filodeeg vellen",
            "1 ui",
            "50 g geschaafde amandelen",
            "2 eetlepels suiker",
            "1 theelepel kaneel",
            "3 eetlepels olijfolie",
            "Zout en peper",
            "1 eidooier voor glans"
        ],
        preparation:
            "1. Verhit olie in een pan en fruit de ui.\n" +
            "2. Voeg kip, zout en peper toe, kook tot mals.\n" +
            "3. Rooster de amandelen in een aparte pan, hak ze en meng met suiker en kaneel.\n" +
            "4. Verwarm de oven voor op 180°C.\n" +
            "5. Leg één filodeegvel in de schaal, bestrijk licht met olie, herhaal met 2 vellen.\n" +
            "6. Plaats de gekookte kip in het midden, vervolgens de suikeralmandelen.\n" +
            "7. Dek af met de resterende vellen, vouw de randen, bestrijk met eidooier.\n" +
            "8. Bak 25-30 minuten tot goudbruin en knapperig.\n" +
            "9. Serveer warm, bestrooid met poedersuiker en kaneel."
    },
    ar: {
        title: "البسطيلة بالدجاج",
        equipment: ["مقلاة", "وعاء", "فرشاة", "سكين", "صحن فرن"],
        ingredients: [
            "500 غ دجاج مقطع بدون عظم",
            "6 ورقات عجين فيلو",
            "1 بصلة",
            "50 غ لوز مقطع شرائح",
            "2 ملاعق كبيرة سكر",
            "1 ملعقة صغيرة قرفة",
            "3 ملاعق زيت زيتون",
            "ملح وفلفل",
            "1 صفار بيض للدهن"
        ],
        preparation:
            "1. سخّن الزيت في المقلاة وشوّح البصل المقطع.\n" +
            "2. أضف الدجاج، الملح والفلفل، واطبخ حتى ينضج.\n" +
            "3. حمّص اللوز في مقلاة منفصلة، افرمه وامزجه مع السكر والقرفة.\n" +
            "4. سخّن الفرن على 180°م.\n" +
            "5. ضع ورقة فيلو في الصحن، ادهنها بالزيت، كرر مع ورقتين أخريين.\n" +
            "6. ضع الدجاج المطبوخ في الوسط، ثم خليط اللوز بالسكر.\n" +
            "7. غطِّها بالورق المتبقي، اطوِ الحواف، وادهن بالصفار.\n" +
            "8. اخبز 25-30 دقيقة حتى تصبح ذهبية ومقرمشة.\n" +
            "9. قدمها ساخنة، مرشوشة بالسكر البودرة والقرفة."
    }
};
recipesData.plat.tanjia = {
    country: "maroc",
    image: "images/tanjia.jpg",
    fr: {
        title: "Tanjia marocaine",
        equipment: ["1 tajine ou plat en terre allant au four", "1 couteau", "1 planche à découper", "1 cuillère en bois"],
        ingredients: [
            "500 g de viande de bœuf ou d’agneau coupée en morceaux",
            "4 gousses d’ail, hachées",
            "2 cuillères à soupe huile d’olive",
            "1 cuillère à café gingembre",
            "1 cuillère à café curcuma",
            "1 cuillère à café paprika",
            "1/2 cuillère à café poivre noir",
            "Sel selon goût",
            "1 citron confit",
            "Quelques brins de coriandre fraîche",
            "Eau chaude"
        ],
        preparation:
            "1. Préchauffer le four à 160°C.\n" +
            "2. Dans le plat, mélanger la viande avec l’ail, les épices, l’huile, sel et poivre.\n" +
            "3. Ajouter le citron confit coupé en quartiers et un peu de coriandre.\n" +
            "4. Couvrir la viande avec un couvercle ou du papier aluminium.\n" +
            "5. Ajouter suffisamment d’eau pour couvrir légèrement la viande.\n" +
            "6. Cuire au four lentement pendant 3 à 4 heures, jusqu’à ce que la viande soit tendre et bien parfumée.\n" +
            "7. Vérifier de temps en temps et arroser avec le jus pour éviter que la viande ne se dessèche.\n" +
            "8. Servir chaud avec du pain marocain ou du riz."
    },
    en: {
        title: "Moroccan Tanjia",
        equipment: ["1 tagine or ovenproof clay dish", "1 knife", "1 cutting board", "1 wooden spoon"],
        ingredients: [
            "500 g beef or lamb chunks",
            "4 garlic cloves, chopped",
            "2 tablespoons olive oil",
            "1 teaspoon ginger",
            "1 teaspoon turmeric",
            "1 teaspoon paprika",
            "1/2 teaspoon black pepper",
            "Salt to taste",
            "1 preserved lemon",
            "Some fresh coriander sprigs",
            "Hot water"
        ],
        preparation:
            "1. Preheat oven to 160°C.\n" +
            "2. In the dish, mix meat with garlic, spices, oil, salt, and pepper.\n" +
            "3. Add preserved lemon cut into quarters and some coriander.\n" +
            "4. Cover meat with a lid or aluminum foil.\n" +
            "5. Add enough water to slightly cover the meat.\n" +
            "6. Slow-cook in the oven for 3 to 4 hours until meat is tender and flavorful.\n" +
            "7. Check occasionally and baste with juices to prevent drying.\n" +
            "8. Serve hot with Moroccan bread or rice."
    },
    nl: {
        title: "Marokkaanse Tanjia",
        equipment: ["1 tajine of ovenvaste aardewerken schaal", "1 mes", "1 snijplank", "1 houten lepel"],
        ingredients: [
            "500 g rund- of lamsvlees in stukken",
            "4 teentjes knoflook, gehakt",
            "2 eetlepels olijfolie",
            "1 theelepel gember",
            "1 theelepel kurkuma",
            "1 theelepel paprika",
            "1/2 theelepel zwarte peper",
            "Zout naar smaak",
            "1 ingemaakte citroen",
            "Enkele takjes verse koriander",
            "Heet water"
        ],
        preparation:
            "1. Verwarm de oven voor op 160°C.\n" +
            "2. Meng in de schaal het vlees met knoflook, kruiden, olie, zout en peper.\n" +
            "3. Voeg de in kwarten gesneden ingemaakte citroen en wat koriander toe.\n" +
            "4. Dek het vlees af met een deksel of aluminiumfolie.\n" +
            "5. Voeg genoeg water toe om het vlees licht te bedekken.\n" +
            "6. Laat 3 tot 4 uur langzaam garen in de oven tot het vlees mals en smaakvol is.\n" +
            "7. Controleer af en toe en bedruip met het vocht om uitdrogen te voorkomen.\n" +
            "8. Serveer heet met Marokkaans brood of rijst."
    },
    ar: {
        title: "طنجية مغربية",
        equipment: ["طنجرة طنجية أو وعاء فخاري للفرن", "سكين", "لوح تقطيع", "ملعقة خشبية"],
        ingredients: [
            "500 غ لحم بقر أو ضأن مقطع",
            "4 فصوص ثوم، مفرومة",
            "2 ملاعق زيت زيتون",
            "1 ملعقة صغيرة زنجبيل",
            "1 ملعقة صغيرة كركم",
            "1 ملعقة صغيرة فلفل أحمر",
            "1/2 ملعقة فلفل أسود",
            "ملح حسب الرغبة",
            "1 ليمون مصفّى",
            "بضع سيقان كزبرة طازجة",
            "ماء ساخن"
        ],
        preparation:
            "1. سخّن الفرن على 160°م.\n" +
            "2. في الوعاء، اخلط اللحم مع الثوم، التوابل، الزيت، الملح والفلفل.\n" +
            "3. أضف الليمون المصفّى مقطع إلى أرباع وبعض الكزبرة.\n" +
            "4. غطِ اللحم بغطاء أو بورق ألومنيوم.\n" +
            "5. أضف كمية كافية من الماء لتغطية اللحم قليلاً.\n" +
            "6. اطبخ ببطء في الفرن 3–4 ساعات حتى ينضج اللحم ويصبح عطرياً.\n" +
            "7. تحقق بين الحين والآخر وادهن بالمرق لمنع الجفاف.\n" +
            "8. قدّم ساخناً مع الخبز المغربي أو الأرز."
    }
};
recipesData.plat.keftaOeufs = {
    country: "maroc",
    image: "images/kefta-oeufs.jpg",
    fr: {
        title: "Kefta aux œufs",
        equipment: ["1 poêle", "1 bol", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "500 g de viande hachée (bœuf ou agneau)",
            "1 oignon finement haché",
            "2 gousses d’ail, hachées",
            "1 cuillère à café paprika",
            "1 cuillère à café cumin",
            "1/2 cuillère à café gingembre",
            "Sel et poivre",
            "4 œufs",
            "Quelques brins de coriandre fraîche",
            "2 cuillères à soupe huile d’olive"
        ],
        preparation:
            "1. Mélanger la viande avec l’oignon, l’ail, les épices, sel et poivre.\n" +
            "2. Former des petites boulettes ou galettes avec la kefta.\n" +
            "3. Chauffer l’huile dans la poêle et faire revenir les boulettes 5-7 minutes.\n" +
            "4. Ajouter un peu d’eau et laisser mijoter 5 minutes.\n" +
            "5. Casser les œufs sur les boulettes, couvrir et cuire à feu doux jusqu’à ce que les œufs soient pris.\n" +
            "6. Parsemer de coriandre fraîche et servir chaud avec du pain."
    },
    en: {
        title: "Kefta with Eggs",
        equipment: ["1 pan", "1 bowl", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "500 g minced meat (beef or lamb)",
            "1 onion finely chopped",
            "2 garlic cloves, chopped",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1/2 teaspoon ginger",
            "Salt and pepper",
            "4 eggs",
            "Some fresh coriander sprigs",
            "2 tablespoons olive oil"
        ],
        preparation:
            "1. Mix the meat with onion, garlic, spices, salt, and pepper.\n" +
            "2. Shape small meatballs or patties.\n" +
            "3. Heat oil in a pan and sauté meatballs 5-7 minutes.\n" +
            "4. Add a little water and simmer 5 minutes.\n" +
            "5. Crack eggs over meatballs, cover, and cook on low heat until eggs are set.\n" +
            "6. Sprinkle with fresh coriander and serve hot with bread."
    },
    nl: {
        title: "Kefta met Eieren",
        equipment: ["1 pan", "1 kom", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "500 g gehakt (rund- of lamsvlees)",
            "1 ui fijngehakt",
            "2 teentjes knoflook, gehakt",
            "1 theelepel paprika",
            "1 theelepel komijn",
            "1/2 theelepel gember",
            "Zout en peper",
            "4 eieren",
            "Enkele takjes verse koriander",
            "2 eetlepels olijfolie"
        ],
        preparation:
            "1. Meng het vlees met ui, knoflook, kruiden, zout en peper.\n" +
            "2. Vorm kleine balletjes of schijfjes.\n" +
            "3. Verhit olie in een pan en bak de balletjes 5-7 minuten.\n" +
            "4. Voeg wat water toe en laat 5 minuten sudderen.\n" +
            "5. Breek de eieren over de balletjes, dek af en kook op laag vuur tot de eieren gestold zijn.\n" +
            "6. Bestrooi met verse koriander en serveer heet met brood."
    },
    ar: {
        title: "كفتة بالبيض",
        equipment: ["مقلاة", "وعاء", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "500 غ لحم مفروم (بقر أو غنم)",
            "1 بصلة مفرومة ناعماً",
            "2 فص ثوم، مفروم",
            "1 ملعقة صغيرة فلفل أحمر",
            "1 ملعقة صغيرة كمون",
            "1/2 ملعقة صغيرة زنجبيل",
            "ملح وفلفل",
            "4 بيضات",
            "بضع سيقان كزبرة طازجة",
            "2 ملاعق زيت زيتون"
        ],
        preparation:
            "1. اخلط اللحم مع البصل والثوم والتوابل والملح والفلفل.\n" +
            "2. شكّل كرات صغيرة أو أقراص.\n" +
            "3. سخّن الزيت في المقلاة واقلِ الكفتة 5-7 دقائق.\n" +
            "4. أضف قليل من الماء واتركها على نار هادئة 5 دقائق.\n" +
            "5. اكسر البيض فوق الكفتة، غطّ واتركه ينضج على نار هادئة.\n" +
            "6. رش الكزبرة الطازجة وقدّمها ساخنة مع الخبز."
    }
};
recipesData.plat.brochettes = {
    country: "maroc",
    image: "images/brochettes.jpg",
    fr: {
        title: "Brochettes marocaines",
        equipment: ["1 grille ou poêle à grill", "1 bol", "1 pinceau", "1 couteau", "1 planche à découper"],
        ingredients: [
            "500 g viande (bœuf, agneau ou poulet) coupée en cubes",
            "2 cuillères à soupe huile d’olive",
            "2 gousses d’ail, hachées",
            "1 cuillère à café paprika",
            "1 cuillère à café cumin",
            "1/2 cuillère à café gingembre",
            "Sel et poivre",
            "Brochettes en bois ou métal"
        ],
        preparation:
            "1. Mélanger la viande avec l’huile, l’ail, les épices, sel et poivre, laisser mariner 30 minutes.\n" +
            "2. Enfiler les cubes de viande sur les brochettes.\n" +
            "3. Chauffer la grille ou la poêle à feu moyen.\n" +
            "4. Cuire les brochettes 10-12 minutes en les retournant régulièrement.\n" +
            "5. Servir chaud avec salade ou pain marocain."
    },
    en: {
        title: "Moroccan Skewers",
        equipment: ["1 grill or grill pan", "1 bowl", "1 brush", "1 knife", "1 cutting board"],
        ingredients: [
            "500 g meat (beef, lamb, or chicken) cut into cubes",
            "2 tablespoons olive oil",
            "2 garlic cloves, chopped",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1/2 teaspoon ginger",
            "Salt and pepper",
            "Wooden or metal skewers"
        ],
        preparation:
            "1. Mix meat with oil, garlic, spices, salt, and pepper, marinate 30 minutes.\n" +
            "2. Thread meat cubes onto skewers.\n" +
            "3. Heat grill or pan over medium heat.\n" +
            "4. Cook skewers 10-12 minutes, turning regularly.\n" +
            "5. Serve hot with salad or Moroccan bread."
    },
    nl: {
        title: "Marokkaanse Brochettes",
        equipment: ["1 grill of grillpan", "1 kom", "1 kwast", "1 mes", "1 snijplank"],
        ingredients: [
            "500 g vlees (rund, lam of kip) in blokjes",
            "2 eetlepels olijfolie",
            "2 teentjes knoflook, gehakt",
            "1 theelepel paprika",
            "1 theelepel komijn",
            "1/2 theelepel gember",
            "Zout en peper",
            "Houten of metalen spiesjes"
        ],
        preparation:
            "1. Meng het vlees met olie, knoflook, kruiden, zout en peper, laat 30 minuten marineren.\n" +
            "2. Rijg de vleesblokjes aan de spiesjes.\n" +
            "3. Verhit de grill of pan op middelhoog vuur.\n" +
            "4. Bak de brochettes 10-12 minuten, regelmatig keren.\n" +
            "5. Serveer heet met salade of Marokkaans brood."
    },
    ar: {
        title: "أسياخ مغربية",
        equipment: ["شواية أو مقلاة للشوي", "وعاء", "فرشاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "500 غ لحم (بقر، غنم أو دجاج) مقطع مكعبات",
            "2 ملاعق زيت زيتون",
            "2 فصوص ثوم، مفرومة",
            "1 ملعقة صغيرة فلفل أحمر",
            "1 ملعقة صغيرة كمون",
            "1/2 ملعقة صغيرة زنجبيل",
            "ملح وفلفل",
            "أسياخ خشبية أو معدنية"
        ],
        preparation:
            "1. اخلط اللحم مع الزيت والثوم والتوابل والملح والفلفل، واتركه يتبل 30 دقيقة.\n" +
            "2. ضع مكعبات اللحم على الأسياخ.\n" +
            "3. سخّن الشواية أو المقلاة على حرارة متوسطة.\n" +
            "4. اطه الأسياخ 10-12 دقيقة مع التقليب المنتظم.\n" +
            "5. قدمها ساخنة مع السلطة أو الخبز المغربي."
    }
};
recipesData.plat.mechoui = {
    country: "maroc",
    image: "images/mechoui.jpg",
    fr: {
        title: "Mechoui marocain",
        equipment: ["1 grande rôtissoire ou plat allant au four", "1 couteau", "1 pinceau", "1 plat de service"],
        ingredients: [
            "1 kg d’agneau entier ou épaules de mouton",
            "4 gousses d’ail, hachées",
            "2 cuillères à soupe huile d’olive",
            "1 cuillère à café cumin",
            "1 cuillère à café paprika",
            "1/2 cuillère à café gingembre",
            "Sel et poivre",
            "Quelques brins de coriandre fraîche"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Mélanger l’ail, les épices, sel, poivre et l’huile pour faire une marinade.\n" +
            "3. Enduire l’agneau avec la marinade, frotter sur toute la surface.\n" +
            "4. Placer l’agneau dans la rôtissoire.\n" +
            "5. Couvrir légèrement avec du papier aluminium et cuire 1h30 à 2h, arroser de temps en temps avec le jus.\n" +
            "6. Retirer le papier aluminium pour les 20 dernières minutes pour dorer la viande.\n" +
            "7. Vérifier que la viande est bien tendre.\n" +
            "8. Servir chaud, garni de coriandre fraîche."
    },
    en: {
        title: "Moroccan Mechoui",
        equipment: ["1 large roasting pan or oven dish", "1 knife", "1 brush", "1 serving plate"],
        ingredients: [
            "1 kg whole lamb or lamb shoulder",
            "4 garlic cloves, chopped",
            "2 tablespoons olive oil",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "1/2 teaspoon ginger",
            "Salt and pepper",
            "Some fresh coriander sprigs"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Mix garlic, spices, salt, pepper, and oil to make a marinade.\n" +
            "3. Rub the lamb with the marinade over all surfaces.\n" +
            "4. Place the lamb in the roasting pan.\n" +
            "5. Cover lightly with aluminum foil and cook 1.5–2 hours, basting occasionally.\n" +
            "6. Remove foil for the last 20 minutes to brown the meat.\n" +
            "7. Check that the meat is tender.\n" +
            "8. Serve hot, garnished with fresh coriander."
    },
    nl: {
        title: "Marokkaanse Mechoui",
        equipment: ["1 grote braadslede of ovenschaal", "1 mes", "1 kwast", "1 serveerschaal"],
        ingredients: [
            "1 kg hele lam of lamschouder",
            "4 teentjes knoflook, gehakt",
            "2 eetlepels olijfolie",
            "1 theelepel komijn",
            "1 theelepel paprika",
            "1/2 theelepel gember",
            "Zout en peper",
            "Enkele takjes verse koriander"
        ],
        preparation:
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Meng knoflook, kruiden, zout, peper en olie tot marinade.\n" +
            "3. Wrijf het lam in met de marinade over het hele oppervlak.\n" +
            "4. Plaats het lam in de braadslede.\n" +
            "5. Dek licht af met aluminiumfolie en bak 1,5–2 uur, af en toe bedruipen.\n" +
            "6. Verwijder folie voor de laatste 20 minuten om het vlees te bruinen.\n" +
            "7. Controleer of het vlees mals is.\n" +
            "8. Serveer heet, gegarneerd met verse koriander."
    },
    ar: {
        title: "المشوي المغربي",
        equipment: ["صينية تحميص كبيرة أو وعاء فرن", "سكين", "فرشاة", "طبق للتقديم"],
        ingredients: [
            "1 كغ لحم ضأن كامل أو كتف ضأن",
            "4 فصوص ثوم، مفرومة",
            "2 ملاعق زيت زيتون",
            "1 ملعقة صغيرة كمون",
            "1 ملعقة صغيرة فلفل أحمر",
            "1/2 ملعقة صغيرة زنجبيل",
            "ملح وفلفل",
            "بضع سيقان كزبرة طازجة"
        ],
        preparation:
            "1. سخّن الفرن على 180°م.\n" +
            "2. اخلط الثوم، التوابل، الملح، الفلفل والزيت لتحضير التتبيلة.\n" +
            "3. ادهن الضأن بالتتبيلة على كل السطح.\n" +
            "4. ضع الضأن في صينية التحميص.\n" +
            "5. غطِه قليلاً بورق الألمنيوم واخبزه 1.5–2 ساعة، مع دهنه أحياناً.\n" +
            "6. أزل ورق الألمنيوم في آخر 20 دقيقة لتحمير اللحم.\n" +
            "7. تحقق من أن اللحم طري.\n" +
            "8. قدمه ساخناً، مزين بالكزبرة الطازجة."
    }
};

recipesData.dessert.orangeCannelle = {
    country: "maroc",
    image: "images/orange-cannelle.jpg",
    fr: {
        title: "Orange à la cannelle (4 personnes)",
        equipment: ["1 couteau", "1 planche à découper", "1 saladier"],
        ingredients: [
            "4 oranges moyennes",
            "1 cuillère à café cannelle moulue (2 g)",
            "1 cuillère à soupe sucre (15 g)"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes. Éplucher les oranges. Les couper en rondelles. Les disposer dans un saladier. Saupoudrer de sucre puis de cannelle. Mélanger légèrement. Servir frais."
    },
    en: {
        title: "Orange with Cinnamon (Serves 4)",
        equipment: ["1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "4 medium oranges",
            "1 teaspoon ground cinnamon (2 g)",
            "1 tablespoon sugar (15 g)"
        ],
        preparation:
            "This recipe serves 4 people. Peel oranges. Slice them. Place in a bowl. Sprinkle sugar and cinnamon. Mix gently. Serve fresh."
    },
    nl: {
        title: "Sinaasappel met kaneel (voor 4 personen)",
        equipment: ["1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "4 sinaasappels",
            "1 theelepel kaneel (2 g)",
            "1 eetlepel suiker (15 g)"
        ],
        preparation:
            "Dit recept is voor 4 personen. Schil de sinaasappels. Snijd in plakjes. Doe in een kom. Bestrooi met suiker en kaneel. Meng lichtjes. Serveer koud."
    },
    ar: {
        title: "برتقال بالقرفة (يكفي 4 أشخاص)",
        equipment: ["سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "4 برتقالات",
            "ملعقة صغيرة قرفة (2غ)",
            "ملعقة كبيرة سكر (15غ)"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. قشر البرتقال وقطعه. ضع في وعاء. أضف السكر والقرفة. امزج بلطف. يقدم بارداً."
    }
};
recipesData.dessert.chebakia = {
    country: "maroc",
    image: "images/chebakia.jpg",
    fr: {
        title: "Chebakia (pâtisserie au miel et sésame)",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 casserole", "1 cuillère en bois", "1 passoire"],
        ingredients: [
            "500 g farine",
            "100 g graines de sésame grillées",
            "100 g beurre fondu",
            "100 g miel",
            "1 cuillère à café cannelle",
            "1/2 cuillère à café gomme arabique en poudre",
            "1 pincée de sel",
            "1 cuillère à café levure chimique",
            "Eau tiède selon besoin",
            "Huile pour friture"
        ],
        preparation:
            "1. Mélanger la farine, sésame, cannelle, gomme arabique, sel et levure.\n" +
            "2. Ajouter le beurre fondu et l’eau tiède pour obtenir une pâte souple.\n" +
            "3. Étaler la pâte et découper en bandes, former des fleurs ou formes traditionnelles.\n" +
            "4. Chauffer l’huile et frire les chebakia jusqu’à dorure.\n" +
            "5. Égoutter sur papier absorbant.\n" +
            "6. Tremper immédiatement dans le miel chauffé, saupoudrer de sésame.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "Chebakia (honey and sesame pastry)",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 saucepan", "1 wooden spoon", "1 strainer"],
        ingredients: [
            "500 g flour",
            "100 g toasted sesame seeds",
            "100 g melted butter",
            "100 g honey",
            "1 teaspoon cinnamon",
            "1/2 teaspoon powdered gum arabic",
            "Pinch of salt",
            "1 teaspoon baking powder",
            "Warm water as needed",
            "Oil for frying"
        ],
        preparation:
            "1. Mix flour, sesame, cinnamon, gum arabic, salt, and baking powder.\n" +
            "2. Add melted butter and warm water to make a soft dough.\n" +
            "3. Roll out dough and cut into strips, form flowers or traditional shapes.\n" +
            "4. Heat oil and fry chebakia until golden.\n" +
            "5. Drain on paper towels.\n" +
            "6. Immediately dip in warm honey, sprinkle with sesame.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "Chebakia (honing- en sesamgebak)",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 steelpan", "1 houten lepel", "1 zeef"],
        ingredients: [
            "500 g bloem",
            "100 g geroosterde sesamzaadjes",
            "100 g gesmolten boter",
            "100 g honing",
            "1 theelepel kaneel",
            "1/2 theelepel arabische gompoeder",
            "Snufje zout",
            "1 theelepel bakpoeder",
            "Lauw water naar behoefte",
            "Olie om te frituren"
        ],
        preparation:
            "1. Meng bloem, sesam, kaneel, arabische gom, zout en bakpoeder.\n" +
            "2. Voeg gesmolten boter en lauw water toe voor een soepel deeg.\n" +
            "3. Rol het deeg uit en snijd in stroken, vorm bloemen of traditionele vormen.\n" +
            "4. Verhit olie en frituur chebakia tot goudbruin.\n" +
            "5. Laat uitlekken op keukenpapier.\n" +
            "6. Doop direct in warme honing, bestrooi met sesam.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "الشباكية",
        equipment: ["وعاء", "شوبك العجين", "سكين", "قدر", "ملعقة خشبية", "مصفاة"],
        ingredients: [
            "500 غ دقيق",
            "100 غ بذور سمسم محمصة",
            "100 غ زبدة مذابة",
            "100 غ عسل",
            "1 ملعقة صغيرة قرفة",
            "1/2 ملعقة صغيرة صمغ عربي مطحون",
            "رشة ملح",
            "1 ملعقة صغيرة خميرة كيميائية",
            "ماء دافئ حسب الحاجة",
            "زيت للقلي"
        ],
        preparation:
            "1. اخلط الدقيق، السمسم، القرفة، الصمغ العربي، الملح والخميرة.\n" +
            "2. أضف الزبدة المذابة والماء الدافئ للحصول على عجين لين.\n" +
            "3. افرد العجين وقطعه إلى شرائط، شكل زهور أو الأشكال التقليدية.\n" +
            "4. سخّن الزيت واقلِ الشباكية حتى يصبح لونها ذهبي.\n" +
            "5. صفّها على ورق ماص.\n" +
            "6. اغمسها فوراً في العسل الدافئ، ورش السمسم.\n" +
            "7. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.kaabElGhazal = {
    country: "maroc",
    image: "images/kaab-el-ghazal.jpg",
    fr: {
        title: "Kaab el Ghazal (cornes de gazelle)",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 planche à découper"],
        ingredients: [
            "250 g farine",
            "125 g beurre fondu",
            "1 pincée de sel",
            "Eau de fleur d’oranger pour pétrir",
            "200 g pâte d’amande nature ou parfumée à la cannelle",
            "Sucre glace pour saupoudrer"
        ],
        preparation:
            "1. Mélanger la farine et le sel, ajouter le beurre et pétrir avec eau de fleur d’oranger pour obtenir une pâte souple.\n" +
            "2. Étaler la pâte très finement et découper des rectangles.\n" +
            "3. Former des bâtonnets de pâte d’amande et les placer sur chaque rectangle.\n" +
            "4. Rouler et plier en forme de croissant.\n" +
            "5. Cuire au four préchauffé à 180°C pendant 15-20 minutes.\n" +
            "6. Laisser refroidir et saupoudrer de sucre glace avant de servir."
    },
    en: {
        title: "Kaab el Ghazal (Gazelle Horns)",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 cutting board"],
        ingredients: [
            "250 g flour",
            "125 g melted butter",
            "Pinch of salt",
            "Orange blossom water for kneading",
            "200 g plain or cinnamon almond paste",
            "Powdered sugar for dusting"
        ],
        preparation:
            "1. Mix flour and salt, add butter and knead with orange blossom water to make a soft dough.\n" +
            "2. Roll dough very thin and cut rectangles.\n" +
            "3. Form almond paste sticks and place on each rectangle.\n" +
            "4. Roll and fold into crescent shapes.\n" +
            "5. Bake in preheated oven at 180°C for 15-20 minutes.\n" +
            "6. Let cool and dust with powdered sugar before serving."
    },
    nl: {
        title: "Kaab el Ghazal (Gazellehoorns)",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 snijplank"],
        ingredients: [
            "250 g bloem",
            "125 g gesmolten boter",
            "Snufje zout",
            "Bloemwater voor kneden",
            "200 g amandelpasta naturel of met kaneel",
            "Poedersuiker om te bestuiven"
        ],
        preparation:
            "1. Meng bloem en zout, voeg boter toe en kneed met bloemwater tot een soepel deeg.\n" +
            "2. Rol het deeg zeer dun uit en snijd rechthoeken.\n" +
            "3. Vorm amandelpasta-stokjes en leg ze op elke rechthoek.\n" +
            "4. Rol en vouw tot halve maan vormen.\n" +
            "5. Bak in voorverwarmde oven op 180°C gedurende 15-20 minuten.\n" +
            "6. Laat afkoelen en bestuif met poedersuiker voor het serveren."
    },
    ar: {
        title: "كعب الغزال",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "لوح تقطيع"],
        ingredients: [
            "250 غ دقيق",
            "125 غ زبدة مذابة",
            "رشة ملح",
            "ماء زهر للخلط",
            "200 غ عجينة لوز طبيعية أو بنكهة القرفة",
            "سكر بودرة للرش"
        ],
        preparation:
            "1. اخلط الدقيق والملح، أضف الزبدة واعجن مع ماء الزهر للحصول على عجين لين.\n" +
            "2. افرد العجين رقيقاً جداً وقطع مستطيلات.\n" +
            "3. شكّل عجينة اللوز على شكل أصابع وضعها على كل مستطيل.\n" +
            "4. لف واصنع شكل الهلال.\n" +
            "5. اخبز في فرن مسخن على 180°م لمدة 15-20 دقيقة.\n" +
            "6. اتركه يبرد ورش السكر البودرة قبل التقديم."
    }
};
recipesData.dessert.fekkas = {
    country: "maroc",
    image: "images/fekkas.jpg",
    fr: {
        title: "Fekkas aux amandes et raisins secs",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 planche à découper", "1 plaque de cuisson"],
        ingredients: [
            "250 g farine",
            "125 g beurre fondu",
            "2 œufs",
            "100 g sucre",
            "1 cuillère à café levure chimique",
            "50 g raisins secs",
            "50 g amandes concassées",
            "1 pincée de sel",
            "1 cuillère à café vanille"
        ],
        preparation:
            "1. Mélanger la farine, levure et sel.\n" +
            "2. Dans un autre bol, battre les œufs avec le sucre et la vanille.\n" +
            "3. Ajouter le beurre fondu et mélanger.\n" +
            "4. Incorporer les ingrédients secs et les fruits secs pour obtenir une pâte homogène.\n" +
            "5. Former des boudins sur une plaque de cuisson.\n" +
            "6. Cuire à 180°C pendant 20 minutes.\n" +
            "7. Sortir du four, couper en tranches et remettre 10 minutes au four pour dorer.\n" +
            "8. Laisser refroidir avant de servir."
    },
    en: {
        title: "Fekkas with Almonds and Raisins",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 cutting board", "1 baking tray"],
        ingredients: [
            "250 g flour",
            "125 g melted butter",
            "2 eggs",
            "100 g sugar",
            "1 teaspoon baking powder",
            "50 g raisins",
            "50 g chopped almonds",
            "Pinch of salt",
            "1 teaspoon vanilla"
        ],
        preparation:
            "1. Mix flour, baking powder, and salt.\n" +
            "2. In another bowl, beat eggs with sugar and vanilla.\n" +
            "3. Add melted butter and mix.\n" +
            "4. Incorporate dry ingredients and dried fruits to form a homogeneous dough.\n" +
            "5. Shape into logs on a baking tray.\n" +
            "6. Bake at 180°C for 20 minutes.\n" +
            "7. Remove from oven, slice, and bake another 10 minutes to brown.\n" +
            "8. Let cool before serving."
    },
    nl: {
        title: "Fekkas met Amandelen en Rozijnen",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 snijplank", "1 bakplaat"],
        ingredients: [
            "250 g bloem",
            "125 g gesmolten boter",
            "2 eieren",
            "100 g suiker",
            "1 theelepel bakpoeder",
            "50 g rozijnen",
            "50 g gehakte amandelen",
            "Snufje zout",
            "1 theelepel vanille"
        ],
        preparation:
            "1. Meng bloem, bakpoeder en zout.\n" +
            "2. Klop in een andere kom de eieren met suiker en vanille.\n" +
            "3. Voeg gesmolten boter toe en meng.\n" +
            "4. Voeg droge ingrediënten en gedroogd fruit toe tot een homogeen deeg.\n" +
            "5. Vorm rolletjes op een bakplaat.\n" +
            "6. Bak op 180°C gedurende 20 minuten.\n" +
            "7. Haal uit de oven, snijd in plakjes en bak nog 10 minuten om te kleuren.\n" +
            "8. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "فكّاس باللوز والزبيب",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "لوح تقطيع", "صينية فرن"],
        ingredients: [
            "250 غ دقيق",
            "125 غ زبدة مذابة",
            "2 بيضات",
            "100 غ سكر",
            "1 ملعقة صغيرة خميرة كيميائية",
            "50 غ زبيب",
            "50 غ لوز مفروم",
            "رشة ملح",
            "1 ملعقة صغيرة فانيليا"
        ],
        preparation:
            "1. اخلط الدقيق والخميرة والملح.\n" +
            "2. في وعاء آخر، اخفق البيض مع السكر والفانيليا.\n" +
            "3. أضف الزبدة المذابة واخلط.\n" +
            "4. أدمج المكونات الجافة والفواكه المجففة للحصول على عجين متجانس.\n" +
            "5. شكّل على شكل أسطوانات على صينية الفرن.\n" +
            "6. اخبز على 180°م لمدة 20 دقيقة.\n" +
            "7. أخرجها من الفرن، قطعها إلى شرائح وأعدها 10 دقائق لتتحمر.\n" +
            "8. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.sellou = {
    country: "maroc",
    image: "images/sellou.jpg",
    fr: {
        title: "Sellou (mélange sucré aux graines et amandes)",
        equipment: ["1 bol", "1 poêle", "1 cuillère en bois", "1 moulin à épices ou robot"],
        ingredients: [
            "200 g farine",
            "100 g amandes grillées",
            "50 g sésame grillé",
            "100 g beurre fondu",
            "50 g miel",
            "1 cuillère à café cannelle",
            "1/2 cuillère à café anis moulu",
            "1 pincée de sel"
        ],
        preparation:
            "1. Torréfier la farine dans une poêle jusqu’à légère coloration.\n" +
            "2. Mixer les amandes et le sésame pour obtenir une poudre.\n" +
            "3. Mélanger la farine torréfiée avec les graines et les amandes.\n" +
            "4. Ajouter beurre fondu, miel, cannelle, anis et sel.\n" +
            "5. Mélanger jusqu’à obtenir une texture homogène.\n" +
            "6. Presser dans un moule ou former des petits tas.\n" +
            "7. Laisser reposer et sécher avant de servir."
    },
    en: {
        title: "Sellou (sweet mixture with seeds and almonds)",
        equipment: ["1 bowl", "1 pan", "1 wooden spoon", "1 spice grinder or food processor"],
        ingredients: [
            "200 g flour",
            "100 g toasted almonds",
            "50 g toasted sesame",
            "100 g melted butter",
            "50 g honey",
            "1 teaspoon cinnamon",
            "1/2 teaspoon ground anise",
            "Pinch of salt"
        ],
        preparation:
            "1. Toast flour in a pan until lightly colored.\n" +
            "2. Grind almonds and sesame to a powder.\n" +
            "3. Mix toasted flour with seeds and almonds.\n" +
            "4. Add melted butter, honey, cinnamon, anise, and salt.\n" +
            "5. Mix until homogeneous texture.\n" +
            "6. Press into a mold or form small piles.\n" +
            "7. Let rest and dry before serving."
    },
    nl: {
        title: "Sellou (zoete mix met zaden en amandelen)",
        equipment: ["1 kom", "1 pan", "1 houten lepel", "1 kruidenmolen of blender"],
        ingredients: [
            "200 g bloem",
            "100 g geroosterde amandelen",
            "50 g geroosterde sesam",
            "100 g gesmolten boter",
            "50 g honing",
            "1 theelepel kaneel",
            "1/2 theelepel gemalen anijs",
            "Snufje zout"
        ],
        preparation:
            "1. Rooster de bloem in een pan tot licht gekleurd.\n" +
            "2. Maal de amandelen en sesam tot poeder.\n" +
            "3. Meng geroosterde bloem met zaden en amandelen.\n" +
            "4. Voeg gesmolten boter, honing, kaneel, anijs en zout toe.\n" +
            "5. Meng tot een homogeen mengsel.\n" +
            "6. Druk in een vorm of maak kleine hoopjes.\n" +
            "7. Laat rusten en drogen voor het serveren."
    },
    ar: {
        title: "سلو أو سفوف",
        equipment: ["وعاء", "مقلاة", "ملعقة خشبية", "مطحنة توابل أو محضر طعام"],
        ingredients: [
            "200 غ دقيق",
            "100 غ لوز محمص",
            "50 غ سمسم محمص",
            "100 غ زبدة مذابة",
            "50 غ عسل",
            "1 ملعقة صغيرة قرفة",
            "1/2 ملعقة صغيرة يانسون مطحون",
            "رشة ملح"
        ],
        preparation:
            "1. حمّص الدقيق في مقلاة حتى يصبح لونه فاتح.\n" +
            "2. اطحن اللوز والسمسم حتى يصبحا مسحوقاً.\n" +
            "3. اخلط الدقيق المحمص مع البذور واللوز.\n" +
            "4. أضف الزبدة المذابة، العسل، القرفة، اليانسون والملح.\n" +
            "5. اخلط حتى تحصل على قوام متجانس.\n" +
            "6. ضع الخليط في قالب أو شكّل أكوام صغيرة.\n" +
            "7. اتركه يرتاح ويجف قبل التقديم."
    }
};
recipesData.dessert.mkharka = {
    country: "maroc",
    image: "images/mkharka.jpg",
    fr: {
        title: "M’kharka aux graines",
        equipment: ["1 bol", "1 poêle", "1 cuillère en bois", "1 rouleau à pâtisserie", "1 four", "1 plaque de cuisson"],
        ingredients: [
            "250 g farine",
            "100 g beurre fondu",
            "50 g sucre",
            "1 pincée de sel",
            "50 g graines de sésame grillées",
            "50 g graines de tournesol grillées",
            "1 cuillère à café cannelle",
            "Eau tiède selon besoin",
            "Huile pour cuisson"
        ],
        preparation:
            "1. Mélanger la farine, sel et sucre.\n" +
            "2. Ajouter le beurre fondu et un peu d’eau tiède pour former une pâte souple.\n" +
            "3. Étaler la pâte et parsemer de graines et cannelle.\n" +
            "4. Rouler et découper en bâtonnets ou carrés.\n" +
            "5. Cuire au four préchauffé à 180°C pendant 15-20 minutes.\n" +
            "6. Laisser refroidir avant de servir."
    },
    en: {
        title: "M’kharka with Seeds",
        equipment: ["1 bowl", "1 pan", "1 wooden spoon", "1 rolling pin", "1 oven", "1 baking tray"],
        ingredients: [
            "250 g flour",
            "100 g melted butter",
            "50 g sugar",
            "Pinch of salt",
            "50 g toasted sesame seeds",
            "50 g toasted sunflower seeds",
            "1 teaspoon cinnamon",
            "Warm water as needed",
            "Oil for cooking"
        ],
        preparation:
            "1. Mix flour, salt, and sugar.\n" +
            "2. Add melted butter and some warm water to form a soft dough.\n" +
            "3. Roll out the dough and sprinkle with seeds and cinnamon.\n" +
            "4. Roll and cut into sticks or squares.\n" +
            "5. Bake in preheated oven at 180°C for 15-20 minutes.\n" +
            "6. Let cool before serving."
    },
    nl: {
        title: "M’kharka met Zaden",
        equipment: ["1 kom", "1 pan", "1 houten lepel", "1 deegroller", "1 oven", "1 bakplaat"],
        ingredients: [
            "250 g bloem",
            "100 g gesmolten boter",
            "50 g suiker",
            "Snufje zout",
            "50 g geroosterde sesamzaadjes",
            "50 g geroosterde zonnebloempitten",
            "1 theelepel kaneel",
            "Lauw water naar behoefte",
            "Olie voor het bakken"
        ],
        preparation:
            "1. Meng bloem, zout en suiker.\n" +
            "2. Voeg gesmolten boter en wat lauw water toe voor een soepel deeg.\n" +
            "3. Rol het deeg uit en bestrooi met zaden en kaneel.\n" +
            "4. Rol op en snijd in staafjes of vierkantjes.\n" +
            "5. Bak in voorverwarmde oven op 180°C gedurende 15-20 minuten.\n" +
            "6. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "المخرقة بالبذور",
        equipment: ["وعاء", "مقلاة", "ملعقة خشبية", "شوبك العجين", "فرن", "صينية فرن"],
        ingredients: [
            "250 غ دقيق",
            "100 غ زبدة مذابة",
            "50 غ سكر",
            "رشة ملح",
            "50 غ بذور سمسم محمصة",
            "50 غ بذور دوار الشمس محمصة",
            "1 ملعقة صغيرة قرفة",
            "ماء دافئ حسب الحاجة",
            "زيت للطبخ"
        ],
        preparation:
            "1. اخلط الدقيق والملح والسكر.\n" +
            "2. أضف الزبدة المذابة وبعض الماء الدافئ لتشكيل عجين لين.\n" +
            "3. افرد العجين ورش عليه البذور والقرفة.\n" +
            "4. لف وقطع إلى أعواد أو مربعات.\n" +
            "5. اخبز في فرن مسخن على 180°م لمدة 15-20 دقيقة.\n" +
            "6. اتركه يبرد قبل التقديم."
    }
};
recipesData.dessert.baklava = {
    country: "maroc",
    image: "images/baklava.jpg",
    fr: {
        title: "Baklava à la marocaine",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 casserole", "1 pinceau"],
        ingredients: [
            "200 g pâte filo",
            "150 g noix ou pistaches hachées",
            "100 g beurre fondu",
            "100 g miel",
            "50 g sucre",
            "1 cuillère à café cannelle"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Beurrer un plat et placer une feuille de pâte filo.\n" +
            "3. Répéter en superposant plusieurs feuilles, en beurrant chaque feuille.\n" +
            "4. Parsemer de mélange de noix/pistaches et cannelle.\n" +
            "5. Couvrir avec le reste de pâte filo en superposition, beurrer chaque feuille.\n" +
            "6. Découper en losanges.\n" +
            "7. Cuire au four 25-30 minutes jusqu’à doré.\n" +
            "8. Chauffer le miel avec sucre et napper les baklavas encore chauds.\n" +
            "9. Laisser refroidir avant de servir."
    },
    en: {
        title: "Moroccan Baklava",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 saucepan", "1 brush"],
        ingredients: [
            "200 g phyllo dough",
            "150 g chopped walnuts or pistachios",
            "100 g melted butter",
            "100 g honey",
            "50 g sugar",
            "1 teaspoon cinnamon"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Butter a dish and place a sheet of phyllo.\n" +
            "3. Repeat stacking several sheets, buttering each.\n" +
            "4. Sprinkle nut/pistachio mixture and cinnamon.\n" +
            "5. Cover with remaining phyllo, butter each sheet.\n" +
            "6. Cut into diamonds.\n" +
            "7. Bake 25-30 minutes until golden.\n" +
            "8. Heat honey with sugar and pour over warm baklava.\n" +
            "9. Let cool before serving."
    },
    nl: {
        title: "Marokkaanse Baklava",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 steelpan", "1 kwast"],
        ingredients: [
            "200 g filodeeg",
            "150 g gehakte walnoten of pistachenoten",
            "100 g gesmolten boter",
            "100 g honing",
            "50 g suiker",
            "1 theelepel kaneel"
        ],
        preparation:
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Vet een bakvorm in en leg een filodeegvel.\n" +
            "3. Herhaal en stapel meerdere vellen, bestrijk elk met boter.\n" +
            "4. Bestrooi met noten/pistachemengsel en kaneel.\n" +
            "5. Bedek met resterende filodeeg, bestrijk elk vel met boter.\n" +
            "6. Snijd in ruitjes.\n" +
            "7. Bak 25-30 minuten tot goudbruin.\n" +
            "8. Verwarm honing met suiker en giet over warme baklava.\n" +
            "9. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بقلاوة مغربية",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "قدر", "فرشاة"],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ جوز أو فستق مفروم",
            "100 غ زبدة مذابة",
            "100 غ عسل",
            "50 غ سكر",
            "1 ملعقة صغيرة قرفة"
        ],
        preparation:
            "1. سخّن الفرن إلى 180°م.\n" +
            "2. ادهن صينية وضع طبقة من عجينة الفيلو.\n" +
            "3. كرر وضع عدة طبقات، مع دهن كل طبقة بالزبدة.\n" +
            "4. رش خليط الجوز/الفستق والقرفة.\n" +
            "5. غطِ بالطبقات المتبقية وادهن كل طبقة بالزبدة.\n" +
            "6. قطع إلى أشكال معينة.\n" +
            "7. اخبز 25-30 دقيقة حتى تصبح ذهبية.\n" +
            "8. سخّن العسل مع السكر واسكبه على البقلاوة الساخنة.\n" +
            "9. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.briouatesSucrees = {
    country: "maroc",
    image: "images/briouates-sucrees.jpg",
    fr: {
        title: "Briouates sucrées aux amandes et miel",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 casserole", "1 pinceau", "1 poêle"],
        ingredients: [
            "200 g pâte filo",
            "150 g amandes moulues",
            "50 g sucre",
            "50 g beurre fondu",
            "1 cuillère à café cannelle",
            "50 g miel",
            "Huile pour friture"
        ],
        preparation:
            "1. Mélanger les amandes moulues, sucre et cannelle.\n" +
            "2. Découper la pâte filo en bandes.\n" +
            "3. Placer un peu de mélange d’amandes sur chaque bande et plier en triangle.\n" +
            "4. Chauffer l’huile et frire les briouates jusqu’à doré.\n" +
            "5. Égoutter sur papier absorbant.\n" +
            "6. Chauffer le miel et napper les briouates encore chaudes.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "Sweet Briouates with Almonds and Honey",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 saucepan", "1 brush", "1 pan"],
        ingredients: [
            "200 g phyllo dough",
            "150 g ground almonds",
            "50 g sugar",
            "50 g melted butter",
            "1 teaspoon cinnamon",
            "50 g honey",
            "Oil for frying"
        ],
        preparation:
            "1. Mix ground almonds, sugar, and cinnamon.\n" +
            "2. Cut phyllo dough into strips.\n" +
            "3. Place some almond mixture on each strip and fold into triangles.\n" +
            "4. Heat oil and fry briouates until golden.\n" +
            "5. Drain on paper towels.\n" +
            "6. Heat honey and coat the warm briouates.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "Zoete Briouates met Amandelen en Honing",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 steelpan", "1 kwast", "1 pan"],
        ingredients: [
            "200 g filodeeg",
            "150 g gemalen amandelen",
            "50 g suiker",
            "50 g gesmolten boter",
            "1 theelepel kaneel",
            "50 g honing",
            "Olie om te frituren"
        ],
        preparation:
            "1. Meng gemalen amandelen, suiker en kaneel.\n" +
            "2. Snijd filodeeg in stroken.\n" +
            "3. Plaats wat amandelmengsel op elke strook en vouw tot driehoek.\n" +
            "4. Verhit olie en frituur briouates tot goudbruin.\n" +
            "5. Laat uitlekken op keukenpapier.\n" +
            "6. Verwarm honing en bedek de warme briouates.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بريوات حلوة باللوز والعسل",
        equipment: ["وعاء", "شوبك العجين", "سكين", "قدر", "فرشاة", "مقلاة"],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ لوز مطحون",
            "50 غ سكر",
            "50 غ زبدة مذابة",
            "1 ملعقة صغيرة قرفة",
            "50 غ عسل",
            "زيت للقلي"
        ],
        preparation:
            "1. اخلط اللوز المطحون مع السكر والقرفة.\n" +
            "2. قطّع عجينة الفيلو إلى شرائح.\n" +
            "3. ضع كمية من خليط اللوز على كل شريحة واطوها على شكل مثلث.\n" +
            "4. سخّن الزيت واقلِ البريوات حتى تصبح ذهبية.\n" +
            "5. صفّها على ورق ماص.\n" +
            "6. سخّن العسل وغطّ البريوات الساخنة.\n" +
            "7. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.kaabElGhazalParfumees = {
    country: "maroc",
    image: "images/kaab-el-ghazal-parfumees.jpg",
    fr: {
        title: "Kaab el Ghazal parfumées (fruits et pistaches)",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 planche à découper"],
        ingredients: [
            "250 g farine",
            "125 g beurre fondu",
            "1 pincée de sel",
            "Eau de fleur d’oranger pour pétrir",
            "200 g pâte d’amande parfumée à l’orange ou pistache",
            "Sucre glace pour saupoudrer"
        ],
        preparation:
            "1. Mélanger la farine et le sel, ajouter le beurre et pétrir avec eau de fleur d’oranger pour obtenir une pâte souple.\n" +
            "2. Étaler la pâte finement et découper en rectangles.\n" +
            "3. Former des bâtonnets de pâte d’amande parfumée et les placer sur chaque rectangle.\n" +
            "4. Rouler et plier en croissant.\n" +
            "5. Cuire au four préchauffé à 180°C pendant 15-20 minutes.\n" +
            "6. Laisser refroidir et saupoudrer de sucre glace avant de servir."
    },
    en: {
        title: "Flavored Kaab el Ghazal (fruits and pistachios)",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 cutting board"],
        ingredients: [
            "250 g flour",
            "125 g melted butter",
            "Pinch of salt",
            "Orange blossom water for kneading",
            "200 g almond paste flavored with orange or pistachio",
            "Powdered sugar for dusting"
        ],
        preparation:
            "1. Mix flour and salt, add butter and knead with orange blossom water to make a soft dough.\n" +
            "2. Roll out dough thinly and cut rectangles.\n" +
            "3. Form almond paste sticks and place on each rectangle.\n" +
            "4. Roll and fold into crescent shapes.\n" +
            "5. Bake in preheated oven at 180°C for 15-20 minutes.\n" +
            "6. Let cool and dust with powdered sugar before serving."
    },
    nl: {
        title: "Kaab el Ghazal met Smaak (fruit en pistache)",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 snijplank"],
        ingredients: [
            "250 g bloem",
            "125 g gesmolten boter",
            "Snufje zout",
            "Bloemwater voor kneden",
            "200 g amandelpasta met sinaasappel of pistache smaak",
            "Poedersuiker om te bestuiven"
        ],
        preparation:
            "1. Meng bloem en zout, voeg boter toe en kneed met bloemwater tot een soepel deeg.\n" +
            "2. Rol het deeg dun uit en snijd rechthoeken.\n" +
            "3. Vorm amandelpasta-stokjes en leg op elke rechthoek.\n" +
            "4. Rol op en vouw tot halve maan vormen.\n" +
            "5. Bak in voorverwarmde oven op 180°C gedurende 15-20 minuten.\n" +
            "6. Laat afkoelen en bestuif met poedersuiker voor het serveren."
    },
    ar: {
        title: "كعب الغزال معطرة (فواكه وفستق)",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "لوح تقطيع"],
        ingredients: [
            "250 غ دقيق",
            "125 غ زبدة مذابة",
            "رشة ملح",
            "ماء زهر للخلط",
            "200 غ عجينة لوز بنكهة البرتقال أو الفستق",
            "سكر بودرة للرش"
        ],
        preparation:
            "1. اخلط الدقيق والملح، أضف الزبدة واعجن مع ماء الزهر للحصول على عجين لين.\n" +
            "2. افرد العجين رقيقاً وقطع مستطيلات.\n" +
            "3. شكّل عجينة اللوز المعطرة على شكل أصابع وضعها على كل مستطيل.\n" +
            "4. لف واصنع شكل الهلال.\n" +
            "5. اخبز في فرن مسخن على 180°م لمدة 15-20 دقيقة.\n" +
            "6. اتركه يبرد ورش السكر البودرة قبل التقديم."
    }
};
recipesData.dessert.ghribaNoixCoco = {
    country: "maroc",
    image: "images/ghriba-noix-coco.jpg",
    fr: {
        title: "Ghriba à la noix de coco",
        equipment: ["1 bol", "1 four", "1 plaque de cuisson", "1 cuillère", "1 fouet"],
        ingredients: [
            "200 g noix de coco râpée",
            "150 g sucre",
            "2 œufs",
            "50 g beurre fondu",
            "1 cuillère à café vanille"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Mélanger tous les ingrédients dans un bol jusqu’à homogénéité.\n" +
            "3. Former des boules de pâte et les placer sur une plaque recouverte de papier cuisson.\n" +
            "4. Aplatir légèrement chaque boule.\n" +
            "5. Cuire 12-15 minutes jusqu’à légère dorure.\n" +
            "6. Laisser refroidir avant de servir."
    },
    en: {
        title: "Coconut Ghriba",
        equipment: ["1 bowl", "1 oven", "1 baking tray", "1 spoon", "1 whisk"],
        ingredients: [
            "200 g shredded coconut",
            "150 g sugar",
            "2 eggs",
            "50 g melted butter",
            "1 teaspoon vanilla"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Mix all ingredients in a bowl until homogeneous.\n" +
            "3. Form dough balls and place on a baking tray lined with parchment paper.\n" +
            "4. Slightly flatten each ball.\n" +
            "5. Bake 12-15 minutes until lightly golden.\n" +
            "6. Let cool before serving."
    },
    nl: {
        title: "Ghriba met Kokos",
        equipment: ["1 kom", "1 oven", "1 bakplaat", "1 lepel", "1 garde"],
        ingredients: [
            "200 g geraspte kokos",
            "150 g suiker",
            "2 eieren",
            "50 g gesmolten boter",
            "1 theelepel vanille"
        ],
        preparation:
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Meng alle ingrediënten in een kom tot homogeen.\n" +
            "3. Vorm deegballen en plaats op een met bakpapier beklede bakplaat.\n" +
            "4. Druk elk bolletje iets plat.\n" +
            "5. Bak 12-15 minuten tot licht goudbruin.\n" +
            "6. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "غريبة بجوز الهند",
        equipment: ["وعاء", "فرن", "صينية فرن", "ملعقة", "خلاط يدوي"],
        ingredients: [
            "200 غ جوز الهند المبشور",
            "150 غ سكر",
            "2 بيض",
            "50 غ زبدة مذابة",
            "1 ملعقة صغيرة فانيليا"
        ],
        preparation:
            "1. سخّن الفرن إلى 180°م.\n" +
            "2. اخلط جميع المكونات في وعاء حتى تمتزج.\n" +
            "3. شكّل كرات وضعها على صينية فرن مغطاة بورق الخبز.\n" +
            "4. اضغط على كل كرة قليلاً.\n" +
            "5. اخبز 12-15 دقيقة حتى تصبح ذهبية قليلاً.\n" +
            "6. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.mkharkaMiel = {
    country: "maroc",
    image: "images/mkharka-miel.jpg",
    fr: {
        title: "M’kharka au miel renforcé",
        equipment: ["1 bol", "1 poêle", "1 cuillère en bois", "1 rouleau à pâtisserie", "1 four", "1 plaque de cuisson"],
        ingredients: [
            "250 g farine",
            "100 g beurre fondu",
            "50 g sucre",
            "50 g graines de sésame",
            "50 g graines de tournesol",
            "1 cuillère à café cannelle",
            "Eau tiède selon besoin",
            "Huile pour cuisson",
            "100 g miel chaud"
        ],
        preparation:
            "1. Mélanger farine, sucre et cannelle.\n" +
            "2. Ajouter beurre fondu et eau tiède pour obtenir une pâte souple.\n" +
            "3. Étaler la pâte, parsemer de graines.\n" +
            "4. Rouler et découper en bâtonnets.\n" +
            "5. Cuire au four 15-20 min à 180°C.\n" +
            "6. Napper de miel chaud.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "M’kharka with Extra Honey",
        equipment: ["1 bowl", "1 pan", "1 wooden spoon", "1 rolling pin", "1 oven", "1 baking tray"],
        ingredients: [
            "250 g flour",
            "100 g melted butter",
            "50 g sugar",
            "50 g sesame seeds",
            "50 g sunflower seeds",
            "1 teaspoon cinnamon",
            "Warm water as needed",
            "Oil for cooking",
            "100 g warm honey"
        ],
        preparation:
            "1. Mix flour, sugar, and cinnamon.\n" +
            "2. Add melted butter and warm water to make a soft dough.\n" +
            "3. Roll out dough, sprinkle with seeds.\n" +
            "4. Roll and cut into sticks.\n" +
            "5. Bake 15-20 min at 180°C.\n" +
            "6. Coat with warm honey.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "M’kharka met Extra Honing",
        equipment: ["1 kom", "1 pan", "1 houten lepel", "1 deegroller", "1 oven", "1 bakplaat"],
        ingredients: [
            "250 g bloem",
            "100 g gesmolten boter",
            "50 g suiker",
            "50 g sesamzaadjes",
            "50 g zonnebloempitten",
            "1 theelepel kaneel",
            "Lauw water naar behoefte",
            "Olie om te bakken",
            "100 g warme honing"
        ],
        preparation:
            "1. Meng bloem, suiker en kaneel.\n" +
            "2. Voeg gesmolten boter en lauw water toe voor een soepel deeg.\n" +
            "3. Rol het deeg uit en bestrooi met zaden.\n" +
            "4. Rol op en snijd in staafjes.\n" +
            "5. Bak 15-20 min op 180°C.\n" +
            "6. Bedek met warme honing.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "المخرقة بالعسل المعزز",
        equipment: ["وعاء", "مقلاة", "ملعقة خشبية", "شوبك العجين", "فرن", "صينية فرن"],
        ingredients: [
            "250 غ دقيق",
            "100 غ زبدة مذابة",
            "50 غ سكر",
            "50 غ بذور سمسم",
            "50 غ بذور دوار الشمس",
            "1 ملعقة صغيرة قرفة",
            "ماء دافئ حسب الحاجة",
            "زيت للطبخ",
            "100 غ عسل دافئ"
        ],
        preparation:
            "1. اخلط الدقيق والسكر والقرفة.\n" +
            "2. أضف الزبدة المذابة والماء الدافئ للحصول على عجين لين.\n" +
            "3. افرد العجين ورش بالبذور.\n" +
            "4. لف وقطع إلى أعواد.\n" +
            "5. اخبز 15-20 دقيقة على 180°م.\n" +
            "6. غطّ بالعسل الدافئ.\n" +
            "7. اتركه يبرد قبل التقديم."
    }
};
recipesData.dessert.kaabElGhazalDattes = {
    country: "maroc",
    image: "images/kaab-el-ghazal-dattes.jpg",
    fr: {
        title: "Kaab el Ghazal aux dattes et amandes",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 planche à découper"],
        ingredients: [
            "250 g farine",
            "125 g beurre fondu",
            "1 pincée de sel",
            "Eau de fleur d’oranger",
            "150 g pâte d’amande",
            "100 g dattes dénoyautées et hachées",
            "Sucre glace pour saupoudrer"
        ],
        preparation:
            "1. Mélanger farine, sel et beurre, ajouter eau de fleur d’oranger pour former une pâte.\n" +
            "2. Étaler la pâte et découper en rectangles.\n" +
            "3. Mélanger pâte d’amande et dattes, former des bâtonnets.\n" +
            "4. Placer le mélange sur chaque rectangle, rouler en croissant.\n" +
            "5. Cuire 15-20 minutes à 180°C.\n" +
            "6. Saupoudrer de sucre glace avant de servir."
    },
    en: {
        title: "Kaab el Ghazal with Dates and Almonds",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 cutting board"],
        ingredients: [
            "250 g flour",
            "125 g melted butter",
            "Pinch of salt",
            "Orange blossom water",
            "150 g almond paste",
            "100 g pitted chopped dates",
            "Powdered sugar for dusting"
        ],
        preparation:
            "1. Mix flour, salt, and butter; add orange blossom water to form dough.\n" +
            "2. Roll out dough and cut rectangles.\n" +
            "3. Mix almond paste with dates, form sticks.\n" +
            "4. Place on each rectangle and roll into crescent.\n" +
            "5. Bake 15-20 min at 180°C.\n" +
            "6. Dust with powdered sugar before serving."
    },
    nl: {
        title: "Kaab el Ghazal met Dadels en Amandelen",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 snijplank"],
        ingredients: [
            "250 g bloem",
            "125 g gesmolten boter",
            "Snufje zout",
            "Bloemwater",
            "150 g amandelpasta",
            "100 g ontpitte gehakte dadels",
            "Poedersuiker om te bestuiven"
        ],
        preparation:
            "1. Meng bloem, zout en boter, voeg bloemwater toe tot deeg.\n" +
            "2. Rol uit en snijd rechthoeken.\n" +
            "3. Meng amandelpasta met dadels, vorm stokjes.\n" +
            "4. Leg op elk rechthoekje en rol op tot halve maan.\n" +
            "5. Bak 15-20 minuten op 180°C.\n" +
            "6. Bestuif met poedersuiker voor het serveren."
    },
    ar: {
        title: "كعب الغزال بالتمر واللوز",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "لوح تقطيع"],
        ingredients: [
            "250 غ دقيق",
            "125 غ زبدة مذابة",
            "رشة ملح",
            "ماء الزهر",
            "150 غ عجينة لوز",
            "100 غ تمر مفروم ومنزوع النوى",
            "سكر بودرة للرش"
        ],
        preparation:
            "1. اخلط الدقيق والملح والزبدة، أضف ماء الزهر لتشكيل العجين.\n" +
            "2. افرد العجين وقطع مستطيلات.\n" +
            "3. اخلط عجينة اللوز مع التمر وشكّل أصابع.\n" +
            "4. ضع على كل مستطيل ولف على شكل هلال.\n" +
            "5. اخبز 15-20 دقيقة على 180°م.\n" +
            "6. رش بالسكر البودرة قبل التقديم."
    }
};
recipesData.dessert.baklavaNoix = {
    country: "maroc",
    image: "images/baklava-noix.jpg",
    fr: {
        title: "Baklava aux noix et miel renforcé",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 casserole", "1 pinceau"],
        ingredients: [
            "200 g pâte filo",
            "150 g noix hachées",
            "100 g beurre fondu",
            "120 g miel",
            "60 g sucre",
            "1 cuillère à café cannelle"
        ],
        preparation:
            "1. Préchauffer four à 180°C.\n" +
            "2. Beurrer un plat, déposer feuille de filo, répéter 3-4 fois.\n" +
            "3. Parsemer de noix et cannelle.\n" +
            "4. Couvrir avec le reste de pâte en superposition, beurrer chaque feuille.\n" +
            "5. Découper en losanges et cuire 25-30 min.\n" +
            "6. Chauffer miel avec sucre et napper les baklavas chauds.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "Walnut Baklava with Extra Honey",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 saucepan", "1 brush"],
        ingredients: [
            "200 g phyllo dough",
            "150 g chopped walnuts",
            "100 g melted butter",
            "120 g honey",
            "60 g sugar",
            "1 teaspoon cinnamon"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Butter dish, place phyllo sheet, repeat 3-4 times.\n" +
            "3. Sprinkle with walnuts and cinnamon.\n" +
            "4. Cover with remaining sheets, butter each layer.\n" +
            "5. Cut into diamonds, bake 25-30 min.\n" +
            "6. Heat honey with sugar and pour over hot baklava.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "Walnoot Baklava met Extra Honing",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 steelpan", "1 kwast"],
        ingredients: [
            "200 g filodeeg",
            "150 g gehakte walnoten",
            "100 g gesmolten boter",
            "120 g honing",
            "60 g suiker",
            "1 theelepel kaneel"
        ],
        preparation:
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Vet bakvorm in, leg filodeegvel, herhaal 3-4 keer.\n" +
            "3. Bestrooi met walnoten en kaneel.\n" +
            "4. Bedek met resterende vellen, bestrijk elk met boter.\n" +
            "5. Snijd in ruiten en bak 25-30 min.\n" +
            "6. Verwarm honing met suiker en giet over de warme baklava.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بقلاوة بالجوز والعسل المعزز",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "قدر", "فرشاة"],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ جوز مفروم",
            "100 غ زبدة مذابة",
            "120 غ عسل",
            "60 غ سكر",
            "1 ملعقة صغيرة قرفة"
        ],
        preparation:
            "1. سخّن الفرن إلى 180°م.\n" +
            "2. ادهن صينية وضع طبقة من عجينة الفيلو، كرر 3-4 مرات.\n" +
            "3. رش الجوز والقرفة.\n" +
            "4. غطّ بالطبقات المتبقية وادهن كل طبقة بالزبدة.\n" +
            "5. قطع إلى أشكال ماسية واخبز 25-30 دقيقة.\n" +
            "6. سخّن العسل مع السكر واسكبه على البقلاوة الساخنة.\n" +
            "7. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.sellou = {
    country: "maroc",
    image: "images/sellou.jpg",
    fr: {
        title: "Sellou (Sfouf) – mélange énergétique aux amandes",
        equipment: ["1 bol", "1 poêle", "1 cuillère en bois", "1 four", "1 plaque de cuisson"],
        ingredients: [
            "500 g farine",
            "200 g amandes grillées et moulues",
            "100 g graines de sésame grillées",
            "150 g sucre",
            "150 g beurre fondu",
            "1 cuillère à café cannelle",
            "1 pincée de sel",
            "1/2 cuillère à café gingembre moulu"
        ],
        preparation:
            "1. Torréfier la farine dans une poêle jusqu’à légère coloration.\n" +
            "2. Mélanger farine torréfiée, amandes, graines de sésame, sucre, cannelle, sel et gingembre.\n" +
            "3. Ajouter le beurre fondu et mélanger jusqu’à obtenir une pâte friable.\n" +
            "4. Verser dans un plat ou former des petites boules.\n" +
            "5. Servir à température ambiante, souvent avec thé à la menthe."
    },
    en: {
        title: "Sellou (Sfouf) – Energy Mix with Almonds",
        equipment: ["1 bowl", "1 pan", "1 wooden spoon", "1 oven", "1 baking tray"],
        ingredients: [
            "500 g flour",
            "200 g toasted ground almonds",
            "100 g toasted sesame seeds",
            "150 g sugar",
            "150 g melted butter",
            "1 teaspoon cinnamon",
            "Pinch of salt",
            "1/2 teaspoon ground ginger"
        ],
        preparation:
            "1. Toast flour in a pan until lightly colored.\n" +
            "2. Mix toasted flour, almonds, sesame seeds, sugar, cinnamon, salt and ginger.\n" +
            "3. Add melted butter and mix until crumbly.\n" +
            "4. Pour into a dish or form small balls.\n" +
            "5. Serve at room temperature, often with mint tea."
    },
    nl: {
        title: "Sellou (Sfouf) – Energierijke Mix met Amandelen",
        equipment: ["1 kom", "1 pan", "1 houten lepel", "1 oven", "1 bakplaat"],
        ingredients: [
            "500 g bloem",
            "200 g geroosterde gemalen amandelen",
            "100 g geroosterde sesamzaadjes",
            "150 g suiker",
            "150 g gesmolten boter",
            "1 theelepel kaneel",
            "Snufje zout",
            "1/2 theelepel gemalen gember"
        ],
        preparation:
            "1. Rooster bloem in een pan tot licht gekleurd.\n" +
            "2. Meng geroosterde bloem, amandelen, sesamzaad, suiker, kaneel, zout en gember.\n" +
            "3. Voeg gesmolten boter toe en meng tot kruimelig.\n" +
            "4. Giet in een schaal of vorm kleine balletjes.\n" +
            "5. Serveer op kamertemperatuur, vaak met muntthee."
    },
    ar: {
        title: "سلو (سفوف) – خليط الطاقة باللوز",
        equipment: ["وعاء", "مقلاة", "ملعقة خشبية", "فرن", "صينية فرن"],
        ingredients: [
            "500 غ دقيق",
            "200 غ لوز محمص ومطحون",
            "100 غ بذور سمسم محمصة",
            "150 غ سكر",
            "150 غ زبدة مذابة",
            "1 ملعقة صغيرة قرفة",
            "رشة ملح",
            "1/2 ملعقة صغيرة زنجبيل مطحون"
        ],
        preparation:
            "1. حمّص الدقيق في مقلاة حتى يصبح لونه فاتح.\n" +
            "2. اخلط الدقيق المحمص، اللوز، السمسم، السكر، القرفة، الملح والزنجبيل.\n" +
            "3. أضف الزبدة المذابة واخلط حتى يصبح خليط مفتت.\n" +
            "4. ضع الخليط في صينية أو شكل كرات صغيرة.\n" +
            "5. قدّمها في درجة حرارة الغرفة، غالباً مع الشاي بالنعناع."
    }
};
recipesData.dessert.fekkasAmandes = {
    country: "maroc",
    image: "images/fekkas-amandes.jpg",
    fr: {
        title: "Fekkas aux amandes – biscuits croquants",
        equipment: ["1 bol", "1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie"],
        ingredients: [
            "250 g farine",
            "100 g sucre",
            "2 œufs",
            "100 g beurre fondu",
            "100 g amandes entières ou hachées",
            "1 cuillère à café levure chimique",
            "1 pincée de sel",
            "1 cuillère à café vanille"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Mélanger farine, sucre, sel, levure et vanille.\n" +
            "3. Ajouter œufs et beurre fondu pour obtenir une pâte homogène.\n" +
            "4. Former des boudins de pâte, placer sur plaque.\n" +
            "5. Cuire 20 minutes, sortir, couper en tranches.\n" +
            "6. Remettre les tranches au four 10 min pour les rendre croustillantes.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "Fekkas with Almonds – Crunchy Biscuits",
        equipment: ["1 bowl", "1 oven", "1 baking tray", "1 rolling pin"],
        ingredients: [
            "250 g flour",
            "100 g sugar",
            "2 eggs",
            "100 g melted butter",
            "100 g whole or chopped almonds",
            "1 teaspoon baking powder",
            "Pinch of salt",
            "1 teaspoon vanilla"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Mix flour, sugar, salt, baking powder, and vanilla.\n" +
            "3. Add eggs and melted butter to form smooth dough.\n" +
            "4. Shape dough into logs, place on tray.\n" +
            "5. Bake 20 min, remove and cut into slices.\n" +
            "6. Bake slices 10 min more to crisp.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "Fekkas met Amandelen – Knapperige Koekjes",
        equipment: ["1 kom", "1 oven", "1 bakplaat", "1 deegroller"],
        ingredients: [
            "250 g bloem",
            "100 g suiker",
            "2 eieren",
            "100 g gesmolten boter",
            "100 g hele of gehakte amandelen",
            "1 theelepel bakpoeder",
            "Snufje zout",
            "1 theelepel vanille"
        ],
        preparation:
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Meng bloem, suiker, zout, bakpoeder en vanille.\n" +
            "3. Voeg eieren en gesmolten boter toe tot glad deeg.\n" +
            "4. Vorm deeg tot rollen, leg op bakplaat.\n" +
            "5. Bak 20 min, haal eruit en snijd in plakjes.\n" +
            "6. Bak plakjes nog 10 min voor knapperigheid.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "فكّاس باللوز – بسكويت مقرمش",
        equipment: ["وعاء", "فرن", "صينية فرن", "شوبك العجين"],
        ingredients: [
            "250 غ دقيق",
            "100 غ سكر",
            "2 بيض",
            "100 غ زبدة مذابة",
            "100 غ لوز كامل أو مفروم",
            "1 ملعقة صغيرة بيكنج باودر",
            "رشة ملح",
            "1 ملعقة صغيرة فانيليا"
        ],
        preparation:
            "1. سخّن الفرن إلى 180°م.\n" +
            "2. اخلط الدقيق والسكر والملح والبيكنج باودر والفانيليا.\n" +
            "3. أضف البيض والزبدة المذابة حتى تحصل على عجين متجانس.\n" +
            "4. شكّل العجين على شكل أسطوانات وضعها على الصينية.\n" +
            "5. اخبز 20 دقيقة، أخرجها وقطع إلى شرائح.\n" +
            "6. أعد الخبز 10 دقائق لتصبح مقرمشة.\n" +
            "7. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.makroutDattes = {
    country: "maroc",
    image: "images/makrout-dattes.jpg",
    fr: {
        title: "Makrout aux dattes",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 poêle"],
        ingredients: [
            "250 g semoule moyenne",
            "100 g beurre fondu",
            "150 g pâte de dattes",
            "50 g miel",
            "1 cuillère à café cannelle",
            "Eau tiède selon besoin",
            "Huile pour friture"
        ],
        preparation:
            "1. Mélanger semoule et beurre fondu.\n" +
            "2. Ajouter eau tiède pour obtenir une pâte souple.\n" +
            "3. Étaler la pâte en boudin, insérer pâte de dattes au centre.\n" +
            "4. Couper en losanges.\n" +
            "5. Faire frire dans l’huile chaude jusqu’à doré.\n" +
            "6. Égoutter et napper de miel.\n" +
            "7. Laisser refroidir avant de servir."
    },
    en: {
        title: "Makrout with Dates",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 pan"],
        ingredients: [
            "250 g medium semolina",
            "100 g melted butter",
            "150 g date paste",
            "50 g honey",
            "1 teaspoon cinnamon",
            "Warm water as needed",
            "Oil for frying"
        ],
        preparation:
            "1. Mix semolina and melted butter.\n" +
            "2. Add warm water to form a soft dough.\n" +
            "3. Roll dough into a log, insert date paste in center.\n" +
            "4. Cut into diamonds.\n" +
            "5. Fry in hot oil until golden.\n" +
            "6. Drain and coat with honey.\n" +
            "7. Let cool before serving."
    },
    nl: {
        title: "Makrout met Dadels",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 pan"],
        ingredients: [
            "250 g medium griesmeel",
            "100 g gesmolten boter",
            "150 g dadelpasta",
            "50 g honing",
            "1 theelepel kaneel",
            "Lauw water naar behoefte",
            "Olie om te frituren"
        ],
        preparation:
            "1. Meng griesmeel en gesmolten boter.\n" +
            "2. Voeg lauw water toe tot zacht deeg.\n" +
            "3. Rol deeg tot een rol, vul met dadelpasta in het midden.\n" +
            "4. Snijd in ruiten.\n" +
            "5. Frituur in hete olie tot goudbruin.\n" +
            "6. Laat uitlekken en bedek met honing.\n" +
            "7. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "المقروط بالتمر",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "مقلاة"],
        ingredients: [
            "250 غ سميد متوسط",
            "100 غ زبدة مذابة",
            "150 غ معجون التمر",
            "50 غ عسل",
            "1 ملعقة صغيرة قرفة",
            "ماء دافئ حسب الحاجة",
            "زيت للقلي"
        ],
        preparation:
            "1. اخلط السميد مع الزبدة المذابة.\n" +
            "2. أضف الماء الدافئ للحصول على عجين لين.\n" +
            "3. افرد العجين على شكل أسطوانة وضع معجون التمر في الوسط.\n" +
            "4. قطع إلى معينيات.\n" +
            "5. اقلي في الزيت الساخن حتى يصبح لونه ذهبياً.\n" +
            "6. صفّها وغطها بالعسل.\n" +
            "7. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.mhanchaAmandes = {
    country: "maroc",
    image: "images/mhancha-amandes.jpg",
    fr: {
        title: "M’hancha aux amandes",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 four", "1 pinceau"],
        ingredients: [
            "200 g pâte filo",
            "150 g amandes moulues",
            "80 g sucre",
            "60 g beurre fondu",
            "1 cuillère à café cannelle",
            "50 g miel",
            "1 cuillère à soupe eau de fleur d’oranger"
        ],
        preparation:
            "1. Mélanger amandes, sucre, cannelle et eau de fleur d’oranger.\n" +
            "2. Étaler la pâte filo, placer le mélange sur un côté.\n" +
            "3. Rouler en forme de serpent (spirale).\n" +
            "4. Beurrer le dessus et cuire 20-25 min à 180°C.\n" +
            "5. Napper de miel chaud.\n" +
            "6. Laisser refroidir avant de servir."
    },
    en: {
        title: "M’hancha with Almonds",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 oven", "1 brush"],
        ingredients: [
            "200 g phyllo dough",
            "150 g ground almonds",
            "80 g sugar",
            "60 g melted butter",
            "1 teaspoon cinnamon",
            "50 g honey",
            "1 tablespoon orange blossom water"
        ],
        preparation:
            "1. Mix almonds, sugar, cinnamon, and orange blossom water.\n" +
            "2. Roll out phyllo dough, place mixture on one side.\n" +
            "3. Roll into a snake shape (spiral).\n" +
            "4. Brush top with butter, bake 20-25 min at 180°C.\n" +
            "5. Coat with warm honey.\n" +
            "6. Let cool before serving."
    },
    nl: {
        title: "M’hancha met Amandelen",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 oven", "1 kwast"],
        ingredients: [
            "200 g filodeeg",
            "150 g gemalen amandelen",
            "80 g suiker",
            "60 g gesmolten boter",
            "1 theelepel kaneel",
            "50 g honing",
            "1 eetlepel bloesemwater"
        ],
        preparation:
            "1. Meng amandelen, suiker, kaneel en bloesemwater.\n" +
            "2. Rol filodeeg uit, leg het mengsel aan één kant.\n" +
            "3. Rol op tot slangvorm (spiraal).\n" +
            "4. Bestrijk bovenkant met boter, bak 20-25 min op 180°C.\n" +
            "5. Bedek met warme honing.\n" +
            "6. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "المحنشة باللوز",
        equipment: ["وعاء", "شوبك العجين", "سكين", "فرن", "فرشاة"],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ لوز مطحون",
            "80 غ سكر",
            "60 غ زبدة مذابة",
            "1 ملعقة صغيرة قرفة",
            "50 غ عسل",
            "1 ملعقة كبيرة ماء الزهر"
        ],
        preparation:
            "1. اخلط اللوز والسكر والقرفة وماء الزهر.\n" +
            "2. افرد عجينة الفيلو، ضع الخليط على جانب واحد.\n" +
            "3. لف على شكل ثعبان (حلزوني).\n" +
            "4. ادهن الوجه بالزبدة واخبز 20-25 دقيقة على 180°م.\n" +
            "5. غطّ بالعسل الساخن.\n" +
            "6. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.chebakiaAmandes = {
    country: "maroc",
    image: "images/chebakia-amandes.jpg",
    fr: {
        title: "Chebakia aux amandes",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 couteau", "1 poêle", "1 pinceau"],
        ingredients: [
            "250 g farine",
            "50 g graines de sésame grillées",
            "50 g amandes moulues",
            "50 g beurre fondu",
            "1 cuillère à café cannelle",
            "1 cuillère à soupe eau de fleur d’oranger",
            "50 g miel",
            "Huile pour friture"
        ],
        preparation:
            "1. Mélanger farine, graines de sésame, amandes, beurre, cannelle et eau de fleur d’oranger.\n" +
            "2. Former une pâte souple, laisser reposer 30 min.\n" +
            "3. Étaler la pâte et découper des losanges.\n" +
            "4. Faire frire dans l’huile chaude jusqu’à doré.\n" +
            "5. Égoutter et napper de miel chaud.\n" +
            "6. Laisser refroidir avant de servir."
    },
    en: {
        title: "Chebakia with Almonds",
        equipment: ["1 bowl", "1 rolling pin", "1 knife", "1 pan", "1 brush"],
        ingredients: [
            "250 g flour",
            "50 g toasted sesame seeds",
            "50 g ground almonds",
            "50 g melted butter",
            "1 teaspoon cinnamon",
            "1 tablespoon orange blossom water",
            "50 g honey",
            "Oil for frying"
        ],
        preparation:
            "1. Mix flour, sesame seeds, almonds, butter, cinnamon, and orange blossom water.\n" +
            "2. Form a soft dough, rest 30 min.\n" +
            "3. Roll dough and cut into diamonds.\n" +
            "4. Fry in hot oil until golden.\n" +
            "5. Drain and coat with warm honey.\n" +
            "6. Let cool before serving."
    },
    nl: {
        title: "Chebakia met Amandelen",
        equipment: ["1 kom", "1 deegroller", "1 mes", "1 pan", "1 kwast"],
        ingredients: [
            "250 g bloem",
            "50 g geroosterde sesamzaadjes",
            "50 g gemalen amandelen",
            "50 g gesmolten boter",
            "1 theelepel kaneel",
            "1 eetlepel bloesemwater",
            "50 g honing",
            "Olie om te frituren"
        ],
        preparation:
            "1. Meng bloem, sesamzaad, amandelen, boter, kaneel en bloesemwater.\n" +
            "2. Vorm een zacht deeg, laat 30 min rusten.\n" +
            "3. Rol deeg uit en snijd in ruiten.\n" +
            "4. Frituur in hete olie tot goudbruin.\n" +
            "5. Laat uitlekken en bedek met warme honing.\n" +
            "6. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "الشباكية باللوز",
        equipment: ["وعاء", "شوبك العجين", "سكين", "مقلاة", "فرشاة"],
        ingredients: [
            "250 غ دقيق",
            "50 غ بذور سمسم محمصة",
            "50 غ لوز مطحون",
            "50 غ زبدة مذابة",
            "1 ملعقة صغيرة قرفة",
            "1 ملعقة كبيرة ماء الزهر",
            "50 غ عسل",
            "زيت للقلي"
        ],
        preparation:
            "1. اخلط الدقيق والسمسم واللوز والزبدة والقرفة وماء الزهر.\n" +
            "2. شكّل عجيناً ليناً واتركه 30 دقيقة.\n" +
            "3. افرد العجين وقطع إلى معينيات.\n" +
            "4. اقلي في الزيت الساخن حتى يصبح ذهبياً.\n" +
            "5. صفّها وغطها بالعسل الساخن.\n" +
            "6. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.baghrir = {
    country: "maroc",
    image: "images/baghrir.jpg",
    fr: {
        title: "Baghrir – crêpes mille trous",
        equipment: ["1 bol", "1 fouet", "1 poêle antiadhésive", "1 louche", "1 spatule"],
        ingredients: [
            "250 g semoule fine",
            "50 g farine",
            "1 cuillère à café levure chimique",
            "1/2 cuillère à café sel",
            "1 cuillère à soupe sucre",
            "500 ml eau tiède",
            "Huile pour la poêle"
        ],
        preparation:
            "1. Mélanger semoule, farine, levure, sel et sucre.\n" +
            "2. Ajouter l’eau tiède progressivement, fouetter pour obtenir pâte lisse.\n" +
            "3. Laisser reposer 30 min.\n" +
            "4. Chauffer poêle antiadhésive, verser une louche de pâte.\n" +
            "5. Cuire seulement d’un côté jusqu’à formation de trous.\n" +
            "6. Servir chaud avec miel et beurre fondu."
    },
    en: {
        title: "Baghrir – Moroccan Thousand-Hole Pancakes",
        equipment: ["1 bowl", "1 whisk", "1 non-stick pan", "1 ladle", "1 spatula"],
        ingredients: [
            "250 g fine semolina",
            "50 g flour",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1 tablespoon sugar",
            "500 ml warm water",
            "Oil for pan"
        ],
        preparation:
            "1. Mix semolina, flour, baking powder, salt, and sugar.\n" +
            "2. Gradually add warm water, whisk to a smooth batter.\n" +
            "3. Rest 30 min.\n" +
            "4. Heat non-stick pan, pour a ladle of batter.\n" +
            "5. Cook only on one side until holes appear.\n" +
            "6. Serve hot with honey and melted butter."
    },
    nl: {
        title: "Baghrir – Marokkaanse Duizend-Gaatjes Pannenkoeken",
        equipment: ["1 kom", "1 garde", "1 anti-aanbakpan", "1 pollepel", "1 spatel"],
        ingredients: [
            "250 g fijne griesmeel",
            "50 g bloem",
            "1 theelepel bakpoeder",
            "1/2 theelepel zout",
            "1 eetlepel suiker",
            "500 ml warm water",
            "Olie voor de pan"
        ],
        preparation:
            "1. Meng griesmeel, bloem, bakpoeder, zout en suiker.\n" +
            "2. Voeg geleidelijk warm water toe, klop tot een glad beslag.\n" +
            "3. Laat 30 min rusten.\n" +
            "4. Verhit anti-aanbakpan, giet een pollepel beslag.\n" +
            "5. Bak alleen aan één kant tot gaatjes verschijnen.\n" +
            "6. Serveer warm met honing en gesmolten boter."
    },
    ar: {
        title: "بغرير – فطائر الألف فجوة",
        equipment: ["وعاء", "خفاق", "مقلاة غير لاصقة", "مغرفة", "معلقة مسطحة"],
        ingredients: [
            "250 غ سميد ناعم",
            "50 غ دقيق",
            "1 ملعقة صغيرة بيكنج باودر",
            "1/2 ملعقة صغيرة ملح",
            "1 ملعقة كبيرة سكر",
            "500 مل ماء دافئ",
            "زيت للمقلاة"
        ],
        preparation:
            "1. اخلط السميد والدقيق والبيكنج باودر والملح والسكر.\n" +
            "2. أضف الماء تدريجياً واخلط حتى يصبح خليط ناعم.\n" +
            "3. اتركه يرتاح 30 دقيقة.\n" +
            "4. سخن مقلاة غير لاصقة، ضع مغرفة من الخليط.\n" +
            "5. اطبخ من جهة واحدة حتى تظهر الفجوات.\n" +
            "6. قدّم ساخناً مع العسل والزبدة المذابة."
    }
};
recipesData.dessert.msemenSucre = {
    country: "maroc",
    image: "images/msemen-sucre.jpg",
    fr: {
        title: "Msemen sucré au miel",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 poêle", "1 pinceau"],
        ingredients: [
            "250 g farine",
            "50 g semoule fine",
            "1 cuillère à café sel",
            "150 ml eau tiède",
            "50 g beurre fondu",
            "50 g miel"
        ],
        preparation:
            "1. Mélanger farine, semoule et sel.\n" +
            "2. Ajouter eau progressivement pour former une pâte souple.\n" +
            "3. Laisser reposer 30 min.\n" +
            "4. Étaler finement, plier en carrés.\n" +
            "5. Cuire dans poêle chaude avec un peu de beurre jusqu’à doré.\n" +
            "6. Napper de miel chaud avant de servir."
    },
    en: {
        title: "Sweet Msemen with Honey",
        equipment: ["1 bowl", "1 rolling pin", "1 pan", "1 brush"],
        ingredients: [
            "250 g flour",
            "50 g fine semolina",
            "1 teaspoon salt",
            "150 ml warm water",
            "50 g melted butter",
            "50 g honey"
        ],
        preparation:
            "1. Mix flour, semolina and salt.\n" +
            "2. Add water gradually to form a soft dough.\n" +
            "3. Rest 30 min.\n" +
            "4. Roll out thinly, fold into squares.\n" +
            "5. Cook in hot pan with some butter until golden.\n" +
            "6. Coat with warm honey before serving."
    },
    nl: {
        title: "Zoete Msemen met Honing",
        equipment: ["1 kom", "1 deegroller", "1 pan", "1 kwast"],
        ingredients: [
            "250 g bloem",
            "50 g fijne griesmeel",
            "1 theelepel zout",
            "150 ml warm water",
            "50 g gesmolten boter",
            "50 g honing"
        ],
        preparation:
            "1. Meng bloem, griesmeel en zout.\n" +
            "2. Voeg geleidelijk water toe tot zacht deeg.\n" +
            "3. Laat 30 min rusten.\n" +
            "4. Rol dun uit en vouw tot vierkanten.\n" +
            "5. Bak in hete pan met wat boter tot goudbruin.\n" +
            "6. Bestrijk met warme honing voor het serveren."
    },
    ar: {
        title: "مسمن حلو بالعسل",
        equipment: ["وعاء", "شوبك العجين", "مقلاة", "فرشاة"],
        ingredients: [
            "250 غ دقيق",
            "50 غ سميد ناعم",
            "1 ملعقة صغيرة ملح",
            "150 مل ماء دافئ",
            "50 غ زبدة مذابة",
            "50 غ عسل"
        ],
        preparation:
            "1. اخلط الدقيق والسميد والملح.\n" +
            "2. أضف الماء تدريجياً للحصول على عجين لين.\n" +
            "3. اتركه يرتاح 30 دقيقة.\n" +
            "4. افرده رقيقاً واطوِه على شكل مربعات.\n" +
            "5. اطبخه في مقلاة ساخنة مع القليل من الزبدة حتى يصبح ذهبياً.\n" +
            "6. غطّه بالعسل الساخن قبل التقديم."
    }
};
recipesData.dessert.pastillaSucree = {
    country: "maroc",
    image: "images/pastilla-sucree.jpg",
    fr: {
        title: "Pastilla sucrée aux amandes",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 four", "1 pinceau"],
        ingredients: [
            "200 g pâte filo",
            "150 g amandes moulues",
            "100 g sucre",
            "50 g beurre fondu",
            "1 cuillère à café cannelle",
            "50 ml eau de fleur d’oranger",
            "Sucre glace pour décoration"
        ],
        preparation:
            "1. Mélanger amandes, sucre, cannelle et eau de fleur d’oranger.\n" +
            "2. Étaler la pâte filo, placer le mélange et replier.\n" +
            "3. Badigeonner de beurre fondu.\n" +
            "4. Cuire 20-25 min à 180°C jusqu’à doré.\n" +
            "5. Saupoudrer de sucre glace avant de servir."
    },
    en: {
        title: "Sweet Pastilla with Almonds",
        equipment: ["1 bowl", "1 rolling pin", "1 oven", "1 brush"],
        ingredients: [
            "200 g phyllo dough",
            "150 g ground almonds",
            "100 g sugar",
            "50 g melted butter",
            "1 teaspoon cinnamon",
            "50 ml orange blossom water",
            "Powdered sugar for decoration"
        ],
        preparation:
            "1. Mix almonds, sugar, cinnamon, and orange blossom water.\n" +
            "2. Roll out phyllo, place mixture and fold.\n" +
            "3. Brush with melted butter.\n" +
            "4. Bake 20-25 min at 180°C until golden.\n" +
            "5. Sprinkle with powdered sugar before serving."
    },
    nl: {
        title: "Zoete Pastilla met Amandelen",
        equipment: ["1 kom", "1 deegroller", "1 oven", "1 kwast"],
        ingredients: [
            "200 g filodeeg",
            "150 g gemalen amandelen",
            "100 g suiker",
            "50 g gesmolten boter",
            "1 theelepel kaneel",
            "50 ml bloesemwater",
            "Poedersuiker voor decoratie"
        ],
        preparation:
            "1. Meng amandelen, suiker, kaneel en bloesemwater.\n" +
            "2. Rol filodeeg uit, leg het mengsel en vouw.\n" +
            "3. Bestrijk met gesmolten boter.\n" +
            "4. Bak 20-25 min op 180°C tot goudbruin.\n" +
            "5. Bestrooi met poedersuiker voor het serveren."
    },
    ar: {
        title: "بسطيلة حلوة باللوز",
        equipment: ["وعاء", "شوبك العجين", "فرن", "فرشاة"],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ لوز مطحون",
            "100 غ سكر",
            "50 غ زبدة مذابة",
            "1 ملعقة صغيرة قرفة",
            "50 مل ماء الزهر",
            "سكر بودرة للتزيين"
        ],
        preparation:
            "1. اخلط اللوز والسكر والقرفة وماء الزهر.\n" +
            "2. افرد عجينة الفيلو، ضع الخليط واطوِه.\n" +
            "3. ادهن بالزبدة المذابة.\n" +
            "4. اخبز 20-25 دقيقة على 180°م حتى يصبح ذهبي.\n" +
            "5. رش السكر البودرة قبل التقديم."
    }
};
recipesData.dessert.sfenj = {
    country: "maroc",
    image: "images/sfenj.jpg",
    fr: {
        title: "Sfenj – beignets marocains",
        equipment: ["1 bol", "1 cuillère en bois", "1 poêle", "1 pinceau"],
        ingredients: [
            "500 g farine",
            "1 cuillère à café sel",
            "1 sachet levure boulangère",
            "300 ml eau tiède",
            "Huile pour friture",
            "Sucre ou miel pour servir"
        ],
        preparation:
            "1. Mélanger farine, sel et levure.\n" +
            "2. Ajouter eau tiède progressivement pour obtenir une pâte souple.\n" +
            "3. Laisser lever 1h.\n" +
            "4. Former des cercles avec les doigts.\n" +
            "5. Faire frire dans l’huile chaude jusqu’à doré.\n" +
            "6. Égoutter et saupoudrer de sucre ou napper de miel avant de servir."
    },
    en: {
        title: "Sfenj – Moroccan Doughnuts",
        equipment: ["1 bowl", "1 wooden spoon", "1 pan", "1 brush"],
        ingredients: [
            "500 g flour",
            "1 teaspoon salt",
            "1 packet yeast",
            "300 ml warm water",
            "Oil for frying",
            "Sugar or honey to serve"
        ],
        preparation:
            "1. Mix flour, salt, and yeast.\n" +
            "2. Gradually add warm water to form a soft dough.\n" +
            "3. Let rise 1 hour.\n" +
            "4. Form circles with your fingers.\n" +
            "5. Fry in hot oil until golden.\n" +
            "6. Drain and sprinkle sugar or coat with honey before serving."
    },
    nl: {
        title: "Sfenj – Marokkaanse Donuts",
        equipment: ["1 kom", "1 houten lepel", "1 pan", "1 kwast"],
        ingredients: [
            "500 g bloem",
            "1 theelepel zout",
            "1 zakje gist",
            "300 ml warm water",
            "Olie om te frituren",
            "Suiker of honing om te serveren"
        ],
        preparation:
            "1. Meng bloem, zout en gist.\n" +
            "2. Voeg geleidelijk warm water toe tot een zacht deeg.\n" +
            "3. Laat 1 uur rijzen.\n" +
            "4. Vorm cirkels met de vingers.\n" +
            "5. Frituur in hete olie tot goudbruin.\n" +
            "6. Laat uitlekken en bestrooi met suiker of bedek met honing voor het serveren."
    },
    ar: {
        title: "سفنج – كعك مغربي",
        equipment: ["وعاء", "ملعقة خشبية", "مقلاة", "فرشاة"],
        ingredients: [
            "500 غ دقيق",
            "1 ملعقة صغيرة ملح",
            "1 كيس خميرة",
            "300 مل ماء دافئ",
            "زيت للقلي",
            "سكر أو عسل للتقديم"
        ],
        preparation:
            "1. اخلط الدقيق والملح والخميرة.\n" +
            "2. أضف الماء الدافئ تدريجياً حتى تحصل على عجين لين.\n" +
            "3. اتركه يختمر 1 ساعة.\n" +
            "4. شكل دوائر بأصابعك.\n" +
            "5. اقليه في الزيت الساخن حتى يصبح ذهبي.\n" +
            "6. صفّه ورشّ السكر أو غطه بالعسل قبل التقديم."
    }
};
recipesData.dessert.kalbElLouz = {
    country: "maroc",
    image: "images/kalb-el-louz.jpg",
    fr: {
        title: "Kalb el Louz",
        equipment: ["1 bol", "1 plat à four", "1 cuillère en bois"],
        ingredients: [
            "250 g semoule fine",
            "100 g sucre",
            "100 g beurre fondu",
            "50 g amandes moulues",
            "100 ml eau de fleur d’oranger",
            "50 g miel"
        ],
        preparation:
            "1. Mélanger semoule, sucre, beurre et amandes.\n" +
            "2. Ajouter eau de fleur d’oranger pour obtenir une pâte humide.\n" +
            "3. Étaler dans un plat beurré.\n" +
            "4. Couper en losanges.\n" +
            "5. Cuire au four 25-30 min à 180°C.\n" +
            "6. Napper de miel chaud avant de servir."
    },
    en: {
        title: "Kalb el Louz",
        equipment: ["1 bowl", "1 baking dish", "1 wooden spoon"],
        ingredients: [
            "250 g fine semolina",
            "100 g sugar",
            "100 g melted butter",
            "50 g ground almonds",
            "100 ml orange blossom water",
            "50 g honey"
        ],
        preparation:
            "1. Mix semolina, sugar, butter, and almonds.\n" +
            "2. Add orange blossom water to form moist dough.\n" +
            "3. Spread in a greased dish.\n" +
            "4. Cut into diamonds.\n" +
            "5. Bake 25-30 min at 180°C.\n" +
            "6. Coat with warm honey before serving."
    },
    nl: {
        title: "Kalb el Louz",
        equipment: ["1 kom", "1 ovenschaal", "1 houten lepel"],
        ingredients: [
            "250 g fijne griesmeel",
            "100 g suiker",
            "100 g gesmolten boter",
            "50 g gemalen amandelen",
            "100 ml bloesemwater",
            "50 g honing"
        ],
        preparation:
            "1. Meng griesmeel, suiker, boter en amandelen.\n" +
            "2. Voeg bloesemwater toe tot vochtig deeg.\n" +
            "3. Spreid uit in ingevette schaal.\n" +
            "4. Snijd in ruiten.\n" +
            "5. Bak 25-30 min op 180°C.\n" +
            "6. Bedek met warme honing voor het serveren."
    },
    ar: {
        title: "قلب اللوز",
        equipment: ["وعاء", "صينية فرن", "ملعقة خشبية"],
        ingredients: [
            "250 غ سميد ناعم",
            "100 غ سكر",
            "100 غ زبدة مذابة",
            "50 غ لوز مطحون",
            "100 مل ماء الزهر",
            "50 غ عسل"
        ],
        preparation:
            "1. اخلط السميد والسكر والزبدة واللوز.\n" +
            "2. أضف ماء الزهر للحصول على عجين رطب.\n" +
            "3. افرده في صينية مدهونة.\n" +
            "4. قطع إلى معينيات.\n" +
            "5. اخبز 25-30 دقيقة على 180°م.\n" +
            "6. غطه بالعسل الساخن قبل التقديم."
    }
};
recipesData.dessert.zalabia = {
    country: "maroc",
    image: "images/zalabia.jpg",
    fr: {
        title: "Zalabia",
        equipment: ["1 bol", "1 cuillère en bois", "1 poêle", "1 louche"],
        ingredients: [
            "250 g farine",
            "1 cuillère à café levure chimique",
            "1/2 cuillère à café sel",
            "150 ml eau tiède",
            "Huile pour friture",
            "50 g miel pour napper"
        ],
        preparation:
            "1. Mélanger farine, levure, sel.\n" +
            "2. Ajouter eau tiède progressivement pour obtenir pâte liquide.\n" +
            "3. Laisser reposer 30 min.\n" +
            "4. Verser la pâte en forme de spirale dans l’huile chaude.\n" +
            "5. Faire frire jusqu’à doré.\n" +
            "6. Égoutter et napper de miel avant de servir."
    },
    en: {
        title: "Zalabia",
        equipment: ["1 bowl", "1 wooden spoon", "1 pan", "1 ladle"],
        ingredients: [
            "250 g flour",
            "1 teaspoon baking powder",
            "1/2 teaspoon salt",
            "150 ml warm water",
            "Oil for frying",
            "50 g honey for coating"
        ],
        preparation:
            "1. Mix flour, baking powder, salt.\n" +
            "2. Gradually add warm water to get a liquid batter.\n" +
            "3. Rest 30 min.\n" +
            "4. Pour batter in spiral shapes into hot oil.\n" +
            "5. Fry until golden.\n" +
            "6. Drain and coat with honey before serving."
    },
    nl: {
        title: "Zalabia",
        equipment: ["1 kom", "1 houten lepel", "1 pan", "1 pollepel"],
        ingredients: [
            "250 g bloem",
            "1 theelepel bakpoeder",
            "1/2 theelepel zout",
            "150 ml warm water",
            "Olie om te frituren",
            "50 g honing om te bedekken"
        ],
        preparation:
            "1. Meng bloem, bakpoeder, zout.\n" +
            "2. Voeg geleidelijk warm water toe tot vloeibaar beslag.\n" +
            "3. Laat 30 min rusten.\n" +
            "4. Giet beslag in spiraalvormen in hete olie.\n" +
            "5. Frituur tot goudbruin.\n" +
            "6. Laat uitlekken en bedek met honing voor het serveren."
    },
    ar: {
        title: "زلابية",
        equipment: ["وعاء", "ملعقة خشبية", "مقلاة", "مغرفة"],
        ingredients: [
            "250 غ دقيق",
            "1 ملعقة صغيرة بيكنج باودر",
            "1/2 ملعقة صغيرة ملح",
            "150 مل ماء دافئ",
            "زيت للقلي",
            "50 غ عسل للتغطية"
        ],
        preparation:
            "1. اخلط الدقيق والبيكنج باودر والملح.\n" +
            "2. أضف الماء الدافئ تدريجياً للحصول على خليط سائل.\n" +
            "3. اتركه 30 دقيقة.\n" +
            "4. اسكب الخليط على شكل دوامات في الزيت الساخن.\n" +
            "5. اقليه حتى يصبح ذهبياً.\n" +
            "6. صفّه وغطّه بالعسل قبل التقديم."
    }
};
recipesData.dessert.ghribaChocolatCafe = {
    country: "maroc",
    image: "images/ghriba-chocolat-cafe.jpg",
    fr: {
        title: "Ghriba chocolat/café",
        equipment: ["1 bol", "1 fouet", "1 four", "1 plaque de cuisson"],
        ingredients: [
            "200 g farine",
            "100 g sucre",
            "50 g cacao ou café soluble",
            "100 g beurre fondu",
            "1 cuillère à café levure chimique",
            "1 cuillère à café vanille"
        ],
        preparation:
            "1. Mélanger farine, sucre, cacao/café, levure et vanille.\n" +
            "2. Ajouter beurre fondu et former une pâte.\n" +
            "3. Former des boules et les placer sur plaque beurrée.\n" +
            "4. Cuire 12-15 min à 180°C.\n" +
            "5. Laisser refroidir avant de servir."
    },
    en: {
        title: "Ghriba Chocolate/Coffee",
        equipment: ["1 bowl", "1 whisk", "1 oven", "1 baking tray"],
        ingredients: [
            "200 g flour",
            "100 g sugar",
            "50 g cocoa or instant coffee",
            "100 g melted butter",
            "1 teaspoon baking powder",
            "1 teaspoon vanilla"
        ],
        preparation:
            "1. Mix flour, sugar, cocoa/coffee, baking powder, and vanilla.\n" +
            "2. Add melted butter and form a dough.\n" +
            "3. Shape into balls and place on greased tray.\n" +
            "4. Bake 12-15 min at 180°C.\n" +
            "5. Let cool before serving."
    },
    nl: {
        title: "Ghriba Chocolade/Koffie",
        equipment: ["1 kom", "1 garde", "1 oven", "1 bakplaat"],
        ingredients: [
            "200 g bloem",
            "100 g suiker",
            "50 g cacao of oploskoffie",
            "100 g gesmolten boter",
            "1 theelepel bakpoeder",
            "1 theelepel vanille"
        ],
        preparation:
            "1. Meng bloem, suiker, cacao/koffie, bakpoeder en vanille.\n" +
            "2. Voeg gesmolten boter toe en vorm deeg.\n" +
            "3. Vorm balletjes en leg op ingevette bakplaat.\n" +
            "4. Bak 12-15 min op 180°C.\n" +
            "5. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "غريبة الشوكولاتة/القهوة",
        equipment: ["وعاء", "خفاق", "فرن", "صينية خبز"],
        ingredients: [
            "200 غ دقيق",
            "100 غ سكر",
            "50 غ كاكاو أو قهوة سريعة",
            "100 غ زبدة مذابة",
            "1 ملعقة صغيرة بيكنج باودر",
            "1 ملعقة صغيرة فانيليا"
        ],
        preparation:
            "1. اخلط الدقيق والسكر والكاكاو/القهوة والبيكنج باودر والفانيليا.\n" +
            "2. أضف الزبدة المذابة وشكّل عجين.\n" +
            "3. شكل كرات وضعها على صينية مدهونة.\n" +
            "4. اخبز 12-15 دقيقة على 180°م.\n" +
            "5. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.kaabElGhazal = {
    country: "maroc",
    image: "images/kaab-el-ghazal.jpg",
    fr: {
        title: "Kaab el Ghazal – cornes de gazelle",
        equipment: ["1 bol", "1 rouleau à pâtisserie", "1 four", "1 pinceau"],
        ingredients: [
            "250 g farine",
            "50 g beurre fondu",
            "150 g pâte d’amandes",
            "50 g sucre glace",
            "1 cuillère à soupe eau de fleur d’oranger"
        ],
        preparation:
            "1. Mélanger farine et beurre fondu pour obtenir pâte.\n" +
            "2. Étaler la pâte, découper des rectangles.\n" +
            "3. Placer pâte d’amandes au centre et rouler en croissant.\n" +
            "4. Cuire 15-20 min à 180°C.\n" +
            "5. Saupoudrer de sucre glace avant de servir."
    },
    en: {
        title: "Kaab el Ghazal – Gazelle Horns",
        equipment: ["1 bowl", "1 rolling pin", "1 oven", "1 brush"],
        ingredients: [
            "250 g flour",
            "50 g melted butter",
            "150 g almond paste",
            "50 g powdered sugar",
            "1 tablespoon orange blossom water"
        ],
        preparation:
            "1. Mix flour and melted butter to form dough.\n" +
            "2. Roll out dough, cut into rectangles.\n" +
            "3. Place almond paste in center and roll into crescent.\n" +
            "4. Bake 15-20 min at 180°C.\n" +
            "5. Sprinkle with powdered sugar before serving."
    },
    nl: {
        title: "Kaab el Ghazal – Gazelle Hoorns",
        equipment: ["1 kom", "1 deegroller", "1 oven", "1 kwast"],
        ingredients: [
            "250 g bloem",
            "50 g gesmolten boter",
            "150 g amandelpasta",
            "50 g poedersuiker",
            "1 eetlepel bloesemwater"
        ],
        preparation:
            "1. Meng bloem en gesmolten boter tot deeg.\n" +
            "2. Rol deeg uit, snijd in rechthoeken.\n" +
            "3. Plaats amandelpasta in het midden en rol tot halve maan.\n" +
            "4. Bak 15-20 min op 180°C.\n" +
            "5. Bestrooi met poedersuiker voor het serveren."
    },
    ar: {
        title: "كعب الغزال",
        equipment: ["وعاء", "شوبك العجين", "فرن", "فرشاة"],
        ingredients: [
            "250 غ دقيق",
            "50 غ زبدة مذابة",
            "150 غ معجون اللوز",
            "50 غ سكر بودرة",
            "1 ملعقة كبيرة ماء الزهر"
        ],
        preparation:
            "1. اخلط الدقيق والزبدة المذابة لتشكيل عجين.\n" +
            "2. افرد العجين وقطع إلى مستطيلات.\n" +
            "3. ضع معجون اللوز في الوسط ولفّه على شكل هلال.\n" +
            "4. اخبز 15-20 دقيقة على 180°م.\n" +
            "5. رشّ بالسكر البودرة قبل التقديم."
    }
};

recipesData.patisserie.ghribaAmandes = {
    country: "maroc",
    image: "images/ghriba-amandes.jpg",
    fr: {
        title: "Ghriba aux amandes (4 personnes)",
        equipment: [
            "1 saladier",
            "1 plaque de cuisson",
            "1 papier cuisson",
            "1 four"
        ],
        ingredients: [
            "250 g poudre d’amandes",
            "100 g sucre",
            "1 œuf",
            "1 cuillère à café levure chimique (5 g)",
            "50 g sucre glace"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes. Préchauffer le four à 180°C. Mélanger la poudre d’amandes, le sucre et la levure. Ajouter l’œuf et mélanger. Former des boules. Les rouler dans le sucre glace. Les déposer sur une plaque. Cuire 15 minutes."
    },
    en: {
        title: "Almond Ghriba (Serves 4)",
        equipment: [
            "1 bowl",
            "1 baking tray",
            "1 baking paper",
            "1 oven"
        ],
        ingredients: [
            "250 g ground almonds",
            "100 g sugar",
            "1 egg",
            "1 teaspoon baking powder (5 g)",
            "50 g icing sugar"
        ],
        preparation:
            "This recipe serves 4 people. Preheat oven to 180°C. Mix almonds, sugar, and baking powder. Add egg and mix. Form balls. Roll in icing sugar. Bake 15 minutes."
    },
    nl: {
        title: "Amandel-ghriba (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 bakplaat",
            "1 bakpapier",
            "1 oven"
        ],
        ingredients: [
            "250 g amandelpoeder",
            "100 g suiker",
            "1 ei",
            "1 theelepel bakpoeder (5 g)",
            "50 g poedersuiker"
        ],
        preparation:
            "Dit recept is voor 4 personen. Verwarm oven voor op 180°C. Meng alle ingrediënten. Vorm bolletjes. Rol in poedersuiker. Bak 15 minuten."
    },
    ar: {
        title: "غريبة باللوز (تكفي 4 أشخاص)",
        equipment: [
            "وعاء",
            "صينية فرن",
            "ورق خبز",
            "فرن"
        ],
        ingredients: [
            "250غ لوز مطحون",
            "100غ سكر",
            "بيضة واحدة",
            "ملعقة صغيرة خميرة (5غ)",
            "50غ سكر ناعم"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. سخن الفرن على 180 درجة. اخلط المكونات. شكّل كرات. غطِّها بالسكر الناعم. اخبز 15 دقيقة."
    }
};



// Tu peux continuer à ajouter toutes tes recettes ici, dans n’importe quel ordre
// Exemple : Waterzooi (Belgique)
recipesData.entree.soupePoireaux = {
    country: "belgique",
    image: "images/soupe-poireaux.jpg",
    fr: {
        title: "Soupe de poireaux et pommes de terre (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 mixeur plongeant",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "3 poireaux moyens (450 g)",
            "3 pommes de terre moyennes (450 g)",
            "1 oignon moyen (120 g)",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "1 litre d’eau",
            "1 cube de bouillon de légumes halal",
            "1 cuillère à café de sel (5 g)",
            "1/2 cuillère à café de poivre"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes. Laver soigneusement les poireaux et les couper en rondelles fines. Éplucher les pommes de terre et les couper en cubes de 2 cm. Éplucher et hacher finement l’oignon. Mettre la casserole sur feu moyen. Ajouter l’huile d’olive et attendre 1 minute. Ajouter l’oignon et faire revenir 3-4 minutes jusqu’à ce qu’il devienne translucide. Ajouter les poireaux et cuire 5 minutes en remuant. Ajouter les pommes de terre, le cube de bouillon et 1 litre d’eau. Porter à ébullition, puis baisser le feu et laisser mijoter 25 minutes. Mixer la soupe jusqu’à obtenir une texture lisse. Saler et poivrer. Servir chaud."
    },
    en: {
        title: "Leek and Potato Soup (Serves 4, halal)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 immersion blender",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "3 medium leeks (450 g)",
            "3 medium potatoes (450 g)",
            "1 medium onion (120 g)",
            "2 tablespoons olive oil (30 ml)",
            "1 liter water",
            "1 halal vegetable stock cube",
            "1 teaspoon salt (5 g)",
            "1/2 teaspoon black pepper"
        ],
        preparation:
            "This recipe serves 4 people. Wash leeks carefully and slice thinly. Peel potatoes and cut into 2 cm cubes. Peel and finely chop onion. Heat pot over medium heat. Add olive oil and wait 1 minute. Add onion and sauté 3-4 minutes until translucent. Add leeks and cook 5 minutes, stirring. Add potatoes, stock cube, and 1 liter water. Bring to boil, reduce heat, and simmer 25 minutes. Blend soup until smooth. Season with salt and pepper. Serve hot."
    },
    nl: {
        title: "Prei en aardappelsoep (voor 4 personen, halal)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 staafmixer",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "3 middelgrote preien (450 g)",
            "3 middelgrote aardappelen (450 g)",
            "1 middelgrote ui (120 g)",
            "2 eetlepels olijfolie (30 ml)",
            "1 liter water",
            "1 halal groentebouillonblokje",
            "1 theelepel zout (5 g)",
            "1/2 theelepel zwarte peper"
        ],
        preparation:
            "Dit recept is voor 4 personen. Was de preien goed en snijd in dunne ringen. Schil de aardappelen en snijd in blokjes van 2 cm. Schil en hak de ui fijn. Verhit de pan op middelhoog vuur. Voeg olijfolie toe en wacht 1 minuut. Voeg ui toe en bak 3-4 minuten tot glazig. Voeg prei toe en bak 5 minuten onder regelmatig roeren. Voeg aardappelen, bouillonblokje en 1 liter water toe. Breng aan de kook, zet het vuur laag en laat 25 minuten sudderen. Mix tot een gladde soep. Breng op smaak met zout en peper. Serveer warm."
    },
    ar: {
        title: "حساء الكراث والبطاطس (يكفي 4 أشخاص، حلال)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "خلاط يدوي",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "3 كراث متوسط (450غ)",
            "3 بطاطس متوسطة (450غ)",
            "بصلة متوسطة (120غ)",
            "2 ملعقة كبيرة زيت زيتون (30مل)",
            "1 لتر ماء",
            "1 مكعب مرق خضار حلال",
            "1 ملعقة صغيرة ملح (5غ)",
            "نصف ملعقة صغيرة فلفل أسود"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. اغسل الكراث جيداً وقطعه إلى شرائح رفيعة. قشر البطاطس وقطعها إلى مكعبات 2 سم. قشر البصلة وافرمه ناعماً. ضع القدر على نار متوسطة. أضف زيت الزيتون وانتظر دقيقة. أضف البصلة وقلّب 3-4 دقائق حتى تصبح شفافة. أضف الكراث واطبخ 5 دقائق مع التحريك. أضف البطاطس ومكعب المرق و1 لتر ماء. ارفع الحرارة حتى الغليان، ثم اخفضها واتركه يطهى 25 دقيقة. امزج الحساء حتى يصبح ناعماً. أضف الملح والفلفل. قدمه ساخناً."
    }
};
recipesData.entree.croquettesCrevettes = {
    country: "belgique",
    image: "images/croquettes-crevettes.jpg",
    fr: {
        title: "Croquettes de crevettes grises (4 personnes)",
        equipment: [
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol"
        ],
        ingredients: [
            "200 g de crevettes grises décortiquées",
            "50 g de beurre",
            "50 g de farine",
            "250 ml de lait",
            "1 cuillère à café de sel",
            "1/2 cuillère à café de poivre",
            "1 pincée de noix de muscade",
            "2 œufs",
            "50 g de chapelure",
            "Huile pour friture"
        ],
        preparation:
            "Faire fondre le beurre dans une casserole, ajouter la farine et cuire 1 minute. Ajouter le lait progressivement tout en mélangeant pour obtenir une béchamel. Ajouter les crevettes, le sel, le poivre et la muscade. Laisser refroidir. Former des croquettes, les tremper dans l'œuf puis la chapelure. Faire frire dans l'huile chaude jusqu'à dorure. Servir chaud."
    },
    en: {
        title: "Grey Shrimp Croquettes (Serves 4)",
        equipment: [
            "1 frying pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl"
        ],
        ingredients: [
            "200 g peeled grey shrimp",
            "50 g butter",
            "50 g flour",
            "250 ml milk",
            "1 tsp salt",
            "1/2 tsp pepper",
            "Pinch of nutmeg",
            "2 eggs",
            "50 g breadcrumbs",
            "Oil for frying"
        ],
        preparation:
            "Melt butter in a pan, add flour and cook for 1 minute. Gradually add milk while stirring to get a béchamel. Add shrimp, salt, pepper and nutmeg. Let cool. Shape into croquettes, dip in egg then breadcrumbs. Fry in hot oil until golden. Serve hot."
    },
    nl: {
        title: "Grijze garnalen kroketten (voor 4 personen)",
        equipment: [
            "1 koekenpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom"
        ],
        ingredients: [
            "200 g gepelde grijze garnalen",
            "50 g boter",
            "50 g bloem",
            "250 ml melk",
            "1 theelepel zout",
            "1/2 theelepel peper",
            "Snufje nootmuskaat",
            "2 eieren",
            "50 g paneermeel",
            "Olie om te frituren"
        ],
        preparation:
            "Smelt de boter in een pan, voeg de bloem toe en bak 1 minuut. Voeg geleidelijk de melk toe terwijl je roert om een bechamelsaus te maken. Voeg garnalen, zout, peper en nootmuskaat toe. Laat afkoelen. Vorm kroketten, doop in ei en daarna in paneermeel. Bak in hete olie tot goudbruin. Serveer warm."
    },
    ar: {
        title: "كروكيت الروبيان الرمادي (لـ 4 أشخاص)",
        equipment: [
            "مقلاة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء"
        ],
        ingredients: [
            "200 غ من الروبيان الرمادي المقشر",
            "50 غ زبدة",
            "50 غ دقيق",
            "250 مل حليب",
            "1 ملعقة صغيرة ملح",
            "نصف ملعقة صغيرة فلفل",
            "رشة جوزة الطيب",
            "2 بيض",
            "50 غ بقسماط",
            "زيت للقلي"
        ],
        preparation:
            "ذوب الزبدة في قدر، أضف الدقيق واطبخه لمدة دقيقة. أضف الحليب تدريجيًا مع التحريك للحصول على صلصة بيشاميل. أضف الروبيان والملح والفلفل وجوزة الطيب. اتركه يبرد. شكل الكروكيت، اغمسها في البيض ثم في البقسماط. اقليها في الزيت الساخن حتى تصبح ذهبية. قدمها ساخنة."
    }
};
recipesData.entree.potageLegumes = {
    country: "belgique",
    image: "images/potage-legumes.jpg",
    fr: {
        title: "Potage de légumes maison (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 mixeur plongeant",
            "1 cuillère en bois"
        ],
        ingredients: [
            "2 carottes moyennes (200 g)",
            "2 pommes de terre moyennes (200 g)",
            "1 poireau (150 g)",
            "1 branche de céleri",
            "1 oignon moyen (100 g)",
            "1 litre de bouillon de légumes",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre"
        ],
        preparation:
            "Éplucher et couper les légumes en morceaux. Faire revenir l’oignon dans l’huile d’olive 5 minutes. Ajouter le reste des légumes et le bouillon. Porter à ébullition puis laisser mijoter 25 minutes. Mixer le potage jusqu’à consistance lisse. Assaisonner et servir chaud."
    },
    en: {
        title: "Homemade Vegetable Soup (Serves 4)",
        equipment: [
            "1 pot",
            "1 knife",
            "1 cutting board",
            "1 immersion blender",
            "1 wooden spoon"
        ],
        ingredients: [
            "2 carrots (200 g)",
            "2 potatoes (200 g)",
            "1 leek (150 g)",
            "1 celery stalk",
            "1 medium onion (100 g)",
            "1 liter vegetable broth",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        preparation:
            "Peel and cut vegetables into pieces. Sauté onion in olive oil for 5 minutes. Add remaining vegetables and broth. Bring to boil then simmer 25 minutes. Blend until smooth. Season and serve hot."
    },
    nl: {
        title: "Huisgemaakte groentesoep (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 staafmixer",
            "1 houten lepel"
        ],
        ingredients: [
            "2 wortelen (200 g)",
            "2 aardappelen (200 g)",
            "1 prei (150 g)",
            "1 selderijstengel",
            "1 ui (100 g)",
            "1 liter groentebouillon",
            "2 eetlepels olijfolie",
            "Zout en peper"
        ],
        preparation:
            "Schil en snijd de groenten in stukken. Fruit de ui 5 minuten in olijfolie. Voeg de rest van de groenten en bouillon toe. Breng aan de kook en laat 25 minuten sudderen. Mix tot een gladde soep. Breng op smaak en serveer warm."
    },
    ar: {
        title: "شوربة خضار منزلية (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "خلاط يدوي",
            "ملعقة خشبية"
        ],
        ingredients: [
            "2 جزرات متوسطة (200غ)",
            "2 بطاطس متوسطة (200غ)",
            "1 كراث (150غ)",
            "1 عود كرفس",
            "1 بصلة متوسطة (100غ)",
            "1 لتر مرق خضار",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل"
        ],
        preparation:
            "قشّر وقطع الخضار. قلّي البصلة في الزيت 5 دقائق. أضف باقي الخضار والمرق. اتركه يغلي ثم خفف النار لمدة 25 دقيقة. اخلط الشوربة حتى تصبح ناعمة. تبّل وقدّم ساخنة."
    }
};

recipesData.entree.saladeLiegeoise = {
    country: "belgique",
    image: "images/salade-liegeoise.jpg",
    fr: {
        title: "Salade liégeoise (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 grande salade",
            "1 cuillère en bois"
        ],
        ingredients: [
            "400 g de haricots verts",
            "300 g de pommes de terre",
            "1 oignon moyen",
            "3 cuillères à soupe d’huile d’olive",
            "1 cuillère à café de sel",
            "1/2 cuillère à café de poivre",
            "Persil frais pour garnir"
        ],
        preparation:
            "Cuire les pommes de terre et les haricots verts séparément jusqu’à tendreté. Émincer l’oignon et le faire revenir légèrement dans l’huile. Mélanger tous les ingrédients dans un saladier. Assaisonner avec sel, poivre et persil. Servir tiède ou froid."
    },
    en: {
        title: "Liège Salad (Serves 4)",
        equipment: [
            "1 pot",
            "1 knife",
            "1 cutting board",
            "1 large bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "400 g green beans",
            "300 g potatoes",
            "1 medium onion",
            "3 tbsp olive oil",
            "1 tsp salt",
            "1/2 tsp pepper",
            "Fresh parsley to garnish"
        ],
        preparation:
            "Cook potatoes and green beans separately until tender. Slice onion and lightly sauté in oil. Mix all ingredients in a bowl. Season with salt, pepper, and parsley. Serve warm or cold."
    },
    nl: {
        title: "Luikse salade (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 grote kom",
            "1 houten lepel"
        ],
        ingredients: [
            "400 g sperziebonen",
            "300 g aardappelen",
            "1 ui",
            "3 eetlepels olijfolie",
            "1 theelepel zout",
            "1/2 theelepel peper",
            "Verse peterselie voor garnering"
        ],
        preparation:
            "Kook de aardappelen en sperziebonen apart tot ze zacht zijn. Snijd de ui en bak lichtjes in olie. Meng alles in een kom. Breng op smaak met zout, peper en peterselie. Serveer warm of koud."
    },
    ar: {
        title: "سلطة لييج (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "وعاء كبير",
            "ملعقة خشبية"
        ],
        ingredients: [
            "400 غ فاصوليا خضراء",
            "300 غ بطاطس",
            "1 بصلة متوسطة",
            "3 ملاعق كبيرة زيت زيتون",
            "1 ملعقة صغيرة ملح",
            "نصف ملعقة صغيرة فلفل",
            "بقدونس طازج للتزيين"
        ],
        preparation:
            "اسلق البطاطس والفاصوليا الخضراء بشكل منفصل حتى تصبح طرية. قطّع البصلة وقلّها قليلاً في الزيت. اخلط كل المكونات في وعاء. تبّل بالملح والفلفل والبقدونس. قدمها دافئة أو باردة."
    }
};

recipesData.entree.endivesGratinees = {
    country: "belgique",
    image: "images/endives-gratinees.jpg",
    fr: {
        title: "Endives gratinées au fromage (4 personnes)",
        equipment: [
            "1 plat à gratin",
            "1 couteau",
            "1 planche à découper",
            "1 casserole",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 endives",
            "50 g de beurre",
            "50 g de farine",
            "500 ml de lait",
            "100 g de fromage râpé",
            "Sel et poivre"
        ],
        preparation:
            "Préchauffer le four à 180°C. Cuire les endives à l’eau bouillante 10 minutes puis les égoutter. Préparer une sauce béchamel avec le beurre, la farine et le lait. Assaisonner avec sel et poivre. Placer les endives dans le plat, napper de béchamel et parsemer de fromage râpé. Cuire 20 minutes jusqu’à gratin doré."
    },
    en: {
        title: "Cheese Gratinated Endives (Serves 4)",
        equipment: [
            "1 gratin dish",
            "1 knife",
            "1 cutting board",
            "1 pot",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 endives",
            "50 g butter",
            "50 g flour",
            "500 ml milk",
            "100 g grated cheese",
            "Salt and pepper"
        ],
        preparation:
            "Preheat oven to 180°C. Boil endives 10 minutes and drain. Prepare a béchamel sauce with butter, flour, and milk. Season with salt and pepper. Place endives in the dish, cover with béchamel and sprinkle with cheese. Bake 20 minutes until golden."
    },
    nl: {
        title: "Witlofschotel met kaas (voor 4 personen)",
        equipment: [
            "1 ovenschaal",
            "1 mes",
            "1 snijplank",
            "1 pan",
            "1 houten lepel"
        ],
        ingredients: [
            "4 witloofstronken",
            "50 g boter",
            "50 g bloem",
            "500 ml melk",
            "100 g geraspte kaas",
            "Zout en peper"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Kook witlof 10 minuten en laat uitlekken. Maak een béchamelsaus met boter, bloem en melk. Breng op smaak met zout en peper. Leg witlof in ovenschaal, bedek met saus en strooi kaas erover. Bak 20 minuten tot goudbruin."
    },
    ar: {
        title: "الهندباء بالجبن المشوي (تكفي 4 أشخاص)",
        equipment: [
            "طبق فرن",
            "سكين",
            "لوح تقطيع",
            "قدر",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 جذور الهندباء",
            "50 غ زبدة",
            "50 غ دقيق",
            "500 مل حليب",
            "100 غ جبن مبشور",
            "ملح وفلفل"
        ],
        preparation:
            "سخّن الفرن على 180°C. اسلق الهندباء 10 دقائق وصفيها. حضّر صلصة بشاميل بالزبدة والدقيق والحليب. تبّل بالملح والفلفل. ضع الهندباء في الطبق، غطها بالصلصة ورش الجبن. اخبز 20 دقيقة حتى يصبح الوجه ذهبي."
    }
};

recipesData.entree.tomatesMozzarella = {
    country: "belgique",
    image: "images/tomates-mozzarella.jpg",
    fr: {
        title: "Salade tomates mozzarella (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 grand saladier",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 tomates",
            "200 g de mozzarella",
            "2 cuillères à soupe d’huile d’olive",
            "Basilic frais",
            "Sel et poivre"
        ],
        preparation:
            "Couper les tomates et la mozzarella en tranches. Disposer dans un saladier en alternant les tranches. Arroser d’huile d’olive, parsemer de basilic, sel et poivre. Servir frais."
    },
    en: {
        title: "Tomato Mozzarella Salad (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 large bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 tomatoes",
            "200 g mozzarella",
            "2 tbsp olive oil",
            "Fresh basil",
            "Salt and pepper"
        ],
        preparation:
            "Slice tomatoes and mozzarella. Arrange in a bowl alternating slices. Drizzle with olive oil, sprinkle basil, salt, and pepper. Serve chilled."
    },
    nl: {
        title: "Tomaat Mozzarella salade (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 grote kom",
            "1 houten lepel"
        ],
        ingredients: [
            "4 tomaten",
            "200 g mozzarella",
            "2 eetlepels olijfolie",
            "Verse basilicum",
            "Zout en peper"
        ],
        preparation:
            "Snijd tomaten en mozzarella in plakjes. Rangschik in een kom afwisselend. Besprenkel met olijfolie, bestrooi met basilicum, zout en peper. Serveer koud."
    },
    ar: {
        title: "سلطة طماطم وموزاريلا (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "وعاء كبير",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 طماطم",
            "200 غ موزاريلا",
            "2 ملاعق كبيرة زيت زيتون",
            "ريحان طازج",
            "ملح وفلفل"
        ],
        preparation:
            "قطع الطماطم والموزاريلا إلى شرائح. ضعها في وعاء بالتناوب. أضف زيت الزيتون، الريحان، الملح والفلفل. قدّمها باردة."
    }
};

recipesData.entree.saladeCarottesRaisins = {
    country: "belgique",
    image: "images/salade-carottes-raisins.jpg",
    fr: {
        title: "Salade de carottes et raisins (4 personnes)",
        equipment: [
            "1 bol",
            "1 couteau",
            "1 planche à découper",
            "1 râpe",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 carottes moyennes",
            "50 g de raisins secs",
            "2 cuillères à soupe d’huile d’olive",
            "1 cuillère à soupe de jus de citron",
            "Sel et poivre"
        ],
        preparation:
            "Éplucher et râper les carottes. Ajouter les raisins secs dans un bol. Mélanger avec l’huile d’olive, le jus de citron, sel et poivre. Servir frais."
    },
    en: {
        title: "Carrot and Raisin Salad (Serves 4)",
        equipment: [
            "1 bowl",
            "1 knife",
            "1 cutting board",
            "1 grater",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 medium carrots",
            "50 g raisins",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper"
        ],
        preparation:
            "Peel and grate the carrots. Add raisins to a bowl. Mix with olive oil, lemon juice, salt and pepper. Serve chilled."
    },
    nl: {
        title: "Wortel-rozijnensalade (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 mes",
            "1 snijplank",
            "1 rasp",
            "1 houten lepel"
        ],
        ingredients: [
            "4 middelgrote wortelen",
            "50 g rozijnen",
            "2 eetlepels olijfolie",
            "1 eetlepel citroensap",
            "Zout en peper"
        ],
        preparation:
            "Schil en rasp de wortelen. Voeg de rozijnen toe in een kom. Meng met olijfolie, citroensap, zout en peper. Serveer koud."
    },
    ar: {
        title: "سلطة الجزر والزبيب (تكفي 4 أشخاص)",
        equipment: [
            "وعاء",
            "سكين",
            "لوح تقطيع",
            "مبشرة",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 جزرات متوسطة",
            "50 غ زبيب",
            "2 ملاعق كبيرة زيت زيتون",
            "1 ملعقة كبيرة عصير ليمون",
            "ملح وفلفل"
        ],
        preparation:
            "قشّر وابشر الجزر. أضف الزبيب إلى وعاء. اخلط مع زيت الزيتون، عصير الليمون، الملح والفلفل. قدّمها باردة."
    }
};

recipesData.entree.oeufsMimosa = {
    country: "belgique",
    image: "images/oeufs-mimosa.jpg",
    fr: {
        title: "Œufs mimosa (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 fourchette"
        ],
        ingredients: [
            "4 œufs",
            "2 cuillères à soupe de mayonnaise",
            "Sel et poivre",
            "Paprika pour garnir"
        ],
        preparation:
            "Faire cuire les œufs 10 minutes. Les refroidir, les écaler et les couper en deux. Retirer les jaunes et les écraser avec la mayonnaise, sel et poivre. Remplir les blancs avec ce mélange et saupoudrer de paprika."
    },
    en: {
        title: "Deviled Eggs (Serves 4)",
        equipment: [
            "1 pot",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 fork"
        ],
        ingredients: [
            "4 eggs",
            "2 tbsp mayonnaise",
            "Salt and pepper",
            "Paprika for garnish"
        ],
        preparation:
            "Boil eggs 10 minutes. Cool, peel, and halve them. Remove yolks and mash with mayonnaise, salt, and pepper. Fill egg whites with mixture and sprinkle with paprika."
    },
    nl: {
        title: "Gevulde eieren (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 vork"
        ],
        ingredients: [
            "4 eieren",
            "2 eetlepels mayonaise",
            "Zout en peper",
            "Paprikapoeder voor garnering"
        ],
        preparation:
            "Kook de eieren 10 minuten. Laat afkoelen, pel en halveer. Haal de dooiers eruit en meng met mayonaise, zout en peper. Vul de eiwitten en bestrooi met paprikapoeder."
    },
    ar: {
        title: "بيض ميموزا (يكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "شوكة"
        ],
        ingredients: [
            "4 بيضات",
            "2 ملاعق كبيرة مايونيز",
            "ملح وفلفل",
            "بابريكا للتزيين"
        ],
        preparation:
            "اسلق البيض 10 دقائق. برده، قشره وقطعه نصفين. أخرج الصفار واهرسه مع المايونيز، الملح والفلفل. املأ بياض البيض بالمزيج ورش البابريكا."
    }
};

recipesData.entree.saladeBetteraves = {
    country: "belgique",
    image: "images/salade-betteraves.jpg",
    fr: {
        title: "Salade de betteraves (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 betteraves cuites",
            "2 cuillères à soupe d’huile d’olive",
            "1 cuillère à soupe de jus de citron",
            "Sel et poivre",
            "Persil pour garnir"
        ],
        preparation:
            "Couper les betteraves en cubes. Mélanger avec l’huile, le jus de citron, sel et poivre. Parsemer de persil avant de servir."
    },
    en: {
        title: "Beetroot Salad (Serves 4)",
        equipment: [
            "1 pot",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 cooked beetroots",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper",
            "Parsley for garnish"
        ],
        preparation:
            "Cut beetroots into cubes. Mix with oil, lemon juice, salt, and pepper. Sprinkle parsley before serving."
    },
    nl: {
        title: "Bietensalade (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 houten lepel"
        ],
        ingredients: [
            "4 gekookte bieten",
            "2 eetlepels olijfolie",
            "1 eetlepel citroensap",
            "Zout en peper",
            "Peterselie voor garnering"
        ],
        preparation:
            "Snijd bieten in blokjes. Meng met olie, citroensap, zout en peper. Bestrooi met peterselie voor het serveren."
    },
    ar: {
        title: "سلطة الشمندر (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 شمندر مسلوق",
            "2 ملاعق كبيرة زيت زيتون",
            "1 ملعقة كبيرة عصير ليمون",
            "ملح وفلفل",
            "بقدونس للتزيين"
        ],
        preparation:
            "قطع الشمندر إلى مكعبات. اخلطه مع الزيت وعصير الليمون والملح والفلفل. رش البقدونس قبل التقديم."
    }
};

recipesData.entree.saladeChiconsPommes = {
    country: "belgique",
    image: "images/salade-chicons-pommes.jpg",
    fr: {
        title: "Salade chicons et pommes (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 endives",
            "2 pommes",
            "2 cuillères à soupe d’huile d’olive",
            "1 cuillère à soupe de jus de citron",
            "Sel et poivre"
        ],
        preparation:
            "Émincer les endives et les pommes. Mélanger dans un bol avec huile, jus de citron, sel et poivre. Servir frais."
    },
    en: {
        title: "Endive and Apple Salad (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 endives",
            "2 apples",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper"
        ],
        preparation:
            "Slice endives and apples. Mix in a bowl with oil, lemon juice, salt and pepper. Serve chilled."
    },
    nl: {
        title: "Witloof en appel salade (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 houten lepel"
        ],
        ingredients: [
            "4 witloofstronken",
            "2 appels",
            "2 eetlepels olijfolie",
            "1 eetlepel citroensap",
            "Zout en peper"
        ],
        preparation:
            "Snijd witlof en appels. Meng in een kom met olie, citroensap, zout en peper. Serveer koud."
    },
    ar: {
        title: "سلطة الهندباء والتفاح (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 جذور الهندباء",
            "2 تفاحات",
            "2 ملاعق كبيرة زيت زيتون",
            "1 ملعقة كبيرة عصير ليمون",
            "ملح وفلفل"
        ],
        preparation:
            "قطّع الهندباء والتفاح. اخلطهم في وعاء مع الزيت، عصير الليمون، الملح والفلفل. قدّمها باردة."
    }
};


// ----------------------------
// Exemple pour la suite : potageLegumes, saladeLiegeoise, velouteCourgettes, oeufsMimosa, rillettesSaumon, quicheLegumes, tarteFinePoireaux, bouchéesChampignons
// À répéter pour chaque recette en suivant le même modèle

recipesData.plat.stoofvleesPoulet = {
    country: "belgique",
    image: "images/stoofvlees-poulet.jpg",

    fr: {
        title: "Stoofvlees au poulet (4 personnes)",
        equipment: [
            "1 grande casserole ou cocotte",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "600 g de blanc de poulet, coupé en cubes de 3 cm",
            "2 oignons moyens (240 g), émincés finement",
            "2 carottes moyennes (200 g), coupées en rondelles",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "300 ml de bouillon de légumes",
            "1 cuillère à soupe de moutarde douce",
            "1 cuillère à café de paprika doux (2 g)",
            "1 cuillère à café de sel (5 g)",
            "1/2 cuillère à café de poivre",
            "2 feuilles de laurier",
            "1 branche de thym"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes.\n" +
            "1. Émincer les oignons et couper les carottes en rondelles de 1 cm.\n" +
            "2. Couper le poulet en cubes de 3 cm.\n" +
            "3. Chauffer la casserole à feu moyen et ajouter l’huile d’olive.\n" +
            "4. Ajouter les oignons et faire revenir 5 minutes jusqu’à ce qu’ils soient translucides.\n" +
            "5. Ajouter le poulet, le paprika, le sel et le poivre. Mélanger et cuire 5 minutes pour le faire dorer légèrement.\n" +
            "6. Ajouter les carottes, le bouillon de légumes, le laurier et le thym.\n" +
            "7. Mélanger, couvrir et laisser mijoter à feu doux pendant 25 à 30 minutes, en remuant de temps en temps.\n" +
            "8. Ajouter la moutarde, mélanger et cuire encore 2 minutes.\n" +
            "9. Vérifier la cuisson et servir chaud avec du pain ou des pommes de terre vapeur."
    },

    en: {
        title: "Chicken Stoofvlees (4 servings)",
        equipment: [
            "1 large pot or casserole",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "600 g chicken breast, cut into 3 cm cubes",
            "2 medium onions (240 g), finely sliced",
            "2 medium carrots (200 g), sliced",
            "2 tablespoons olive oil (30 ml)",
            "300 ml vegetable stock",
            "1 tablespoon mild mustard",
            "1 teaspoon sweet paprika (2 g)",
            "1 teaspoon salt (5 g)",
            "1/2 teaspoon black pepper",
            "2 bay leaves",
            "1 sprig of thyme"
        ],
        preparation:
            "This recipe serves 4 people.\n" +
            "1. Slice the onions and cut the carrots into 1 cm rounds.\n" +
            "2. Cut the chicken into 3 cm cubes.\n" +
            "3. Heat the pot over medium heat and add the olive oil.\n" +
            "4. Add the onions and cook for 5 minutes until translucent.\n" +
            "5. Add the chicken, paprika, salt and pepper. Stir and cook for 5 minutes until lightly browned.\n" +
            "6. Add the carrots, vegetable stock, bay leaves and thyme.\n" +
            "7. Stir, cover and simmer over low heat for 25–30 minutes, stirring occasionally.\n" +
            "8. Add the mustard, stir and cook for another 2 minutes.\n" +
            "9. Check doneness and serve hot with bread or steamed potatoes."
    },

    nl: {
        title: "Stoofvlees met kip (4 personen)",
        equipment: [
            "1 grote kookpot of stoofpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "600 g kipfilet, in blokjes van 3 cm",
            "2 middelgrote uien (240 g), fijn gesneden",
            "2 middelgrote wortels (200 g), in schijfjes",
            "2 eetlepels olijfolie (30 ml)",
            "300 ml groentebouillon",
            "1 eetlepel milde mosterd",
            "1 theelepel zoete paprikapoeder (2 g)",
            "1 theelepel zout (5 g)",
            "1/2 theelepel zwarte peper",
            "2 laurierblaadjes",
            "1 takje tijm"
        ],
        preparation:
            "Dit recept is voor 4 personen.\n" +
            "1. Snijd de uien fijn en snijd de wortels in schijfjes van 1 cm.\n" +
            "2. Snijd de kip in blokjes van 3 cm.\n" +
            "3. Verhit de pot op middelhoog vuur en voeg de olijfolie toe.\n" +
            "4. Voeg de uien toe en bak 5 minuten tot ze glazig zijn.\n" +
            "5. Voeg de kip, paprika, zout en peper toe. Meng en bak 5 minuten lichtbruin.\n" +
            "6. Voeg de wortels, groentebouillon, laurier en tijm toe.\n" +
            "7. Meng, dek af en laat 25–30 minuten zachtjes sudderen.\n" +
            "8. Voeg de mosterd toe, meng en laat nog 2 minuten koken.\n" +
            "9. Controleer de gaarheid en serveer warm met brood of gestoomde aardappelen."
    },

    ar: {
        title: "ستوففليس بالدجاج (لـ 4 أشخاص)",
        equipment: [
            "قدر كبير أو طنجرة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "600 غ من صدر الدجاج، مقطع إلى مكعبات بحجم 3 سم",
            "2 بصل متوسط (240 غ)، مفروم ناعماً",
            "2 جزرة متوسطة (200 غ)، مقطعة إلى شرائح",
            "ملعقتان كبيرتان من زيت الزيتون (30 مل)",
            "300 مل من مرق الخضار",
            "ملعقة كبيرة من الخردل الخفيف",
            "ملعقة صغيرة من البابريكا الحلوة (2 غ)",
            "ملعقة صغيرة من الملح (5 غ)",
            "نصف ملعقة صغيرة من الفلفل الأسود",
            "ورقتا غار",
            "غصن من الزعتر"
        ],
        preparation:
            "هذه الوصفة تكفي لـ 4 أشخاص.\n" +
            "1. نفرم البصل ونقطع الجزر إلى شرائح بسماكة 1 سم.\n" +
            "2. نقطع الدجاج إلى مكعبات بحجم 3 سم.\n" +
            "3. نسخن القدر على نار متوسطة ونضيف زيت الزيتون.\n" +
            "4. نضيف البصل ونقليه لمدة 5 دقائق حتى يصبح شفافاً.\n" +
            "5. نضيف الدجاج والبابريكا والملح والفلفل ونقلب ونطهو 5 دقائق حتى يتحمر قليلاً.\n" +
            "6. نضيف الجزر ومرق الخضار وورق الغار والزعتر.\n" +
            "7. نخلط، نغطي القدر ونتركه يطهى على نار هادئة لمدة 25 إلى 30 دقيقة مع التحريك أحياناً.\n" +
            "8. نضيف الخردل ونقلب ونطهو لمدة دقيقتين إضافيتين.\n" +
            "9. نتأكد من النضج ونقدم الطبق ساخناً مع الخبز أو البطاطس المسلوقة على البخار."
    }
};
recipesData.plat.waterzooiPoulet = {
    country: "belgique",
    image: "images/waterzooi-poulet.jpg",
    fr: {
        title: "Waterzooi de poulet (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol"
        ],
        ingredients: [
            "1 poulet entier découpé (1,2 kg)",
            "3 carottes moyennes (300 g)",
            "2 poireaux (200 g)",
            "2 branches de céleri (100 g)",
            "1 oignon moyen (120 g)",
            "500 ml bouillon de légumes",
            "2 cuillères à soupe de crème fraîche",
            "Sel et poivre"
        ],
        preparation:
            "Couper les légumes en morceaux. Mettre le poulet et le bouillon dans la casserole et porter à ébullition. Ajouter les légumes et laisser cuire 45 minutes à feu moyen. Ajouter la crème, sel et poivre. Servir chaud."
    },
    en: {
        title: "Chicken Waterzooi (Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl"
        ],
        ingredients: [
            "1 whole chicken cut into pieces (1.2 kg)",
            "3 medium carrots (300 g)",
            "2 leeks (200 g)",
            "2 celery stalks (100 g)",
            "1 medium onion (120 g)",
            "500 ml vegetable broth",
            "2 tbsp fresh cream",
            "Salt and pepper"
        ],
        preparation:
            "Cut vegetables into pieces. Put chicken and broth in the pot and bring to a boil. Add vegetables and cook 45 minutes over medium heat. Add cream, salt, and pepper. Serve hot."
    },
    nl: {
        title: "Waterzooi met kip (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom"
        ],
        ingredients: [
            "1 hele kip in stukken (1,2 kg)",
            "3 middelgrote wortelen (300 g)",
            "2 preien (200 g)",
            "2 selderijstengels (100 g)",
            "1 middelgrote ui (120 g)",
            "500 ml groentebouillon",
            "2 eetlepels verse room",
            "Zout en peper"
        ],
        preparation:
            "Snijd de groenten in stukken. Doe de kip en bouillon in de pan en breng aan de kook. Voeg de groenten toe en kook 45 minuten op middelhoog vuur. Voeg room, zout en peper toe. Serveer warm."
    },
    ar: {
        title: "واترزووي الدجاج (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء"
        ],
        ingredients: [
            "دجاجة كاملة مقطعة (1,2 كغ)",
            "3 جزرات متوسطة (300غ)",
            "2 كرات الكراث (200غ)",
            "2 عيدان كرفس (100غ)",
            "1 بصلة متوسطة (120غ)",
            "500 مل مرق خضار",
            "2 ملاعق كبيرة كريمة طازجة",
            "ملح وفلفل"
        ],
        preparation:
            "قطع الخضار. ضع الدجاج والمرق في القدر واغلي. أضف الخضار واتركه 45 دقيقة على نار متوسطة. أضف الكريمة، الملح والفلفل. قدمه ساخناً."
    }
};

recipesData.plat.moulesFrites = {
    country: "belgique",
    image: "images/moules-frites.jpg",
    fr: {
        title: "Moules-frites (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 passoire",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "2 kg de moules fraîches",
            "4 pommes de terre moyennes (500 g)",
            "2 cuillères à soupe d’huile d’olive",
            "1 oignon moyen (120 g)",
            "1 branche de céleri",
            "2 gousses d’ail",
            "Sel et poivre",
            "Persil frais pour la garniture"
        ],
        preparation:
            "Laver les moules et enlever les barbes. Éplucher et couper les pommes de terre pour les frites. Cuire les frites à la friteuse ou au four. Dans une grande casserole, chauffer l’huile, ajouter l’oignon, le céleri et l’ail, cuire 5 minutes. Ajouter les moules et couvrir, cuire jusqu’à ce que les moules s’ouvrent. Assaisonner et servir avec les frites."
    },
    en: {
        title: "Mussels with Fries (Serves 4)",
        equipment: [
            "1 large pot",
            "1 colander",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "2 kg fresh mussels",
            "4 medium potatoes (500 g)",
            "2 tbsp olive oil",
            "1 medium onion (120 g)",
            "1 celery stalk",
            "2 garlic cloves",
            "Salt and pepper",
            "Fresh parsley for garnish"
        ],
        preparation:
            "Clean the mussels and remove beards. Peel and cut potatoes for fries. Cook fries in a fryer or oven. In a large pot, heat oil, add onion, celery, and garlic, cook 5 minutes. Add mussels and cover, cook until mussels open. Season and serve with fries."
    },
    nl: {
        title: "Mosselen met frieten (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 vergiet",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "2 kg verse mosselen",
            "4 middelgrote aardappelen (500 g)",
            "2 eetlepels olijfolie",
            "1 middelgrote ui (120 g)",
            "1 selderijstengel",
            "2 teentjes knoflook",
            "Zout en peper",
            "Verse peterselie voor garnering"
        ],
        preparation:
            "Was de mosselen en verwijder de baarden. Schil en snijd de aardappelen voor frieten. Bak de frieten in een friteuse of oven. Verhit olie in een grote pan, voeg ui, selderij en knoflook toe, bak 5 minuten. Voeg mosselen toe, dek af en kook tot ze opengaan. Breng op smaak en serveer met frieten."
    },
    ar: {
        title: "المحار بالبطاطس المقلية (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "مصفاة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "2 كغ محار طازج",
            "4 بطاطس متوسطة (500غ)",
            "2 ملاعق كبيرة زيت زيتون",
            "1 بصلة متوسطة (120غ)",
            "1 عود كرفس",
            "2 فصوص ثوم",
            "ملح وفلفل",
            "بقدونس طازج للزينة"
        ],
        preparation:
            "اغسل المحار وأزل الشعيرات. قشر وقطع البطاطس للقلي. اقلي البطاطس أو اطبخها في الفرن. في قدر كبير، سخن الزيت، أضف البصل والكرفس والثوم، اطبخ 5 دقائق. أضف المحار وغطيه حتى يفتح. تبّل وقدمه مع البطاطس المقلية."
    }
};

recipesData.plat.carbonadeVlaamse = {
    country: "belgique",
    image: "images/carbonade-vlaamse.jpg",
    fr: {
        title: "Carbonade flamande (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "800 g de bœuf à braiser",
            "2 oignons moyens (240 g)",
            "2 cuillères à soupe d’huile d’olive",
            "500 ml bouillon de légumes",
            "2 feuilles de laurier",
            "Sel et poivre"
        ],
        preparation:
            "Couper le bœuf en morceaux. Émincer les oignons. Dans la casserole, chauffer l’huile, ajouter les oignons et cuire 5 minutes. Ajouter le bœuf, le bouillon et le laurier. Laisser mijoter à feu doux pendant 1h30 jusqu’à ce que la viande soit tendre. Saler et poivrer. Servir chaud."
    },
    en: {
        title: "Flemish Stew (Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "800 g beef for braising",
            "2 medium onions (240 g)",
            "2 tbsp olive oil",
            "500 ml vegetable broth",
            "2 bay leaves",
            "Salt and pepper"
        ],
        preparation:
            "Cut beef into pieces. Slice onions. In a pot, heat oil, add onions and cook 5 minutes. Add beef, broth, and bay leaves. Simmer on low heat for 1h30 until meat is tender. Season with salt and pepper. Serve hot."
    },
    nl: {
        title: "Vlaamse stoofvlees (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "800 g rundvlees om te stoven",
            "2 middelgrote uien (240 g)",
            "2 eetlepels olijfolie",
            "500 ml groentebouillon",
            "2 laurierblaadjes",
            "Zout en peper"
        ],
        preparation:
            "Snijd het rundvlees in stukken. Snijd de uien. Verhit olie in een pan, voeg uien toe en bak 5 minuten. Voeg rundvlees, bouillon en laurier toe. Laat 1u30 zachtjes stoven tot het vlees zacht is. Breng op smaak. Serveer warm."
    },
    ar: {
        title: "ستوف فلامندي (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "800غ لحم بقر للطهي البطيء",
            "2 بصل متوسط (240غ)",
            "2 ملاعق كبيرة زيت زيتون",
            "500 مل مرق خضار",
            "2 ورق غار",
            "ملح وفلفل"
        ],
        preparation:
            "قطع اللحم إلى مكعبات. قطع البصل. في قدر، سخن الزيت، أضف البصل واطبخه 5 دقائق. أضف اللحم، المرق وأوراق الغار. اتركه على نار هادئة 1h30 حتى ينضج اللحم. تبّل بالملح والفلفل. قدمه ساخناً."
    }
};


recipesData.plat.boulettesSauceTomate = {
    country: "belgique",
    image: "images/boulettes-sauce-tomate.jpg",
    fr: {
        title: "Boulettes à la sauce tomate (4 personnes)",
        equipment: [
            "1 grande poêle",
            "1 bol",
            "1 cuillère en bois"
        ],
        ingredients: [
            "500 g de viande hachée (bœuf ou veau)",
            "1 oignon moyen (120 g)",
            "2 gousses d’ail",
            "400 g de tomates concassées",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre",
            "1 cuillère à café herbes de Provence"
        ],
        preparation:
            "Mélanger la viande avec sel et poivre et former des boulettes. Dans une poêle, chauffer l’huile, ajouter l’oignon et l’ail émincés et cuire 5 minutes. Ajouter les boulettes et cuire jusqu’à ce qu’elles soient dorées. Ajouter les tomates et les herbes. Couvrir et laisser mijoter 20 minutes. Servir chaud."
    },
    en: {
        title: "Meatballs in Tomato Sauce (Serves 4)",
        equipment: [
            "1 large pan",
            "1 bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "500 g minced meat (beef or veal)",
            "1 medium onion (120 g)",
            "2 garlic cloves",
            "400 g chopped tomatoes",
            "2 tbsp olive oil",
            "Salt and pepper",
            "1 tsp herbes de Provence"
        ],
        preparation:
            "Mix meat with salt and pepper and form meatballs. In a pan, heat oil, add sliced onion and garlic and cook 5 minutes. Add meatballs and cook until golden. Add tomatoes and herbs. Cover and simmer 20 minutes. Serve hot."
    },
    nl: {
        title: "Gehaktballetjes in tomatensaus (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 kom",
            "1 houten lepel"
        ],
        ingredients: [
            "500 g gehakt (rund of kalf)",
            "1 middelgrote ui (120 g)",
            "2 teentjes knoflook",
            "400 g gepelde tomaten",
            "2 eetlepels olijfolie",
            "Zout en peper",
            "1 theelepel Provençaalse kruiden"
        ],
        preparation:
            "Meng het gehakt met zout en peper en vorm balletjes. Verhit olie in een pan, voeg gesneden ui en knoflook toe en bak 5 minuten. Voeg balletjes toe en bak goudbruin. Voeg tomaten en kruiden toe. Dek af en laat 20 minuten sudderen. Serveer warm."
    },
    ar: {
        title: "كرات اللحم بصلصة الطماطم (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة كبيرة",
            "وعاء",
            "ملعقة خشبية"
        ],
        ingredients: [
            "500غ لحم مفروم (بقر أو عجل)",
            "1 بصلة متوسطة (120غ)",
            "2 فصوص ثوم",
            "400غ طماطم مقطعة",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل",
            "1 ملعقة صغيرة أعشاب بروڤانس"
        ],
        preparation:
            "اخلط اللحم مع الملح والفلفل وشكل كرات صغيرة. في مقلاة، سخن الزيت وأضف البصل والثوم المفروم واطبخ 5 دقائق. أضف كرات اللحم واطبخ حتى تتحمر. أضف الطماطم والأعشاب. غط واتركه ينضج 20 دقيقة. قدمه ساخناً."
    }
};
recipesData.plat.fritesBelges = {
    country: "belgique",
    image: "images/frites-belges.jpg",
    fr: {
        title: "Frites belges pour 4 personnes – Méthode traditionnelle et Méthode sans huile (Airfryer)",
        equipment: [
            "1 grande casserole ou friteuse",
            "1 écumoire",
            "1 saladier",
            "1 couteau",
            "1 planche à découper",
            "1 papier absorbant",
            "1 Airfryer (pour la méthode sans huile)"
        ],
        ingredients: [
            "1 kg de pommes de terre à chair ferme",
            "Huile de bœuf pour la friture (ou huile neutre si nécessaire)",
            "Sel selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n\n" +
            "=== Méthode traditionnelle (double cuisson à l'huile de bœuf) ===\n" +
            "1. Éplucher les pommes de terre et les couper en bâtonnets d'environ 1 cm.\n" +
            "2. Rincer les frites à l'eau froide pour enlever l'excès d'amidon, puis bien sécher.\n" +
            "3. Chauffer l'huile de bœuf à 130°C.\n" +
            "4. Plonger les frites par petites portions et cuire 5-6 minutes sans colorer. Égoutter sur du papier absorbant.\n" +
            "5. Laisser reposer 30 minutes à température ambiante.\n" +
            "6. Chauffer l'huile à 175°C.\n" +
            "7. Replonger les frites 2-3 minutes jusqu'à dorure et croustillant. Égoutter et saler.\n\n" +
            "=== Méthode sans huile (Airfryer, double cuisson) ===\n" +
            "1. Préchauffer l'Airfryer à 160°C.\n" +
            "2. Déposer les frites en une seule couche dans le panier, vaporiser légèrement d'huile.\n" +
            "3. Cuire 10-12 minutes, en secouant à mi-cuisson.\n" +
            "4. Laisser reposer 15-20 minutes.\n" +
            "5. Augmenter la température à 200°C et cuire 5-6 minutes jusqu'à doré et croustillant.\n" +
            "6. Saler et servir immédiatement."
    },
    en: {
        title: "Belgian Fries for 4 – Traditional Method and Oil-Free Method (Airfryer)",
        equipment: [
            "1 large pot or deep fryer",
            "1 skimmer",
            "1 bowl",
            "1 knife",
            "1 cutting board",
            "1 paper towel",
            "1 Airfryer (for oil-free method)"
        ],
        ingredients: [
            "1 kg firm potatoes",
            "Beef fat for frying (or neutral oil if needed)",
            "Salt to taste"
        ],
        preparation:
            "Serves 4.\n\n" +
            "=== Traditional method (double frying with beef fat) ===\n" +
            "1. Peel the potatoes and cut into sticks about 1 cm thick.\n" +
            "2. Rinse under cold water to remove starch, then pat dry.\n" +
            "3. Heat beef fat to 130°C.\n" +
            "4. Fry potatoes in batches for 5-6 minutes without coloring. Drain on paper towels.\n" +
            "5. Let rest 30 minutes at room temperature.\n" +
            "6. Heat fat to 175°C.\n" +
            "7. Fry again 2-3 minutes until golden and crispy. Drain and salt.\n\n" +
            "=== Oil-free method (Airfryer, double cooking) ===\n" +
            "1. Preheat Airfryer to 160°C.\n" +
            "2. Place fries in a single layer in the basket, lightly spray with oil.\n" +
            "3. Cook 10-12 minutes, shaking halfway.\n" +
            "4. Let rest 15-20 minutes.\n" +
            "5. Increase temperature to 200°C and cook 5-6 minutes until golden and crispy.\n" +
            "6. Salt and serve immediately."
    },
    nl: {
        title: "Belgische frieten voor 4 – Traditionele methode en olie-vrije methode (Airfryer)",
        equipment: [
            "1 grote pan of frituurpan",
            "1 schuimspaan",
            "1 kom",
            "1 mes",
            "1 snijplank",
            "1 keukenpapier",
            "1 Airfryer (voor olie-vrije methode)"
        ],
        ingredients: [
            "1 kg aardappelen met vaste structuur",
            "Rundervet voor frituren (of neutrale olie indien nodig)",
            "Zout naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n\n" +
            "=== Traditionele methode (dubbel frituren) ===\n" +
            "1. Schil de aardappelen en snijd in staafjes van ongeveer 1 cm.\n" +
            "2. Spoel de frieten af met koud water om zetmeel te verwijderen en dep droog.\n" +
            "3. Verhit rundervet tot 130°C.\n" +
            "4. Frituur in porties 5-6 minuten zonder kleuren. Laat uitlekken op keukenpapier.\n" +
            "5. Laat 30 minuten rusten op kamertemperatuur.\n" +
            "6. Verhit vet tot 175°C.\n" +
            "7. Frituur opnieuw 2-3 minuten tot goudbruin en krokant. Laat uitlekken en zout.\n\n" +
            "=== Olie-vrije methode (Airfryer, dubbel bakken) ===\n" +
            "1. Verwarm Airfryer voor op 160°C.\n" +
            "2. Leg de frieten in een enkele laag, licht inspuiten met olie.\n" +
            "3. Bak 10-12 minuten, halverwege schudden.\n" +
            "4. Laat 15-20 minuten rusten.\n" +
            "5. Verhoog temperatuur naar 200°C en bak 5-6 minuten tot goudbruin en krokant.\n" +
            "6. Zout en serveer onmiddellijk."
    },
    ar: {
        title: "البطاطس المقلية البلجيكية (تكفي 4 أشخاص) – الطريقة التقليدية والطريقة بدون زيت (Airfryer)",
        equipment: [
            "قدر كبير أو مقلاة للقلي",
            "مصفاة",
            "وعاء",
            "سكين",
            "لوح تقطيع",
            "منشفة ورقية",
            "جهاز Airfryer (للطريقة بدون زيت)"
        ],
        ingredients: [
            "1 كغ بطاطس بقوام متماسك",
            "دهن بقر للقلي (أو زيت محايد إذا لزم الأمر)",
            "ملح حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n\n" +
            "=== الطريقة التقليدية (القلي مرتين بدهن البقر) ===\n" +
            "1. قشر البطاطس وقطعها إلى أعواد حوالي 1 سم.\n" +
            "2. اغسل البطاطس بالماء البارد لإزالة النشا وجففها جيدًا.\n" +
            "3. سخّن دهن البقر إلى 130°C.\n" +
            "4. اقلي البطاطس على دفعات 5-6 دقائق دون أن تكتسب اللون، ثم صفّيها على منشفة ورقية.\n" +
            "5. دعها ترتاح 30 دقيقة في درجة حرارة الغرفة.\n" +
            "6. سخّن الزيت إلى 175°C.\n" +
            "7. اقلي مرة أخرى 2-3 دقائق حتى تصبح ذهبية ومقرمشة. صفّي وأضف الملح.\n\n" +
            "=== الطريقة بدون زيت (Airfryer، القلي مرتين) ===\n" +
            "1. سخّن جهاز Airfryer إلى 160°C.\n" +
            "2. ضع البطاطس في سلة واحدة، ورشّ قليلًا بالزيت.\n" +
            "3. اطبخ 10-12 دقيقة، مع الرجّ منتصف الوقت.\n" +
            "4. دعها ترتاح 15-20 دقيقة.\n" +
            "5. ارفع درجة الحرارة إلى 200°C واطبخ 5-6 دقائق حتى تصبح ذهبية ومقرمشة.\n" +
            "6. أضف الملح وقدّمها فورًا."
    }
};

recipesData.plat.potjevleesch = {
    country: "belgique",
    image: "imagest/pojevleesch.jpg",
    fr: {
        title: "Potjevleesch (4 personnes)",
        equipment: [
            "1 plat à terrine",
            "1 casserole",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "200 g de poulet",
            "200 g de lapin",
            "200 g de veau",
            "200 g de porc remplacé par bœuf ou volaille",
            "1 carotte",
            "1 branche de céleri",
            "Sel et poivre",
            "1 cuillère à café herbes de Provence"
        ],
        preparation:
            "Couper toutes les viandes en morceaux. Dans la casserole, faire bouillir un peu d’eau avec carotte et céleri. Ajouter la viande et cuire 30 minutes à feu doux. Placer ensuite la viande et le jus dans le plat à terrine. Laisser refroidir avant de servir."
    },
    en: {
        title: "Potjevleesch (Serves 4)",
        equipment: [
            "1 terrine dish",
            "1 pot",
            "1 knife",
            "1 cutting board"
        ],
        ingredients: [
            "200 g chicken",
            "200 g rabbit",
            "200 g veal",
            "200 g beef instead of pork",
            "1 carrot",
            "1 celery stalk",
            "Salt and pepper",
            "1 tsp herbes de Provence"
        ],
        preparation:
            "Cut all meats into pieces. In a pot, boil water with carrot and celery. Add meat and cook 30 minutes on low heat. Place meat and juice in terrine dish. Let cool before serving."
    },
    nl: {
        title: "Potjevleesch (voor 4 personen)",
        equipment: [
            "1 terrine schaal",
            "1 pan",
            "1 mes",
            "1 snijplank"
        ],
        ingredients: [
            "200 g kip",
            "200 g konijn",
            "200 g kalf",
            "200 g rundvlees in plaats van varkensvlees",
            "1 wortel",
            "1 selderijstengel",
            "Zout en peper",
            "1 theelepel Provençaalse kruiden"
        ],
        preparation:
            "Snijd alle vlees in stukken. Kook in een pan water met wortel en selderij. Voeg vlees toe en kook 30 minuten op laag vuur. Plaats vlees en bouillon in terrine schaal. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بوتفليش (يكفي 4 أشخاص)",
        equipment: [
            "طبق تيرين",
            "قدر",
            "سكين",
            "لوح تقطيع"
        ],
        ingredients: [
            "200غ دجاج",
            "200غ أرنب",
            "200غ لحم عجل",
            "200غ لحم بقر بدل الخنزير",
            "1 جزرة",
            "1 عود كرفس",
            "ملح وفلفل",
            "1 ملعقة صغيرة أعشاب بروڤانس"
        ],
        preparation:
            "قطع جميع اللحوم إلى مكعبات. في قدر، اغلي الماء مع الجزرة والكرفس. أضف اللحم واطبخ 30 دقيقة على نار هادئة. ضع اللحم والعصارة في طبق التيرين. اتركه ليبرد قبل التقديم."
    }
};

recipesData.plat.endivesJambon = {
    country: "belgique",
    image: "images/endives-jambon.jpg",
    fr: {
        title: "Endives au jambon (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "4 endives",
            "4 tranches de jambon de volaille",
            "30 g de beurre",
            "1 cuillère à soupe de farine",
            "200 ml lait",
            "Sel et poivre"
        ],
        preparation:
            "Cuire les endives 15 minutes à l’eau bouillante. Égoutter et enrouler chaque endive dans une tranche de jambon. Dans une casserole, faire fondre le beurre, ajouter la farine, cuire 1 minute. Ajouter le lait progressivement pour obtenir une sauce. Verser sur les endives et servir chaud."
    },
    en: {
        title: "Endives with Ham (Serves 4)",
        equipment: [
            "1 pot",
            "1 knife",
            "1 cutting board"
        ],
        ingredients: [
            "4 endives",
            "4 slices poultry ham",
            "30 g butter",
            "1 tbsp flour",
            "200 ml milk",
            "Salt and pepper"
        ],
        preparation:
            "Cook endives 15 minutes in boiling water. Drain and wrap each endive in a slice of ham. In a pot, melt butter, add flour, cook 1 minute. Add milk gradually to make a sauce. Pour over endives and serve hot."
    },
    nl: {
        title: "Witloof met ham (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank"
        ],
        ingredients: [
            "4 witloof",
            "4 sneetjes kippenham",
            "30 g boter",
            "1 eetlepel bloem",
            "200 ml melk",
            "Zout en peper"
        ],
        preparation:
            "Kook witloof 15 minuten in kokend water. Giet af en wikkel elk witloof in een sneetje ham. Smelt boter in een pan, voeg bloem toe en bak 1 minuut. Voeg geleidelijk melk toe voor saus. Giet over witloof en serveer warm."
    },
    ar: {
        title: "الهليون باللحم المدخن (يكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع"
        ],
        ingredients: [
            "4 هليون",
            "4 شرائح لحم دجاج مدخن",
            "30غ زبدة",
            "1 ملعقة كبيرة دقيق",
            "200 مل حليب",
            "ملح وفلفل"
        ],
        preparation:
            "اسلق الهليون 15 دقيقة في ماء مغلي. صفيه ولف كل حبة في شريحة لحم. في قدر، أذب الزبدة، أضف الدقيق واطبخ دقيقة. أضف الحليب تدريجياً لتحضير الصلصة. صبها على الهليون وقدمه ساخناً."
    }
};

recipesData.plat.cervelasFrites = {
    country: "belgique",
    image: "images/cervelas-frites.jpg",
    fr: {
        title: "Cervelas-frites (4 personnes)",
        equipment: [
            "1 poêle",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "4 cervelas de volaille",
            "4 pommes de terre moyennes (500 g)",
            "2 cuillères à soupe d’huile",
            "Sel et poivre"
        ],
        preparation:
            "Éplucher et couper les pommes de terre en frites. Cuire à la friteuse ou au four. Dans une poêle, cuire les cervelas 10 minutes en les retournant régulièrement. Servir chaud avec les frites."
    },
    en: {
        title: "Cervelas with Fries (Serves 4)",
        equipment: [
            "1 pan",
            "1 knife",
            "1 cutting board"
        ],
        ingredients: [
            "4 poultry sausages",
            "4 medium potatoes (500 g)",
            "2 tbsp oil",
            "Salt and pepper"
        ],
        preparation:
            "Peel and cut potatoes into fries. Cook in fryer or oven. In a pan, cook sausages 10 minutes, turning regularly. Serve hot with fries."
    },
    nl: {
        title: "Cervelas met frieten (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank"
        ],
        ingredients: [
            "4 kippencervelas",
            "4 middelgrote aardappelen (500 g)",
            "2 eetlepels olie",
            "Zout en peper"
        ],
        preparation:
            "Schil en snijd aardappelen in frieten. Bak in frituurpan of oven. Bak de cervelas 10 minuten in een pan en draai regelmatig. Serveer warm met frieten."
    },
    ar: {
        title: "سيرفلاس بالبطاطس المقلية (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "سكين",
            "لوح تقطيع"
        ],
        ingredients: [
            "4 سجق دجاج",
            "4 بطاطس متوسطة (500غ)",
            "2 ملاعق كبيرة زيت",
            "ملح وفلفل"
        ],
        preparation:
            "قشر وقطع البطاطس إلى أصابع. اطبخها في المقلاة أو الفرن. في مقلاة، اطبخ السجق 10 دقائق مع التقليب. قدمه ساخناً مع البطاطس المقلية."
    }
};
recipesData.plat.moulesFritesLegumes = {
    country: "belgique",
    image: "images/moules-frites.jpg", // même photo que l'autre recette
    fr: {
        title: "Moules-frites aux légumes (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "1 kg de moules nettoyées",
            "1 oignon moyen (120 g)",
            "1 carotte moyenne (100 g)",
            "1 branche de céleri",
            "2 gousses d’ail",
            "500 ml de bouillon de légumes",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre"
        ],
        preparation:
            "Émincer l’oignon, la carotte et le céleri. Dans une grande casserole, faire chauffer l’huile d’olive, ajouter les légumes et l’ail, et faire revenir 5 minutes. Ajouter les moules et le bouillon de légumes. Couvrir et laisser cuire à feu moyen jusqu’à ce que les moules soient ouvertes (environ 8-10 minutes). Retirer du feu, saler et poivrer. Servir chaud avec des frites."
    },
    en: {
        title: "Mussels with Vegetables and Fries (Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "1 kg cleaned mussels",
            "1 medium onion (120 g)",
            "1 carrot (100 g)",
            "1 celery stalk",
            "2 garlic cloves",
            "500 ml vegetable broth",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        preparation:
            "Slice the onion, carrot, and celery. In a large pot, heat olive oil, add vegetables and garlic, and sauté 5 minutes. Add the mussels and vegetable broth. Cover and cook over medium heat until mussels open (about 8-10 minutes). Remove from heat, season with salt and pepper. Serve hot with fries."
    },
    nl: {
        title: "Mosselen met groenten en frieten (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "1 kg schoongemaakte mosselen",
            "1 middelgrote ui (120 g)",
            "1 wortel (100 g)",
            "1 selderijstengel",
            "2 teentjes knoflook",
            "500 ml groentebouillon",
            "2 eetlepels olijfolie",
            "Zout en peper"
        ],
        preparation:
            "Snijd de ui, wortel en selderij. Verhit olijfolie in een grote pan, voeg groenten en knoflook toe en bak 5 minuten. Voeg de mosselen en groentebouillon toe. Dek af en kook op middelhoog vuur tot de mosselen opengaan (ongeveer 8-10 minuten). Haal van het vuur, breng op smaak met zout en peper. Serveer warm met frieten."
    },
    ar: {
        title: "بلح البحر بالخضار والبطاطس المقلية (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "1 كغ بلح البحر منظف",
            "1 بصلة متوسطة (120غ)",
            "1 جزرة متوسطة (100غ)",
            "1 عود كرفس",
            "2 فصوص ثوم",
            "500 مل مرق خضار",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل"
        ],
        preparation:
            "قطع البصل والجزر والكرفس إلى شرائح. في قدر كبير، سخن زيت الزيتون، أضف الخضار والثوم وقلّب 5 دقائق. أضف بلح البحر ومرق الخضار. غط واتركه يطهى على نار متوسطة حتى تفتح المحار (حوالي 8-10 دقائق). أزل القدر عن النار، وتبّل بالملح والفلفل. قدمه ساخناً مع البطاطس المقلية."
    }
};


recipesData.dessert.compotePommes = {
    country: "belgique",
    image: "images/compote-pommes.jpg",
    fr: {
        title: "Compote de pommes à la cannelle (4 personnes)",
        equipment: [
            "1 casserole moyenne",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol pour mélanger",
            "1 verre doseur"
        ],
        ingredients: [
            "6 pommes moyennes (environ 900 g) – épluchées, épépinées et coupées en morceaux",
            "50 ml d’eau",
            "2 cuillères à soupe sucre roux (30 g) – facultatif",
            "1/2 cuillère à café cannelle en poudre (1 g)",
            "1 cuillère à café jus de citron (5 ml)"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes.\n" +
            "1. Éplucher les pommes, enlever le cœur et couper en morceaux de 2 cm.\n" +
            "2. Mettre les morceaux de pommes dans une casserole moyenne.\n" +
            "3. Ajouter 50 ml d’eau, le sucre roux (facultatif), la cannelle et le jus de citron.\n" +
            "4. Porter à feu moyen jusqu’à légère ébullition.\n" +
            "5. Réduire le feu et laisser mijoter 15-20 minutes en remuant toutes les 5 minutes.\n" +
            "6. Vérifier que les pommes sont tendres. Écraser avec une fourchette ou mixer selon la texture désirée.\n" +
            "7. Laisser refroidir légèrement et servir dans des bols."
    },
    en: {
        title: "Apple Cinnamon Compote (Serves 4)",
        equipment: [
            "1 medium pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 mixing bowl",
            "1 measuring cup"
        ],
        ingredients: [
            "6 medium apples (900 g) – peeled, cored, chopped into 2 cm pieces",
            "50 ml water",
            "2 tablespoons brown sugar (30 g) – optional",
            "1/2 teaspoon cinnamon powder (1 g)",
            "1 teaspoon lemon juice (5 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Peel, core, and cut apples into 2 cm pieces.\n" +
            "2. Place apples in a medium pot.\n" +
            "3. Add water, brown sugar (optional), cinnamon, and lemon juice.\n" +
            "4. Heat over medium heat until slight boil.\n" +
            "5. Reduce heat and simmer 15-20 minutes, stirring every 5 minutes.\n" +
            "6. Check apples are tender. Mash with a fork or blend to desired texture.\n" +
            "7. Let cool slightly and serve in bowls."
    },
    nl: {
        title: "Appelcompote met kaneel (voor 4 personen)",
        equipment: [
            "1 middelgrote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom om te mengen",
            "1 maatbeker"
        ],
        ingredients: [
            "6 middelgrote appels (900 g) – geschild, klokhuis verwijderd, in blokjes van 2 cm",
            "50 ml water",
            "2 eetlepels bruine suiker (30 g) – optioneel",
            "1/2 theelepel kaneelpoeder (1 g)",
            "1 theelepel citroensap (5 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Schil, verwijder klokhuis en snijd de appels in blokjes van 2 cm.\n" +
            "2. Doe appels in een middelgrote pan.\n" +
            "3. Voeg water, bruine suiker (optioneel), kaneel en citroensap toe.\n" +
            "4. Breng op middelhoog vuur aan tot een lichte kook.\n" +
            "5. Zet vuur laag en laat 15-20 minuten sudderen, af en toe roeren.\n" +
            "6. Controleer of appels zacht zijn. Pureer met een vork of blender tot gewenste textuur.\n" +
            "7. Laat iets afkoelen en serveer in kommen."
    },
    ar: {
        title: "كمبوت التفاح بالقرفة (يكفي 4 أشخاص)",
        equipment: [
            "قدر متوسط",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء للخلط",
            "كوب قياس"
        ],
        ingredients: [
            "6 تفاحات متوسطة (900غ) – مقشرة، منزوع القلب، مقطعة إلى مكعبات 2 سم",
            "50 مل ماء",
            "2 ملعقة كبيرة سكر بني (30غ) – اختياري",
            "نصف ملعقة صغيرة قرفة (1غ)",
            "1 ملعقة صغيرة عصير ليمون (5 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قشر التفاح، أزل القلب وقطع إلى مكعبات 2 سم.\n" +
            "2. ضع التفاح في قدر متوسط.\n" +
            "3. أضف الماء، السكر البني (اختياري)، القرفة وعصير الليمون.\n" +
            "4. ضع على نار متوسطة حتى الغليان الخفيف.\n" +
            "5. خفف النار واتركه يطهى 15-20 دقيقة مع التحريك كل 5 دقائق.\n" +
            "6. تحقق من نعومة التفاح. اهرس بالشوكة أو اخلطه بالخلاط حتى الحصول على القوام المطلوب.\n" +
            "7. اتركه يبرد قليلاً وقدمه في أطباق."
    }
};
recipesData.dessert.speculoos = {
    country: "belgique",
    image: "images/speculoos.jpg",
    fr: {
        title: "Speculoos maison (4 personnes)",
        equipment: [
            "1 saladier",
            "1 rouleau à pâtisserie",
            "1 plaque de cuisson",
            "1 fouet",
            "1 cuillère en bois"
        ],
        ingredients: [
            "250 g de farine",
            "125 g de cassonade",
            "125 g de beurre ramolli",
            "1 cuillère à café de cannelle",
            "1/2 cuillère à café de gingembre moulu",
            "1/4 cuillère à café de clou de girofle moulu",
            "1 pincée de sel"
        ],
        preparation:
            "Mélanger la farine, les épices et le sel dans un saladier. Ajouter le beurre et la cassonade, malaxer jusqu’à obtenir une pâte homogène. Étaler la pâte sur une surface farinée et découper les biscuits. Placer sur une plaque recouverte de papier cuisson et cuire 12 à 15 minutes à 180°C. Laisser refroidir avant de servir."
    },
    en: {
        title: "Homemade Speculoos (Serves 4)",
        equipment: [
            "1 mixing bowl",
            "1 rolling pin",
            "1 baking tray",
            "1 whisk",
            "1 wooden spoon"
        ],
        ingredients: [
            "250 g flour",
            "125 g brown sugar",
            "125 g softened butter",
            "1 tsp cinnamon",
            "1/2 tsp ground ginger",
            "1/4 tsp ground cloves",
            "1 pinch of salt"
        ],
        preparation:
            "Mix flour, spices, and salt in a bowl. Add butter and brown sugar, knead until smooth. Roll out dough on a floured surface and cut into biscuits. Place on a tray lined with baking paper and bake 12–15 minutes at 180°C. Let cool before serving."
    },
    nl: {
        title: "Speculoos zelfgemaakt (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 deegroller",
            "1 bakplaat",
            "1 garde",
            "1 houten lepel"
        ],
        ingredients: [
            "250 g bloem",
            "125 g bruine suiker",
            "125 g zachte boter",
            "1 tl kaneel",
            "1/2 tl gemberpoeder",
            "1/4 tl kruidnagelpoeder",
            "1 snufje zout"
        ],
        preparation:
            "Meng bloem, specerijen en zout in een kom. Voeg boter en bruine suiker toe, kneed tot een glad deeg. Rol uit op een bebloemd oppervlak en snijd koekjes. Leg op een bakplaat met bakpapier en bak 12–15 minuten op 180°C. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "سبيكولوس منزلي (يكفي 4 أشخاص)",
        equipment: [
            "وعاء للخلط",
            "شوبك العجين",
            "صينية خبز",
            "خفاق",
            "ملعقة خشبية"
        ],
        ingredients: [
            "250 غ دقيق",
            "125 غ سكر بني",
            "125 غ زبدة طرية",
            "1 ملعقة صغيرة قرفة",
            "1/2 ملعقة صغيرة زنجبيل مطحون",
            "1/4 ملعقة صغيرة قرنفل مطحون",
            "رشة ملح"
        ],
        preparation:
            "اخلط الدقيق والتوابل والملح في وعاء. أضف الزبدة والسكر البني واعجن حتى يصبح العجين ناعماً. افرد العجين على سطح مرشوش بالدقيق وقطع البسكويت. ضع على صينية مغطاة بورق الخبز واخبز 12–15 دقيقة على 180°C. اتركه يبرد قبل التقديم."
    }
};
recipesData.dessert.crepesLiegeoises = {
    country: "belgique",
    image: "images/crepes-liegeoises.jpg",
    fr: {
        title: "Crêpes liégeoises (4 personnes)",
        equipment: [
            "1 poêle antiadhésive",
            "1 saladier",
            "1 fouet",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "200 g de farine",
            "2 œufs",
            "50 g de sucre",
            "50 g de beurre fondu",
            "200 ml de lait",
            "1 pincée de sel",
            "1 sachet de levure chimique",
            "Sucre perlé pour la garniture"
        ],
        preparation:
            "Dans un saladier, mélangez la farine, le sucre, le sel et la levure. Ajoutez les œufs, le beurre fondu et le lait progressivement en fouettant jusqu’à obtenir une pâte lisse. Laissez reposer 10 minutes. Faites chauffer la poêle et versez une petite louche de pâte. Saupoudrez de sucre perlé et laissez cuire 2–3 minutes de chaque côté jusqu’à ce que les crêpes soient dorées. Servir chaud."
    },
    en: {
        title: "Liège-style Pancakes (Serves 4)",
        equipment: [
            "1 non-stick pan",
            "1 mixing bowl",
            "1 whisk",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "200 g flour",
            "2 eggs",
            "50 g sugar",
            "50 g melted butter",
            "200 ml milk",
            "1 pinch of salt",
            "1 packet baking powder",
            "Pearl sugar for topping"
        ],
        preparation:
            "In a bowl, mix flour, sugar, salt, and baking powder. Add eggs, melted butter, and milk gradually while whisking until smooth. Let rest for 10 minutes. Heat the pan and pour a small ladle of batter. Sprinkle with pearl sugar and cook 2–3 minutes on each side until golden. Serve hot."
    },
    nl: {
        title: "Luikse pannenkoeken (voor 4 personen)",
        equipment: [
            "1 anti-aanbakpan",
            "1 kom",
            "1 garde",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "200 g bloem",
            "2 eieren",
            "50 g suiker",
            "50 g gesmolten boter",
            "200 ml melk",
            "1 snufje zout",
            "1 zakje bakpoeder",
            "Parelsuiker voor garnering"
        ],
        preparation:
            "Meng in een kom bloem, suiker, zout en bakpoeder. Voeg eieren, gesmolten boter en melk geleidelijk toe terwijl je klopt tot een glad beslag. Laat 10 minuten rusten. Verhit de pan en giet een kleine pollepel beslag. Bestrooi met parelsuiker en bak 2–3 minuten aan elke kant tot goudbruin. Serveer warm."
    },
    ar: {
        title: "فطائر لييج (تكفي 4 أشخاص)",
        equipment: [
            "مقلاة غير لاصقة",
            "وعاء للخلط",
            "خفاق",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "200 غ دقيق",
            "2 بيض",
            "50 غ سكر",
            "50 غ زبدة مذابة",
            "200 مل حليب",
            "رشة ملح",
            "1 كيس بيكنج باودر",
            "سكر حبيبي للتزيين"
        ],
        preparation:
            "في وعاء، اخلط الدقيق والسكر والملح والبيكنج باودر. أضف البيض والزبدة المذابة والحليب تدريجياً مع الخفق حتى يصبح الخليط ناعماً. اتركه 10 دقائق. سخن المقلاة واسكب مقدار قليل من العجين. رش السكر الحبيبي واطبخ 2–3 دقائق على كل جانب حتى يصبح ذهبي اللون. قدمه ساخناً."
    }
};
recipesData.dessert.cremeBrulee = {
    country: "belgique",
    image: "images/creme-brulee.jpg",
    fr: {
        title: "Crème brûlée à la vanille (4 personnes)",
        equipment: [
            "4 ramequins",
            "1 plat à four",
            "1 fouet",
            "1 casserole",
            "1 cuillère"
        ],
        ingredients: [
            "500 ml de crème entière",
            "5 jaunes d’œufs",
            "100 g de sucre",
            "1 gousse de vanille",
            "Sucre pour caraméliser"
        ],
        preparation:
            "Préchauffer le four à 150°C. Faire chauffer la crème avec la gousse de vanille fendue. Battre les jaunes et le sucre, puis verser la crème chaude doucement tout en fouettant. Répartir dans les ramequins. Placer les ramequins dans un plat et remplir d’eau chaude à mi-hauteur. Cuire 35–40 minutes. Laisser refroidir, saupoudrer de sucre et caraméliser avec un chalumeau."
    },
    en: {
        title: "Vanilla Crème Brûlée (Serves 4)",
        equipment: [
            "4 ramekins",
            "1 baking dish",
            "1 whisk",
            "1 saucepan",
            "1 spoon"
        ],
        ingredients: [
            "500 ml heavy cream",
            "5 egg yolks",
            "100 g sugar",
            "1 vanilla pod",
            "Sugar for caramelizing"
        ],
        preparation:
            "Preheat oven to 150°C. Heat cream with split vanilla pod. Beat yolks and sugar, then slowly add hot cream while whisking. Divide into ramekins. Place ramekins in a baking dish and fill with hot water halfway. Bake 35–40 minutes. Cool, sprinkle sugar, and caramelize with a torch."
    },
    nl: {
        title: "Vanille Crème Brûlée (voor 4 personen)",
        equipment: [
            "4 ramekins",
            "1 ovenschaal",
            "1 garde",
            "1 steelpan",
            "1 lepel"
        ],
        ingredients: [
            "500 ml volle room",
            "5 eidooiers",
            "100 g suiker",
            "1 vanillestokje",
            "Suiker om te karamelliseren"
        ],
        preparation:
            "Verwarm de oven voor op 150°C. Verwarm de room met het opengesneden vanillestokje. Klop de eidooiers en suiker, voeg langzaam de hete room toe terwijl je klopt. Verdeel in ramekins. Plaats de ramekins in een ovenschaal en vul met heet water tot de helft. Bak 35–40 minuten. Laat afkoelen, strooi suiker erop en karamelliseer met een brander."
    },
    ar: {
        title: "كريم بروليه بالفانيليا (تكفي 4 أشخاص)",
        equipment: [
            "4 أوعية صغيرة",
            "طبق فرن",
            "خفاق",
            "قدر",
            "ملعقة"
        ],
        ingredients: [
            "500 مل كريمة كاملة الدسم",
            "5 صفار بيض",
            "100 غ سكر",
            "1 فانيليا",
            "سكر للتكرمل"
        ],
        preparation:
            "سخن الفرن إلى 150 درجة مئوية. سخن الكريمة مع الفانيليا المفتوحة. اخفق الصفار والسكر، ثم أضف الكريمة الساخنة تدريجياً مع الخفق. وزع في الأوعية. ضع الأوعية في طبق فرن واملأه بالماء الساخن حتى منتصف الارتفاع. اخبز 35–40 دقيقة. اتركه يبرد، رش السكر وكرمل باستخدام مشعل."
    }
};
recipesData.dessert.painEpices = {
    country: "belgique",
    image: "images/pain-epices.jpg",
    fr: {
        title: "Pain d’épices belge (4 personnes)",
        equipment: [
            "1 moule à cake",
            "1 bol",
            "1 fouet",
            "1 cuillère en bois"
        ],
        ingredients: [
            "250 g de farine",
            "150 g de miel",
            "100 g de sucre",
            "100 ml de lait",
            "1 sachet de levure chimique",
            "1 c. à café de cannelle",
            "1/2 c. à café de gingembre moulu",
            "1 pincée de sel"
        ],
        preparation:
            "Préchauffer le four à 180°C. Dans un bol, mélanger la farine, la levure, les épices et le sel. Ajouter le miel, le sucre et le lait. Mélanger jusqu’à obtenir une pâte homogène. Verser dans un moule beurré. Cuire 35–40 minutes. Laisser refroidir avant de démouler."
    },
    en: {
        title: "Belgian Gingerbread (Serves 4)",
        equipment: [
            "1 loaf pan",
            "1 bowl",
            "1 whisk",
            "1 wooden spoon"
        ],
        ingredients: [
            "250 g flour",
            "150 g honey",
            "100 g sugar",
            "100 ml milk",
            "1 packet baking powder",
            "1 tsp cinnamon",
            "1/2 tsp ground ginger",
            "1 pinch salt"
        ],
        preparation:
            "Preheat oven to 180°C. In a bowl, mix flour, baking powder, spices, and salt. Add honey, sugar, and milk. Mix until smooth. Pour into a greased loaf pan. Bake 35–40 minutes. Cool before unmolding."
    },
    nl: {
        title: "Belgisch Gemberbrood (voor 4 personen)",
        equipment: [
            "1 cakevorm",
            "1 kom",
            "1 garde",
            "1 houten lepel"
        ],
        ingredients: [
            "250 g bloem",
            "150 g honing",
            "100 g suiker",
            "100 ml melk",
            "1 zakje bakpoeder",
            "1 tl kaneel",
            "1/2 tl gemalen gember",
            "1 snufje zout"
        ],
        preparation:
            "Verwarm de oven voor op 180°C. Meng in een kom bloem, bakpoeder, specerijen en zout. Voeg honing, suiker en melk toe. Meng tot een glad beslag. Giet in een ingevette cakevorm. Bak 35–40 minuten. Laat afkoelen voor het storten."
    },
    ar: {
        title: "خبز التوابل البلجيكي (تكفي 4 أشخاص)",
        equipment: [
            "1 قالب كيك",
            "1 وعاء",
            "1 خفاق",
            "1 ملعقة خشبية"
        ],
        ingredients: [
            "250 غ دقيق",
            "150 غ عسل",
            "100 غ سكر",
            "100 مل حليب",
            "1 كيس بيكنج باودر",
            "1 ملعقة صغيرة قرفة",
            "1/2 ملعقة صغيرة زنجبيل مطحون",
            "رشة ملح"
        ],
        preparation:
            "سخن الفرن إلى 180 درجة مئوية. في وعاء، اخلط الدقيق، البيكنج باودر، التوابل والملح. أضف العسل، السكر والحليب. اخلط حتى يصبح الخليط ناعماً. صب في قالب مدهون بالزبدة. اخبز 35–40 دقيقة. اتركه يبرد قبل إخراجه من القالب."
    }
};
recipesData.dessert.couqueDinant = {
    country: "belgique",
    image: "images/couque-dinant.jpg",
    fr: {
        title: "Couque de Dinant (4 personnes)",
        equipment: [
            "1 moule à cake",
            "1 bol",
            "1 cuillère en bois"
        ],
        ingredients: [
            "250 g de farine",
            "250 g de sucre",
            "125 ml d’eau",
            "1 c. à café de cannelle",
            "1 pincée de sel"
        ],
        preparation:
            "Préchauffer le four à 180°C. Mélanger le sucre et l’eau dans une casserole et porter à ébullition. Ajouter la farine, la cannelle et le sel, mélanger pour obtenir une pâte homogène. Verser dans un moule beurré. Cuire 20–25 minutes. Laisser refroidir avant de démouler."
    },
    en: {
        title: "Couque de Dinant (Serves 4)",
        equipment: [
            "1 loaf pan",
            "1 bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "250 g flour",
            "250 g sugar",
            "125 ml water",
            "1 tsp cinnamon",
            "1 pinch salt"
        ],
        preparation:
            "Preheat oven to 180°C. Mix sugar and water in a saucepan and bring to a boil. Add flour, cinnamon, and salt; mix into a smooth dough. Pour into a greased loaf pan. Bake 20–25 minutes. Cool before unmolding."
    },
    nl: {
        title: "Couque de Dinant (voor 4 personen)",
        equipment: [
            "1 cakevorm",
            "1 kom",
            "1 houten lepel"
        ],
        ingredients: [
            "250 g bloem",
            "250 g suiker",
            "125 ml water",
            "1 tl kaneel",
            "1 snufje zout"
        ],
        preparation:
            "Verwarm de oven voor op 180°C. Meng suiker en water in een steelpan en breng aan de kook. Voeg bloem, kaneel en zout toe; meng tot een glad deeg. Giet in een ingevette cakevorm. Bak 20–25 minuten. Laat afkoelen voor het storten."
    },
    ar: {
        title: "كوك دي دينانت (تكفي 4 أشخاص)",
        equipment: [
            "1 قالب كيك",
            "1 وعاء",
            "1 ملعقة خشبية"
        ],
        ingredients: [
            "250 غ دقيق",
            "250 غ سكر",
            "125 مل ماء",
            "1 ملعقة صغيرة قرفة",
            "رشة ملح"
        ],
        preparation:
            "سخن الفرن إلى 180 درجة مئوية. اخلط السكر والماء في قدر واتركه يغلي. أضف الدقيق، القرفة والملح، واخلط للحصول على عجينة ناعمة. صب في قالب مدهون. اخبز 20–25 دقيقة. اتركه يبرد قبل الإزالة."
    }
};
recipesData.dessert.cuberdon = {
    country: "belgique",
    image: "images/cuberdon.jpg",
    fr: {
        title: "Cuberdons belges (pour 4 personnes)",
        equipment: [
            "1 casserole",
            "1 cuillère en bois",
            "1 moule à bonbons"
        ],
        ingredients: [
            "250 g de sucre",
            "125 ml d’eau",
            "1 c. à café de sirop de framboise",
            "1 c. à café de jus de citron"
        ],
        preparation:
            "Dans une casserole, faire chauffer le sucre et l’eau jusqu’à dissolution. Ajouter le sirop et le jus de citron. Cuire jusqu’à épaississement. Verser dans des moules à bonbons et laisser durcir. Démouler et servir."
    },
    en: {
        title: "Belgian Cuberdons (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 wooden spoon",
            "1 candy mold"
        ],
        ingredients: [
            "250 g sugar",
            "125 ml water",
            "1 tsp raspberry syrup",
            "1 tsp lemon juice"
        ],
        preparation:
            "In a saucepan, heat sugar and water until dissolved. Add syrup and lemon juice. Cook until thickened. Pour into candy molds and let harden. Unmold and serve."
    },
    nl: {
        title: "Cuberdons (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 houten lepel",
            "1 bonbonvorm"
        ],
        ingredients: [
            "250 g suiker",
            "125 ml water",
            "1 tl frambozensiroop",
            "1 tl citroensap"
        ],
        preparation:
            "Verhit suiker en water in een steelpan tot het opgelost is. Voeg siroop en citroensap toe. Kook tot het ingedikt is. Giet in bonbonvormpjes en laat uitharden. Uit de vorm halen en serveren."
    },
    ar: {
        title: "كوبردون بلجيكي (تكفي 4 أشخاص)",
        equipment: [
            "1 قدر",
            "1 ملعقة خشبية",
            "1 قالب حلوى"
        ],
        ingredients: [
            "250 غ سكر",
            "125 مل ماء",
            "1 ملعقة صغيرة شراب توت العليق",
            "1 ملعقة صغيرة عصير ليمون"
        ],
        preparation:
            "سخّن السكر والماء في قدر حتى يذوب. أضف الشراب وعصير الليمون. اطبخ حتى يثخن. صب في قوالب الحلوى واتركه يتصلب. أخرج من القالب وقدمه."
    }
};
recipesData.patisserie.gaufreLiegeSucre = {
    country: "belgique",
    image: "images/gaufre-liege-sucre.jpg",
    fr: {
        title: "Gaufre de Liège au sucre perlé (4 personnes)",
        equipment: [
            "1 bol",
            "1 fouet",
            "1 gaufrier"
        ],
        ingredients: [
            "250 g de farine",
            "125 ml de lait",
            "1 œuf",
            "1 sachet de levure boulangère",
            "100 g de beurre",
            "100 g de sucre perlé"
        ],
        preparation:
            "Dans un bol, mélanger la farine, la levure, le lait et l’œuf. Pétrir et ajouter le beurre fondu. Incorporer le sucre perlé. Former des boules et cuire dans le gaufrier préchauffé jusqu’à doré. Servir chaud."
    },
    en: {
        title: "Liège Waffle with Pearl Sugar (Serves 4)",
        equipment: [
            "1 bowl",
            "1 whisk",
            "1 waffle iron"
        ],
        ingredients: [
            "250 g flour",
            "125 ml milk",
            "1 egg",
            "1 packet yeast",
            "100 g butter",
            "100 g pearl sugar"
        ],
        preparation:
            "In a bowl, mix flour, yeast, milk, and egg. Knead and add melted butter. Fold in pearl sugar. Form balls and cook in preheated waffle iron until golden. Serve hot."
    },
    nl: {
        title: "Luikse wafel met parelsuiker (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 garde",
            "1 wafelijzer"
        ],
        ingredients: [
            "250 g bloem",
            "125 ml melk",
            "1 ei",
            "1 zakje gist",
            "100 g boter",
            "100 g parelsuiker"
        ],
        preparation:
            "Meng in een kom bloem, gist, melk en ei. Kneed en voeg gesmolten boter toe. Roer de parelsuiker erdoor. Vorm bolletjes en bak in voorverwarmd wafelijzer tot goudbruin. Serveer warm."
    },
    ar: {
        title: "وافل لييج بسكر لؤلؤي (تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء",
            "1 خفاقة",
            "1 صانعة وافل"
        ],
        ingredients: [
            "250 غ دقيق",
            "125 مل حليب",
            "1 بيضة",
            "1 عبوة خميرة",
            "100 غ زبدة",
            "100 غ سكر لؤلؤي"
        ],
        preparation:
            "اخلط الدقيق والخميرة والحليب والبيضة في وعاء. اعجن وأضف الزبدة المذابة. أدمج السكر اللؤلؤي. شكل كرات واطبخ في صانعة وافل مسخنة مسبقًا حتى يصبح ذهبي اللون. قدمه ساخنًا."
    }
};
recipesData.dessert.mousseChocolatBelge = {
    country: "belgique",
    image: "images/mousse-chocolat-belge.jpg",
    fr: {
        title: "Mousse au chocolat belge (4 personnes)",
        equipment: [
            "1 saladier",
            "1 fouet",
            "1 casserole",
            "1 spatule",
            "4 ramequins"
        ],
        ingredients: [
            "200 g de chocolat noir belge",
            "4 œufs",
            "1 pincée de sel",
            "30 g de sucre"
        ],
        preparation:
            "Séparer les blancs des jaunes d'œufs. Faire fondre le chocolat au bain-marie. Battre les blancs en neige avec la pincée de sel. Mélanger les jaunes avec le chocolat fondu, puis incorporer délicatement les blancs en neige. Répartir dans 4 ramequins et laisser reposer 2 heures au réfrigérateur avant de servir."
    },
    en: {
        title: "Belgian Chocolate Mousse (Serves 4)",
        equipment: [
            "1 bowl",
            "1 whisk",
            "1 saucepan",
            "1 spatula",
            "4 ramekins"
        ],
        ingredients: [
            "200 g Belgian dark chocolate",
            "4 eggs",
            "1 pinch of salt",
            "30 g sugar"
        ],
        preparation:
            "Separate the egg whites from the yolks. Melt the chocolate in a bain-marie. Whip the egg whites with a pinch of salt until stiff. Mix the yolks with the melted chocolate, then gently fold in the egg whites. Divide into 4 ramekins and refrigerate for 2 hours before serving."
    },
    nl: {
        title: "Belgische chocolademousse (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 garde",
            "1 steelpan",
            "1 spatel",
            "4 ramekins"
        ],
        ingredients: [
            "200 g Belgische pure chocolade",
            "4 eieren",
            "1 snufje zout",
            "30 g suiker"
        ],
        preparation:
            "Splits de eiwitten van de dooiers. Smelt de chocolade au bain-marie. Klop de eiwitten met een snufje zout stijf. Meng de dooiers met de gesmolten chocolade en vouw voorzichtig de eiwitten erdoor. Verdeel over 4 ramekins en laat 2 uur opstijven in de koelkast voor het serveren."
    },
    ar: {
        title: "موس الشوكولاتة البلجيكي (تكفي 4 أشخاص)",
        equipment: [
            "وعاء",
            "خلاط يدوي",
            "قدر",
            "ملعقة مطاطية",
            "4 أكواب صغيرة"
        ],
        ingredients: [
            "200 غ شوكولاتة داكنة بلجيكية",
            "4 بيضات",
            "رشة ملح",
            "30 غ سكر"
        ],
        preparation:
            "افصل بياض البيض عن الصفار. ذوب الشوكولاتة على حمام مائي. اخفق بياض البيض مع رشة ملح حتى يصبح كثيفاً. اخلط الصفار مع الشوكولاتة المذابة ثم أدمج بياض البيض برفق. وزع الخليط في 4 أكواب صغيرة وضعه في الثلاجة لمدة ساعتين قبل التقديم."
    }
};
recipesData.patisserie.tarteletteFruitsRouges = {
    country: "belgique",
    image: "images/tartelette-fruits-rouges.jpg",
    fr: {
        title: "Tartelette aux fruits rouges (4 personnes)",
        equipment: [
            "1 moule à tartelette",
            "1 fouet",
            "1 saladier",
            "1 rouleau à pâtisserie",
            "1 pinceau de cuisine"
        ],
        ingredients: [
            "250 g de pâte sablée",
            "200 g de fruits rouges mélangés",
            "50 g de sucre",
            "100 ml de crème fraîche"
        ],
        preparation:
            "Préchauffer le four à 180°C. Étaler la pâte sablée et foncer les moules à tartelette. Piquer le fond avec une fourchette. Mélanger la crème et le sucre, verser sur la pâte. Ajouter les fruits rouges par-dessus. Cuire 20 à 25 minutes. Laisser refroidir avant de démouler et servir."
    },
    en: {
        title: "Red Fruit Tartlets (Serves 4)",
        equipment: [
            "1 tartlet pan",
            "1 whisk",
            "1 bowl",
            "1 rolling pin",
            "1 pastry brush"
        ],
        ingredients: [
            "250 g shortcrust pastry",
            "200 g mixed red fruits",
            "50 g sugar",
            "100 ml fresh cream"
        ],
        preparation:
            "Preheat oven to 180°C. Roll out the pastry and line the tartlet pans. Prick the base with a fork. Mix cream and sugar, pour over the pastry. Add red fruits on top. Bake for 20–25 minutes. Let cool before unmolding and serving."
    },
    nl: {
        title: "Tartelette met rode vruchten (voor 4 personen)",
        equipment: [
            "1 taartvorm voor tartelettes",
            "1 garde",
            "1 kom",
            "1 deegroller",
            "1 keukenborstel"
        ],
        ingredients: [
            "250 g zanddeeg",
            "200 g gemengde rode vruchten",
            "50 g suiker",
            "100 ml verse room"
        ],
        preparation:
            "Verwarm de oven voor op 180°C. Rol het deeg uit en bekleed de tartelettevormpjes. Prik de bodem met een vork. Meng room en suiker en giet over het deeg. Voeg de rode vruchten toe. Bak 20–25 minuten. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "تارتلت بالفواكه الحمراء (تكفي 4 أشخاص)",
        equipment: [
            "قالب تارتلت",
            "خلاط يدوي",
            "وعاء",
            "شوبك عجين",
            "فرشاة مطبخ"
        ],
        ingredients: [
            "250 غ عجينة قصيرة",
            "200 غ فواكه حمراء مشكلة",
            "50 غ سكر",
            "100 مل كريمة طازجة"
        ],
        preparation:
            "سخن الفرن على 180°C. افرد العجينة وضعها في قوالب التارتلت. ثقّب القاعدة بالشوكة. اخلط الكريمة مع السكر واسكبها على العجينة. ضع الفواكه الحمراء على الوجه. اخبز 20–25 دقيقة. اتركها تبرد قبل التقديم."
    }
};
recipesData.patisserie.biscuitSableBelge = {
    country: "belgique",
    image: "images/biscuit-sable-belge.jpg",
    fr: {
        title: "Biscuit sablé belge (4 personnes)",
        equipment: [
            "1 saladier",
            "1 fouet",
            "1 rouleau à pâtisserie",
            "1 plaque de cuisson",
            "1 cuillère"
        ],
        ingredients: [
            "200 g de farine",
            "100 g de beurre",
            "80 g de sucre",
            "1 œuf",
            "1 pincée de sel"
        ],
        preparation:
            "Préchauffer le four à 180°C. Mélanger la farine, le sucre et le sel. Ajouter le beurre et travailler la pâte jusqu'à obtenir un sable. Incorporer l'œuf et former une boule. Étaler la pâte et découper des formes. Déposer sur une plaque et cuire 12 à 15 minutes. Laisser refroidir avant de servir."
    },
    en: {
        title: "Belgian Shortbread Cookies (Serves 4)",
        equipment: [
            "1 bowl",
            "1 whisk",
            "1 rolling pin",
            "1 baking tray",
            "1 spoon"
        ],
        ingredients: [
            "200 g flour",
            "100 g butter",
            "80 g sugar",
            "1 egg",
            "1 pinch of salt"
        ],
        preparation:
            "Preheat oven to 180°C. Mix flour, sugar, and salt. Add butter and rub into the mixture until crumbly. Incorporate the egg and form a ball. Roll out the dough and cut into shapes. Place on a tray and bake 12–15 minutes. Let cool before serving."
    },
    nl: {
        title: "Belgische zandkoekjes (voor 4 personen)",
        equipment: [
            "1 kom",
            "1 garde",
            "1 deegroller",
            "1 bakplaat",
            "1 lepel"
        ],
        ingredients: [
            "200 g bloem",
            "100 g boter",
            "80 g suiker",
            "1 ei",
            "1 snufje zout"
        ],
        preparation:
            "Verwarm de oven voor op 180°C. Meng bloem, suiker en zout. Voeg de boter toe en wrijf tot een kruimelig deeg. Voeg het ei toe en vorm een bal. Rol uit en snijd in vormen. Leg op een bakplaat en bak 12–15 minuten. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بسكويت سابل بلجيكي (تكفي 4 أشخاص)",
        equipment: [
            "وعاء",
            "خلاط يدوي",
            "شوبك عجين",
            "صينية خبز",
            "ملعقة"
        ],
        ingredients: [
            "200 غ دقيق",
            "100 غ زبدة",
            "80 غ سكر",
            "1 بيضة",
            "رشة ملح"
        ],
        preparation:
            "سخن الفرن على 180°C. اخلط الدقيق والسكر والملح. أضف الزبدة وافرك حتى تصبح فتاتية. أضف البيضة وشكّل العجينة على شكل كرة. افردها وقطعها إلى أشكال. ضعها على صينية واخبز 12–15 دقيقة. اتركها لتبرد قبل التقديم."
    }
};
recipesData.patisserie.nougatDeGand = {
    country: "belgique",
    image: "images/nougat-gand.jpg",
    fr: {
        title: "Nougat de Gand (4 personnes)",
        equipment: [
            "1 casserole",
            "1 thermomètre de cuisine",
            "1 spatule",
            "1 moule rectangulaire",
            "1 papier cuisson"
        ],
        ingredients: [
            "200 g de sucre",
            "100 g de miel",
            "2 blancs d'œufs",
            "50 g d'amandes",
            "50 g de noisettes"
        ],
        preparation:
            "Torréfier les amandes et noisettes 5 minutes. Chauffer le sucre et le miel jusqu'à 140°C. Monter les blancs en neige. Verser le sirop chaud sur les blancs en continuant de battre. Ajouter les fruits secs. Étaler dans un moule chemisé et laisser refroidir. Découper en rectangles."
    },
    en: {
        title: "Ghent Nougat (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 cooking thermometer",
            "1 spatula",
            "1 rectangular mold",
            "1 parchment paper"
        ],
        ingredients: [
            "200 g sugar",
            "100 g honey",
            "2 egg whites",
            "50 g almonds",
            "50 g hazelnuts"
        ],
        preparation:
            "Toast the almonds and hazelnuts for 5 minutes. Heat sugar and honey to 140°C. Whip egg whites until stiff. Pour hot syrup over the whites while whisking. Add nuts. Spread into a lined mold and let cool. Cut into rectangles."
    },
    nl: {
        title: "Gentse nougat (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 keukenthermometer",
            "1 spatel",
            "1 rechthoekige vorm",
            "1 bakpapier"
        ],
        ingredients: [
            "200 g suiker",
            "100 g honing",
            "2 eiwitten",
            "50 g amandelen",
            "50 g hazelnoten"
        ],
        preparation:
            "Rooster de amandelen en hazelnoten 5 minuten. Verhit suiker en honing tot 140°C. Klop de eiwitten stijf. Giet de hete siroop over de eiwitten terwijl je klopt. Voeg noten toe. Spreid in een beklede vorm en laat afkoelen. Snijd in rechthoeken."
    },
    ar: {
        title: "نوغا غينت (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "مقياس حرارة للمطبخ",
            "ملعقة مطاطية",
            "قالب مستطيل",
            "ورق زبدة"
        ],
        ingredients: [
            "200 غ سكر",
            "100 غ عسل",
            "2 بياض بيض",
            "50 غ لوز",
            "50 غ بندق"
        ],
        preparation:
            "حمص اللوز والبندق 5 دقائق. سخن السكر والعسل حتى 140°C. اخفق بياض البيض حتى يصبح كثيفًا. صب الشراب الساخن على البياض أثناء الخفق. أضف المكسرات. افرد في قالب مدهون واتركه ليبرد. قطع إلى مستطيلات."
    }
};

recipesData.patisserie.gaufreBruxelles = {
    country: "belgique",
    image: "images/gaufre-bruxelles.jpg",
    fr: {
        title: "Gaufres de Bruxelles au sucre perlé (pour 4 personnes)",
        equipment: [
            "1 gaufrier",
            "1 saladier",
            "1 fouet",
            "1 spatule"
        ],
        ingredients: [
            "250 g de farine",
            "50 g de sucre",
            "2 œufs",
            "125 ml de lait",
            "125 g de beurre fondu",
            "1 sachet de sucre vanillé",
            "1 pincée de sel",
            "50 g de sucre perlé"
        ],
        preparation:
            "Dans un saladier, mélanger la farine, le sucre, le sucre vanillé et le sel. Ajouter les œufs et le lait progressivement, puis incorporer le beurre fondu. Laisser reposer 30 minutes. Chauffer le gaufrier, y verser la pâte, saupoudrer de sucre perlé sur le dessus et cuire jusqu’à dorure. Servir chaud."
    },
    en: {
        title: "Brussels Waffles with Pearl Sugar (Serves 4)",
        equipment: [
            "1 waffle iron",
            "1 bowl",
            "1 whisk",
            "1 spatula"
        ],
        ingredients: [
            "250 g flour",
            "50 g sugar",
            "2 eggs",
            "125 ml milk",
            "125 g melted butter",
            "1 packet vanilla sugar",
            "1 pinch salt",
            "50 g pearl sugar"
        ],
        preparation:
            "In a bowl, mix flour, sugar, vanilla sugar, and salt. Gradually add eggs and milk, then stir in melted butter. Let the batter rest for 30 minutes. Heat the waffle iron, pour the batter, sprinkle with pearl sugar on top, and cook until golden. Serve hot."
    },
    nl: {
        title: "Brusselse wafels met parelsuiker (voor 4 personen)",
        equipment: [
            "1 wafelijzer",
            "1 kom",
            "1 garde",
            "1 spatel"
        ],
        ingredients: [
            "250 g bloem",
            "50 g suiker",
            "2 eieren",
            "125 ml melk",
            "125 g gesmolten boter",
            "1 zakje vanillesuiker",
            "1 snufje zout",
            "50 g parelsuiker"
        ],
        preparation:
            "Meng in een kom bloem, suiker, vanillesuiker en zout. Voeg geleidelijk de eieren en melk toe, en roer de gesmolten boter erdoor. Laat 30 minuten rusten. Verhit het wafelijzer, giet het beslag erin, bestrooi met parelsuiker en bak tot goudbruin. Serveer warm."
    },
    ar: {
        title: "وافل بروكسل بسكر لؤلؤي (يكفي 4 أشخاص)",
        equipment: [
            "آلة الوافل",
            "وعاء",
            "خفاق",
            "معلقة"
        ],
        ingredients: [
            "250 غ دقيق",
            "50 غ سكر",
            "2 بيضات",
            "125 مل حليب",
            "125 غ زبدة مذابة",
            "1 كيس سكر فانيليا",
            "رشة ملح",
            "50 غ سكر حبيبي"
        ],
        preparation:
            "في وعاء، اخلطي الدقيق والسكر وسكر الفانيليا والملح. أضيفي البيض والحليب تدريجياً، ثم ضعي الزبدة المذابة واخلطي. اتركي الخليط يرتاح 30 دقيقة. سخني آلة الوافل، صبي الخليط، رشي السكر الحبيبي على الوجه، واطهي حتى يتحمر. قدميه ساخناً."
    }
};

recipesData.patisserie.gaufresBelges = {
    country: "belgique",
    image: "images/gaufres-belges.jpg",
    fr: {
        title: "Gaufres belges simples (4 personnes)",
        equipment: [
            "1 grand bol",
            "1 fouet",
            "1 balance de cuisine",
            "1 verre doseur",
            "1 gaufrier",
            "1 spatule en silicone"
        ],
        ingredients: [
            "200 g farine de blé",
            "2 cuillères à soupe sucre (30 g)",
            "1 cuillère à café levure chimique (5 g)",
            "1 pincée de sel",
            "2 œufs",
            "250 ml lait demi-écrémé",
            "50 g beurre fondu",
            "1 cuillère à café extrait de vanille (5 ml)"
        ],
        preparation:
            "Cette recette est prévue pour 4 personnes.\n" +
            "1. Dans un grand bol, mélanger la farine, le sucre, la levure et le sel.\n" +
            "2. Séparer les blancs des jaunes d'œufs.\n" +
            "3. Dans un autre bol, battre les jaunes avec le lait, le beurre fondu et la vanille.\n" +
            "4. Ajouter le mélange liquide aux ingrédients secs et mélanger jusqu’à obtenir une pâte lisse.\n" +
            "5. Battre les blancs en neige ferme et incorporer délicatement à la pâte.\n" +
            "6. Préchauffer le gaufrier et le huiler légèrement si nécessaire.\n" +
            "7. Verser la quantité de pâte appropriée et cuire 3-5 minutes jusqu’à ce que les gaufres soient dorées.\n" +
            "8. Retirer, laisser tiédir légèrement et servir avec fruits, miel ou sirop."
    },
    en: {
        title: "Simple Belgian Waffles (Serves 4)",
        equipment: [
            "1 large bowl",
            "1 whisk",
            "1 kitchen scale",
            "1 measuring cup",
            "1 waffle iron",
            "1 silicone spatula"
        ],
        ingredients: [
            "200 g wheat flour",
            "2 tablespoons sugar (30 g)",
            "1 teaspoon baking powder (5 g)",
            "1 pinch salt",
            "2 eggs",
            "250 ml semi-skimmed milk",
            "50 g melted butter",
            "1 teaspoon vanilla extract (5 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a large bowl, mix flour, sugar, baking powder, and salt.\n" +
            "2. Separate egg whites and yolks.\n" +
            "3. In another bowl, beat yolks with milk, melted butter, and vanilla.\n" +
            "4. Add wet mixture to dry ingredients and mix until smooth.\n" +
            "5. Beat egg whites until stiff peaks form and fold gently into the batter.\n" +
            "6. Preheat waffle iron and lightly grease if needed.\n" +
            "7. Pour appropriate amount of batter, cook 3-5 minutes until golden.\n" +
            "8. Remove, let cool slightly, and serve with fruits, honey, or syrup."
    },
    nl: {
        title: "Eenvoudige Belgische wafels (voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 garde",
            "1 keukenweegschaal",
            "1 maatbeker",
            "1 wafelijzer",
            "1 siliconen spatel"
        ],
        ingredients: [
            "200 g tarwebloem",
            "2 eetlepels suiker (30 g)",
            "1 theelepel bakpoeder (5 g)",
            "1 snufje zout",
            "2 eieren",
            "250 ml halfvolle melk",
            "50 g gesmolten boter",
            "1 theelepel vanille-extract (5 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng in een grote kom bloem, suiker, bakpoeder en zout.\n" +
            "2. Scheid de eiwitten van de dooiers.\n" +
            "3. Klop de dooiers met melk, gesmolten boter en vanille in een andere kom.\n" +
            "4. Voeg het vocht toe aan de droge ingrediënten en meng tot een glad beslag.\n" +
            "5. Klop de eiwitten stijf en spatel voorzichtig door het beslag.\n" +
            "6. Verwarm het wafelijzer en vet licht in indien nodig.\n" +
            "7. Giet de juiste hoeveelheid beslag erin en bak 3-5 minuten tot goudbruin.\n" +
            "8. Haal eruit, laat iets afkoelen en serveer met fruit, honing of siroop."
    },
    ar: {
        title: "وافل بلجيكية بسيطة (يكفي 4 أشخاص)",
        equipment: [
            "وعاء كبير",
            "خلاط يدوي",
            "ميزان مطبخ",
            "كوب قياس",
            "آلة وفل",
            "ملعقة سيليكون"
        ],
        ingredients: [
            "200غ دقيق قمح",
            "2 ملعقة كبيرة سكر بني (30غ)",
            "1 ملعقة صغيرة بيكنج باودر (5غ)",
            "رشة ملح",
            "2 بيض",
            "250 مل حليب نصف دسم",
            "50غ زبدة مذابة",
            "1 ملعقة صغيرة فانيليا (5 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اخلط الدقيق، السكر، البيكنج باودر والملح في وعاء كبير.\n" +
            "2. افصل بياض البيض عن الصفار.\n" +
            "3. في وعاء آخر، اخفق الصفار مع الحليب، الزبدة المذابة والفانيليا.\n" +
            "4. أضف المزيج السائل إلى المكونات الجافة واخلط حتى يصبح عجينة ناعمة.\n" +
            "5. اخفق بياض البيض حتى يشكل قمم ثابتة واطوِه برفق في العجينة.\n" +
            "6. سخّن آلة الوافل وادهنها قليلًا إذا لزم الأمر.\n" +
            "7. صب كمية مناسبة من العجينة واطبخ 3-5 دقائق حتى يصبح ذهبي اللون.\n" +
            "8. أزلها، دعها تبرد قليلاً، وقدّمها مع الفواكه، العسل أو الشراب."
    }
};
recipesData.entree.saladeNicoise = {
    country: "france",
    image: "images/salade-nicoise.jpg",

    fr: {
        title: "Salade niçoise revisitée (4 personnes)",
        equipment: [
            "1 saladier",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 petite casserole pour œufs"
        ],
        ingredients: [
            "200 g salade verte lavée et coupée en morceaux",
            "4 œufs durs",
            "200 g haricots verts frais",
            "150 g tomates cerises coupées en deux",
            "100 g poivron rouge en dés",
            "100 g concombre en rondelles",
            "150 g thon en boîte, égoutté",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 cuillère à soupe jus de citron (15 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Cuire les œufs dans une petite casserole 10 minutes pour obtenir des œufs durs. Refroidir et écaler.\n" +
            "2. Cuire les haricots verts dans l’eau bouillante salée 6-8 minutes jusqu’à tendreté, puis plonger dans l’eau froide.\n" +
            "3. Laver et couper la salade, tomates, poivron et concombre.\n" +
            "4. Dans un grand saladier, mélanger salade, haricots, tomates, poivron, concombre.\n" +
            "5. Ajouter le thon émietté.\n" +
            "6. Couper les œufs en quartiers et disposer sur le dessus.\n" +
            "7. Assaisonner avec huile d’olive, jus de citron, sel et poivre. Mélanger délicatement et servir."
    },

    en: {
        title: "Revisited Niçoise Salad (Serves 4)",
        equipment: [
            "1 salad bowl",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 small pot for eggs"
        ],
        ingredients: [
            "200 g washed lettuce, chopped",
            "4 hard-boiled eggs",
            "200 g fresh green beans",
            "150 g cherry tomatoes, halved",
            "100 g red bell pepper, diced",
            "100 g cucumber, sliced",
            "150 g canned tuna, drained",
            "2 tablespoons olive oil (30 ml)",
            "1 tablespoon lemon juice (15 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Boil eggs for 10 minutes until hard, then cool and peel.\n" +
            "2. Boil green beans in salted water 6-8 minutes, then plunge into cold water.\n" +
            "3. Wash and cut lettuce, tomatoes, bell pepper, and cucumber.\n" +
            "4. In a large bowl, mix lettuce, beans, tomatoes, bell pepper, cucumber.\n" +
            "5. Add flaked tuna.\n" +
            "6. Cut eggs into quarters and place on top.\n" +
            "7. Dress with olive oil, lemon juice, salt and pepper. Toss gently and serve."
    },

    nl: {
        title: "Hervormde Niçoise salade (voor 4 personen)",
        equipment: [
            "1 slakom",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kleine pan voor eieren"
        ],
        ingredients: [
            "200 g gewassen sla, in stukken gesneden",
            "4 hardgekookte eieren",
            "200 g verse sperziebonen",
            "150 g cherrytomaatjes, gehalveerd",
            "100 g rode paprika, in blokjes",
            "100 g komkommer, in plakjes",
            "150 g tonijn uit blik, uitgelekt",
            "2 eetlepels olijfolie (30 ml)",
            "1 eetlepel citroensap (15 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Kook de eieren 10 minuten hard, koel af en pel ze.\n" +
            "2. Kook de sperziebonen 6-8 minuten in gezouten water, dompel daarna in koud water.\n" +
            "3. Was en snijd de sla, tomaten, paprika en komkommer.\n" +
            "4. Meng in een grote kom sla, bonen, tomaten, paprika en komkommer.\n" +
            "5. Voeg de uitgelekte tonijn toe.\n" +
            "6. Snijd de eieren in vieren en leg bovenop.\n" +
            "7. Breng op smaak met olijfolie, citroensap, zout en peper. Meng voorzichtig en serveer."
    },

    ar: {
        title: "سلطة نيسواز معدلة (تكفي 4 أشخاص)",
        equipment: [
            "وعاء سلطة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "قدر صغير للبيض"
        ],
        ingredients: [
            "200غ خس مغسول ومقطع",
            "4 بيض مسلوق",
            "200غ فاصولياء خضراء طازجة",
            "150غ طماطم كرزية مقطعة نصفين",
            "100غ فلفل أحمر مقطع مكعبات",
            "100غ خيار مقطع شرائح",
            "150غ تونة معلبة، مصفاة",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة كبيرة عصير ليمون (15 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اسلق البيض 10 دقائق حتى يصبح مسلوقاً، ثم برده وقشّره.\n" +
            "2. اسلق الفاصولياء 6-8 دقائق في ماء مملح، ثم ضعها في ماء بارد.\n" +
            "3. اغسل وقطع الخس والطماطم والفلفل والخيار.\n" +
            "4. اخلط في وعاء كبير الخس والفاصولياء والطماطم والفلفل والخيار.\n" +
            "5. أضف التونة المصفاة.\n" +
            "6. قطع البيض إلى أرباع وضعه فوق السلطة.\n" +
            "7. تبّل بزيت الزيتون وعصير الليمون والملح والفلفل. قلب برفق وقدّم."
    }
};
recipesData.entree.soupeOignon = {
    country: "france",
    image: "images/soupe-oignon.jpg",
    fr: {
        title: "Soupe à l’oignon gratinée (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 louche",
            "1 râpe à fromage"
        ],
        ingredients: [
            "500 g d’oignons",
            "30 g de beurre",
            "1 cuillère à soupe d’huile d’olive",
            "1 litre de bouillon de légumes",
            "Sel et poivre",
            "100 g de fromage râpé"
        ],
        preparation: "Éplucher et émincer les oignons. Faire fondre le beurre et l’huile dans une casserole à feu moyen, ajouter les oignons et cuire 15 minutes jusqu’à ce qu’ils soient dorés. Ajouter le bouillon, saler, poivrer et laisser mijoter 20 minutes. Verser dans des bols, saupoudrer de fromage et passer sous le gril 5 minutes. Servir chaud."
    },
    en: {
        title: "French Onion Soup (Serves 4)",
        equipment: [
            "1 large saucepan",
            "1 knife",
            "1 cutting board",
            "1 ladle",
            "1 cheese grater"
        ],
        ingredients: [
            "500 g onions",
            "30 g butter",
            "1 tbsp olive oil",
            "1 liter vegetable broth",
            "Salt and pepper",
            "100 g grated cheese"
        ],
        preparation: "Peel and slice onions. Melt butter and oil in a saucepan over medium heat, add onions and cook 15 minutes until golden. Add broth, season with salt and pepper, simmer 20 minutes. Pour into bowls, sprinkle cheese and broil 5 minutes. Serve hot."
    },
    nl: {
        title: "Franse uiensoep (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 soeplepel",
            "1 kaasschaaf"
        ],
        ingredients: [
            "500 g uien",
            "30 g boter",
            "1 eetlepel olijfolie",
            "1 liter groentebouillon",
            "Zout en peper",
            "100 g geraspte kaas"
        ],
        preparation: "Pel en snijd de uien. Smelt boter en olie in een pan op middelhoog vuur, voeg uien toe en bak 15 minuten tot goudbruin. Voeg bouillon toe, zout en peper, laat 20 minuten sudderen. Schenk in kommen, bestrooi met kaas en gratineer 5 minuten. Serveer warm."
    },
    ar: {
        title: "حساء البصل الفرنسي مع الجبن (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "مغرفة",
            "مبشرة جبن"
        ],
        ingredients: [
            "500 غ بصل",
            "30 غ زبدة",
            "1 ملعقة كبيرة زيت زيتون",
            "1 لتر مرق خضار",
            "ملح وفلفل",
            "100 غ جبن مبشور"
        ],
        preparation: "قشر وقطع البصل شرائح. ذوّب الزبدة والزيت في قدر على نار متوسطة، أضف البصل واطهي 15 دقيقة حتى يصبح ذهبي اللون. أضف المرق، الملح والفلفل، واتركه ينضج 20 دقيقة. صب في أطباق، رش الجبن وحمّص 5 دقائق. قدمه ساخناً."
    }
};
recipesData.entree.quicheLorraine = {
    country: "france",
    image: "images/quiche-lorraine.jpg",
    fr: {
        title: "Quiche Lorraine (4 personnes)",
        equipment: [
            "1 moule à tarte",
            "1 bol",
            "1 fouet",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "1 pâte brisée",
            "200 g de lardons fumés",
            "3 œufs",
            "200 ml de crème fraîche",
            "Sel et poivre",
            "Noix de muscade"
        ],
        preparation: "Préchauffer le four à 180°C. Étaler la pâte dans le moule. Faire revenir les lardons 5 minutes. Dans un bol, battre les œufs avec la crème, sel, poivre et une pincée de muscade. Répartir les lardons sur la pâte, verser le mélange œufs-crème. Cuire 30 à 35 minutes jusqu'à ce que la quiche soit dorée."
    },
    en: {
        title: "Quiche Lorraine (Serves 4)",
        equipment: [
            "1 tart pan",
            "1 bowl",
            "1 whisk",
            "1 knife",
            "1 cutting board"
        ],
        ingredients: [
            "1 shortcrust pastry",
            "200 g smoked bacon",
            "3 eggs",
            "200 ml cream",
            "Salt and pepper",
            "Nutmeg"
        ],
        preparation: "Preheat oven to 180°C. Roll out pastry in the pan. Fry bacon 5 minutes. In a bowl, whisk eggs with cream, salt, pepper and a pinch of nutmeg. Spread bacon over the pastry, pour egg-cream mixture. Bake 30-35 minutes until golden."
    },
    nl: {
        title: "Quiche Lorraine (voor 4 personen)",
        equipment: [
            "1 taartvorm",
            "1 kom",
            "1 garde",
            "1 mes",
            "1 snijplank"
        ],
        ingredients: [
            "1 zanddeeg",
            "200 g gerookt spek",
            "3 eieren",
            "200 ml room",
            "Zout en peper",
            "Nootmuskaat"
        ],
        preparation: "Verwarm oven voor op 180°C. Rol het deeg uit in de vorm. Bak spek 5 minuten. Klop in een kom eieren met room, zout, peper en een snufje nootmuskaat. Verdeel spek over deeg, giet eimengsel erover. Bak 30-35 minuten tot goudbruin."
    },
    ar: {
        title: "كويش لورين (يكفي 4 أشخاص)",
        equipment: [
            "صينية فطيرة",
            "وعاء",
            "خفاق",
            "سكين",
            "لوح تقطيع"
        ],
        ingredients: [
            "1 عجينة قصيرة",
            "200 غ لحم مقدد مدخن",
            "3 بيضات",
            "200 مل كريمة",
            "ملح وفلفل",
            "جوزة الطيب"
        ],
        preparation: "سخن الفرن إلى 180°م. افرد العجينة في الصينية. اقلي اللحم 5 دقائق. في وعاء، اخفق البيض مع الكريمة، الملح، الفلفل ورشة جوزة الطيب. ضع اللحم على العجينة واسكب خليط البيض والكريمة. اخبز 30-35 دقيقة حتى يصبح ذهبي."
    }
};
recipesData.entree.saladeChevre = {
    country: "france",
    image: "images/salade-chevre.jpg",
    fr: {
        title: "Salade de chèvre chaud (4 personnes)",
        equipment: [
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 saladier",
            "1 cuillère"
        ],
        ingredients: [
            "4 tranches de pain de campagne",
            "100 g de fromage de chèvre",
            "Salade verte",
            "2 tomates",
            "3 cuillères à soupe d’huile d’olive",
            "1 cuillère à soupe de vinaigre balsamique (facultatif)",
            "Sel et poivre"
        ],
        preparation: "Préchauffer le four à 180°C. Déposer le fromage sur le pain et passer au four 5 minutes. Dans un saladier, mélanger la salade et les tomates coupées. Assaisonner. Déposer les tranches de pain au chèvre sur la salade et servir chaud."
    },
    en: {
        title: "Warm Goat Cheese Salad (Serves 4)",
        equipment: [
            "1 frying pan",
            "1 knife",
            "1 cutting board",
            "1 salad bowl",
            "1 spoon"
        ],
        ingredients: [
            "4 slices country bread",
            "100 g goat cheese",
            "Lettuce",
            "2 tomatoes",
            "3 tbsp olive oil",
            "1 tbsp balsamic vinegar (optional)",
            "Salt and pepper"
        ],
        preparation: "Preheat oven to 180°C. Place cheese on bread and bake 5 minutes. In a bowl, mix lettuce and chopped tomatoes. Season. Place warm cheese slices on salad and serve."
    },
    nl: {
        title: "Salade met warme geitenkaas (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 slakom",
            "1 lepel"
        ],
        ingredients: [
            "4 sneetjes volkorenbrood",
            "100 g geitenkaas",
            "Sla",
            "2 tomaten",
            "3 eetlepels olijfolie",
            "1 eetlepel balsamico (optioneel)",
            "Zout en peper"
        ],
        preparation: "Verwarm oven voor op 180°C. Leg kaas op brood en bak 5 minuten. Meng sla en gesneden tomaten in een kom. Breng op smaak. Leg warme kaas op de salade en serveer."
    },
    ar: {
        title: "سلطة بالجبن الطازج (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "سكين",
            "لوح تقطيع",
            "وعاء سلطة",
            "ملعقة"
        ],
        ingredients: [
            "4 شرائح خبز ريفي",
            "100 غ جبن الماعز",
            "خس",
            "2 طماطم",
            "3 ملاعق كبيرة زيت زيتون",
            "1 ملعقة كبيرة خل بلسمي (اختياري)",
            "ملح وفلفل"
        ],
        preparation: "سخن الفرن إلى 180°م. ضع الجبن على الخبز واخبزه 5 دقائق. في وعاء، اخلط الخس والطماطم المقطعة. تبّل حسب الرغبة. ضع شرائح الجبن الدافئة على السلطة وقدّمها."
    }
};
recipesData.entree.terrineLegumes = {
    country: "france",
    image: "images/terrine-legumes.jpg",
    fr: {
        title: "Terrine de légumes (4 personnes)",
        equipment: [
            "1 moule à terrine",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 fourchette"
        ],
        ingredients: [
            "1 courgette",
            "1 carotte",
            "1 poivron rouge",
            "2 œufs",
            "100 ml crème",
            "Sel et poivre"
        ],
        preparation: "Préchauffer le four à 180°C. Couper tous les légumes en petits dés. Dans un bol, battre les œufs et la crème, saler et poivrer. Mélanger avec les légumes et verser dans le moule. Cuire 30 minutes. Laisser refroidir avant de démouler."
    },
    en: {
        title: "Vegetable Terrine (Serves 4)",
        equipment: [
            "1 terrine mold",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 fork"
        ],
        ingredients: [
            "1 zucchini",
            "1 carrot",
            "1 red bell pepper",
            "2 eggs",
            "100 ml cream",
            "Salt and pepper"
        ],
        preparation: "Preheat oven to 180°C. Dice all vegetables. In a bowl, whisk eggs and cream, season. Mix with vegetables and pour into mold. Bake 30 minutes. Cool before unmolding."
    },
    nl: {
        title: "Groenteterrine (voor 4 personen)",
        equipment: [
            "1 terrinevorm",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 vork"
        ],
        ingredients: [
            "1 courgette",
            "1 wortel",
            "1 rode paprika",
            "2 eieren",
            "100 ml room",
            "Zout en peper"
        ],
        preparation: "Verwarm oven voor op 180°C. Snijd alle groenten in blokjes. Klop eieren en room in een kom, breng op smaak. Meng met groenten en giet in vorm. Bak 30 minuten. Laat afkoelen voor het uit de vorm halen."
    },
    ar: {
        title: "تيرين الخضار (يكفي 4 أشخاص)",
        equipment: [
            "قالب تيرين",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "شوكة"
        ],
        ingredients: [
            "1 كوسة",
            "1 جزر",
            "1 فلفل أحمر",
            "2 بيضات",
            "100 مل كريمة",
            "ملح وفلفل"
        ],
        preparation: "سخن الفرن إلى 180°م. قطع جميع الخضار إلى مكعبات صغيرة. في وعاء، اخفق البيض والكريمة، أضف الملح والفلفل. اخلط مع الخضار واسكب في القالب. اخبز 30 دقيقة. اتركه يبرد قبل التقديم."
    }
};
recipesData.entree.soupePotimarron = {
    country: "france",
    image: "images/soupe-potimarron.jpg",
    fr: {
        title: "Soupe de potimarron (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 mixeur",
            "1 louche"
        ],
        ingredients: [
            "1 potimarron (800 g)",
            "1 oignon",
            "1 litre bouillon de légumes",
            "Sel et poivre",
            "1 cuillère à soupe huile d’olive"
        ],
        preparation: "Éplucher et couper le potimarron en cubes. Émincer l’oignon. Faire revenir l’oignon dans l’huile 5 minutes. Ajouter le potimarron et le bouillon, saler et poivrer. Cuire 25 minutes. Mixer et servir chaud."
    },
    en: {
        title: "Pumpkin Soup (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 knife",
            "1 cutting board",
            "1 blender",
            "1 ladle"
        ],
        ingredients: [
            "1 pumpkin (800 g)",
            "1 onion",
            "1 liter vegetable broth",
            "Salt and pepper",
            "1 tbsp olive oil"
        ],
        preparation: "Peel and cube pumpkin. Slice onion. Sauté onion in oil 5 minutes. Add pumpkin and broth, season. Cook 25 minutes. Blend and serve hot."
    },
    nl: {
        title: "Pompoensoep (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 blender",
            "1 soeplepel"
        ],
        ingredients: [
            "1 pompoen (800 g)",
            "1 ui",
            "1 liter groentebouillon",
            "Zout en peper",
            "1 eetlepel olijfolie"
        ],
        preparation: "Schil en snijd pompoen in blokjes. Snijd ui. Bak ui 5 minuten in olie. Voeg pompoen en bouillon toe, breng op smaak. Kook 25 minuten. Mix en serveer warm."
    },
    ar: {
        title: "حساء اليقطين (يكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "خلاط",
            "مغرفة"
        ],
        ingredients: [
            "1 يقطين (800 غ)",
            "1 بصل",
            "1 لتر مرق خضار",
            "ملح وفلفل",
            "1 ملعقة كبيرة زيت زيتون"
        ],
        preparation: "قشر اليقطين وقطعه مكعبات. قطع البصل. اقلي البصل في الزيت 5 دقائق. أضف اليقطين والمرق، تبّل. اطبخ 25 دقيقة. اخلطه وقدم ساخناً."
    }
};
recipesData.entree.saladeCarottes = {
    country: "france",
    image: "images/salade-carottes.jpg",
    fr: {
        title: "Salade de carottes (4 personnes)",
        equipment: [
            "1 râpe",
            "1 bol",
            "1 cuillère"
        ],
        ingredients: [
            "4 carottes",
            "2 cuillères à soupe jus de citron",
            "2 cuillères à soupe huile d’olive",
            "Sel et poivre",
            "Persil haché"
        ],
        preparation: "Éplucher et râper les carottes. Dans un bol, mélanger jus de citron, huile, sel et poivre. Ajouter les carottes et le persil. Bien mélanger et servir frais."
    },
    en: {
        title: "Carrot Salad (Serves 4)",
        equipment: [
            "1 grater",
            "1 bowl",
            "1 spoon"
        ],
        ingredients: [
            "4 carrots",
            "2 tbsp lemon juice",
            "2 tbsp olive oil",
            "Salt and pepper",
            "Chopped parsley"
        ],
        preparation: "Peel and grate carrots. In a bowl, mix lemon juice, oil, salt and pepper. Add carrots and parsley. Mix well and serve chilled."
    },
    nl: {
        title: "Wortelsalade (voor 4 personen)",
        equipment: [
            "1 rasp",
            "1 kom",
            "1 lepel"
        ],
        ingredients: [
            "4 wortelen",
            "2 eetlepels citroensap",
            "2 eetlepels olijfolie",
            "Zout en peper",
            "Fijngehakte peterselie"
        ],
        preparation: "Schil en rasp wortelen. Meng in een kom citroensap, olie, zout en peper. Voeg wortelen en peterselie toe. Meng goed en serveer koud."
    },
    ar: {
        title: "سلطة الجزر (يكفي 4 أشخاص)",
        equipment: [
            "مبشرة",
            "وعاء",
            "ملعقة"
        ],
        ingredients: [
            "4 جزرات",
            "2 ملعقة كبيرة عصير ليمون",
            "2 ملعقة كبيرة زيت زيتون",
            "ملح وفلفل",
            "بقدونس مفروم"
        ],
        preparation: "قشّر الجزر وابشره. في وعاء، اخلط عصير الليمون، الزيت، الملح والفلفل. أضف الجزر والبقدونس. امزج جيداً وقدّم بارداً."
    }
};
recipesData.entree.omeletteHerbes = {
    country: "france",
    image: "images/omelette-herbes.jpg",
    fr: {
        title: "Omelette aux fines herbes (4 personnes)",
        equipment: [
            "1 poêle",
            "1 bol",
            "1 fouet",
            "1 cuillère en bois"
        ],
        ingredients: [
            "6 œufs",
            "2 cuillères à soupe lait",
            "Sel et poivre",
            "Persil, ciboulette, basilic hachés",
            "1 cuillère à soupe huile d’olive"
        ],
        preparation: "Battre les œufs avec le lait, sel, poivre et herbes. Chauffer l’huile dans une poêle, verser les œufs et cuire à feu moyen en remuant légèrement jusqu’à consistance ferme. Servir chaud."
    },
    en: {
        title: "Herb Omelette (Serves 4)",
        equipment: [
            "1 frying pan",
            "1 bowl",
            "1 whisk",
            "1 wooden spoon"
        ],
        ingredients: [
            "6 eggs",
            "2 tbsp milk",
            "Salt and pepper",
            "Chopped parsley, chives, basil",
            "1 tbsp olive oil"
        ],
        preparation: "Beat eggs with milk, salt, pepper and herbs. Heat oil in pan, pour eggs and cook over medium heat, stirring gently until firm. Serve hot."
    },
    nl: {
        title: "Kruidenomelet (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 kom",
            "1 garde",
            "1 houten lepel"
        ],
        ingredients: [
            "6 eieren",
            "2 eetlepels melk",
            "Zout en peper",
            "Fijngehakte peterselie, bieslook, basilicum",
            "1 eetlepel olijfolie"
        ],
        preparation: "Klop eieren met melk, zout, peper en kruiden. Verhit olie in pan, giet eieren erin en bak op middelhoog vuur tot stevig. Serveer warm."
    },
    ar: {
        title: "عجة بالأعشاب (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "وعاء",
            "خفاق",
            "ملعقة خشبية"
        ],
        ingredients: [
            "6 بيضات",
            "2 ملعقة كبيرة حليب",
            "ملح وفلفل",
            "بقدونس، شبت، ريحان مفروم",
            "1 ملعقة كبيرة زيت زيتون"
        ],
        preparation: "اخفق البيض مع الحليب، الملح، الفلفل والأعشاب. سخّن الزيت في المقلاة، صب البيض واطبخ على نار متوسطة مع التحريك برفق حتى يتماسك. قدّم ساخناً."
    }
};
recipesData.entree.soupeLegumesProvence = {
    country: "france",
    image: "images/soupe-legumes-provence.jpg",
    fr: {
        title: "Soupe de légumes provençale (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 louche"
        ],
        ingredients: [
            "2 carottes",
            "2 courgettes",
            "1 poivron rouge",
            "1 oignon",
            "2 gousses d’ail",
            "1 litre bouillon de légumes",
            "Sel et poivre",
            "Herbes de Provence"
        ],
        preparation: "Éplucher et couper tous les légumes en dés. Dans une casserole, faire revenir l’oignon et l’ail dans un peu d’huile d’olive 5 minutes. Ajouter les autres légumes et le bouillon. Saler, poivrer et ajouter les herbes. Laisser mijoter 30 minutes. Servir chaud."
    },
    en: {
        title: "Provençal Vegetable Soup (Serves 4)",
        equipment: [
            "1 large saucepan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 ladle"
        ],
        ingredients: [
            "2 carrots",
            "2 zucchinis",
            "1 red bell pepper",
            "1 onion",
            "2 garlic cloves",
            "1 liter vegetable broth",
            "Salt and pepper",
            "Herbs de Provence"
        ],
        preparation: "Peel and dice all vegetables. In a saucepan, sauté onion and garlic in olive oil 5 minutes. Add other vegetables and broth. Season with salt, pepper and herbs. Simmer 30 minutes. Serve hot."
    },
    nl: {
        title: "Provençaalse groentesoep (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 soeplepel"
        ],
        ingredients: [
            "2 wortelen",
            "2 courgettes",
            "1 rode paprika",
            "1 ui",
            "2 teentjes knoflook",
            "1 liter groentebouillon",
            "Zout en peper",
            "Provençaalse kruiden"
        ],
        preparation: "Schil en snijd alle groenten in blokjes. Bak ui en knoflook 5 minuten in olijfolie. Voeg andere groenten en bouillon toe. Breng op smaak met zout, peper en kruiden. Laat 30 minuten sudderen. Serveer warm."
    },
    ar: {
        title: "حساء الخضار على الطريقة البروفنسية (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "مغرفة"
        ],
        ingredients: [
            "2 جزرات",
            "2 كوسة",
            "1 فلفل أحمر",
            "1 بصل",
            "2 فص ثوم",
            "1 لتر مرق خضار",
            "ملح وفلفل",
            "أعشاب بروفنس"
        ],
        preparation: "قشّر وقطع جميع الخضار إلى مكعبات. في قدر، اقلي البصل والثوم في زيت زيتون 5 دقائق. أضف باقي الخضار والمرق. تبّل بالملح والفلفل والأعشاب. اتركه ينضج 30 دقيقة. قدّم ساخناً."
    }
};


recipesData.plat.ratatouille = {
    country: "france",
    image: "images/ratatouille.jpg",
    fr: {
        title: "Ratatouille provençale (4 personnes)",
        equipment: [
            "1 grande casserole ou cocotte",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol pour ingrédients"
        ],
        ingredients: [
            "2 aubergines moyennes (environ 500 g), coupées en cubes",
            "2 courgettes moyennes (400 g), coupées en rondelles",
            "1 poivron rouge (150 g), en dés",
            "1 poivron jaune (150 g), en dés",
            "4 tomates moyennes (400 g), pelées et coupées en morceaux",
            "1 oignon moyen (100 g), émincé",
            "2 gousses d’ail, hachées finement",
            "3 cuillères à soupe huile d’olive (45 ml)",
            "1 cuillère à café herbes de Provence (1 g)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Couper tous les légumes en morceaux réguliers.\n" +
            "2. Dans une grande casserole, chauffer l’huile d’olive à feu moyen.\n" +
            "3. Ajouter l’oignon et l’ail, faire revenir 5 minutes jusqu’à transparence.\n" +
            "4. Ajouter les aubergines et poivrons, cuire 10 minutes en remuant régulièrement.\n" +
            "5. Ajouter les courgettes et tomates, les herbes de Provence, sel et poivre.\n" +
            "6. Couvrir et laisser mijoter à feu doux 25-30 minutes, en remuant toutes les 5-10 minutes.\n" +
            "7. Vérifier la tendreté des légumes et rectifier l’assaisonnement avant de servir chaud."
    },
    en: {
        title: "Provençal Ratatouille (Serves 4)",
        equipment: [
            "1 large pot or Dutch oven",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl for ingredients"
        ],
        ingredients: [
            "2 medium eggplants (500 g), cubed",
            "2 medium zucchinis (400 g), sliced",
            "1 red bell pepper (150 g), diced",
            "1 yellow bell pepper (150 g), diced",
            "4 medium tomatoes (400 g), peeled and chopped",
            "1 medium onion (100 g), sliced",
            "2 garlic cloves, finely chopped",
            "3 tablespoons olive oil (45 ml)",
            "1 teaspoon Herbes de Provence (1 g)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Cut all vegetables into even pieces.\n" +
            "2. Heat olive oil in a large pot over medium heat.\n" +
            "3. Add onion and garlic, sauté 5 minutes until translucent.\n" +
            "4. Add eggplants and peppers, cook 10 minutes stirring regularly.\n" +
            "5. Add zucchinis, tomatoes, Herbes de Provence, salt, and pepper.\n" +
            "6. Cover and simmer on low heat 25-30 minutes, stirring every 5-10 minutes.\n" +
            "7. Check vegetables are tender and adjust seasoning before serving hot."
    },
    nl: {
        title: "Provençaalse Ratatouille (voor 4 personen)",
        equipment: [
            "1 grote pan of braadpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom voor ingrediënten"
        ],
        ingredients: [
            "2 middelgrote aubergines (500 g), in blokjes",
            "2 middelgrote courgettes (400 g), in plakjes",
            "1 rode paprika (150 g), in blokjes",
            "1 gele paprika (150 g), in blokjes",
            "4 middelgrote tomaten (400 g), gepeld en in stukjes",
            "1 middelgrote ui (100 g), gesneden",
            "2 teentjes knoflook, fijngehakt",
            "3 eetlepels olijfolie (45 ml)",
            "1 theelepel Provençaalse kruiden (1 g)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Snijd alle groenten in gelijke stukken.\n" +
            "2. Verhit olijfolie in een grote pan op middelhoog vuur.\n" +
            "3. Voeg ui en knoflook toe, bak 5 minuten tot doorschijnend.\n" +
            "4. Voeg aubergines en paprika’s toe, bak 10 minuten regelmatig roeren.\n" +
            "5. Voeg courgettes, tomaten, Provençaalse kruiden, zout en peper toe.\n" +
            "6. Dek af en laat 25-30 minuten sudderen op laag vuur, af en toe roeren.\n" +
            "7. Controleer of de groenten zacht zijn en pas de smaak aan voor serveren."
    },
    ar: {
        title: "راتاتوي بروفنسالية (تكفي 4 أشخاص)",
        equipment: [
            "قدر كبير أو وعاء ثقيل",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء لتحضير المكونات"
        ],
        ingredients: [
            "2 باذنجان متوسط (500غ)، مقطع مكعبات",
            "2 كوسة متوسطة (400غ)، مقطعة شرائح",
            "1 فلفل أحمر (150غ)، مقطع مكعبات",
            "1 فلفل أصفر (150غ)، مقطع مكعبات",
            "4 طماطم متوسطة (400غ)، مقشرة ومقطعة",
            "1 بصل متوسط (100غ)، مقطع شرائح",
            "2 فص ثوم، مفروم ناعم",
            "3 ملعقة كبيرة زيت زيتون (45 مل)",
            "1 ملعقة صغيرة أعشاب بروفنس (1غ)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قطع جميع الخضار إلى قطع متساوية.\n" +
            "2. سخن زيت الزيتون في قدر كبير على نار متوسطة.\n" +
            "3. أضف البصل والثوم، قلب 5 دقائق حتى يصبح شفافًا.\n" +
            "4. أضف الباذنجان والفلفل، اطبخ 10 دقائق مع التحريك بانتظام.\n" +
            "5. أضف الكوسة والطماطم والأعشاب، الملح والفلفل.\n" +
            "6. غطّ القدر واتركه ينضج على نار هادئة 25-30 دقيقة، مع التحريك كل 5-10 دقائق.\n" +
            "7. تحقق من نضج الخضار واضبط التوابل قبل التقديم."
    }
};
recipesData.plat.coqAuVin = {
    country: "france",
    image: "images/coq-au-vin.jpg",
    fr: {
        title: "Coq au vin revisité (4 personnes)",
        equipment: [
            "1 grande cocotte",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "1 coq ou poulet entier découpé (1,5 kg)",
            "150 g de lardons",
            "2 carottes moyennes (200 g)",
            "1 oignon moyen (120 g)",
            "2 gousses d’ail",
            "200 ml de bouillon de volaille",
            "150 ml de jus de raisin rouge",
            "1 bouquet garni",
            "1 cuillère à soupe de farine (10 g)",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Cette recette est pour 4 personnes. Éplucher et couper les carottes en rondelles, émincer l’oignon et l’ail. Faire revenir les lardons dans la cocotte avec l’huile d’olive. Ajouter le poulet et faire dorer toutes les faces. Saupoudrer de farine et mélanger. Ajouter les carottes, l’oignon, l’ail, le bouquet garni, le bouillon et le jus de raisin. Couvrir et laisser mijoter à feu doux pendant 1h30. Vérifier l’assaisonnement avant de servir chaud."
    },
    en: {
        title: "Revisited Coq au Vin (Serves 4)",
        equipment: [
            "1 large casserole",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "1 whole chicken cut into pieces (1.5 kg)",
            "150 g bacon lardons",
            "2 carrots (200 g)",
            "1 medium onion (120 g)",
            "2 garlic cloves",
            "200 ml chicken stock",
            "150 ml red grape juice",
            "1 bouquet garni",
            "1 tablespoon flour (10 g)",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "This recipe serves 4. Peel and slice the carrots, chop the onion and garlic. In a large pot, sauté the bacon in olive oil. Add the chicken and brown all sides. Sprinkle flour and mix. Add carrots, onion, garlic, bouquet garni, stock, and grape juice. Cover and simmer on low heat for 1h30. Adjust seasoning before serving hot."
    },
    nl: {
        title: "Herziene Coq au Vin (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "1 hele kip in stukken gesneden (1,5 kg)",
            "150 g spekblokjes",
            "2 wortelen (200 g)",
            "1 middelgrote ui (120 g)",
            "2 teentjes knoflook",
            "200 ml kippenbouillon",
            "150 ml rode druivensap",
            "1 bouquet garni",
            "1 eetlepel bloem (10 g)",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Dit recept is voor 4 personen. Schil en snijd de wortelen, snipper de ui en knoflook. Bak de spekblokjes in olijfolie in de pan. Voeg de kip toe en bak rondom bruin. Bestrooi met bloem en meng goed. Voeg wortelen, ui, knoflook, bouquet garni, bouillon en druivensap toe. Dek af en laat 1,5 uur op laag vuur sudderen. Breng op smaak voor het opdienen."
    },
    ar: {
        title: "دجاج بالمرق بطريقة Coq au Vin (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "دجاجة كاملة مقطعة (1.5 كغ)",
            "150 غ لحم مقدد مقطع",
            "2 جزرات متوسطة (200غ)",
            "بصلة متوسطة (120غ)",
            "2 فص ثوم",
            "200 مل مرق دجاج",
            "150 مل عصير عنب أحمر",
            "باقة أعشاب",
            "ملعقة كبيرة دقيق (10غ)",
            "2 ملعقة كبيرة زيت زيتون (30مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. قشر وقطع الجزرات، وقطع البصل والثوم. في قدر كبير، قم بتحمير اللحم المقدد في زيت الزيتون. أضف الدجاج وقلّب حتى يتحمر من جميع الجهات. رش الدقيق وامزج جيداً. أضف الجزرات والبصل والثوم وباقة الأعشاب والمرق وعصير العنب. غطِّ واتركه ينضج على نار هادئة لمدة ساعة ونصف. تذوق قبل التقديم."
    }
};
// -------------------- BOEUF BOURGUIGNON --------------------
recipesData.plat.boeufBourguignon = {
    country: "france",
    image: "images/boeuf-bourguignon.jpg",
    fr: {
        title: "Boeuf Bourguignon revisité (4 personnes)",
        equipment: [
            "1 grande cocotte",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 verre doseur"
        ],
        ingredients: [
            "600 g de boeuf à braiser",
            "150 g de lardons",
            "2 carottes moyennes (200 g)",
            "1 oignon moyen (120 g)",
            "2 gousses d’ail",
            "200 ml de bouillon de boeuf",
            "150 ml de jus de raisin rouge",
            "1 bouquet garni",
            "1 cuillère à soupe de farine (10 g)",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Cette recette est pour 4 personnes. Éplucher et couper les carottes en rondelles, émincer l’oignon et l’ail. Faire revenir les lardons dans la cocotte avec l’huile d’olive. Ajouter le boeuf et le faire dorer. Saupoudrer de farine et mélanger. Ajouter les carottes, l’oignon, l’ail, le bouquet garni, le bouillon et le jus de raisin. Couvrir et laisser mijoter à feu doux pendant 2 heures. Vérifier l’assaisonnement avant de servir chaud."
    },
    en: {
        title: "Revisited Beef Bourguignon (Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 measuring cup"
        ],
        ingredients: [
            "600 g beef for braising",
            "150 g bacon lardons",
            "2 carrots (200 g)",
            "1 medium onion (120 g)",
            "2 garlic cloves",
            "200 ml beef stock",
            "150 ml red grape juice",
            "1 bouquet garni",
            "1 tablespoon flour (10 g)",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "This recipe serves 4. Peel and slice the carrots, chop the onion and garlic. In a large pot, sauté the bacon in olive oil. Add beef and brown all sides. Sprinkle with flour and mix. Add carrots, onion, garlic, bouquet garni, stock, and grape juice. Cover and simmer on low heat for 2 hours. Adjust seasoning before serving hot."
    },
    nl: {
        title: "Herziene Boeuf Bourguignon (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 maatbeker"
        ],
        ingredients: [
            "600 g rundvlees voor stoven",
            "150 g spekblokjes",
            "2 wortelen (200 g)",
            "1 middelgrote ui (120 g)",
            "2 teentjes knoflook",
            "200 ml runderbouillon",
            "150 ml rode druivensap",
            "1 bouquet garni",
            "1 eetlepel bloem (10 g)",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Dit recept is voor 4 personen. Schil en snijd de wortelen, snipper de ui en knoflook. Bak de spekblokjes in olijfolie. Voeg het rundvlees toe en bak rondom bruin. Bestrooi met bloem en meng goed. Voeg wortelen, ui, knoflook, bouquet garni, bouillon en druivensap toe. Dek af en laat 2 uur op laag vuur sudderen. Breng op smaak voor het opdienen."
    },
    ar: {
        title: "لحم البقر بصلصة بورغينيون (يكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "كوب قياس"
        ],
        ingredients: [
            "600 غ لحم بقر للطهي البطيء",
            "150 غ لحم مقدد",
            "2 جزرات متوسطة (200 غ)",
            "بصلة متوسطة (120 غ)",
            "2 فص ثوم",
            "200 مل مرق لحم بقر",
            "150 مل عصير عنب أحمر",
            "باقة أعشاب",
            "ملعقة كبيرة دقيق (10 غ)",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. قشر وقطع الجزرات، وقطع البصل والثوم. حمّر اللحم المقدد في قدر كبير مع زيت الزيتون. أضف اللحم وقلّب حتى يتحمر. رش الدقيق وامزج جيداً. أضف الجزرات والبصل والثوم وباقة الأعشاب والمرق وعصير العنب. غطِّ واتركه على نار هادئة لمدة ساعتين. تذوق قبل التقديم."
    }
};

// -------------------- GRATIN DAUPHINOIS --------------------
recipesData.plat.gratinDauphinois = {
    country: "france",
    image: "images/gratin-dauphinois.jpg",
    fr: {
        title: "Gratin Dauphinois (4 personnes)",
        equipment: [
            "1 plat à gratin",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol"
        ],
        ingredients: [
            "800 g de pommes de terre",
            "200 ml de crème fraîche",
            "2 gousses d’ail",
            "50 g de beurre",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Cette recette est pour 4 personnes. Préchauffer le four à 180°C. Éplucher et couper les pommes de terre en fines rondelles. Frotter le plat à gratin avec une gousse d’ail coupée en deux. Disposer les pommes de terre en couches dans le plat, en salant et poivrant chaque couche. Verser la crème par-dessus et parsemer de petits morceaux de beurre. Cuire au four pendant 45 à 50 minutes jusqu’à ce que le gratin soit doré et fondant. Servir chaud."
    },
    en: {
        title: "Gratin Dauphinois (Serves 4)",
        equipment: [
            "1 gratin dish",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl"
        ],
        ingredients: [
            "800 g potatoes",
            "200 ml cream",
            "2 garlic cloves",
            "50 g butter",
            "Salt and pepper to taste"
        ],
        preparation:
            "This recipe serves 4. Preheat oven to 180°C. Peel and slice the potatoes thinly. Rub the gratin dish with a halved garlic clove. Layer the potatoes in the dish, seasoning each layer with salt and pepper. Pour the cream over and scatter small pieces of butter on top. Bake for 45–50 minutes until golden and tender. Serve hot."
    },
    nl: {
        title: "Gratin Dauphinois (voor 4 personen)",
        equipment: [
            "1 ovenschaal",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom"
        ],
        ingredients: [
            "800 g aardappelen",
            "200 ml room",
            "2 teentjes knoflook",
            "50 g boter",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Dit recept is voor 4 personen. Verwarm de oven voor op 180°C. Schil en snijd de aardappelen in dunne plakjes. Wrijf de ovenschaal in met een gehalveerde knoflookteen. Leg de aardappelen in lagen in de schaal, bestrooi elke laag met zout en peper. Giet de room erover en verdeel stukjes boter. Bak 45–50 minuten tot goudbruin en zacht. Serveer warm."
    },
    ar: {
        title: "غراتان دوبفانوا (يكفي 4 أشخاص)",
        equipment: [
            "طبق غراتان",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء"
        ],
        ingredients: [
            "800 غ بطاطس",
            "200 مل كريمة",
            "2 فص ثوم",
            "50 غ زبدة",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "هذه الوصفة تكفي 4 أشخاص. سخّن الفرن على 180°C. قشر وقطع البطاطس إلى شرائح رفيعة. افرك طبق الغراتان بنصف فص ثوم. رص البطاطس في الطبق بطبقات، مع إضافة الملح والفلفل على كل طبقة. صب الكريمة فوقها ووزع قطع الزبدة. اخبز 45-50 دقيقة حتى يتحمر ويصبح طرياً. قدمه ساخناً."
    }
};
// -------------------- Poulet Provençal --------------------
recipesData.plat.pouletProvencal = {
    country: "france",
    image: "images/poulet-provencal.jpg",
    fr: {
        title: "Poulet Provençal (4 personnes)",
        equipment: [
            "1 grande poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 cuisses de poulet",
            "2 poivrons (rouge et jaune)",
            "2 tomates moyennes",
            "1 oignon",
            "2 gousses d’ail",
            "2 cuillères à soupe d’huile d’olive",
            "Herbes de Provence, sel, poivre"
        ],
        preparation:
            "Préchauffer la poêle à feu moyen. Émincer les poivrons, tomates, oignon et ail. Faire revenir le poulet dans l’huile jusqu’à doré. Ajouter les légumes et herbes de Provence. Couvrir et laisser mijoter 30 minutes. Servir chaud."
    },
    en: {
        title: "Provençal Chicken (Serves 4)",
        equipment: [
            "1 large pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 chicken thighs",
            "2 peppers (red and yellow)",
            "2 medium tomatoes",
            "1 onion",
            "2 garlic cloves",
            "2 tablespoons olive oil",
            "Herbes de Provence, salt, pepper"
        ],
        preparation:
            "Preheat pan over medium heat. Slice peppers, tomatoes, onion, and garlic. Sauté chicken in olive oil until golden. Add vegetables and Herbes de Provence. Cover and simmer 30 minutes. Serve hot."
    },
    nl: {
        title: "Provençaalse Kip (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "4 kippenbouten",
            "2 paprika's (rood en geel)",
            "2 middelgrote tomaten",
            "1 ui",
            "2 teentjes knoflook",
            "2 eetlepels olijfolie",
            "Provençaalse kruiden, zout, peper"
        ],
        preparation:
            "Verhit de pan op middelhoog vuur. Snijd paprika, tomaten, ui en knoflook. Bak de kip in olijfolie tot goudbruin. Voeg groenten en Provençaalse kruiden toe. Dek af en laat 30 minuten sudderen. Serveer warm."
    },
    ar: {
        title: "دجاج بروفنسال (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة كبيرة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 أفخاذ دجاج",
            "2 فليفلة (أحمر وأصفر)",
            "2 طماطم متوسطة",
            "1 بصلة",
            "2 فص ثوم",
            "2 ملعقة كبيرة زيت زيتون",
            "أعشاب بروفنس، ملح، فلفل"
        ],
        preparation:
            "سخّن المقلاة على حرارة متوسطة. قطع الفليفلة والطماطم والبصل والثوم. اقلي الدجاج في الزيت حتى يصبح ذهبي اللون. أضف الخضار والأعشاب. غطّ واتركه ينضج لمدة 30 دقيقة. قدمه ساخناً."
    }
};

// -------------------- Filet de Saumon à la Crème --------------------
recipesData.plat.saumonCreme = {
    country: "france",
    image: "images/saumon-creme.jpg",
    fr: {
        title: "Filet de Saumon à la Crème (4 personnes)",
        equipment: [
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 filets de saumon",
            "200 ml de crème fraîche",
            "1 citron",
            "1 échalote",
            "1 cuillère à soupe d’huile d’olive",
            "Sel, poivre"
        ],
        preparation:
            "Émincer l’échalote. Faire revenir dans l’huile d’olive 2 minutes. Ajouter le saumon et cuire 5-6 minutes de chaque côté. Verser la crème, presser le citron, saler et poivrer. Laisser mijoter 5 minutes. Servir chaud."
    },
    en: {
        title: "Salmon Fillet with Cream (Serves 4)",
        equipment: [
            "1 pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 salmon fillets",
            "200 ml cream",
            "1 lemon",
            "1 shallot",
            "1 tablespoon olive oil",
            "Salt, pepper"
        ],
        preparation:
            "Chop shallot. Sauté in olive oil 2 minutes. Add salmon and cook 5-6 minutes each side. Pour cream, squeeze lemon, salt and pepper. Simmer 5 minutes. Serve hot."
    },
    nl: {
        title: "Zalmfilet met room (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "4 zalmfilets",
            "200 ml room",
            "1 citroen",
            "1 sjalot",
            "1 eetlepel olijfolie",
            "Zout, peper"
        ],
        preparation:
            "Snipper sjalot en bak 2 minuten in olijfolie. Voeg zalm toe en bak 5-6 minuten per kant. Voeg room toe, pers citroen, zout en peper. Laat 5 minuten sudderen. Serveer warm."
    },
    ar: {
        title: "فيليه سمك السلمون بالكريمة (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 فيليه سلمون",
            "200 مل كريمة",
            "1 ليمونة",
            "1 ك Schalotte",
            "1 ملعقة كبيرة زيت زيتون",
            "ملح، فلفل"
        ],
        preparation:
            "قطّع الشالوتة. اقليها في الزيت 2 دقيقة. أضف السلمون واطهي 5-6 دقائق لكل جانب. أضف الكريمة، اعصر الليمون، ضع الملح والفلفل. اتركه 5 دقائق على نار هادئة. قدمه ساخناً."
    }
};

// -------------------- Confit de Canard --------------------
recipesData.plat.confitCanard = {
    country: "france",
    image: "images/confit-canard.jpg",
    fr: {
        title: "Confit de Canard (4 personnes)",
        equipment: [
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 cuisses de canard confites",
            "800 g de pommes de terre",
            "2 gousses d’ail",
            "Sel, poivre"
        ],
        preparation:
            "Préchauffer le four à 180°C. Éplucher et couper les pommes de terre en quartiers. Faire dorer les pommes de terre et l’ail dans une poêle. Ajouter les cuisses de canard et cuire 20 minutes. Servir chaud."
    },
    en: {
        title: "Duck Confit (Serves 4)",
        equipment: [
            "1 pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 duck confit legs",
            "800 g potatoes",
            "2 garlic cloves",
            "Salt, pepper"
        ],
        preparation:
            "Preheat oven to 180°C. Peel and cut potatoes into quarters. Brown potatoes and garlic in a pan. Add duck legs and cook 20 minutes. Serve hot."
    },
    nl: {
        title: "Eendenconfit (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "4 eendenbouten confit",
            "800 g aardappelen",
            "2 teentjes knoflook",
            "Zout, peper"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Schil en snijd aardappelen in parten. Bak aardappelen en knoflook in pan. Voeg eendenbouten toe en bak 20 minuten. Serveer warm."
    },
    ar: {
        title: "كونفي البط (يكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "4 أفخاذ بط كونفي",
            "800 غ بطاطس",
            "2 فص ثوم",
            "ملح، فلفل"
        ],
        preparation:
            "سخّن الفرن على 180°C. قشر وقطع البطاطس إلى أرباع. حمّر البطاطس والثوم في المقلاة. أضف أفخاذ البط واطه لمدة 20 دقيقة. قدمه ساخناً."
    }
};

// -------------------- Quiche Lorraine sans alcool --------------------
recipesData.plat.quicheLorraine = {
    country: "france",
    image: "images/quiche-lorraine.jpg",
    fr: {
        title: "Quiche Lorraine (4 personnes)",
        equipment: [
            "1 moule à tarte",
            "1 couteau",
            "1 planche à découper",
            "1 fouet"
        ],
        ingredients: [
            "1 pâte brisée",
            "150 g de lardons de dinde",
            "200 ml crème fraîche",
            "3 œufs",
            "Sel, poivre"
        ],
        preparation:
            "Préchauffer le four à 180°C. Déposer la pâte dans le moule. Battre les œufs avec la crème, sel et poivre. Ajouter les lardons de dinde. Verser sur la pâte et cuire 30-35 minutes jusqu’à doré. Servir chaud ou tiède."
    },
    en: {
        title: "Quiche Lorraine (Serves 4)",
        equipment: [
            "1 tart pan",
            "1 knife",
            "1 cutting board",
            "1 whisk"
        ],
        ingredients: [
            "1 shortcrust pastry",
            "150 g turkey bacon",
            "200 ml cream",
            "3 eggs",
            "Salt, pepper"
        ],
        preparation:
            "Preheat oven to 180°C. Place pastry in pan. Beat eggs with cream, salt, and pepper. Add turkey bacon. Pour over pastry and bake 30-35 minutes until golden. Serve hot or warm."
    },
    nl: {
        title: "Quiche Lorraine (voor 4 personen)",
        equipment: [
            "1 taartvorm",
            "1 mes",
            "1 snijplank",
            "1 garde"
        ],
        ingredients: [
            "1 deegbodem",
            "150 g kalkoen spek",
            "200 ml room",
            "3 eieren",
            "Zout, peper"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Plaats deeg in vorm. Klop eieren met room, zout en peper. Voeg kalkoen spek toe. Giet over deeg en bak 30-35 minuten tot goudbruin. Serveer warm of lauw."
    },
    ar: {
        title: "كويش لورين (يكفي 4 أشخاص)",
        equipment: [
            "قالب فطيرة",
            "سكين",
            "لوح تقطيع",
            "خفاق"
        ],
        ingredients: [
            "1 عجينة قصيرة",
            "150 غ لحم ديك رومي مقدد",
            "200 مل كريمة",
            "3 بيضات",
            "ملح وفلفل"
        ],
        preparation:
            "سخّن الفرن على 180°C. ضع العجينة في القالب. اخفق البيض مع الكريمة والملح والفلفل. أضف لحم الديك الرومي. اسكب الخليط على العجينة واخبز 30-35 دقيقة حتى يصبح ذهبي. قدمه ساخناً أو دافئاً."
    }
};

// -------------------- Gratin de Courgettes --------------------
recipesData.plat.gratinCourgettes = {
    country: "france",
    image: "images/gratin-courgettes.jpg",
    fr: {
        title: "Gratin de Courgettes (4 personnes)",
        equipment: [
            "1 plat à gratin",
            "1 couteau",
            "1 planche à découper",
            "1 bol"
        ],
        ingredients: [
            "3 courgettes moyennes",
            "150 ml crème fraîche",
            "50 g fromage râpé",
            "Sel, poivre"
        ],
        preparation:
            "Préchauffer le four à 180°C. Couper les courgettes en rondelles. Disposer dans le plat, saler et poivrer. Verser la crème et parsemer de fromage râpé. Cuire 30 minutes jusqu’à doré. Servir chaud."
    },
    en: {
        title: "Zucchini Gratin (Serves 4)",
        equipment: [
            "1 gratin dish",
            "1 knife",
            "1 cutting board",
            "1 bowl"
        ],
        ingredients: [
            "3 medium zucchinis",
            "150 ml cream",
            "50 g grated cheese",
            "Salt, pepper"
        ],
        preparation:
            "Preheat oven to 180°C. Slice zucchinis. Layer in dish, season with salt and pepper. Pour cream and sprinkle grated cheese. Bake 30 minutes until golden. Serve hot."
    },
    nl: {
        title: "Courgettegratin (voor 4 personen)",
        equipment: [
            "1 ovenschaal",
            "1 mes",
            "1 snijplank",
            "1 kom"
        ],
        ingredients: [
            "3 middelgrote courgettes",
            "150 ml room",
            "50 g geraspte kaas",
            "Zout, peper"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Snijd courgettes in plakjes. Leg in schaal, bestrooi met zout en peper. Giet room erover en bestrooi met geraspte kaas. Bak 30 minuten tot goudbruin. Serveer warm."
    },
    ar: {
        title: "غراتان الكوسة (يكفي 4 أشخاص)",
        equipment: [
            "طبق غراتان",
            "سكين",
            "لوح تقطيع",
            "وعاء"
        ],
        ingredients: [
            "3 كوسة متوسطة",
            "150 مل كريمة",
            "50 غ جبن مبشور",
            "ملح وفلفل"
        ],
        preparation:
            "سخّن الفرن على 180°C. قطّع الكوسة إلى شرائح. ضعها في الطبق، أضف الملح والفلفل. أضف الكريمة ورش الجبن المبشور. اخبز 30 دقيقة حتى يتحمر. قدمه ساخناً."
    }
};
recipesData.plat.pouletBasquaise = {
    country: "france",
    image: "images/poulet-basquaise.jpg",
    fr: {
        title: "Poulet Basquaise (4 personnes)",
        equipment: ["1 grande poêle", "1 couteau", "1 planche à découper", "1 cuillère en bois"],
        ingredients: [
            "4 cuisses de poulet",
            "2 poivrons rouges",
            "1 oignon",
            "2 tomates",
            "2 gousses d’ail",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre, paprika"
        ],
        preparation:
            "Faire revenir le poulet dans l’huile. Ajouter l’oignon et l’ail émincés, cuire 5 minutes. Ajouter les poivrons et les tomates coupés en morceaux, assaisonner. Couvrir et laisser mijoter 35 minutes. Servir chaud."
    },
    en: {
        title: "Basque Chicken (Serves 4)",
        equipment: ["1 large pan", "1 knife", "1 cutting board", "1 wooden spoon"],
        ingredients: [
            "4 chicken thighs",
            "2 red peppers",
            "1 onion",
            "2 tomatoes",
            "2 garlic cloves",
            "2 tablespoons olive oil",
            "Salt, pepper, paprika"
        ],
        preparation:
            "Sauté chicken in oil. Add sliced onion and garlic, cook 5 minutes. Add chopped peppers and tomatoes, season. Cover and simmer 35 minutes. Serve hot."
    },
    nl: {
        title: "Baskische Kip (voor 4 personen)",
        equipment: ["1 grote pan", "1 mes", "1 snijplank", "1 houten lepel"],
        ingredients: [
            "4 kippenbouten",
            "2 rode paprika's",
            "1 ui",
            "2 tomaten",
            "2 teentjes knoflook",
            "2 eetlepels olijfolie",
            "Zout, peper, paprika"
        ],
        preparation:
            "Bak de kip in olie. Voeg gesneden ui en knoflook toe, bak 5 minuten. Voeg paprika en tomaten toe, breng op smaak. Dek af en laat 35 minuten sudderen. Serveer warm."
    },
    ar: {
        title: "دجاج باسكاي (يكفي 4 أشخاص)",
        equipment: ["مقلاة كبيرة", "سكين", "لوح تقطيع", "ملعقة خشبية"],
        ingredients: [
            "4 أفخاذ دجاج",
            "2 فليفلة حمراء",
            "1 بصلة",
            "2 طماطم",
            "2 فص ثوم",
            "2 ملعقة كبيرة زيت زيتون",
            "ملح، فلفل، فلفل أحمر"
        ],
        preparation:
            "اقلي الدجاج في الزيت. أضف البصل والثوم المفروم، اطه 5 دقائق. أضف الفليفلة والطماطم، تبّل. غط واتركه يطهى 35 دقيقة. قدمه ساخناً."
    }
};
recipesData.plat.blanquetteVeau = {
    country: "france",
    image: "images/blanquette-veau.jpg",
    fr: {
        title: "Blanquette de Veau (4 personnes)",
        equipment: ["1 cocotte", "1 couteau", "1 planche à découper", "1 fouet"],
        ingredients: [
            "600 g veau coupé en cubes",
            "2 carottes",
            "1 oignon",
            "200 ml crème fraîche",
            "250 ml bouillon de légumes",
            "Sel, poivre"
        ],
        preparation:
            "Faire revenir le veau dans la cocotte jusqu’à doré. Ajouter les légumes émincés. Verser le bouillon et laisser mijoter 45 minutes. Ajouter la crème, saler et poivrer. Servir chaud."
    },
    en: {
        title: "Veal Blanquette (Serves 4)",
        equipment: ["1 pot", "1 knife", "1 cutting board", "1 whisk"],
        ingredients: [
            "600 g veal, cubed",
            "2 carrots",
            "1 onion",
            "200 ml cream",
            "250 ml vegetable broth",
            "Salt, pepper"
        ],
        preparation:
            "Brown veal in pot. Add sliced vegetables. Pour broth and simmer 45 minutes. Add cream, season. Serve hot."
    },
    nl: {
        title: "Kalfslapje in roomsaus (voor 4 personen)",
        equipment: ["1 pan", "1 mes", "1 snijplank", "1 garde"],
        ingredients: [
            "600 g kalfsvlees in blokjes",
            "2 wortelen",
            "1 ui",
            "200 ml room",
            "250 ml groentebouillon",
            "Zout, peper"
        ],
        preparation:
            "Bak kalfsvlees in pan tot goudbruin. Voeg gesneden groenten toe. Giet bouillon erbij en laat 45 minuten sudderen. Voeg room toe, breng op smaak. Serveer warm."
    },
    ar: {
        title: "بلانكيت لحم عجل (يكفي 4 أشخاص)",
        equipment: ["قدر", "سكين", "لوح تقطيع", "خفاق"],
        ingredients: [
            "600 غ لحم عجل مقطع",
            "2 جزرة",
            "1 بصلة",
            "200 مل كريمة",
            "250 مل مرق خضار",
            "ملح وفلفل"
        ],
        preparation:
            "اقلي لحم العجل في القدر حتى يصبح ذهبي. أضف الخضار المفرومة. أضف المرق واتركه يطهى 45 دقيقة. أضف الكريمة، الملح والفلفل. قدمه ساخناً."
    }
};
recipesData.dessert.tartePommes = {
    country: "france",
    image: "images/tarte-pommes.jpg",
    fr: {
        title: "Tarte aux pommes simple (4 personnes)",
        equipment: [
            "1 moule à tarte de 24 cm",
            "1 couteau",
            "1 planche à découper",
            "1 bol pour mélanger",
            "1 fouet",
            "1 pinceau de cuisine"
        ],
        ingredients: [
            "1 pâte brisée prête à l’emploi (230 g)",
            "4 pommes moyennes (600 g), pelées et tranchées finement",
            "2 cuillères à soupe sucre (30 g)",
            "1 cuillère à café cannelle (1 g)",
            "1 cuillère à soupe jus de citron (15 ml)",
            "1 cuillère à soupe confiture d’abricot pour le glaçage (15 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Étaler la pâte dans le moule et piquer le fond avec une fourchette.\n" +
            "3. Mélanger sucre, cannelle et jus de citron dans un bol.\n" +
            "4. Disposer les tranches de pommes en cercle sur la pâte.\n" +
            "5. Saupoudrer le mélange sucre-cannelle sur les pommes.\n" +
            "6. Cuire au four 30-35 minutes jusqu’à ce que la pâte soit dorée et les pommes tendres.\n" +
            "7. Chauffer légèrement la confiture et badigeonner sur les pommes pour le brillant. Laisser refroidir avant de servir."
    },
    en: {
        title: "Simple Apple Tart (Serves 4)",
        equipment: [
            "1 tart pan 24 cm",
            "1 knife",
            "1 cutting board",
            "1 mixing bowl",
            "1 whisk",
            "1 pastry brush"
        ],
        ingredients: [
            "1 ready-made shortcrust pastry (230 g)",
            "4 medium apples (600 g), peeled and thinly sliced",
            "2 tablespoons sugar (30 g)",
            "1 teaspoon cinnamon (1 g)",
            "1 tablespoon lemon juice (15 ml)",
            "1 tablespoon apricot jam for glaze (15 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Roll pastry into pan and prick the base with a fork.\n" +
            "3. Mix sugar, cinnamon, and lemon juice in a bowl.\n" +
            "4. Arrange apple slices in a circle on the pastry.\n" +
            "5. Sprinkle sugar-cinnamon mixture over apples.\n" +
            "6. Bake 30-35 minutes until crust is golden and apples tender.\n" +
            "7. Warm apricot jam slightly and brush over apples for shine. Cool before serving."
    },
    nl: {
        title: "Eenvoudige appeltaart (voor 4 personen)",
        equipment: [
            "1 taartvorm 24 cm",
            "1 mes",
            "1 snijplank",
            "1 kom om te mengen",
            "1 garde",
            "1 bakkwast"
        ],
        ingredients: [
            "1 kant-en-klare zanddeeg (230 g)",
            "4 middelgrote appels (600 g), geschild en dun gesneden",
            "2 eetlepels suiker (30 g)",
            "1 theelepel kaneel (1 g)",
            "1 eetlepel citroensap (15 ml)",
            "1 eetlepel abrikozenjam voor glans (15 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Rol het deeg in de vorm en prik de bodem met een vork.\n" +
            "3. Meng suiker, kaneel en citroensap in een kom.\n" +
            "4. Leg de appelplakjes in een cirkel op het deeg.\n" +
            "5. Strooi het suiker-kaneelmengsel over de appels.\n" +
            "6. Bak 30-35 minuten tot het deeg goudbruin en appels zacht zijn.\n" +
            "7. Verwarm de abrikozenjam licht en bestrijk de appels voor glans. Laat afkoelen voor serveren."
    },
    ar: {
        title: "تارت التفاح البسيط (يكفي 4 أشخاص)",
        equipment: [
            "صينية تارت 24 سم",
            "سكين",
            "لوح تقطيع",
            "وعاء للخلط",
            "خلاط يدوي",
            "فرشاة للمعجنات"
        ],
        ingredients: [
            "1 عجينة معجنات جاهزة (230غ)",
            "4 تفاحات متوسطة (600غ)، مقشرة وشرائح رفيعة",
            "2 ملعقة كبيرة سكر (30غ)",
            "1 ملعقة صغيرة قرفة (1غ)",
            "1 ملعقة كبيرة عصير ليمون (15 مل)",
            "1 ملعقة كبيرة مربى مشمش للتلميع (15غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الفرن على 180°C.\n" +
            "2. افرد العجينة في الصينية واثقب القاع بالشوكة.\n" +
            "3. اخلط السكر والقرفة وعصير الليمون في وعاء.\n" +
            "4. رتب شرائح التفاح في دائرة على العجينة.\n" +
            "5. رش مزيج السكر والقرفة على التفاح.\n" +
            "6. اخبز 30-35 دقيقة حتى يصبح القاع ذهبي والتفاح طري.\n" +
            "7. سخّن مربى المشمش قليلًا وادهن على التفاح للتلميع. دعها تبرد قبل التقديم."
    }
};
// -------------------- Crème brûlée --------------------
recipesData.dessert.cremeBrulee = {
    country: "france",
    image: "images/creme-brulee.jpg",
    fr: {
        title: "Crème brûlée (4 personnes)",
        equipment: ["4 ramequins", "1 fouet", "1 bol", "1 casserole"],
        ingredients: [
            "4 jaunes d’œufs",
            "50 g sucre",
            "250 ml crème liquide",
            "1 gousse de vanille",
            "2 cuillères à soupe de cassonade"
        ],
        preparation:
            "Préchauffer le four à 150°C. Fendre la gousse de vanille et chauffer la crème avec les graines. Battre les jaunes avec le sucre, incorporer la crème chaude. Verser dans les ramequins. Cuire au bain-marie 35 minutes. Laisser refroidir, saupoudrer de cassonade et caraméliser au chalumeau. Servir."
    },
    en: {
        title: "Crème brûlée (Serves 4)",
        equipment: ["4 ramekins", "1 whisk", "1 bowl", "1 saucepan"],
        ingredients: [
            "4 egg yolks",
            "50 g sugar",
            "250 ml heavy cream",
            "1 vanilla bean",
            "2 tablespoons brown sugar"
        ],
        preparation:
            "Preheat oven to 150°C. Split vanilla bean and heat cream with seeds. Whisk yolks with sugar, add hot cream. Pour into ramekins. Bake in bain-marie 35 minutes. Cool, sprinkle with brown sugar and caramelize with a torch. Serve."
    },
    nl: {
        title: "Crème brûlée (voor 4 personen)",
        equipment: ["4 ramekins", "1 garde", "1 kom", "1 steelpan"],
        ingredients: [
            "4 eidooiers",
            "50 g suiker",
            "250 ml room",
            "1 vanillestokje",
            "2 eetlepels bruine suiker"
        ],
        preparation:
            "Verwarm oven voor op 150°C. Snijd vanillestokje, verwarm room met zaadjes. Klop eidooiers met suiker, voeg hete room toe. Giet in ramekins. Bak 35 minuten in au bain-marie. Laat afkoelen, bestrooi met bruine suiker en karamelliseer. Serveer."
    },
    ar: {
        title: "كريم بروليه (يكفي 4 أشخاص)",
        equipment: ["4 قوالب صغيرة", "خفاق", "وعاء", "قدر"],
        ingredients: [
            "4 صفار بيض",
            "50 غ سكر",
            "250 مل كريمة سائلة",
            "1 حبّة فانيليا",
            "2 ملعقة كبيرة سكر بني"
        ],
        preparation:
            "سخّن الفرن إلى 150°C. افتح حبّة الفانيليا وسخّن الكريمة معها. اخفق الصفار مع السكر وأضف الكريمة الساخنة. اسكب في القوالب. اخبز في حمام مائي 35 دقيقة. اتركه يبرد، رش السكر البني وقم بتحميره بالشعلة. قدمه."
    }
};

// -------------------- Mousse au chocolat --------------------
recipesData.dessert.mousseChocolat = {
    country: "france",
    image: "images/mousse-chocolat.jpg",
    fr: {
        title: "Mousse au chocolat (4 personnes)",
        equipment: ["1 bol", "1 fouet", "1 spatule"],
        ingredients: [
            "200 g chocolat noir",
            "3 œufs",
            "30 g sucre",
            "1 pincée de sel"
        ],
        preparation:
            "Faire fondre le chocolat au bain-marie. Séparer les blancs des jaunes. Battre les blancs en neige avec une pincée de sel. Mélanger les jaunes avec le chocolat fondu. Incorporer délicatement les blancs. Réfrigérer 3 heures avant de servir."
    },
    en: {
        title: "Chocolate Mousse (Serves 4)",
        equipment: ["1 bowl", "1 whisk", "1 spatula"],
        ingredients: [
            "200 g dark chocolate",
            "3 eggs",
            "30 g sugar",
            "1 pinch salt"
        ],
        preparation:
            "Melt chocolate in a bain-marie. Separate whites and yolks. Beat whites with pinch of salt. Mix yolks with melted chocolate. Gently fold in whites. Refrigerate 3 hours before serving."
    },
    nl: {
        title: "Chocolademousse (voor 4 personen)",
        equipment: ["1 kom", "1 garde", "1 spatel"],
        ingredients: [
            "200 g pure chocolade",
            "3 eieren",
            "30 g suiker",
            "1 snufje zout"
        ],
        preparation:
            "Smelt chocolade au bain-marie. Scheid eiwitten van dooiers. Klop eiwitten met zout. Meng dooiers met chocolade. Spatel eiwitten er voorzichtig door. Koel 3 uur voor het serveren."
    },
    ar: {
        title: "موس الشوكولاتة (يكفي 4 أشخاص)",
        equipment: ["وعاء", "خفاق", "ملعقة"],
        ingredients: [
            "200 غ شوكولاتة داكنة",
            "3 بيضات",
            "30 غ سكر",
            "رشة ملح"
        ],
        preparation:
            "ذوّب الشوكولاتة على حمام مائي. افصل البياض عن الصفار. اخفق البياض مع رشة ملح. امزج الصفار مع الشوكولاتة المذابة. اخلط البياض برفق. ضع في الثلاجة 3 ساعات قبل التقديم."
    }
};

// -------------------- Clafoutis aux cerises --------------------
recipesData.dessert.clafoutisCerises = {
    country: "france",
    image: "images/clafoutis-cerises.jpg",
    fr: {
        title: "Clafoutis aux cerises (4 personnes)",
        equipment: ["1 plat à gratin", "1 bol", "1 fouet", "1 spatule"],
        ingredients: [
            "500 g cerises dénoyautées",
            "100 g farine",
            "100 g sucre",
            "3 œufs",
            "250 ml lait",
            "1 pincée de sel"
        ],
        preparation:
            "Préchauffer le four à 180°C. Beurrer le plat et disposer les cerises. Mélanger farine, sucre, sel, œufs et lait pour obtenir une pâte lisse. Verser sur les cerises. Cuire 35 minutes. Servir tiède ou froid."
    },
    en: {
        title: "Cherry Clafoutis (Serves 4)",
        equipment: ["1 gratin dish", "1 bowl", "1 whisk", "1 spatula"],
        ingredients: [
            "500 g pitted cherries",
            "100 g flour",
            "100 g sugar",
            "3 eggs",
            "250 ml milk",
            "1 pinch salt"
        ],
        preparation:
            "Preheat oven to 180°C. Butter dish and place cherries. Mix flour, sugar, salt, eggs, and milk until smooth. Pour over cherries. Bake 35 minutes. Serve warm or cold."
    },
    nl: {
        title: "Kersclafoutis (voor 4 personen)",
        equipment: ["1 ovenschaal", "1 kom", "1 garde", "1 spatel"],
        ingredients: [
            "500 g ontpitte kersen",
            "100 g bloem",
            "100 g suiker",
            "3 eieren",
            "250 ml melk",
            "1 snufje zout"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Vet schaal in en leg kersen. Meng bloem, suiker, zout, eieren en melk tot een glad beslag. Giet over kersen. Bak 35 minuten. Serveer warm of koud."
    },
    ar: {
        title: "كلافوتيس الكرز (يكفي 4 أشخاص)",
        equipment: ["طبق غراتان", "وعاء", "خفاق", "ملعقة"],
        ingredients: [
            "500 غ كرز منزوع النوى",
            "100 غ دقيق",
            "100 غ سكر",
            "3 بيضات",
            "250 مل حليب",
            "رشة ملح"
        ],
        preparation:
            "سخّن الفرن إلى 180°C. ادهن الطبق بالزبدة وضع الكرز. اخلط الدقيق، السكر، الملح، البيض والحليب للحصول على خليط ناعم. صب فوق الكرز. اخبز 35 دقيقة. قدمه دافئاً أو بارداً."
    }
};

// -------------------- Île flottante --------------------
recipesData.dessert.ileFlottante = {
    country: "france",
    image: "images/ile-flottante.jpg",
    fr: {
        title: "Île flottante (4 personnes)",
        equipment: ["1 casserole", "1 bol", "1 fouet", "1 cuillère"],
        ingredients: [
            "4 œufs",
            "500 ml lait",
            "50 g sucre",
            "1 gousse de vanille",
            "1 pincée de sel",
            "Caramel pour la décoration"
        ],
        preparation:
            "Séparer les blancs des jaunes. Faire chauffer le lait avec la vanille. Monter les blancs en neige avec le sel et incorporer 20 g sucre. Pocher les blancs dans le lait chaud 2 minutes de chaque côté. Préparer une crème anglaise avec les jaunes et le reste du sucre. Servir les blancs sur la crème, décorer de caramel."
    },
    en: {
        title: "Floating Island (Serves 4)",
        equipment: ["1 saucepan", "1 bowl", "1 whisk", "1 spoon"],
        ingredients: [
            "4 eggs",
            "500 ml milk",
            "50 g sugar",
            "1 vanilla bean",
            "1 pinch salt",
            "Caramel for decoration"
        ],
        preparation:
            "Separate whites from yolks. Heat milk with vanilla. Beat whites with salt and 20 g sugar. Poach whites in hot milk 2 minutes per side. Prepare custard with yolks and remaining sugar. Serve whites on custard, decorate with caramel."
    },
    nl: {
        title: "Île flottante (voor 4 personen)",
        equipment: ["1 steelpan", "1 kom", "1 garde", "1 lepel"],
        ingredients: [
            "4 eieren",
            "500 ml melk",
            "50 g suiker",
            "1 vanillestokje",
            "1 snufje zout",
            "Karamel voor decoratie"
        ],
        preparation:
            "Scheid eiwitten van dooiers. Verwarm melk met vanille. Klop eiwitten met zout en 20 g suiker. Pocheer eiwitten 2 minuten per kant in hete melk. Bereid custard met dooiers en resterende suiker. Serveer eiwitten op custard, decoreer met karamel."
    },
    ar: {
        title: "جزيرة عائمة (يكفي 4 أشخاص)",
        equipment: ["قدر", "وعاء", "خفاق", "ملعقة"],
        ingredients: [
            "4 بيضات",
            "500 مل حليب",
            "50 غ سكر",
            "1 حبّة فانيليا",
            "رشة ملح",
            "كاراميل للزينة"
        ],
        preparation:
            "افصل البياض عن الصفار. سخّن الحليب مع الفانيليا. اخفق البياض مع الملح و20 غ سكر. اسلق البياض في الحليب الساخن دقيقتين لكل جانب. حضّر كاسترد مع الصفار وبقية السكر. ضع البياض على الكاسترد وزينه بالكاراميل."
    }
};// -------------------- Tarte au citron meringuée --------------------
recipesData.dessert.tarteCitronMeringuee = {
    country: "france",
    image: "images/tarte-citron-meringuee.jpg",
    fr: {
        title: "Tarte au citron meringuée (6 personnes)",
        equipment: ["1 moule à tarte", "1 bol", "1 fouet", "1 casserole", "1 spatule"],
        ingredients: [
            "1 pâte sablée",
            "4 citrons (jus et zestes)",
            "150 g sucre",
            "3 œufs",
            "50 g beurre",
            "2 blancs d’œufs",
            "50 g sucre pour meringue"
        ],
        preparation:
            "Préchauffer le four à 180°C. Foncer le moule avec la pâte et cuire à blanc 15 min. Mélanger jus et zestes de citron avec œufs, sucre et beurre dans une casserole et cuire doucement jusqu’à épaississement. Verser sur la pâte. Monter les blancs en neige avec sucre, recouvrir la tarte. Gratiner 5 min au four. Servir tiède ou froid."
    },
    en: {
        title: "Lemon Meringue Tart (Serves 6)",
        equipment: ["1 tart pan", "1 bowl", "1 whisk", "1 saucepan", "1 spatula"],
        ingredients: [
            "1 shortcrust pastry",
            "4 lemons (juice and zest)",
            "150 g sugar",
            "3 eggs",
            "50 g butter",
            "2 egg whites",
            "50 g sugar for meringue"
        ],
        preparation:
            "Preheat oven to 180°C. Line pan with pastry and bake 15 min blind. Mix lemon juice, zest, eggs, sugar, and butter in saucepan and cook gently until thickened. Pour over pastry. Beat egg whites with sugar, spread on tart. Brown 5 min in oven. Serve warm or cold."
    },
    nl: {
        title: "Citroenmeringuetaart (voor 6 personen)",
        equipment: ["1 taartvorm", "1 kom", "1 garde", "1 steelpan", "1 spatel"],
        ingredients: [
            "1 zanddeeg",
            "4 citroenen (sap en rasp)",
            "150 g suiker",
            "3 eieren",
            "50 g boter",
            "2 eiwitten",
            "50 g suiker voor meringue"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Bekleed vorm met deeg en bak 15 min blind. Meng citroensap, rasp, eieren, suiker en boter in steelpan en kook zachtjes tot dik. Giet over deeg. Klop eiwitten met suiker, bedek taart. Laat 5 min kleuren in oven. Serveer warm of koud."
    },
    ar: {
        title: "تارت الليمون مع الميرينغ (يكفي 6 أشخاص)",
        equipment: ["صينية تارت", "وعاء", "خفاق", "قدر", "ملعقة"],
        ingredients: [
            "عجينة قصيرة",
            "4 حبات ليمون (عصير وقشر)",
            "150 غ سكر",
            "3 بيضات",
            "50 غ زبدة",
            "2 بياض بيض",
            "50 غ سكر للمرينغ"
        ],
        preparation:
            "سخّن الفرن إلى 180°C. افرد العجينة في الصينية واخبز 15 دقيقة بدون حشوة. اخلط عصير وقشر الليمون مع البيض والسكر والزبدة في قدر واطبخ على نار هادئة حتى يتماسك. اسكب فوق العجينة. اخفق البياض مع السكر وغطِّ التارت. حمّره 5 دقائق في الفرن. قدمه دافئًا أو باردًا."
    }
};

// -------------------- Fondant au chocolat --------------------
recipesData.dessert.fondantChocolat = {
    country: "france",
    image: "images/fondant-chocolat.jpg",
    fr: {
        title: "Fondant au chocolat (4 personnes)",
        equipment: ["4 ramequins", "1 bol", "1 fouet", "1 casserole"],
        ingredients: [
            "200 g chocolat noir",
            "100 g beurre",
            "50 g sucre",
            "3 œufs",
            "30 g farine"
        ],
        preparation:
            "Préchauffer le four à 180°C. Faire fondre le chocolat avec le beurre. Battre les œufs et le sucre, incorporer le chocolat fondu, puis la farine. Répartir dans les ramequins beurrés. Cuire 12 minutes. Servir tiède."
    },
    en: {
        title: "Chocolate Fondant (Serves 4)",
        equipment: ["4 ramekins", "1 bowl", "1 whisk", "1 saucepan"],
        ingredients: [
            "200 g dark chocolate",
            "100 g butter",
            "50 g sugar",
            "3 eggs",
            "30 g flour"
        ],
        preparation:
            "Preheat oven to 180°C. Melt chocolate with butter. Beat eggs and sugar, add melted chocolate, then flour. Pour into buttered ramekins. Bake 12 minutes. Serve warm."
    },
    nl: {
        title: "Chocoladefondant (voor 4 personen)",
        equipment: ["4 ramekins", "1 kom", "1 garde", "1 steelpan"],
        ingredients: [
            "200 g pure chocolade",
            "100 g boter",
            "50 g suiker",
            "3 eieren",
            "30 g bloem"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Smelt chocolade met boter. Klop eieren en suiker, voeg chocolade toe, daarna bloem. Verdeel over ingevette ramekins. Bak 12 minuten. Serveer warm."
    },
    ar: {
        title: "فوندو الشوكولاتة (يكفي 4 أشخاص)",
        equipment: ["4 قوالب صغيرة", "وعاء", "خفاق", "قدر"],
        ingredients: [
            "200 غ شوكولاتة داكنة",
            "100 غ زبدة",
            "50 غ سكر",
            "3 بيضات",
            "30 غ دقيق"
        ],
        preparation:
            "سخّن الفرن إلى 180°C. ذوّب الشوكولاتة مع الزبدة. اخفق البيض مع السكر، أضف الشوكولاتة المذابة ثم الدقيق. ضع في القوالب المدهونة بالزبدة. اخبز 12 دقيقة. قدمه دافئًا."
    }
};

// -------------------- Tarte aux poires --------------------
recipesData.dessert.tartePoires = {
    country: "france",
    image: "images/tarte-poires.jpg",
    fr: {
        title: "Tarte aux poires (4 personnes)",
        equipment: ["1 moule à tarte", "1 bol", "1 fouet", "1 spatule"],
        ingredients: [
            "1 pâte sablée",
            "3 poires mûres",
            "100 g sucre",
            "2 œufs",
            "100 ml crème liquide",
            "1 cuillère à café amande en poudre"
        ],
        preparation:
            "Préchauffer le four à 180°C. Foncer le moule avec la pâte. Couper les poires en tranches et disposer sur la pâte. Mélanger œufs, sucre, crème et amandes, verser sur les poires. Cuire 30 minutes. Servir tiède ou froid."
    },
    en: {
        title: "Pear Tart (Serves 4)",
        equipment: ["1 tart pan", "1 bowl", "1 whisk", "1 spatula"],
        ingredients: [
            "1 shortcrust pastry",
            "3 ripe pears",
            "100 g sugar",
            "2 eggs",
            "100 ml cream",
            "1 teaspoon almond powder"
        ],
        preparation:
            "Preheat oven to 180°C. Line tart pan with pastry. Slice pears and arrange on pastry. Mix eggs, sugar, cream, and almonds, pour over pears. Bake 30 minutes. Serve warm or cold."
    },
    nl: {
        title: "Perentaart (voor 4 personen)",
        equipment: ["1 taartvorm", "1 kom", "1 garde", "1 spatel"],
        ingredients: [
            "1 zanddeeg",
            "3 rijpe peren",
            "100 g suiker",
            "2 eieren",
            "100 ml room",
            "1 theelepel amandelpoeder"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Bekleed vorm met deeg. Snijd peren in plakjes en leg op deeg. Meng eieren, suiker, room en amandelen, giet over peren. Bak 30 minuten. Serveer warm of koud."
    },
    ar: {
        title: "تارت الكمثرى (يكفي 4 أشخاص)",
        equipment: ["صينية تارت", "وعاء", "خفاق", "ملعقة"],
        ingredients: [
            "1 عجينة قصيرة",
            "3 كمثرى ناضجة",
            "100 غ سكر",
            "2 بيضات",
            "100 مل كريمة سائلة",
            "1 ملعقة صغيرة لوز مطحون"
        ],
        preparation:
            "سخّن الفرن إلى 180°C. افرد العجينة في الصينية. قطّع الكمثرى إلى شرائح وضعها على العجينة. اخلط البيض، السكر، الكريمة واللوز واسكب فوق الكمثرى. اخبز 30 دقيقة. قدمه دافئًا أو باردًا."
    }
};

// -------------------- Paris-Brest --------------------
recipesData.dessert.parisBrest = {
    country: "france",
    image: "images/paris-brest.jpg",
    fr: {
        title: "Paris-Brest (4 personnes)",
        equipment: ["1 poche à douille", "1 plaque de cuisson", "1 bol", "1 fouet"],
        ingredients: [
            "100 g farine",
            "80 g beurre",
            "2 œufs",
            "50 g sucre",
            "50 g poudre d’amande",
            "150 ml crème liquide"
        ],
        preparation:
            "Préchauffer le four à 180°C. Préparer une pâte à choux avec farine, beurre, œufs. Dresser en couronne sur plaque. Cuire 25 minutes. Monter la crème en chantilly et mélanger avec poudre d’amande. Couper le choux refroidi, garnir de crème. Servir."
    },
    en: {
        title: "Paris-Brest (Serves 4)",
        equipment: ["1 piping bag", "1 baking tray", "1 bowl", "1 whisk"],
        ingredients: [
            "100 g flour",
            "80 g butter",
            "2 eggs",
            "50 g sugar",
            "50 g almond powder",
            "150 ml cream"
        ],
        preparation:
            "Preheat oven to 180°C. Prepare choux pastry with flour, butter, eggs. Pipe in a ring on tray. Bake 25 minutes. Whip cream and mix with almond powder. Cut cooled choux, fill with cream. Serve."
    },
    nl: {
        title: "Paris-Brest (voor 4 personen)",
        equipment: ["1 spuitzak", "1 bakplaat", "1 kom", "1 garde"],
        ingredients: [
            "100 g bloem",
            "80 g boter",
            "2 eieren",
            "50 g suiker",
            "50 g amandelpoeder",
            "150 ml room"
        ],
        preparation:
            "Verwarm oven voor op 180°C. Maak soezendeeg met bloem, boter, eieren. Spuit in ring op bakplaat. Bak 25 minuten. Klop room en meng met amandelpoeder. Snijd afgekoeld deeg, vul met room. Serveer."
    },
    ar: {
        title: "باريس-بريست (يكفي 4 أشخاص)",
        equipment: ["كيس حلواني", "صينية خبز", "وعاء", "خفاق"],
        ingredients: [
            "100 غ دقيق",
            "80 غ زبدة",
            "2 بيضات",
            "50 غ سكر",
            "50 غ لوز مطحون",
            "150 مل كريمة سائلة"
        ],
        preparation:
            "سخّن الفرن إلى 180°C. حضّر عجينة الشو مع الدقيق، الزبدة، البيض. شكّل دائرة على الصينية. اخبز 25 دقيقة. اخفق الكريمة وامزج مع اللوز. اقطع العجينة المبردة، احشِ بالكريمة. قدمه."
    }
};

recipesData.patisserie.madeleines = {
    country: "france",
    image: "images/madeleines.jpg",
    fr: {
        title: "Madeleines moelleuses (4 personnes)",
        equipment: [
            "1 grand bol",
            "1 fouet",
            "1 balance de cuisine",
            "1 moule à madeleine",
            "1 spatule en silicone",
            "1 tamis pour farine"
        ],
        ingredients: [
            "100 g farine de blé",
            "100 g sucre",
            "100 g beurre fondu",
            "2 œufs",
            "1/2 cuillère à café levure chimique (2 g)",
            "1 cuillère à café extrait de vanille (5 ml)",
            "1 pincée de sel"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Dans un bol, fouetter les œufs avec le sucre jusqu’à ce que le mélange blanchisse et devienne mousseux.\n" +
            "3. Tamiser la farine avec la levure et le sel, puis incorporer délicatement au mélange d’œufs.\n" +
            "4. Ajouter le beurre fondu et la vanille, mélanger délicatement.\n" +
            "5. Beurrer le moule à madeleine et remplir chaque alvéole aux 2/3.\n" +
            "6. Cuire 10-12 minutes jusqu’à ce que les madeleines soient dorées et légèrement bombées.\n" +
            "7. Laisser refroidir quelques minutes avant de démouler et servir."
    },
    en: {
        title: "Soft Madeleines (Serves 4)",
        equipment: [
            "1 large bowl",
            "1 whisk",
            "1 kitchen scale",
            "1 madeleine mold",
            "1 silicone spatula",
            "1 sieve for flour"
        ],
        ingredients: [
            "100 g wheat flour",
            "100 g sugar",
            "100 g melted butter",
            "2 eggs",
            "1/2 teaspoon baking powder (2 g)",
            "1 teaspoon vanilla extract (5 ml)",
            "1 pinch salt"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Whisk eggs with sugar until pale and frothy.\n" +
            "3. Sift flour with baking powder and salt, fold gently into egg mixture.\n" +
            "4. Add melted butter and vanilla, mix gently.\n" +
            "5. Grease madeleine mold and fill each cavity 2/3 full.\n" +
            "6. Bake 10-12 minutes until golden and slightly puffed.\n" +
            "7. Let cool a few minutes before removing from mold and serving."
    },
    nl: {
        title: "Zachte Madeleines (voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 garde",
            "1 keukenweegschaal",
            "1 madeleinevorm",
            "1 siliconen spatel",
            "1 zeef voor bloem"
        ],
        ingredients: [
            "100 g tarwebloem",
            "100 g suiker",
            "100 g gesmolten boter",
            "2 eieren",
            "1/2 theelepel bakpoeder (2 g)",
            "1 theelepel vanille-extract (5 ml)",
            "1 snufje zout"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Klop de eieren met suiker tot bleek en schuimig.\n" +
            "3. Zeef bloem met bakpoeder en zout, spatel voorzichtig door het eimengsel.\n" +
            "4. Voeg gesmolten boter en vanille toe, meng voorzichtig.\n" +
            "5. Vet madeleinevorm in en vul elk hol 2/3.\n" +
            "6. Bak 10-12 minuten tot goudbruin en licht opgezwollen.\n" +
            "7. Laat enkele minuten afkoelen voordat je uit de vorm haalt en serveert."
    },
    ar: {
        title: "مادلين ناعمة (تكفي 4 أشخاص)",
        equipment: [
            "وعاء كبير",
            "خلاط يدوي",
            "ميزان مطبخ",
            "قالب مادلين",
            "ملعقة سيليكون",
            "منخل للطحين"
        ],
        ingredients: [
            "100غ دقيق قمح",
            "100غ سكر",
            "100غ زبدة مذابة",
            "2 بيض",
            "1/2 ملعقة صغيرة بيكنغ بودر (2غ)",
            "1 ملعقة صغيرة فانيليا (5 مل)",
            "رشة ملح"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الفرن على 180°C.\n" +
            "2. في وعاء كبير، اخفق البيض مع السكر حتى يصبح المزيج فاتح اللون ورغوي.\n" +
            "3. انخل الدقيق مع البيكنغ بودر والملح، ثم ادمجه برفق مع خليط البيض.\n" +
            "4. أضف الزبدة المذابة والفانيليا، وقلّب برفق.\n" +
            "5. ادهن قالب المادلين بالزبدة أو رشه بالدقيق، واملأ كل فجوة 2/3.\n" +
            "6. اخبز 10-12 دقيقة حتى تصبح ذهبية اللون ومنتفخة قليلاً.\n" +
            "7. دعها تبرد لبضع دقائق قبل إخراجها من القالب وتقديمها."
    }
};
recipesData.entree.bruschetta = {
    country: "italie",
    image: "images/bruschetta.jpg",
    fr: {
        title: "Bruschetta aux tomates (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 bol pour mélanger",
            "1 cuillère en bois",
            "1 poêle ou grille"
        ],
        ingredients: [
            "4 tranches de pain ciabatta (environ 200 g)",
            "3 tomates moyennes (300 g), coupées en dés",
            "1 gousse d’ail, hachée",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Quelques feuilles de basilic frais",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Couper les tomates en petits dés et hacher l’ail.\n" +
            "2. Dans un bol, mélanger tomates, ail, sel, poivre et 1 cuillère à soupe d’huile d’olive.\n" +
            "3. Faire griller les tranches de pain dans une poêle ou sur grille jusqu’à ce qu’elles soient dorées.\n" +
            "4. Répartir le mélange de tomates sur les tranches de pain.\n" +
            "5. Ajouter quelques feuilles de basilic frais et un filet d’huile d’olive avant de servir."
    },
    en: {
        title: "Tomato Bruschetta (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 mixing bowl",
            "1 wooden spoon",
            "1 pan or grill"
        ],
        ingredients: [
            "4 slices ciabatta bread (200 g)",
            "3 medium tomatoes (300 g), diced",
            "1 garlic clove, chopped",
            "2 tablespoons olive oil (30 ml)",
            "Some fresh basil leaves",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Dice tomatoes and chop garlic.\n" +
            "2. In a bowl, mix tomatoes, garlic, salt, pepper and 1 tbsp olive oil.\n" +
            "3. Grill bread slices in a pan or on a grill until golden.\n" +
            "4. Spread tomato mixture on the bread slices.\n" +
            "5. Top with fresh basil leaves and drizzle with olive oil before serving."
    },
    nl: {
        title: "Tomaten Bruschetta (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 kom om te mengen",
            "1 houten lepel",
            "1 pan of grill"
        ],
        ingredients: [
            "4 sneetjes ciabatta brood (200 g)",
            "3 middelgrote tomaten (300 g), in blokjes",
            "1 teentje knoflook, gehakt",
            "2 eetlepels olijfolie (30 ml)",
            "Enkele verse basilicumblaadjes",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Snijd de tomaten in kleine blokjes en hak de knoflook.\n" +
            "2. Meng in een kom de tomaten, knoflook, zout, peper en 1 eetlepel olijfolie.\n" +
            "3. Rooster de sneetjes brood in een pan of op een grill tot goudbruin.\n" +
            "4. Verdeel het tomatenmengsel over het brood.\n" +
            "5. Voeg verse basilicumblaadjes toe en besprenkel met olijfolie voor het serveren."
    },
    ar: {
        title: "بروشيتا بالطرطور (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "وعاء للخلط",
            "ملعقة خشبية",
            "مقلاة أو شواية"
        ],
        ingredients: [
            "4 شرائح خبز تشاباتا (200 غ)",
            "3 طماطم متوسطة (300 غ)، مقطعة مكعبات",
            "1 فص ثوم، مفروم",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "بضع أوراق ريحان طازج",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قطّع الطماطم إلى مكعبات صغيرة وافرّم الثوم.\n" +
            "2. في وعاء، اخلط الطماطم، الثوم، الملح، الفلفل وملعقة كبيرة من زيت الزيتون.\n" +
            "3. حمّص شرائح الخبز في المقلاة أو على الشواية حتى تصبح ذهبية اللون.\n" +
            "4. ضع خليط الطماطم على شرائح الخبز.\n" +
            "5. أضف أوراق الريحان الطازجة ورش زيت الزيتون قبل التقديم."
}
}; 
recipesData.entree.arancini = {
    country: "italie",
    image: "images/arancini.jpg",
    fr: {
        title: "Arancini di Riso (4 personnes)",
        equipment: [
            "1 casserole",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 poêle"
        ],
        ingredients: [
            "200 g de riz arborio",
            "50 g de parmesan râpé",
            "1 œuf",
            "50 g de petits pois cuits",
            "50 g de jambon cuit (facultatif)",
            "Chapelure pour paner",
            "Huile de cuisson",
            "Sel et poivre"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Cuire le riz à l’eau salée et laisser refroidir.\n" +
            "2. Mélanger le riz avec l’œuf, le parmesan, les petits pois et le jambon.\n" +
            "3. Former des boulettes de riz.\n" +
            "4. Les passer dans la chapelure.\n" +
            "5. Faire frire dans l’huile chaude jusqu’à ce qu’elles soient dorées.\n" +
            "6. Égoutter sur du papier absorbant et servir chaud."
    },
    en: {
        title: "Arancini di Riso (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 frying pan"
        ],
        ingredients: [
            "200 g arborio rice",
            "50 g grated parmesan",
            "1 egg",
            "50 g cooked peas",
            "50 g cooked ham (optional)",
            "Breadcrumbs for coating",
            "Cooking oil",
            "Salt and pepper"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Cook the rice in salted water and let it cool.\n" +
            "2. Mix rice with egg, parmesan, peas and ham.\n" +
            "3. Shape into balls.\n" +
            "4. Coat in breadcrumbs.\n" +
            "5. Fry in hot oil until golden.\n" +
            "6. Drain on paper towels and serve warm."
    },
    nl: {
        title: "Arancini di Riso (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 pan"
        ],
        ingredients: [
            "200 g arborio rijst",
            "50 g geraspte parmezaan",
            "1 ei",
            "50 g gekookte doperwten",
            "50 g gekookte ham (optioneel)",
            "Paneermeel om te paneren",
            "Bakken olie",
            "Zout en peper"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Kook de rijst in gezouten water en laat afkoelen.\n" +
            "2. Meng rijst met ei, parmezaan, doperwten en ham.\n" +
            "3. Vorm balletjes.\n" +
            "4. Haal door paneermeel.\n" +
            "5. Bak in hete olie tot goudbruin.\n" +
            "6. Laat uitlekken op keukenpapier en serveer warm."
    },
    ar: {
        title: "أرانشيني الأرز (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "مقلاة"
        ],
        ingredients: [
            "200 غ أرز أربوريو",
            "50 غ جبن بارميزان مبشور",
            "1 بيضة",
            "50 غ بازلاء مطبوخة",
            "50 غ لحم خنزير مطبوخ (اختياري)",
            "فتات خبز للتغطية",
            "زيت للقلي",
            "ملح وفلفل"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اطبخ الأرز في ماء مملح واتركه يبرد.\n" +
            "2. اخلط الأرز مع البيضة والبارميزان والبازلاء واللحم.\n" +
            "3. شكّل كرات.\n" +
            "4. غطّها بفتات الخبز.\n" +
            "5. اقليها في الزيت الساخن حتى تصبح ذهبية.\n" +
            "6. صفيها على ورق مطبخ وقدّمها ساخنة."
    }
};
// 1. Carpaccio de bœuf
recipesData.entree.carpaccio = {
    country: "italie",
    image: "images/carpaccio.jpg",
    fr: {
        title: "Carpaccio de bœuf (4 personnes)",
        equipment: [
            "1 couteau très tranchant",
            "1 planche à découper",
            "1 assiette de service",
            "1 pinceau ou cuillère"
        ],
        ingredients: [
            "200 g de bœuf très finement tranché",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "Quelques copeaux de parmesan (20 g)",
            "Quelques feuilles de roquette",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Disposer les tranches de bœuf sur l’assiette en une seule couche.\n" +
            "2. Arroser d’huile d’olive avec un pinceau ou une cuillère.\n" +
            "3. Ajouter les copeaux de parmesan et les feuilles de roquette.\n" +
            "4. Assaisonner avec sel et poivre.\n" +
            "5. Servir immédiatement frais."
    },
    en: {
        title: "Beef Carpaccio (Serves 4)",
        equipment: [
            "1 very sharp knife",
            "1 cutting board",
            "1 serving plate",
            "1 brush or spoon"
        ],
        ingredients: [
            "200 g beef, thinly sliced",
            "2 tablespoons olive oil (30 ml)",
            "Some parmesan shavings (20 g)",
            "Some arugula leaves",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Arrange beef slices on a plate in a single layer.\n" +
            "2. Drizzle with olive oil using a brush or spoon.\n" +
            "3. Add parmesan shavings and arugula leaves.\n" +
            "4. Season with salt and pepper.\n" +
            "5. Serve immediately, chilled."
    },
    nl: {
        title: "Carpaccio van rundvlees (voor 4 personen)",
        equipment: [
            "1 zeer scherp mes",
            "1 snijplank",
            "1 serveerschaal",
            "1 kwast of lepel"
        ],
        ingredients: [
            "200 g rundvlees, zeer dun gesneden",
            "2 eetlepels olijfolie (30 ml)",
            "Enkele Parmezaanse kaas vlokken (20 g)",
            "Enkele rucolablaadjes",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Leg de rundvleesplakjes op een schaal in één laag.\n" +
            "2. Besprenkel met olijfolie met een kwast of lepel.\n" +
            "3. Voeg Parmezaanse kaasvlokken en rucola toe.\n" +
            "4. Breng op smaak met zout en peper.\n" +
            "5. Serveer direct koud."
    },
    ar: {
        title: "كارباتشيو لحم بقر (تكفي 4 أشخاص)",
        equipment: [
            "سكين حاد جداً",
            "لوح تقطيع",
            "طبق تقديم",
            "فرشاة أو ملعقة"
        ],
        ingredients: [
            "200 غ لحم بقر مقطع شرائح رقيقة",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "بعض رقائق جبن بارميزان (20 غ)",
            "بضع أوراق جرجير",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. رص شرائح اللحم على الطبق في طبقة واحدة.\n" +
            "2. رش زيت الزيتون باستخدام فرشاة أو ملعقة.\n" +
            "3. أضف رقائق جبن البارميزان وأوراق الجرجير.\n" +
            "4. تبّل بالملح والفلفل.\n" +
            "5. قدّم الطبق مباشرة بارد."
    }
};

// 2. Antipasti de légumes grillés
recipesData.entree.antipastiLegumes = {
    country: "italie",
    image: "images/antipasti_legumes.jpg",
    fr: {
        title: "Antipasti de légumes grillés (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 poêle ou grille",
            "1 pinceau"
        ],
        ingredients: [
            "1 courgette",
            "1 poivron rouge",
            "1 aubergine",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 cuillère à café sel",
            "1/2 cuillère à café poivre"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Couper les légumes en tranches fines.\n" +
            "2. Badigeonner d’huile d’olive et assaisonner de sel et poivre.\n" +
            "3. Faire griller les tranches sur une poêle ou grille jusqu’à ce qu’elles soient tendres.\n" +
            "4. Disposer sur un plat et servir tiède ou froid."
    },
    en: {
        title: "Grilled Vegetable Antipasti (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 pan or grill",
            "1 brush"
        ],
        ingredients: [
            "1 zucchini",
            "1 red bell pepper",
            "1 eggplant",
            "2 tablespoons olive oil (30 ml)",
            "1 teaspoon salt",
            "1/2 teaspoon pepper"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Slice vegetables thinly.\n" +
            "2. Brush with olive oil and season with salt and pepper.\n" +
            "3. Grill slices on a pan or grill until tender.\n" +
            "4. Arrange on a plate and serve warm or cold."
    },
    nl: {
        title: "Gegrilde groente antipasti (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 pan of grill",
            "1 kwast"
        ],
        ingredients: [
            "1 courgette",
            "1 rode paprika",
            "1 aubergine",
            "2 eetlepels olijfolie (30 ml)",
            "1 theelepel zout",
            "1/2 theelepel peper"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Snijd de groenten in dunne plakjes.\n" +
            "2. Bestrijk met olijfolie en breng op smaak met zout en peper.\n" +
            "3. Grill de plakjes in een pan of op een grill tot ze zacht zijn.\n" +
            "4. Leg op een schaal en serveer warm of koud."
    },
    ar: {
        title: "أنتيباستي الخضار المشوية (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "مقلاة أو شواية",
            "فرشاة"
        ],
        ingredients: [
            "1 كوسة",
            "1 فلفل أحمر",
            "1 باذنجان",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة صغيرة ملح",
            "نصف ملعقة صغيرة فلفل"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قطع الخضار إلى شرائح رقيقة.\n" +
            "2. ادهنها بزيت الزيتون وتبّل بالملح والفلفل.\n" +
            "3. اشوِ الشرائح على مقلاة أو شواية حتى تصبح طرية.\n" +
            "4. رتبها على طبق وقدّمها دافئة أو باردة."
    }
};
// 3. Salade Panzanella
recipesData.entree.panzanella = {
    country: "italie",
    image: "images/panzanella.jpg",
    fr: {
        title: "Salade Panzanella (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 saladier",
            "1 cuillère en bois"
        ],
        ingredients: [
            "200 g de pain rassis en cubes",
            "3 tomates moyennes (300 g), coupées en dés",
            "1 concombre, coupé en dés",
            "1 oignon rouge, émincé",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Quelques feuilles de basilic",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Couper le pain en cubes et les tomates et le concombre en dés.\n" +
            "2. Émincer l’oignon rouge.\n" +
            "3. Mélanger tous les ingrédients dans un saladier.\n" +
            "4. Ajouter l’huile d’olive et assaisonner avec sel, poivre et basilic.\n" +
            "5. Laisser reposer 10 minutes avant de servir."
    },
    en: {
        title: "Panzanella Salad (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 mixing bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "200 g stale bread cubes",
            "3 medium tomatoes (300 g), diced",
            "1 cucumber, diced",
            "1 red onion, sliced",
            "2 tablespoons olive oil (30 ml)",
            "Some basil leaves",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Cut bread into cubes and dice tomatoes and cucumber.\n" +
            "2. Slice the red onion.\n" +
            "3. Mix all ingredients in a bowl.\n" +
            "4. Add olive oil and season with salt, pepper and basil.\n" +
            "5. Let rest 10 minutes before serving."
    },
    nl: {
        title: "Panzanella salade (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 kom om te mengen",
            "1 houten lepel"
        ],
        ingredients: [
            "200 g oud brood in blokjes",
            "3 middelgrote tomaten (300 g), in blokjes",
            "1 komkommer, in blokjes",
            "1 rode ui, in dunne plakjes",
            "2 eetlepels olijfolie (30 ml)",
            "Enkele basilicumblaadjes",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Snijd het brood in blokjes en de tomaten en komkommer in blokjes.\n" +
            "2. Snijd de rode ui in dunne plakjes.\n" +
            "3. Meng alles in een kom.\n" +
            "4. Voeg olijfolie toe en breng op smaak met zout, peper en basilicum.\n" +
            "5. Laat 10 minuten staan voor het serveren."
    },
    ar: {
        title: "سلطة بانزانيلّا (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "وعاء للخلط",
            "ملعقة خشبية"
        ],
        ingredients: [
            "200 غ خبز قديم مكعبات",
            "3 طماطم متوسطة (300 غ) مقطعة مكعبات",
            "1 خيار مقطع مكعبات",
            "1 بصلة حمراء مقطعة شرائح",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "بضع أوراق ريحان",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قطع الخبز إلى مكعبات والطماطم والخيار إلى مكعبات.\n" +
            "2. قطع البصلة الحمراء إلى شرائح.\n" +
            "3. اخلط جميع المكونات في وعاء.\n" +
            "4. أضف زيت الزيتون وتبّل بالملح والفلفل والريحان.\n" +
            "5. اتركه 10 دقائق قبل التقديم."
    }
};

// 4. Arancini (boulettes de riz)
recipesData.entree.arancini = {
    country: "italie",
    image: "images/arancini.jpg",
    fr: {
        title: "Arancini (4 personnes)",
        equipment: [
            "1 casserole",
            "1 cuillère en bois",
            "1 assiette",
            "1 poêle"
        ],
        ingredients: [
            "200 g de riz cuit",
            "50 g de mozzarella coupée en dés",
            "1 œuf",
            "2 cuillères à soupe chapelure",
            "Huile pour friture",
            "Sel selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Former des petites boules avec le riz.\n" +
            "2. Placer un cube de mozzarella au centre et refermer la boule.\n" +
            "3. Battre l’œuf et enrober les boules.\n" +
            "4. Rouler dans la chapelure.\n" +
            "5. Faire frire dans l’huile chaude jusqu’à ce qu’elles soient dorées.\n" +
            "6. Égoutter et servir chaud."
    },
    en: {
        title: "Arancini (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 wooden spoon",
            "1 plate",
            "1 pan"
        ],
        ingredients: [
            "200 g cooked rice",
            "50 g mozzarella, diced",
            "1 egg",
            "2 tablespoons breadcrumbs",
            "Oil for frying",
            "Salt to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Form small balls with rice.\n" +
            "2. Place a mozzarella cube in the center and close the ball.\n" +
            "3. Beat the egg and coat the balls.\n" +
            "4. Roll in breadcrumbs.\n" +
            "5. Fry in hot oil until golden.\n" +
            "6. Drain and serve hot."
    },
    nl: {
        title: "Arancini (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 houten lepel",
            "1 bord",
            "1 pan"
        ],
        ingredients: [
            "200 g gekookte rijst",
            "50 g mozzarella, in blokjes",
            "1 ei",
            "2 eetlepels paneermeel",
            "Olie om te frituren",
            "Zout naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Vorm kleine balletjes van rijst.\n" +
            "2. Plaats een mozzarella blokje in het midden en sluit het balletje.\n" +
            "3. Klop het ei en bedek de balletjes.\n" +
            "4. Rol door paneermeel.\n" +
            "5. Bak in hete olie tot goudbruin.\n" +
            "6. Laat uitlekken en serveer warm."
    },
    ar: {
        title: "أرانشيني (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "ملعقة خشبية",
            "طبق",
            "مقلاة"
        ],
        ingredients: [
            "200 غ أرز مطبوخ",
            "50 غ موزاريلا مقطعة مكعبات",
            "1 بيضة",
            "2 ملعقة كبيرة فتات خبز",
            "زيت للقلي",
            "ملح حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. شكل كرات صغيرة من الأرز.\n" +
            "2. ضع مكعب موزاريلا في الوسط وأغلق الكرة.\n" +
            "3. اخفق البيضة وغطّ الكرات.\n" +
            "4. اغمسها في فتات الخبز.\n" +
            "5. اقلي في الزيت الساخن حتى تصبح ذهبية.\n" +
            "6. صفّها وقدّمها ساخنة."
    }
};

// 5. Insalata di Mare (salade de fruits de mer)
recipesData.entree.insalataMare = {
    country: "italie",
    image: "images/insalata_mare.jpg",
    fr: {
        title: "Insalata di Mare (4 personnes)",
        equipment: [
            "1 casserole",
            "1 saladier",
            "1 cuillère en bois"
        ],
        ingredients: [
            "200 g de crevettes décortiquées",
            "150 g de calamars tranchés",
            "1 citron (jus)",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Sel et poivre selon goût",
            "Quelques feuilles de persil"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Cuire les crevettes et calamars 3-4 minutes dans de l’eau bouillante.\n" +
            "2. Égoutter et laisser refroidir.\n" +
            "3. Mélanger fruits de mer avec jus de citron, huile, sel et poivre.\n" +
            "4. Ajouter les feuilles de persil.\n" +
            "5. Servir frais."
    },
    en: {
        title: "Seafood Salad (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 mixing bowl",
            "1 wooden spoon"
        ],
        ingredients: [
            "200 g peeled shrimp",
            "150 g sliced squid",
            "1 lemon (juice)",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste",
            "Some parsley leaves"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Cook shrimp and squid 3-4 minutes in boiling water.\n" +
            "2. Drain and let cool.\n" +
            "3. Mix seafood with lemon juice, oil, salt, and pepper.\n" +
            "4. Add parsley leaves.\n" +
            "5. Serve chilled."
    },
    nl: {
        title: "Zeevruchtensalade (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 kom om te mengen",
            "1 houten lepel"
        ],
        ingredients: [
            "200 g gepelde garnalen",
            "150 g in plakjes gesneden inktvis",
            "1 citroen (sap)",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak",
            "Enkele peterselieblaadjes"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Kook garnalen en inktvis 3-4 minuten in kokend water.\n" +
            "2. Giet af en laat afkoelen.\n" +
            "3. Meng zeevruchten met citroensap, olie, zout en peper.\n" +
            "4. Voeg peterselieblaadjes toe.\n" +
            "5. Serveer koud."
    },
    ar: {
        title: "سلطة البحر (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "وعاء للخلط",
            "ملعقة خشبية"
        ],
        ingredients: [
            "200 غ روبيان مقشر",
            "150 غ حبار مقطع شرائح",
            "1 ليمونة (عصير)",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "ملح وفلفل حسب الرغبة",
            "بضع أوراق بقدونس"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اطبخ الروبيان والحبار 3-4 دقائق في ماء مغلي.\n" +
            "2. صفيها واتركها لتبرد.\n" +
            "3. اخلط المأكولات البحرية مع عصير الليمون والزيت والملح والفلفل.\n" +
            "4. أضف أوراق البقدونس.\n" +
            "5. قدمها باردة."
    }
};

// 6. Frittata aux légumes
recipesData.entree.frittataLegumes = {
    country: "italie",
    image: "images/frittata.jpg",
    fr: {
        title: "Frittata aux légumes (4 personnes)",
        equipment: [
            "1 poêle",
            "1 fouet",
            "1 bol"
        ],
        ingredients: [
            "6 œufs",
            "1 courgette râpée",
            "1 poivron rouge coupé en dés",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Battre les œufs dans un bol et assaisonner avec sel et poivre.\n" +
            "2. Ajouter les légumes et mélanger.\n" +
            "3. Chauffer l’huile dans une poêle et verser le mélange.\n" +
            "4. Cuire à feu moyen jusqu’à ce que les œufs soient pris.\n" +
            "5. Retourner délicatement pour cuire l’autre côté.\n" +
            "6. Servir chaud ou tiède."
    },
    en: {
        title: "Vegetable Frittata (Serves 4)",
        equipment: [
            "1 pan",
            "1 whisk",
            "1 bowl"
        ],
        ingredients: [
            "6 eggs",
            "1 grated zucchini",
            "1 red bell pepper, diced",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Beat eggs in a bowl and season with salt and pepper.\n" +
            "2. Add vegetables and mix.\n" +
            "3. Heat oil in a pan and pour mixture.\n" +
            "4. Cook over medium heat until eggs set.\n" +
            "5. Carefully flip to cook the other side.\n" +
            "6. Serve hot or warm."
    },
    nl: {
        title: "Groente frittata (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 garde",
            "1 kom"
        ],
        ingredients: [
            "6 eieren",
            "1 geraspte courgette",
            "1 rode paprika, in blokjes",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Klop de eieren in een kom en breng op smaak met zout en peper.\n" +
            "2. Voeg de groenten toe en meng.\n" +
            "3. Verhit olie in een pan en giet het mengsel erin.\n" +
            "4. Bak op middelhoog vuur tot de eieren gestold zijn.\n" +
            "5. Draai voorzichtig om de andere kant te bakken.\n" +
            "6. Serveer warm of lauw."
    },
    ar: {
        title: "فريتاتا بالخضار (تكفي 4 أشخاص)",
        equipment: [
            "مقلاة",
            "خفاق",
            "وعاء"
        ],
        ingredients: [
            "6 بيضات",
            "1 كوسة مبشورة",
            "1 فلفل أحمر مقطع مكعبات",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اخفق البيض في وعاء وتبّل بالملح والفلفل.\n" +
            "2. أضف الخضار واخلط.\n" +
            "3. سخّن الزيت في مقلاة وصب المزيج.\n" +
            "4. اطبخ على نار متوسطة حتى يتماسك البيض.\n" +
            "5. قلب برفق للطهي من الجهة الأخرى.\n" +
            "6. قدّم ساخناً أو دافئاً."
    }
};

// 7. Soupe Minestrone
recipesData.entree.minestrone = {
    country: "italie",
    image: "images/minestrone.jpg",
    fr: {
        title: "Soupe Minestrone (4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois"
        ],
        ingredients: [
            "1 carotte (150 g)",
            "1 branche de céleri",
            "1 courgette (150 g)",
            "1 oignon (120 g)",
            "2 pommes de terre moyennes (300 g)",
            "1 litre de bouillon de légumes",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Éplucher et couper carotte, céleri, courgette, oignon et pommes de terre en dés.\n" +
            "2. Chauffer l’huile d’olive dans la casserole et faire revenir l’oignon 2-3 minutes.\n" +
            "3. Ajouter les autres légumes et faire revenir 5 minutes.\n" +
            "4. Verser le bouillon de légumes, porter à ébullition puis réduire le feu.\n" +
            "5. Laisser mijoter 25-30 minutes jusqu’à ce que les légumes soient tendres.\n" +
            "6. Assaisonner sel et poivre et servir chaud."
    },
    en: {
        title: "Minestrone Soup (Serves 4)",
        equipment: [
            "1 large saucepan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon"
        ],
        ingredients: [
            "1 carrot (150 g)",
            "1 celery stalk",
            "1 zucchini (150 g)",
            "1 onion (120 g)",
            "2 medium potatoes (300 g)",
            "1 liter vegetable broth",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Peel and dice carrot, celery, zucchini, onion, and potatoes.\n" +
            "2. Heat olive oil in a saucepan and sauté onion 2-3 minutes.\n" +
            "3. Add other vegetables and sauté 5 minutes.\n" +
            "4. Pour in vegetable broth, bring to a boil then reduce heat.\n" +
            "5. Simmer 25-30 minutes until vegetables are tender.\n" +
            "6. Season with salt and pepper and serve hot."
    },
    nl: {
        title: "Minestrone soep (voor 4 personen)",
        equipment: [
            "1 grote steelpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel"
        ],
        ingredients: [
            "1 wortel (150 g)",
            "1 stengel selderij",
            "1 courgette (150 g)",
            "1 ui (120 g)",
            "2 middelgrote aardappelen (300 g)",
            "1 liter groentebouillon",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Schil en snijd wortel, selderij, courgette, ui en aardappelen in blokjes.\n" +
            "2. Verhit olijfolie in een pan en fruit de ui 2-3 minuten.\n" +
            "3. Voeg de andere groenten toe en bak 5 minuten.\n" +
            "4. Voeg de bouillon toe, breng aan de kook en zet het vuur lager.\n" +
            "5. Laat 25-30 minuten sudderen tot de groenten gaar zijn.\n" +
            "6. Breng op smaak met zout en peper en serveer warm."
    },
    ar: {
        title: "شوربة مينستروني (تكفي 4 أشخاص)",
        equipment: [
            "قدر كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية"
        ],
        ingredients: [
            "1 جزرة (150 غ)",
            "1 عود كرفس",
            "1 كوسة (150 غ)",
            "1 بصلة (120 غ)",
            "2 بطاطس متوسطة (300 غ)",
            "1 لتر مرق خضار",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. قشر وقطع الجزر، الكرفس، الكوسة، البصل والبطاطس إلى مكعبات.\n" +
            "2. سخّن زيت الزيتون في قدر وقم بتحمير البصل 2-3 دقائق.\n" +
            "3. أضف الخضار الأخرى وقلب 5 دقائق.\n" +
            "4. أضف مرق الخضار، اغليه ثم خفف النار.\n" +
            "5. اتركه يغلي على نار هادئة 25-30 دقيقة حتى تصبح الخضار طرية.\n" +
            "6. تبّل بالملح والفلفل وقدّمه ساخناً."
    }
};

    recipesData.entree.caprese = {
    country: "italie",
    image: "images/caprese.jpg",
    fr: {
        title: "Salade Caprese (4 personnes)",
        equipment: [
            "1 couteau",
            "1 planche à découper",
            "1 assiette de service"
        ],
        ingredients: [
            "4 tomates moyennes (400 g)",
            "250 g de mozzarella",
            "Quelques feuilles de basilic frais",
            "2 cuillères à soupe d’huile d’olive (30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Laver et couper les tomates en rondelles.\n" +
            "2. Couper la mozzarella en tranches.\n" +
            "3. Disposer les rondelles de tomates et de mozzarella en alternance sur l’assiette.\n" +
            "4. Ajouter les feuilles de basilic.\n" +
            "5. Assaisonner avec sel, poivre et un filet d’huile d’olive avant de servir."
    },
    en: {
        title: "Caprese Salad (Serves 4)",
        equipment: [
            "1 knife",
            "1 cutting board",
            "1 serving plate"
        ],
        ingredients: [
            "4 medium tomatoes (400 g)",
            "250 g mozzarella",
            "Some fresh basil leaves",
            "2 tablespoons olive oil (30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Wash and slice the tomatoes.\n" +
            "2. Slice the mozzarella.\n" +
            "3. Arrange the tomato and mozzarella slices alternately on a plate.\n" +
            "4. Add basil leaves.\n" +
            "5. Season with salt, pepper and a drizzle of olive oil before serving."
    },
    nl: {
        title: "Caprese salade (voor 4 personen)",
        equipment: [
            "1 mes",
            "1 snijplank",
            "1 serveerschaal"
        ],
        ingredients: [
            "4 middelgrote tomaten (400 g)",
            "250 g mozzarella",
            "Enkele verse basilicumblaadjes",
            "2 eetlepels olijfolie (30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Was en snijd de tomaten in plakjes.\n" +
            "2. Snijd de mozzarella in plakjes.\n" +
            "3. Leg afwisselend plakjes tomaat en mozzarella op een bord.\n" +
            "4. Voeg basilicumblaadjes toe.\n" +
            "5. Breng op smaak met zout, peper en een scheutje olijfolie voor het serveren."
    },
    ar: {
        title: "سلطة كابريزي (تكفي 4 أشخاص)",
        equipment: [
            "سكين",
            "لوح تقطيع",
            "طبق تقديم"
        ],
        ingredients: [
            "4 طماطم متوسطة (400 غ)",
            "250 غ موزاريلا",
            "بضع أوراق ريحان طازج",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. غسل وقطع الطماطم إلى شرائح.\n" +
            "2. تقطيع الموزاريلا إلى شرائح.\n" +
            "3. وضع شرائح الطماطم والموزاريلا بالتناوب على الطبق.\n" +
            "4. إضافة أوراق الريحان.\n" +
            "5. تتبيل بالملح والفلفل ورش زيت الزيتون قبل التقديم."
    }
};



recipesData.plat.risotto = {
    country: "italie",
    image: "images/risotto.jpg",
    fr: {
        title: "Risotto aux champignons (4 personnes)",
        equipment: [
            "1 casserole à fond épais",
            "1 poêle",
            "1 cuillère en bois",
            "1 couteau",
            "1 planche à découper",
            "1 balance de cuisine",
            "1 louche"
        ],
        ingredients: [
            "300 g riz arborio",
            "250 g champignons frais (champignon de Paris ou mélange forestier), tranchés",
            "1 oignon moyen (100 g), haché finement",
            "1 litre bouillon de légumes chaud",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "30 g beurre",
            "50 g parmesan râpé (facultatif halal)",
            "Sel et poivre selon goût",
            "1 gousse d’ail, émincée"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer le bouillon dans une casserole et le maintenir chaud.\n" +
            "2. Dans une grande poêle, faire revenir l’oignon et l’ail avec 1 cuillère à soupe d’huile d’olive jusqu’à ce qu’ils deviennent translucides.\n" +
            "3. Ajouter les champignons et cuire 5-7 minutes jusqu’à ce qu’ils soient tendres.\n" +
            "4. Ajouter le riz et mélanger 1-2 minutes pour qu’il s’imprègne de l’huile.\n" +
            "5. Verser une louche de bouillon chaud, remuer jusqu’à absorption. Répéter progressivement, louche par louche, pendant 18-20 minutes jusqu’à cuisson crémeuse.\n" +
            "6. Retirer du feu, ajouter le beurre et le parmesan, mélanger doucement.\n" +
            "7. Assaisonner avec sel et poivre selon goût. Servir immédiatement."
    },
    en: {
        title: "Mushroom Risotto (Serves 4)",
        equipment: [
            "1 heavy-bottomed pot",
            "1 frying pan",
            "1 wooden spoon",
            "1 knife",
            "1 cutting board",
            "1 kitchen scale",
            "1 ladle"
        ],
        ingredients: [
            "300 g Arborio rice",
            "250 g fresh mushrooms (button or mixed forest), sliced",
            "1 medium onion (100 g), finely chopped",
            "1 litre hot vegetable broth",
            "2 tablespoons olive oil (30 ml)",
            "30 g butter",
            "50 g grated Parmesan (optional halal)",
            "Salt and pepper to taste",
            "1 garlic clove, minced"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat the broth in a pot and keep warm.\n" +
            "2. In a large pan, sauté onion and garlic with 1 tbsp olive oil until translucent.\n" +
            "3. Add mushrooms and cook 5-7 minutes until tender.\n" +
            "4. Add rice and stir 1-2 minutes to coat in oil.\n" +
            "5. Gradually add ladles of hot broth, stirring until absorbed. Repeat for 18-20 minutes until creamy.\n" +
            "6. Remove from heat, add butter and Parmesan, mix gently.\n" +
            "7. Season with salt and pepper to taste. Serve immediately."
    },
    nl: {
        title: "Risotto met champignons (voor 4 personen)",
        equipment: [
            "1 zware pan",
            "1 koekenpan",
            "1 houten lepel",
            "1 mes",
            "1 snijplank",
            "1 keukenweegschaal",
            "1 soeplepel"
        ],
        ingredients: [
            "300 g Arborio rijst",
            "250 g verse champignons (champignon of bosmix), in plakjes",
            "1 middelgrote ui (100 g), fijngehakt",
            "1 liter hete groentebouillon",
            "2 eetlepels olijfolie (30 ml)",
            "30 g boter",
            "50 g geraspte Parmezaanse kaas (optioneel halal)",
            "Zout en peper naar smaak",
            "1 teentje knoflook, fijngehakt"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de bouillon in een pan en houd warm.\n" +
            "2. Fruit in een grote pan de ui en knoflook met 1 el olijfolie tot glazig.\n" +
            "3. Voeg de champignons toe en bak 5-7 minuten tot zacht.\n" +
            "4. Voeg de rijst toe en roer 1-2 minuten zodat hij bedekt is met olie.\n" +
            "5. Voeg geleidelijk een soeplepel bouillon toe, roer tot opgenomen. Herhaal 18-20 minuten tot romig.\n" +
            "6. Haal van het vuur, voeg boter en Parmezaanse kaas toe, meng zachtjes.\n" +
            "7. Breng op smaak met zout en peper. Direct serveren."
    },
    ar: {
        title: "ريزوتو بالفطر (تكفي 4 أشخاص)",
        equipment: [
            "قدر سميك القاعدة",
            "مقلاة",
            "ملعقة خشبية",
            "سكين",
            "لوح تقطيع",
            "ميزان مطبخ",
            "مغرفة"
        ],
        ingredients: [
            "300 غ أرز أربوريو",
            "250 غ فطر طازج (فطر أبيض أو مشكل)، مقطع شرائح",
            "1 بصل متوسط (100 غ)، مفروم ناعم",
            "1 لتر مرق خضار ساخن",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "30 غ زبدة",
            "50 غ جبن بارميزان مبشور (اختياري حلال)",
            "ملح وفلفل حسب الرغبة",
            "1 فص ثوم، مفروم"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن المرق في قدر وحافظ عليه ساخناً.\n" +
            "2. في مقلاة كبيرة، اقلي البصل والثوم مع 1 ملعقة كبيرة زيت زيتون حتى يصبح شفافاً.\n" +
            "3. أضف الفطر واطهي 5-7 دقائق حتى ينضج.\n" +
            "4. أضف الأرز وحرك 1-2 دقيقة ليختلط بالزيت.\n" +
            "5. أضف المرق تدريجياً بواسطة مغرفة مع التحريك حتى يمتص. كرر لمدة 18-20 دقيقة حتى يصبح قشدي القوام.\n" +
            "6. ارفع عن النار، أضف الزبدة والبارميزان وامزج برفق.\n" +
            "7. تبّل بالملح والفلفل حسب الرغبة وقدّم فوراً."
    }
};
recipesData.plat.risottoPoulet = {
    country: "italie",
    image: "images/risotto-poulet.jpg",
    fr: {
        title: "Risotto au poulet et légumes (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "200 g de riz arborio",
            "300 g de poulet coupé en dés",
            "1 oignon haché",
            "1 poivron rouge en dés",
            "100 g de petits pois",
            "750 ml de bouillon de volaille",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Chauffer l’huile dans une poêle, ajouter l’oignon et le poivron, faire revenir 3-4 min.\n" +
            "2. Ajouter le poulet et cuire jusqu’à ce qu’il soit doré.\n" +
            "3. Ajouter le riz et remuer 1-2 min jusqu’à ce qu’il devienne translucide.\n" +
            "4. Verser le bouillon chaud louche par louche, en remuant constamment jusqu’à absorption.\n" +
            "5. Ajouter les petits pois à mi-cuisson.\n" +
            "6. Lorsque le riz est cuit et crémeux, incorporer le parmesan.\n" +
            "7. Ajuster sel et poivre et servir chaud."
    },
    en: {
        title: "Chicken and Vegetable Risotto (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "200 g arborio rice",
            "300 g diced chicken",
            "1 chopped onion",
            "1 red pepper, diced",
            "100 g green peas",
            "750 ml chicken broth",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Heat oil in a pan, add onion and pepper, sauté 3-4 min.\n" +
            "2. Add chicken and cook until golden.\n" +
            "3. Add rice and stir 1-2 min until translucent.\n" +
            "4. Pour hot broth, ladle by ladle, stirring constantly until absorbed.\n" +
            "5. Add peas halfway through cooking.\n" +
            "6. When rice is creamy and cooked, stir in parmesan.\n" +
            "7. Adjust salt and pepper and serve hot."
    },
    nl: {
        title: "Risotto met kip en groenten (voor 4 personen)",
        equipment: ["1 pan", "1 braadpan", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "200 g arborio rijst",
            "300 g kip in blokjes",
            "1 ui, gehakt",
            "1 rode paprika, in blokjes",
            "100 g doperwten",
            "750 ml kippenbouillon",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verhit olie in een pan, voeg ui en paprika toe, bak 3-4 min.\n" +
            "2. Voeg kip toe en bak tot goudbruin.\n" +
            "3. Voeg rijst toe en roer 1-2 min tot glazig.\n" +
            "4. Voeg warme bouillon lepel voor lepel toe, voortdurend roeren tot opgenomen.\n" +
            "5. Voeg doperwten halverwege de kooktijd toe.\n" +
            "6. Wanneer de rijst romig en gaar is, Parmezaanse kaas erdoor mengen.\n" +
            "7. Breng op smaak met zout en peper en serveer warm."
    },
    ar: {
        title: "ريزوتو الدجاج والخضار (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "200 غ أرز أربوريو",
            "300 غ دجاج مقطع مكعبات",
            "1 بصلة مفرومة",
            "1 فلفل أحمر مقطع مكعبات",
            "100 غ بازلاء خضراء",
            "750 مل مرق دجاج",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الزيت في مقلاة، أضف البصل والفلفل، قلب 3-4 دقائق.\n" +
            "2. أضف الدجاج واطبخ حتى يصبح ذهبي اللون.\n" +
            "3. أضف الأرز وحرك 1-2 دقيقة حتى يصبح شفافاً.\n" +
            "4. أضف المرق الساخن ملعقة تلو الأخرى مع التحريك المستمر حتى يمتص.\n" +
            "5. أضف البازلاء في منتصف الطهي.\n" +
            "6. عندما يصبح الأرز كريميًا وناضجًا، أضف جبن البارميزان.\n" +
            "7. اضبط الملح والفلفل وقدّم ساخناً."
    }
};
recipesData.plat.risottoLegumes = {
    country: "italie",
    image: "images/risotto-legumes.jpg",
    fr: {
        title: "Risotto aux légumes (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "200 g de riz arborio",
            "1 courgette coupée en dés",
            "1 carotte coupée en dés",
            "100 g de petits pois",
            "1 poivron rouge en dés",
            "1 oignon haché",
            "750 ml de bouillon de légumes",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Chauffer l’huile dans une poêle, ajouter l’oignon, la carotte et le poivron, faire revenir 3-4 min.\n" +
            "2. Ajouter la courgette et les petits pois, cuire 2-3 min.\n" +
            "3. Ajouter le riz et remuer 1-2 min jusqu’à ce qu’il devienne translucide.\n" +
            "4. Verser le bouillon chaud louche par louche, en remuant constamment jusqu’à absorption.\n" +
            "5. Lorsque le riz est crémeux et cuit, incorporer le parmesan.\n" +
            "6. Ajuster sel et poivre et servir chaud."
    },
    en: {
        title: "Vegetable Risotto (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "200 g arborio rice",
            "1 zucchini, diced",
            "1 carrot, diced",
            "100 g green peas",
            "1 red pepper, diced",
            "1 chopped onion",
            "750 ml vegetable broth",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Heat oil in a pan, add onion, carrot and red pepper, sauté 3-4 min.\n" +
            "2. Add zucchini and peas, cook 2-3 min.\n" +
            "3. Add rice and stir 1-2 min until translucent.\n" +
            "4. Pour hot broth ladle by ladle, stirring constantly until absorbed.\n" +
            "5. When rice is creamy and cooked, stir in parmesan.\n" +
            "6. Adjust salt and pepper and serve hot."
    },
    nl: {
        title: "Risotto met groenten (voor 4 personen)",
        equipment: ["1 pan", "1 braadpan", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "200 g arborio rijst",
            "1 courgette, in blokjes",
            "1 wortel, in blokjes",
            "100 g doperwten",
            "1 rode paprika, in blokjes",
            "1 ui, gehakt",
            "750 ml groentebouillon",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verhit olie in een pan, voeg ui, wortel en paprika toe, bak 3-4 min.\n" +
            "2. Voeg courgette en doperwten toe, bak 2-3 min.\n" +
            "3. Voeg rijst toe en roer 1-2 min tot glazig.\n" +
            "4. Voeg warme bouillon lepel voor lepel toe, voortdurend roeren tot opgenomen.\n" +
            "5. Wanneer de rijst romig en gaar is, Parmezaanse kaas erdoor mengen.\n" +
            "6. Breng op smaak met zout en peper en serveer warm."
    },
    ar: {
        title: "ريزوتو الخضار (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "200 غ أرز أربوريو",
            "1 كوسة مقطعة مكعبات",
            "1 جزرة مقطعة مكعبات",
            "100 غ بازلاء خضراء",
            "1 فلفل أحمر مقطع مكعبات",
            "1 بصلة مفرومة",
            "750 مل مرق خضار",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الزيت في مقلاة، أضف البصل والجزر والفلفل، قلب 3-4 دقائق.\n" +
            "2. أضف الكوسة والبازلاء، اطبخ 2-3 دقائق.\n" +
            "3. أضف الأرز وحرك 1-2 دقيقة حتى يصبح شفافاً.\n" +
            "4. أضف المرق الساخن ملعقة تلو الأخرى مع التحريك المستمر حتى يمتص.\n" +
            "5. عندما يصبح الأرز كريميًا وناضجًا، أضف جبن البارميزان.\n" +
            "6. اضبط الملح والفلفل وقدّم ساخناً."
    }
};
recipesData.plat.gnocchiTomateFromage = {
    country: "italie",
    image: "images/gnocchi-tomate-fromage.jpg",
    fr: {
        title: "Gnocchis à la sauce tomate et fromage (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "500 g de gnocchis",
            "400 g de tomates concassées",
            "2 gousses d’ail hachées",
            "150 g de mozzarella râpée",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et basilic frais"
        ],
        preparation:
            "1. Cuire les gnocchis dans de l’eau bouillante salée jusqu’à ce qu’ils remontent à la surface, égoutter.\n" +
            "2. Dans une poêle, chauffer l’huile, ajouter l’ail et faire revenir 1-2 min.\n" +
            "3. Ajouter les tomates, sel et poivre, laisser mijoter 10 min.\n" +
            "4. Mélanger les gnocchis avec la sauce.\n" +
            "5. Ajouter mozzarella et parmesan, bien mélanger.\n" +
            "6. Verser dans un plat à gratin et cuire 10-15 min au four à 200°C jusqu’à ce que le dessus soit doré.\n" +
            "7. Servir chaud, saupoudré de basilic frais."
    },
    en: {
        title: "Gnocchi with Tomato and Cheese Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "500 g gnocchi",
            "400 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "150 g grated mozzarella",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and fresh basil"
        ],
        preparation:
            "1. Cook gnocchi in salted boiling water until they float, drain.\n" +
            "2. In a pan, heat oil, add garlic, sauté 1-2 min.\n" +
            "3. Add tomatoes, salt and pepper, simmer 10 min.\n" +
            "4. Mix gnocchi with sauce.\n" +
            "5. Add mozzarella and parmesan, mix well.\n" +
            "6. Transfer to a baking dish and bake 10-15 min at 200°C until golden on top.\n" +
            "7. Serve hot, sprinkled with fresh basil."
    },
    nl: {
        title: "Gnocchi met tomatensaus en kaas (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "500 g gnocchi",
            "400 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "150 g geraspte mozzarella",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en verse basilicum"
        ],
        preparation:
            "1. Kook gnocchi in gezouten kokend water tot ze boven komen, giet af.\n" +
            "2. Verhit olie in een pan, voeg knoflook toe, bak 1-2 min.\n" +
            "3. Voeg tomaten, zout en peper toe, laat 10 min sudderen.\n" +
            "4. Meng gnocchi met de saus.\n" +
            "5. Voeg mozzarella en Parmezaan toe, goed mengen.\n" +
            "6. Doe in een ovenschaal en bak 10-15 min op 200°C tot goudbruin.\n" +
            "7. Serveer warm, bestrooid met verse basilicum."
    },
    ar: {
        title: "جنوتشي بصلصة الطماطم والجبن (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "500 غ جنوتشي",
            "400 غ طماطم مفرومة",
            "2 فص ثوم مفروم",
            "150 غ موزاريلا مبشور",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وريحان طازج"
        ],
        preparation:
            "1. اطبخ الجنوتشي في ماء مغلي مملح حتى يطفو على السطح، صفيه.\n" +
            "2. في مقلاة، سخن الزيت، أضف الثوم، قلب 1-2 دقيقة.\n" +
            "3. أضف الطماطم، الملح والفلفل، اتركها تغلي 10 دقائق.\n" +
            "4. اخلط الجنوتشي مع الصلصة.\n" +
            "5. أضف الموزاريلا والبارميزان، اخلط جيداً.\n" +
            "6. ضع في صينية خبز واخبز 10-15 دقيقة على 200°م حتى يصبح الوجه ذهبي.\n" +
            "7. قدّم ساخناً ورش الريحان الطازج."
    }
};
recipesData.plat.gnocchiPouletCreme = {
    country: "italie",
    image: "images/gnocchi-poulet-creme.jpg",
    fr: {
        title: "Gnocchis au poulet et sauce crémeuse (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "500 g de gnocchis",
            "200 g de poulet cuit émincé",
            "150 ml de crème fraîche",
            "50 g de parmesan râpé",
            "1 oignon haché",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Cuire les gnocchis dans de l’eau bouillante salée jusqu’à ce qu’ils remontent, égoutter.\n" +
            "2. Dans une poêle, chauffer l’huile, ajouter l’oignon et faire revenir 2-3 min.\n" +
            "3. Ajouter le poulet et la crème, mélanger et cuire 5 min.\n" +
            "4. Ajouter les gnocchis, mélanger pour bien enrober de sauce.\n" +
            "5. Incorporer le parmesan, assaisonner sel et poivre.\n" +
            "6. Verser dans un plat à gratin et cuire 10 min au four à 200°C pour gratiner légèrement.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Gnocchi with Chicken and Cream Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "500 g gnocchi",
            "200 g cooked sliced chicken",
            "150 ml fresh cream",
            "50 g grated parmesan",
            "1 chopped onion",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Cook gnocchi in salted boiling water until they float, drain.\n" +
            "2. In a pan, heat oil, add onion and sauté 2-3 min.\n" +
            "3. Add chicken and cream, cook 5 min.\n" +
            "4. Add gnocchi, mix well to coat with sauce.\n" +
            "5. Stir in parmesan, season with salt and pepper.\n" +
            "6. Transfer to a baking dish and bake 10 min at 200°C to lightly gratinate.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Gnocchi met kip en roomsaus (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "500 g gnocchi",
            "200 g gekookte kip in plakjes",
            "150 ml verse room",
            "50 g geraspte Parmezaanse kaas",
            "1 ui, gehakt",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Kook gnocchi in gezouten kokend water tot ze boven komen, giet af.\n" +
            "2. Verhit olie in een pan, voeg ui toe en bak 2-3 min.\n" +
            "3. Voeg kip en room toe, kook 5 min.\n" +
            "4. Voeg gnocchi toe, meng goed zodat alles bedekt is met saus.\n" +
            "5. Voeg Parmezaanse kaas toe, breng op smaak met zout en peper.\n" +
            "6. Doe in een ovenschaal en bak 10 min op 200°C voor een lichte gratin.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "جنوتشي بالدجاج والصلصة الكريمية (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "500 غ جنوتشي",
            "200 غ دجاج مطهو ومقطع شرائح",
            "150 مل كريمة طازجة",
            "50 غ جبن بارميزان مبشور",
            "1 بصلة مفرومة",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. اطبخ الجنوتشي في ماء مغلي مملح حتى يطفو، صفيه.\n" +
            "2. في مقلاة، سخن الزيت، أضف البصل وقلّب 2-3 دقائق.\n" +
            "3. أضف الدجاج والكريمة، اطبخ 5 دقائق.\n" +
            "4. أضف الجنوتشي، اخلط جيداً لتغليفها بالصلصة.\n" +
            "5. أضف البارميزان، تبّل بالملح والفلفل.\n" +
            "6. ضع في صينية خبز واخبز 10 دقائق على 200°م حتى يتحمر الوجه قليلاً.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.cannellonisLegumes = {
    country: "italie",
    image: "images/cannellonis-legumes.jpg",
    fr: {
        title: "Cannellonis aux légumes et sauce tomate (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 plat à gratin", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "12 tubes de cannellonis",
            "1 courgette coupée en dés",
            "1 carotte coupée en dés",
            "1 poivron rouge coupé en dés",
            "100 g de petits pois",
            "1 oignon haché",
            "400 g de tomates concassées",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Chauffer l’huile dans une poêle, ajouter l’oignon, la carotte, le poivron et la courgette, cuire 5 min.\n" +
            "3. Ajouter les petits pois, sel, poivre et herbes, cuire 2-3 min.\n" +
            "4. Farcir les tubes de cannellonis avec les légumes.\n" +
            "5. Verser un peu de sauce tomate au fond du plat à gratin, disposer les cannellonis.\n" +
            "6. Recouvrir avec le reste de sauce tomate et saupoudrer de parmesan.\n" +
            "7. Cuire au four 25-30 min jusqu’à ce que le dessus soit doré.\n" +
            "8. Servir chaud."
    },
    en: {
        title: "Vegetable Cannelloni with Tomato Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 baking dish", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "12 cannelloni tubes",
            "1 zucchini, diced",
            "1 carrot, diced",
            "1 red pepper, diced",
            "100 g green peas",
            "1 chopped onion",
            "400 g chopped tomatoes",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. Heat oil in a pan, add onion, carrot, pepper and zucchini, cook 5 min.\n" +
            "3. Add peas, salt, pepper and herbs, cook 2-3 min.\n" +
            "4. Fill cannelloni tubes with vegetables.\n" +
            "5. Pour some tomato sauce in the baking dish, place cannelloni.\n" +
            "6. Cover with remaining sauce and sprinkle with parmesan.\n" +
            "7. Bake 25-30 min until golden on top.\n" +
            "8. Serve hot."
    },
    nl: {
        title: "Cannelloni met groenten en tomatensaus (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 ovenschaal", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "12 cannelloni buisjes",
            "1 courgette, in blokjes",
            "1 wortel, in blokjes",
            "1 rode paprika, in blokjes",
            "100 g doperwten",
            "1 ui, gehakt",
            "400 g tomatenblokjes",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Verwarm de oven voor op 200°C.\n" +
            "2. Verhit olie in een pan, voeg ui, wortel, paprika en courgette toe, bak 5 min.\n" +
            "3. Voeg doperwten, zout, peper en kruiden toe, bak 2-3 min.\n" +
            "4. Vul de cannelloni met groenten.\n" +
            "5. Giet wat tomatensaus in de ovenschaal, leg de cannelloni erin.\n" +
            "6. Bedek met de resterende saus en bestrooi met Parmezaanse kaas.\n" +
            "7. Bak 25-30 min tot goudbruin.\n" +
            "8. Serveer warm."
    },
    ar: {
        title: "كانيلوني بالخضار وصلصة الطماطم (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "صينية خبز", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "12 أنبوب كانيلوني",
            "1 كوسة مقطعة مكعبات",
            "1 جزرة مقطعة مكعبات",
            "1 فلفل أحمر مقطع مكعبات",
            "100 غ بازلاء خضراء",
            "1 بصلة مفرومة",
            "400 غ طماطم مفرومة",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. سخّن الفرن على 200°م.\n" +
            "2. سخّن الزيت في مقلاة، أضف البصل والجزر والفلفل والكوسة، اطبخ 5 دقائق.\n" +
            "3. أضف البازلاء، الملح، الفلفل والأعشاب، اطبخ 2-3 دقائق.\n" +
            "4. احشو أنابيب الكانيلوني بالخضار.\n" +
            "5. ضع بعض صلصة الطماطم في صينية الخبز، رصّ الكانيلوني.\n" +
            "6. غطّ بالباقي من الصلصة ورشّ بالبارميزان.\n" +
            "7. اخبز 25-30 دقيقة حتى يصبح الوجه ذهبي.\n" +
            "8. قدّم ساخناً."
    }
};
recipesData.plat.cannellonisPouletFromage = {
    country: "italie",
    image: "images/cannellonis-poulet-fromage.jpg",
    fr: {
        title: "Cannellonis au poulet et fromage (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 plat à gratin", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "12 tubes de cannellonis",
            "200 g de poulet cuit émincé",
            "150 g de ricotta",
            "50 g de parmesan râpé",
            "400 g de sauce tomate",
            "1 oignon haché",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Chauffer l’huile dans une poêle, ajouter l’oignon, cuire 2-3 min.\n" +
            "3. Mélanger le poulet avec la ricotta et les herbes.\n" +
            "4. Farcir les tubes de cannellonis avec ce mélange.\n" +
            "5. Verser un peu de sauce tomate au fond du plat, disposer les cannellonis.\n" +
            "6. Recouvrir avec le reste de sauce et saupoudrer de parmesan.\n" +
            "7. Cuire 25-30 min jusqu’à ce que le dessus soit doré.\n" +
            "8. Servir chaud."
    },
    en: {
        title: "Chicken and Cheese Cannelloni (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 baking dish", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "12 cannelloni tubes",
            "200 g cooked sliced chicken",
            "150 g ricotta",
            "50 g grated parmesan",
            "400 g tomato sauce",
            "1 chopped onion",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. Heat oil in a pan, add onion, cook 2-3 min.\n" +
            "3. Mix chicken with ricotta and herbs.\n" +
            "4. Fill cannelloni tubes with this mixture.\n" +
            "5. Pour some tomato sauce in the dish, place cannelloni.\n" +
            "6. Cover with remaining sauce and sprinkle parmesan.\n" +
            "7. Bake 25-30 min until golden on top.\n" +
            "8. Serve hot."
    },
    nl: {
        title: "Cannelloni met kip en kaas (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 ovenschaal", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "12 cannelloni buisjes",
            "200 g gekookte kip in plakjes",
            "150 g ricotta",
            "50 g geraspte Parmezaanse kaas",
            "400 g tomatensaus",
            "1 ui, gehakt",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Verwarm de oven voor op 200°C.\n" +
            "2. Verhit olie in een pan, voeg ui toe, bak 2-3 min.\n" +
            "3. Meng kip met ricotta en kruiden.\n" +
            "4. Vul de cannelloni buisjes met dit mengsel.\n" +
            "5. Giet wat tomatensaus in de ovenschaal, leg cannelloni erin.\n" +
            "6. Bedek met resterende saus en bestrooi met Parmezaanse kaas.\n" +
            "7. Bak 25-30 min tot goudbruin.\n" +
            "8. Serveer warm."
    },
    ar: {
        title: "كانيلوني بالدجاج والجبن (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "صينية خبز", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "12 أنبوب كانيلوني",
            "200 غ دجاج مطهو ومقطع شرائح",
            "150 غ ريكوتا",
            "50 غ جبن بارميزان مبشور",
            "400 غ صلصة طماطم",
            "1 بصلة مفرومة",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. سخّن الفرن على 200°م.\n" +
            "2. سخّن الزيت في مقلاة، أضف البصل، اطبخ 2-3 دقائق.\n" +
            "3. اخلط الدجاج مع الريكوتا والأعشاب.\n" +
            "4. احشو أنابيب الكانيلوني بهذا الخليط.\n" +
            "5. ضع بعض صلصة الطماطم في الصينية، رصّ الكانيلوني.\n" +
            "6. غطّ بالباقي من الصلصة ورشّ بالبارميزان.\n" +
            "7. اخبز 25-30 دقيقة حتى يصبح الوجه ذهبي.\n" +
            "8. قدّم ساخناً."
    }
};
recipesData.plat.polentaLegumes = {
    country: "italie",
    image: "images/polenta-legumes.jpg",
    fr: {
        title: "Polenta gratinée aux légumes (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 plat à gratin", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "200 g de polenta instantanée",
            "800 ml d’eau",
            "1 courgette coupée en dés",
            "1 poivron rouge coupé en dés",
            "100 g de champignons émincés",
            "100 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Porter l’eau à ébullition avec une pincée de sel.\n" +
            "2. Verser la polenta en pluie en remuant constamment.\n" +
            "3. Cuire 5-7 min jusqu’à ce que la polenta épaississe.\n" +
            "4. Chauffer l’huile dans une poêle, faire revenir les légumes 5 min, assaisonner.\n" +
            "5. Verser la polenta dans un plat à gratin, répartir les légumes dessus, saupoudrer de parmesan.\n" +
            "6. Cuire 15 min au four à 200°C jusqu’à ce que le dessus soit doré.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Gratinated Polenta with Vegetables (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 baking dish", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "200 g instant polenta",
            "800 ml water",
            "1 zucchini, diced",
            "1 red pepper, diced",
            "100 g sliced mushrooms",
            "100 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Bring water to a boil with a pinch of salt.\n" +
            "2. Gradually add polenta while stirring constantly.\n" +
            "3. Cook 5-7 min until thickened.\n" +
            "4. Heat oil in a pan, sauté vegetables 5 min, season.\n" +
            "5. Pour polenta into a baking dish, top with vegetables, sprinkle parmesan.\n" +
            "6. Bake 15 min at 200°C until golden on top.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Gegratineerde polenta met groenten (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 ovenschaal", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "200 g instant polenta",
            "800 ml water",
            "1 courgette, in blokjes",
            "1 rode paprika, in blokjes",
            "100 g gesneden champignons",
            "100 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Breng water aan de kook met een snufje zout.\n" +
            "2. Voeg polenta geleidelijk toe terwijl je constant roert.\n" +
            "3. Kook 5-7 min tot het dik wordt.\n" +
            "4. Verhit olie in een pan, bak groenten 5 min, breng op smaak.\n" +
            "5. Giet polenta in een ovenschaal, verdeel groenten erop, bestrooi met Parmezaanse kaas.\n" +
            "6. Bak 15 min op 200°C tot goudbruin.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بولينتا مخبوزة بالخضار (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "صينية خبز", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "200 غ بولينتا سريعة التحضير",
            "800 مل ماء",
            "1 كوسة مقطعة مكعبات",
            "1 فلفل أحمر مقطع مكعبات",
            "100 غ فطر مقطع شرائح",
            "100 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. اغلي الماء مع رشة ملح.\n" +
            "2. أضف البولينتا تدريجياً مع التحريك المستمر.\n" +
            "3. اطبخ 5-7 دقائق حتى تصبح سميكة.\n" +
            "4. سخن الزيت في مقلاة، قلّب الخضار 5 دقائق، تبّل.\n" +
            "5. ضع البولينتا في صينية خبز، ضع الخضار فوقها، رشّ البارميزان.\n" +
            "6. اخبز 15 دقيقة على 200°م حتى يصبح الوجه ذهبي.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.ossoBucoPoulet = {
    country: "italie",
    image: "images/osso-buco-poulet.jpg",
    fr: {
        title: "Osso Buco au poulet et légumes (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 plat à four", "1 cuillère en bois", "1 couteau", "1 planche à découper"],
        ingredients: [
            "4 cuisses de poulet",
            "2 carottes coupées en dés",
            "2 branches de céleri coupées en dés",
            "1 oignon haché",
            "400 g de tomates concassées",
            "150 ml de bouillon de volaille",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre, thym et laurier"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Chauffer l’huile dans une poêle, dorer les cuisses de poulet 5 min de chaque côté.\n" +
            "3. Retirer le poulet et faire revenir l’oignon, carottes et céleri 3-4 min.\n" +
            "4. Ajouter les tomates et le bouillon, assaisonner avec sel, poivre, thym et laurier.\n" +
            "5. Remettre le poulet dans le plat et cuire au four 40 min jusqu’à tendreté.\n" +
            "6. Servir chaud avec polenta ou riz."
    },
    en: {
        title: "Chicken Osso Buco with Vegetables (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 baking dish", "1 wooden spoon", "1 knife", "1 cutting board"],
        ingredients: [
            "4 chicken thighs",
            "2 carrots, diced",
            "2 celery sticks, diced",
            "1 chopped onion",
            "400 g chopped tomatoes",
            "150 ml chicken broth",
            "2 tablespoons olive oil",
            "Salt, pepper, thyme and bay leaf"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Heat oil in a pan, brown chicken thighs 5 min each side.\n" +
            "3. Remove chicken, sauté onion, carrots, celery 3-4 min.\n" +
            "4. Add tomatoes and broth, season with salt, pepper, thyme and bay leaf.\n" +
            "5. Return chicken to dish, bake 40 min until tender.\n" +
            "6. Serve hot with polenta or rice."
    },
    nl: {
        title: "Osso Buco met kip en groenten (voor 4 personen)",
        equipment: ["1 pan", "1 kookpot", "1 ovenschaal", "1 houten lepel", "1 mes", "1 snijplank"],
        ingredients: [
            "4 kippendijen",
            "2 wortels, in blokjes",
            "2 selderijstengels, in blokjes",
            "1 ui, gehakt",
            "400 g tomatenblokjes",
            "150 ml kippenbouillon",
            "2 eetlepels olijfolie",
            "Zout, peper, tijm en laurier"
        ],
        preparation:
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Verhit olie in een pan, bak de kippendijen 5 min per kant.\n" +
            "3. Haal de kip uit de pan, bak ui, wortels en selderij 3-4 min.\n" +
            "4. Voeg tomaten en bouillon toe, breng op smaak met zout, peper, tijm en laurier.\n" +
            "5. Leg de kip terug in de ovenschaal, bak 40 min tot zacht.\n" +
            "6. Serveer warm met polenta of rijst."
    },
    ar: {
        title: "أوسو بوكو بالدجاج والخضار (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "صينية خبز", "ملعقة خشبية", "سكين", "لوح تقطيع"],
        ingredients: [
            "4 أفخاذ دجاج",
            "2 جزرة مقطعة مكعبات",
            "2 عود كرفس مقطع مكعبات",
            "1 بصلة مفرومة",
            "400 غ طماطم مفرومة",
            "150 مل مرق دجاج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل، زعتر وورقة غار"
        ],
        preparation:
            "1. سخّن الفرن على 180°م.\n" +
            "2. سخّن الزيت في مقلاة، حمّر أفخاذ الدجاج 5 دقائق لكل جانب.\n" +
            "3. أزل الدجاج، قلّب البصل والجزر والكرفس 3-4 دقائق.\n" +
            "4. أضف الطماطم والمرق، تبّل بالملح، الفلفل، الزعتر وورقة الغار.\n" +
            "5. ضع الدجاج مرة أخرى في الصينية، اخبز 40 دقيقة حتى ينضج.\n" +
            "6. قدّم ساخناً مع بولينتا أو أرز."
    }
};
recipesData.plat.saltimboccaPoulet = {
    country: "italie",
    image: "images/saltimbocca-poulet.jpg",
    fr: {
        title: "Saltimbocca de poulet (4 personnes)",
        equipment: ["1 poêle", "1 plat de service", "1 couteau", "1 planche à découper"],
        ingredients: [
            "4 escalopes de poulet fines",
            "4 tranches de fromage à pâte dure",
            "8 feuilles de sauge",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre"
        ],
        preparation:
            "1. Assaisonner les escalopes de sel et poivre.\n" +
            "2. Déposer une tranche de fromage et 2 feuilles de sauge sur chaque escalope, replier.\n" +
            "3. Chauffer l’huile dans une poêle, cuire les escalopes 5-6 min de chaque côté jusqu’à doré.\n" +
            "4. Servir chaud avec légumes ou purée."
    },
    en: {
        title: "Chicken Saltimbocca (Serves 4)",
        equipment: ["1 pan", "1 serving dish", "1 knife", "1 cutting board"],
        ingredients: [
            "4 thin chicken cutlets",
            "4 slices hard cheese",
            "8 sage leaves",
            "2 tablespoons olive oil",
            "Salt, pepper"
        ],
        preparation:
            "1. Season chicken cutlets with salt and pepper.\n" +
            "2. Place a slice of cheese and 2 sage leaves on each cutlet, fold.\n" +
            "3. Heat oil in a pan, cook cutlets 5-6 min per side until golden.\n" +
            "4. Serve hot with vegetables or mashed potatoes."
    },
    nl: {
        title: "Saltimbocca van kip (voor 4 personen)",
        equipment: ["1 pan", "1 serveerschaal", "1 mes", "1 snijplank"],
        ingredients: [
            "4 dunne kippenschijfjes",
            "4 plakken harde kaas",
            "8 salieblaadjes",
            "2 eetlepels olijfolie",
            "Zout, peper"
        ],
        preparation:
            "1. Breng kip op smaak met zout en peper.\n" +
            "2. Leg een plak kaas en 2 salieblaadjes op elk schijfje, vouw dicht.\n" +
            "3. Verhit olie in een pan, bak 5-6 min per kant tot goudbruin.\n" +
            "4. Serveer warm met groenten of puree."
    },
    ar: {
        title: "سالتيمبوكا بالدجاج (تكفي 4 أشخاص)",
        equipment: ["مقلاة", "طبق تقديم", "سكين", "لوح تقطيع"],
        ingredients: [
            "4 شرائح دجاج رقيقة",
            "4 شرائح جبن صلب",
            "8 أوراق مريمية",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل"
        ],
        preparation:
            "1. تبّل شرائح الدجاج بالملح والفلفل.\n" +
            "2. ضع شريحة جبن وورقتين من المريمية على كل شريحة، واطوِها.\n" +
            "3. سخّن الزيت في مقلاة، اطبخ الشرائح 5-6 دقائق لكل جانب حتى تتحمر.\n" +
            "4. قدّم ساخناً مع الخضار أو البطاطس المهروسة."
    }
};
recipesData.plat.parmigianaAubergines = {
    country: "italie",
    image: "images/parmigiana-aubergines.jpg",
    fr: {
        title: "Parmigiana d’aubergines (4 personnes)",
        equipment: ["1 poêle", "1 plat à gratin", "1 couteau", "1 planche à découper"],
        ingredients: [
            "2 aubergines coupées en tranches",
            "400 g de tomates concassées",
            "150 g de mozzarella râpée",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et basilic frais"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Faire revenir les tranches d’aubergines dans l’huile 3-4 min par côté.\n" +
            "3. Dans un plat à gratin, disposer une couche d’aubergines, ajouter sauce tomate, mozzarella et parmesan.\n" +
            "4. Répéter les couches jusqu’à épuisement.\n" +
            "5. Cuire 25-30 min jusqu’à gratiné.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Eggplant Parmigiana (Serves 4)",
        equipment: ["1 pan", "1 baking dish", "1 knife", "1 cutting board"],
        ingredients: [
            "2 eggplants, sliced",
            "400 g chopped tomatoes",
            "150 g grated mozzarella",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and fresh basil"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. Sauté eggplant slices in oil 3-4 min per side.\n" +
            "3. In a baking dish, layer eggplants, tomato sauce, mozzarella, parmesan.\n" +
            "4. Repeat layers until finished.\n" +
            "5. Bake 25-30 min until gratinated.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Parmigiana van aubergine (voor 4 personen)",
        equipment: ["1 pan", "1 ovenschaal", "1 mes", "1 snijplank"],
        ingredients: [
            "2 aubergines, in plakjes",
            "400 g tomatenblokjes",
            "150 g geraspte mozzarella",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en verse basilicum"
        ],
        preparation:
            "1. Verwarm oven voor op 200°C.\n" +
            "2. Bak aubergineplakjes in olie 3-4 min per kant.\n" +
            "3. Leg in een ovenschaal, voeg tomatensaus, mozzarella, Parmezaanse kaas toe.\n" +
            "4. Herhaal lagen tot alles op is.\n" +
            "5. Bak 25-30 min tot gegratineerd.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "بارميجيانا الباذنجان (تكفي 4 أشخاص)",
        equipment: ["مقلاة", "صينية خبز", "سكين", "لوح تقطيع"],
        ingredients: [
            "2 باذنجان مقطع شرائح",
            "400 غ طماطم مفرومة",
            "150 غ موزاريلا مبشور",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وريحان طازج"
        ],
        preparation:
            "1. سخّن الفرن على 200°م.\n" +
            "2. اقلي شرائح الباذنجان في الزيت 3-4 دقائق لكل جانب.\n" +
            "3. ضع في صينية الخبز، أضف صلصة الطماطم، الموزاريلا والبارميزان.\n" +
            "4. كرر الطبقات حتى تنتهي.\n" +
            "5. اخبز 25-30 دقيقة حتى يتحمر الوجه.\n" +
            "6. قدّم ساخناً."
    }
};
recipesData.plat.frittataLegumes = {
    country: "italie",
    image: "images/frittata-legumes.jpg",
    fr: {
        title: "Frittata aux légumes (4 personnes)",
        equipment: ["1 poêle", "1 fouet", "1 bol", "1 couteau", "1 planche à découper"],
        ingredients: [
            "6 œufs",
            "1 courgette coupée en dés",
            "1 poivron rouge coupé en dés",
            "100 g de champignons émincés",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Battre les œufs avec sel, poivre et parmesan.\n" +
            "2. Chauffer l’huile dans une poêle, cuire les légumes 5 min.\n" +
            "3. Verser les œufs battus sur les légumes.\n" +
            "4. Cuire à feu doux 10-12 min jusqu’à ce que les œufs soient pris.\n" +
            "5. Retourner la frittata si possible ou finir sous le gril 2-3 min.\n" +
            "6. Servir chaud ou tiède."
    },
    en: {
        title: "Vegetable Frittata (Serves 4)",
        equipment: ["1 pan", "1 whisk", "1 bowl", "1 knife", "1 cutting board"],
        ingredients: [
            "6 eggs",
            "1 zucchini, diced",
            "1 red pepper, diced",
            "100 g sliced mushrooms",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Beat eggs with salt, pepper and parmesan.\n" +
            "2. Heat oil in a pan, cook vegetables 5 min.\n" +
            "3. Pour beaten eggs over vegetables.\n" +
            "4. Cook on low heat 10-12 min until eggs set.\n" +
            "5. Flip frittata if possible or finish under grill 2-3 min.\n" +
            "6. Serve hot or warm."
    },
    nl: {
        title: "Frittata met groenten (voor 4 personen)",
        equipment: ["1 pan", "1 garde", "1 kom", "1 mes", "1 snijplank"],
        ingredients: [
            "6 eieren",
            "1 courgette, in blokjes",
            "1 rode paprika, in blokjes",
            "100 g gesneden champignons",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Klop de eieren met zout, peper en Parmezaanse kaas.\n" +
            "2. Verhit olie in een pan, bak groenten 5 min.\n" +
            "3. Giet de eieren over de groenten.\n" +
            "4. Bak op laag vuur 10-12 min tot de eieren gestold zijn.\n" +
            "5. Keer de frittata indien mogelijk of zet 2-3 min onder grill.\n" +
            "6. Serveer warm of lauwwarm."
    },
    ar: {
        title: "فريتاتا بالخضار (تكفي 4 أشخاص)",
        equipment: ["مقلاة", "خفاق", "وعاء", "سكين", "لوح تقطيع"],
        ingredients: [
            "6 بيضات",
            "1 كوسة مقطعة مكعبات",
            "1 فلفل أحمر مقطع مكعبات",
            "100 غ فطر مقطع شرائح",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. اخفق البيض مع الملح، الفلفل والبارميزان.\n" +
            "2. سخّن الزيت في مقلاة، اطبخ الخضار 5 دقائق.\n" +
            "3. صب البيض المخفوق فوق الخضار.\n" +
            "4. اطبخ على نار هادئة 10-12 دقيقة حتى يتماسك البيض.\n" +
            "5. اقلب الفريتاتا إذا أمكن أو ضعها تحت الشواية 2-3 دقائق.\n" +
            "6. قدّم ساخناً أو دافئاً."
    }
};
recipesData.plat.involtiniPoulet = {
    country: "italie",
    image: "images/involtini-poulet.jpg",
    fr: {
        title: "Involtini de poulet au fromage et épinards (4 personnes)",
        equipment: ["1 poêle", "1 plat à four", "1 couteau", "1 planche à découper"],
        ingredients: [
            "4 escalopes de poulet fines",
            "100 g d’épinards frais",
            "100 g de fromage râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Préchauffer le four à 180°C.\n" +
            "2. Assaisonner les escalopes de poulet avec sel et poivre.\n" +
            "3. Déposer les épinards et le fromage sur chaque escalope.\n" +
            "4. Rouler les escalopes et les maintenir fermées.\n" +
            "5. Faire dorer les involtini dans une poêle avec l’huile 3-4 min.\n" +
            "6. Terminer la cuisson au four pendant 15 min.\n" +
            "7. Servir chaud avec légumes ou pâtes."
    },
    en: {
        title: "Chicken Involtini with Cheese and Spinach (Serves 4)",
        equipment: ["1 pan", "1 baking dish", "1 knife", "1 cutting board"],
        ingredients: [
            "4 thin chicken cutlets",
            "100 g fresh spinach",
            "100 g grated cheese",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Preheat oven to 180°C.\n" +
            "2. Season chicken cutlets with salt and pepper.\n" +
            "3. Place spinach and cheese on each cutlet.\n" +
            "4. Roll the cutlets tightly.\n" +
            "5. Brown involtini in a pan with oil for 3-4 min.\n" +
            "6. Finish cooking in the oven for 15 min.\n" +
            "7. Serve hot with vegetables or pasta."
    },
    nl: {
        title: "Kip involtini met kaas en spinazie (voor 4 personen)",
        equipment: ["1 pan", "1 ovenschaal", "1 mes", "1 snijplank"],
        ingredients: [
            "4 dunne kipschnitzels",
            "100 g verse spinazie",
            "100 g geraspte kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Breng de kip op smaak met zout en peper.\n" +
            "3. Leg spinazie en kaas op elke schnitzel.\n" +
            "4. Rol de kip stevig op.\n" +
            "5. Bak de involtini 3-4 min in olie tot goudbruin.\n" +
            "6. Laat verder garen in de oven gedurende 15 min.\n" +
            "7. Serveer warm met groenten of pasta."
    },
    ar: {
        title: "إنفولتيني الدجاج بالجبن والسبانخ (تكفي 4 أشخاص)",
        equipment: ["مقلاة", "صينية خبز", "سكين", "لوح تقطيع"],
        ingredients: [
            "4 شرائح دجاج رقيقة",
            "100 غ سبانخ طازجة",
            "100 غ جبن مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. سخّن الفرن على 180°م.\n" +
            "2. تبّل شرائح الدجاج بالملح والفلفل.\n" +
            "3. ضع السبانخ والجبن على كل شريحة.\n" +
            "4. لفّ شرائح الدجاج بإحكام.\n" +
            "5. حمّر الإنفولتيني في الزيت 3-4 دقائق.\n" +
            "6. أكمل الطهي في الفرن لمدة 15 دقيقة.\n" +
            "7. قدّم ساخناً مع الخضار أو الباستا."
    }
};

recipesData.plat.patesTomate = {
    country: "italie",
    image: "images/pates-tomate.jpg",
    fr: {
        title: "Pâtes à la sauce tomate classique (4 personnes)",
        equipment: [
            "1 casserole",
            "1 cuillère en bois",
            "1 passoire",
            "1 couteau",
            "1 planche à découper"
        ],
        ingredients: [
            "400 g de pâtes (spaghetti, penne ou fusilli)",
            "500 g de tomates concassées",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "Quelques feuilles de basilic frais",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Pour 4 personnes.\n" +
            "1. Faire bouillir de l’eau salée dans une casserole.\n" +
            "2. Cuire les pâtes selon les instructions du paquet, puis égoutter.\n" +
            "3. Dans une poêle, chauffer l’huile d’olive, ajouter l’ail et faire revenir 1-2 minutes.\n" +
            "4. Ajouter les tomates concassées, sel, poivre et laisser mijoter 10-15 minutes.\n" +
            "5. Ajouter le basilic frais haché.\n" +
            "6. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Classic Tomato Sauce (Serves 4)",
        equipment: [
            "1 pot",
            "1 wooden spoon",
            "1 colander",
            "1 knife",
            "1 cutting board"
        ],
        ingredients: [
            "400 g pasta (spaghetti, penne, or fusilli)",
            "500 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "Some fresh basil leaves",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Bring salted water to a boil in a pot.\n" +
            "2. Cook pasta according to package instructions, then drain.\n" +
            "3. In a pan, heat olive oil, add garlic and sauté 1-2 minutes.\n" +
            "4. Add chopped tomatoes, salt, pepper and simmer 10-15 minutes.\n" +
            "5. Add chopped fresh basil.\n" +
            "6. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met klassieke tomatensaus (voor 4 personen)",
        equipment: [
            "1 pan",
            "1 houten lepel",
            "1 vergiet",
            "1 mes",
            "1 snijplank"
        ],
        ingredients: [
            "400 g pasta (spaghetti, penne of fusilli)",
            "500 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "Enkele verse basilicumblaadjes",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Breng gezouten water aan de kook in een pan.\n" +
            "2. Kook de pasta volgens de aanwijzingen op de verpakking en giet af.\n" +
            "3. Verhit in een pan de olijfolie, voeg knoflook toe en bak 1-2 minuten.\n" +
            "4. Voeg tomatenblokjes, zout en peper toe en laat 10-15 minuten sudderen.\n" +
            "5. Voeg verse basilicum toe.\n" +
            "6. Meng de pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة الطماطم الكلاسيكية (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "ملعقة خشبية",
            "مصفاة",
            "سكين",
            "لوح تقطيع"
        ],
        ingredients: [
            "400 غ باستا (سباغيتي، بيني أو فوسيلي)",
            "500 غ طماطم مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "بعض أوراق الريحان الطازج",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اغلي الماء مع الملح في قدر.\n" +
            "2. اطبخ الباستا حسب التعليمات ثم صفيها.\n" +
            "3. في مقلاة، سخن زيت الزيتون وأضف الثوم وقلّب 1-2 دقيقة.\n" +
            "4. أضف الطماطم المفرومة، الملح والفلفل واتركها تنضج 10-15 دقيقة.\n" +
            "5. أضف الريحان الطازج المفروم.\n" +
            "6. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesBolognaise = {
    country: "italie",
    image: "images/pates-bolognaise.jpg",
    fr: {
        title: "Pâtes à la sauce bolognaise (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "400 g de pâtes",
            "300 g de viande hachée (bœuf ou poulet)",
            "500 g de tomates concassées",
            "1 oignon, haché",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "1 carotte, râpée",
            "1 branche de céleri, hachée",
            "1 feuille de laurier",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer l’huile, ajouter l’oignon et l’ail, faire revenir 2-3 min.\n" +
            "4. Ajouter la carotte, le céleri et la viande, cuire jusqu’à ce que la viande soit dorée.\n" +
            "5. Ajouter les tomates concassées, la feuille de laurier, sel et poivre, laisser mijoter 15-20 min.\n" +
            "6. Retirer la feuille de laurier, mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Bolognese Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "400 g pasta",
            "300 g minced meat (beef or chicken)",
            "500 g chopped tomatoes",
            "1 onion, chopped",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "1 carrot, grated",
            "1 celery stalk, chopped",
            "1 bay leaf",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat oil, add onion and garlic, sauté 2-3 min.\n" +
            "4. Add carrot, celery and meat, cook until meat is browned.\n" +
            "5. Add chopped tomatoes, bay leaf, salt and pepper, simmer 15-20 min.\n" +
            "6. Remove bay leaf, mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met bolognesesaus (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "400 g pasta",
            "300 g gehakt (rund of kip)",
            "500 g tomatenblokjes",
            "1 ui, gehakt",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "1 wortel, geraspt",
            "1 stengel selderij, gehakt",
            "1 laurierblad",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit olie in een pan, voeg ui en knoflook toe en bak 2-3 min.\n" +
            "4. Voeg wortel, selderij en gehakt toe en bak tot het vlees bruin is.\n" +
            "5. Voeg tomatenblokjes, laurierblad, zout en peper toe en laat 15-20 min sudderen.\n" +
            "6. Verwijder het laurierblad, meng pasta met saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة بولونيز (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "400 غ باستا",
            "300 غ لحم مفروم (لحم بقري أو دجاج)",
            "500 غ طماطم مفرومة",
            "1 بصلة، مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "1 جزرة، مبشورة",
            "1 عود كرفس، مفروم",
            "1 ورقة غار",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الزيت وأضف البصل والثوم وقلّب 2-3 دقائق.\n" +
            "4. أضف الجزرة والكرفس واللحم واطبخ حتى يتحمر اللحم.\n" +
            "5. أضف الطماطم المفرومة، ورقة الغار، الملح والفلفل، واتركها 15-20 دقيقة على نار هادئة.\n" +
            "6. أزل ورقة الغار، اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesFromage = {
    country: "italie",
    image: "images/pates-fromage.jpg",
    fr: {
        title: "Pâtes à la sauce fromage (4 personnes)",
        equipment: ["1 casserole", "1 cuillère en bois", "1 passoire", "1 bol", "1 fouet"],
        ingredients: [
            "400 g de pâtes",
            "200 ml de crème liquide",
            "100 g de fromage râpé (parmesan, emmental ou mozzarella)",
            "1 pincée de noix de muscade",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une casserole, chauffer la crème, ajouter le fromage râpé et la noix de muscade, mélanger jusqu’à obtenir une sauce onctueuse.\n" +
            "4. Ajouter sel et poivre.\n" +
            "5. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Cheese Sauce (Serves 4)",
        equipment: ["1 pot", "1 wooden spoon", "1 colander", "1 bowl", "1 whisk"],
        ingredients: [
            "400 g pasta",
            "200 ml cream",
            "100 g grated cheese (parmesan, emmental, or mozzarella)",
            "1 pinch nutmeg",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pot, heat cream, add grated cheese and nutmeg, stir until smooth.\n" +
            "4. Add salt and pepper.\n" +
            "5. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met kaassaus (voor 4 personen)",
        equipment: ["1 pan", "1 houten lepel", "1 vergiet", "1 kom", "1 garde"],
        ingredients: [
            "400 g pasta",
            "200 ml room",
            "100 g geraspte kaas (parmezaan, emmentaler of mozzarella)",
            "1 snufje nootmuskaat",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit in een pan de room, voeg geraspte kaas en nootmuskaat toe en roer tot een gladde saus.\n" +
            "4. Voeg zout en peper toe.\n" +
            "5. Meng de pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة الجبن (تكفي 4 أشخاص)",
        equipment: ["قدر", "ملعقة خشبية", "مصفاة", "وعاء", "خفاق"],
        ingredients: [
            "400 غ باستا",
            "200 مل كريمة سائلة",
            "100 غ جبن مبشور (بارميزان، إمنتال أو موزاريلا)",
            "رشة جوزة الطيب",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في قدر، سخن الكريمة وأضف الجبن المبشور وجوزة الطيب، حرك حتى تصبح صلصة ناعمة.\n" +
            "4. أضف الملح والفلفل.\n" +
            "5. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesAlfredo = {
    country: "italie",
    image: "images/pates-alfredo.jpg",
    fr: {
        title: "Pâtes à la sauce Alfredo (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire"],
        ingredients: [
            "400 g de pâtes",
            "200 ml de crème liquide",
            "50 g de beurre",
            "100 g de parmesan râpé",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, faire fondre le beurre, ajouter la crème et mélanger.\n" +
            "4. Ajouter le parmesan râpé, sel et poivre.\n" +
            "5. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Alfredo Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander"],
        ingredients: [
            "400 g pasta",
            "200 ml cream",
            "50 g butter",
            "100 g grated parmesan",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, melt butter, add cream and stir.\n" +
            "4. Add grated parmesan, salt and pepper.\n" +
            "5. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met Alfredo saus (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet"],
        ingredients: [
            "400 g pasta",
            "200 ml room",
            "50 g boter",
            "100 g geraspte parmezaan",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Smelt in een pan de boter, voeg room toe en roer.\n" +
            "4. Voeg geraspte parmezaan, zout en peper toe.\n" +
            "5. Meng pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة ألفريدو (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة"],
        ingredients: [
            "400 غ باستا",
            "200 مل كريمة سائلة",
            "50 غ زبدة",
            "100 غ جبن بارميزان مبشور",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، ذوب الزبدة وأضف الكريمة وحرّك.\n" +
            "4. أضف الجبن المبشور، الملح والفلفل.\n" +
            "5. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesPesto = {
    country: "italie",
    image: "images/pates-pesto.jpg",
    fr: {
        title: "Pâtes au pesto (4 personnes)",
        equipment: ["1 casserole", "1 mixeur ou mortier", "1 cuillère en bois", "1 passoire"],
        ingredients: [
            "400 g de pâtes",
            "50 g de basilic frais",
            "50 g de parmesan râpé",
            "30 g de pignons de pin",
            "2 gousses d'ail",
            "100 ml d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans un mixeur, mixer le basilic, le parmesan, les pignons et l’ail en ajoutant l’huile progressivement jusqu’à obtenir une sauce homogène.\n" +
            "4. Ajouter sel et poivre.\n" +
            "5. Mélanger les pâtes avec le pesto et servir chaud."
    },
    en: {
        title: "Pasta with Pesto Sauce (Serves 4)",
        equipment: ["1 pot", "1 blender or mortar", "1 wooden spoon", "1 colander"],
        ingredients: [
            "400 g pasta",
            "50 g fresh basil",
            "50 g grated parmesan",
            "30 g pine nuts",
            "2 garlic cloves",
            "100 ml olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a blender, mix basil, parmesan, pine nuts and garlic, adding oil gradually until smooth.\n" +
            "4. Add salt and pepper.\n" +
            "5. Mix pasta with pesto and serve hot."
    },
    nl: {
        title: "Pasta met pestosaus (voor 4 personen)",
        equipment: ["1 pan", "1 blender of vijzel", "1 houten lepel", "1 vergiet"],
        ingredients: [
            "400 g pasta",
            "50 g verse basilicum",
            "50 g geraspte parmezaan",
            "30 g pijnboompitten",
            "2 teentjes knoflook",
            "100 ml olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Mix in een blender basilicum, parmezaan, pijnboompitten en knoflook, voeg langzaam olie toe tot een gladde saus.\n" +
            "4. Voeg zout en peper toe.\n" +
            "5. Meng pasta met pesto en serveer warm."
    },
    ar: {
        title: "باستا بصلصة البيستو (تكفي 4 أشخاص)",
        equipment: ["قدر", "خلاط أو مدقة", "ملعقة خشبية", "مصفاة"],
        ingredients: [
            "400 غ باستا",
            "50 غ ريحان طازج",
            "50 غ جبن بارميزان مبشور",
            "30 غ صنوبر",
            "2 فص ثوم",
            "100 مل زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في الخلاط، اخلط الريحان، الجبن، الصنوبر والثوم مع إضافة الزيت تدريجياً حتى تصبح الصلصة ناعمة.\n" +
            "4. أضف الملح والفلفل.\n" +
            "5. اخلط الباستا مع صلصة البيستو وقدّمها ساخنة."
    }
};
recipesData.plat.patesArrabiata = {
    country: "italie",
    image: "images/pates-arrabiata.jpg",
    fr: {
        title: "Pâtes à la sauce arrabiata (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire"],
        ingredients: [
            "400 g de pâtes",
            "500 g de tomates concassées",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "1 piment rouge, émincé",
            "Sel et poivre selon goût",
            "Quelques feuilles de persil frais"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer l’huile, ajouter l’ail et le piment, faire revenir 1-2 min.\n" +
            "4. Ajouter les tomates concassées, sel et poivre, laisser mijoter 10-15 min.\n" +
            "5. Ajouter le persil haché.\n" +
            "6. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Arrabiata Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander"],
        ingredients: [
            "400 g pasta",
            "500 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "1 red chili, sliced",
            "Salt and pepper to taste",
            "Some fresh parsley leaves"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat oil, add garlic and chili, sauté 1-2 min.\n" +
            "4. Add chopped tomatoes, salt and pepper, simmer 10-15 min.\n" +
            "5. Add chopped parsley.\n" +
            "6. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met Arrabiata saus (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet"],
        ingredients: [
            "400 g pasta",
            "500 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "1 rode chili, in plakjes",
            "Zout en peper naar smaak",
            "Enkele verse peterselieblaadjes"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit olie in een pan, voeg knoflook en chili toe en bak 1-2 min.\n" +
            "4. Voeg tomatenblokjes, zout en peper toe en laat 10-15 min sudderen.\n" +
            "5. Voeg gehakte peterselie toe.\n" +
            "6. Meng pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة أرابياتا (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة"],
        ingredients: [
            "400 غ باستا",
            "500 غ طماطم مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "1 فلفل أحمر حار، مقطع شرائح",
            "ملح وفلفل حسب الرغبة",
            "بعض أوراق البقدونس الطازج"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الزيت، أضف الثوم والفلفل، وقلّب 1-2 دقيقة.\n" +
            "4. أضف الطماطم المفرومة، الملح والفلفل، واتركها تنضج 10-15 دقيقة.\n" +
            "5. أضف البقدونس المفروم.\n" +
            "6. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesQuatreFromages = {
    country: "italie",
    image: "images/pates-quatre-fromages.jpg",
    fr: {
        title: "Pâtes Quatre Fromages (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 bol", "1 fouet"],
        ingredients: [
            "400 g de pâtes",
            "200 ml de crème liquide",
            "50 g de parmesan râpé",
            "50 g de gorgonzola ou autre fromage bleu doux",
            "50 g d’emmental râpé",
            "50 g de mozzarella râpée",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer la crème, ajouter tous les fromages et mélanger jusqu’à obtenir une sauce onctueuse.\n" +
            "4. Ajouter sel et poivre.\n" +
            "5. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Four Cheese Pasta (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 bowl", "1 whisk"],
        ingredients: [
            "400 g pasta",
            "200 ml cream",
            "50 g grated parmesan",
            "50 g gorgonzola or mild blue cheese",
            "50 g grated emmental",
            "50 g grated mozzarella",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat cream, add all cheeses and stir until smooth.\n" +
            "4. Add salt and pepper.\n" +
            "5. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta vier kazen (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet", "1 kom", "1 garde"],
        ingredients: [
            "400 g pasta",
            "200 ml room",
            "50 g geraspte parmezaan",
            "50 g gorgonzola of zachte blauwe kaas",
            "50 g geraspte emmentaler",
            "50 g geraspte mozzarella",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit in een pan de room, voeg alle kazen toe en roer tot een gladde saus.\n" +
            "4. Voeg zout en peper toe.\n" +
            "5. Meng pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بأربعة أجبان (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "وعاء", "خفاق"],
        ingredients: [
            "400 غ باستا",
            "200 مل كريمة سائلة",
            "50 غ جبن بارميزان مبشور",
            "50 غ غورغونزولا أو جبن أزرق خفيف",
            "50 غ إمنتال مبشور",
            "50 غ موزاريلا مبشور",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الكريمة وأضف جميع الأجبان وحرّك حتى تصبح الصلصة ناعمة.\n" +
            "4. أضف الملح والفلفل.\n" +
            "5. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesPuttanesca = {
    country: "italie",
    image: "images/pates-puttanesca.jpg",
    fr: {
        title: "Pâtes à la sauce puttanesca (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "400 g de pâtes",
            "500 g de tomates concassées",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "100 g d’olives noires dénoyautées",
            "Capres 1 cuillère à soupe",
            "1 pincée de piment",
            "Sel et poivre selon goût",
            "Quelques feuilles de persil frais"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer l’huile, ajouter l’ail et le piment, faire revenir 1-2 min.\n" +
            "4. Ajouter les tomates, les olives et les câpres, sel et poivre, laisser mijoter 10-15 min.\n" +
            "5. Ajouter le persil haché.\n" +
            "6. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Puttanesca Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "400 g pasta",
            "500 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "100 g pitted black olives",
            "1 tablespoon capers",
            "1 pinch chili",
            "Salt and pepper to taste",
            "Some fresh parsley leaves"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat oil, add garlic and chili, sauté 1-2 min.\n" +
            "4. Add tomatoes, olives, capers, salt and pepper, simmer 10-15 min.\n" +
            "5. Add chopped parsley.\n" +
            "6. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met Puttanesca saus (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "400 g pasta",
            "500 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "100 g ontpitte zwarte olijven",
            "1 eetlepel kappertjes",
            "1 snufje chili",
            "Zout en peper naar smaak",
            "Enkele verse peterselieblaadjes"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit olie in een pan, voeg knoflook en chili toe en bak 1-2 min.\n" +
            "4. Voeg tomaten, olijven, kappertjes, zout en peper toe en laat 10-15 min sudderen.\n" +
            "5. Voeg gehakte peterselie toe.\n" +
            "6. Meng pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة بوتانيسكا (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "400 غ باستا",
            "500 غ طماطم مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "100 غ زيتون أسود منزوع النواة",
            "1 ملعقة كبيرة كبر",
            "رشة فلفل حار",
            "ملح وفلفل حسب الرغبة",
            "بعض أوراق البقدونس الطازج"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الزيت، أضف الثوم والفلفل، وقلّب 1-2 دقيقة.\n" +
            "4. أضف الطماطم، الزيتون، الكبر، الملح والفلفل، واتركها تنضج 10-15 دقيقة.\n" +
            "5. أضف البقدونس المفروم.\n" +
            "6. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.patesPuttanescaAnchois = {
    country: "italie",
    image: "images/pates-puttanesca-anchois.jpg",
    fr: {
        title: "Pâtes à la sauce puttanesca traditionnelle (4 personnes)",
        equipment: ["1 casserole", "1 poêle", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "400 g de pâtes",
            "500 g de tomates concassées",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe d’huile d’olive (45 ml)",
            "50 g d’anchois en conserve, égouttés",
            "100 g d’olives noires dénoyautées",
            "1 cuillère à soupe de câpres",
            "1 pincée de piment",
            "Sel et poivre selon goût",
            "Quelques feuilles de persil frais"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer l’huile, ajouter l’ail et le piment, faire revenir 1-2 min.\n" +
            "4. Ajouter les anchois, tomates, olives et câpres, sel et poivre, laisser mijoter 10-15 min.\n" +
            "5. Ajouter le persil haché.\n" +
            "6. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Traditional Puttanesca Sauce (Serves 4)",
        equipment: ["1 pot", "1 pan", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "400 g pasta",
            "500 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "50 g canned anchovies, drained",
            "100 g pitted black olives",
            "1 tablespoon capers",
            "1 pinch chili",
            "Salt and pepper to taste",
            "Some fresh parsley leaves"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat oil, add garlic and chili, sauté 1-2 min.\n" +
            "4. Add anchovies, tomatoes, olives, capers, salt and pepper, simmer 10-15 min.\n" +
            "5. Add chopped parsley.\n" +
            "6. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met traditionele Puttanesca saus (voor 4 personen)",
        equipment: ["1 pan", "1 pan", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "400 g pasta",
            "500 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "50 g ansjovis uit blik, uitgelekt",
            "100 g ontpitte zwarte olijven",
            "1 eetlepel kappertjes",
            "1 snufje chili",
            "Zout en peper naar smaak",
            "Enkele verse peterselieblaadjes"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook de pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit olie in een pan, voeg knoflook en chili toe en bak 1-2 min.\n" +
            "4. Voeg ansjovis, tomaten, olijven en kappertjes toe, zout en peper, laat 10-15 min sudderen.\n" +
            "5. Voeg gehakte peterselie toe.\n" +
            "6. Meng pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة بوتانيسكا التقليدية (تكفي 4 أشخاص)",
        equipment: ["قدر", "مقلاة", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "400 غ باستا",
            "500 غ طماطم مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "50 غ أنشوجة معلبة، مصفاة",
            "100 غ زيتون أسود منزوع النواة",
            "1 ملعقة كبيرة كبر",
            "رشة فلفل حار",
            "ملح وفلفل حسب الرغبة",
            "بعض أوراق البقدونس الطازج"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الزيت، أضف الثوم والفلفل، وقلّب 1-2 دقيقة.\n" +
            "4. أضف الأنشوجة، الطماطم، الزيتون، الكبر، الملح والفلفل، واتركها تنضج 10-15 دقيقة.\n" +
            "5. أضف البقدونس المفروم.\n" +
            "6. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};

// 2. Pâtes à la sauce tomate et basilic
recipesData.plat.patesTomateBasilic = {
    country: "italie",
    image: "images/pates-tomate-basilic.jpg",
    fr: {
        title: "Pâtes à la sauce tomate et basilic (4 personnes)",
        equipment: ["1 casserole", "1 cuillère en bois", "1 passoire", "1 couteau", "1 planche à découper"],
        ingredients: [
            "400 g de pâtes",
            "500 g de tomates concassées",
            "2 gousses d'ail, hachées",
            "3 cuillères à soupe huile d’olive (45 ml)",
            "Quelques feuilles de basilic frais",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Faire bouillir de l’eau salée et cuire les pâtes selon le paquet.\n" +
            "2. Égoutter les pâtes.\n" +
            "3. Dans une poêle, chauffer l’huile, ajouter l’ail, faire revenir 1-2 min.\n" +
            "4. Ajouter les tomates concassées, sel, poivre et laisser mijoter 10 min.\n" +
            "5. Ajouter le basilic haché.\n" +
            "6. Mélanger les pâtes avec la sauce et servir chaud."
    },
    en: {
        title: "Pasta with Tomato and Basil Sauce (Serves 4)",
        equipment: ["1 pot", "1 wooden spoon", "1 colander", "1 knife", "1 cutting board"],
        ingredients: [
            "400 g pasta",
            "500 g chopped tomatoes",
            "2 garlic cloves, chopped",
            "3 tablespoons olive oil (45 ml)",
            "Some fresh basil leaves",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Boil salted water and cook pasta according to package instructions.\n" +
            "2. Drain pasta.\n" +
            "3. In a pan, heat oil, add garlic, sauté 1-2 min.\n" +
            "4. Add chopped tomatoes, salt, pepper and simmer 10 min.\n" +
            "5. Add chopped basil.\n" +
            "6. Mix pasta with sauce and serve hot."
    },
    nl: {
        title: "Pasta met tomaat en basilicumsaus (voor 4 personen)",
        equipment: ["1 pan", "1 houten lepel", "1 vergiet", "1 mes", "1 snijplank"],
        ingredients: [
            "400 g pasta",
            "500 g tomatenblokjes",
            "2 teentjes knoflook, gehakt",
            "3 eetlepels olijfolie (45 ml)",
            "Enkele verse basilicumblaadjes",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Breng gezouten water aan de kook en kook pasta volgens verpakking.\n" +
            "2. Giet af.\n" +
            "3. Verhit olie in een pan, voeg knoflook toe en bak 1-2 min.\n" +
            "4. Voeg tomatenblokjes, zout en peper toe en laat 10 min sudderen.\n" +
            "5. Voeg fijngehakte basilicum toe.\n" +
            "6. Meng de pasta met de saus en serveer warm."
    },
    ar: {
        title: "باستا بصلصة الطماطم والريحان (تكفي 4 أشخاص)",
        equipment: ["قدر", "ملعقة خشبية", "مصفاة", "سكين", "لوح تقطيع"],
        ingredients: [
            "400 غ باستا",
            "500 غ طماطم مفرومة",
            "2 فص ثوم، مفروم",
            "3 ملاعق كبيرة زيت زيتون (45 مل)",
            "بعض أوراق الريحان الطازج",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. اغلي الماء المملح واطبخ الباستا حسب التعليمات.\n" +
            "2. صفي الباستا.\n" +
            "3. في مقلاة، سخن الزيت وأضف الثوم وقلّب 1-2 دقيقة.\n" +
            "4. أضف الطماطم المفرومة، الملح والفلفل واتركها تنضج 10 دقائق.\n" +
            "5. أضف الريحان المفروم.\n" +
            "6. اخلط الباستا مع الصلصة وقدّمها ساخنة."
    }
};
recipesData.plat.pizzaMargherita = {
    country: "italie",
    image: "images/pizza-margherita.jpg",
    fr: {
        title: "Pizza Margherita (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "Quelques feuilles de basilic frais",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque de cuisson légèrement huilée.\n" +
            "3. Étaler la sauce tomate sur la pâte.\n" +
            "4. Répartir la mozzarella sur la sauce.\n" +
            "5. Ajouter sel, poivre et quelques feuilles de basilic.\n" +
            "6. Cuire au four 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Ajouter un filet d’huile d’olive avant de servir."
    },
    en: {
        title: "Margherita Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "Some fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled baking tray.\n" +
            "3. Spread tomato sauce over the dough.\n" +
            "4. Sprinkle mozzarella on top.\n" +
            "5. Add salt, pepper and some basil leaves.\n" +
            "6. Bake 12-15 minutes until the crust is golden.\n" +
            "7. Drizzle with olive oil before serving."
    },
    nl: {
        title: "Margherita pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "Enkele verse basilicumblaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid de tomatensaus over het deeg.\n" +
            "4. Strooi de mozzarella erop.\n" +
            "5. Voeg zout, peper en wat basilicum toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Besprenkel met olijfolie voor het serveren."
    },
    ar: {
        title: "بيتزا مارغريتا (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ جبن موزاريلا مبشور",
            "بعض أوراق الريحان الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية خبز مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم على العجينة.\n" +
            "4. رشّ جبن الموزاريلا فوق الصلصة.\n" +
            "5. أضف الملح والفلفل وبعض أوراق الريحان.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. أضف قليل من زيت الزيتون قبل التقديم."
    }
};
recipesData.plat.pizzaQuatreFromages = {
    country: "italie",
    image: "images/pizza-quatre-fromages.jpg",
    fr: {
        title: "Pizza Quatre Fromages (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "150 g de mozzarella râpée",
            "50 g de parmesan râpé",
            "50 g de gorgonzola ou fromage bleu doux",
            "50 g d’emmental râpé",
            "2 cuillères à soupe de crème (facultatif)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Répartir les fromages sur la pâte, ajouter la crème si désiré.\n" +
            "4. Ajouter sel et poivre.\n" +
            "5. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Four Cheese Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "150 g grated mozzarella",
            "50 g grated parmesan",
            "50 g gorgonzola or mild blue cheese",
            "50 g grated emmental",
            "2 tablespoons cream (optional)",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled tray.\n" +
            "3. Spread cheeses over the dough, add cream if desired.\n" +
            "4. Add salt and pepper.\n" +
            "5. Bake 12-15 minutes until crust is golden.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Vier kazen pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "150 g geraspte mozzarella",
            "50 g geraspte parmezaan",
            "50 g gorgonzola of zachte blauwe kaas",
            "50 g geraspte emmentaler",
            "2 eetlepels room (optioneel)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verdeel de kazen over het deeg, voeg eventueel room toe.\n" +
            "4. Voeg zout en peper toe.\n" +
            "5. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "بيتزا أربعة أجبان (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "150 غ موزاريلا مبشور",
            "50 غ بارميزان مبشور",
            "50 غ غورغونزولا أو جبن أزرق خفيف",
            "50 غ إمنتال مبشور",
            "2 ملاعق كبيرة كريمة (اختياري)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع الأجبان على العجينة، وأضف الكريمة إذا رغبت.\n" +
            "4. أضف الملح والفلفل.\n" +
            "5. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "6. قدّم ساخناً."
    }
};
recipesData.plat.pizzaNapolitaine = {
    country: "italie",
    image: "images/pizza-napolitaine.jpg",
    fr: {
        title: "Pizza Napolitaine (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "50 g d’olives noires dénoyautées",
            "Quelques feuilles de basilic frais",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate sur la pâte.\n" +
            "4. Répartir la mozzarella et les olives.\n" +
            "5. Ajouter sel, poivre et basilic.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Ajouter un filet d’huile d’olive avant de servir."
    },
    en: {
        title: "Neapolitan Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "50 g pitted black olives",
            "Some fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce over the dough.\n" +
            "4. Top with mozzarella and olives.\n" +
            "5. Add salt, pepper, and basil.\n" +
            "6. Bake 12-15 minutes until the crust is golden.\n" +
            "7. Drizzle with olive oil before serving."
    },
    nl: {
        title: "Napolitaanse pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "50 g ontpitte zwarte olijven",
            "Enkele verse basilicumblaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus over het deeg.\n" +
            "4. Verdeel mozzarella en olijven.\n" +
            "5. Voeg zout, peper en basilicum toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Besprenkel met olijfolie voor het serveren."
    },
    ar: {
        title: "بيتزا نابوليتانا (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ جبن موزاريلا مبشور",
            "50 غ زيتون أسود منزوع النواة",
            "بعض أوراق الريحان الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم على العجينة.\n" +
            "4. ضع الموزاريلا والزيتون.\n" +
            "5. أضف الملح والفلفل والريحان.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. أضف قليل من زيت الزيتون قبل التقديم."
    }
};
recipesData.plat.pizzaVegetarienne = {
    country: "italie",
    image: "images/pizza-vegetarienne.jpg",
    fr: {
        title: "Pizza Végétarienne (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "50 g de poivrons rouges émincés",
            "50 g de champignons tranchés",
            "50 g de courgettes tranchées",
            "Quelques feuilles de basilic frais",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate sur la pâte.\n" +
            "4. Répartir la mozzarella et les légumes.\n" +
            "5. Ajouter sel, poivre et basilic.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Vegetarian Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "50 g sliced red peppers",
            "50 g sliced mushrooms",
            "50 g sliced zucchini",
            "Some fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce over the dough.\n" +
            "4. Top with mozzarella and vegetables.\n" +
            "5. Add salt, pepper, and basil.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Vegetarische pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "50 g gesneden rode paprika",
            "50 g gesneden champignons",
            "50 g gesneden courgette",
            "Enkele verse basilicumblaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus over het deeg.\n" +
            "4. Verdeel mozzarella en groenten.\n" +
            "5. Voeg zout, peper en basilicum toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا نباتية (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "50 غ فلفل أحمر مقطع شرائح",
            "50 غ فطر مقطع شرائح",
            "50 غ كوسة مقطعة شرائح",
            "بعض أوراق الريحان الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم على العجينة.\n" +
            "4. ضع الموزاريلا والخضروات.\n" +
            "5. أضف الملح والفلفل والريحان.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaFunghi = {
    country: "italie",
    image: "images/pizza-funghi.jpg",
    fr: {
        title: "Pizza Funghi (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "100 g de champignons tranchés",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate sur la pâte.\n" +
            "4. Répartir la mozzarella et les champignons.\n" +
            "5. Ajouter sel et poivre.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Funghi Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "100 g sliced mushrooms",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce over the dough.\n" +
            "4. Top with mozzarella and mushrooms.\n" +
            "5. Add salt and pepper.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Funghi pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "100 g gesneden champignons",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus over het deeg.\n" +
            "4. Verdeel mozzarella en champignons.\n" +
            "5. Voeg zout en peper toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا الفطر (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "100 غ فطر مقطع شرائح",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم على العجينة.\n" +
            "4. ضع الموزاريلا والفطر.\n" +
            "5. أضف الملح والفلفل.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaProsciuttoFree = {
    country: "italie",
    image: "images/pizza-prosciutto-free.jpg",
    fr: {
        title: "Pizza Prosciutto‑free (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "50 g de jambon de poulet ou dinde tranché",
            "Quelques feuilles de roquette",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate.\n" +
            "4. Ajouter mozzarella et jambon de volaille.\n" +
            "5. Ajouter sel, poivre et roquette.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Prosciutto‑free Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "50 g sliced chicken or turkey ham",
            "Some fresh arugula leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat the oven to 220°C.\n" +
            "2. Roll out the dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce.\n" +
            "4. Add mozzarella and poultry ham.\n" +
            "5. Add salt, pepper, and arugula.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Prosciutto‑vrije pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "50 g plakjes kip- of kalkoenham",
            "Enkele verse rucolablaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus.\n" +
            "4. Voeg mozzarella en gevogelteschijfjes toe.\n" +
            "5. Voeg zout, peper en rucola toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا بدون بروسكيوتو (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "50 غ شرائح لحم دجاج أو ديك رومي",
            "بعض أوراق الجرجير الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم.\n" +
            "4. ضع الموزاريلا وشرائح اللحم.\n" +
            "5. أضف الملح والفلفل والجرجير.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaCaprese = {
    country: "italie",
    image: "images/pizza-caprese.jpg",
    fr: {
        title: "Pizza Caprese (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "150 g de mozzarella tranchée",
            "2 tomates mûres tranchées",
            "Quelques feuilles de basilic frais",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Disposer les tranches de tomates et mozzarella.\n" +
            "4. Ajouter sel, poivre et basilic.\n" +
            "5. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "6. Ajouter un filet d’huile d’olive avant de servir."
    },
    en: {
        title: "Caprese Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "150 g sliced mozzarella",
            "2 ripe tomatoes, sliced",
            "Some fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Arrange tomato and mozzarella slices.\n" +
            "4. Add salt, pepper and basil.\n" +
            "5. Bake 12-15 minutes until crust is golden.\n" +
            "6. Drizzle with olive oil before serving."
    },
    nl: {
        title: "Caprese pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "150 g mozzarella in plakjes",
            "2 rijpe tomaten, in plakjes",
            "Enkele verse basilicumblaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Leg de plakjes tomaat en mozzarella erop.\n" +
            "4. Voeg zout, peper en basilicum toe.\n" +
            "5. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "6. Besprenkel met olijfolie voor het serveren."
    },
    ar: {
        title: "بيتزا كابريزي (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "150 غ موزاريلا مقطعة شرائح",
            "2 طماطم ناضجة مقطعة شرائح",
            "بعض أوراق الريحان الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. ضع شرائح الطماطم والموزاريلا.\n" +
            "4. أضف الملح والفلفل والريحان.\n" +
            "5. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "6. أضف قليل من زيت الزيتون قبل التقديم."
    }
};
recipesData.plat.pizzaSiciliana = {
    country: "italie",
    image: "images/pizza-siciliana.jpg",
    fr: {
        title: "Pizza Siciliana (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "50 g d’aubergines grillées",
            "50 g de poivrons rouges émincés",
            "50 g d’olives noires dénoyautées",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate sur la pâte.\n" +
            "4. Ajouter mozzarella, aubergines, poivrons et olives.\n" +
            "5. Ajouter sel et poivre.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Sicilian Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "50 g grilled eggplant",
            "50 g sliced red peppers",
            "50 g pitted black olives",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce over dough.\n" +
            "4. Add mozzarella, eggplant, peppers, and olives.\n" +
            "5. Add salt and pepper.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Siciliaanse pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "50 g gegrilde aubergine",
            "50 g gesneden rode paprika",
            "50 g ontpitte zwarte olijven",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus over het deeg.\n" +
            "4. Voeg mozzarella, aubergine, paprika en olijven toe.\n" +
            "5. Voeg zout en peper toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا صقلية (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "50 غ باذنجان مشوي",
            "50 غ فلفل أحمر مقطع شرائح",
            "50 غ زيتون أسود منزوع النواة",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم على العجينة.\n" +
            "4. ضع الموزاريلا، الباذنجان، الفلفل والزيتون.\n" +
            "5. أضف الملح والفلفل.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaBianca = {
    country: "italie",
    image: "images/pizza-bianca.jpg",
    fr: {
        title: "Pizza Bianca (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "150 g de mozzarella râpée",
            "2 cuillères à soupe de crème fraîche (facultatif)",
            "Herbes fraîches au choix (thym, romarin, basilic)",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Répartir la mozzarella et la crème si désiré.\n" +
            "4. Saupoudrer d’herbes, sel et poivre.\n" +
            "5. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "White Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "150 g grated mozzarella",
            "2 tablespoons fresh cream (optional)",
            "Fresh herbs of choice (thyme, rosemary, basil)",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Top with mozzarella and cream if desired.\n" +
            "4. Sprinkle herbs, salt and pepper.\n" +
            "5. Bake 12-15 minutes until crust is golden.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Witte pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "150 g geraspte mozzarella",
            "2 eetlepels verse room (optioneel)",
            "Verse kruiden naar keuze (tijm, rozemarijn, basilicum)",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verdeel mozzarella en room indien gewenst.\n" +
            "4. Bestrooi met kruiden, zout en peper.\n" +
            "5. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "بيتزا بيانكا (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "150 غ موزاريلا مبشور",
            "2 ملاعق كبيرة كريمة طازجة (اختياري)",
            "أعشاب طازجة حسب الرغبة (زعتر، روزماري، ريحان)",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. ضع الموزاريلا والكريمة إذا رغبت.\n" +
            "4. رش الأعشاب والملح والفلفل.\n" +
            "5. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "6. قدّم ساخناً."
    }
};
recipesData.plat.pizzaChorizoPoulet = {
    country: "italie",
    image: "images/pizza-chorizo-poulet.jpg",
    fr: {
        title: "Pizza au chorizo de poulet (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "50 g de chorizo de poulet tranché",
            "Quelques feuilles de roquette",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate.\n" +
            "4. Ajouter mozzarella et chorizo de poulet.\n" +
            "5. Ajouter sel, poivre et roquette.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Chicken Chorizo Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "50 g sliced chicken chorizo",
            "Some fresh arugula leaves",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce.\n" +
            "4. Add mozzarella and chicken chorizo.\n" +
            "5. Add salt, pepper, and arugula.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Pizza met kipchorizo (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "50 g plakjes kipchorizo",
            "Enkele verse rucolablaadjes",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus.\n" +
            "4. Voeg mozzarella en kipchorizo toe.\n" +
            "5. Voeg zout, peper en rucola toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا بالتشوريزو الدجاج (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "50 غ شرائح تشوريزو دجاج",
            "بعض أوراق الجرجير الطازج",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم.\n" +
            "4. ضع الموزاريلا وشرائح التشوريزو.\n" +
            "5. أضف الملح والفلفل والجرجير.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaPouletBBQ = {
    country: "italie",
    image: "images/pizza-poulet-bbq.jpg",
    fr: {
        title: "Pizza Poulet BBQ (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper", "1 bol"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "150 g de mozzarella râpée",
            "150 g de poulet cuit émincé",
            "2 cuillères à soupe de sauce barbecue sans alcool",
            "50 g de poivrons rouges émincés",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce BBQ.\n" +
            "4. Ajouter mozzarella, poulet et poivrons.\n" +
            "5. Ajouter sel et poivre.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "BBQ Chicken Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board", "1 bowl"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "150 g grated mozzarella",
            "150 g cooked sliced chicken",
            "2 tablespoons alcohol-free BBQ sauce",
            "50 g sliced red peppers",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Spread BBQ sauce.\n" +
            "4. Add mozzarella, chicken and peppers.\n" +
            "5. Add salt and pepper.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "BBQ kip pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank", "1 kom"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "150 g geraspte mozzarella",
            "150 g gekookte kip in plakjes",
            "2 eetlepels alcoholvrije BBQ saus",
            "50 g gesneden rode paprika",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid BBQ saus.\n" +
            "4. Voeg mozzarella, kip en paprika toe.\n" +
            "5. Voeg zout en peper toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا الدجاج بصوص باربيكيو (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع", "وعاء"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "150 غ موزاريلا مبشور",
            "150 غ دجاج مطهو ومقطع شرائح",
            "2 ملاعق كبيرة صوص باربيكيو خالٍ من الكحول",
            "50 غ فلفل أحمر مقطع شرائح",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صوص الباربيكيو.\n" +
            "4. ضع الموزاريلا والدجاج والفلفل.\n" +
            "5. أضف الملح والفلفل.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.pizzaBoeufEpice = {
    country: "italie",
    image: "images/pizza-boeuf-epice.jpg",
    fr: {
        title: "Pizza Bœuf Épicé (4 personnes)",
        equipment: ["1 four", "1 plaque de cuisson", "1 rouleau à pâtisserie", "1 couteau", "1 planche à découper"],
        ingredients: [
            "1 pâte à pizza (environ 250 g)",
            "200 g de sauce tomate",
            "150 g de mozzarella râpée",
            "100 g de bœuf haché cuit avec paprika et cumin",
            "50 g de poivrons rouges émincés",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 220°C.\n" +
            "2. Étaler la pâte sur une plaque légèrement huilée.\n" +
            "3. Étaler la sauce tomate.\n" +
            "4. Ajouter mozzarella, bœuf épicé et poivrons.\n" +
            "5. Ajouter sel et poivre.\n" +
            "6. Cuire 12-15 minutes jusqu’à ce que la pâte soit dorée.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Spicy Beef Pizza (Serves 4)",
        equipment: ["1 oven", "1 baking tray", "1 rolling pin", "1 knife", "1 cutting board"],
        ingredients: [
            "1 pizza dough (about 250 g)",
            "200 g tomato sauce",
            "150 g grated mozzarella",
            "100 g cooked minced beef with paprika and cumin",
            "50 g sliced red peppers",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 220°C.\n" +
            "2. Roll out dough on a lightly oiled tray.\n" +
            "3. Spread tomato sauce.\n" +
            "4. Add mozzarella, spiced beef and peppers.\n" +
            "5. Add salt and pepper.\n" +
            "6. Bake 12-15 minutes until crust is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Pittige rundvlees pizza (voor 4 personen)",
        equipment: ["1 oven", "1 bakplaat", "1 deegroller", "1 mes", "1 snijplank"],
        ingredients: [
            "1 pizzadeeg (ongeveer 250 g)",
            "200 g tomatensaus",
            "150 g geraspte mozzarella",
            "100 g gekookt gehakt met paprika en komijn",
            "50 g gesneden rode paprika",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 220°C.\n" +
            "2. Rol het deeg uit op een licht ingevette bakplaat.\n" +
            "3. Verspreid tomatensaus.\n" +
            "4. Voeg mozzarella, gekruid gehakt en paprika toe.\n" +
            "5. Voeg zout en peper toe.\n" +
            "6. Bak 12-15 minuten tot de korst goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "بيتزا لحم بقري حار (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "شوبك", "سكين", "لوح تقطيع"],
        ingredients: [
            "1 عجينة بيتزا (حوالي 250 غ)",
            "200 غ صلصة طماطم",
            "150 غ موزاريلا مبشور",
            "100 غ لحم بقري مفروم مطبوخ مع فلفل حلو وكمون",
            "50 غ فلفل أحمر مقطع شرائح",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 220°م.\n" +
            "2. افرد العجينة على صينية مدهونة بقليل من الزيت.\n" +
            "3. وزّع صلصة الطماطم.\n" +
            "4. ضع الموزاريلا، اللحم الحار والفلفل.\n" +
            "5. أضف الملح والفلفل.\n" +
            "6. اخبز 12-15 دقيقة حتى يصبح العجين ذهبي اللون.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.lasagneBolognaise = {
    country: "italie",
    image: "images/lasagne-bolognaise.jpg",
    fr: {
        title: "Lasagnes à la bolognaise (4 personnes)",
        equipment: ["1 four", "1 plat à gratin", "1 poêle", "1 casserole", "1 couteau", "1 planche à découper"],
        ingredients: [
            "250 g de pâtes à lasagne précuites",
            "300 g de bœuf haché",
            "400 g de tomates concassées",
            "1 oignon haché",
            "2 gousses d’ail hachées",
            "150 g de mozzarella râpée",
            "50 g de parmesan râpé",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes (origan, basilic)"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Dans une poêle, chauffer l’huile, ajouter oignon et ail, faire revenir 2-3 min.\n" +
            "3. Ajouter le bœuf haché et cuire jusqu’à ce qu’il soit doré.\n" +
            "4. Ajouter les tomates, sel, poivre et herbes, laisser mijoter 15 min.\n" +
            "5. Dans un plat à gratin, alterner une couche de pâtes, une couche de sauce, un peu de mozzarella et répéter.\n" +
            "6. Terminer par mozzarella et parmesan.\n" +
            "7. Cuire 25-30 min jusqu’à ce que le dessus soit doré.\n" +
            "8. Servir chaud."
    },
    en: {
        title: "Bolognese Lasagna (Serves 4)",
        equipment: ["1 oven", "1 baking dish", "1 pan", "1 pot", "1 knife", "1 cutting board"],
        ingredients: [
            "250 g pre-cooked lasagna sheets",
            "300 g minced beef",
            "400 g chopped tomatoes",
            "1 chopped onion",
            "2 garlic cloves, chopped",
            "150 g grated mozzarella",
            "50 g grated parmesan",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs (oregano, basil)"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. In a pan, heat oil, add onion and garlic, sauté 2-3 min.\n" +
            "3. Add minced beef and cook until browned.\n" +
            "4. Add tomatoes, salt, pepper, and herbs, simmer 15 min.\n" +
            "5. In a baking dish, layer pasta, sauce, a bit of mozzarella, repeat.\n" +
            "6. Finish with mozzarella and parmesan.\n" +
            "7. Bake 25-30 min until top is golden.\n" +
            "8. Serve hot."
    },
    nl: {
        title: "Lasagne Bolognese (voor 4 personen)",
        equipment: ["1 oven", "1 ovenschaal", "1 pan", "1 pot", "1 mes", "1 snijplank"],
        ingredients: [
            "250 g voorgekookte lasagnebladen",
            "300 g rundergehakt",
            "400 g tomatenblokjes",
            "1 ui, gehakt",
            "2 teentjes knoflook, gehakt",
            "150 g geraspte mozzarella",
            "50 g geraspte Parmezaanse kaas",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden (oregano, basilicum)"
        ],
        preparation:
            "1. Verwarm de oven voor op 200°C.\n" +
            "2. Verhit olie in een pan, voeg ui en knoflook toe, bak 2-3 min.\n" +
            "3. Voeg gehakt toe en bak tot het bruin is.\n" +
            "4. Voeg tomaten, zout, peper en kruiden toe, laat 15 min sudderen.\n" +
            "5. Leg in een ovenschaal afwisselend pasta, saus, wat mozzarella, herhaal.\n" +
            "6. Eindig met mozzarella en Parmezaan.\n" +
            "7. Bak 25-30 min tot de bovenkant goudbruin is.\n" +
            "8. Serveer warm."
    },
    ar: {
        title: "لازانيا بولونيز (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "مقلاة", "قدر", "سكين", "لوح تقطيع"],
        ingredients: [
            "250 غ شرائح لازانيا جاهزة",
            "300 غ لحم بقري مفروم",
            "400 غ طماطم مفرومة",
            "1 بصلة مفرومة",
            "2 فص ثوم مفروم",
            "150 غ موزاريلا مبشور",
            "50 غ جبن بارميزان مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية (أوريغانو، ريحان)"
        ],
        preparation:
            "1. سخّن الفرن إلى 200°م.\n" +
            "2. في مقلاة، سخن الزيت، أضف البصل والثوم، قلّب 2-3 دقائق.\n" +
            "3. أضف اللحم المفروم واطبخ حتى يتحمر.\n" +
            "4. أضف الطماطم، الملح، الفلفل والأعشاب، واتركها تغلي 15 دقيقة.\n" +
            "5. في صينية خبز، ضع طبقات متبادلة من اللازانيا، الصلصة، قليل من الموزاريلا، كرر.\n" +
            "6. أنهِ بالموزاريلا والبارميزان.\n" +
            "7. اخبز 25-30 دقيقة حتى يصبح الوجه ذهبي.\n" +
            "8. قدّم ساخناً."
    }
};
recipesData.plat.lasagnePouletLegumes = {
    country: "italie",
    image: "images/lasagne-poulet-legumes.jpg",
    fr: {
        title: "Lasagnes poulet et légumes (4 personnes)",
        equipment: ["1 four", "1 plat à gratin", "1 poêle", "1 casserole", "1 couteau", "1 planche à découper"],
        ingredients: [
            "250 g de pâtes à lasagne précuites",
            "200 g de poulet cuit émincé",
            "1 courgette en dés",
            "1 poivron rouge en dés",
            "1 oignon haché",
            "150 g de mozzarella râpée",
            "2 cuillères à soupe d’huile d’olive",
            "Sel, poivre et herbes italiennes"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Dans une poêle, chauffer l’huile, ajouter oignon, poivron et courgette, cuire 5-7 min.\n" +
            "3. Ajouter le poulet, sel, poivre et herbes, mélanger.\n" +
            "4. Dans un plat à gratin, alterner pâtes, mélange poulet-légumes, mozzarella.\n" +
            "5. Terminer par mozzarella.\n" +
            "6. Cuire 25-30 min jusqu’à ce que le dessus soit doré.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Chicken and Vegetable Lasagna (Serves 4)",
        equipment: ["1 oven", "1 baking dish", "1 pan", "1 pot", "1 knife", "1 cutting board"],
        ingredients: [
            "250 g pre-cooked lasagna sheets",
            "200 g cooked sliced chicken",
            "1 zucchini, diced",
            "1 red pepper, diced",
            "1 onion, chopped",
            "150 g grated mozzarella",
            "2 tablespoons olive oil",
            "Salt, pepper and Italian herbs"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. In a pan, heat oil, add onion, pepper and zucchini, cook 5-7 min.\n" +
            "3. Add chicken, salt, pepper and herbs, mix.\n" +
            "4. In a baking dish, layer pasta, chicken-vegetable mix, mozzarella.\n" +
            "5. Finish with mozzarella.\n" +
            "6. Bake 25-30 min until top is golden.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Lasagne met kip en groenten (voor 4 personen)",
        equipment: ["1 oven", "1 ovenschaal", "1 pan", "1 pot", "1 mes", "1 snijplank"],
        ingredients: [
            "250 g voorgekookte lasagnebladen",
            "200 g gekookte kip in plakjes",
            "1 courgette, in blokjes",
            "1 rode paprika, in blokjes",
            "1 ui, gehakt",
            "150 g geraspte mozzarella",
            "2 eetlepels olijfolie",
            "Zout, peper en Italiaanse kruiden"
        ],
        preparation:
            "1. Verwarm de oven voor op 200°C.\n" +
            "2. Verhit olie in een pan, voeg ui, paprika en courgette toe, bak 5-7 min.\n" +
            "3. Voeg kip, zout, peper en kruiden toe, meng.\n" +
            "4. Leg in een ovenschaal afwisselend pasta, kip-groenten mengsel, mozzarella.\n" +
            "5. Eindig met mozzarella.\n" +
            "6. Bak 25-30 min tot de bovenkant goudbruin is.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "لازانيا الدجاج والخضار (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "مقلاة", "قدر", "سكين", "لوح تقطيع"],
        ingredients: [
            "250 غ شرائح لازانيا جاهزة",
            "200 غ دجاج مطهو ومقطع شرائح",
            "1 كوسة مقطعة مكعبات",
            "1 فلفل أحمر مقطع مكعبات",
            "1 بصلة مفرومة",
            "150 غ موزاريلا مبشور",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح، فلفل وأعشاب إيطالية"
        ],
        preparation:
            "1. سخّن الفرن إلى 200°م.\n" +
            "2. في مقلاة، سخن الزيت، أضف البصل، الفلفل والكوسة، اطبخ 5-7 دقائق.\n" +
            "3. أضف الدجاج، الملح، الفلفل والأعشاب، اخلط.\n" +
            "4. في صينية الخبز، ضع طبقات متبادلة من اللازانيا، خليط الدجاج والخضار، الموزاريلا.\n" +
            "5. أنهِ بالموزاريلا.\n" +
            "6. اخبز 25-30 دقيقة حتى يصبح الوجه ذهبي.\n" +
            "7. قدّم ساخناً."
    }
};
recipesData.plat.lasagneQuatreFromages = {
    country: "italie",
    image: "images/lasagne-4fromages.jpg",
    fr: {
        title: "Lasagnes quatre fromages (4 personnes)",
        equipment: ["1 four", "1 plat à gratin", "1 casserole", "1 couteau", "1 planche à découper"],
        ingredients: [
            "250 g de pâtes à lasagne précuites",
            "150 g de mozzarella râpée",
            "50 g de parmesan râpé",
            "50 g de gorgonzola",
            "50 g de fromage ricotta",
            "200 ml de crème fraîche",
            "2 cuillères à soupe d’huile d’olive",
            "Sel et poivre selon goût"
        ],
        preparation:
            "1. Préchauffer le four à 200°C.\n" +
            "2. Mélanger les fromages avec la crème, sel et poivre.\n" +
            "3. Dans un plat à gratin, alterner pâte et mélange de fromages.\n" +
            "4. Terminer avec mozzarella et parmesan.\n" +
            "5. Cuire 25-30 min jusqu’à ce que le dessus soit doré.\n" +
            "6. Servir chaud."
    },
    en: {
        title: "Four Cheese Lasagna (Serves 4)",
        equipment: ["1 oven", "1 baking dish", "1 pot", "1 knife", "1 cutting board"],
        ingredients: [
            "250 g pre-cooked lasagna sheets",
            "150 g grated mozzarella",
            "50 g grated parmesan",
            "50 g gorgonzola",
            "50 g ricotta",
            "200 ml fresh cream",
            "2 tablespoons olive oil",
            "Salt and pepper to taste"
        ],
        preparation:
            "1. Preheat oven to 200°C.\n" +
            "2. Mix cheeses with cream, salt and pepper.\n" +
            "3. In a baking dish, layer pasta and cheese mixture.\n" +
            "4. Finish with mozzarella and parmesan.\n" +
            "5. Bake 25-30 min until top is golden.\n" +
            "6. Serve hot."
    },
    nl: {
        title: "Lasagne met vier kazen (voor 4 personen)",
        equipment: ["1 oven", "1 ovenschaal", "1 pot", "1 mes", "1 snijplank"],
        ingredients: [
            "250 g voorgekookte lasagnebladen",
            "150 g geraspte mozzarella",
            "50 g geraspte Parmezaanse kaas",
            "50 g gorgonzola",
            "50 g ricotta",
            "200 ml verse room",
            "2 eetlepels olijfolie",
            "Zout en peper naar smaak"
        ],
        preparation:
            "1. Verwarm de oven voor op 200°C.\n" +
            "2. Meng de kazen met room, zout en peper.\n" +
            "3. Leg in een ovenschaal afwisselend pasta en kaasmengsel.\n" +
            "4. Eindig met mozzarella en Parmezaan.\n" +
            "5. Bak 25-30 minuten tot de bovenkant goudbruin is.\n" +
            "6. Serveer warm."
    },
    ar: {
        title: "لازانيا أربع أجبان (تكفي 4 أشخاص)",
        equipment: ["فرن", "صينية خبز", "قدر", "سكين", "لوح تقطيع"],
        ingredients: [
            "250 غ شرائح لازانيا جاهزة",
            "150 غ موزاريلا مبشور",
            "50 غ جبن بارميزان مبشور",
            "50 غ جورغونزولا",
            "50 غ جبن ريكوتا",
            "200 مل كريمة طازجة",
            "2 ملاعق كبيرة زيت زيتون",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "1. سخّن الفرن إلى 200°م.\n" +
            "2. اخلط الأجبان مع الكريمة، الملح والفلفل.\n" +
            "3. في صينية خبز، ضع طبقات متبادلة من اللازانيا وخليط الأجبان.\n" +
            "4. أنهِ بالموزاريلا والبارميزان.\n" +
            "5. اخبز 25-30 دقيقة حتى يصبح الوجه ذهبي.\n" +
            "6. قدّم ساخناً."
    }
};



recipesData.dessert.pannacotta = {
    country: "italie",
    image: "images/pannacotta.jpg",
    fr: {
        title: "Panna Cotta à la vanille (4 personnes)",
        equipment: [
            "1 casserole",
            "1 bol",
            "1 fouet",
            "4 verrines ou ramequins",
            "1 balance de cuisine",
            "1 cuillère en bois"
        ],
        ingredients: [
            "500 ml crème liquide entière",
            "50 g sucre",
            "1 gousse de vanille",
            "2 feuilles de gélatine (4 g)",
            "Quelques fruits rouges pour servir (facultatif)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Placer les feuilles de gélatine dans un bol d'eau froide pour les ramollir pendant 5 minutes.\n" +
            "2. Dans une casserole, verser la crème et le sucre.\n" +
            "3. Fendre la gousse de vanille, gratter les graines et les ajouter dans la crème.\n" +
            "4. Chauffer doucement la crème sans la faire bouillir, en remuant régulièrement.\n" +
            "5. Retirer la casserole du feu, essorer la gélatine et l'ajouter à la crème chaude. Mélanger jusqu'à dissolution complète.\n" +
            "6. Verser la préparation dans 4 verrines ou ramequins.\n" +
            "7. Laisser refroidir à température ambiante, puis placer au réfrigérateur au moins 4 heures avant de servir.\n" +
            "8. Décorer avec des fruits rouges si désiré."
    },
    en: {
        title: "Vanilla Panna Cotta (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 bowl",
            "1 whisk",
            "4 glasses or ramekins",
            "1 kitchen scale",
            "1 wooden spoon"
        ],
        ingredients: [
            "500 ml heavy cream",
            "50 g sugar",
            "1 vanilla pod",
            "2 gelatin sheets (4 g)",
            "Some red fruits for serving (optional)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Soak gelatin sheets in cold water for 5 minutes to soften.\n" +
            "2. Pour cream and sugar into a saucepan.\n" +
            "3. Split vanilla pod, scrape seeds and add to cream.\n" +
            "4. Heat gently without boiling, stirring regularly.\n" +
            "5. Remove from heat, squeeze gelatin and add to hot cream. Stir until completely dissolved.\n" +
            "6. Pour into 4 glasses or ramekins.\n" +
            "7. Let cool to room temperature, then refrigerate at least 4 hours before serving.\n" +
            "8. Decorate with red fruits if desired."
    },
    nl: {
        title: "Vanille Panna Cotta (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 kom",
            "1 garde",
            "4 glaasjes of ramequins",
            "1 keukenweegschaal",
            "1 houten lepel"
        ],
        ingredients: [
            "500 ml slagroom",
            "50 g suiker",
            "1 vanillepeul",
            "2 gelatineblaadjes (4 g)",
            "Enkele rode vruchten voor garnering (optioneel)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Week gelatineblaadjes 5 minuten in koud water.\n" +
            "2. Giet de room en suiker in een steelpan.\n" +
            "3. Snijd de vanillepeul, schraap de zaadjes en voeg toe aan de room.\n" +
            "4. Verwarm zachtjes zonder te koken, regelmatig roeren.\n" +
            "5. Haal van het vuur, knijp gelatine uit en voeg toe aan de hete room. Roer tot volledig opgelost.\n" +
            "6. Giet in 4 glaasjes of ramequins.\n" +
            "7. Laat afkoelen tot kamertemperatuur, zet dan minimaal 4 uur in de koelkast.\n" +
            "8. Garneer eventueel met rode vruchten."
    },
    ar: {
        title: "بانّا كوتّا بالفانيليا (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "وعاء",
            "خلاط يدوي",
            "4 كؤوس أو راميكين",
            "ميزان مطبخ",
            "ملعقة خشبية"
        ],
        ingredients: [
            "500 مل كريمة سائلة كاملة الدسم",
            "50 غ سكر",
            "1 حبة فانيليا",
            "2 ورقة جيلاتين (4 غ)",
            "بعض التوت الأحمر للتقديم (اختياري)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. ضع أوراق الجيلاتين في ماء بارد لمدة 5 دقائق لتلين.\n" +
            "2. صب الكريمة والسكر في قدر.\n" +
            "3. افتح حبة الفانيليا، اكشط البذور وأضفها إلى الكريمة.\n" +
            "4. سخّن الكريمة على نار هادئة بدون غليان مع التحريك المنتظم.\n" +
            "5. ارفع عن النار، اعصر الجيلاتين وأضفه إلى الكريمة الساخنة. حرّك حتى يذوب تماماً.\n" +
            "6. صب الخليط في 4 كؤوس أو راميكين.\n" +
            "7. اتركه يبرد إلى درجة حرارة الغرفة، ثم ضع في الثلاجة لمدة لا تقل عن 4 ساعات قبل التقديم.\n" +
            "8. زيّن بالتوت الأحمر إذا رغبت."
    }
};
recipesData.dessert.pannaCottaChocolat = {
    country: "italie",
    image: "images/panna-cotta-chocolat.jpg",
    fr: {
        title: "Panna cotta au chocolat (4 personnes)",
        equipment: ["1 casserole", "1 fouet", "4 verrines"],
        ingredients: [
            "500 ml de crème liquide",
            "100 g de chocolat noir",
            "60 g de sucre",
            "3 feuilles de gélatine"
        ],
        preparation:
            "1. Faire tremper la gélatine dans l’eau froide.\n" +
            "2. Chauffer la crème avec le sucre.\n" +
            "3. Ajouter le chocolat en morceaux et mélanger.\n" +
            "4. Incorporer la gélatine hors du feu.\n" +
            "5. Verser dans les verrines et réfrigérer 4 heures."
    },
    en: {
        title: "Chocolate Panna Cotta (Serves 4)",
        equipment: ["1 pot", "1 whisk", "4 glasses"],
        ingredients: [
            "500 ml liquid cream",
            "100 g dark chocolate",
            "60 g sugar",
            "3 gelatin sheets"
        ],
        preparation:
            "1. Soak gelatin in cold water.\n" +
            "2. Heat cream with sugar.\n" +
            "3. Add chopped chocolate and stir until melted.\n" +
            "4. Add gelatin off the heat.\n" +
            "5. Pour into glasses and chill 4 hours."
    },
    nl: {
        title: "Chocolade panna cotta (voor 4 personen)",
        equipment: ["1 kookpot", "1 garde", "4 glaasjes"],
        ingredients: [
            "500 ml room",
            "100 g pure chocolade",
            "60 g suiker",
            "3 blaadjes gelatine"
        ],
        preparation:
            "1. Week gelatine in koud water.\n" +
            "2. Verwarm room met suiker.\n" +
            "3. Voeg chocolade toe en roer tot gesmolten.\n" +
            "4. Voeg gelatine toe buiten het vuur.\n" +
            "5. Giet in glaasjes en laat 4 uur opstijven."
    },
    ar: {
        title: "بانا كوتا بالشوكولاتة (تكفي 4 أشخاص)",
        equipment: ["قدر", "خفاق", "4 كؤوس"],
        ingredients: [
            "500 مل كريمة سائلة",
            "100 غ شوكولاتة داكنة",
            "60 غ سكر",
            "3 أوراق جيلاتين"
        ],
        preparation:
            "1. انقع الجيلاتين في ماء بارد.\n" +
            "2. سخن الكريمة مع السكر.\n" +
            "3. أضف الشوكولاتة وحرّك حتى تذوب.\n" +
            "4. أضف الجيلاتين بعيداً عن النار.\n" +
            "5. اسكب في الكؤوس وضع في الثلاجة 4 ساعات."
    }
};

recipesData.dessert.tiramisu = {
    country: "italie",
    image: "images/tiramisu.jpg",
    fr: {
        title: "Tiramisù classique (4 à 6 personnes)",
        equipment: ["1 saladier", "1 fouet", "1 spatule", "1 plat rectangulaire"],
        ingredients: [
            "250 g de mascarpone",
            "3 œufs",
            "80 g de sucre",
            "200 g de biscuits à la cuillère",
            "300 ml de café fort refroidi",
            "Cacao en poudre non sucré"
        ],
        preparation:
            "1. Séparer les blancs des jaunes d’œufs.\n" +
            "2. Fouetter les jaunes avec le sucre jusqu’à blanchiment.\n" +
            "3. Ajouter le mascarpone et mélanger jusqu’à obtenir une crème lisse.\n" +
            "4. Monter les blancs en neige ferme et les incorporer délicatement.\n" +
            "5. Tremper rapidement les biscuits dans le café.\n" +
            "6. Disposer une couche de biscuits puis une couche de crème.\n" +
            "7. Répéter et terminer par une couche de crème.\n" +
            "8. Saupoudrer de cacao et placer au frais au moins 4 heures."
    },
    en: {
        title: "Classic Tiramisu (Serves 4–6)",
        equipment: ["1 bowl", "1 whisk", "1 spatula", "1 rectangular dish"],
        ingredients: [
            "250 g mascarpone",
            "3 eggs",
            "80 g sugar",
            "200 g ladyfinger biscuits",
            "300 ml strong cooled coffee",
            "Unsweetened cocoa powder"
        ],
        preparation:
            "1. Separate egg whites from yolks.\n" +
            "2. Whisk yolks with sugar until pale.\n" +
            "3. Add mascarpone and mix until smooth.\n" +
            "4. Beat egg whites until stiff and gently fold in.\n" +
            "5. Quickly dip biscuits into coffee.\n" +
            "6. Layer biscuits and cream in the dish.\n" +
            "7. Finish with a cream layer.\n" +
            "8. Dust with cocoa and chill at least 4 hours."
    },
    nl: {
        title: "Klassieke tiramisu (voor 4–6 personen)",
        equipment: ["1 kom", "1 garde", "1 spatel", "1 rechthoekige schaal"],
        ingredients: [
            "250 g mascarpone",
            "3 eieren",
            "80 g suiker",
            "200 g lange vingers",
            "300 ml sterke afgekoelde koffie",
            "Ongezoet cacaopoeder"
        ],
        preparation:
            "1. Scheid eiwitten en eidooiers.\n" +
            "2. Klop dooiers met suiker tot licht van kleur.\n" +
            "3. Voeg mascarpone toe en meng glad.\n" +
            "4. Klop eiwitten stijf en spatel voorzichtig onder.\n" +
            "5. Doop de koekjes kort in koffie.\n" +
            "6. Maak laagjes van koekjes en crème.\n" +
            "7. Eindig met een laag crème.\n" +
            "8. Bestrooi met cacao en koel minstens 4 uur."
    },
    ar: {
        title: "تيراميسو كلاسيكي (يكفي 4–6 أشخاص)",
        equipment: ["وعاء", "خفاق", "ملعقة مسطحة", "صينية"],
        ingredients: [
            "250 غ ماسكاربوني",
            "3 بيضات",
            "80 غ سكر",
            "200 غ بسكويت سافوياردي",
            "300 مل قهوة قوية مبردة",
            "كاكاو غير محلى"
        ],
        preparation:
            "1. افصل صفار البيض عن البياض.\n" +
            "2. اخفق الصفار مع السكر حتى يصبح فاتح اللون.\n" +
            "3. أضف الماسكاربوني وامزج جيداً.\n" +
            "4. اخفق البياض حتى يتماسك وأضفه برفق.\n" +
            "5. اغمس البسكويت سريعاً في القهوة.\n" +
            "6. شكّل طبقات من البسكويت والكريمة.\n" +
            "7. اختم بطبقة كريمة.\n" +
            "8. رش الكاكاو وضعه في الثلاجة 4 ساعات على الأقل."
    }
};
recipesData.dessert.crostataConfiture = {
    country: "italie",
    image: "images/crostata-confiture.jpg",
    fr: {
        title: "Crostata italienne à la confiture (6 personnes)",
        equipment: ["1 saladier", "1 rouleau à pâtisserie", "1 moule à tarte", "1 couteau"],
        ingredients: [
            "300 g de farine",
            "150 g de beurre",
            "120 g de sucre",
            "2 œufs",
            "1 cuillère à café de levure chimique",
            "300 g de confiture au choix"
        ],
        preparation:
            "1. Mélanger farine, sucre et levure.\n" +
            "2. Ajouter le beurre en morceaux et sabler la pâte.\n" +
            "3. Incorporer les œufs et former une pâte homogène.\n" +
            "4. Étaler la pâte et foncer le moule.\n" +
            "5. Garnir de confiture.\n" +
            "6. Décorer avec des bandes de pâte.\n" +
            "7. Cuire 35 min à 180°C.\n" +
            "8. Laisser refroidir avant de servir."
    },
    en: {
        title: "Italian Jam Crostata (Serves 6)",
        equipment: ["1 bowl", "1 rolling pin", "1 tart pan", "1 knife"],
        ingredients: [
            "300 g flour",
            "150 g butter",
            "120 g sugar",
            "2 eggs",
            "1 teaspoon baking powder",
            "300 g jam of choice"
        ],
        preparation:
            "1. Mix flour, sugar and baking powder.\n" +
            "2. Rub in butter until crumbly.\n" +
            "3. Add eggs and form a smooth dough.\n" +
            "4. Roll out dough and line the pan.\n" +
            "5. Spread jam evenly.\n" +
            "6. Decorate with dough strips.\n" +
            "7. Bake 35 min at 180°C.\n" +
            "8. Let cool before serving."
    },
    nl: {
        title: "Italiaanse crostata met confituur (voor 6 personen)",
        equipment: ["1 kom", "1 deegrol", "1 taartvorm", "1 mes"],
        ingredients: [
            "300 g bloem",
            "150 g boter",
            "120 g suiker",
            "2 eieren",
            "1 theelepel bakpoeder",
            "300 g confituur"
        ],
        preparation:
            "1. Meng bloem, suiker en bakpoeder.\n" +
            "2. Wrijf boter erdoor tot kruimelig.\n" +
            "3. Voeg eieren toe en vorm deeg.\n" +
            "4. Rol uit en bekleed de vorm.\n" +
            "5. Bestrijk met confituur.\n" +
            "6. Versier met deegstroken.\n" +
            "7. Bak 35 min op 180°C.\n" +
            "8. Laat afkoelen."
    },
    ar: {
        title: "كروستاتا إيطالية بالمربى (تكفي 6 أشخاص)",
        equipment: ["وعاء", "نشابة", "قالب تارت", "سكين"],
        ingredients: [
            "300 غ دقيق",
            "150 غ زبدة",
            "120 غ سكر",
            "2 بيض",
            "1 ملعقة صغيرة خميرة",
            "300 غ مربى"
        ],
        preparation:
            "1. اخلط الدقيق والسكر والخميرة.\n" +
            "2. أضف الزبدة وامزج حتى يصبح مفتتاً.\n" +
            "3. أضف البيض وشكل عجينة.\n" +
            "4. افرد العجينة وضعها في القالب.\n" +
            "5. غطها بالمربى.\n" +
            "6. زيّن بشرائط من العجين.\n" +
            "7. اخبز 35 دقيقة على 180°م.\n" +
            "8. اتركها تبرد قبل التقديم."
    }
};
recipesData.dessert.tortaDellaNonna = {
    country: "italie",
    image: "images/torta-della-nonna.jpg",
    fr: {
        title: "Torta della nonna (6 personnes)",
        equipment: ["1 casserole", "1 fouet", "1 moule", "1 saladier"],
        ingredients: [
            "300 g de pâte sablée",
            "500 ml de lait",
            "4 jaunes d’œufs",
            "120 g de sucre",
            "40 g de maïzena",
            "1 gousse de vanille",
            "50 g de pignons de pin"
        ],
        preparation:
            "1. Chauffer le lait avec la vanille.\n" +
            "2. Fouetter jaunes, sucre et maïzena.\n" +
            "3. Verser le lait chaud et épaissir à feu doux.\n" +
            "4. Foncer le moule avec la pâte.\n" +
            "5. Garnir de crème pâtissière.\n" +
            "6. Parsemer de pignons.\n" +
            "7. Cuire 40 min à 180°C.\n" +
            "8. Laisser refroidir."
    },
    en: {
        title: "Torta della Nonna (Serves 6)",
        equipment: ["1 pot", "1 whisk", "1 pan", "1 bowl"],
        ingredients: [
            "300 g shortcrust pastry",
            "500 ml milk",
            "4 egg yolks",
            "120 g sugar",
            "40 g cornstarch",
            "1 vanilla pod",
            "50 g pine nuts"
        ],
        preparation:
            "1. Heat milk with vanilla.\n" +
            "2. Whisk yolks, sugar and cornstarch.\n" +
            "3. Add milk and cook until thick.\n" +
            "4. Line pan with pastry.\n" +
            "5. Fill with custard.\n" +
            "6. Sprinkle pine nuts.\n" +
            "7. Bake 40 min at 180°C.\n" +
            "8. Let cool."
    },
    nl: {
        title: "Torta della nonna (voor 6 personen)",
        equipment: ["1 kookpot", "1 garde", "1 bakvorm", "1 kom"],
        ingredients: [
            "300 g zanddeeg",
            "500 ml melk",
            "4 eidooiers",
            "120 g suiker",
            "40 g maïzena",
            "1 vanillestokje",
            "50 g pijnboompitten"
        ],
        preparation:
            "1. Verwarm melk met vanille.\n" +
            "2. Klop dooiers, suiker en maïzena.\n" +
            "3. Voeg melk toe en laat indikken.\n" +
            "4. Bekleed de vorm met deeg.\n" +
            "5. Vul met room.\n" +
            "6. Bestrooi met pijnboompitten.\n" +
            "7. Bak 40 min op 180°C.\n" +
            "8. Laat afkoelen."
    },
    ar: {
        title: "تورتا ديلا نونا (تكفي 6 أشخاص)",
        equipment: ["قدر", "خفاق", "قالب", "وعاء"],
        ingredients: [
            "300 غ عجينة سابليه",
            "500 مل حليب",
            "4 صفار بيض",
            "120 غ سكر",
            "40 غ نشا",
            "1 عود فانيليا",
            "50 غ صنوبر"
        ],
        preparation:
            "1. سخن الحليب مع الفانيليا.\n" +
            "2. اخفق الصفار مع السكر والنشا.\n" +
            "3. أضف الحليب واطبخ حتى يتكاثف.\n" +
            "4. ضع العجين في القالب.\n" +
            "5. املأ بالكريمة.\n" +
            "6. رش الصنوبر.\n" +
            "7. اخبز 40 دقيقة على 180°م.\n" +
            "8. اتركها تبرد."
    }
};
recipesData.dessert.biscottiAmandes = {
    country: "italie",
    image: "images/biscotti-amandes.jpg",
    fr: {
        title: "Biscotti italiens aux amandes (6 personnes)",
        equipment: ["1 saladier", "1 plaque de cuisson", "1 couteau"],
        ingredients: [
            "300 g de farine",
            "150 g de sucre",
            "2 œufs",
            "150 g d’amandes entières",
            "1 cuillère à café de levure chimique"
        ],
        preparation:
            "1. Mélanger farine, sucre et levure.\n" +
            "2. Ajouter les œufs et mélanger.\n" +
            "3. Incorporer les amandes.\n" +
            "4. Former deux boudins de pâte.\n" +
            "5. Cuire 25 min à 180°C.\n" +
            "6. Couper en tranches.\n" +
            "7. Remettre au four 10 min pour sécher."
    },
    en: {
        title: "Italian Almond Biscotti (Serves 6)",
        equipment: ["1 bowl", "1 baking tray", "1 knife"],
        ingredients: [
            "300 g flour",
            "150 g sugar",
            "2 eggs",
            "150 g whole almonds",
            "1 teaspoon baking powder"
        ],
        preparation:
            "1. Mix flour, sugar and baking powder.\n" +
            "2. Add eggs and mix.\n" +
            "3. Fold in almonds.\n" +
            "4. Shape into two logs.\n" +
            "5. Bake 25 min at 180°C.\n" +
            "6. Slice.\n" +
            "7. Bake again 10 min to dry."
    },
    nl: {
        title: "Italiaanse amandelbiscotti (voor 6 personen)",
        equipment: ["1 kom", "1 bakplaat", "1 mes"],
        ingredients: [
            "300 g bloem",
            "150 g suiker",
            "2 eieren",
            "150 g hele amandelen",
            "1 theelepel bakpoeder"
        ],
        preparation:
            "1. Meng bloem, suiker en bakpoeder.\n" +
            "2. Voeg eieren toe.\n" +
            "3. Meng amandelen erdoor.\n" +
            "4. Vorm twee rollen.\n" +
            "5. Bak 25 min op 180°C.\n" +
            "6. Snijd in plakken.\n" +
            "7. Bak nog 10 min."
    },
    ar: {
        title: "بسكوتي إيطالي باللوز (تكفي 6 أشخاص)",
        equipment: ["وعاء", "صينية خبز", "سكين"],
        ingredients: [
            "300 غ دقيق",
            "150 غ سكر",
            "2 بيض",
            "150 غ لوز كامل",
            "1 ملعقة صغيرة خميرة"
        ],
        preparation:
            "1. اخلط الدقيق والسكر والخميرة.\n" +
            "2. أضف البيض.\n" +
            "3. أضف اللوز.\n" +
            "4. شكّل رولين من العجين.\n" +
            "5. اخبز 25 دقيقة على 180°م.\n" +
            "6. قطّع شرائح.\n" +
            "7. اخبز 10 دقائق إضافية."
    }
};


recipesData.patisserie.cannoli = {
    country: "italie",
    image: "images/cannoli.jpg",
    fr: {
        title: "Cannoli siciliens (4 personnes)",
        equipment: [
            "1 grand bol",
            "1 fouet",
            "1 poche à douille",
            "1 casserole pour friture",
            "1 pince",
            "1 balance de cuisine",
            "1 cuillère"
        ],
        ingredients: [
            "200 g ricotta fraîche",
            "50 g sucre glace",
            "1 cuillère à café extrait de vanille (5 ml)",
            "4 coquilles à cannoli (prêtes à garnir)",
            "50 g pépites de chocolat",
            "Huile végétale pour friture (facultatif si pré-frites)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans un bol, mélanger la ricotta avec le sucre glace et la vanille jusqu’à obtention d’une crème lisse.\n" +
            "2. Ajouter les pépites de chocolat et mélanger délicatement.\n" +
            "3. Remplir une poche à douille avec la crème et garnir les coquilles de cannoli.\n" +
            "4. Si les coquilles ne sont pas pré-frites, faire chauffer l’huile dans une casserole et frire rapidement les coquilles jusqu’à dorure, puis égoutter sur papier absorbant.\n" +
            "5. Saupoudrer éventuellement un peu de sucre glace avant de servir."
    },
    en: {
        title: "Sicilian Cannoli (Serves 4)",
        equipment: [
            "1 large bowl",
            "1 whisk",
            "1 piping bag",
            "1 frying pan or pot",
            "1 tongs",
            "1 kitchen scale",
            "1 spoon"
        ],
        ingredients: [
            "200 g fresh ricotta",
            "50 g icing sugar",
            "1 teaspoon vanilla extract (5 ml)",
            "4 cannoli shells (ready to fill)",
            "50 g chocolate chips",
            "Vegetable oil for frying (optional if pre-fried shells)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a bowl, mix ricotta with icing sugar and vanilla until smooth.\n" +
            "2. Add chocolate chips and fold gently.\n" +
            "3. Fill a piping bag with cream and fill the cannoli shells.\n" +
            "4. If shells are not pre-fried, heat oil in a pan and fry shells quickly until golden, then drain on paper towels.\n" +
            "5. Optionally, dust with icing sugar before serving."
    },
    nl: {
        title: "Siciliaanse Cannoli (voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 garde",
            "1 spuitzak",
            "1 pan voor frituren",
            "1 tang",
            "1 keukenweegschaal",
            "1 lepel"
        ],
        ingredients: [
            "200 g verse ricotta",
            "50 g poedersuiker",
            "1 theelepel vanille-extract (5 ml)",
            "4 cannoli schelpen (klaar om te vullen)",
            "50 g chocoladestukjes",
            "Plantaardige olie om te frituren (optioneel als voorgefrituurd)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng de ricotta met poedersuiker en vanille tot een gladde massa.\n" +
            "2. Voeg chocoladestukjes toe en spatel voorzichtig door.\n" +
            "3. Vul een spuitzak met het mengsel en vul de cannoli schelpen.\n" +
            "4. Als de schelpen niet voorgefrituurd zijn, verhit olie in een pan en frituur snel de schelpen tot goudbruin, laat uitlekken op keukenpapier.\n" +
            "5. Bestrooi eventueel met poedersuiker voor het serveren."
    },
    ar: {
        title: "كانولي صقلي (تكفي 4 أشخاص)",
        equipment: [
            "وعاء كبير",
            "خلاط يدوي",
            "كيس حلواني",
            "مقلاة للقلي",
            "ملقط",
            "ميزان مطبخ",
            "ملعقة"
        ],
        ingredients: [
            "200 غ جبن ريكوتا طازج",
            "50 غ سكر بودرة",
            "1 ملعقة صغيرة فانيليا (5 مل)",
            "4 قوالب كانولي جاهزة للحشو",
            "50 غ رقائق شوكولاتة",
            "زيت نباتي للقلي (اختياري إذا كانت القوالب جاهزة مقلية)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. في وعاء، اخلط الريكوتا مع السكر البودرة والفانيليا حتى تصبح كريمة ناعمة.\n" +
            "2. أضف رقائق الشوكولاتة واخلط برفق.\n" +
            "3. احشو كيس الحلواني بالكريمة واملأ قوالب الكانولي.\n" +
            "4. إذا لم تكن القوالب مقلية مسبقاً، سخّن الزيت في المقلاة وقم بقلي القوالب سريعاً حتى تصبح ذهبية، ثم صفّيها على ورق ماص.\n" +
            "5. يمكن رش قليل من السكر البودرة قبل التقديم."
    }
};

recipesData.entree.taboule = {
    country: "liban",
    image: "images/taboule.jpg",
    fr: {
        title: "Taboulé libanais (4 personnes)",
        equipment: [
            "1 grand bol",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 balance de cuisine"
        ],
        ingredients: [
            "100 g boulgour fin",
            "3 tomates moyennes (300 g), coupées en petits dés",
            "1 concombre moyen (150 g), coupé en petits dés",
            "1 bouquet de persil plat (50 g), finement haché",
            "1 petit bouquet de menthe (10 g), haché",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "Jus de 1 citron (environ 30 ml)",
            "Sel et poivre selon goût"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Rincer le boulgour et le faire tremper 10 minutes dans de l’eau froide, puis égoutter.\n" +
            "2. Couper les tomates et le concombre en petits dés.\n" +
            "3. Hacher finement le persil et la menthe.\n" +
            "4. Dans un grand bol, mélanger le boulgour égoutté, les légumes et les herbes.\n" +
            "5. Ajouter l’huile d’olive, le jus de citron, le sel et le poivre.\n" +
            "6. Mélanger doucement et servir frais."
    },
    en: {
        title: "Lebanese Tabbouleh (Serves 4)",
        equipment: [
            "1 large bowl",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 kitchen scale"
        ],
        ingredients: [
            "100 g fine bulgur",
            "3 medium tomatoes (300 g), diced",
            "1 medium cucumber (150 g), diced",
            "1 bunch flat-leaf parsley (50 g), finely chopped",
            "1 small bunch mint (10 g), chopped",
            "2 tablespoons olive oil (30 ml)",
            "Juice of 1 lemon (about 30 ml)",
            "Salt and pepper to taste"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Rinse the bulgur and soak in cold water for 10 minutes, then drain.\n" +
            "2. Dice tomatoes and cucumber.\n" +
            "3. Finely chop parsley and mint.\n" +
            "4. In a large bowl, mix drained bulgur, vegetables, and herbs.\n" +
            "5. Add olive oil, lemon juice, salt, and pepper.\n" +
            "6. Mix gently and serve chilled."
    },
    nl: {
        title: "Libanese Tabouleh (voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "100 g fijne bulgur",
            "3 middelgrote tomaten (300 g), in blokjes",
            "1 middelgrote komkommer (150 g), in blokjes",
            "1 bos platte peterselie (50 g), fijngehakt",
            "1 klein bosje munt (10 g), gehakt",
            "2 eetlepels olijfolie (30 ml)",
            "Sap van 1 citroen (ca. 30 ml)",
            "Zout en peper naar smaak"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Spoel de bulgur en laat 10 minuten in koud water weken, daarna afgieten.\n" +
            "2. Snijd de tomaten en komkommer in blokjes.\n" +
            "3. Hak de peterselie en munt fijn.\n" +
            "4. Meng in een grote kom de uitgelekte bulgur, groenten en kruiden.\n" +
            "5. Voeg olijfolie, citroensap, zout en peper toe.\n" +
            "6. Meng voorzichtig en serveer koel."
    },
    ar: {
        title: "تبولة لبنانية (تكفي 4 أشخاص)",
        equipment: [
            "وعاء كبير",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "ميزان مطبخ"
        ],
        ingredients: [
            "100 غ برغل ناعم",
            "3 طماطم متوسطة (300 غ)، مقطعة مكعبات",
            "1 خيار متوسط (150 غ)، مقطع مكعبات",
            "1 حزمة بقدونس مسطح (50 غ)، مفروم ناعم",
            "1 حزمة صغيرة نعناع (10 غ)، مفروم",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "عصير ليمونة واحدة (حوالي 30 مل)",
            "ملح وفلفل حسب الرغبة"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اغسل البرغل وانقعه في ماء بارد 10 دقائق، ثم صفّه.\n" +
            "2. قطّع الطماطم والخيار إلى مكعبات.\n" +
            "3. افرم البقدونس والنعناع ناعماً.\n" +
            "4. في وعاء كبير، اخلط البرغل المصفّى مع الخضار والأعشاب.\n" +
            "5. أضف زيت الزيتون وعصير الليمون والملح والفلفل.\n" +
            "6. امزج بلطف وقدّم بارد."
    }
};
recipesData.plat.poulet_libanais = {
    country: "liban",
    image: "images/poulet_libanais.jpg",

    fr: {
        title: "Poulet aux épices libanaises (4 personnes)",
        equipment: [
            "1 grande poêle ou sauteuse",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol pour marinade",
            "1 balance de cuisine"
        ],
        ingredients: [
            "4 cuisses de poulet (environ 800 g)",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 oignon moyen (100 g), émincé",
            "2 gousses d’ail, hachées",
            "1 cuillère à café de cannelle moulue (2 g)",
            "1 cuillère à café de cumin moulu (2 g)",
            "1 cuillère à café de paprika doux (2 g)",
            "1/2 cuillère à café de coriandre moulue (1 g)",
            "200 ml bouillon de poulet",
            "Sel et poivre selon goût",
            "Quelques feuilles de coriandre fraîche pour garnir"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préparer la marinade : mélanger cannelle, cumin, paprika, coriandre, sel, poivre et 1 cuillère à soupe d’huile d’olive dans un bol.\n" +
            "2. Enduire les cuisses de poulet de cette marinade et laisser reposer 15 minutes.\n" +
            "3. Dans une grande poêle, chauffer 1 cuillère à soupe d’huile d’olive.\n" +
            "4. Ajouter l’oignon émincé et l’ail, faire revenir 2-3 minutes jusqu’à translucide.\n" +
            "5. Ajouter les cuisses de poulet et saisir 5 minutes de chaque côté pour dorer.\n" +
            "6. Verser le bouillon, couvrir, réduire le feu et laisser mijoter 25-30 minutes jusqu’à cuisson complète.\n" +
            "7. Vérifier l’assaisonnement, garnir de coriandre fraîche et servir chaud."
    },

    en: {
        title: "Chicken with Lebanese Spices (Serves 4)",
        equipment: [
            "1 large frying pan or sauté pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl for marinade",
            "1 kitchen scale"
        ],
        ingredients: [
            "4 chicken thighs (about 800 g)",
            "2 tablespoons olive oil (30 ml)",
            "1 medium onion (100 g), sliced",
            "2 garlic cloves, chopped",
            "1 teaspoon ground cinnamon (2 g)",
            "1 teaspoon ground cumin (2 g)",
            "1 teaspoon sweet paprika (2 g)",
            "1/2 teaspoon ground coriander (1 g)",
            "200 ml chicken broth",
            "Salt and pepper to taste",
            "Fresh coriander leaves for garnish"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Prepare the marinade: mix cinnamon, cumin, paprika, coriander, salt, pepper, and 1 tbsp olive oil in a bowl.\n" +
            "2. Coat chicken thighs with marinade and let rest 15 minutes.\n" +
            "3. Heat 1 tbsp olive oil in a large pan.\n" +
            "4. Add sliced onion and garlic, sauté 2-3 minutes until translucent.\n" +
            "5. Add chicken thighs and sear 5 minutes per side until browned.\n" +
            "6. Pour in broth, cover, reduce heat, and simmer 25-30 minutes until fully cooked.\n" +
            "7. Check seasoning, garnish with fresh coriander, and serve hot."
    },

    nl: {
        title: "Kip met Libanese kruiden (voor 4 personen)",
        equipment: [
            "1 grote koekenpan of braadpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom voor marinade",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "4 kippenbouten (ongeveer 800 g)",
            "2 eetlepels olijfolie (30 ml)",
            "1 middelgrote ui (100 g), gesneden",
            "2 teentjes knoflook, gehakt",
            "1 theelepel kaneelpoeder (2 g)",
            "1 theelepel komijnpoeder (2 g)",
            "1 theelepel zoete paprika (2 g)",
            "1/2 theelepel gemalen koriander (1 g)",
            "200 ml kippenbouillon",
            "Zout en peper naar smaak",
            "Verse korianderblaadjes voor garnering"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Bereid de marinade: meng kaneel, komijn, paprika, koriander, zout, peper en 1 el olijfolie in een kom.\n" +
            "2. Wrijf de kippenbouten in met de marinade en laat 15 minuten rusten.\n" +
            "3. Verhit 1 el olijfolie in een grote pan.\n" +
            "4. Voeg gesneden ui en knoflook toe, bak 2-3 minuten tot glazig.\n" +
            "5. Voeg kippenbouten toe en bak 5 minuten per kant tot goudbruin.\n" +
            "6. Voeg bouillon toe, dek af, zet het vuur laag en laat 25-30 minuten sudderen tot gaar.\n" +
            "7. Controleer de smaak, garneer met verse koriander en serveer heet."
    },

    ar: {
        title: "دجاج بالتوابل اللبنانية (تكفي 4 أشخاص)",
        equipment: [
            "مقلاة كبيرة أو قدر للقلي",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء للتتبيل",
            "ميزان مطبخ"
        ],
        ingredients: [
            "4 أفخاذ دجاج (حوالي 800 غ)",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 بصل متوسط (100 غ)، مقطع شرائح",
            "2 فص ثوم، مفروم",
            "1 ملعقة صغيرة قرفة مطحونة (2 غ)",
            "1 ملعقة صغيرة كمون مطحون (2 غ)",
            "1 ملعقة صغيرة بابريكا حلوة (2 غ)",
            "1/2 ملعقة صغيرة كزبرة مطحونة (1 غ)",
            "200 مل مرق دجاج",
            "ملح وفلفل حسب الرغبة",
            "أوراق كزبرة طازجة للتزيين"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. حضّر التتبيلة: اخلط القرفة والكمون والبابريكا والكزبرة والملح والفلفل و1 ملعقة كبيرة زيت زيتون في وعاء.\n" +
            "2. غطّ أفخاذ الدجاج بالتتبيلة واتركها 15 دقيقة.\n" +
            "3. سخّن 1 ملعقة كبيرة زيت زيتون في مقلاة كبيرة.\n" +
            "4. أضف البصل المقطع والثوم، قلب 2-3 دقائق حتى يصبح شفافاً.\n" +
            "5. أضف أفخاذ الدجاج وحمّر 5 دقائق لكل جانب حتى تصبح ذهبية.\n" +
            "6. أضف المرق، غطّ المقلاة، خفّف النار واتركها 25-30 دقيقة حتى تنضج.\n" +
            "7. تحقق من التوابل، زيّن بالكزبرة الطازجة وقدّم ساخناً."
    }
};

recipesData.dessert.mouhalabieh = {
    country: "liban",
    image: "images/mouhalabieh.jpg",
    fr: {
        title: "Mouhalabieh libanais (4 personnes)",
        equipment: [
            "1 casserole",
            "1 fouet",
            "1 bol",
            "1 cuillère en bois",
            "4 verrines ou ramequins",
            "1 balance de cuisine"
        ],
        ingredients: [
            "500 ml lait entier",
            "50 g sucre",
            "30 g maïzena",
            "1 cuillère à café eau de fleur d’oranger (5 ml)",
            "Pistaches concassées pour garnir (10 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans un bol, mélanger la maïzena avec 2 cuillères à soupe de lait pour obtenir une pâte lisse.\n" +
            "2. Dans une casserole, chauffer le reste du lait avec le sucre à feu moyen jusqu’à ce que le sucre soit dissous.\n" +
            "3. Ajouter la maïzena diluée au lait chaud en remuant constamment avec un fouet pour éviter les grumeaux.\n" +
            "4. Cuire 5 à 7 minutes jusqu’à épaississement, en continuant de remuer.\n" +
            "5. Retirer du feu et ajouter l’eau de fleur d’oranger. Mélanger.\n" +
            "6. Verser la préparation dans 4 verrines ou ramequins.\n" +
            "7. Laisser refroidir à température ambiante puis placer au réfrigérateur au moins 2 heures.\n" +
            "8. Garnir de pistaches concassées avant de servir."
    },
    en: {
        title: "Mouhalabieh (Lebanese Milk Pudding) (Serves 4)",
        equipment: [
            "1 saucepan",
            "1 whisk",
            "1 bowl",
            "1 wooden spoon",
            "4 glasses or ramekins",
            "1 kitchen scale"
        ],
        ingredients: [
            "500 ml whole milk",
            "50 g sugar",
            "30 g cornstarch",
            "1 teaspoon orange blossom water (5 ml)",
            "Crushed pistachios for garnish (10 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a bowl, mix cornstarch with 2 tbsp of milk to make a smooth paste.\n" +
            "2. In a saucepan, heat the remaining milk with sugar over medium heat until sugar dissolves.\n" +
            "3. Add the cornstarch mixture to the hot milk, stirring constantly with a whisk to prevent lumps.\n" +
            "4. Cook 5-7 minutes until thickened, stirring continuously.\n" +
            "5. Remove from heat, add orange blossom water, and mix.\n" +
            "6. Pour into 4 glasses or ramekins.\n" +
            "7. Let cool to room temperature, then refrigerate at least 2 hours.\n" +
            "8. Garnish with crushed pistachios before serving."
    },
    nl: {
        title: "Mouhalabieh (Libanese melkpudding) (voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 garde",
            "1 kom",
            "1 houten lepel",
            "4 glaasjes of ramequins",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "500 ml volle melk",
            "50 g suiker",
            "30 g maïzena",
            "1 theelepel oranjebloesemwater (5 ml)",
            "Fijngehakte pistachenoten voor garnering (10 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng in een kom de maïzena met 2 el melk tot een glad papje.\n" +
            "2. Verwarm in een steelpan de rest van de melk met suiker op middelhoog vuur tot de suiker is opgelost.\n" +
            "3. Voeg het maïzenamengsel toe aan de hete melk en blijf roeren met een garde om klontjes te voorkomen.\n" +
            "4. Kook 5-7 minuten tot het mengsel dikker wordt, blijf constant roeren.\n" +
            "5. Haal van het vuur, voeg oranjebloesemwater toe en meng.\n" +
            "6. Giet in 4 glaasjes of ramequins.\n" +
            "7. Laat afkoelen tot kamertemperatuur en zet minstens 2 uur in de koelkast.\n" +
            "8. Garneer met fijngehakte pistachenoten voor het serveren."
    },
    ar: {
        title: "مهلبية لبنانية (تكفي 4 أشخاص)",
        equipment: [
            "قدر",
            "خلاط يدوي",
            "وعاء",
            "ملعقة خشبية",
            "4 كؤوس أو راميكين",
            "ميزان مطبخ"
        ],
        ingredients: [
            "500 مل حليب كامل الدسم",
            "50 غ سكر",
            "30 غ نشا الذرة",
            "1 ملعقة صغيرة ماء زهر البرتقال (5 مل)",
            "فستق مجروش للتزيين (10 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. في وعاء، اخلط نشا الذرة مع 2 ملعقة كبيرة حليب حتى يصبح خليطاً ناعماً.\n" +
            "2. في قدر، سخن باقي الحليب مع السكر على نار متوسطة حتى يذوب السكر.\n" +
            "3. أضف خليط النشا إلى الحليب الساخن مع التحريك المستمر بالخلاط اليدوي لتجنب التكتلات.\n" +
            "4. اطه 5-7 دقائق حتى يتماسك المزيج مع الاستمرار في التحريك.\n" +
            "5. ارفع عن النار، أضف ماء الزهر واخلط.\n" +
            "6. صب الخليط في 4 كؤوس أو راميكين.\n" +
            "7. اتركه يبرد إلى درجة حرارة الغرفة، ثم ضع في الثلاجة لمدة ساعتين على الأقل.\n" +
            "8. زيّن بالفستق المجروش قبل التقديم."
    }
};
recipesData.patisserie.baklava = {
    country: "liban",
    image: "images/baklava.jpg",
    fr: {
        title: "Baklava libanais (4 personnes)",
        equipment: [
            "1 plat rectangulaire pour four",
            "1 couteau",
            "1 planche à découper",
            "1 casserole pour sirop",
            "1 pinceau",
            "1 balance de cuisine",
            "1 cuillère en bois"
        ],
        ingredients: [
            "200 g pâte filo",
            "100 g beurre fondu",
            "150 g noix mixtes (amandes, pistaches, noix), hachées",
            "50 g sucre",
            "1 cuillère à café cannelle moulue (2 g)",
            "100 ml sirop de sucre (50 g sucre + 50 ml eau + 1 cuillère à café eau de fleur d’oranger)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Mélanger les noix hachées, le sucre et la cannelle dans un bol.\n" +
            "3. Beurrer le plat pour le four.\n" +
            "4. Déposer une feuille de pâte filo, badigeonner de beurre fondu. Répéter jusqu’à 3 feuilles.\n" +
            "5. Étaler la moitié du mélange de noix sur les feuilles.\n" +
            "6. Ajouter 3 autres feuilles de pâte filo, badigeonner de beurre.\n" +
            "7. Ajouter le reste du mélange de noix.\n" +
            "8. Recouvrir avec les dernières feuilles de pâte filo (environ 3), en beurrant chaque feuille.\n" +
            "9. Couper le baklava en losanges ou carrés.\n" +
            "10. Cuire au four 30-35 minutes jusqu’à doré.\n" +
            "11. Pendant ce temps, préparer le sirop : chauffer sucre, eau et eau de fleur d’oranger jusqu’à dissolution.\n" +
            "12. À la sortie du four, verser le sirop sur le baklava chaud.\n" +
            "13. Laisser refroidir avant de servir."
    },
    en: {
        title: "Lebanese Baklava (Serves 4)",
        equipment: [
            "1 rectangular baking dish",
            "1 knife",
            "1 cutting board",
            "1 saucepan for syrup",
            "1 brush",
            "1 kitchen scale",
            "1 wooden spoon"
        ],
        ingredients: [
            "200 g filo pastry",
            "100 g melted butter",
            "150 g mixed nuts (almonds, pistachios, walnuts), chopped",
            "50 g sugar",
            "1 teaspoon ground cinnamon (2 g)",
            "100 ml sugar syrup (50 g sugar + 50 ml water + 1 tsp orange blossom water)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Mix chopped nuts, sugar, and cinnamon in a bowl.\n" +
            "3. Butter the baking dish.\n" +
            "4. Place a sheet of filo, brush with melted butter. Repeat 3 sheets.\n" +
            "5. Spread half the nut mixture over the sheets.\n" +
            "6. Add 3 more filo sheets, brushing each with butter.\n" +
            "7. Add the remaining nut mixture.\n" +
            "8. Top with last 3 filo sheets, buttering each.\n" +
            "9. Cut baklava into diamonds or squares.\n" +
            "10. Bake 30-35 minutes until golden.\n" +
            "11. Meanwhile, prepare syrup: heat sugar, water, and orange blossom water until dissolved.\n" +
            "12. Pour syrup over hot baklava out of the oven.\n" +
            "13. Let cool before serving."
    },
    nl: {
        title: "Libanese Baklava (voor 4 personen)",
        equipment: [
            "1 rechthoekige ovenschaal",
            "1 mes",
            "1 snijplank",
            "1 steelpan voor siroop",
            "1 kwast",
            "1 keukenweegschaal",
            "1 houten lepel"
        ],
        ingredients: [
            "200 g filodeeg",
            "100 g gesmolten boter",
            "150 g gemengde noten (amandelen, pistachenoten, walnoten), gehakt",
            "50 g suiker",
            "1 theelepel kaneelpoeder (2 g)",
            "100 ml suikersiroop (50 g suiker + 50 ml water + 1 theelepel oranjebloesemwater)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Meng gehakte noten, suiker en kaneel in een kom.\n" +
            "3. Vet de ovenschaal in.\n" +
            "4. Leg een vel filodeeg, bestrijk met gesmolten boter. Herhaal 3 vellen.\n" +
            "5. Verdeel de helft van het notenmengsel over de vellen.\n" +
            "6. Voeg 3 andere filovellen toe, bestrijk elk met boter.\n" +
            "7. Voeg het resterende notenmengsel toe.\n" +
            "8. Bedek met de laatste 3 filovellen, boter elk.\n" +
            "9. Snijd baklava in ruit- of vierkanten.\n" +
            "10. Bak 30-35 minuten tot goudbruin.\n" +
            "11. Maak ondertussen de siroop: verwarm suiker, water en oranjebloesemwater tot opgelost.\n" +
            "12. Giet de siroop over de hete baklava uit de oven.\n" +
            "13. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "بقلاوة لبنانية (تكفي 4 أشخاص)",
        equipment: [
            "صينية خبز مستطيلة",
            "سكين",
            "لوح تقطيع",
            "قدر لتحضير الشراب",
            "فرشاة",
            "ميزان مطبخ",
            "ملعقة خشبية"
        ],
        ingredients: [
            "200 غ عجينة فيلو",
            "100 غ زبدة مذابة",
            "150 غ مكسرات مشكلة (لوز، فستق، جوز)، مفرومة",
            "50 غ سكر",
            "1 ملعقة صغيرة قرفة مطحونة (2 غ)",
            "100 مل شراب سكر (50 غ سكر + 50 مل ماء + 1 ملعقة صغيرة ماء زهر)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن على 180°C.\n" +
            "2. اخلط المكسرات المفرومة مع السكر والقرفة في وعاء.\n" +
            "3. ادهن صينية الخبز بالزبدة.\n" +
            "4. ضع ورقة من عجينة الفيلو وادهنها بالزبدة المذابة. كرر 3 ورقات.\n" +
            "5. ضع نصف خليط المكسرات على العجينة.\n" +
            "6. أضف 3 ورقات فيلو أخرى، وادهن كل ورقة بالزبدة.\n" +
            "7. أضف بقية خليط المكسرات.\n" +
            "8. ضع آخر 3 ورقات فيلو، وادهن كل ورقة بالزبدة.\n" +
            "9. قطع البقلاوة إلى معينات أو مربعات.\n" +
            "10. اخبز 30-35 دقيقة حتى تصبح ذهبية.\n" +
            "11. أثناء ذلك حضّر الشراب: سخن السكر والماء وماء الزهر حتى يذوب.\n" +
            "12. صب الشراب على البقلاوة الساخنة بعد خروجها من الفرن.\n" +
            "13. اتركها لتبرد قبل التقديم."
    }
};
recipesData.entree.mercimek = {
    country: "turquie",
    image: "images/mercimek.jpg",
    fr: {
        title: "Mercimek Çorbası (Soupe de lentilles turque) (4 personnes)",
        equipment: [
            "1 casserole moyenne",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol",
            "1 mixeur plongeant",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g lentilles rouges",
            "1 carotte moyenne (100 g), coupée en dés",
            "1 oignon moyen (100 g), haché",
            "1 pomme de terre moyenne (150 g), coupée en dés",
            "1 cuillère à soupe concentré de tomate (15 g)",
            "1 cuillère à soupe huile d’olive (15 ml)",
            "1 litre d’eau ou bouillon de légumes",
            "1/2 cuillère à café paprika doux (1 g)",
            "Sel et poivre selon goût",
            "Persil frais pour garnir (10 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Rincer les lentilles à l’eau froide.\n" +
            "2. Dans une casserole, chauffer l’huile d’olive, ajouter l’oignon et la carotte, faire revenir 3-4 minutes.\n" +
            "3. Ajouter la pomme de terre et le concentré de tomate, mélanger 2 minutes.\n" +
            "4. Ajouter les lentilles et l’eau ou bouillon, porter à ébullition.\n" +
            "5. Réduire le feu et cuire 20-25 minutes jusqu’à ce que les légumes et lentilles soient tendres.\n" +
            "6. Mixer la soupe avec un mixeur plongeant pour obtenir une texture lisse.\n" +
            "7. Assaisonner avec sel, poivre et paprika.\n" +
            "8. Servir chaud, garni de persil frais."
    },
    en: {
        title: "Mercimek Çorbası (Turkish Lentil Soup) (Serves 4)",
        equipment: [
            "1 medium saucepan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 hand blender",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g red lentils",
            "1 medium carrot (100 g), diced",
            "1 medium onion (100 g), chopped",
            "1 medium potato (150 g), diced",
            "1 tbsp tomato paste (15 g)",
            "1 tbsp olive oil (15 ml)",
            "1 liter water or vegetable broth",
            "1/2 tsp sweet paprika (1 g)",
            "Salt and pepper to taste",
            "Fresh parsley for garnish (10 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Rinse lentils under cold water.\n" +
            "2. In a saucepan, heat olive oil, add onion and carrot, sauté 3-4 minutes.\n" +
            "3. Add potato and tomato paste, stir 2 minutes.\n" +
            "4. Add lentils and water or broth, bring to a boil.\n" +
            "5. Reduce heat and cook 20-25 minutes until vegetables and lentils are tender.\n" +
            "6. Blend the soup with a hand blender until smooth.\n" +
            "7. Season with salt, pepper, and paprika.\n" +
            "8. Serve hot, garnished with fresh parsley."
    },
    nl: {
        title: "Mercimek Çorbası (Turkse linzensoep) (voor 4 personen)",
        equipment: [
            "1 middelgrote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 staafmixer",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g rode linzen",
            "1 middelgrote wortel (100 g), in blokjes",
            "1 middelgrote ui (100 g), gehakt",
            "1 middelgrote aardappel (150 g), in blokjes",
            "1 eetlepel tomatenpuree (15 g)",
            "1 eetlepel olijfolie (15 ml)",
            "1 liter water of groentebouillon",
            "1/2 theelepel zoete paprika (1 g)",
            "Zout en peper naar smaak",
            "Verse peterselie voor garnering (10 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Spoel de linzen onder koud water.\n" +
            "2. Verhit olijfolie in een pan, voeg ui en wortel toe, bak 3-4 minuten.\n" +
            "3. Voeg aardappel en tomatenpuree toe, roer 2 minuten.\n" +
            "4. Voeg linzen en water of bouillon toe, breng aan de kook.\n" +
            "5. Zet het vuur laag en kook 20-25 minuten tot groenten en linzen zacht zijn.\n" +
            "6. Pureer de soep met een staafmixer tot een gladde textuur.\n" +
            "7. Breng op smaak met zout, peper en paprika.\n" +
            "8. Serveer heet, garneer met verse peterselie."
    },
    ar: {
        title: "شوربة العدس التركية (Mercimek Çorbası) (تكفي 4 أشخاص)",
        equipment: [
            "قدر متوسط",
            "سكين",
            "لوح تقطيع",
            "ملعقة خشبية",
            "وعاء",
            "خلاط يدوي",
            "ميزان مطبخ"
        ],
        ingredients: [
            "200 غ عدس أحمر",
            "1 جزرة متوسطة (100 غ)، مقطعة مكعبات",
            "1 بصلة متوسطة (100 غ)، مفرومة",
            "1 بطاطس متوسطة (150 غ)، مقطعة مكعبات",
            "1 ملعقة كبيرة معجون طماطم (15 غ)",
            "1 ملعقة كبيرة زيت زيتون (15 مل)",
            "1 لتر ماء أو مرق خضار",
            "1/2 ملعقة صغيرة فلفل حلو (1 غ)",
            "ملح وفلفل حسب الرغبة",
            "بقدونس طازج للتزيين (10 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اغسل العدس بالماء البارد.\n" +
            "2. في قدر، سخن زيت الزيتون، أضف البصل والجزر، قلب 3-4 دقائق.\n" +
            "3. أضف البطاطس ومعجون الطماطم، قلب لمدة دقيقتين.\n" +
            "4. أضف العدس والماء أو المرق، واتركه حتى الغليان.\n" +
            "5. خفف النار واطه 20-25 دقيقة حتى تصبح الخضار والعدس طرية.\n" +
            "6. اخلط الشوربة بخلاط يدوي حتى تصبح ناعمة.\n" +
            "7. تبّل بالملح والفلفل والبابريكا.\n" +
            "8. قدمها ساخنة وزينها بالبقدونس الطازج."
    }
};
recipesData.plat.kebab = {
    country: "turquie",
    image: "images/kebab.jpg",

    fr: {
        title: "Kebab de poulet à la turque (4 personnes)",
        equipment: [
            "1 planche à découper",
            "1 couteau",
            "1 bol",
            "1 cuillère à soupe",
            "1 pinceau de cuisine",
            "1 poêle ou grill",
            "1 cuillère en bois",
            "1 balance de cuisine"
        ],
        ingredients: [
            "500 g blancs de poulet, coupés en cubes",
            "2 cuillères à soupe yaourt nature (30 g)",
            "1 cuillère à soupe huile d’olive (15 ml)",
            "1 cuillère à café paprika doux (2 g)",
            "1/2 cuillère à café cumin moulu (1 g)",
            "1/2 cuillère à café coriandre moulue (1 g)",
            "1/2 cuillère à café sel (3 g)",
            "1/4 cuillère à café poivre noir (1 g)",
            "1 citron (jus, 20 ml)",
            "1 gousse d’ail écrasée",
            "Poivrons et oignons pour accompagner (optionnel, 150 g chacun)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans un bol, mélanger le yaourt, l’huile, le jus de citron, l’ail écrasé, le paprika, le cumin, la coriandre, le sel et le poivre.\n" +
            "2. Ajouter les cubes de poulet dans la marinade, bien enrober et laisser reposer au réfrigérateur 30 à 60 minutes.\n" +
            "3. Pendant ce temps, couper les poivrons et oignons en morceaux moyens.\n" +
            "4. Préchauffer une poêle ou un grill à feu moyen.\n" +
            "5. Enfiler les cubes de poulet sur des brochettes (optionnel), en alternant avec les légumes si souhaité.\n" +
            "6. Cuire le poulet 10-12 minutes en le retournant régulièrement jusqu’à cuisson complète.\n" +
            "7. Servir chaud avec légumes grillés, riz ou pain turc."
    },

    en: {
        title: "Turkish Chicken Kebab (Serves 4)",
        equipment: [
            "1 cutting board",
            "1 knife",
            "1 bowl",
            "1 tablespoon",
            "1 kitchen brush",
            "1 pan or grill",
            "1 wooden spoon",
            "1 kitchen scale"
        ],
        ingredients: [
            "500 g chicken breast, cut into cubes",
            "2 tbsp plain yogurt (30 g)",
            "1 tbsp olive oil (15 ml)",
            "1 tsp sweet paprika (2 g)",
            "1/2 tsp ground cumin (1 g)",
            "1/2 tsp ground coriander (1 g)",
            "1/2 tsp salt (3 g)",
            "1/4 tsp black pepper (1 g)",
            "1 lemon (juice, 20 ml)",
            "1 garlic clove, crushed",
            "Bell peppers and onions for serving (optional, 150 g each)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a bowl, mix yogurt, oil, lemon juice, crushed garlic, paprika, cumin, coriander, salt, and pepper.\n" +
            "2. Add chicken cubes, coat well, refrigerate 30-60 minutes.\n" +
            "3. Meanwhile, cut peppers and onions into medium pieces.\n" +
            "4. Preheat a pan or grill over medium heat.\n" +
            "5. Skewer chicken cubes on skewers (optional), alternating with vegetables if desired.\n" +
            "6. Cook chicken 10-12 minutes, turning regularly until fully cooked.\n" +
            "7. Serve hot with grilled vegetables, rice, or Turkish bread."
    },

    nl: {
        title: "Turkse Kippenkebab (voor 4 personen)",
        equipment: [
            "1 snijplank",
            "1 mes",
            "1 kom",
            "1 eetlepel",
            "1 keukenkwast",
            "1 pan of grill",
            "1 houten lepel",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "500 g kipfilet, in blokjes",
            "2 eetlepels yoghurt (30 g)",
            "1 eetlepel olijfolie (15 ml)",
            "1 theelepel zoete paprika (2 g)",
            "1/2 theelepel gemalen komijn (1 g)",
            "1/2 theelepel gemalen koriander (1 g)",
            "1/2 theelepel zout (3 g)",
            "1/4 theelepel zwarte peper (1 g)",
            "1 citroen (sap, 20 ml)",
            "1 teentje knoflook, geperst",
            "Paprika en uien voor erbij (optioneel, 150 g elk)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng in een kom yoghurt, olie, citroensap, geperste knoflook, paprika, komijn, koriander, zout en peper.\n" +
            "2. Voeg de kipblokjes toe, meng goed en zet 30-60 minuten in de koelkast.\n" +
            "3. Snijd ondertussen paprika en uien in middelgrote stukken.\n" +
            "4. Verwarm een pan of grill op middelhoog vuur.\n" +
            "5. Rijg kipblokjes aan spiesjes (optioneel), afgewisseld met groenten indien gewenst.\n" +
            "6. Bak de kip 10-12 minuten, regelmatig keren tot volledig gaar.\n" +
            "7. Serveer heet met gegrilde groenten, rijst of Turks brood."
    },

    ar: {
        title: "كباب الدجاج التركي (تكفي 4 أشخاص)",
        equipment: [
            "لوح تقطيع",
            "سكين",
            "وعاء",
            "ملعقة كبيرة",
            "فرشاة مطبخ",
            "مقلاة أو شواية",
            "ملعقة خشبية",
            "ميزان مطبخ"
        ],
        ingredients: [
            "500 غ صدر دجاج، مقطع مكعبات",
            "2 ملعقة كبيرة زبادي (30 غ)",
            "1 ملعقة كبيرة زيت زيتون (15 مل)",
            "1 ملعقة صغيرة بابريكا حلوة (2 غ)",
            "1/2 ملعقة صغيرة كمون مطحون (1 غ)",
            "1/2 ملعقة صغيرة كزبرة مطحونة (1 غ)",
            "1/2 ملعقة صغيرة ملح (3 غ)",
            "1/4 ملعقة صغيرة فلفل أسود (1 غ)",
            "1 ليمون (عصير، 20 مل)",
            "1 فص ثوم مهروس",
            "فلفل وبصل للتقديم (اختياري، 150 غ لكل منهما)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. في وعاء، اخلط الزبادي والزيت وعصير الليمون والثوم المهروس والبابريكا والكمون والكزبرة والملح والفلفل.\n" +
            "2. أضف مكعبات الدجاج، غطها جيداً، وضعها في الثلاجة 30-60 دقيقة.\n" +
            "3. أثناء ذلك، قطع الفلفل والبصل إلى قطع متوسطة.\n" +
            "4. سخن مقلاة أو شواية على نار متوسطة.\n" +
            "5. ضع مكعبات الدجاج على أسياخ (اختياري)، بالتناوب مع الخضار إذا رغبت.\n" +
            "6. اطه الدجاج 10-12 دقيقة مع التقليب المنتظم حتى ينضج تماماً.\n" +
            "7. قدمه ساخناً مع الخضار المشوية، الأرز أو الخبز التركي."
    }
};

recipesData.dessert.kunefe = {
    country: "turquie",
    image: "images/kunefe.jpg",

    fr: {
        title: "Künefe turque (4 personnes)",
        equipment: [
            "1 poêle antiadhésive moyenne",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 cuillère en bois",
            "1 casserole pour sirop",
            "1 pinceau de cuisine",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g pâte kadayıf (cheveux d’ange turcs)",
            "100 g beurre fondu",
            "150 g fromage mozzarella doux ou akawi, râpé",
            "50 g sucre",
            "50 ml eau",
            "1/2 cuillère à café jus de citron (2 ml)",
            "Pistaches concassées pour garnir (10 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer la poêle à feu doux.\n" +
            "2. Mélanger la pâte kadayıf avec le beurre fondu pour bien enrober.\n" +
            "3. Étaler la moitié de la pâte dans la poêle, presser légèrement.\n" +
            "4. Répartir le fromage râpé uniformément sur la pâte.\n" +
            "5. Recouvrir avec l’autre moitié de la pâte, presser légèrement.\n" +
            "6. Cuire à feu doux 8-10 minutes jusqu’à ce que le dessous soit doré.\n" +
            "7. Retourner délicatement le künefe pour cuire l’autre côté 8-10 minutes.\n" +
            "8. Préparer le sirop : chauffer sucre, eau et jus de citron jusqu’à dissolution complète.\n" +
            "9. Verser le sirop chaud sur le künefe chaud.\n" +
            "10. Garnir de pistaches concassées et servir immédiatement."
    },

    en: {
        title: "Turkish Künefe (Serves 4)",
        equipment: [
            "1 medium non-stick pan",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 wooden spoon",
            "1 saucepan for syrup",
            "1 kitchen brush",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g kadayıf pastry (Turkish shredded phyllo)",
            "100 g melted butter",
            "150 g mild mozzarella or akawi cheese, grated",
            "50 g sugar",
            "50 ml water",
            "1/2 tsp lemon juice (2 ml)",
            "Crushed pistachios for garnish (10 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat the pan over low heat.\n" +
            "2. Mix kadayıf pastry with melted butter to coat evenly.\n" +
            "3. Spread half of the pastry in the pan, press lightly.\n" +
            "4. Spread grated cheese evenly over the pastry.\n" +
            "5. Cover with the remaining pastry, press lightly.\n" +
            "6. Cook on low heat 8-10 minutes until the bottom is golden.\n" +
            "7. Carefully flip the künefe to cook the other side 8-10 minutes.\n" +
            "8. Prepare syrup: heat sugar, water, and lemon juice until fully dissolved.\n" +
            "9. Pour hot syrup over hot künefe.\n" +
            "10. Garnish with crushed pistachios and serve immediately."
    },

    nl: {
        title: "Turkse Künefe (voor 4 personen)",
        equipment: [
            "1 middelgrote antiaanbakpan",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 houten lepel",
            "1 steelpan voor siroop",
            "1 kwast",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g kadayıf-deeg (Turks fijn filodeeg)",
            "100 g gesmolten boter",
            "150 g milde mozzarella of akawi kaas, geraspt",
            "50 g suiker",
            "50 ml water",
            "1/2 theelepel citroensap (2 ml)",
            "Fijngehakte pistachenoten voor garnering (10 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de pan op laag vuur.\n" +
            "2. Meng het kadayıf-deeg met gesmolten boter zodat het goed bedekt is.\n" +
            "3. Leg de helft van het deeg in de pan, druk licht aan.\n" +
            "4. Verdeel de geraspte kaas gelijkmatig over het deeg.\n" +
            "5. Bedek met de resterende helft van het deeg, druk licht aan.\n" +
            "6. Bak op laag vuur 8-10 minuten tot de onderkant goudbruin is.\n" +
            "7. Draai voorzichtig de künefe om en bak de andere kant 8-10 minuten.\n" +
            "8. Bereid de siroop: verwarm suiker, water en citroensap tot volledig opgelost.\n" +
            "9. Giet de hete siroop over de hete künefe.\n" +
            "10. Garneer met gehakte pistachenoten en serveer direct."
    },

    ar: {
        title: "كنافة تركية (تكفي 4 أشخاص)",
        equipment: [
            "مقلاة غير لاصقة متوسطة",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "ملعقة خشبية",
            "قدر لتحضير الشراب",
            "فرشاة مطبخ",
            "ميزان مطبخ"
        ],
        ingredients: [
            "200 غ عجينة كاداييف (فييلو تركي شعري)",
            "100 غ زبدة مذابة",
            "150 غ جبن موزاريلا خفيف أو جبن عكاوي، مبشور",
            "50 غ سكر",
            "50 مل ماء",
            "1/2 ملعقة صغيرة عصير ليمون (2 مل)",
            "فستق مجروش للتزيين (10 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن المقلاة على نار هادئة.\n" +
            "2. امزج عجينة الكاداييف مع الزبدة المذابة لتغطية متساوية.\n" +
            "3. ضع نصف العجينة في المقلاة واضغط برفق.\n" +
            "4. وزع الجبن المبشور بالتساوي فوق العجينة.\n" +
            "5. غطِ بالنصف المتبقي من العجينة واضغط برفق.\n" +
            "6. اطه على نار هادئة 8-10 دقائق حتى يصبح القاع ذهبي اللون.\n" +
            "7. قلب الكنافة بحذر لطهي الجانب الآخر 8-10 دقائق.\n" +
            "8. حضّر الشراب: سخّن السكر والماء وعصير الليمون حتى يذوب تماماً.\n" +
            "9. صب الشراب الساخن على الكنافة الساخنة.\n" +
            "10. زيّن بالفستق المجروش وقدّم فوراً."
    }
};

recipesData.patisserie.baklava = {
    country: "turquie",
    image: "images/baklava.jpg",
    fr: {
        title: "Baklava turque (4 personnes)",
        equipment: [
            "1 plat rectangulaire de 20x20 cm",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 pinceau de cuisine",
            "1 casserole pour sirop",
            "1 cuillère en bois",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g pâte filo",
            "100 g beurre fondu",
            "150 g noix ou pistaches hachées",
            "50 g sucre",
            "50 ml eau",
            "1/2 cuillère à café jus de citron (2 ml)",
            "1 cuillère à café cannelle moulue (2 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Beurrer légèrement le plat.\n" +
            "3. Étaler une feuille de pâte filo, badigeonner de beurre fondu, répéter 3 fois.\n" +
            "4. Répartir une couche de noix ou pistaches hachées, saupoudrer de cannelle.\n" +
            "5. Couvrir avec 3 autres feuilles de pâte filo, beurrer entre chaque.\n" +
            "6. Répéter les couches jusqu’à épuisement des ingrédients.\n" +
            "7. Découper le baklava en losanges avec un couteau.\n" +
            "8. Cuire au four 25-30 minutes jusqu’à doré.\n" +
            "9. Préparer le sirop: chauffer sucre, eau et jus de citron jusqu’à dissolution.\n" +
            "10. Verser le sirop chaud sur le baklava chaud.\n" +
            "11. Laisser absorber le sirop 1 heure avant de servir."
    },
    en: {
        title: "Turkish Baklava (Serves 4)",
        equipment: [
            "1 rectangular dish 20x20 cm",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 kitchen brush",
            "1 saucepan for syrup",
            "1 wooden spoon",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g filo pastry",
            "100 g melted butter",
            "150 g chopped walnuts or pistachios",
            "50 g sugar",
            "50 ml water",
            "1/2 tsp lemon juice (2 ml)",
            "1 tsp ground cinnamon (2 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Lightly butter the baking dish.\n" +
            "3. Place one sheet of filo, brush with melted butter, repeat 3 times.\n" +
            "4. Spread a layer of chopped nuts, sprinkle cinnamon.\n" +
            "5. Cover with 3 more filo sheets, butter between each.\n" +
            "6. Repeat layers until ingredients are used.\n" +
            "7. Cut baklava into diamonds with a knife.\n" +
            "8. Bake 25-30 minutes until golden.\n" +
            "9. Prepare syrup: heat sugar, water, and lemon juice until dissolved.\n" +
            "10. Pour hot syrup over hot baklava.\n" +
            "11. Let absorb syrup 1 hour before serving."
    },
    nl: {
        title: "Turkse Baklava (voor 4 personen)",
        equipment: [
            "1 rechthoekige schaal 20x20 cm",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 kwast",
            "1 steelpan voor siroop",
            "1 houten lepel",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g filodeeg",
            "100 g gesmolten boter",
            "150 g gehakte walnoten of pistachenoten",
            "50 g suiker",
            "50 ml water",
            "1/2 theelepel citroensap (2 ml)",
            "1 theelepel gemalen kaneel (2 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Vet de ovenschaal licht in.\n" +
            "3. Leg een vel filodeeg, bestrijk met boter, herhaal 3 keer.\n" +
            "4. Verdeel een laag gehakte noten, bestrooi met kaneel.\n" +
            "5. Bedek met 3 andere vellen filodeeg, bestrijk tussen elk.\n" +
            "6. Herhaal lagen tot alle ingrediënten op zijn.\n" +
            "7. Snijd baklava in ruiten met een mes.\n" +
            "8. Bak 25-30 minuten tot goudbruin.\n" +
            "9. Bereid siroop: verwarm suiker, water en citroensap tot opgelost.\n" +
            "10. Giet hete siroop over hete baklava.\n" +
            "11. Laat 1 uur trekken voor het serveren."
    },
    ar: {
        title: "بقلاوة تركية (تكفي 4 أشخاص)",
        equipment: [
            "صينية خبز مستطيلة 20x20 سم",
            "سكين",
            "لوح تقطيع",
            "وعاء",
            "فرشاة مطبخ",
            "قدر لتحضير الشراب",
            "ملعقة خشبية",
            "ميزان مطبخ"
        ],
        ingredients: [
            "200 غ عجينة فيلو",
            "100 غ زبدة مذابة",
            "150 غ جوز أو فستق مفروم",
            "50 غ سكر",
            "50 مل ماء",
            "1/2 ملعقة صغيرة عصير ليمون (2 مل)",
            "1 ملعقة صغيرة قرفة مطحونة (2 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن إلى 180°C.\n" +
            "2. ادهن الصينية بالزبدة قليلاً.\n" +
            "3. ضع ورقة فيلو، ادهن بالزبدة، كرر 3 مرات.\n" +
            "4. ضع طبقة من المكسرات المفرومة، رش القرفة.\n" +
            "5. غطِ بثلاث ورقات فيلو أخرى، ادهن بين كل ورقة.\n" +
            "6. كرر الطبقات حتى نفاد المكونات.\n" +
            "7. اقطع البقلاوة إلى أشكال ماسية.\n" +
            "8. اخبز 25-30 دقيقة حتى تصبح ذهبية.\n" +
            "9. حضر الشراب: سخن السكر والماء وعصير الليمون حتى يذوب.\n" +
            "10. صب الشراب الساخن على البقلاوة الساخنة.\n" +
            "11. اتركه ليمتص الشراب ساعة قبل التقديم."
    }
};
recipesData.entree.rouleaux = {
    country: "asie",
    image: "images/rouleaux_printemps.jpg",

    fr: {
        title: "Rouleaux de printemps vietnamiens (4 personnes)",
        equipment: [
            "1 planche à découper",
            "1 couteau",
            "1 bol pour trempage",
            "1 saladier",
            "1 cuillère",
            "1 assiette de service"
        ],
        ingredients: [
            "8 feuilles de riz (environ 20 cm de diamètre)",
            "100 g vermicelles de riz",
            "100 g crevettes cuites, décortiquées",
            "50 g salade verte",
            "50 g carottes râpées",
            "50 g concombre en julienne",
            "Feuilles de menthe fraîche (10 feuilles)",
            "Sauce soja sucrée ou sauce nuoc-mâm (30 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Faire tremper les vermicelles dans de l’eau chaude 5 minutes, égoutter.\n" +
            "2. Tremper une feuille de riz dans l’eau tiède jusqu’à ce qu’elle soit souple.\n" +
            "3. Déposer la feuille sur une assiette plate.\n" +
            "4. Au centre, déposer un peu de salade, carottes, concombre, vermicelles et crevettes.\n" +
            "5. Ajouter quelques feuilles de menthe.\n" +
            "6. Replier les côtés et rouler fermement.\n" +
            "7. Répéter pour toutes les feuilles.\n" +
            "8. Servir avec la sauce soja ou sauce nuoc-mâm en trempette."
    },

    en: {
        title: "Vietnamese Spring Rolls (Serves 4)",
        equipment: [
            "1 cutting board",
            "1 knife",
            "1 bowl for soaking",
            "1 salad bowl",
            "1 spoon",
            "1 serving plate"
        ],
        ingredients: [
            "8 rice paper sheets (~20 cm diameter)",
            "100 g rice vermicelli",
            "100 g cooked shrimp, peeled",
            "50 g lettuce",
            "50 g grated carrots",
            "50 g cucumber julienne",
            "Fresh mint leaves (10 leaves)",
            "Sweet soy sauce or nuoc-mâm (30 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Soak vermicelli in hot water 5 minutes, drain.\n" +
            "2. Soak a rice paper sheet in warm water until soft.\n" +
            "3. Place sheet on a flat plate.\n" +
            "4. In the center, add lettuce, carrots, cucumber, vermicelli, and shrimp.\n" +
            "5. Add a few mint leaves.\n" +
            "6. Fold sides and roll tightly.\n" +
            "7. Repeat for all sheets.\n" +
            "8. Serve with soy sauce or nuoc-mâm for dipping."
    },

    nl: {
        title: "Vietnamese Lenterolletjes (voor 4 personen)",
        equipment: [
            "1 snijplank",
            "1 mes",
            "1 kom om te weken",
            "1 slakom",
            "1 lepel",
            "1 serveerschaal"
        ],
        ingredients: [
            "8 rijstvellen (~20 cm diameter)",
            "100 g rijstvermicelli",
            "100 g gekookte garnalen, gepeld",
            "50 g sla",
            "50 g geraspte wortel",
            "50 g komkommer julienne",
            "Verse muntblaadjes (10 blaadjes)",
            "Zoete sojasaus of nuoc-mâm (30 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Week de vermicelli 5 minuten in heet water, afgieten.\n" +
            "2. Week een rijstvel in warm water tot het zacht is.\n" +
            "3. Leg het vel op een plat bord.\n" +
            "4. Leg in het midden sla, wortel, komkommer, vermicelli en garnalen.\n" +
            "5. Voeg enkele muntblaadjes toe.\n" +
            "6. Vouw de zijkanten en rol stevig op.\n" +
            "7. Herhaal voor alle vellen.\n" +
            "8. Serveer met sojasaus of nuoc-mâm om in te dippen."
    },

    ar: {
        title: "سبرينغ رولز فيتنامية (تكفي 4 أشخاص)",
        equipment: [
            "لوح تقطيع",
            "سكين",
            "وعاء للنقع",
            "وعاء سلطة",
            "ملعقة",
            "طبق تقديم"
        ],
        ingredients: [
            "8 أوراق أرز (~20 سم قطر)",
            "100 غ نودلز أرز",
            "100 غ روبيان مطبوخ، مقشر",
            "50 غ خس",
            "50 غ جزر مبشور",
            "50 غ خيار مقطع Julienne",
            "أوراق نعناع طازجة (10 أوراق)",
            "صلصة الصويا الحلوة أو نووك مام (30 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. انقع النودلز في ماء ساخن 5 دقائق، ثم صفها.\n" +
            "2. انقع ورقة أرز في ماء دافئ حتى تصبح لينة.\n" +
            "3. ضع الورقة على طبق مسطح.\n" +
            "4. ضع في الوسط الخس والجزر والخيار والنودلز والروبيان.\n" +
            "5. أضف بعض أوراق النعناع.\n" +
            "6. اطوِ الجوانب ولف الورقة بإحكام.\n" +
            "7. كرر لجميع الأوراق.\n" +
            "8. قدمها مع صلصة الصويا أو نووك مام للغمس."
    }
};

recipesData.plat.riz_sauté_tofu = {
    country: "asie",
    image: "images/riz_saute_tofu.jpg",

    fr: {
        title: "Riz sauté aux légumes et tofu (4 personnes)",
        equipment: [
            "1 wok ou grande poêle",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 cuillère en bois",
            "1 balance de cuisine",
            "1 spatule"
        ],
        ingredients: [
            "200 g riz jasmin",
            "400 ml eau",
            "200 g tofu ferme, coupé en cubes",
            "100 g carottes, coupées en julienne",
            "100 g poivron rouge, coupé en lamelles",
            "100 g brocoli, en petits bouquets",
            "2 gousses d’ail, émincées",
            "2 cuillères à soupe huile végétale (30 ml)",
            "2 cuillères à soupe sauce soja (30 ml)",
            "1 cuillère à soupe huile de sésame (15 ml)",
            "Sel et poivre selon goût",
            "1 oignon vert pour garnir (10 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Rincer le riz jasmin à l’eau froide jusqu’à ce que l’eau soit claire.\n" +
            "2. Porter 400 ml d’eau à ébullition, ajouter le riz, couvrir et cuire 12-15 min jusqu’à absorption.\n" +
            "3. Dans un bol, mélanger le tofu avec 1 cuillère à soupe de sauce soja.\n" +
            "4. Chauffer 1 cuillère à soupe d’huile dans le wok à feu moyen.\n" +
            "5. Ajouter le tofu et cuire 5 minutes en remuant jusqu’à léger doré, retirer et réserver.\n" +
            "6. Ajouter l’autre cuillère à soupe d’huile dans le wok.\n" +
            "7. Faire revenir l’ail et les légumes (carottes, poivron, brocoli) 5-7 minutes jusqu’à tendres mais croquants.\n" +
            "8. Ajouter le riz cuit et le tofu, mélanger délicatement.\n" +
            "9. Ajouter 1 cuillère à soupe sauce soja et 1 cuillère à soupe huile de sésame, bien incorporer.\n" +
            "10. Assaisonner avec sel et poivre.\n" +
            "11. Garnir avec oignon vert émincé et servir chaud."
    },

    en: {
        title: "Stir-Fried Rice with Vegetables and Tofu (Serves 4)",
        equipment: [
            "1 wok or large pan",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 wooden spoon",
            "1 kitchen scale",
            "1 spatula"
        ],
        ingredients: [
            "200 g jasmine rice",
            "400 ml water",
            "200 g firm tofu, cubed",
            "100 g carrots, julienne",
            "100 g red bell pepper, sliced",
            "100 g broccoli florets",
            "2 garlic cloves, minced",
            "2 tbsp vegetable oil (30 ml)",
            "2 tbsp soy sauce (30 ml)",
            "1 tbsp sesame oil (15 ml)",
            "Salt and pepper to taste",
            "1 green onion for garnish (10 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Rinse jasmine rice in cold water until water runs clear.\n" +
            "2. Bring 400 ml water to a boil, add rice, cover and cook 12-15 min until absorbed.\n" +
            "3. In a bowl, mix tofu with 1 tbsp soy sauce.\n" +
            "4. Heat 1 tbsp oil in wok over medium heat.\n" +
            "5. Add tofu and cook 5 minutes, stirring until lightly golden, remove and set aside.\n" +
            "6. Add remaining 1 tbsp oil in wok.\n" +
            "7. Stir-fry garlic and vegetables (carrots, bell pepper, broccoli) 5-7 min until tender-crisp.\n" +
            "8. Add cooked rice and tofu, gently mix.\n" +
            "9. Add 1 tbsp soy sauce and 1 tbsp sesame oil, combine well.\n" +
            "10. Season with salt and pepper.\n" +
            "11. Garnish with sliced green onion and serve hot."
    },

    nl: {
        title: "Gebakken rijst met groenten en tofu (voor 4 personen)",
        equipment: [
            "1 wok of grote pan",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 houten lepel",
            "1 keukenweegschaal",
            "1 spatel"
        ],
        ingredients: [
            "200 g jasmijnrijst",
            "400 ml water",
            "200 g stevige tofu, in blokjes",
            "100 g wortels, julienne",
            "100 g rode paprika, in reepjes",
            "100 g broccoli, in kleine roosjes",
            "2 teentjes knoflook, fijngehakt",
            "2 eetlepels plantaardige olie (30 ml)",
            "2 eetlepels sojasaus (30 ml)",
            "1 eetlepel sesamolie (15 ml)",
            "Zout en peper naar smaak",
            "1 lente-ui voor garnering (10 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Spoel de jasmijnrijst af tot het water helder is.\n" +
            "2. Breng 400 ml water aan de kook, voeg rijst toe, dek af en kook 12-15 min tot water is opgenomen.\n" +
            "3. Meng tofu in een kom met 1 eetlepel sojasaus.\n" +
            "4. Verhit 1 eetlepel olie in wok op middelhoog vuur.\n" +
            "5. Voeg tofu toe en bak 5 minuten, roer tot licht goudbruin, haal uit wok en zet apart.\n" +
            "6. Voeg resterende 1 eetlepel olie toe in wok.\n" +
            "7. Bak knoflook en groenten (wortels, paprika, broccoli) 5-7 min tot beetgaar.\n" +
            "8. Voeg gekookte rijst en tofu toe, meng voorzichtig.\n" +
            "9. Voeg 1 eetlepel sojasaus en 1 eetlepel sesamolie toe, goed mengen.\n" +
            "10. Breng op smaak met zout en peper.\n" +
            "11. Garneer met gesneden lente-ui en serveer warm."
    },

    ar: {
        title: "أرز مقلي بالخضار والتوفو (تكفي 4 أشخاص)",
        equipment: [
            "1 ووك أو مقلاة كبيرة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 ملعقة خشبية",
            "1 ميزان مطبخ",
            "1 ملعقة مسطحة"
        ],
        ingredients: [
            "200 غ أرز ياسمين",
            "400 مل ماء",
            "200 غ توفو صلب، مكعبات",
            "100 غ جزر، مقطع Julienne",
            "100 غ فلفل أحمر، شرائح",
            "100 غ بروكلي، زهرات صغيرة",
            "2 فص ثوم مفروم",
            "2 ملعقة كبيرة زيت نباتي (30 مل)",
            "2 ملعقة كبيرة صويا صوص (30 مل)",
            "1 ملعقة كبيرة زيت سمسم (15 مل)",
            "ملح وفلفل حسب الذوق",
            "1 بصل أخضر للتزيين (10 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اغسل أرز الياسمين حتى يصبح الماء صافياً.\n" +
            "2. اغلي 400 مل ماء، أضف الأرز، غطِ واطه 12-15 دقيقة حتى يمتص الماء.\n" +
            "3. اخلط التوفو مع 1 ملعقة كبيرة صويا صوص.\n" +
            "4. سخن 1 ملعقة كبيرة زيت في الوعاء على نار متوسطة.\n" +
            "5. أضف التوفو واطه 5 دقائق مع التحريك حتى يتحمر قليلاً، أخرجه جانباً.\n" +
            "6. أضف ملعقة الزيت المتبقية في الوعاء.\n" +
            "7. اقلي الثوم والخضار (جزر، فلفل، بروكلي) 5-7 دقائق حتى تنضج قليلاً.\n" +
            "8. أضف الأرز المطبوخ والتوفو، اخلط برفق.\n" +
            "9. أضف 1 ملعقة كبيرة صويا صوص و1 ملعقة كبيرة زيت سمسم، اخلط جيداً.\n" +
            "10. تبّل بالملح والفلفل.\n" +
            "11. زيّن بالبصل الأخضر المقطع وقدّم ساخناً."
    }
};

recipesData.dessert.perles_tapioca = {
    country: "asie",
    image: "images/perles_tapioca.jpg",
    fr: {
        title: "Perles de tapioca au lait de coco (4 personnes)",
        equipment: [
            "1 casserole moyenne",
            "1 cuillère en bois",
            "1 bol",
            "1 passoire",
            "1 balance de cuisine",
            "1 louche"
        ],
        ingredients: [
            "100 g perles de tapioca",
            "400 ml lait de coco",
            "200 ml eau",
            "50 g sucre",
            "1 pincée de sel",
            "1 mangue mûre pour garnir (200 g)",
            "Feuilles de menthe pour décoration (5 feuilles)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Rincer les perles de tapioca sous l’eau froide.\n" +
            "2. Dans une casserole, porter 200 ml d’eau à ébullition.\n" +
            "3. Ajouter les perles de tapioca, cuire à feu moyen en remuant fréquemment pendant 10-12 minutes jusqu’à ce qu’elles deviennent translucides.\n" +
            "4. Égoutter les perles si nécessaire.\n" +
            "5. Ajouter le lait de coco, le sucre et une pincée de sel, remuer doucement.\n" +
            "6. Laisser mijoter 5 minutes jusqu’à épaississement.\n" +
            "7. Couper la mangue en petits dés.\n" +
            "8. Servir les perles dans des bols, garnir de mangue et feuilles de menthe."
    },
    en: {
        title: "Tapioca Pearls with Coconut Milk (Serves 4)",
        equipment: [
            "1 medium saucepan",
            "1 wooden spoon",
            "1 bowl",
            "1 strainer",
            "1 kitchen scale",
            "1 ladle"
        ],
        ingredients: [
            "100 g tapioca pearls",
            "400 ml coconut milk",
            "200 ml water",
            "50 g sugar",
            "1 pinch salt",
            "1 ripe mango for garnish (200 g)",
            "Mint leaves for decoration (5 leaves)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Rinse tapioca pearls under cold water.\n" +
            "2. Bring 200 ml water to a boil in a saucepan.\n" +
            "3. Add tapioca pearls, cook over medium heat, stirring frequently for 10-12 min until translucent.\n" +
            "4. Drain pearls if needed.\n" +
            "5. Add coconut milk, sugar, and pinch of salt, stir gently.\n" +
            "6. Simmer 5 min until slightly thickened.\n" +
            "7. Cut mango into small cubes.\n" +
            "8. Serve pearls in bowls, top with mango and mint leaves."
    },
    nl: {
        title: "Tapiocaparels met kokosmelk (voor 4 personen)",
        equipment: [
            "1 middelgrote pan",
            "1 houten lepel",
            "1 kom",
            "1 zeef",
            "1 keukenweegschaal",
            "1 pollepel"
        ],
        ingredients: [
            "100 g tapiocaparels",
            "400 ml kokosmelk",
            "200 ml water",
            "50 g suiker",
            "1 snufje zout",
            "1 rijpe mango voor garnering (200 g)",
            "Muntblaadjes voor decoratie (5 blaadjes)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Spoel de tapiocaparels onder koud water.\n" +
            "2. Breng 200 ml water aan de kook in een pan.\n" +
            "3. Voeg tapiocaparels toe, kook op middelhoog vuur, regelmatig roeren gedurende 10-12 minuten tot ze doorschijnend zijn.\n" +
            "4. Giet de parels af indien nodig.\n" +
            "5. Voeg kokosmelk, suiker en snufje zout toe, roer voorzichtig.\n" +
            "6. Laat 5 minuten sudderen tot licht ingedikt.\n" +
            "7. Snijd de mango in kleine blokjes.\n" +
            "8. Serveer de parels in kommen, garneer met mango en muntblaadjes."
    },
    ar: {
        title: "لؤلؤ التابيوكا بحليب جوز الهند (تكفي 4 أشخاص)",
        equipment: [
            "1 قدر متوسطة الحجم",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 مصفاة",
            "1 ميزان مطبخ",
            "1 مغرفة"
        ],
        ingredients: [
            "100 غ لؤلؤ التابيوكا",
            "400 مل حليب جوز الهند",
            "200 مل ماء",
            "50 غ سكر",
            "رشة ملح",
            "1 مانجو ناضجة للتزيين (200 غ)",
            "أوراق نعناع للتزيين (5 أوراق)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اشطف لؤلؤ التابيوكا بالماء البارد.\n" +
            "2. اغلي 200 مل ماء في قدر.\n" +
            "3. أضف لؤلؤ التابيوكا، اطه مع التحريك باستمرار لمدة 10-12 دقيقة حتى تصبح شفافة.\n" +
            "4. صفي اللؤلؤ إذا لزم الأمر.\n" +
            "5. أضف حليب جوز الهند والسكر ورشة ملح، حرك برفق.\n" +
            "6. اتركه يغلي على نار هادئة 5 دقائق حتى يثخن قليلاً.\n" +
            "7. قطع المانجو إلى مكعبات صغيرة.\n" +
            "8. قدم اللؤلؤ في أطباق، وزينه بالمانجو وأوراق النعناع."
    }
};
recipesData.patisserie.mochis_the_vert = {
    country: "asie",
    image: "images/mochis_the_vert.jpg",

    fr: {
        title: "Mochis au thé vert (4 personnes)",
        equipment: [
            "1 bol moyen",
            "1 cuillère en bois",
            "1 passoire fine",
            "1 tapis en silicone ou plan de travail",
            "1 rouleau à pâtisserie",
            "1 balance de cuisine",
            "1 cuillère à café",
            "1 film alimentaire"
        ],
        ingredients: [
            "100 g farine de riz gluant",
            "40 g sucre",
            "150 ml eau",
            "1 cuillère à café poudre de thé vert matcha",
            "50 g pâte de haricot rouge sucrée (anko)",
            "Fécule de maïs pour saupoudrer (20 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans un bol, mélanger la farine de riz gluant, le sucre et la poudre de thé vert.\n" +
            "2. Ajouter l’eau progressivement en remuant jusqu’à obtenir une pâte homogène.\n" +
            "3. Couvrir le bol de film alimentaire et cuire au micro-ondes 2 minutes à puissance moyenne.\n" +
            "4. Sortir et remuer, puis cuire encore 1 minute.\n" +
            "5. Saupoudrer le plan de travail avec de la fécule de maïs.\n" +
            "6. Transférer la pâte chaude sur le plan saupoudré.\n" +
            "7. Étaler délicatement avec un rouleau à pâtisserie saupoudré de fécule.\n" +
            "8. Découper la pâte en 8 portions égales.\n" +
            "9. Placer une petite boule de pâte de haricot rouge au centre de chaque portion.\n" +
            "10. Replier la pâte autour de la garniture et former une boule.\n" +
            "11. Rouler légèrement dans la fécule pour éviter que ça colle.\n" +
            "12. Laisser refroidir 15 minutes avant de servir."
    },

    en: {
        title: "Green Tea Mochi (Serves 4)",
        equipment: [
            "1 medium bowl",
            "1 wooden spoon",
            "1 fine sieve",
            "1 silicone mat or countertop",
            "1 rolling pin",
            "1 kitchen scale",
            "1 teaspoon",
            "1 plastic wrap"
        ],
        ingredients: [
            "100 g glutinous rice flour",
            "40 g sugar",
            "150 ml water",
            "1 tsp matcha green tea powder",
            "50 g sweet red bean paste (anko)",
            "Cornstarch for dusting (20 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a bowl, mix glutinous rice flour, sugar, and matcha powder.\n" +
            "2. Gradually add water, stirring until smooth.\n" +
            "3. Cover the bowl with plastic wrap and microwave 2 min at medium power.\n" +
            "4. Stir and microwave another 1 min.\n" +
            "5. Dust work surface with cornstarch.\n" +
            "6. Transfer hot dough onto surface.\n" +
            "7. Gently roll out with a cornstarch-dusted rolling pin.\n" +
            "8. Cut dough into 8 equal portions.\n" +
            "9. Place a small ball of red bean paste in the center of each portion.\n" +
            "10. Fold dough around filling to form a ball.\n" +
            "11. Lightly roll in cornstarch to prevent sticking.\n" +
            "12. Let cool 15 min before serving."
    },

    nl: {
        title: "Groene Thee Mochi (voor 4 personen)",
        equipment: [
            "1 middelgrote kom",
            "1 houten lepel",
            "1 fijne zeef",
            "1 siliconenmat of werkblad",
            "1 deegroller",
            "1 keukenweegschaal",
            "1 theelepel",
            "1 plasticfolie"
        ],
        ingredients: [
            "100 g kleefrijstmeel",
            "40 g suiker",
            "150 ml water",
            "1 tl matcha poeder",
            "50 g zoete rodebonenpasta (anko)",
            "Maïzena om te bestuiven (20 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng in een kom het kleefrijstmeel, suiker en matcha poeder.\n" +
            "2. Voeg geleidelijk water toe en roer tot een glad beslag.\n" +
            "3. Bedek de kom met plasticfolie en magnetron 2 min op middelhoog vermogen.\n" +
            "4. Roer en magnetron nog 1 min.\n" +
            "5. Bestuif werkoppervlak met maïzena.\n" +
            "6. Leg het hete deeg op het oppervlak.\n" +
            "7. Rol voorzichtig uit met een met maïzena bestoven deegroller.\n" +
            "8. Snijd het deeg in 8 gelijke porties.\n" +
            "9. Plaats een klein bolletje rodebonenpasta in het midden van elke portie.\n" +
            "10. Vouw het deeg rond de vulling en vorm een bol.\n" +
            "11. Rol licht in maïzena om plakken te voorkomen.\n" +
            "12. Laat 15 minuten afkoelen voor serveren."
    },

    ar: {
        title: "موشي بالشاي الأخضر (تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء متوسط",
            "1 ملعقة خشبية",
            "1 مصفاة دقيقة",
            "1 حصيرة سيليكون أو سطح عمل",
            "1 نشابة",
            "1 ميزان مطبخ",
            "1 ملعقة صغيرة",
            "1 غلاف بلاستيكي"
        ],
        ingredients: [
            "100 غ دقيق أرز لزج",
            "40 غ سكر",
            "150 مل ماء",
            "1 ملعقة صغيرة مسحوق شاي أخضر (ماتشا)",
            "50 غ عجينة فاصوليا حمراء حلوة (أنكو)",
            "نشا الذرة للرش (20 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اخلط دقيق الأرز اللزج والسكر ومسحوق الشاي الأخضر في وعاء.\n" +
            "2. أضف الماء تدريجياً مع التحريك حتى يصبح الخليط ناعماً.\n" +
            "3. غطِ الوعاء بغلاف بلاستيكي واطبخه في الميكروويف 2 دقيقة على قوة متوسطة.\n" +
            "4. حركه واطبخه دقيقة إضافية.\n" +
            "5. رش سطح العمل بالنشا.\n" +
            "6. انقل العجينة الساخنة على السطح.\n" +
            "7. افردها بلطف باستخدام نشابة مرشوشة بالنشا.\n" +
            "8. قسم العجينة إلى 8 أجزاء متساوية.\n" +
            "9. ضع كرة صغيرة من عجينة الفاصوليا الحمراء في وسط كل قطعة.\n" +
            "10. اطوِ العجينة حول الحشوة وشكّل كرة.\n" +
            "11. دحرجها برفق في النشا لمنع الالتصاق.\n" +
            "12. اتركها لتبرد 15 دقيقة قبل التقديم."
    }
};

recipesData.entree.brik_oeuf = {
    country: "afrique",
    countryName: "tunisie",
    image: "images/brik_oeuf.jpg",
    fr: {
        title: "Brik à l’œuf (Tunisie, 4 personnes)",
        equipment: [
            "1 poêle moyenne",
            "1 bol",
            "1 cuillère",
            "1 couteau",
            "1 planche à découper",
            "1 assiette",
            "1 passoire"
        ],
        ingredients: [
            "4 feuilles de brick",
            "4 œufs",
            "100 g thon en conserve, égoutté",
            "1 cuillère à soupe câpres (10 g)",
            "1 cuillère à soupe persil frais haché (5 g)",
            "Sel et poivre selon goût",
            "Huile de tournesol pour friture (environ 200 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préparer tous les ingrédients et couper le persil finement.\n" +
            "2. Égoutter le thon et mélanger avec les câpres et le persil dans un bol.\n" +
            "3. Chauffer l’huile de tournesol dans la poêle à feu moyen.\n" +
            "4. Plier chaque feuille de brick en deux, placer le mélange de thon au centre.\n" +
            "5. Casser un œuf au-dessus du mélange.\n" +
            "6. Plier les bords pour former un triangle bien fermé.\n" +
            "7. Déposer délicatement dans la poêle chaude.\n" +
            "8. Cuire 2-3 min de chaque côté jusqu’à ce que la feuille soit dorée et croustillante.\n" +
            "9. Égoutter sur du papier absorbant.\n" +
            "10. Servir immédiatement."
    },
    en: {
        title: "Tunisian Brik with Egg (Serves 4)",
        equipment: [
            "1 medium frying pan",
            "1 bowl",
            "1 spoon",
            "1 knife",
            "1 cutting board",
            "1 plate",
            "1 strainer"
        ],
        ingredients: [
            "4 brick pastry sheets",
            "4 eggs",
            "100 g canned tuna, drained",
            "1 tbsp capers (10 g)",
            "1 tbsp fresh parsley, chopped (5 g)",
            "Salt and pepper to taste",
            "Sunflower oil for frying (about 200 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Prepare all ingredients and chop parsley finely.\n" +
            "2. Drain tuna and mix with capers and parsley in a bowl.\n" +
            "3. Heat sunflower oil in a frying pan over medium heat.\n" +
            "4. Fold each brick sheet in half, place tuna mixture in the center.\n" +
            "5. Crack an egg over the mixture.\n" +
            "6. Fold edges to form a secure triangle.\n" +
            "7. Carefully place in hot pan.\n" +
            "8. Cook 2-3 min each side until golden and crispy.\n" +
            "9. Drain on paper towel.\n" +
            "10. Serve immediately."
    },
    nl: {
        title: "Tuinse Brik met Ei (voor 4 personen)",
        equipment: [
            "1 middelgrote koekenpan",
            "1 kom",
            "1 lepel",
            "1 mes",
            "1 snijplank",
            "1 bord",
            "1 zeef"
        ],
        ingredients: [
            "4 brickvellen",
            "4 eieren",
            "100 g tonijn uit blik, uitgelekt",
            "1 eetlepel kappertjes (10 g)",
            "1 eetlepel verse peterselie, gehakt (5 g)",
            "Zout en peper naar smaak",
            "Zonnebloemolie om te frituren (ongeveer 200 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Bereid alle ingrediënten en hak de peterselie fijn.\n" +
            "2. Laat de tonijn uitlekken en meng met kappertjes en peterselie in een kom.\n" +
            "3. Verhit de zonnebloemolie in een koekenpan op middelhoog vuur.\n" +
            "4. Vouw elk brickvel dubbel, plaats het tonijnmengsel in het midden.\n" +
            "5. Breek een ei boven het mengsel.\n" +
            "6. Vouw de randen tot een stevige driehoek.\n" +
            "7. Plaats voorzichtig in de hete pan.\n" +
            "8. Bak 2-3 minuten per kant tot goudbruin en krokant.\n" +
            "9. Laat uitlekken op keukenpapier.\n" +
            "10. Serveer direct."
    },
    ar: {
        title: "بريك بالبيض (تونس، تكفي 4 أشخاص)",
        equipment: [
            "1 مقلاة متوسطة",
            "1 وعاء",
            "1 ملعقة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 طبق",
            "1 مصفاة"
        ],
        ingredients: [
            "4 أوراق بريك",
            "4 بيضات",
            "100 غ تونة معلبة، مصفاة",
            "1 ملعقة كبيرة كابر (10 غ)",
            "1 ملعقة كبيرة بقدونس طازج مفروم (5 غ)",
            "ملح وفلفل حسب الذوق",
            "زيت دوار الشمس للقلي (حوالي 200 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. حضّر جميع المكونات وقطع البقدونس ناعماً.\n" +
            "2. صفي التونة وامزجها مع الكابر والبقدونس في وعاء.\n" +
            "3. سخّن زيت دوار الشمس في المقلاة على نار متوسطة.\n" +
            "4. اطوِ كل ورقة بريك إلى النصف وضع خليط التونة في الوسط.\n" +
            "5. اكسر بيضة فوق الخليط.\n" +
            "6. اطوِ الحواف لتكوين مثلث محكم.\n" +
            "7. ضعها بحذر في المقلاة الساخنة.\n" +
            "8. اقلي 2-3 دقائق لكل جانب حتى تصبح ذهبية ومقرمشة.\n" +
            "9. صفي على ورق مطبخ.\n" +
            "10. قدمها مباشرة."
    }
};
recipesData.plat.couscous_poulet = {
    country: "afrique",
    countryName: "tunisie",
    image: "images/couscous_poulet.jpg",

    fr: {
        title: "Couscous aux légumes et poulet (Tunisie, 4 personnes)",
        equipment: [
            "1 couscoussier ou grande casserole",
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "400 g couscous moyen",
            "4 cuisses de poulet (environ 800 g)",
            "2 carottes moyennes (200 g), coupées en rondelles",
            "1 courgette moyenne (150 g), coupée en dés",
            "1 poivron rouge (100 g), coupé en lanières",
            "1 oignon moyen (100 g), haché finement",
            "2 tomates moyennes (150 g), pelées et concassées",
            "2 cuillères à soupe huile d'olive (30 ml)",
            "1 cuillère à café paprika (5 g)",
            "1 cuillère à café cumin moulu (5 g)",
            "1/2 cuillère à café cannelle (2 g)",
            "Sel et poivre selon goût",
            "700 ml eau ou bouillon de poulet",
            "Quelques feuilles de coriandre pour garnir (5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préparer tous les légumes : éplucher, couper et mesurer les quantités.\n" +
            "2. Chauffer 2 cuillères à soupe d'huile d'olive dans la casserole.\n" +
            "3. Faire revenir l'oignon haché 3-4 min jusqu'à ce qu'il soit translucide.\n" +
            "4. Ajouter les cuisses de poulet, faire dorer 5 min sur tous les côtés.\n" +
            "5. Ajouter paprika, cumin, cannelle, sel et poivre, mélanger.\n" +
            "6. Ajouter les tomates concassées et cuire 5 min.\n" +
            "7. Ajouter l'eau ou le bouillon, porter à ébullition puis couvrir et laisser mijoter 25 min.\n" +
            "8. Ajouter les carottes, courgette et poivron, couvrir et cuire encore 15 min jusqu'à tendreté.\n" +
            "9. Pendant ce temps, préparer le couscous : verser le couscous dans un bol, ajouter 400 ml d'eau bouillante, couvrir 5 min.\n" +
            "10. Égrainer le couscous à la fourchette, ajouter un filet d'huile d'olive si désiré.\n" +
            "11. Servir le poulet et les légumes sur le couscous chaud.\n" +
            "12. Garnir de feuilles de coriandre avant de servir."
    },

    en: {
        title: "Tunisian Chicken and Vegetable Couscous (Serves 4)",
        equipment: [
            "1 couscoussier or large pot",
            "1 frying pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "400 g medium couscous",
            "4 chicken thighs (about 800 g)",
            "2 medium carrots (200 g), sliced",
            "1 medium zucchini (150 g), diced",
            "1 red bell pepper (100 g), sliced",
            "1 medium onion (100 g), finely chopped",
            "2 medium tomatoes (150 g), peeled and chopped",
            "2 tbsp olive oil (30 ml)",
            "1 tsp paprika (5 g)",
            "1 tsp ground cumin (5 g)",
            "1/2 tsp cinnamon (2 g)",
            "Salt and pepper to taste",
            "700 ml water or chicken broth",
            "Some coriander leaves for garnish (5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Prepare all vegetables: peel, chop, and measure quantities.\n" +
            "2. Heat 2 tbsp olive oil in the pot.\n" +
            "3. Sauté chopped onion 3-4 min until translucent.\n" +
            "4. Add chicken thighs, brown 5 min on all sides.\n" +
            "5. Add paprika, cumin, cinnamon, salt, and pepper, stir well.\n" +
            "6. Add chopped tomatoes, cook 5 min.\n" +
            "7. Add water or broth, bring to boil, cover, simmer 25 min.\n" +
            "8. Add carrots, zucchini, and bell pepper, cover and cook 15 min until tender.\n" +
            "9. Meanwhile, prepare couscous: place couscous in a bowl, pour 400 ml boiling water, cover 5 min.\n" +
            "10. Fluff couscous with a fork, add a drizzle of olive oil if desired.\n" +
            "11. Serve chicken and vegetables over hot couscous.\n" +
            "12. Garnish with coriander leaves before serving."
    },

    nl: {
        title: "Tunisische Kip en Groentencouscous (voor 4 personen)",
        equipment: [
            "1 couscouspan of grote pan",
            "1 koekenpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "400 g middelfijne couscous",
            "4 kippenbouten (ongeveer 800 g)",
            "2 middelgrote wortels (200 g), in plakjes",
            "1 middelgrote courgette (150 g), in blokjes",
            "1 rode paprika (100 g), in reepjes",
            "1 middelgrote ui (100 g), fijngehakt",
            "2 middelgrote tomaten (150 g), gepeld en gesneden",
            "2 eetlepels olijfolie (30 ml)",
            "1 tl paprika (5 g)",
            "1 tl gemalen komijn (5 g)",
            "1/2 tl kaneel (2 g)",
            "Zout en peper naar smaak",
            "700 ml water of kippenbouillon",
            "Enkele korianderblaadjes voor garnering (5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Bereid alle groenten: schil, snijd en meet de hoeveelheden.\n" +
            "2. Verhit 2 eetlepels olijfolie in de pan.\n" +
            "3. Bak de ui 3-4 min tot glazig.\n" +
            "4. Voeg kippenbouten toe, bak 5 min aan alle kanten.\n" +
            "5. Voeg paprika, komijn, kaneel, zout en peper toe, goed mengen.\n" +
            "6. Voeg gesneden tomaten toe, bak 5 min.\n" +
            "7. Voeg water of bouillon toe, breng aan de kook, dek af en laat 25 min sudderen.\n" +
            "8. Voeg wortels, courgette en paprika toe, dek af en kook 15 min tot gaar.\n" +
            "9. Bereid ondertussen de couscous: couscous in een kom, giet 400 ml kokend water, dek 5 min af.\n" +
            "10. Maak los met een vork, voeg eventueel een beetje olijfolie toe.\n" +
            "11. Serveer kip en groenten op de warme couscous.\n" +
            "12. Garneer met korianderblaadjes."
    },

    ar: {
        title: "كسكس بالخضار والدجاج (تونس، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر للكسكس أو قدر كبير",
            "1 مقلاة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "400 غ كسكس متوسط الحجم",
            "4 فخذ دجاج (حوالي 800 غ)",
            "2 جزرة متوسطة (200 غ)، مقطعة شرائح",
            "1 كوسة متوسطة (150 غ)، مقطعة مكعبات",
            "1 فلفل أحمر (100 غ)، مقطع شرائح",
            "1 بصلة متوسطة (100 غ)، مفرومة ناعماً",
            "2 طماطم متوسطة (150 غ)، مقشرة ومقطعة",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة صغيرة فلفل أحمر مطحون (5 غ)",
            "1 ملعقة صغيرة كمون مطحون (5 غ)",
            "1/2 ملعقة صغيرة قرفة (2 غ)",
            "ملح وفلفل حسب الذوق",
            "700 مل ماء أو مرق دجاج",
            "بضع أوراق كزبرة للتزيين (5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. حضّر جميع الخضروات: قشّر، قطع ووزن الكميات.\n" +
            "2. سخّن 2 ملعقة كبيرة زيت زيتون في القدر.\n" +
            "3. اقلي البصل المفروم 3-4 دقائق حتى يصبح شفافاً.\n" +
            "4. أضف فخذ الدجاج، وقلّبه 5 دقائق على جميع الجوانب.\n" +
            "5. أضف الفلفل الأحمر، الكمون، القرفة، الملح والفلفل، وقلّب جيداً.\n" +
            "6. أضف الطماطم المقطعة واطبخ 5 دقائق.\n" +
            "7. أضف الماء أو المرق، اغلي، غطِ واتركه ينضج 25 دقيقة.\n" +
            "8. أضف الجزر، الكوسة والفلفل، غطِ واطبخ 15 دقيقة حتى تصبح طرية.\n" +
            "9. حضّر الكسكس: ضع الكسكس في وعاء، صب 400 مل ماء مغلي، غطِ 5 دقائق.\n" +
            "10. حرّك الكسكس بالشوكة، أضف قليل من زيت الزيتون إذا رغبت.\n" +
            "11. قدّم الدجاج والخضار فوق الكسكس الساخن.\n" +
            "12. زيّنه بأوراق الكزبرة."
    }
};

recipesData.dessert.makroud = {
    country: "afrique",
    countryName: "tunisie",
    image: "images/makroud.jpg",
    fr: {
        title: "Makroud aux dattes (Tunisie, 4 personnes)",
        equipment: [
            "1 saladier",
            "1 rouleau à pâtisserie",
            "1 couteau",
            "1 planche à découper",
            "1 casserole",
            "1 cuillère en bois",
            "1 four",
            "1 balance de cuisine"
        ],
        ingredients: [
            "250 g semoule fine",
            "50 g beurre fondu",
            "100 ml eau tiède",
            "100 g pâte de dattes",
            "50 g sucre",
            "1 cuillère à café cannelle (2 g)",
            "50 g miel pour napper",
            "Huile neutre pour friture (environ 200 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Mélanger la semoule, le beurre fondu et l'eau tiède dans un saladier pour obtenir une pâte homogène.\n" +
            "3. Étaler la pâte sur une planche farinée en rectangle d'environ 1 cm d'épaisseur.\n" +
            "4. Former un boudin de pâte de dattes au centre.\n" +
            "5. Replier la pâte de semoule autour de la pâte de dattes pour l’enfermer.\n" +
            "6. Découper le boudin en losanges de 3-4 cm.\n" +
            "7. Chauffer l'huile dans une casserole et frire les losanges jusqu’à ce qu’ils soient dorés.\n" +
            "8. Égoutter sur du papier absorbant.\n" +
            "9. Chauffer légèrement le miel et napper les makrouds.\n" +
            "10. Laisser tiédir avant de servir."
    },
    en: {
        title: "Tunisian Makroud with Dates (Serves 4)",
        equipment: [
            "1 mixing bowl",
            "1 rolling pin",
            "1 knife",
            "1 cutting board",
            "1 saucepan",
            "1 wooden spoon",
            "1 oven",
            "1 kitchen scale"
        ],
        ingredients: [
            "250 g fine semolina",
            "50 g melted butter",
            "100 ml warm water",
            "100 g date paste",
            "50 g sugar",
            "1 tsp cinnamon (2 g)",
            "50 g honey for glazing",
            "Neutral oil for frying (about 200 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Mix semolina, melted butter and warm water in a bowl until dough is smooth.\n" +
            "3. Roll out dough on a floured board into a rectangle about 1 cm thick.\n" +
            "4. Form a log of date paste in the center.\n" +
            "5. Fold semolina dough around the date paste to enclose it.\n" +
            "6. Cut the log into diamond shapes 3-4 cm.\n" +
            "7. Heat oil in a saucepan and fry the diamonds until golden.\n" +
            "8. Drain on paper towel.\n" +
            "9. Warm honey slightly and glaze the makrouds.\n" +
            "10. Let cool slightly before serving."
    },
    nl: {
        title: "Tuinse Makroud met Dadels (voor 4 personen)",
        equipment: [
            "1 mengkom",
            "1 deegroller",
            "1 mes",
            "1 snijplank",
            "1 pan",
            "1 houten lepel",
            "1 oven",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "250 g fijne griesmeel",
            "50 g gesmolten boter",
            "100 ml warm water",
            "100 g dadelpasta",
            "50 g suiker",
            "1 tl kaneel (2 g)",
            "50 g honing om te glazuren",
            "Neutrale olie om te frituren (ongeveer 200 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Meng griesmeel, gesmolten boter en warm water in een kom tot een glad deeg.\n" +
            "3. Rol het deeg uit op een bebloemd bord tot een rechthoek van ongeveer 1 cm dik.\n" +
            "4. Vorm een rol dadelpasta in het midden.\n" +
            "5. Vouw het griesmeeldeeg om de dadelpasta heen.\n" +
            "6. Snijd de rol in ruitvormige stukken van 3-4 cm.\n" +
            "7. Verhit olie in een pan en frituur de ruitjes tot ze goudbruin zijn.\n" +
            "8. Laat uitlekken op keukenpapier.\n" +
            "9. Verwarm honing licht en glazuur de makrouds.\n" +
            "10. Laat iets afkoelen voor serveren."
    },
    ar: {
        title: "المقروض بالتمر (تونس، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء للخلط",
            "1 شوبك أو نشابة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 قدر",
            "1 ملعقة خشبية",
            "1 فرن",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "250 غ سميد ناعم",
            "50 غ زبدة مذابة",
            "100 مل ماء دافئ",
            "100 غ معجون تمر",
            "50 غ سكر",
            "1 ملعقة صغيرة قرفة (2 غ)",
            "50 غ عسل للتغطية",
            "زيت محايد للقلي (حوالي 200 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الفرن على 180 درجة مئوية.\n" +
            "2. اخلط السميد والزبدة المذابة والماء الدافئ في وعاء حتى يتكون عجين ناعم.\n" +
            "3. افرد العجين على لوح مرشوش بالسميد على شكل مستطيل بسماكة حوالي 1 سم.\n" +
            "4. شكل لفة من معجون التمر في الوسط.\n" +
            "5. اطوِ عجينة السميد حول معجون التمر لإحكامه.\n" +
            "6. قطع اللفة إلى أشكال ماسية طولها 3-4 سم.\n" +
            "7. سخّن الزيت في القدر واقلِ القطع حتى تصبح ذهبية.\n" +
            "8. صفي على ورق مطبخ.\n" +
            "9. سخّن العسل قليلاً وقم بتغليف المقروض.\n" +
            "10. اتركه يبرد قليلاً قبل التقديم."
    }
};
recipesData.patisserie.baklava_almonds = {
    country: "afrique",
    countryName: "tunisie",
    image: "images/baklava_almonds.jpg",
    fr: {
        title: "Baklava aux amandes (Tunisie, 4 personnes)",
        equipment: [
            "1 plat rectangulaire allant au four",
            "1 rouleau à pâtisserie",
            "1 couteau",
            "1 planche à découper",
            "1 casserole",
            "1 cuillère en bois",
            "1 four",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g pâte filo",
            "150 g amandes décortiquées",
            "100 g beurre fondu",
            "50 g sucre",
            "1 cuillère à café cannelle (2 g)",
            "50 ml eau",
            "50 g miel pour napper"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Hacher finement les amandes et les mélanger avec le sucre et la cannelle.\n" +
            "3. Beurrer le plat et déposer une feuille de pâte filo, badigeonner de beurre fondu.\n" +
            "4. Répéter 3-4 feuilles en superposition.\n" +
            "5. Étaler un peu du mélange d’amandes sur les feuilles.\n" +
            "6. Couvrir avec 3-4 autres feuilles de pâte filo en badigeonnant de beurre entre chaque.\n" +
            "7. Couper en petits carrés ou losanges.\n" +
            "8. Cuire au four pendant 20-25 minutes jusqu’à doré.\n" +
            "9. Chauffer le miel légèrement et napper le baklava dès la sortie du four.\n" +
            "10. Laisser refroidir légèrement avant de servir."
    },
    en: {
        title: "Tunisian Almond Baklava (Serves 4)",
        equipment: [
            "1 rectangular oven dish",
            "1 rolling pin",
            "1 knife",
            "1 cutting board",
            "1 saucepan",
            "1 wooden spoon",
            "1 oven",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g filo pastry",
            "150 g shelled almonds",
            "100 g melted butter",
            "50 g sugar",
            "1 tsp cinnamon (2 g)",
            "50 ml water",
            "50 g honey for glazing"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Chop almonds finely and mix with sugar and cinnamon.\n" +
            "3. Butter the dish and place one filo sheet, brush with melted butter.\n" +
            "4. Repeat 3-4 sheets in layers.\n" +
            "5. Spread some almond mixture over the sheets.\n" +
            "6. Cover with 3-4 more filo sheets, brushing butter between each.\n" +
            "7. Cut into small squares or diamonds.\n" +
            "8. Bake for 20-25 minutes until golden.\n" +
            "9. Warm honey slightly and glaze baklava immediately after removing from oven.\n" +
            "10. Let cool slightly before serving."
    },
    nl: {
        title: "Tuinse Amandel Baklava (voor 4 personen)",
        equipment: [
            "1 rechthoekige ovenschaal",
            "1 deegroller",
            "1 mes",
            "1 snijplank",
            "1 pan",
            "1 houten lepel",
            "1 oven",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g filodeeg",
            "150 g amandelen, gepeld",
            "100 g gesmolten boter",
            "50 g suiker",
            "1 tl kaneel (2 g)",
            "50 ml water",
            "50 g honing om te glazuren"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Hak de amandelen fijn en meng met suiker en kaneel.\n" +
            "3. Beboter de ovenschaal en leg één filodeegvel, bestrijk met gesmolten boter.\n" +
            "4. Herhaal 3-4 vellen in lagen.\n" +
            "5. Verdeel een deel van het amandelmengsel over de vellen.\n" +
            "6. Bedek met 3-4 vellen filodeeg, bestrijk met boter tussen elk vel.\n" +
            "7. Snijd in kleine vierkanten of ruitjes.\n" +
            "8. Bak 20-25 minuten tot goudbruin.\n" +
            "9. Verwarm de honing licht en bestrijk baklava direct na het uit de oven halen.\n" +
            "10. Laat iets afkoelen voor serveren."
    },
    ar: {
        title: "بقلاوة باللوز (تونس، تكفي 4 أشخاص)",
        equipment: [
            "1 صينية فرن مستطيلة",
            "1 نشابة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 قدر",
            "1 ملعقة خشبية",
            "1 فرن",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ لوز مقشر",
            "100 غ زبدة مذابة",
            "50 غ سكر",
            "1 ملعقة صغيرة قرفة (2 غ)",
            "50 مل ماء",
            "50 غ عسل للتغطية"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الفرن على 180 درجة مئوية.\n" +
            "2. افرم اللوز ناعماً وامزجه مع السكر والقرفة.\n" +
            "3. ادهن الصينية بالزبدة وضع ورقة فيلو، ادهن بالزبدة المذابة.\n" +
            "4. كرر 3-4 أوراق بالتسلسل.\n" +
            "5. ضع جزءاً من خليط اللوز على الأوراق.\n" +
            "6. غطّها بـ 3-4 أوراق فيلو أخرى مع دهن الزبدة بين كل ورقة.\n" +
            "7. قطع إلى مربعات أو معينات صغيرة.\n" +
            "8. اخبز لمدة 20-25 دقيقة حتى تصبح ذهبية.\n" +
            "9. سخّن العسل قليلاً وغطِ البقلاوة مباشرة بعد إخراجها من الفرن.\n" +
            "10. اتركها تبرد قليلاً قبل التقديم."
    }
};
recipesData.entree.chorba_algerienne = {
    country: "afrique",
    countryName: "algerie",
    image: "images/chorba_algerienne.jpg",

    fr: {
        title: "Chorba algérienne (Algérie, 4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "400 g viande de poulet, coupée en morceaux",
            "1 oignon moyen (100 g), haché finement",
            "2 tomates moyennes (150 g), pelées et concassées",
            "2 carottes moyennes (200 g), coupées en petits dés",
            "1 branche de céleri (50 g), hachée finement",
            "50 g vermicelles ou cheveux d’ange",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 cuillère à café paprika (5 g)",
            "1 cuillère à café cumin (5 g)",
            "1/2 cuillère à café curcuma (2 g)",
            "Sel et poivre selon goût",
            "1,2 l d’eau",
            "Quelques feuilles de coriandre et persil frais (5 g chacun) pour garnir"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer 2 cuillères à soupe d'huile d'olive dans une grande casserole.\n" +
            "2. Faire revenir l'oignon haché 3-4 min jusqu'à ce qu'il soit translucide.\n" +
            "3. Ajouter les morceaux de poulet et faire dorer 5 min sur tous les côtés.\n" +
            "4. Ajouter les tomates concassées, carottes, céleri, paprika, cumin, curcuma, sel et poivre. Mélanger.\n" +
            "5. Ajouter 1,2 l d'eau et porter à ébullition.\n" +
            "6. Réduire le feu, couvrir et laisser mijoter 30 min.\n" +
            "7. Ajouter les vermicelles et cuire encore 10 min jusqu'à tendreté.\n" +
            "8. Servir chaud et garnir de coriandre et persil frais."
    },

    en: {
        title: "Algerian Chorba Soup (Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "400 g chicken, cut into pieces",
            "1 medium onion (100 g), finely chopped",
            "2 medium tomatoes (150 g), peeled and chopped",
            "2 medium carrots (200 g), diced",
            "1 celery stalk (50 g), finely chopped",
            "50 g vermicelli or angel hair pasta",
            "2 tbsp olive oil (30 ml)",
            "1 tsp paprika (5 g)",
            "1 tsp cumin (5 g)",
            "1/2 tsp turmeric (2 g)",
            "Salt and pepper to taste",
            "1.2 l water",
            "Some fresh coriander and parsley leaves (5 g each) for garnish"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat 2 tbsp olive oil in a large pot.\n" +
            "2. Sauté chopped onion 3-4 min until translucent.\n" +
            "3. Add chicken pieces, brown 5 min on all sides.\n" +
            "4. Add chopped tomatoes, carrots, celery, paprika, cumin, turmeric, salt, and pepper. Mix.\n" +
            "5. Add 1.2 l water and bring to a boil.\n" +
            "6. Reduce heat, cover, and simmer 30 min.\n" +
            "7. Add vermicelli and cook 10 min more until tender.\n" +
            "8. Serve hot, garnished with fresh coriander and parsley."
    },

    nl: {
        title: "Algerijnse Chorba Soep (voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "400 g kip, in stukken gesneden",
            "1 middelgrote ui (100 g), fijngehakt",
            "2 middelgrote tomaten (150 g), gepeld en gehakt",
            "2 middelgrote wortels (200 g), in kleine blokjes",
            "1 stengel selderij (50 g), fijngehakt",
            "50 g vermicelli of angel hair pasta",
            "2 eetlepels olijfolie (30 ml)",
            "1 tl paprika (5 g)",
            "1 tl komijn (5 g)",
            "1/2 tl kurkuma (2 g)",
            "Zout en peper naar smaak",
            "1,2 l water",
            "Enkele verse koriander- en peterselieblaadjes (5 g elk) voor garnering"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit 2 eetlepels olijfolie in een grote pan.\n" +
            "2. Bak de ui 3-4 minuten tot glazig.\n" +
            "3. Voeg kipstukken toe en bak 5 minuten aan alle kanten.\n" +
            "4. Voeg gehakte tomaten, wortels, selderij, paprika, komijn, kurkuma, zout en peper toe. Meng goed.\n" +
            "5. Voeg 1,2 l water toe en breng aan de kook.\n" +
            "6. Zet het vuur laag, dek af en laat 30 minuten sudderen.\n" +
            "7. Voeg vermicelli toe en kook nog 10 minuten tot gaar.\n" +
            "8. Serveer heet, garneer met verse koriander en peterselie."
    },

    ar: {
        title: "شوربة الشوربة الجزائرية (تكفي 4 أشخاص)",
        equipment: [
            "1 قدر كبير",
            "1 سكين",
            "1 لوح تقطيع",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "400 غ دجاج، مقطع إلى قطع",
            "1 بصلة متوسطة (100 غ)، مفرومة ناعماً",
            "2 طماطم متوسطة (150 غ)، مقشرة ومقطعة",
            "2 جزرة متوسطة (200 غ)، مقطعة مكعبات صغيرة",
            "1 عود كرفس (50 غ)، مفروم ناعماً",
            "50 غ شعيرية أو شعرية رفيعة",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة صغيرة فلفل أحمر (5 غ)",
            "1 ملعقة صغيرة كمون (5 غ)",
            "1/2 ملعقة صغيرة كركم (2 غ)",
            "ملح وفلفل حسب الذوق",
            "1,2 لتر ماء",
            "بضع أوراق كزبرة وبقدونس طازج (5 غ لكل منهما) للتزيين"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن 2 ملعقة كبيرة زيت زيتون في قدر كبير.\n" +
            "2. اقلي البصل المفروم 3-4 دقائق حتى يصبح شفافاً.\n" +
            "3. أضف قطع الدجاج وقلّب 5 دقائق على جميع الجوانب.\n" +
            "4. أضف الطماطم المقطعة، الجزر، الكرفس، الفلفل الأحمر، الكمون، الكركم، الملح والفلفل. اخلط جيداً.\n" +
            "5. أضف 1,2 لتر ماء واتركه يغلي.\n" +
            "6. خفّض النار، غطّ القدر واتركه ينضج 30 دقيقة.\n" +
            "7. أضف الشعيرية واطبخ 10 دقائق أخرى حتى تنضج.\n" +
            "8. قدّم ساخناً وزينه بالكزبرة والبقدونس الطازج."
    }
};

recipesData.plat.couscous_algerien = {
    country: "afrique",
    countryName: "algerie",
    image: "images/couscous_algerien.jpg",

    fr: {
        title: "Couscous aux légumes et poulet (Algérie, 4 personnes)",
        equipment: [
            "1 couscoussier ou grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 saladier",
            "1 balance de cuisine"
        ],
        ingredients: [
            "400 g poulet, coupé en morceaux",
            "200 g semoule de couscous moyenne",
            "2 carottes moyennes (200 g), coupées en bâtonnets",
            "2 courgettes moyennes (200 g), coupées en bâtonnets",
            "1 navet moyen (150 g), coupé en morceaux",
            "1 oignon moyen (100 g), émincé",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 cuillère à café paprika (5 g)",
            "1/2 cuillère à café curcuma (2 g)",
            "1/2 cuillère à café cumin (2 g)",
            "Sel et poivre selon goût",
            "700 ml eau",
            "Quelques feuilles de coriandre et persil frais (5 g chacun) pour garnir"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer 2 cuillères à soupe d'huile d'olive dans le bas du couscoussier ou grande casserole.\n" +
            "2. Faire revenir l'oignon 3-4 min jusqu'à ce qu'il devienne translucide.\n" +
            "3. Ajouter les morceaux de poulet et faire dorer 5 min.\n" +
            "4. Ajouter paprika, curcuma, cumin, sel et poivre. Mélanger.\n" +
            "5. Verser 700 ml d’eau, porter à ébullition, puis laisser mijoter 20 min à feu moyen.\n" +
            "6. Dans le panier vapeur du couscoussier, placer la semoule et la faire cuire à la vapeur 15 min, en remuant à mi-cuisson.\n" +
            "7. Ajouter les légumes dans le bouillon et poursuivre la cuisson 10-15 min jusqu’à tendreté.\n" +
            "8. Égoutter la semoule et la disposer dans un grand plat.\n" +
            "9. Déposer le poulet et les légumes sur la semoule.\n" +
            "10. Arroser d’un peu de bouillon et garnir de coriandre et persil frais avant de servir."
    },

    en: {
        title: "Algerian Couscous with Vegetables and Chicken (Serves 4)",
        equipment: [
            "1 couscoussier or large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "400 g chicken, cut into pieces",
            "200 g medium couscous",
            "2 medium carrots (200 g), cut into sticks",
            "2 medium zucchinis (200 g), cut into sticks",
            "1 medium turnip (150 g), cut into pieces",
            "1 medium onion (100 g), sliced",
            "2 tbsp olive oil (30 ml)",
            "1 tsp paprika (5 g)",
            "1/2 tsp turmeric (2 g)",
            "1/2 tsp cumin (2 g)",
            "Salt and pepper to taste",
            "700 ml water",
            "Some fresh coriander and parsley leaves (5 g each) for garnish"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat 2 tbsp olive oil in the bottom of a couscoussier or large pot.\n" +
            "2. Sauté onion 3-4 min until translucent.\n" +
            "3. Add chicken pieces and brown 5 min.\n" +
            "4. Add paprika, turmeric, cumin, salt, and pepper. Mix.\n" +
            "5. Pour 700 ml water, bring to a boil, then simmer 20 min over medium heat.\n" +
            "6. In the steamer basket, place couscous and steam 15 min, stirring halfway.\n" +
            "7. Add vegetables to the broth and cook 10-15 min until tender.\n" +
            "8. Drain couscous and place in a large serving dish.\n" +
            "9. Place chicken and vegetables on top of couscous.\n" +
            "10. Pour some broth over and garnish with fresh coriander and parsley before serving."
    },

    nl: {
        title: "Algerijnse Couscous met Groenten en Kip (voor 4 personen)",
        equipment: [
            "1 couscoussier of grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "400 g kip, in stukken gesneden",
            "200 g couscous middelgroot",
            "2 middelgrote wortels (200 g), in staafjes",
            "2 middelgrote courgettes (200 g), in staafjes",
            "1 middelgrote raap (150 g), in stukjes",
            "1 middelgrote ui (100 g), in plakjes",
            "2 eetlepels olijfolie (30 ml)",
            "1 tl paprika (5 g)",
            "1/2 tl kurkuma (2 g)",
            "1/2 tl komijn (2 g)",
            "Zout en peper naar smaak",
            "700 ml water",
            "Enkele verse koriander- en peterselieblaadjes (5 g elk) voor garnering"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit 2 eetlepels olijfolie in de bodem van een couscoussier of grote pan.\n" +
            "2. Bak ui 3-4 minuten tot glazig.\n" +
            "3. Voeg kipstukken toe en bak 5 minuten goudbruin.\n" +
            "4. Voeg paprika, kurkuma, komijn, zout en peper toe. Meng goed.\n" +
            "5. Voeg 700 ml water toe, breng aan de kook, laat 20 min sudderen op middelhoog vuur.\n" +
            "6. Plaats couscous in het stoommandje en stoom 15 min, halverwege roeren.\n" +
            "7. Voeg groenten toe aan de bouillon en kook 10-15 min tot gaar.\n" +
            "8. Giet couscous af en doe in een grote serveerschaal.\n" +
            "9. Leg kip en groenten bovenop couscous.\n" +
            "10. Giet wat bouillon over en garneer met verse koriander en peterselie voor serveren."
    },

    ar: {
        title: "كسكس جزائري بالخضار والدجاج (تكفي 4 أشخاص)",
        equipment: [
            "1 قدر الكسكس أو قدر كبير",
            "1 سكين",
            "1 لوح تقطيع",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "400 غ دجاج، مقطع إلى قطع",
            "200 غ سميد متوسط الكسكس",
            "2 جزر متوسط (200 غ)، مقطع أعواد",
            "2 كوسة متوسطة (200 غ)، مقطعة أعواد",
            "1 لفتة متوسطة (150 غ)، مقطعة قطع",
            "1 بصلة متوسطة (100 غ)، مقطعة شرائح",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة صغيرة فلفل أحمر (5 غ)",
            "1/2 ملعقة صغيرة كركم (2 غ)",
            "1/2 ملعقة صغيرة كمون (2 غ)",
            "ملح وفلفل حسب الذوق",
            "700 مل ماء",
            "بضع أوراق كزبرة وبقدونس طازج (5 غ لكل منهما) للتزيين"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن 2 ملعقة كبيرة زيت زيتون في أسفل قدر الكسكس أو القدر الكبير.\n" +
            "2. اقلي البصل 3-4 دقائق حتى يصبح شفافاً.\n" +
            "3. أضف قطع الدجاج واقلب 5 دقائق حتى يتحمر.\n" +
            "4. أضف الفلفل الأحمر، الكركم، الكمون، الملح والفلفل. اخلط جيداً.\n" +
            "5. أضف 700 مل ماء، دعها تغلي، ثم اتركها تنضج 20 دقيقة على نار متوسطة.\n" +
            "6. ضع الكسكس في سلة البخار واطهيه على البخار 15 دقيقة مع التحريك في منتصف الوقت.\n" +
            "7. أضف الخضار إلى المرق واطبخ 10-15 دقيقة حتى تصبح طرية.\n" +
            "8. صفّ الكسكس وضعه في طبق تقديم كبير.\n" +
            "9. ضع الدجاج والخضار فوق الكسكس.\n" +
            "10. صب قليلاً من المرق وزين بالكزبرة والبقدونس الطازج قبل التقديم."
    }
};

recipesData.dessert.makroud_dattes = {
    country: "afrique",
    countryName: "algerie",
    image: "images/makroud_dattes.jpg",
    fr: {
        title: "Makroud aux dattes (Algérie, 4 personnes)",
        equipment: [
            "1 grand bol",
            "1 rouleau à pâtisserie",
            "1 couteau",
            "1 planche à découper",
            "1 casserole",
            "1 cuillère en bois",
            "1 four",
            "1 balance de cuisine"
        ],
        ingredients: [
            "250 g semoule moyenne",
            "50 g beurre fondu",
            "80 ml eau tiède",
            "1 pincée de sel",
            "150 g pâte de dattes",
            "1 cuillère à café cannelle (2 g)",
            "50 ml huile pour friture",
            "50 g miel pour napper"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans un grand bol, mélanger la semoule avec le sel et le beurre fondu.\n" +
            "2. Ajouter progressivement l'eau tiède et pétrir pour obtenir une pâte homogène.\n" +
            "3. Diviser la pâte en portions et former des boudins de 1,5 cm d'épaisseur.\n" +
            "4. Aplatir légèrement les boudins et placer un filet de pâte de dattes au centre.\n" +
            "5. Replier la pâte autour de la garniture et former des losanges.\n" +
            "6. Chauffer l'huile dans une casserole et faire frire les makrouds jusqu'à ce qu'ils soient dorés.\n" +
            "7. Égoutter sur du papier absorbant.\n" +
            "8. Chauffer légèrement le miel et napper les makrouds.\n" +
            "9. Laisser refroidir légèrement avant de servir."
    },
    en: {
        title: "Algerian Date Makroud (Serves 4)",
        equipment: [
            "1 large bowl",
            "1 rolling pin",
            "1 knife",
            "1 cutting board",
            "1 saucepan",
            "1 wooden spoon",
            "1 oven",
            "1 kitchen scale"
        ],
        ingredients: [
            "250 g medium semolina",
            "50 g melted butter",
            "80 ml warm water",
            "1 pinch salt",
            "150 g date paste",
            "1 tsp cinnamon (2 g)",
            "50 ml oil for frying",
            "50 g honey for glazing"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a large bowl, mix semolina with salt and melted butter.\n" +
            "2. Gradually add warm water and knead until a smooth dough forms.\n" +
            "3. Divide dough into portions and roll into 1.5 cm thick logs.\n" +
            "4. Flatten slightly and place a line of date paste in the center.\n" +
            "5. Fold dough over the filling and cut into diamond shapes.\n" +
            "6. Heat oil in a saucepan and fry makrouds until golden.\n" +
            "7. Drain on paper towels.\n" +
            "8. Warm honey slightly and glaze the makrouds.\n" +
            "9. Let cool slightly before serving."
    },
    nl: {
        title: "Algerijnse Makroud met Dadels (voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 deegroller",
            "1 mes",
            "1 snijplank",
            "1 pan",
            "1 houten lepel",
            "1 oven",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "250 g semolina middelgroot",
            "50 g gesmolten boter",
            "80 ml warm water",
            "1 snufje zout",
            "150 g dadelpasta",
            "1 tl kaneel (2 g)",
            "50 ml olie om te frituren",
            "50 g honing om te glazuren"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Meng in een grote kom de semolina met zout en gesmolten boter.\n" +
            "2. Voeg geleidelijk warm water toe en kneed tot een glad deeg.\n" +
            "3. Verdeel het deeg in porties en rol tot 1,5 cm dikke rollen.\n" +
            "4. Druk lichtjes plat en leg een lijn dadelpasta in het midden.\n" +
            "5. Vouw het deeg over de vulling en snijd in ruitvormen.\n" +
            "6. Verhit olie in een pan en bak de makrouds goudbruin.\n" +
            "7. Laat uitlekken op keukenpapier.\n" +
            "8. Verwarm de honing licht en bestrijk de makrouds.\n" +
            "9. Laat iets afkoelen voor serveren."
    },
    ar: {
        title: "المقروض بالتمر (الجزائر، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء كبير",
            "1 نشابة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 قدر",
            "1 ملعقة خشبية",
            "1 فرن",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "250 غ سميد متوسط",
            "50 غ زبدة مذابة",
            "80 مل ماء دافئ",
            "رشة ملح",
            "150 غ معجون تمر",
            "1 ملعقة صغيرة قرفة (2 غ)",
            "50 مل زيت للقلي",
            "50 غ عسل للتغطية"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. في وعاء كبير، اخلط السميد مع الملح والزبدة المذابة.\n" +
            "2. أضف الماء الدافئ تدريجياً واعجن حتى تحصل على عجينة ناعمة.\n" +
            "3. قسم العجينة إلى أجزاء وشكلها إلى أسطوانات بسُمك 1.5 سم.\n" +
            "4. افرد الأسطوانات قليلاً وضع خطاً من معجون التمر في الوسط.\n" +
            "5. اطوِ العجينة على الحشوة وقطعها إلى أشكال معينية.\n" +
            "6. سخّن الزيت في قدر واقلِ المقروض حتى يصبح ذهبي اللون.\n" +
            "7. صفيه على ورق مطبخ.\n" +
            "8. سخّن العسل قليلاً وغطِ المقروض.\n" +
            "9. اتركه يبرد قليلاً قبل التقديم."
    }
};
recipesData.patisserie.baklawa_noix = {
    country: "afrique",
    countryName: "algerie",
    image: "images/baklawa_noix.jpg",
    fr: {
        title: "Baklawa aux noix (Algérie, 4 personnes)",
        equipment: [
            "1 plat rectangulaire pour four",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 pinceau de cuisine",
            "1 casserole",
            "1 four",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g pâte filo",
            "150 g noix concassées",
            "100 g beurre fondu",
            "50 g sucre",
            "1 cuillère à café cannelle (2 g)",
            "50 ml miel",
            "1 cuillère à soupe eau de fleur d’oranger (15 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Beurrer le plat rectangulaire.\n" +
            "3. Étaler une feuille de pâte filo, badigeonner de beurre fondu. Répéter 3 feuilles.\n" +
            "4. Mélanger les noix concassées, sucre et cannelle.\n" +
            "5. Étaler une couche de mélange de noix sur la pâte.\n" +
            "6. Recouvrir avec 3 feuilles de pâte filo, chacune badigeonnée de beurre.\n" +
            "7. Répéter les couches jusqu'à épuisement des ingrédients.\n" +
            "8. Couper en losanges ou carrés.\n" +
            "9. Cuire au four 25-30 min jusqu'à doré.\n" +
            "10. Chauffer le miel avec l’eau de fleur d’oranger et verser sur le baklawa chaud.\n" +
            "11. Laisser refroidir avant de servir."
    },
    en: {
        title: "Walnut Baklawa (Algeria, Serves 4)",
        equipment: [
            "1 rectangular baking dish",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 pastry brush",
            "1 saucepan",
            "1 oven",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g filo pastry",
            "150 g chopped walnuts",
            "100 g melted butter",
            "50 g sugar",
            "1 tsp cinnamon (2 g)",
            "50 ml honey",
            "1 tbsp orange blossom water (15 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Butter the rectangular baking dish.\n" +
            "3. Lay one sheet of filo pastry, brush with melted butter. Repeat 3 sheets.\n" +
            "4. Mix chopped walnuts, sugar, and cinnamon.\n" +
            "5. Spread a layer of walnut mixture over the pastry.\n" +
            "6. Cover with 3 sheets of filo, brushing each with butter.\n" +
            "7. Repeat layers until ingredients are used.\n" +
            "8. Cut into diamonds or squares.\n" +
            "9. Bake 25-30 min until golden.\n" +
            "10. Warm honey with orange blossom water and pour over hot baklawa.\n" +
            "11. Let cool before serving."
    },
    nl: {
        title: "Baklava met Walnoten (Algerije, voor 4 personen)",
        equipment: [
            "1 rechthoekige ovenschaal",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 kwast",
            "1 pan",
            "1 oven",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g filodeeg",
            "150 g gehakte walnoten",
            "100 g gesmolten boter",
            "50 g suiker",
            "1 tl kaneel (2 g)",
            "50 ml honing",
            "1 el oranjebloesemwater (15 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Vet de rechthoekige ovenschaal in.\n" +
            "3. Leg één vel filodeeg, bestrijk met gesmolten boter. Herhaal 3 vellen.\n" +
            "4. Meng gehakte walnoten, suiker en kaneel.\n" +
            "5. Spreid een laag van het notenmengsel over het deeg.\n" +
            "6. Bedek met 3 vellen filodeeg, elk besmeerd met boter.\n" +
            "7. Herhaal lagen tot alle ingrediënten gebruikt zijn.\n" +
            "8. Snijd in ruiten of vierkanten.\n" +
            "9. Bak 25-30 min tot goudbruin.\n" +
            "10. Verwarm honing met oranjebloesemwater en giet over de warme baklava.\n" +
            "11. Laat afkoelen voor serveren."
    },
    ar: {
        title: "بقلاوة بالجوز (الجزائر، تكفي 4 أشخاص)",
        equipment: [
            "1 صينية خبز مستطيلة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 فرشاة للمطبخ",
            "1 قدر",
            "1 فرن",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "200 غ عجينة فيلو",
            "150 غ جوز مفروم",
            "100 غ زبدة مذابة",
            "50 غ سكر",
            "1 ملعقة صغيرة قرفة (2 غ)",
            "50 مل عسل",
            "1 ملعقة كبيرة ماء زهر (15 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن إلى 180 درجة مئوية.\n" +
            "2. ادهن صينية الخبز المستطيلة بالزبدة.\n" +
            "3. ضع ورقة من عجينة الفيلو، ادهنها بالزبدة المذابة. كرر 3 ورقات.\n" +
            "4. اخلط الجوز المفروم مع السكر والقرفة.\n" +
            "5. ضع طبقة من خليط الجوز على العجينة.\n" +
            "6. غطِّها بـ 3 ورقات من الفيلو، ادهن كل واحدة بالزبدة.\n" +
            "7. كرر الطبقات حتى تنتهي المكونات.\n" +
            "8. قطع إلى أشكال معينة أو مربعات.\n" +
            "9. اخبز 25-30 دقيقة حتى تصبح ذهبية.\n" +
            "10. سخّن العسل مع ماء الزهر واسكب فوق البقلاوة الساخنة.\n" +
            "11. اتركها لتبرد قليلاً قبل التقديم."
    }
};
recipesData.entree.ndole_cameroun = {
    country: "afrique",
    countryName: "cameroun",
    image: "images/ndole_cameroun.jpg",
    fr: {
        title: "Ndolé aux crevettes (Cameroun, 4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 saladier",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g feuilles de ndolé (ou épinards frais) hachées",
            "300 g crevettes décortiquées",
            "1 oignon moyen (100 g), haché",
            "2 tomates moyennes (200 g), coupées en dés",
            "2 cuillères à soupe huile d’arachide (30 ml)",
            "2 gousses d’ail, hachées",
            "1 cuillère à café pâte d’arachide (5 g)",
            "1/2 cuillère à café sel (2 g)",
            "1/4 cuillère à café poivre (1 g)",
            "1/2 cuillère à café piment doux (2 g)",
            "200 ml eau",
            "Quelques feuilles de coriandre pour garnir (5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer l’huile dans une grande casserole à feu moyen.\n" +
            "2. Faire revenir l’oignon et l’ail 3-4 min jusqu’à ce qu’ils deviennent translucides.\n" +
            "3. Ajouter les tomates en dés et cuire 5 min jusqu’à ce qu’elles ramollissent.\n" +
            "4. Ajouter les feuilles de ndolé hachées et mélanger 5 min.\n" +
            "5. Ajouter les crevettes, le sel, poivre et piment doux. Bien mélanger.\n" +
            "6. Dissoudre la pâte d’arachide dans 200 ml d’eau et verser dans la casserole.\n" +
            "7. Couvrir et laisser mijoter 10 min à feu doux.\n" +
            "8. Retirer du feu, garnir de coriandre fraîche et servir chaud."
    },
    en: {
        title: "Ndolé with Shrimp (Cameroon, Serves 4)",
        equipment: [
            "1 large pot",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g ndolé leaves (or fresh spinach), chopped",
            "300 g peeled shrimp",
            "1 medium onion (100 g), chopped",
            "2 medium tomatoes (200 g), diced",
            "2 tbsp peanut oil (30 ml)",
            "2 garlic cloves, chopped",
            "1 tsp peanut paste (5 g)",
            "1/2 tsp salt (2 g)",
            "1/4 tsp pepper (1 g)",
            "1/2 tsp mild chili (2 g)",
            "200 ml water",
            "Some fresh coriander leaves for garnish (5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat oil in a large pot over medium heat.\n" +
            "2. Sauté onion and garlic 3-4 min until translucent.\n" +
            "3. Add diced tomatoes and cook 5 min until soft.\n" +
            "4. Add chopped ndolé leaves and stir 5 min.\n" +
            "5. Add shrimp, salt, pepper, and mild chili. Mix well.\n" +
            "6. Dissolve peanut paste in 200 ml water and pour into the pot.\n" +
            "7. Cover and simmer 10 min over low heat.\n" +
            "8. Remove from heat, garnish with fresh coriander, and serve hot."
    },
    nl: {
        title: "Ndolé met Garnalen (Kameroen, voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g ndolé bladeren (of verse spinazie), gehakt",
            "300 g gepelde garnalen",
            "1 middelgrote ui (100 g), gehakt",
            "2 middelgrote tomaten (200 g), in blokjes",
            "2 eetlepels pindaolie (30 ml)",
            "2 teentjes knoflook, gehakt",
            "1 tl pindapasta (5 g)",
            "1/2 tl zout (2 g)",
            "1/4 tl peper (1 g)",
            "1/2 tl milde chili (2 g)",
            "200 ml water",
            "Enkele verse korianderblaadjes voor garnering (5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit olie in een grote pan op middelhoog vuur.\n" +
            "2. Bak ui en knoflook 3-4 minuten tot glazig.\n" +
            "3. Voeg tomatenblokjes toe en bak 5 minuten tot zacht.\n" +
            "4. Voeg gehakte ndolé bladeren toe en roer 5 minuten.\n" +
            "5. Voeg garnalen, zout, peper en milde chili toe. Goed mengen.\n" +
            "6. Los pindapasta op in 200 ml water en giet in de pan.\n" +
            "7. Dek af en laat 10 min sudderen op laag vuur.\n" +
            "8. Haal van het vuur, garneer met verse koriander en serveer warm."
    },
    ar: {
        title: "ندولي بالروبيان (الكاميرون، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر كبير",
            "1 سكين",
            "1 لوح تقطيع",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "200 غ أوراق ندولي (أو سبانخ طازجة) مفرومة",
            "300 غ روبيان مقشر",
            "1 بصلة متوسطة (100 غ) مفرومة",
            "2 طماطم متوسطة (200 غ) مقطعة مكعبات",
            "2 ملعقة كبيرة زيت فول سوداني (30 مل)",
            "2 فص ثوم مفروم",
            "1 ملعقة صغيرة معجون فول سوداني (5 غ)",
            "1/2 ملعقة صغيرة ملح (2 غ)",
            "1/4 ملعقة صغيرة فلفل (1 غ)",
            "1/2 ملعقة صغيرة فلفل حلو (2 غ)",
            "200 مل ماء",
            "بضع أوراق كزبرة طازجة للتزيين (5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الزيت في قدر كبير على نار متوسطة.\n" +
            "2. اقلي البصل والثوم 3-4 دقائق حتى يصبح شفافاً.\n" +
            "3. أضف الطماطم المقطعة واطبخ 5 دقائق حتى تلين.\n" +
            "4. أضف أوراق الندولي المفرومة وحرك 5 دقائق.\n" +
            "5. أضف الروبيان، الملح، الفلفل والفلفل الحلو. اخلط جيداً.\n" +
            "6. أذِب معجون الفول السوداني في 200 مل ماء وأضفه إلى القدر.\n" +
            "7. غط القدر واتركه ينضج 10 دقائق على نار هادئة.\n" +
            "8. ارفع عن النار، زيّنه بالكزبرة الطازجة وقدمه ساخناً."
    }
};
recipesData.plat.poulet_dg_cameroun = {
    country: "afrique",
    countryName: "cameroun",
    image: "images/poulet_dg_cameroun.jpg",
    fr: {
        title: "Poulet DG (Cameroun, 4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 poêle",
            "1 couteau",
            "1 planche à découper",
            "1 cuillère en bois",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "600 g blanc de poulet, coupé en morceaux",
            "2 carottes moyennes (150 g), coupées en bâtonnets",
            "1 poivron rouge (120 g), émincé",
            "1 oignon moyen (100 g), émincé",
            "2 tomates moyennes (200 g), concassées",
            "3 gousses d’ail, hachées",
            "2 cuillères à soupe huile de tournesol (30 ml)",
            "1 cuillère à café sel (2 g)",
            "1/2 cuillère à café poivre (1 g)",
            "1/2 cuillère à café paprika (2 g)",
            "1 bouquet de persil frais (10 g), haché",
            "150 g plantains mûrs, coupés en rondelles"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer 1 cuillère à soupe d’huile dans une poêle, faire dorer le poulet 5-6 min de chaque côté. Réserver.\n" +
            "2. Dans la même poêle, ajouter le reste d’huile, faire revenir oignon et ail 3 min.\n" +
            "3. Ajouter les carottes et poivron, cuire 5 min en remuant.\n" +
            "4. Ajouter les tomates concassées, sel, poivre et paprika. Cuire 5 min.\n" +
            "5. Remettre le poulet dans la poêle, couvrir et laisser mijoter 15 min à feu doux.\n" +
            "6. Pendant ce temps, faire frire légèrement les rondelles de plantain dans une petite poêle avec un filet d’huile.\n" +
            "7. Ajouter le persil haché sur le poulet avant de servir.\n" +
            "8. Servir le Poulet DG accompagné des plantains dorés."
    },
    en: {
        title: "Poulet DG (Cameroon, Serves 4)",
        equipment: [
            "1 large pot",
            "1 frying pan",
            "1 knife",
            "1 cutting board",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "600 g chicken breast, cut into pieces",
            "2 medium carrots (150 g), cut into sticks",
            "1 red bell pepper (120 g), sliced",
            "1 medium onion (100 g), sliced",
            "2 medium tomatoes (200 g), crushed",
            "3 garlic cloves, chopped",
            "2 tbsp sunflower oil (30 ml)",
            "1 tsp salt (2 g)",
            "1/2 tsp pepper (1 g)",
            "1/2 tsp paprika (2 g)",
            "1 bunch fresh parsley (10 g), chopped",
            "150 g ripe plantains, sliced"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat 1 tbsp oil in a frying pan, brown chicken 5-6 min per side. Set aside.\n" +
            "2. In the same pan, add remaining oil, sauté onion and garlic 3 min.\n" +
            "3. Add carrots and bell pepper, cook 5 min while stirring.\n" +
            "4. Add crushed tomatoes, salt, pepper, and paprika. Cook 5 min.\n" +
            "5. Return chicken to the pan, cover and simmer 15 min on low heat.\n" +
            "6. Meanwhile, lightly fry plantain slices in a small pan with a drizzle of oil.\n" +
            "7. Add chopped parsley over the chicken before serving.\n" +
            "8. Serve Poulet DG with golden plantains."
    },
    nl: {
        title: "Poulet DG (Kameroen, voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 koekenpan",
            "1 mes",
            "1 snijplank",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "600 g kipfilet, in stukjes gesneden",
            "2 middelgrote wortels (150 g), in staafjes gesneden",
            "1 rode paprika (120 g), in reepjes",
            "1 middelgrote ui (100 g), gesneden",
            "2 middelgrote tomaten (200 g), geplet",
            "3 teentjes knoflook, gehakt",
            "2 eetlepels zonnebloemolie (30 ml)",
            "1 tl zout (2 g)",
            "1/2 tl peper (1 g)",
            "1/2 tl paprikapoeder (2 g)",
            "1 bosje verse peterselie (10 g), gehakt",
            "150 g rijpe bakbanaan, in plakjes"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit 1 eetlepel olie in een koekenpan, bak kip 5-6 min per kant. Zet apart.\n" +
            "2. Voeg in dezelfde pan de rest van de olie toe, bak ui en knoflook 3 min.\n" +
            "3. Voeg wortels en paprika toe, bak 5 min al roerend.\n" +
            "4. Voeg geplette tomaten, zout, peper en paprikapoeder toe. Bak 5 min.\n" +
            "5. Doe de kip terug in de pan, dek af en laat 15 min op laag vuur sudderen.\n" +
            "6. Bak ondertussen de bakbanaanplakjes licht in een kleine pan met een scheut olie.\n" +
            "7. Voeg gehakte peterselie over de kip voor het serveren.\n" +
            "8. Serveer Poulet DG met goudbruine bakbanaan."
    },
    ar: {
        title: "بولي د.ج (الكاميرون، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر كبير",
            "1 مقلاة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "600 غ صدر دجاج، مقطع إلى قطع",
            "2 جزر متوسطة (150 غ)، مقطعة أصابع",
            "1 فلفل أحمر (120 غ)، مقطع شرائح",
            "1 بصلة متوسطة (100 غ)، مقطعة شرائح",
            "2 طماطم متوسطة (200 غ)، مهروسة",
            "3 فصوص ثوم، مفرومة",
            "2 ملعقة كبيرة زيت دوار الشمس (30 مل)",
            "1 ملعقة صغيرة ملح (2 غ)",
            "1/2 ملعقة صغيرة فلفل (1 غ)",
            "1/2 ملعقة صغيرة فلفل حلو (2 غ)",
            "1 باقة بقدونس طازج (10 غ)، مفروم",
            "150 غ بلانتان ناضج، مقطع شرائح"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن 1 ملعقة كبيرة زيت في مقلاة، حمّر الدجاج 5-6 دقائق لكل جانب. ضع جانباً.\n" +
            "2. في نفس المقلاة، أضف بقية الزيت، اقلي البصل والثوم 3 دقائق.\n" +
            "3. أضف الجزر والفلفل، اطبخ 5 دقائق مع التحريك.\n" +
            "4. أضف الطماطم المهروسة، الملح، الفلفل والفلفل الحلو. اطبخ 5 دقائق.\n" +
            "5. أعد الدجاج إلى المقلاة، غطّها واتركها تنضج 15 دقيقة على نار هادئة.\n" +
            "6. في هذه الأثناء، اقلي شرائح البلانتان قليلاً في مقلاة صغيرة مع قليل من الزيت.\n" +
            "7. أضف البقدونس المفروم فوق الدجاج قبل التقديم.\n" +
            "8. قدّم Poulet DG مع البلانتان الذهبي."
    }
};

recipesData.dessert.beignets_banane_cameroun = {
    country: "afrique",
    countryName: "cameroun",
    image: "images/beignets_banane_cameroun.jpg",
    fr: {
        title: "Beignets de banane (Cameroun, 4 personnes)",
        equipment: [
            "1 bol",
            "1 fouet",
            "1 couteau",
            "1 planche à découper",
            "1 poêle profonde",
            "1 cuillère en bois",
            "1 écumoire",
            "1 balance de cuisine"
        ],
        ingredients: [
            "3 bananes mûres (300 g), pelées et écrasées",
            "150 g farine de blé",
            "50 g sucre",
            "1/2 cuillère à café levure chimique (2 g)",
            "1/4 cuillère à café sel (1 g)",
            "50 ml lait",
            "1 cuillère à café vanille (5 ml)",
            "Huile de tournesol pour friture (environ 500 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Écraser les bananes dans un bol jusqu'à obtenir une purée lisse.\n" +
            "2. Ajouter le sucre, sel, levure chimique et farine. Mélanger.\n" +
            "3. Ajouter le lait et la vanille, mélanger jusqu'à obtention d'une pâte homogène.\n" +
            "4. Chauffer l’huile dans une poêle profonde à feu moyen.\n" +
            "5. Prélever des cuillères de pâte et les déposer doucement dans l’huile chaude.\n" +
            "6. Cuire 2-3 minutes de chaque côté jusqu’à ce que les beignets soient dorés.\n" +
            "7. Retirer avec une écumoire et égoutter sur du papier absorbant.\n" +
            "8. Servir tiède ou à température ambiante."
    },
    en: {
        title: "Banana Fritters (Cameroon, Serves 4)",
        equipment: [
            "1 bowl",
            "1 whisk",
            "1 knife",
            "1 cutting board",
            "1 deep frying pan",
            "1 wooden spoon",
            "1 slotted spoon",
            "1 kitchen scale"
        ],
        ingredients: [
            "3 ripe bananas (300 g), peeled and mashed",
            "150 g wheat flour",
            "50 g sugar",
            "1/2 tsp baking powder (2 g)",
            "1/4 tsp salt (1 g)",
            "50 ml milk",
            "1 tsp vanilla (5 ml)",
            "Sunflower oil for frying (approx. 500 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Mash the bananas in a bowl until smooth.\n" +
            "2. Add sugar, salt, baking powder, and flour. Mix.\n" +
            "3. Add milk and vanilla, mix until smooth batter forms.\n" +
            "4. Heat oil in a deep pan over medium heat.\n" +
            "5. Spoon batter gently into hot oil.\n" +
            "6. Cook 2-3 min per side until golden brown.\n" +
            "7. Remove with slotted spoon and drain on paper towels.\n" +
            "8. Serve warm or at room temperature."
    },
    nl: {
        title: "Bananenbeignets (Kameroen, voor 4 personen)",
        equipment: [
            "1 kom",
            "1 garde",
            "1 mes",
            "1 snijplank",
            "1 diepe koekenpan",
            "1 houten lepel",
            "1 schuimspaan",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "3 rijpe bananen (300 g), gepeld en geprakt",
            "150 g tarwebloem",
            "50 g suiker",
            "1/2 tl bakpoeder (2 g)",
            "1/4 tl zout (1 g)",
            "50 ml melk",
            "1 tl vanille (5 ml)",
            "Zonnebloemolie voor frituren (ongeveer 500 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Prak de bananen in een kom tot een gladde puree.\n" +
            "2. Voeg suiker, zout, bakpoeder en bloem toe. Meng.\n" +
            "3. Voeg melk en vanille toe, meng tot een homogeen beslag.\n" +
            "4. Verhit olie in een diepe pan op middelhoog vuur.\n" +
            "5. Schep het beslag voorzichtig in de hete olie.\n" +
            "6. Bak 2-3 minuten per kant tot goudbruin.\n" +
            "7. Haal eruit met een schuimspaan en laat uitlekken op keukenpapier.\n" +
            "8. Serveer warm of op kamertemperatuur."
    },
    ar: {
        title: "فطائر الموز (الكاميرون، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء",
            "1 خفاقة",
            "1 سكين",
            "1 لوح تقطيع",
            "1 مقلاة عميقة",
            "1 ملعقة خشبية",
            "1 ملعقة مشقوقة",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "3 موز ناضج (300 غ)، مقشر ومهروس",
            "150 غ دقيق قمح",
            "50 غ سكر",
            "1/2 ملعقة صغيرة خميرة كيميائية (2 غ)",
            "1/4 ملعقة صغيرة ملح (1 غ)",
            "50 مل حليب",
            "1 ملعقة صغيرة فانيليا (5 مل)",
            "زيت دوار الشمس للقلي (حوالي 500 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. اهرس الموز في وعاء حتى يصبح ناعماً.\n" +
            "2. أضف السكر، الملح، الخميرة والدقيق. اخلط.\n" +
            "3. أضف الحليب والفانيليا، اخلط حتى يتكون خليط متجانس.\n" +
            "4. سخن الزيت في مقلاة عميقة على نار متوسطة.\n" +
            "5. ضع المزيج بحذر في الزيت الساخن.\n" +
            "6. اقليه 2-3 دقائق لكل جانب حتى يصبح ذهبي اللون.\n" +
            "7. أخرجه باستخدام ملعقة مشقوقة وصفيه على ورق مطبخ.\n" +
            "8. قدمه دافئاً أو في درجة حرارة الغرفة."
    }
};
recipesData.patisserie.cake_manioc_cameroun = {
    country: "afrique",
    countryName: "cameroun",
    image: "images/cake_manioc_cameroun.jpg",
    fr: {
        title: "Cake au manioc (Cameroun, 4 personnes)",
        equipment: [
            "1 grand bol",
            "1 fouet",
            "1 moule à cake",
            "1 cuillère en bois",
            "1 balance de cuisine",
            "1 four"
        ],
        ingredients: [
            "200 g farine de manioc",
            "100 g sucre",
            "2 œufs",
            "50 g beurre fondu",
            "100 ml lait",
            "1/2 cuillère à café levure chimique (2 g)",
            "1/4 cuillère à café sel (1 g)",
            "1 cuillère à café vanille (5 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Dans un bol, battre les œufs avec le sucre jusqu’à ce que le mélange blanchisse.\n" +
            "3. Ajouter le beurre fondu et la vanille, mélanger.\n" +
            "4. Ajouter la farine de manioc, le sel et la levure chimique, mélanger jusqu’à obtenir une pâte homogène.\n" +
            "5. Incorporer le lait progressivement tout en remuant.\n" +
            "6. Verser la pâte dans un moule à cake légèrement beurré.\n" +
            "7. Cuire au four 25-30 minutes jusqu’à ce que le cake soit doré et cuit à l’intérieur.\n" +
            "8. Laisser refroidir 10 min avant de démouler et servir."
    },
    en: {
        title: "Cassava Cake (Cameroon, Serves 4)",
        equipment: [
            "1 large bowl",
            "1 whisk",
            "1 cake pan",
            "1 wooden spoon",
            "1 kitchen scale",
            "1 oven"
        ],
        ingredients: [
            "200 g cassava flour",
            "100 g sugar",
            "2 eggs",
            "50 g melted butter",
            "100 ml milk",
            "1/2 tsp baking powder (2 g)",
            "1/4 tsp salt (1 g)",
            "1 tsp vanilla (5 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. In a bowl, beat eggs with sugar until pale.\n" +
            "3. Add melted butter and vanilla, mix.\n" +
            "4. Add cassava flour, salt, and baking powder, mix until smooth batter forms.\n" +
            "5. Gradually add milk while stirring.\n" +
            "6. Pour batter into a lightly greased cake pan.\n" +
            "7. Bake 25-30 min until cake is golden and cooked inside.\n" +
            "8. Let cool 10 min before removing from pan and serving."
    },
    nl: {
        title: "Cassave Cake (Kameroen, voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 garde",
            "1 cakevorm",
            "1 houten lepel",
            "1 keukenweegschaal",
            "1 oven"
        ],
        ingredients: [
            "200 g cassavemeel",
            "100 g suiker",
            "2 eieren",
            "50 g gesmolten boter",
            "100 ml melk",
            "1/2 tl bakpoeder (2 g)",
            "1/4 tl zout (1 g)",
            "1 tl vanille (5 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Klop in een kom de eieren met suiker tot het mengsel bleek wordt.\n" +
            "3. Voeg gesmolten boter en vanille toe, meng.\n" +
            "4. Voeg cassavemeel, zout en bakpoeder toe, meng tot een glad beslag.\n" +
            "5. Voeg geleidelijk de melk toe terwijl je roert.\n" +
            "6. Giet het beslag in een licht ingevette cakevorm.\n" +
            "7. Bak 25-30 min tot de cake goudbruin en gaar is.\n" +
            "8. Laat 10 min afkoelen voor het uit de vorm halen en serveren."
    },
    ar: {
        title: "كيك الكسافا (الكاميرون، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء كبير",
            "1 خفاقة",
            "1 قالب كيك",
            "1 ملعقة خشبية",
            "1 ميزان مطبخ",
            "1 فرن"
        ],
        ingredients: [
            "200 غ دقيق الكسافا",
            "100 غ سكر",
            "2 بيض",
            "50 غ زبدة مذابة",
            "100 مل حليب",
            "1/2 ملعقة صغيرة خميرة كيميائية (2 غ)",
            "1/4 ملعقة صغيرة ملح (1 غ)",
            "1 ملعقة صغيرة فانيليا (5 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخّن الفرن على 180°C.\n" +
            "2. في وعاء، اخفق البيض مع السكر حتى يصبح الخليط شاحب اللون.\n" +
            "3. أضف الزبدة المذابة والفانيليا، وامزج.\n" +
            "4. أضف دقيق الكسافا والملح والخميرة، وامزج حتى تحصل على خليط ناعم.\n" +
            "5. أضف الحليب تدريجياً مع التحريك.\n" +
            "6. صب الخليط في قالب كيك مدهون بالزبدة قليلًا.\n" +
            "7. اخبز 25-30 دقيقة حتى يصبح الكيك ذهبيًا وناضجًا من الداخل.\n" +
            "8. اتركه يبرد 10 دقائق قبل إخراجه من القالب وتقديمه."
    }
};
recipesData.entree.gazpacho_espagne = {
    country: "europe",
    countryName: "espagne",
    image: "images/gazpacho_espagne.jpg",
    fr: {
        title: "Gazpacho (Espagne, 4 personnes)",
        equipment: [
            "1 blender",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 balance de cuisine",
            "1 cuillère en bois"
        ],
        ingredients: [
            "4 tomates mûres (400 g)",
            "1 concombre moyen (150 g), pelé et coupé en dés",
            "1 poivron rouge (120 g), épépiné et coupé en dés",
            "1 gousse d’ail",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1 cuillère à soupe vinaigre de pomme sans alcool (facultatif, 10 ml)",
            "1/2 cuillère à café sel (1 g)",
            "1/4 cuillère à café poivre (0.5 g)",
            "200 ml eau froide"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Laver et couper les légumes.\n" +
            "2. Mettre tomates, concombre, poivron et ail dans le blender.\n" +
            "3. Ajouter huile d’olive, sel, poivre et eau.\n" +
            "4. Mixer 2-3 minutes jusqu’à obtenir une soupe lisse.\n" +
            "5. Goûter et ajuster le sel si nécessaire.\n" +
            "6. Mettre au réfrigérateur 1 heure avant de servir.\n" +
            "7. Servir frais, éventuellement décoré de dés de légumes."
    },
    en: {
        title: "Gazpacho (Spain, Serves 4)",
        equipment: [
            "1 blender",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 kitchen scale",
            "1 wooden spoon"
        ],
        ingredients: [
            "4 ripe tomatoes (400 g)",
            "1 medium cucumber (150 g), peeled and diced",
            "1 red bell pepper (120 g), deseeded and diced",
            "1 garlic clove",
            "2 tbsp olive oil (30 ml)",
            "1 tbsp apple vinegar without alcohol (optional, 10 ml)",
            "1/2 tsp salt (1 g)",
            "1/4 tsp pepper (0.5 g)",
            "200 ml cold water"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Wash and cut vegetables.\n" +
            "2. Put tomatoes, cucumber, bell pepper, and garlic in blender.\n" +
            "3. Add olive oil, salt, pepper, and water.\n" +
            "4. Blend 2-3 minutes until smooth.\n" +
            "5. Taste and adjust salt if needed.\n" +
            "6. Chill in fridge 1 hour before serving.\n" +
            "7. Serve cold, optionally garnished with vegetable cubes."
    },
    nl: {
        title: "Gazpacho (Spanje, voor 4 personen)",
        equipment: [
            "1 blender",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 keukenweegschaal",
            "1 houten lepel"
        ],
        ingredients: [
            "4 rijpe tomaten (400 g)",
            "1 middelgrote komkommer (150 g), geschild en in blokjes",
            "1 rode paprika (120 g), zonder zaadjes en in blokjes",
            "1 teentje knoflook",
            "2 eetlepels olijfolie (30 ml)",
            "1 eetlepel appelazijn zonder alcohol (optioneel, 10 ml)",
            "1/2 tl zout (1 g)",
            "1/4 tl peper (0,5 g)",
            "200 ml koud water"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Was en snijd de groenten.\n" +
            "2. Doe tomaten, komkommer, paprika en knoflook in blender.\n" +
            "3. Voeg olijfolie, zout, peper en water toe.\n" +
            "4. Mix 2-3 minuten tot een gladde soep.\n" +
            "5. Proef en pas zout aan indien nodig.\n" +
            "6. Zet 1 uur in de koelkast.\n" +
            "7. Serveer koud, eventueel gegarneerd met blokjes groenten."
    },
    ar: {
        title: "غازباتشو (إسبانيا، تكفي 4 أشخاص)",
        equipment: [
            "1 خلاط",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 ميزان مطبخ",
            "1 ملعقة خشبية"
        ],
        ingredients: [
            "4 طماطم ناضجة (400 غ)",
            "1 خيار متوسط (150 غ)، مقشر ومقطع مكعبات",
            "1 فلفل أحمر (120 غ)، منزوعة البذور ومقطع مكعبات",
            "1 فص ثوم",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1 ملعقة كبيرة خل تفاح بدون كحول (اختياري، 10 مل)",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/4 ملعقة صغيرة فلفل (0.5 غ)",
            "200 مل ماء بارد"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. غسل وتقطيع الخضار.\n" +
            "2. ضع الطماطم، الخيار، الفلفل والثوم في الخلاط.\n" +
            "3. أضف زيت الزيتون، الملح، الفلفل والماء.\n" +
            "4. اخلط 2-3 دقائق حتى يصبح المزيج ناعماً.\n" +
            "5. تذوق وضبط الملح إذا لزم الأمر.\n" +
            "6. ضع المزيج في الثلاجة لمدة ساعة قبل التقديم.\n" +
            "7. قدمه بارداً، ويمكن تزيينه بمكعبات الخضار."
    }
};
recipesData.plat.paella_espagne = {
    country: "europe",
    countryName: "espagne",
    image: "images/paella_espagne.jpg",
    fr: {
        title: "Paella végétarienne (Espagne, 4 personnes)",
        equipment: [
            "1 grande poêle à paella ou grande poêle",
            "1 cuillère en bois",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "200 g riz rond",
            "1 poivron rouge (120 g), coupé en lanières",
            "1 poivron vert (120 g), coupé en lanières",
            "1 courgette moyenne (150 g), coupée en dés",
            "100 g petits pois surgelés",
            "1 tomate (100 g), pelée et concassée",
            "1 gousse d’ail",
            "750 ml bouillon de légumes",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1/2 cuillère à café paprika doux (1 g)",
            "1/4 cuillère à café sel (0.5 g)",
            "1 pincée de safran ou curcuma pour couleur (facultatif)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer l’huile d’olive dans la poêle.\n" +
            "2. Ajouter l’ail haché et faire revenir 1 minute.\n" +
            "3. Ajouter poivrons, courgette et petits pois. Cuire 5-7 minutes en remuant.\n" +
            "4. Ajouter la tomate concassée et paprika, mélanger 2 minutes.\n" +
            "5. Ajouter le riz et mélanger pour bien enrober les grains.\n" +
            "6. Verser le bouillon chaud, ajouter sel et safran.\n" +
            "7. Cuire à feu moyen 15-20 minutes sans remuer.\n" +
            "8. Vérifier que le riz est cuit et tout le liquide absorbé.\n" +
            "9. Retirer du feu, laisser reposer 5 minutes avant de servir."
    },
    en: {
        title: "Vegetarian Paella (Spain, Serves 4)",
        equipment: [
            "1 large paella pan or skillet",
            "1 wooden spoon",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "200 g round rice",
            "1 red bell pepper (120 g), sliced",
            "1 green bell pepper (120 g), sliced",
            "1 medium zucchini (150 g), diced",
            "100 g frozen peas",
            "1 tomato (100 g), peeled and chopped",
            "1 garlic clove",
            "750 ml vegetable broth",
            "2 tbsp olive oil (30 ml)",
            "1/2 tsp sweet paprika (1 g)",
            "1/4 tsp salt (0.5 g)",
            "Pinch of saffron or turmeric (optional, for color)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat olive oil in pan.\n" +
            "2. Add chopped garlic and sauté 1 minute.\n" +
            "3. Add peppers, zucchini, and peas. Cook 5-7 minutes, stirring.\n" +
            "4. Add chopped tomato and paprika, stir 2 minutes.\n" +
            "5. Add rice and mix to coat grains.\n" +
            "6. Pour hot broth, add salt and saffron.\n" +
            "7. Cook over medium heat 15-20 minutes without stirring.\n" +
            "8. Check rice is cooked and liquid absorbed.\n" +
            "9. Remove from heat, let rest 5 minutes before serving."
    },
    nl: {
        title: "Vegetarische Paella (Spanje, voor 4 personen)",
        equipment: [
            "1 grote paellapan of koekenpan",
            "1 houten lepel",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "200 g ronde rijst",
            "1 rode paprika (120 g), in reepjes",
            "1 groene paprika (120 g), in reepjes",
            "1 middelgrote courgette (150 g), in blokjes",
            "100 g diepvrieserwten",
            "1 tomaat (100 g), gepeld en gehakt",
            "1 teentje knoflook",
            "750 ml groentebouillon",
            "2 eetlepels olijfolie (30 ml)",
            "1/2 tl zoete paprika (1 g)",
            "1/4 tl zout (0,5 g)",
            "Snufje saffraan of kurkuma (optioneel, voor kleur)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit olijfolie in de pan.\n" +
            "2. Voeg gehakte knoflook toe en bak 1 minuut.\n" +
            "3. Voeg paprika, courgette en erwten toe. Bak 5-7 minuten onder voortdurend roeren.\n" +
            "4. Voeg gehakte tomaat en paprika toe, roer 2 minuten.\n" +
            "5. Voeg rijst toe en meng goed.\n" +
            "6. Giet hete bouillon erbij, voeg zout en saffraan toe.\n" +
            "7. Kook 15-20 minuten op middelhoog vuur zonder te roeren.\n" +
            "8. Controleer of de rijst gaar is en het vocht opgenomen.\n" +
            "9. Haal van het vuur en laat 5 minuten rusten voor het serveren."
    },
    ar: {
        title: "باييلا نباتية (إسبانيا، تكفي 4 أشخاص)",
        equipment: [
            "1 مقلاة باييلا كبيرة أو مقلاة عميقة",
            "1 ملعقة خشبية",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "200 غ أرز دائري",
            "1 فلفل أحمر (120 غ)، مقطع شرائح",
            "1 فلفل أخضر (120 غ)، مقطع شرائح",
            "1 كوسة متوسطة (150 غ)، مقطعة مكعبات",
            "100 غ بازيلاء مجمدة",
            "1 طماطم (100 غ)، مقشرة ومقطعة",
            "1 فص ثوم",
            "750 مل مرق خضار",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1/2 ملعقة صغيرة بابريكا حلوة (1 غ)",
            "1/4 ملعقة صغيرة ملح (0.5 غ)",
            "رشة زعفران أو كركم (اختياري للون)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن زيت الزيتون في المقلاة.\n" +
            "2. أضف الثوم المفروم وقلب دقيقة واحدة.\n" +
            "3. أضف الفلفل والكوسة والبازيلاء. اطبخ 5-7 دقائق مع التحريك.\n" +
            "4. أضف الطماطم المقطعة والبابريكا، قلب 2 دقيقة.\n" +
            "5. أضف الأرز واخلط جيدًا.\n" +
            "6. صب المرق الساخن وأضف الملح والزعفران.\n" +
            "7. اطبخ 15-20 دقيقة على نار متوسطة دون تقليب.\n" +
            "8. تحقق من نضج الأرز وامتصاص السوائل.\n" +
            "9. ارفع عن النار واتركه 5 دقائق قبل التقديم."
    }
};
recipesData.dessert.flan_vanille_espagne = {
    country: "europe",
    countryName: "espagne",
    image: "images/flan_vanille_espagne.jpg",
    fr: {
        title: "Flan à la vanille (Espagne, 4 personnes)",
        equipment: [
            "1 casserole",
            "1 fouet",
            "4 ramequins",
            "1 bol",
            "1 balance de cuisine",
            "1 cuillère en bois"
        ],
        ingredients: [
            "500 ml lait",
            "4 œufs",
            "100 g sucre",
            "1 cuillère à soupe vanille liquide (15 ml)",
            "1 pincée de sel (1 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 160°C.\n" +
            "2. Dans un bol, battre les œufs avec le sucre et la pincée de sel jusqu'à obtenir un mélange homogène.\n" +
            "3. Chauffer le lait dans une casserole jusqu'à ébullition légère, puis retirer du feu.\n" +
            "4. Verser lentement le lait chaud sur le mélange œufs-sucre tout en remuant.\n" +
            "5. Ajouter la vanille et bien mélanger.\n" +
            "6. Verser la préparation dans les ramequins.\n" +
            "7. Placer les ramequins dans un plat allant au four et ajouter de l’eau chaude à mi-hauteur (bain-marie).\n" +
            "8. Cuire 35-40 minutes jusqu'à ce que le flan soit pris.\n" +
            "9. Laisser refroidir, puis réfrigérer 1 heure avant de servir."
    },
    en: {
        title: "Vanilla Flan (Spain, Serves 4)",
        equipment: [
            "1 saucepan",
            "1 whisk",
            "4 ramekins",
            "1 bowl",
            "1 kitchen scale",
            "1 wooden spoon"
        ],
        ingredients: [
            "500 ml milk",
            "4 eggs",
            "100 g sugar",
            "1 tbsp vanilla extract (15 ml)",
            "1 pinch salt (1 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 160°C.\n" +
            "2. In a bowl, beat eggs with sugar and salt until smooth.\n" +
            "3. Heat milk in saucepan until just boiling, remove from heat.\n" +
            "4. Slowly pour hot milk into egg-sugar mixture while stirring.\n" +
            "5. Add vanilla and mix well.\n" +
            "6. Pour into ramekins.\n" +
            "7. Place ramekins in a baking dish, add hot water halfway up (bain-marie).\n" +
            "8. Bake 35-40 minutes until set.\n" +
            "9. Cool, then refrigerate 1 hour before serving."
    },
    nl: {
        title: "Vanille Flan (Spanje, voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 garde",
            "4 ramekins",
            "1 kom",
            "1 keukenweegschaal",
            "1 houten lepel"
        ],
        ingredients: [
            "500 ml melk",
            "4 eieren",
            "100 g suiker",
            "1 eetlepel vanille-extract (15 ml)",
            "1 snufje zout (1 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 160°C.\n" +
            "2. Klop in een kom de eieren met suiker en zout tot een glad mengsel.\n" +
            "3. Verwarm melk in steelpan tot net aan de kook, haal van het vuur.\n" +
            "4. Giet langzaam de hete melk bij het eier-suikermengsel terwijl je blijft roeren.\n" +
            "5. Voeg vanille toe en meng goed.\n" +
            "6. Giet in ramekins.\n" +
            "7. Plaats ramekins in een ovenschaal, voeg heet water tot halverwege (au bain-marie).\n" +
            "8. Bak 35-40 minuten tot de flan is gestold.\n" +
            "9. Laat afkoelen en zet 1 uur in de koelkast voor het serveren."
    },
    ar: {
        title: "فلان بالفانيليا (إسبانيا، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر",
            "1 خفاقة",
            "4 قوالب فخارية",
            "1 وعاء",
            "1 ميزان مطبخ",
            "1 ملعقة خشبية"
        ],
        ingredients: [
            "500 مل حليب",
            "4 بيض",
            "100 غ سكر",
            "1 ملعقة كبيرة فانيليا (15 مل)",
            "رشة ملح (1 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن على 160°C.\n" +
            "2. في وعاء، اخفق البيض مع السكر ورشة الملح حتى يصبح الخليط ناعماً.\n" +
            "3. سخّن الحليب في القدر حتى الغليان الخفيف، ثم ارفع عن النار.\n" +
            "4. صب الحليب الساخن تدريجياً على خليط البيض مع التحريك.\n" +
            "5. أضف الفانيليا وامزج جيدًا.\n" +
            "6. صب الخليط في القوالب.\n" +
            "7. ضع القوالب في صينية فرن وأضف ماء ساخن حتى منتصف ارتفاعها (حمام مائي).\n" +
            "8. اخبز 35-40 دقيقة حتى يتماسك الفلان.\n" +
            "9. اتركه ليبرد، ثم ضع في الثلاجة لمدة ساعة قبل التقديم."
    }
};
recipesData.patisserie.churros_espagne = {
    country: "europe",
    countryName: "espagne",
    image: "images/churros_espagne.jpg",
    fr: {
        title: "Churros maison (Espagne, 4 personnes)",
        equipment: [
            "1 casserole",
            "1 fouet",
            "1 poche à douille avec embout cannelé",
            "1 plaque ou 1 assiette",
            "1 écumoire ou cuillère à égoutter",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "250 ml eau",
            "100 g beurre",
            "2 cuillères à soupe sucre (30 g)",
            "1 pincée de sel (1 g)",
            "150 g farine",
            "3 œufs",
            "Huile végétale pour friture (environ 500 ml)",
            "Sucre pour saupoudrer (50 g)",
            "Cannelle moulue (facultatif, 1/2 cuillère à café)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Dans une casserole, porter l’eau, le beurre, le sucre et le sel à ébullition.\n" +
            "2. Retirer du feu et ajouter la farine en une seule fois, mélanger énergiquement avec une cuillère en bois jusqu'à former une pâte homogène.\n" +
            "3. Laisser tiédir 5 minutes.\n" +
            "4. Ajouter les œufs un à un en mélangeant bien après chaque ajout.\n" +
            "5. Remplir la pâte dans une poche à douille avec embout cannelé.\n" +
            "6. Chauffer l’huile dans une grande casserole à 180°C.\n" +
            "7. Presser des bandes de pâte dans l’huile chaude, couper à la longueur désirée.\n" +
            "8. Frire 3-4 minutes jusqu’à ce qu’ils soient dorés et croustillants.\n" +
            "9. Égoutter sur du papier absorbant.\n" +
            "10. Saupoudrer de sucre et de cannelle avant de servir."
    },
    en: {
        title: "Homemade Churros (Spain, Serves 4)",
        equipment: [
            "1 saucepan",
            "1 whisk",
            "1 piping bag with star tip",
            "1 plate or tray",
            "1 slotted spoon or skimmer",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "250 ml water",
            "100 g butter",
            "2 tbsp sugar (30 g)",
            "1 pinch salt (1 g)",
            "150 g flour",
            "3 eggs",
            "Vegetable oil for frying (about 500 ml)",
            "Sugar for dusting (50 g)",
            "Ground cinnamon (optional, 1/2 tsp)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. In a saucepan, bring water, butter, sugar, and salt to a boil.\n" +
            "2. Remove from heat and add flour all at once, stir vigorously with a wooden spoon until smooth dough forms.\n" +
            "3. Let cool 5 minutes.\n" +
            "4. Add eggs one by one, mixing well after each addition.\n" +
            "5. Fill dough into piping bag with star tip.\n" +
            "6. Heat oil in a large pan to 180°C.\n" +
            "7. Pipe strips of dough into hot oil, cut to desired length.\n" +
            "8. Fry 3-4 minutes until golden and crispy.\n" +
            "9. Drain on paper towels.\n" +
            "10. Dust with sugar and cinnamon before serving."
    },
    nl: {
        title: "Zelfgemaakte Churros (Spanje, voor 4 personen)",
        equipment: [
            "1 steelpan",
            "1 garde",
            "1 spuitzak met gekarteld spuitmondje",
            "1 bord of bakplaat",
            "1 schuimspaan",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "250 ml water",
            "100 g boter",
            "2 eetlepels suiker (30 g)",
            "1 snufje zout (1 g)",
            "150 g bloem",
            "3 eieren",
            "Plantaardige olie om te frituren (ca. 500 ml)",
            "Suiker om te bestrooien (50 g)",
            "Gemalen kaneel (optioneel, 1/2 tl)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Breng in een steelpan water, boter, suiker en zout aan de kook.\n" +
            "2. Haal van het vuur en voeg in één keer de bloem toe, roer krachtig met een houten lepel tot een glad deeg.\n" +
            "3. Laat 5 minuten afkoelen.\n" +
            "4. Voeg de eieren één voor één toe, goed mengen na elk ei.\n" +
            "5. Doe het deeg in een spuitzak met gekarteld mondje.\n" +
            "6. Verhit olie in een grote pan tot 180°C.\n" +
            "7. Spuit stroken deeg in de hete olie, snijd op gewenste lengte.\n" +
            "8. Bak 3-4 minuten tot goudbruin en krokant.\n" +
            "9. Laat uitlekken op keukenpapier.\n" +
            "10. Bestrooi met suiker en kaneel voor het serveren."
    },
    ar: {
        title: "تشوروس منزلية (إسبانيا، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر",
            "1 خفاقة",
            "1 كيس حلواني مع فوهة مسننة",
            "1 طبق أو صينية",
            "1 ملعقة مثقبة",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "250 مل ماء",
            "100 غ زبدة",
            "2 ملعقة كبيرة سكر (30 غ)",
            "رشة ملح (1 غ)",
            "150 غ طحين",
            "3 بيضات",
            "زيت نباتي للقلي (حوالي 500 مل)",
            "سكر للرش (50 غ)",
            "قرفة مطحونة (اختياري، 1/2 ملعقة صغيرة)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. ضع الماء والزبدة والسكر والملح في قدر وسخنه حتى الغليان.\n" +
            "2. أزل القدر عن النار وأضف الطحين دفعة واحدة، حرك بقوة بمعلقة خشبية حتى يصبح العجين ناعماً.\n" +
            "3. اتركه ليبرد 5 دقائق.\n" +
            "4. أضف البيض واحدة تلو الأخرى مع الخلط جيداً بعد كل بيضة.\n" +
            "5. ضع العجين في كيس حلواني مع فوهة مسننة.\n" +
            "6. سخن الزيت في قدر كبير على حرارة 180°C.\n" +
            "7. ضع خطوط العجين في الزيت الساخن وقطع بالطول المطلوب.\n" +
            "8. اقلي 3-4 دقائق حتى يصبح ذهبي ومقرمش.\n" +
            "9. صفه على ورق مطبخ.\n" +
            "10. رش السكر والقرفة قبل التقديم."
    }
};
recipesData.entree.soupe_legumes_suisse = {
    country: "europe",
    countryName: "suisse",
    image: "images/soupe_legumes_suisse.jpg",
    fr: {
        title: "Soupe aux légumes (Suisse, 4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 cuillère en bois",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "2 carottes moyennes (200 g), coupées en dés",
            "2 pommes de terre moyennes (250 g), coupées en dés",
            "1 poireau (150 g), émincé",
            "1 branche de céleri (50 g), coupée",
            "1 oignon (100 g), haché",
            "1 gousse d’ail",
            "750 ml bouillon de légumes",
            "2 cuillères à soupe huile d’olive (30 ml)",
            "1/2 cuillère à café sel (1 g)",
            "1/4 cuillère à café poivre (0.5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer l’huile dans la casserole.\n" +
            "2. Ajouter l’oignon et l’ail, faire revenir 2 minutes.\n" +
            "3. Ajouter carottes, pommes de terre, poireau et céleri. Cuire 5-7 minutes.\n" +
            "4. Verser le bouillon, ajouter sel et poivre.\n" +
            "5. Porter à ébullition, puis laisser mijoter 20-25 minutes jusqu’à ce que les légumes soient tendres.\n" +
            "6. Mixer si désiré pour une soupe lisse.\n" +
            "7. Servir chaud."
    },
    en: {
        title: "Vegetable Soup (Switzerland, Serves 4)",
        equipment: [
            "1 large pot",
            "1 wooden spoon",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "2 medium carrots (200 g), diced",
            "2 medium potatoes (250 g), diced",
            "1 leek (150 g), sliced",
            "1 celery stalk (50 g), chopped",
            "1 onion (100 g), chopped",
            "1 garlic clove",
            "750 ml vegetable broth",
            "2 tbsp olive oil (30 ml)",
            "1/2 tsp salt (1 g)",
            "1/4 tsp pepper (0.5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat oil in pot.\n" +
            "2. Add onion and garlic, sauté 2 minutes.\n" +
            "3. Add carrots, potatoes, leek, and celery. Cook 5-7 minutes.\n" +
            "4. Pour in broth, add salt and pepper.\n" +
            "5. Bring to boil, then simmer 20-25 minutes until vegetables are tender.\n" +
            "6. Blend if desired for smooth soup.\n" +
            "7. Serve hot."
    },
    nl: {
        title: "Groentesoep (Zwitserland, voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 houten lepel",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "2 middelgrote wortels (200 g), in blokjes",
            "2 middelgrote aardappels (250 g), in blokjes",
            "1 prei (150 g), in plakjes",
            "1 selderijstengel (50 g), gehakt",
            "1 ui (100 g), gehakt",
            "1 teentje knoflook",
            "750 ml groentebouillon",
            "2 eetlepels olijfolie (30 ml)",
            "1/2 tl zout (1 g)",
            "1/4 tl peper (0,5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit olie in pan.\n" +
            "2. Voeg ui en knoflook toe, bak 2 minuten.\n" +
            "3. Voeg wortels, aardappels, prei en selderij toe. Bak 5-7 minuten.\n" +
            "4. Voeg bouillon, zout en peper toe.\n" +
            "5. Breng aan de kook, laat vervolgens 20-25 minuten sudderen tot groenten gaar zijn.\n" +
            "6. Mix indien gewenst tot een gladde soep.\n" +
            "7. Serveer warm."
    },
    ar: {
        title: "حساء الخضار (سويسرا، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر كبير",
            "1 ملعقة خشبية",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "2 جزر متوسط (200 غ)، مقطع مكعبات",
            "2 بطاطس متوسطة (250 غ)، مقطعة مكعبات",
            "1 كراث (150 غ)، مقطع شرائح",
            "1 عود كرفس (50 غ)، مقطع",
            "1 بصل (100 غ)، مفروم",
            "1 فص ثوم",
            "750 مل مرق خضار",
            "2 ملعقة كبيرة زيت زيتون (30 مل)",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/4 ملعقة صغيرة فلفل (0.5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الزيت في القدر.\n" +
            "2. أضف البصل والثوم، قلب 2 دقيقة.\n" +
            "3. أضف الجزر والبطاطس والكراث والكرفس. اطبخ 5-7 دقائق.\n" +
            "4. أضف المرق، الملح والفلفل.\n" +
            "5. اتركه يغلي ثم اخفض النار واتركه 20-25 دقيقة حتى تنضج الخضار.\n" +
            "6. اخلط إذا رغبت للحصول على حساء ناعم.\n" +
            "7. قدمه ساخناً."
    }
};
recipesData.plat.roesti_legumes_suisse = {
    country: "europe",
    countryName: "suisse",
    image: "images/roesti_legumes_suisse.jpg",
    fr: {
        title: "Rösti aux légumes (Suisse, 4 personnes)",
        equipment: [
            "1 grande poêle antiadhésive",
            "1 râpe à légumes",
            "1 cuillère en bois",
            "1 planche à découper",
            "1 couteau",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "600 g pommes de terre, pelées et râpées",
            "1 carotte (100 g), râpée",
            "1 courgette (150 g), râpée",
            "1 oignon (100 g), haché finement",
            "2 cuillères à soupe huile végétale (30 ml)",
            "1/2 cuillère à café sel (1 g)",
            "1/4 cuillère à café poivre (0.5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Râper les pommes de terre, carotte et courgette. Presser pour enlever l’excès d’eau.\n" +
            "2. Dans un bol, mélanger les légumes râpés et l’oignon, ajouter sel et poivre.\n" +
            "3. Chauffer l’huile dans la poêle à feu moyen.\n" +
            "4. Verser le mélange de légumes dans la poêle et étaler uniformément.\n" +
            "5. Cuire 8-10 minutes jusqu’à ce que le dessous soit doré.\n" +
            "6. Retourner délicatement le rösti à l’aide d’une assiette et faire cuire encore 8-10 minutes.\n" +
            "7. Servir chaud comme plat principal ou accompagnement."
    },
    en: {
        title: "Vegetable Rösti (Switzerland, Serves 4)",
        equipment: [
            "1 large non-stick pan",
            "1 vegetable grater",
            "1 wooden spoon",
            "1 cutting board",
            "1 knife",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "600 g potatoes, peeled and grated",
            "1 carrot (100 g), grated",
            "1 zucchini (150 g), grated",
            "1 onion (100 g), finely chopped",
            "2 tbsp vegetable oil (30 ml)",
            "1/2 tsp salt (1 g)",
            "1/4 tsp pepper (0.5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Grate potatoes, carrot, and zucchini. Squeeze out excess water.\n" +
            "2. In a bowl, mix grated vegetables with onion, add salt and pepper.\n" +
            "3. Heat oil in pan over medium heat.\n" +
            "4. Pour vegetable mixture into pan and spread evenly.\n" +
            "5. Cook 8-10 minutes until the bottom is golden.\n" +
            "6. Carefully flip the rösti using a plate and cook another 8-10 minutes.\n" +
            "7. Serve hot as main dish or side."
    },
    nl: {
        title: "Groente Rösti (Zwitserland, voor 4 personen)",
        equipment: [
            "1 grote antiaanbakpan",
            "1 groenterasp",
            "1 houten lepel",
            "1 snijplank",
            "1 mes",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "600 g aardappelen, geschild en geraspt",
            "1 wortel (100 g), geraspt",
            "1 courgette (150 g), geraspt",
            "1 ui (100 g), fijngehakt",
            "2 eetlepels plantaardige olie (30 ml)",
            "1/2 tl zout (1 g)",
            "1/4 tl peper (0,5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Rasp aardappelen, wortel en courgette. Knijp overtollig vocht eruit.\n" +
            "2. Meng in een kom de geraspte groenten met ui, voeg zout en peper toe.\n" +
            "3. Verhit olie in pan op middelhoog vuur.\n" +
            "4. Doe het groentemengsel in de pan en spreid gelijkmatig uit.\n" +
            "5. Bak 8-10 minuten tot de onderkant goudbruin is.\n" +
            "6. Draai de rösti voorzichtig met een bord om en bak nog eens 8-10 minuten.\n" +
            "7. Serveer warm als hoofdgerecht of bijgerecht."
    },
    ar: {
        title: "روستي بالخضار (سويسرا، تكفي 4 أشخاص)",
        equipment: [
            "1 مقلاة كبيرة غير لاصقة",
            "1 مبشرة خضار",
            "1 ملعقة خشبية",
            "1 لوح تقطيع",
            "1 سكين",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "600 غ بطاطس، مقشرة ومبشورة",
            "1 جزرة (100 غ)، مبشورة",
            "1 كوسة (150 غ)، مبشورة",
            "1 بصل (100 غ)، مفروم ناعماً",
            "2 ملعقة كبيرة زيت نباتي (30 مل)",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/4 ملعقة صغيرة فلفل (0.5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. ابشر البطاطس والجزر والكوسة، واعصر الماء الزائد.\n" +
            "2. في وعاء، اخلط الخضار المبشورة مع البصل، أضف الملح والفلفل.\n" +
            "3. سخن الزيت في المقلاة على حرارة متوسطة.\n" +
            "4. ضع خليط الخضار في المقلاة وافرده بالتساوي.\n" +
            "5. اطبخ 8-10 دقائق حتى يصبح القاع ذهبي.\n" +
            "6. اقلب الروستي بحذر باستخدام طبق، واطبخ 8-10 دقائق أخرى.\n" +
            "7. قدمه ساخناً كطبق رئيسي أو جانبي."
    }
};
recipesData.dessert.mousse_chocolat_suisse = {
    country: "europe",
    countryName: "suisse",
    image: "images/mousse_chocolat_suisse.jpg",
    fr: {
        title: "Mousse au chocolat végétalienne (Suisse, 4 personnes)",
        equipment: [
            "1 grand bol",
            "1 fouet électrique ou manuel",
            "1 casserole",
            "1 spatule",
            "1 balance de cuisine",
            "4 ramequins ou verrines"
        ],
        ingredients: [
            "200 g chocolat noir végétalien (sans lait ni gélatine)",
            "400 ml crème de coco bien froide",
            "2 cuillères à soupe sirop d’érable (30 ml)",
            "1 cuillère à café extrait de vanille (5 ml)",
            "Une pincée de sel (0,5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Faire fondre le chocolat au bain-marie ou à feu très doux en remuant régulièrement.\n" +
            "2. Dans un grand bol, fouetter la crème de coco froide avec le sel jusqu’à obtenir une texture ferme.\n" +
            "3. Ajouter le sirop d’érable et l’extrait de vanille, fouetter encore 1 minute.\n" +
            "4. Incorporer délicatement le chocolat fondu à la crème fouettée à l’aide d’une spatule, en effectuant des mouvements enveloppants pour ne pas faire retomber la mousse.\n" +
            "5. Répartir la mousse dans 4 ramequins.\n" +
            "6. Réfrigérer au moins 2 heures avant de servir."
    },
    en: {
        title: "Vegan Chocolate Mousse (Switzerland, Serves 4)",
        equipment: [
            "1 large bowl",
            "1 electric or manual whisk",
            "1 saucepan",
            "1 spatula",
            "1 kitchen scale",
            "4 ramekins or cups"
        ],
        ingredients: [
            "200 g vegan dark chocolate (dairy-free, gelatin-free)",
            "400 ml coconut cream, well chilled",
            "2 tbsp maple syrup (30 ml)",
            "1 tsp vanilla extract (5 ml)",
            "A pinch of salt (0.5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Melt chocolate in a bain-marie or over very low heat, stirring regularly.\n" +
            "2. In a large bowl, whip the chilled coconut cream with salt until firm.\n" +
            "3. Add maple syrup and vanilla extract, whip for another minute.\n" +
            "4. Gently fold melted chocolate into whipped cream using a spatula, using folding motions to keep mousse airy.\n" +
            "5. Divide mousse into 4 ramekins.\n" +
            "6. Refrigerate at least 2 hours before serving."
    },
    nl: {
        title: "Vegan Chocolademousse (Zwitserland, voor 4 personen)",
        equipment: [
            "1 grote kom",
            "1 elektrische of handmixer",
            "1 steelpan",
            "1 spatel",
            "1 keukenweegschaal",
            "4 ramekins of glazen"
        ],
        ingredients: [
            "200 g vegan pure chocolade (melkvrij, gelatinevrij)",
            "400 ml kokosroom, goed koud",
            "2 eetlepels ahornsiroop (30 ml)",
            "1 tl vanille-extract (5 ml)",
            "Een snufje zout (0,5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Smelt de chocolade au bain-marie of op zeer laag vuur, regelmatig roeren.\n" +
            "2. Klop in een grote kom de koude kokosroom met zout tot een stevige textuur.\n" +
            "3. Voeg ahornsiroop en vanille-extract toe, klop nog 1 minuut.\n" +
            "4. Spatel de gesmolten chocolade voorzichtig door de room, gebruik vouwbewegingen om de mousse luchtig te houden.\n" +
            "5. Verdeel de mousse over 4 ramekins.\n" +
            "6. Koel minimaal 2 uur voor het serveren."
    },
    ar: {
        title: "موس الشوكولاتة نباتي (سويسرا، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء كبير",
            "1 مضرب كهربائي أو يدوي",
            "1 قدر",
            "1 ملعقة مطاطية",
            "1 ميزان مطبخ",
            "4 كؤوس تقديم أو راميكين"
        ],
        ingredients: [
            "200 غ شوكولاتة داكنة نباتية (خالٍ من الحليب والجيلاتين)",
            "400 مل كريمة جوز الهند باردة جداً",
            "2 ملعقة كبيرة شراب القيقب (30 مل)",
            "1 ملعقة صغيرة فانيليا (5 مل)",
            "رشة ملح (0.5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. ذوب الشوكولاتة في حمام مائي أو على نار هادئة جداً مع التحريك المستمر.\n" +
            "2. في وعاء كبير، اخفق كريمة جوز الهند الباردة مع الملح حتى تصبح ثابتة.\n" +
            "3. أضف شراب القيقب والفانيليا، اخفق لمدة دقيقة إضافية.\n" +
            "4. ضع الشوكولاتة المذابة بلطف في الكريمة المخفوقة باستخدام ملعقة مطاطية، مع الحركات الطفيفة للحفاظ على هشاشة الموس.\n" +
            "5. وزع الموس في 4 كؤوس تقديم.\n" +
            "6. برد في الثلاجة لمدة ساعتين على الأقل قبل التقديم."
    }
};
recipesData.patisserie.brunsli_suisse = {
    country: "europe",
    countryName: "suisse",
    image: "images/brunsli_suisse.jpg",
    fr: {
        title: "Brunsli (biscuits au chocolat, Suisse, 4 personnes)",
        equipment: [
            "1 bol moyen",
            "1 spatule",
            "1 balance de cuisine",
            "1 plaque de cuisson",
            "1 papier sulfurisé",
            "1 four"
        ],
        ingredients: [
            "100 g poudre d’amandes",
            "100 g sucre glace",
            "1 cuillère à café cacao en poudre (5 g)",
            "1/2 cuillère à café cannelle (1 g)",
            "100 g chocolat noir végétalien",
            "1 blanc d’œuf (30 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 160°C.\n" +
            "2. Hacher finement le chocolat noir.\n" +
            "3. Mélanger la poudre d’amandes, le sucre glace, le cacao et la cannelle dans un bol.\n" +
            "4. Incorporer le chocolat haché.\n" +
            "5. Monter le blanc d’œuf en neige ferme.\n" +
            "6. Incorporer délicatement le blanc d’œuf au mélange chocolat-amandes à l’aide d’une spatule.\n" +
            "7. Étaler la pâte sur une plaque recouverte de papier sulfurisé sur 1 cm d’épaisseur.\n" +
            "8. Découper des biscuits de la taille désirée.\n" +
            "9. Cuire au four pendant 12-15 minutes.\n" +
            "10. Laisser refroidir avant de servir."
    },
    en: {
        title: "Brunsli (Chocolate Cookies, Switzerland, Serves 4)",
        equipment: [
            "1 medium bowl",
            "1 spatula",
            "1 kitchen scale",
            "1 baking tray",
            "1 parchment paper",
            "1 oven"
        ],
        ingredients: [
            "100 g almond powder",
            "100 g powdered sugar",
            "1 tsp cocoa powder (5 g)",
            "1/2 tsp cinnamon (1 g)",
            "100 g vegan dark chocolate",
            "1 egg white (30 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 160°C.\n" +
            "2. Finely chop dark chocolate.\n" +
            "3. Mix almond powder, powdered sugar, cocoa, and cinnamon in a bowl.\n" +
            "4. Fold in chopped chocolate.\n" +
            "5. Whip egg white until stiff peaks form.\n" +
            "6. Gently fold egg white into chocolate-almond mixture with a spatula.\n" +
            "7. Spread dough on parchment-lined tray to 1 cm thickness.\n" +
            "8. Cut cookies to desired size.\n" +
            "9. Bake for 12-15 minutes.\n" +
            "10. Let cool before serving."
    },
    nl: {
        title: "Brunsli (Chocoladekoekjes, Zwitserland, voor 4 personen)",
        equipment: [
            "1 middelgrote kom",
            "1 spatel",
            "1 keukenweegschaal",
            "1 bakplaat",
            "1 bakpapier",
            "1 oven"
        ],
        ingredients: [
            "100 g amandelpoeder",
            "100 g poedersuiker",
            "1 tl cacaopoeder (5 g)",
            "1/2 tl kaneel (1 g)",
            "100 g vegan pure chocolade",
            "1 eiwit (30 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 160°C.\n" +
            "2. Hak de pure chocolade fijn.\n" +
            "3. Meng amandelpoeder, poedersuiker, cacao en kaneel in een kom.\n" +
            "4. Voeg de gehakte chocolade toe.\n" +
            "5. Klop het eiwit stijf.\n" +
            "6. Spatel het eiwit voorzichtig door het chocolade-amandelmengsel.\n" +
            "7. Spreid het deeg op een met bakpapier beklede bakplaat tot 1 cm dikte.\n" +
            "8. Snijd koekjes in gewenste grootte.\n" +
            "9. Bak 12-15 minuten.\n" +
            "10. Laat afkoelen voor het serveren."
    },
    ar: {
        title: "برونسلي (بسكويت الشوكولاتة، سويسرا، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء متوسط",
            "1 ملعقة مطاطية",
            "1 ميزان مطبخ",
            "1 صينية خبز",
            "1 ورق زبدة",
            "1 فرن"
        ],
        ingredients: [
            "100 غ دقيق اللوز",
            "100 غ سكر بودرة",
            "1 ملعقة صغيرة كاكاو (5 غ)",
            "1/2 ملعقة صغيرة قرفة (1 غ)",
            "100 غ شوكولاتة داكنة نباتية",
            "1 بياض بيض (30 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن على 160°م.\n" +
            "2. قطع الشوكولاتة الداكنة ناعماً.\n" +
            "3. اخلط دقيق اللوز، السكر البودرة، الكاكاو والقرفة في وعاء.\n" +
            "4. أضف الشوكولاتة المقطعة.\n" +
            "5. اخفق بياض البيض حتى يصبح قاسياً.\n" +
            "6. ضع بياض البيض برفق في خليط الشوكولاتة واللوز باستخدام الملعقة المطاطية.\n" +
            "7. افرد العجين على صينية مغطاة بورق الزبدة بسماكة 1 سم.\n" +
            "8. قطع البسكويت بالحجم المرغوب.\n" +
            "9. اخبز 12-15 دقيقة.\n" +
            "10. اتركه ليبرد قبل التقديم."
    }
};
recipesData.entree.soupe_mais_usa = {
    country: "amerique",
    countryName: "usa",
    image: "images/soupe_mais_usa.jpg",
    fr: {
        title: "Soupe de maïs crémeuse (USA, 4 personnes)",
        equipment: [
            "1 casserole moyenne",
            "1 couteau",
            "1 planche à découper",
            "1 mixeur plongeant ou blender",
            "1 cuillère en bois",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "400 g maïs doux en grains (frais ou surgelé)",
            "1 oignon (100 g), haché finement",
            "1 carotte (100 g), coupée en dés",
            "500 ml bouillon de légumes halal",
            "200 ml lait de coco",
            "2 cuillères à soupe huile végétale (30 ml)",
            "1/2 cuillère à café sel (1 g)",
            "1/4 cuillère à café poivre (0.5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer l’huile dans une casserole à feu moyen.\n" +
            "2. Ajouter l’oignon et la carotte, faire revenir 5 minutes.\n" +
            "3. Ajouter le maïs et le bouillon, porter à ébullition.\n" +
            "4. Réduire le feu et cuire 15 minutes.\n" +
            "5. Mixer la soupe avec un mixeur plongeant jusqu’à texture lisse.\n" +
            "6. Ajouter le lait de coco, sel et poivre, mélanger et chauffer encore 3 minutes.\n" +
            "7. Servir chaud avec un peu de persil frais si désiré."
    },
    en: {
        title: "Creamy Corn Soup (USA, Serves 4)",
        equipment: [
            "1 medium saucepan",
            "1 knife",
            "1 cutting board",
            "1 hand blender or regular blender",
            "1 wooden spoon",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "400 g sweet corn kernels (fresh or frozen)",
            "1 onion (100 g), finely chopped",
            "1 carrot (100 g), diced",
            "500 ml halal vegetable broth",
            "200 ml coconut milk",
            "2 tbsp vegetable oil (30 ml)",
            "1/2 tsp salt (1 g)",
            "1/4 tsp pepper (0.5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat oil in saucepan over medium heat.\n" +
            "2. Add onion and carrot, sauté for 5 minutes.\n" +
            "3. Add corn and broth, bring to a boil.\n" +
            "4. Reduce heat and simmer 15 minutes.\n" +
            "5. Blend soup with hand blender until smooth.\n" +
            "6. Add coconut milk, salt, and pepper, stir and heat 3 more minutes.\n" +
            "7. Serve hot, optionally with fresh parsley."
    },
    nl: {
        title: "Romige Maïssoep (VS, voor 4 personen)",
        equipment: [
            "1 middelgrote pan",
            "1 mes",
            "1 snijplank",
            "1 staafmixer of blender",
            "1 houten lepel",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "400 g zoete maïskorrels (vers of diepvries)",
            "1 ui (100 g), fijngehakt",
            "1 wortel (100 g), in blokjes",
            "500 ml halal groentebouillon",
            "200 ml kokosmelk",
            "2 eetlepels plantaardige olie (30 ml)",
            "1/2 tl zout (1 g)",
            "1/4 tl peper (0,5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit olie in pan op middelhoog vuur.\n" +
            "2. Voeg ui en wortel toe, bak 5 minuten.\n" +
            "3. Voeg maïs en bouillon toe, breng aan de kook.\n" +
            "4. Zet het vuur laag en laat 15 minuten sudderen.\n" +
            "5. Pureer de soep met staafmixer tot een glad mengsel.\n" +
            "6. Voeg kokosmelk, zout en peper toe, roer en verwarm nog 3 minuten.\n" +
            "7. Serveer warm, eventueel met verse peterselie."
    },
    ar: {
        title: "شوربة الذرة الكريمية (الولايات المتحدة، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر متوسط",
            "1 سكين",
            "1 لوح تقطيع",
            "1 خلاط يدوي أو عادي",
            "1 ملعقة خشبية",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "400 غ حبوب الذرة الحلوة (طازجة أو مجمدة)",
            "1 بصل (100 غ)، مفروم ناعماً",
            "1 جزرة (100 غ)، مقطعة مكعبات",
            "500 مل مرق خضار حلال",
            "200 مل حليب جوز الهند",
            "2 ملعقة كبيرة زيت نباتي (30 مل)",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/4 ملعقة صغيرة فلفل (0.5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الزيت في القدر على حرارة متوسطة.\n" +
            "2. أضف البصل والجزر، وحمّرهما لمدة 5 دقائق.\n" +
            "3. أضف الذرة والمرق، واتركه يغلي.\n" +
            "4. قلل الحرارة واتركه ينضج لمدة 15 دقيقة.\n" +
            "5. امزج الشوربة بالخلاط حتى تصبح ناعمة.\n" +
            "6. أضف حليب جوز الهند والملح والفلفل، وحرّك وسخن 3 دقائق إضافية.\n" +
            "7. قدمه ساخناً، ويمكن تزيينه بالبقدونس الطازج."
    }
};
recipesData.plat.chili_sin_carne_usa = {
    country: "amerique",
    countryName: "usa",
    image: "images/chili_sin_carne_usa.jpg",
    fr: {
        title: "Chili sin carne végétarien (USA, 4 personnes)",
        equipment: [
            "1 grande casserole",
            "1 cuillère en bois",
            "1 couteau",
            "1 planche à découper",
            "1 bol",
            "1 balance de cuisine"
        ],
        ingredients: [
            "1 oignon (100 g), haché finement",
            "2 gousses d’ail, écrasées",
            "1 poivron rouge (120 g), coupé en dés",
            "2 carottes (200 g), coupées en rondelles",
            "1 courgette (200 g), coupée en dés",
            "400 g tomates concassées en boîte",
            "200 g haricots rouges cuits",
            "200 ml bouillon de légumes halal",
            "2 cuillères à soupe huile végétale (30 ml)",
            "1 cuillère à café paprika doux (5 g)",
            "1 cuillère à café cumin en poudre (5 g)",
            "1/2 cuillère à café sel (1 g)",
            "1/4 cuillère à café poivre (0.5 g)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Chauffer l’huile dans une grande casserole à feu moyen.\n" +
            "2. Ajouter l’oignon et l’ail, faire revenir 3-4 minutes jusqu’à ce qu’ils deviennent translucides.\n" +
            "3. Ajouter le poivron, les carottes et la courgette, cuire 5 minutes en remuant.\n" +
            "4. Ajouter les tomates concassées et le bouillon, porter à ébullition.\n" +
            "5. Réduire le feu, ajouter paprika, cumin, sel et poivre.\n" +
            "6. Ajouter les haricots rouges, mélanger et laisser mijoter 15-20 minutes.\n" +
            "7. Vérifier l’assaisonnement, servir chaud, accompagné de riz ou de pain."
    },
    en: {
        title: "Vegetarian Chili sin Carne (USA, Serves 4)",
        equipment: [
            "1 large saucepan",
            "1 wooden spoon",
            "1 knife",
            "1 cutting board",
            "1 bowl",
            "1 kitchen scale"
        ],
        ingredients: [
            "1 onion (100 g), finely chopped",
            "2 garlic cloves, crushed",
            "1 red bell pepper (120 g), diced",
            "2 carrots (200 g), sliced",
            "1 zucchini (200 g), diced",
            "400 g canned chopped tomatoes",
            "200 g cooked red beans",
            "200 ml halal vegetable broth",
            "2 tbsp vegetable oil (30 ml)",
            "1 tsp sweet paprika (5 g)",
            "1 tsp ground cumin (5 g)",
            "1/2 tsp salt (1 g)",
            "1/4 tsp pepper (0.5 g)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Heat oil in a large saucepan over medium heat.\n" +
            "2. Add onion and garlic, sauté 3-4 minutes until translucent.\n" +
            "3. Add bell pepper, carrots, and zucchini, cook 5 minutes, stirring.\n" +
            "4. Add chopped tomatoes and broth, bring to a boil.\n" +
            "5. Reduce heat, add paprika, cumin, salt, and pepper.\n" +
            "6. Add red beans, mix, and simmer 15-20 minutes.\n" +
            "7. Check seasoning, serve hot with rice or bread."
    },
    nl: {
        title: "Vegetarische Chili sin Carne (VS, voor 4 personen)",
        equipment: [
            "1 grote pan",
            "1 houten lepel",
            "1 mes",
            "1 snijplank",
            "1 kom",
            "1 keukenweegschaal"
        ],
        ingredients: [
            "1 ui (100 g), fijngehakt",
            "2 teentjes knoflook, geperst",
            "1 rode paprika (120 g), in blokjes",
            "2 wortels (200 g), in plakjes",
            "1 courgette (200 g), in blokjes",
            "400 g tomatenblokjes uit blik",
            "200 g gekookte rode bonen",
            "200 ml halal groentebouillon",
            "2 eetlepels plantaardige olie (30 ml)",
            "1 tl zoete paprika (5 g)",
            "1 tl komijnpoeder (5 g)",
            "1/2 tl zout (1 g)",
            "1/4 tl peper (0,5 g)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verhit olie in een grote pan op middelhoog vuur.\n" +
            "2. Voeg ui en knoflook toe, bak 3-4 minuten tot ze doorschijnend zijn.\n" +
            "3. Voeg paprika, wortels en courgette toe, bak 5 minuten, roer regelmatig.\n" +
            "4. Voeg tomatenblokjes en bouillon toe, breng aan de kook.\n" +
            "5. Zet het vuur lager, voeg paprika, komijn, zout en peper toe.\n" +
            "6. Voeg de rode bonen toe, roer door en laat 15-20 minuten sudderen.\n" +
            "7. Controleer de smaak, serveer warm met rijst of brood."
    },
    ar: {
        title: "تشالي سين كارني نباتي (الولايات المتحدة، تكفي 4 أشخاص)",
        equipment: [
            "1 قدر كبير",
            "1 ملعقة خشبية",
            "1 سكين",
            "1 لوح تقطيع",
            "1 وعاء",
            "1 ميزان مطبخ"
        ],
        ingredients: [
            "1 بصلة (100 غ)، مفرومة ناعماً",
            "2 فص ثوم، مهروس",
            "1 فلفل أحمر (120 غ)، مقطع مكعبات",
            "2 جزر (200 غ)، مقطع شرائح",
            "1 كوسة (200 غ)، مقطعة مكعبات",
            "400 غ طماطم مقطعة معلبة",
            "200 غ فاصوليا حمراء مطبوخة",
            "200 مل مرق خضار حلال",
            "2 ملعقة كبيرة زيت نباتي (30 مل)",
            "1 ملعقة صغيرة فلفل حلو (5 غ)",
            "1 ملعقة صغيرة كمون مطحون (5 غ)",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/4 ملعقة صغيرة فلفل (0.5 غ)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الزيت في قدر كبير على حرارة متوسطة.\n" +
            "2. أضف البصل والثوم، قلب 3-4 دقائق حتى يصبح شفافاً.\n" +
            "3. أضف الفلفل والجزر والكوسة، اطبخ 5 دقائق مع التحريك.\n" +
            "4. أضف الطماطم المعلبة والمرق، واتركه يغلي.\n" +
            "5. خفف النار، أضف الفلفل الحلو، الكمون، الملح والفلفل.\n" +
            "6. أضف الفاصوليا الحمراء، قلب واتركه ينضج 15-20 دقيقة.\n" +
            "7. تحقق من التوابل، قدمه ساخناً مع الأرز أو الخبز."
    }
};
recipesData.dessert.brownies_usa = {
    country: "amerique",
    countryName: "usa",
    image: "images/brownies_usa.jpg",
    fr: {
        title: "Brownies au chocolat vegan (USA, 4 personnes)",
        equipment: [
            "1 bol moyen",
            "1 fouet",
            "1 spatule",
            "1 balance de cuisine",
            "1 moule carré (20x20 cm)",
            "1 papier sulfurisé",
            "1 four"
        ],
        ingredients: [
            "150 g farine de blé",
            "50 g poudre de cacao non sucrée",
            "150 g sucre de canne",
            "1/2 cuillère à café sel (1 g)",
            "1/2 cuillère à café levure chimique (2 g)",
            "80 ml huile végétale",
            "100 ml lait végétal (amande ou soja)",
            "1 cuillère à café extrait de vanille (5 ml)"
        ],
        preparation:
            "Recette pour 4 personnes.\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Chemiser le moule carré avec du papier sulfurisé.\n" +
            "3. Dans un bol, mélanger la farine, le cacao, le sucre, le sel et la levure.\n" +
            "4. Ajouter l’huile, le lait végétal et l’extrait de vanille, mélanger jusqu’à obtention d’une pâte homogène.\n" +
            "5. Verser la pâte dans le moule et lisser la surface.\n" +
            "6. Cuire au four pendant 25-30 minutes.\n" +
            "7. Laisser refroidir avant de découper en carrés et servir."
    },
    en: {
        title: "Vegan Chocolate Brownies (USA, Serves 4)",
        equipment: [
            "1 medium bowl",
            "1 whisk",
            "1 spatula",
            "1 kitchen scale",
            "1 square baking pan (20x20 cm)",
            "1 parchment paper",
            "1 oven"
        ],
        ingredients: [
            "150 g wheat flour",
            "50 g unsweetened cocoa powder",
            "150 g cane sugar",
            "1/2 tsp salt (1 g)",
            "1/2 tsp baking powder (2 g)",
            "80 ml vegetable oil",
            "100 ml plant milk (almond or soy)",
            "1 tsp vanilla extract (5 ml)"
        ],
        preparation:
            "Serves 4.\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Line square pan with parchment paper.\n" +
            "3. In a bowl, mix flour, cocoa, sugar, salt, and baking powder.\n" +
            "4. Add oil, plant milk, and vanilla extract, stir until smooth.\n" +
            "5. Pour batter into pan and smooth top.\n" +
            "6. Bake 25-30 minutes.\n" +
            "7. Let cool before cutting into squares and serving."
    },
    nl: {
        title: "Vegan Chocolade Brownies (VS, voor 4 personen)",
        equipment: [
            "1 middelgrote kom",
            "1 garde",
            "1 spatel",
            "1 keukenweegschaal",
            "1 vierkante bakvorm (20x20 cm)",
            "1 bakpapier",
            "1 oven"
        ],
        ingredients: [
            "150 g tarwebloem",
            "50 g ongezoet cacaopoeder",
            "150 g rietsuiker",
            "1/2 tl zout (1 g)",
            "1/2 tl bakpoeder (2 g)",
            "80 ml plantaardige olie",
            "100 ml plantaardige melk (amandel of soja)",
            "1 tl vanille-extract (5 ml)"
        ],
        preparation:
            "Voor 4 personen.\n" +
            "1. Verwarm de oven voor op 180°C.\n" +
            "2. Bekleed de vierkante bakvorm met bakpapier.\n" +
            "3. Meng in een kom bloem, cacao, suiker, zout en bakpoeder.\n" +
            "4. Voeg olie, plantaardige melk en vanille-extract toe, roer tot een glad beslag.\n" +
            "5. Giet beslag in de vorm en strijk de bovenkant glad.\n" +
            "6. Bak 25-30 minuten.\n" +
            "7. Laat afkoelen voor het snijden in vierkantjes en serveren."
    },
    ar: {
        title: "براونيز الشوكولاتة النباتي (الولايات المتحدة، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء متوسط",
            "1 مضرب يدوي",
            "1 ملعقة مطاطية",
            "1 ميزان مطبخ",
            "1 صينية مربعة (20x20 سم)",
            "1 ورق زبدة",
            "1 فرن"
        ],
        ingredients: [
            "150 غ دقيق القمح",
            "50 غ مسحوق الكاكاو غير المحلى",
            "150 غ سكر قصب",
            "1/2 ملعقة صغيرة ملح (1 غ)",
            "1/2 ملعقة صغيرة بيكنغ باودر (2 غ)",
            "80 مل زيت نباتي",
            "100 مل حليب نباتي (لوز أو صويا)",
            "1 ملعقة صغيرة خلاصة الفانيليا (5 مل)"
        ],
        preparation:
            "تكفي 4 أشخاص.\n" +
            "1. سخن الفرن على 180°م.\n" +
            "2. غطِ صينية مربعة بورق الزبدة.\n" +
            "3. في وعاء، اخلط الدقيق، الكاكاو، السكر، الملح والبيكنغ باودر.\n" +
            "4. أضف الزيت، الحليب النباتي، وخلاصة الفانيليا، واخلط حتى يصبح العجين ناعماً.\n" +
            "5. اسكب العجين في الصينية وافرده بالتساوي.\n" +
            "6. اخبزه 25-30 دقيقة.\n" +
            "7. اتركه ليبرد قبل تقطيعه إلى مربعات وتقديمه."
    }
};
recipesData.patisserie.cookies_usa = {
    country: "amerique",
    countryName: "usa",
    image: "images/cookies_usa.jpg",
    fr: {
        title: "Cookies aux pépites de chocolat vegan (USA, 4 personnes)",
        equipment: [
            "1 bol moyen",
            "1 fouet",
            "1 spatule",
            "1 balance de cuisine",
            "1 plaque de cuisson",
            "1 papier sulfurisé",
            "1 four",
            "1 cuillère à soupe"
        ],
        ingredients: [
            "150 g farine de blé",
            "80 g sucre de canne",
            "50 g huile de coco fondue",
            "50 ml lait végétal (amande ou soja)",
            "1/2 cuillère à café levure chimique (2 g)",
            "1/4 cuillère à café sel (0,5 g)",
            "50 g pépites de chocolat noir vegan"
        ],
        preparation:
            "Recette pour 4 personnes (environ 12 cookies).\n" +
            "1. Préchauffer le four à 180°C.\n" +
            "2. Chemiser la plaque de cuisson avec du papier sulfurisé.\n" +
            "3. Dans un bol, mélanger la farine, le sucre, la levure et le sel.\n" +
            "4. Ajouter l’huile de coco fondue et le lait végétal, mélanger jusqu’à obtenir une pâte homogène.\n" +
            "5. Incorporer les pépites de chocolat.\n" +
            "6. Former des boules de pâte avec une cuillère à soupe et les disposer sur la plaque en les espaçant.\n" +
            "7. Aplatir légèrement chaque boule avec le dos de la cuillère.\n" +
            "8. Cuire 12-15 minutes jusqu’à ce que les bords soient dorés.\n" +
            "9. Laisser refroidir quelques minutes avant de déguster."
    },
    en: {
        title: "Vegan Chocolate Chip Cookies (USA, Serves 4)",
        equipment: [
            "1 medium bowl",
            "1 whisk",
            "1 spatula",
            "1 kitchen scale",
            "1 baking tray",
            "1 parchment paper",
            "1 oven",
            "1 tablespoon"
        ],
        ingredients: [
            "150 g wheat flour",
            "80 g cane sugar",
            "50 g melted coconut oil",
            "50 ml plant milk (almond or soy)",
            "1/2 tsp baking powder (2 g)",
            "1/4 tsp salt (0.5 g)",
            "50 g vegan dark chocolate chips"
        ],
        preparation:
            "Serves 4 (about 12 cookies).\n" +
            "1. Preheat oven to 180°C.\n" +
            "2. Line baking tray with parchment paper.\n" +
            "3. In a bowl, mix flour, sugar, baking powder, and salt.\n" +
            "4. Add melted coconut oil and plant milk, mix until smooth dough.\n" +
            "5. Fold in chocolate chips.\n" +
            "6. Form tablespoon-sized balls of dough and place on tray, spaced apart.\n" +
            "7. Flatten each ball slightly with back of spoon.\n" +
            "8. Bake 12-15 minutes until edges are golden.\n" +
            "9. Let cool a few minutes before enjoying."
    },
    nl: {
        title: "Vegan Chocoladechip Cookies (VS, voor 4 personen)",
        equipment: [
            "1 middelgrote kom",
            "1 garde",
            "1 spatel",
            "1 keukenweegschaal",
            "1 bakplaat",
            "1 bakpapier",
            "1 oven",
            "1 eetlepel"
        ],
        ingredients: [
            "150 g tarwebloem",
            "80 g rietsuiker",
            "50 g gesmolten kokosolie",
            "50 ml plantaardige melk (amandel of soja)",
            "1/2 tl bakpoeder (2 g)",
            "1/4 tl zout (0,5 g)",
            "50 g vegan pure chocolade chips"
        ],
        preparation:
            "Voor 4 personen (ongeveer 12 cookies).\n" +
            "1. Verwarm oven voor op 180°C.\n" +
            "2. Bekleed bakplaat met bakpapier.\n" +
            "3. Meng in een kom bloem, suiker, bakpoeder en zout.\n" +
            "4. Voeg gesmolten kokosolie en plantaardige melk toe, meng tot een glad deeg.\n" +
            "5. Spatel chocoladechips erdoor.\n" +
            "6. Vorm eetlepelgrote balletjes en leg ze op de bakplaat, met ruimte ertussen.\n" +
            "7. Druk elk bolletje lichtjes plat met achterkant van lepel.\n" +
            "8. Bak 12-15 minuten tot de randen goudbruin zijn.\n" +
            "9. Laat enkele minuten afkoelen voor het serveren."
    },
    ar: {
        title: "كوكيز برقائق الشوكولاتة النباتي (الولايات المتحدة، تكفي 4 أشخاص)",
        equipment: [
            "1 وعاء متوسط",
            "1 مضرب يدوي",
            "1 ملعقة مطاطية",
            "1 ميزان مطبخ",
            "1 صينية خبز",
            "1 ورق زبدة",
            "1 فرن",
            "1 ملعقة كبيرة"
        ],
        ingredients: [
            "150 غ دقيق القمح",
            "80 غ سكر قصب",
            "50 غ زيت جوز الهند مذاب",
            "50 مل حليب نباتي (لوز أو صويا)",
            "1/2 ملعقة صغيرة بيكنغ باودر (2 غ)",
            "1/4 ملعقة صغيرة ملح (0.5 غ)",
            "50 غ رقائق شوكولاتة داكنة نباتية"
        ],
        preparation:
            "تكفي 4 أشخاص (حوالي 12 كوكي).\n" +
            "1. سخن الفرن على 180°م.\n" +
            "2. غطِ صينية الخبز بورق الزبدة.\n" +
            "3. في وعاء، اخلط الدقيق، السكر، البيكنغ باودر والملح.\n" +
            "4. أضف زيت جوز الهند المذاب والحليب النباتي، واخلط حتى يصبح العجين ناعماً.\n" +
            "5. أضف رقائق الشوكولاتة.\n" +
            "6. شكّل كرات بعجين بحجم ملعقة كبيرة وضعها على الصينية مع ترك مسافة بينها.\n" +
            "7. اضغط قليلاً على كل كرة بظهر الملعقة.\n" +
            "8. اخبز 12-15 دقيقة حتى تصبح الحواف ذهبية.\n" +
            "9. اتركها تبرد قليلاً قبل التقديم."
    }
};

/* =========================
   GESTION DE LA LANGUE & FILTRES
========================= */

const languageSelect = document.getElementById("language");
const countrySelect = document.getElementById("country");
const typeSelect = document.getElementById("type");
const recipeSelect = document.getElementById("recipes");

const homeImage = document.getElementById("homeImage");
const recipeContainer = document.getElementById("recipeContainer");
const recipeTitle = document.getElementById("recipeTitle");
const recipeImage = document.getElementById("recipeImage");
const recipeEquipment = document.getElementById("recipeEquipment");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipePreparation = document.getElementById("recipePreparation");

let currentLang = "fr";
let currentCountry = "all";

/* --------- LANGUE --------- */
function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
    updateRecipeList();
}
languageSelect.addEventListener("change", e => setLanguage(e.target.value));

/* --------- PAYS --------- */
function setCountry(country) {
    currentCountry = country;
    updateRecipeList();
}
countrySelect.addEventListener("change", e => setCountry(e.target.value));

/* --------- TYPE DE PLAT --------- */
typeSelect.addEventListener("change", updateRecipeList);

/* --------- MISE À JOUR DES RECETTES --------- */
function updateRecipeList() {
    recipeSelect.innerHTML = '<option value="">---</option>';
    let type = typeSelect.value;

    // Si le type n'existe pas dans recipesData, on cache le menu
    if (!recipesData[type]) {
        recipeSelect.classList.add("hidden");
        recipeContainer.classList.add("hidden");
        return;
    }

    // On récupère toutes les clés de recettes pour ce type
    let allKeys = Object.keys(recipesData[type]);

    // Si type = dessert, on ajoute aussi les pâtisseries
    if (type === "dessert" && recipesData["patisserie"]) {
        allKeys = allKeys.concat(Object.keys(recipesData["patisserie"]));
    }

    // Filtrage par pays
    const filteredRecipes = allKeys.filter(key => {
        let recipeData = recipesData[type][key] || recipesData["patisserie"][key];
        return currentCountry === "all" || recipeData.country === currentCountry;
    });

    if (filteredRecipes.length === 0) {
        recipeSelect.classList.add("hidden");
        recipeContainer.classList.add("hidden");
        return;
    }

    // Création des options dans le menu déroulant
    filteredRecipes.forEach(key => {
        let recipeData = recipesData[type][key] || recipesData["patisserie"][key];
        const option = document.createElement("option");
        option.value = key;
        option.textContent = recipeData[currentLang].title;
        recipeSelect.appendChild(option);
    });

    recipeSelect.classList.remove("hidden");
    recipeContainer.classList.add("hidden");
}

/* --------- AFFICHAGE D'UNE RECETTE --------- */
recipeSelect.addEventListener("change", () => {
    shopContainer.classList.add("hidden"); // cacher boutique si ouverte

    const type = typeSelect.value;
    const recipeKey = recipeSelect.value;
    if (!recipeKey) return;

    // On cherche d'abord dans le type actuel, sinon dans patisserie
    let recipeType = recipesData[type][recipeKey] ? type : "patisserie";
    displayRecipe(recipeKey, recipeType);
});

function displayRecipe(recipeKey, type) {
    const data = recipesData[type][recipeKey][currentLang];

    recipeTitle.textContent = data.title;
    recipeImage.src = recipesData[type][recipeKey].image;

    recipeEquipment.innerHTML = "";
    data.equipment.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recipeEquipment.appendChild(li);
    });

    recipeIngredients.innerHTML = "";
    data.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recipeIngredients.appendChild(li);
    });

    recipePreparation.textContent = data.preparation;

    homeImage.classList.add("hidden");
    recipeContainer.classList.remove("hidden");
}




/* --------- AFFICHAGE D'UNE RECETTE --------- */
recipeSelect.addEventListener("change", () => {
    // cacher boutique quand on choisit une recette
    shopContainer.classList.add("hidden");

    const type = typeSelect.value;
    const recipeKey = recipeSelect.value;
    if (!recipeKey) return;
    
    // afficher la recette
    displayRecipe(recipeKey, type);

    // scroll automatique vers la recette (mobile-friendly)
    const recipeContainer = document.querySelector('.recipe');
    if (recipeContainer) {
        recipeContainer.scrollIntoView({ behavior: 'smooth' });
    }
});



function displayRecipe(recipeKey, type) {
    const data = recipesData[type][recipeKey][currentLang];

    recipeTitle.textContent = data.title;
    recipeImage.src = recipesData[type][recipeKey].image;

    recipeEquipment.innerHTML = "";
    data.equipment.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recipeEquipment.appendChild(li);
    });

    recipeIngredients.innerHTML = "";
    data.ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        recipeIngredients.appendChild(li);
    });

    recipePreparation.textContent = data.preparation;

    homeImage.classList.add("hidden");
    recipeContainer.classList.remove("hidden");
}

/* --------- INITIALISATION --------- */
setLanguage("fr");
setCountry("all");
