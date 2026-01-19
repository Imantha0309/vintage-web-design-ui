// app.js — small, boring, reliable.
// No framework, no drama.

const works = [
  {
    title: "Kandy Perahera",
    category: "Event Branding",
    image: "images/perahara.png",
    color: "var(--color-accent-1)"
  },
  {
    title: "Air Ceylon Ltd",
    category: "Travel Advertising",
    image: "images/air.png",
    color: "var(--color-accent-2)"
  },
  {
    title: "Mountain Tea Co",
    category: "Packaging Design",
    image: "images/Mountain_Tea.png",
    color: "var(--color-accent-3)"
  },
  {
    title: "Coastal Express",
    category: "Railway Posters",
    image: "images/railway.png",
    color: "var(--color-accent-2)"
  },
  {
    title: "Sigiriya Rock",
    category: "Tourism Campaign",
    image: "images/sigiriya.png",
    color: "var(--color-accent-1)"
  },
  {
    title: "Ceylon Gin",
    category: "Identity Design",
    image: "images/gin.png",
    color: "var(--color-text)"
  }
];

function renderWorks() {
  const container = document.getElementById("portfolio-container");
  if (!container) return;

  container.innerHTML = works.map((work) => `
    <article class="c-card c-card--poster" tabindex="0" role="button" aria-label="View ${escapeHtml(work.title)}">
      <div class="c-cardMedia">
        <img class="c-cardImg" src="${work.image}" alt="${escapeHtml(work.title)}" loading="lazy" />
        <div class="c-cardTag ds-heading">SRI LANKA</div>
      </div>

      <div class="c-cardBody">
        <div>
          <h3 class="ds-accent c-cardTitle" style="color:${work.color}">${escapeHtml(work.title)}</h3>
          <p class="ds-heading c-cardMeta">${escapeHtml(work.category)}</p>
        </div>
        <div class="c-cardNote">LITHOGRAPH</div>
      </div>
    </article>
  `).join("");

  // Make cards behave like buttons (mouse + keyboard)
  container.querySelectorAll(".c-card--poster").forEach((card) => {
    const title = card.querySelector(".c-cardTitle")?.textContent?.trim() || "Work";

    card.addEventListener("click", () => {
      alert("Viewing: " + title);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        alert("Viewing: " + title);
      }
    });
  });
}

function setupMenu() {
  const btn = document.getElementById("menuBtn");
  const links = document.getElementById("navLinks");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu when a link is clicked (mobile sanity)
  links.addEventListener("click", (e) => {
    if (e.target.matches("a") && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

// tiny helper — prevents breaking HTML if titles contain weird characters
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  setupMenu();
  renderWorks();
});
