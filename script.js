document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const photo = document.getElementById("imageUpload").files[0];

  document.querySelector("form").style.display = "none";
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".ticket").style.display = "block";

  document.querySelector(
    ".ticket h1"
  ).innerText = `Congrats, ${name}! Your ticket is ready.`;

  document.querySelector(
    ".ticket p"
  ).innerText = ` We've emailed your ticket to ${email} and will send updates
     in the run up to the event.`;
});
