const users = document.querySelectorAll("section>p");

const links = ["https://github.com/sukanta255", "https://github.com/Abhisek753", "https://github.com/sayshark75", "https://github.com/Mohit-Raj-Singh"];

for (let i = 0; i < users.length; i++) {
  users[i].addEventListener("click", () => {
    window.location.href = links[i];
  });
}
