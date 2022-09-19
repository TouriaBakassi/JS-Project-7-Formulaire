//                                    Formulaire

let Formulaire = document.querySelector("form");

Formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  inputs = Formulaire.elements;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]{5}\.[a-zA-Z]{3}$/;
  // nom validation
  if (inputs["nom"].value.length == 0) {
    inputs["nom"].className = "invalid";
    document.querySelector(".invalid-message").textContent =
      "le nom est obligatoire!";
  } else {
    inputs["nom"].className = "valid";
    document.querySelector(".invalid-message").textContent = "";
    const nom = inputs["nom"].value;
    console.log(nom);
  }
  // email validation + Regular Expression test()
  if (inputs["email"].value.length == 0) {
    inputs["email"].className = "invalid";
    document.querySelector(".invalid-message2").textContent =
      "l'email est obligatoire!";
  } else {
    if (!regex.test(inputs["email"].value)) {
      console.log(regex.test(inputs["email"]));
      inputs["email"].className = "invalid";
      document.querySelector(".invalid-message2").textContent =
        "Entrer email comme abc@gmail.com";
    } else if (regex.test(inputs["email"].value)) {
      inputs["email"].className = "valid";
      `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      `;
      document.querySelector(".invalid-message2").textContent = "";
      const email = inputs["email"].value;
      console.log(email);
    }
  }
  // password validation + regular Expression
   const Regex = /^[a-zA-Z0-9.,_@#$%^&*()":|?><!=+-]{6,10}$/;

  if (inputs["password"].value.length == 0) {
    inputs["password"].className = "invalid";
    document.querySelector(".invalid-message3").textContent =
      "Password est obligatoire!";
  } else if (!Regex.test(inputs["password"].value)) {
    inputs["password"].className = "invalid";
    document.querySelector(".invalid-message3").textContent =
      "Entrer Password comme (abc123.^%)";
  } else if (Regex.test(inputs["password"].value)) {
    inputs["password"].className = "valid";
    document.querySelector(".invalid-message3").textContent = "";
    const password = inputs["password"].value;
    console.log(password);
  }
  // Telephone validation + regular Expression
  const REGex = /^[0-9]+$/;
  if (inputs["tele"].value.length == 0) {
    inputs["tele"].className = "invalid";
    document.querySelector(".invalid-message4").textContent =
      "tele est obligatoire!";
  } else if (!REGex.test(inputs["tele"].value)) {
    inputs["tele"].className = "invalid";
    document.querySelector(".invalid-message4").textContent =
      "Entrer Un Tele comme 0601234567";
  } else if (REGex.test(inputs["tele"].value)) {
    inputs["tele"].className = "valid";
    document.querySelector(".invalid-message4").textContent = "";
    const Tele = inputs["tele"].value;
    console.log(Tele);
  }
});
