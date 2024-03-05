searchForm = document.querySelector('.search-form');   /* برای دکمه سرچ در سایز زیر 768 پیکسل */

document.querySelector('#search-btn').onclick = () => {    /* برای دکمه سرچ در سایز کمتر از 768 پیکسل */
    searchForm.classList.toggle('active');
}

/* end */



let loginForm = document.querySelector('.login-form-container');  /* دکمه یوزر  */
document.querySelector('#login-btn').onclick = () => {   /*  دکمه یوزر باز کردن لاگین */
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {   /*  دکمه یوزر بستن لاگین */
    loginForm.classList.remove('active');
}
/* end */



window.onscroll = () => {   /* اسکرول و فیکس شدن هدر دوم*/

    searchForm.classList.remove('active');    /* برای دکمه سرچ در سایز کمتر از 768 پیکسل */

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }else {
        document.querySelector('.header .header-2').classList.remove('active'); 
    }
}

window.onload = () => {  /* اسکرول و فیکس شدن هدر دوم*/
    if (window.scrollY > 80) {    
        document.querySelector('.header .header-2').classList.add('active');
    }else {
        document.querySelector('.header .header-2').classList.remove('active'); 
    }
}
/* end */




/* Loader */
fadeOut ();

function loader (){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut () {
  setTimeout(loader, 2000);
}
/* End */





var swiper = new Swiper(".book-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });



  var swiper = new Swiper(".arrival-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".blog-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });