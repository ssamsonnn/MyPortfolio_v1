const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = document.querySelectorAll(".project-card");

let currentIndex = 0;

// Function to update visible card
function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    card.style.display = "none"; // hide all
    if (i === index) {
      card.classList.add("active");
      card.style.display = "block"; // show only active
    }
  });
}

// Show the first card initially
showCard(currentIndex);

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length; // loop forward
  showCard(currentIndex);
});

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // loop back
  showCard(currentIndex);
});

