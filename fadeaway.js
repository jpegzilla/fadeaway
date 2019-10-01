window.addEventListener("resize", () => {
  let d = ((window.innerWidth / 1920) * 100) / 100;
  requestAnimationFrame(() => (document.documentElement.style.opacity = d));
});
