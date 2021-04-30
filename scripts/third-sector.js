gsap.to(".third-sector-text-wrapper h1", {
  scrollTrigger: {
    trigger: ".third-sector-text-wrapper",
    toggleActions: "play none none none",
  },
  x: 1000
});

gsap.to(".third-sector-text-wrapper p", {
  scrollTrigger: {
    trigger: ".third-sector-text-wrapper",
    toggleActions: "play none none none",
  },
  x: 1000
});

const playButton = document.querySelector('.play-button-wrapper')
const closeYouTubeButton = document.querySelector(".close-youtube-button")
const youtubeVideo = document.querySelector('iframe')

playButton.addEventListener('click', () => {
  gsap.to(".third-sector-youtube-wrapper", {display: "flex", duration: 1, opacity: 1})
})

closeYouTubeButton.addEventListener('click', () => {
  gsap.to(".third-sector-youtube-wrapper", {display: "none", duration: 1, opacity: 0})
  //video has to reset every time user closes modal
  youtubeVideo.src = ''
  youtubeVideo.src = "https://www.youtube.com/embed/tgbNymZ7vqY"
})


