if (window.gsap) {
  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from("[data-enter]", {
      y: 18, opacity: 0.45, duration: 0.75, stagger: 0.1,
      ease: "power3.out", clearProps: "transform,opacity"
    });
    const dayTitle = document.querySelector("#day h2");
    const reveal = gsap.from(dayTitle, {
      paused: true, x: -12, duration: 0.6, ease: "power2.out",
      color: "#526956", clearProps: "transform,color"
    });
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        reveal.play();
        observer.disconnect();
      }
    });
    observer.observe(dayTitle);
    return () => observer.disconnect();
  });
}
