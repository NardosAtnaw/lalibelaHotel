
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll('.link')
const logo = document.querySelector(".logo");
const close = document.querySelector(".close-btn");
const sidenav = document.querySelector(".nav-container");
menu.addEventListener("click", () => {
  sidenav.classList.add("show-nav");
  links.forEach(link => {
    link.style.color = '#E81022'
  })
});
close.addEventListener("click", () => {
  sidenav.classList.remove("show-nav");
});
if (window.innerWidth > 1152) {
  console.log("scroll");
  console.log(window.innerWidth);
  window.addEventListener("scroll", () => {
    const navheight = nav.getBoundingClientRect().height;
    const scorllheight = window.pageYOffset;
    const upperText = document.querySelector('.upper-text')
    const upperImg = document.querySelector(".upper-img")
    if (scorllheight > navheight) {
      menu.innerHTML = `<img src="./Image/menu.svg" alt="" />`;

      logo.innerHTML = `<a href="./index.html"><img src="./Image/Logo1.svg" alt="Lalibella-logo" /> </a>`;
      nav.classList.add("fixed-nav");
      links.forEach(link => {
        link.style.color = '#252A37'
      })


    } else {
      logo.innerHTML = `<a href="./index.html"><img src="./Image/Logo1.svg" alt="Lalibella-logo" />  </a>`;
      nav.classList.remove("fixed-nav");
      menu.innerHTML = ` <img src="./Image/menu.svg" class="ham" alt="" />`;
      links.forEach(link => {
        link.style.color = '#252A37'
      })

    }
  });
} else {
  window.addEventListener("scroll", () => {
    const navheight = nav.getBoundingClientRect().height;
    const scorllheight = window.pageYOffset;

    if (scorllheight > navheight) {
      menu.innerHTML = `<img src="./Image/menu.svg"  alt="" />`;

      logo.innerHTML = `<a href="./index.html"><img src="./Image/Logo1.svg" alt="Lalibella-logo" /> </a>`;
      nav.classList.add("fixed-nav");


    } else {
      logo.innerHTML = `<a href="./index.html"><img src="./Image/Logo1.svg" alt="Lalibella-logo" />  </a>`;
      nav.classList.remove("fixed-nav");
      menu.innerHTML = ` <img src="./Image/menu.svg" alt="" />`;

    }
  });
}
