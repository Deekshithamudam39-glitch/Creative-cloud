// Tell the CSS that JavaScript is working (used for the scroll animation)
document.documentElement.classList.add("js");

// =====================================================
// YOUR PROJECTS  (EDIT THIS PART TO ADD MORE DESIGNS)
// =====================================================
// To add a new project:
//   1. Put your image in the "images" folder (example: images/my-poster.jpg)
//   2. Copy one { ... }, block below and paste it at the end of the list
//   3. Change image, title, category, client and the descriptions
//
// category must be one of: "posters", "social", "branding", "reels"
// thumb  = a smaller copy of the image (about 800px wide) so the page loads fast.
//          It is optional. If you leave it out, the main image is used.
// year and tools are optional. Leave them out and they will not show.

const projects = [
  {
    title: "Acid Wash Oversized Tee",
    category: "posters",
    client: "Weavebro",
    description: "Product poster for a streetwear T-shirt.",
    details: "A bold product poster for Weavebro's acid wash oversized T-shirt. Tall condensed headlines, a clean feature list and size options make the offer easy to read at a glance.",
    image: "images/weavebro.jpg",
    thumb: "images/thumbs/weavebro.jpg"
  },
  {
    title: "Importance of Braces",
    category: "social",
    client: "AB Dental & Orthodontics",
    description: "Awareness post for an orthodontic clinic.",
    details: "An educational social media post that explains why braces matter. The yellow headline pulls attention, and the doctor details, phone numbers and clinic address stay clear at the bottom.",
    image: "images/ab-dental.jpg",
    thumb: "images/thumbs/ab-dental.jpg"
  },
  {
    title: "Veg Biryani Promo",
    category: "posters",
    client: "Hotel Vaishnavi International",
    description: "Food promotion for a hotel restaurant.",
    details: "A warm food promotion for the hotel's veg biryani. Large type, rich copper and green tones, and order details with delivery app links keep the message simple and tasty.",
    image: "images/hotel-vaishnavi.jpg",
    thumb: "images/thumbs/hotel-vaishnavi.jpg"
  },
  {
    title: "Embrace. Educate. Excel.",
    category: "posters",
    client: "Orchids High School",
    description: "Colorful promotion poster for a school.",
    details: "A bright, playful poster built around the school's tagline. Bold color blocks and cheerful portraits keep it friendly, while the logo and phone numbers stay easy to find.",
    image: "images/orchids-school.jpg",
    thumb: "images/thumbs/orchids-school.jpg"
  },
  {
    title: "The Ultimate Combo",
    category: "social",
    client: "Fried Wings N Tea",
    description: "Burger, fries and drink combo post.",
    details: "A food promotion for a burger combo. The deep red background and bright headline make the food stand out, with franchise contact details and social links in the footer.",
    image: "images/fried-wings-n-tea.jpg",
    thumb: "images/thumbs/fried-wings-n-tea.jpg"
  },
   {title: "Celebrate Every Shade of Elegance",
   category: "social",
   client: "Begum Bazaar",
   description: "Festive fashion promotion featuring elegant traditional outfits for women. The post highlights a range of graceful ethnic looks in yellow, red, and brown, with floral artwork and a warm cream background.",
   details: "A fashion promotional post for Begum Bazaar showcasing festive and traditional women's outfits. The design uses a cream and beige palette with floral and bird illustrations, bold red headline typography, and three models wearing ethnic attire. The post includes a 'Shop Your Festive Look Today' call-to-action, phone number, website, social media icons, and the store's Potomac Mills Mall location in Woodbridge, Virginia.",
   image: "images/thumbs/begam.jpg",
   thumb: "images/thumbs/begam.jpg"
   },
   {
    
    title: "Chicken Tikka Restaurant Poster",
    category: "posters",
    client: "Hotel Vaishnavi International",
    description: "Food advertisement poster promoting Chicken Tikka from Hotel Vaishnavi International, featuring a vibrant red background and a large appetizing food photograph.",
    details: "A bold restaurant promotional poster with large white and orange typography, a hero image of grilled chicken tikka with garnishes and dipping sauce, restaurant service labels, ordering information, contact numbers, delivery branding, and the Kamareddy location.",
    image: "images/thumbs/chicken.jpg",
    thumb: "images/thumbs/chicken.jpg"
  },
  {
    title: "Explore Thailand Travel Poster",
    category: "posters",
    client: "Trip Time Tours and Travels",
    description: "Travel promotion poster advertising a 5-day, 4-night Thailand package starting from ₹16,999 per person.",
    details: "A vibrant tourism poster with a bright blue sky, large yellow and white typography, and a collage of Thai landmarks, temples, Buddha statues, and cultural imagery. It includes the package duration and starting price, social media details, booking call-to-action, and travel agency contact numbers.",
    image: "images/thumbs/trip.jpg",
    thumb: "images/thumbs/trip.jpg"
  }
  
];

// Nice names to show for each category
const categoryNames = {
  posters: "Posters",
  social: "Social Media",
  branding: "Branding",
  reels: "Reels"
};

// =====================================================
// 1. HEADER: mobile menu, line under header, progress bar
// =====================================================
const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const progress = document.getElementById("progress");

menuBtn.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", function () {
  header.classList.toggle("scrolled", window.scrollY > 10);

  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
});

// =====================================================
// 2. BUILD THE GALLERY FROM THE LIST ABOVE
// =====================================================
const gallery = document.getElementById("gallery");

const playIcon = '<span class="reel-badge" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span>';

