gsap.registerPlugin(ScrollTrigger)

gsap.to('.first-sector-text-wrapper h1', {
  scrollTrigger: { trigger: ".first-sector-text-wrapper h1", toggleActions: "play none none none"}, x: 1000})

gsap.to('.first-sector-description-wrapper', {
  scrollTrigger: { trigger: ".first-sector-description-wrapper", toggleActions: "play none none none"}, display: "block", opacity: 1, duration: 1})

gsap.to('.first-sector-requirements-wrapper', {
  scrollTrigger: { trigger: ".first-sector-description-wrapper", start: "top center", toggleActions: "play none none none"}, x: 1000})