import { header, footer } from './common.js'

header()
footer()


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


(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);

var addItemId=0;
function addselected(item){
  addItemId += 1;
  var selectedItem = document.createElement('div');
  selectedItem.classList('addImg');
  selectedItem.setAttribute('id', addItemId);
  var img =document.createElement('img');
  img.setAttribute('src', item.children[0].currentSrc);
  var addItem= document.getElementById('title');
  selectedItem.append(img)
  addItem.append(selectedItem);
}

