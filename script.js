document.getElementById("ticketForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const photo = document.getElementById("imageUpload").files[0];

  // const previewContainer = document.getElementById("ticket-overlay");

  document.getElementById("ticketForm").style.display = "none";
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".ticket").style.display = "block";

  document.querySelector(
    ".ticket h1"
  ).innerText = `Congrats, ${name}! Your ticket is ready.`;

  document.querySelector(
    ".ticket p"
  ).innerText = ` We've emailed your ticket to ${email} and will send updates
     in the run up to the event.`;

  document.getElementById("attendeeName").innerText = name;
  document.getElementById("githubUsername").innerText = `@${username}`;
  document.getElementById("ticketNumber").innerText = "#009"; // You can randomize this later

  if (photo) {
    const avatar = document.getElementById("avatarPreview");
    avatar.src = URL.createObjectURL(photo);
    avatar.onload = () => URL.revokeObjectURL(avatar.src); // free memory
  }
});
