// ========================
// Dropdown Menu
// ========================
document.getElementById("dropdownBtn").addEventListener("click", () => {
  document.getElementById("dropdownContent").classList.toggle("show");
});

// ========================
// Show Ingredients Button
// ========================
document.getElementById("showIngredientsBtn").addEventListener("click", () => {
  const list = document.getElementById("ingredientsList");
  list.style.display = list.style.display === "none" ? "block" : "none";
});

// ========================
// Cooking Tip (Random)
// ========================
const tips = [
  "Always preheat your pan for even cooking.",
  "Don’t overmix the batter—it makes pancakes tough.",
  "Use room temperature eggs and milk for better texture."
];

document.getElementById("showTipBtn").addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("cookingTip").textContent = randomTip;
});

// ========================
// Dark Mode Toggle
// ========================
document.getElementById("toggleModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ========================
// Recipe Counter
// ========================
let count = 0;
document.getElementById("viewRecipeBtn").addEventListener("click", () => {
  count++;
  document.getElementById("recipeCount").textContent = count;
});

// ========================
// FAQ Section Toggle
// ========================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ========================
// Form Validation
// ========================
document.getElementById("recipeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "" || !/^[a-zA-Z ]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Please enter a valid name.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation
  const email = document.getElementById("email").value.trim();
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Title Validation
  const title = document.getElementById("title").value.trim();
  if (title.length < 3) {
    document.getElementById("titleError").textContent = "Title must be at least 3 characters.";
    isValid = false;
  } else {
    document.getElementById("titleError").textContent = "";
  }

  // Ingredients Validation
  const ingredients = document.getElementById("ingredients").value.trim();
  if (ingredients === "") {
    document.getElementById("ingredientsError").textContent = "Please enter ingredients.";
    isValid = false;
  } else {
    document.getElementById("ingredientsError").textContent = "";
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent = " Recipe submitted successfully!";
    document.getElementById("recipeForm").reset();
  }
});
