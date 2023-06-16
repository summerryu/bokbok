

// 메인 cont1
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// cont3 right 슬라이더

var swiper = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});




const headeron = document.querySelector("#header");
const headerimg = document.querySelector(".top_left h1 img");

const typeimgs = document.querySelectorAll("#subcont1 .center > img");




  window.onscroll = function(){
    let scTop = window.scrollY;
    if(scTop > 0){
        headeron.classList.add("on");
        headerimg.setAttribute("src","./img/rudlogo.png");
    }
    else{
        headeron.classList.remove("on");
        headerimg.setAttribute("src","./img/footerlogo.png");
    }
}
