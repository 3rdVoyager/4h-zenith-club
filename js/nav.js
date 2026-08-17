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
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About Us</a></li>
          <li><a href="/programs/">Programs</a></li>
          <li><a href="/events/">Events</a></li>
          <li><a href="/resources/">Resources</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="/members/" class="button button-secondary">Members <span class="material-symbols-outlined lock-icon" aria-hidden="true">lock</span></a>
        <a href="/join/" class="button button-primary">Join Zenith</a>
      </div>
      `;

const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

header.querySelectorAll("nav ul a").forEach((link) => {
  const linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";
  if (linkPath === currentPath) {
    link.classList.add("active");
  }
});

footer.innerHTML = `
      <p>&copy; 2026 4-H Zenith Club. All rights reserved.</p>
    `;
