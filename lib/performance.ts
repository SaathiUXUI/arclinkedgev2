export function shouldDisableEnhancedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(
    "(max-width: 767px), (prefers-reduced-motion: reduce)",
  ).matches;
}