projects.forEach(function (project, index) {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.dataset.category = project.category;
  card.dataset.index = index;

  const badge = project.category === "reels" ? playIcon : "";
  const small = project.thumb || project.image;

  card.innerHTML =
    '<button class="card-media" aria-label="View project: ' + project.title + '">' +
      '<img src="' + small + '" alt="' + project.title + ' for ' + project.client + '" loading="lazy" style="aspect-ratio: 4 / 5;">' +
      badge +
      '<span class="overlay">' +
        '<span class="overlay-title">' + project.title + '</span>' +
        '<span class="overlay-pill">View Project</span>' +
      '</span>' +
    '</button>' +
    '<div class="card-info">' +
      '<p class="card-cat">' + categoryNames[project.category] + '</p>' +
      '<h3 class="card-title">' + project.title + '</h3>' +
      '<p class="card-desc">' + project.description + '</p>' +
    '</div>';

  gallery.appendChild(card);
});

// Last tile in the gallery: "Your brand next"
const cta = document.createElement("a");
cta.className = "tile-cta reveal";
cta.href = "#contact";
cta.innerHTML = '<h3>Your brand could be next.</h3><span>Start a project</span>';
gallery.appendChild(cta);

const cards = document.querySelectorAll(".card");

// =====================================================
// 3. FILTER BUTTONS
// =====================================================
const filterButtons = document.querySelectorAll(".filter-btn");

// Hide filter buttons that have no projects yet (example: Reels)
filterButtons.forEach(function (button) {
  const filter = button.dataset.filter;
  if (filter === "all") return;
  const hasProjects = projects.some(function (p) { return p.category === filter; });
  if (!hasProjects) button.hidden = true;
});

// Every second visible card gets lower on big screens (CSS class "lift")
function stagger() {
  let position = 0;
  cards.forEach(function (card) {
    card.classList.remove("lift");
    if (card.classList.contains("hide")) return;
    if (position % 3 === 1) card.classList.add("lift");
    position++;
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (b) { b.classList.remove("active"); });
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(function (card) {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hide", !show);
      if (show) card.classList.add("in");   // show right away, no waiting for scroll
    });

    // The "Your brand next" tile only shows on "All"
    cta.classList.toggle("hide", filter !== "all");
    if (filter === "all") cta.classList.add("in");

    stagger();
  });
});

stagger();

// =====================================================
// 4. SCROLL REVEAL (items fade in when you scroll to them)
// =====================================================
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(function (item, i) {
    // small delay for neighbours so they come one after another
    item.style.transitionDelay = (i % 3) * 90 + "ms";
    observer.observe(item);
  });
} else {
  revealItems.forEach(function (item) { item.classList.add("in"); });
}

// =====================================================
// 5. SOFT 3D TILT ON POSTERS (only with a mouse)
// =====================================================
const canTilt = window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
                !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canTilt) {
  document.querySelectorAll(".card-media").forEach(function (media) {
    media.addEventListener("mousemove", function (event) {
      const box = media.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      media.style.transform =
        "perspective(900px) rotateY(" + (x * 7) + "deg) rotateX(" + (-y * 7) + "deg)";
    });
    media.addEventListener("mouseleave", function () {
      media.style.transform = "";
    });
  });
}

// =====================================================
// 6. PROJECT MODAL (popup)
// =====================================================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCat = document.getElementById("modalCat");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

const metaFields = {
  client: document.getElementById("modalClient"),
  type: document.getElementById("modalType"),
  year: document.getElementById("modalYear"),
  tools: document.getElementById("modalTools")
};

let currentIndex = 0;     // which project is open
let lastFocused = null;   // remember what was focused, to go back on close

// Projects visible with the current filter (used by Previous / Next)
function visibleIndexes() {
  const list = [];
  cards.forEach(function (card) {
    if (!card.classList.contains("hide")) list.push(Number(card.dataset.index));
  });
  return list;
}

// Show a detail row only when it has a value
function setMeta(key, value) {
  metaFields[key].textContent = value || "";
  metaFields[key].parentElement.hidden = !value;
}

function fillModal(index) {
  const p = projects[index];
  currentIndex = index;

  modalImg.src = p.image;
  modalImg.alt = p.title + " for " + p.client;
  modalCat.textContent = categoryNames[p.category];
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.details || p.description;

  setMeta("client", p.client);
  setMeta("type", categoryNames[p.category]);
  setMeta("year", p.year);
  setMeta("tools", p.tools);
}

function openModal(index) {
  lastFocused = document.activeElement;
  fillModal(index);
  modal.hidden = false;
  document.body.style.overflow = "hidden";   // stop the page scrolling behind
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  modalImg.src = "";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function step(direction) {
  const list = visibleIndexes();
  const position = list.indexOf(currentIndex);
  const next = (position + direction + list.length) % list.length;
  fillModal(list[next]);
}

gallery.addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (card) openModal(Number(card.dataset.index));
});

modal.querySelectorAll("[data-close]").forEach(function (el) {
  el.addEventListener("click", closeModal);
});

document.getElementById("modalPrev").addEventListener("click", function () { step(-1); });
document.getElementById("modalNext").addEventListener("click", function () { step(1); });

document.addEventListener("keydown", function (event) {
  if (modal.hidden) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowRight") step(1);
  if (event.key === "ArrowLeft") step(-1);
});

// =====================================================
// 7. AUTO YEAR IN FOOTER
// =====================================================
document.getElementById("year").textContent = new Date().getFullYear();
