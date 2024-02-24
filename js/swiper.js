// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const images = [
      { desktop: "./img/dmarketing.png", mobile: "./img/jam-mobile1.png" },
      { desktop: "./img/gsc.png", mobile: "./img/jam-mobile2.png" },
      // Tambahkan gambar lainnya ke dalam array sesuai kebutuhan
    ];
  
    const swiperWrapper = document.getElementById("swiper-wrapper");
  
    images.forEach(function(image) {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.style.backgroundImage = `url('${isMobile() ? image.mobile : image.desktop}')`;
      swiperWrapper.appendChild(slide);
    });
  });
  
  function isMobile() {
    return window.innerWidth <= 576; // Ubah batas sesuai kebutuhan
  }
  