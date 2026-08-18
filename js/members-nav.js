const main = document.querySelector("main.page-main");

if (main && window.location.pathname.startsWith("/members")) {
  document.body.classList.add("members-area");

  // Add new member pages here as the section grows.
  const membersLinks = [
    { href: "/members/", label: "Dashboard" },
    { href: "/members/roster/", label: "Roster" },
  ];

  const hero = main.querySelector(".hero");
  const pageTitle =
    main.dataset.pageTitle ||
    hero?.querySelector("h1")?.textContent?.trim() ||
    "Members";

  if (hero) {
    hero.remove();
  }

  const nav = document.createElement("nav");
  nav.className = "members-nav";
  nav.setAttribute("aria-label", "Members");

  const title = document.createElement("h1");
  title.className = "members-nav__title";
  title.textContent = pageTitle;
  nav.appendChild(title);

  const list = document.createElement("ul");
  membersLinks.forEach(({ href, label }) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    item.appendChild(link);
    list.appendChild(item);
  });
  nav.appendChild(list);

  main.insertBefore(nav, main.firstChild);

  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

  nav.querySelectorAll("a").forEach((link) => {
    const linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  const membersHeaderLink = document.querySelector(
    'header .header-actions a[href="/members/"]',
  );
  if (membersHeaderLink) {
    membersHeaderLink.classList.add("active");
  }
}
