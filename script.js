document.addEventListener("DOMContentLoaded", () => {
  function updateJam() {
    const now = new Date();
    const jam = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    document.getElementById("jam").textContent = "⏰ " + jam;
  }
  setInterval(updateJam, 1000);
  updateJam();

  const tombol = document.createElement("button");
  tombol.innerText = "🌙 Dark Mode";
  tombol.className = "dark-btn";
  document.body.appendChild(tombol);

  tombol.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    tombol.innerText = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});




