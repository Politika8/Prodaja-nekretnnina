// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if(menuBtn){

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

}


// DARK MODE

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

  });

}


// STANOVI

const apartments = [

  {
    title:"Lux Penthouse",
    category:"lux",
    price:"420.000€",
    location:"Beograd na vodi",
    image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200",
    desc:"4 sobe • 120m² • Garaža • Centralno grejanje"
  },

  {
    title:"Moderan Stan",
    category:"lux",
    price:"310.000€",
    location:"Novi Sad - Centar",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
    desc:"3 sobe • 95m² • Lift • Smart sistem"
  },

  {
    title:"Porodični Stan",
    category:"family",
    price:"185.000€",
    location:"Novi Sad - Liman",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200",
    desc:"3 sobe • Terasa • Parking • Blizina škole"
  },

  {
    title:"Garsonjera",
    category:"small",
    price:"89.000€",
    location:"Novi Sad - Grbavica",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    desc:"1 soba • 35m² • Namešteno • Centralno grejanje"
  },

  {
    title:"Lux Apartman",
    category:"lux",
    price:"510.000€",
    location:"Zlatibor",
    image:"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200",
    desc:"Spa • Pogled na planinu • 5 soba • Premium enterijer"
  },

  {
    title:"Porodični Duplex",
    category:"family",
    price:"240.000€",
    location:"Beograd - Voždovac",
    image:"https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
    desc:"4 sobe • Duplex • Garaža • Dve terase"
  }

];

const apartmentsContainer =
document.getElementById("apartmentsContainer");


function displayApartments(data){

  if(!apartmentsContainer) return;

  apartmentsContainer.innerHTML = "";

  data.forEach(apartment => {

    apartmentsContainer.innerHTML += `

      <div class="apartment-card">

        <img src="${apartment.image}">

        <div class="card-overlay">

          <h3>${apartment.title}</h3>

          <p>${apartment.desc}</p>

        </div>

        <div class="card-content">

          <h2>${apartment.title}</h2>

          <p class="location">
            📍 ${apartment.location}
          </p>

          <p class="price">
            ${apartment.price}
          </p>

        </div>

      </div>

    `;
  });

}

displayApartments(apartments);


// FILTER

function filterApartments(category){

  if(category === "all"){

    displayApartments(apartments);

  }

  else{

    const filteredApartments =
    apartments.filter(apartment =>
      apartment.category === category
    );

    displayApartments(filteredApartments);

  }

}


// FORMA

const contactForm =
document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("message").value;

    const formMessage =
    document.getElementById("formMessage");


    if(name === "" || email === "" || message === ""){

      formMessage.innerText =
      "Niste popunili sva polja!";

      formMessage.style.color = "red";

      return;
    }

    if(!email.includes("@")){

      formMessage.innerText =
      "Email nije ispravan!";

      formMessage.style.color = "red";

      return;
    }

    formMessage.innerText =
    "Poruka je uspešno poslata!";

    formMessage.style.color =
    "limegreen";

    contactForm.reset();

  });


  // SEARCH

const searchInput =
document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener("keyup", () => {

    const value =
    searchInput.value.toLowerCase();

    const filtered =
    apartments.filter(apartment =>

      apartment.title.toLowerCase().includes(value)
      ||

      apartment.location.toLowerCase().includes(value)

    );

    displayApartments(filtered);

  });

}
}