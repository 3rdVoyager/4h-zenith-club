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
      <div class="footer-main">
        <div class="footer-column footer-brand">
          <a href="/" class="footer-logo-link">
            <img
              class="footer-logo"
              src="/assets/images/4h-logo.png"
              alt="4-H Zenith Club logo"
            />
            <span class="footer-logo-text">4-H Zenith Club</span>
          </a>
          <p class="footer-tagline">Head &bull; Heart &bull; Hands &bull; Health</p>
          <p class="footer-description">
            A community of homeschooling 4-H families growing together through
            hands-on projects, leadership, and service.
          </p>
        </div>

        <nav class="footer-column" aria-label="Site navigation">
          <h2 class="footer-heading">Explore</h2>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/programs/">Programs</a></li>
            <li><a href="/events/">Events</a></li>
            <li><a href="/resources/">Resources</a></li>
          </ul>
        </nav>

        <nav class="footer-column" aria-label="Get involved">
          <h2 class="footer-heading">Get Involved</h2>
          <ul class="footer-links">
            <li><a href="/join/">Join Zenith</a></li>
            <li><a href="/members/">Members</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>

        <div class="footer-column">
          <h2 class="footer-heading">Meet With Us</h2>
          <ul class="footer-info">
            <li>Second Friday of each month</li>
            <li>3:00&ndash;5:00 PM</li>
            <li>Gaithersburg &amp; Derwood, MD</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 4-H Zenith Club. All rights reserved.</p>
      </div>
    `;
