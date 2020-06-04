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

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// IMAGES ABOVE

const navItem = document.querySelectorAll("a");
navItem.className = "nav-item";
const navToArray = Array.from(navItem);

const theNav = navToArray.map((item, index) => {
  item.style.textDecoration = "none";
  item.style.color = "green";
  return item.textContent = siteContent.nav[`nav-item-${index+1}`];
});

let newNav = document.createElement("nav-item");
newNav.textContent = "Affiliates";
newNav.style.color = "green";

let newerNav = document.createElement("nav-item");
newerNav.textContent = "Topics";
newerNav.style.color = "green";

let navBody = document.querySelector("nav");
navBody.appendChild(newNav);

let newerNavBody = document.querySelector("nav");
newerNavBody.prepend(newerNav);

// NAV ITEMS ABOVE

let header = document.querySelector('.cta-text h1')
header.innerHTML = "DOM <br> IS <br> AWESOME";

let topButton = document.querySelector('.cta-text button')
topButton.textContent = siteContent['cta']['button']

// TOP CONTENT ABOVE

let features = document.querySelector('.top-content .text-content:nth-child(1) h4');
features.textContent = siteContent['main-content']['features-h4']

let featuresPara = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresPara.textContent = siteContent['main-content']['features-content']

let about = document.querySelector('.top-content .text-content:nth-child(2) h4');
about.textContent = siteContent['main-content']['about-h4']

let aboutPara = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutPara.textContent = siteContent['main-content']['about-content']

// TOP MIDDLE CONTENT ABOVE

let services = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
services.textContent = siteContent['main-content']['services-h4']

let servicesPara = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesPara.textContent = siteContent['main-content']['services-content']

let product = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
product.textContent = siteContent['main-content']['product-h4']

let productPara = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productPara.textContent = siteContent['main-content']['product-content']

let vision = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vision.textContent = siteContent['main-content']['vision-h4']

let visionPara = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionPara.textContent = siteContent['main-content']['vision-content']

// BOTTOM MIDDLE CONTENT ABOVE

let contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4']

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['email']

let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright']

// CONTACT AND FOOTER ABOVE