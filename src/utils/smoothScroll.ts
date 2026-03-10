/**
 * Smooth scroll utility function
 * Scrolls to an element with smooth animation, accounting for fixed header
 */
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const targetElement = document.querySelector(targetId);

  if (!targetElement) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

/**
 * Handle click on anchor links with smooth scroll
 */
export function handleSmoothScrollClick(e: React.MouseEvent<HTMLAnchorElement>, offset: number = 80) {
  const href = e.currentTarget.getAttribute("href");

  // Only handle hash links
  if (!href || !href.startsWith("#")) {
    return;
  }

  e.preventDefault();
  smoothScrollTo(href, offset);
}
