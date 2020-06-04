const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaIMG = document.getElementById("cta-img");
ctaIMG.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// IMAGES ABOVE

const navigationItem = document.querySelectorAll("a");
navigationItem.className = "nav-item";
const navToArray = Array.from(navigationItem);

const theNav = navToArray.map((item, index) => {
  item.style.textDecoration = "none";
  item.style.color = "green";
  return (item.textContent = siteContent.nav[`nav-item-${index + 1}`]);
});

let newNavItemOne = document.createElement("nav-item");
newNavItemOne.textContent = "Affiliates";
newNavItemOne.style.color = "green";

let newNavItemTwo = document.createElement("nav-item");
newNavItemTwo.textContent = "Topics";
newNavItemTwo.style.color = "green";

let navBody = document.querySelector("nav");
navBody.appendChild(newNavItemOne);

let newerNavBody = document.querySelector("nav");
newerNavBody.prepend(newNavItemTwo);

// NAV ITEMS ABOVE

let ctaHeaderText = document.querySelector(".cta-text h1");
ctaHeaderText.innerHTML = "DOM <br> IS <br> AWESOME";

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

// TOP CONTENT ABOVE

let featuresSection = document.querySelector(
  ".top-content .text-content:nth-child(1) h4"
);
featuresSection.textContent = siteContent["main-content"]["features-h4"];

let featuresParagraph = document.querySelector(
  ".top-content .text-content:nth-child(1) p"
);
featuresParagraph.textContent = siteContent["main-content"]["features-content"];

let aboutSection = document.querySelector(
  ".top-content .text-content:nth-child(2) h4"
);
aboutSection.textContent = siteContent["main-content"]["about-h4"];

let aboutParagraph = document.querySelector(
  ".top-content .text-content:nth-child(2) p"
);
aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// TOP MIDDLE CONTENT ABOVE

let servicesSection = document.querySelector(
  ".bottom-content .text-content:nth-child(1) h4"
);
servicesSection.textContent = siteContent["main-content"]["services-h4"];

let servicesParagraph = document.querySelector(
  ".bottom-content .text-content:nth-child(1) p"
);
servicesParagraph.textContent = siteContent["main-content"]["services-content"];

let productSection = document.querySelector(
  ".bottom-content .text-content:nth-child(2) h4"
);
productSection.textContent = siteContent["main-content"]["product-h4"];

let productParagraph = document.querySelector(
  ".bottom-content .text-content:nth-child(2) p"
);
productParagraph.textContent = siteContent["main-content"]["product-content"];

let visionSection = document.querySelector(
  ".bottom-content .text-content:nth-child(3) h4"
);
visionSection.textContent = siteContent["main-content"]["vision-h4"];

let visionParagraph = document.querySelector(
  ".bottom-content .text-content:nth-child(3) p"
);
visionParagraph.textContent = siteContent["main-content"]["vision-content"];

// BOTTOM MIDDLE CONTENT ABOVE

let contactSection = document.querySelector(".contact h4");
contactSection.textContent = siteContent["contact"]["contact-h4"];

let contactParagraph = document.querySelectorAll(".contact p");
contactParagraph[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];

let footerSection = document.querySelector("footer p");
footerSection.textContent = siteContent["footer"]["copyright"];

// CONTACT AND FOOTER ABOVE
