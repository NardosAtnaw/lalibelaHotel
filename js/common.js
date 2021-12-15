function header(){
  const header = document.querySelector('.book-header')
  header.innerHTML = `        <div class="container">
  <section class="nav">
    <a class="logo" href="index"
      ><img src="./Image/Logo1.svg" alt="Lalibella-logo"
    /></a>

    <div class="nav-container">
       <div class="close-btn">
        <i class="bx bx-x bx-md"></i>
      </div> 
      <ul>
        <li><a href="index">Home</a></li>
        <li><a href="book">Book</a></li>
        <li><a href="restaurant">Restuarant and Bar</a></li>
        <li><a href="special">Special Offer</a></li>
        <li><a href="about">About Us</a></li>
    
      </ul>
    </div>
    <div class="menu">
      <img src="./Image/menu.svg" alt="" />
    </div>
  </section>

</div> `
}
function footer(){
   const footer = document.querySelector('.footer-general')
  footer.innerHTML =  `         <div class="container">
  <div class="footer-logo">
    <img src="./Image/Logo1.svg" alt="" />

    <div class="footer-links">
      <a href="index">Home</a>
      <a href="#">Book</a>
      <a href="#">Restaurant and Bar</a>
      <a href="#">Special Offer</a>

      <a href="#">Contact Us</a>
      <a href="#">About Us</a>
    </div>
  </div>
  <div class="footer-contact">
    <h2>Contact Us</h2>
    <p>
      Ea eiusmod sit enim pariatur adipisicing nisi elit tempor cupidatat
      deserunt et irure nulla. Aliqua labore cupidatat nulla magna
      exercitation.
      <a href="#"><img src="./Image/phone.svg" alt="" />+251 116614917</a>
      <a href="#"
        ><img
          src="./Image/insta.svg"
          alt=""
        />Instagram/lalibellahotel/</a
      >
      <a href="#"
        ><img
          src="./Image/facebook.svg"
          alt=""
        />facebook/lalibellahotel</a
      >
      <a href="#"
        ><img src="./Image/email.svg" alt="" />lalibellahotel@gmail.com</a
      >
    </p>
  </div>
  <div class="footer-about">
    <h2>About Us</h2>
    <p>
      Ea eiusmod sit enim pariatur adipisicing nisi elit tempor cupidatat
      deserunt et irure nulla. Aliqua labore cupidatat nulla magna
      exercitation.
      <a href="#"
        ><img src="./Image/location.svg" alt="" />Bole Addis Ababa,
        Ethiopia</a
      >
    </p>
  </div>
</div>
<div class="footer-copyright">
  <a href="https://www.versavvymedia.com/"
    ><p>&copy Copyright Designed by Versavvy Media</p></a
  >
</div>`  
}
export {header , footer}