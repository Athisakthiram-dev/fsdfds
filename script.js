const compliments = [
    "You are kuttaichi!!!!!!!!!!!!",
    "You are my cutieeeeeeeeeee",
    "I would say are my future pondatiiiiiiiiiiiiiiiii",
    "Onna follow panuvennn scootyyyyyyyyyyy",
    "I luv u di kundiiiiiiiiiiiiiiiii"
  ];
  
  document.getElementById("generate-btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").textContent = compliments[randomIndex];
  });
  