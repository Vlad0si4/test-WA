import offersItem from "../services/offersItem.json";

const offersList = document.querySelector(".offers-item");
const links = document.querySelectorAll(".offers-link a");

offersItem.map((offer) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <div class="offer-card">
        <img src="/images/image1.png" alt="${offer.title}">
        <div class="offer-details">
        <div class="offer-hotel">
          <h3 class="offer-title">${offer.title}</h3>
          <p class="offer-date">${offer.date}</p>
          </div>
          <p class="offer-description">${offer.description}</p>
          <div class="price-wrapper">
          <p class="offer-price">${offer.price}</p>
          <span class="offer-span">/за 1 человека</span>
         
          <div class="arrow-style">
        <img src="/images/arrow.png" alt="arrowRight" class="img-style">
         </div>
      
        </div>
        </div>
      </div>
    `;
  offersList.appendChild(listItem);
});

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
