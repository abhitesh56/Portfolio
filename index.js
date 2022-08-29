const darkTheme = () => {
  const btn = document.querySelector(".switch");
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    document.body.classList.toggle("active");
  });
  // localStorage.setItem("darkMode", "true");
};

darkTheme();

const hamburgerMenu = () => {
  const menuBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".right2");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
};
hamburgerMenu();
// gsap animations

// gsap.from(".projectSection", {
//   scrollTrigger: ".projectSection", // start the animation when ".box" enters the viewport (once)
//   opacity: 0,
//   x: 500,
//   delay: 0.3,
// });

// gsap.from(".skillSection", {
//   scrollTrigger: ".skillSection", // start the animation when ".box" enters the viewport (once)
//   x: -500,
// });
// gsap.from(".contactSection", {
//   scrollTrigger: ".contactSection", // start the animation when ".box" enters the viewport (once)
//   x: 500,
// });

// gsap.from(".project", {
//   // start the animation when ".box" enters the viewport (once)
//   opacity: 0,
//   // x: 500,
//   delay: 0.4,
//   stagger: 0.3,
//   y: 12,
// });
// gsap.from(".skills", {
//   // start the animation when ".box" enters the viewport (once)
//   opacity: 0,
//   // x: 500,
//   delay: 0.4,
//   stagger: 0.3,
//   y: 12,
// });
