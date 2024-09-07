function setupNavbarIntersectionPoints() {
  const navbarLinks = Array.from(document.querySelectorAll("nav a"));

  const targetElements = navbarLinks
    .map((link) => link.getAttribute("href").split("#")[1])
    .map((id) => {
      return document.getElementById(id);
    })
    .filter(Boolean);

  let currentActiveLink = null;

  const handleScroll = (e) => {
    const scrollY = window.scrollY;

    // Reset if at the top of the page
    if (scrollY === 0) {
      currentActiveLink?.removeAttribute("aria-current");
      currentActiveLink = null;
      return;
    }

    const OFFSET = 200;

    let lowestIntersectingElement = null;
    for (const targetElement of targetElements) {
      const marker =
        (e.deltaY ?? 1) < 0
          ? targetElement.getBoundingClientRect().bottom + OFFSET
          : targetElement.getBoundingClientRect().top + OFFSET;

      if (
        scrollY >= marker &&
        marker > (lowestIntersectingElement?.getBoundingClientRect().top ?? 0)
      )
        lowestIntersectingElement = targetElement;
    }

    if (lowestIntersectingElement) {
      if (currentActiveLink) {
        currentActiveLink.removeAttribute("aria-current");
      }
      currentActiveLink = navbarLinks.find(
        (link) =>
          link.getAttribute("href").split("#")[1] ===
          lowestIntersectingElement.id
      );
      currentActiveLink.setAttribute("aria-current", "page");
    }
  };

  document.addEventListener("wheel", handleScroll);
  document.addEventListener("scroll", handleScroll);
}

setupNavbarIntersectionPoints();
