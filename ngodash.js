/* -------------------- NAV TOGGLE -------------------- */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* -------------------- TAB SWITCHING -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });

  /* -------------------- CHART -------------------- */
  const ctx = document.getElementById("growthChart");
  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          data: [12000, 19000, 30000, 45000, 60000, 82000],
          borderColor: "#013220",
          backgroundColor: "rgba(1,50,32,0.2)",
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
});

/* -------------------- PROOF MODAL -------------------- */
function closeModal() {
  document.getElementById("proofModal").style.display = "none";
}

document.getElementById("openProofModal").onclick = () => {
  document.getElementById("proofModal").style.display = "flex";
};

document.getElementById("submitProof").onclick = () => {
  const title = document.getElementById("proofTitle").value;
  const desc = document.getElementById("proofDesc").value;

  if (!title || !desc) {
    alert("Please fill all fields");
    return;
  }

  const proofCard = document.createElement("div");
  proofCard.className = "card";
  proofCard.style.marginTop = "20px";
  proofCard.innerHTML = `
    <h4>${title}</h4>
    <p>${desc}</p>
    <small>Posted just now</small>
  `;

  document.getElementById("proofList").prepend(proofCard);
  closeModal();

  document.getElementById("proofTitle").value = "";
  document.getElementById("proofDesc").value = "";
};
