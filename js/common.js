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
      <a href="book">Book</a>
      <a href="restaurant">Restaurant and Bar</a>
      <a href="special">Special Offer</a>

      <a href="book">Contact Us</a>
      <a href="about">About Us</a>
    </div>
  </div>
  <div class="footer-contact">
    <h2>Contact Us</h2>
    <p>
    Haven’t found what you were looking for?
    Contact online/call us
    
      <a href="#"><img src="./Image/phone.svg" alt="" /> +251 116614917 | +251 116615522</a>
      <a href="https://www.instagram.com/lalibelahotel/"
        ><img
          src="./Image/insta.svg"
          alt=""
        />Instagram/lalibellahotel/</a
      >
      <a href="https://www.facebook.com/Lalibela_Hotel/"
        ><img
          src="./Image/facebook.svg"
          alt=""
        />facebook/lalibellahotel</a
      >
      <a href="#"
        ><img src="./Image/email.svg" alt="" />reservation@lalibelahotel.com</a
      >
    </p>
  </div>
  <div class="footer-about">
    <h2>About Us</h2>
    <p>
    Lalibela Hotel thrives to give its guests a contemporary take on cultural living. Our hotel is positioned at
    proximity to shopping destinations, sightseeing spots and travel hubs in the city of Addis Ababa.
      <a href="https://goo.gl/maps/6g2nLWUAdhYZDSdu8"
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