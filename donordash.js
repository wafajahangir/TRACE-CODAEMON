document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.onclick = () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    };
  });
});

fetch("/api/donor/overview/")
  .then(res => res.json())
  .then(data => {
    document.getElementById("totalDonated").textContent = data.total_donated;
    document.getElementById("ngosSupported").textContent = data.ngos_supported;
  });
