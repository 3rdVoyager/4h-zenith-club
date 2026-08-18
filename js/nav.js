const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
      <div class="logo-container">
        <img class="logo" src="/assets/images/4h-logo.png" alt="4-H Zenith Club Logo" />
        <div class="logo-text-container">
          <h1 class="logo-text">4-H Zenith Club</h1>
          <p class="logo-subtitle">Head • Heart • Hands • Health</p>
        </div>
      </div>
      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-nav"
        aria-label="Open menu"
      >
        <span class="material-symbols-outlined nav-toggle-icon" aria-hidden="true">menu</span>
      </button>
      <nav id="site-nav" class="site-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/programs/">Programs</a></li>
          <li><a href="/resources/">Resources</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
        <div class="header-actions">
          <a href="/members/" class="button button-secondary">Members <span class="material-symbols-outlined lock-icon" aria-hidden="true">lock</span></a>
          <a href="/join/" class="button button-primary">Join Zenith</a>
        </div>
      </nav>
      `;

const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

header.querySelectorAll(".site-nav ul a").forEach((link) => {
  const linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

const navToggle = header.querySelector(".nav-toggle");
const siteNav = header.querySelector("#site-nav");
const navToggleIcon = navToggle.querySelector(".nav-toggle-icon");

function closeMenu() {
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
  navToggleIcon.textContent = "menu";
  document.body.classList.remove("nav-menu-open");
}

function openMenu() {
  header.classList.add("nav-open");
  navToggle.setAttribute("aria-expanded", "true");
  navToggle.setAttribute("aria-label", "Close menu");
  navToggleIcon.textContent = "close";
  document.body.classList.add("nav-menu-open");
}

navToggle.addEventListener("click", () => {
  if (header.classList.contains("nav-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1400) {
    closeMenu();
  }
});

footer.innerHTML = `
      <div class="footer-main">
        <div class="footer-brand">
          <div class="logo-container">
            <img class="logo" src="/assets/images/4h-logo.png" alt="4-H Zenith Club Logo" />
            <div class="logo-text-container">
              <p class="logo-text">4-H Zenith Club</p>
              <p class="logo-subtitle">Head • Heart • Hands • Health</p>
            </div>
          </div>
          <p class="footer-description">
            A community of homeschooling 4-H families growing together through
            hands-on projects, leadership, and service.
            <br><br>
            <strong>Email:</strong> zenith.homeschooler.4hclub.md@gmail.com.
          </p>
        </div>

        <nav class="footer-column" aria-label="Site navigation">
          <h2 class="footer-heading">Explore</h2>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/programs/">Programs</a></li>
            <li><a href="/resources/">Resources</a></li>
          </ul>
        </nav>

        <nav class="footer-column" aria-label="Get involved">
          <h2 class="footer-heading">Get Involved</h2>
          <ul class="footer-links">
            <li><a href="/about/">About Us</a></li>
            <li><a href="/join/">Join Zenith</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>

        <div class="footer-column">
          <h2 class="footer-heading">Meet With Us</h2>
          <ul class="footer-info">
            <li>Meetings are generally held on the third Thursday of the month or on MCPS days off from:</li>
            <li>1:00&ndash;3:00 PM</li>
            <li>In Gaithersburg or Derwood, MD</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 4-H Zenith Club. All rights reserved.</p>
      </div>
    `;
