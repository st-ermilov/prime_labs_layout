document.addEventListener("DOMContentLoaded", () => {
  // Mobile version start_____________

  // Menu start
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu_container");
  const menuClose = document.querySelector(".menu_cross");
  const menuPoints = document.querySelectorAll(".mp");
  const body = document.querySelector("body");

  function Lock() {
    body.classList.toggle("lock");
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("menu_show");
    setTimeout(Lock(), 800);
  });

  menuClose.addEventListener("click", () => {
    menu.classList.toggle("menu_show");
    setTimeout(Lock(), 800);
  });

  if (document.documentElement.clientWidth < 1024) {
    menuPoints.forEach((button) => {
      button.addEventListener("click", () => {
        menu.classList.toggle("menu_show");
        setTimeout(Lock(), 800);
      });
    });
  }

  const shop_btn = document.querySelector(".point_shop");
  const shop_sections = document.querySelector(".shop_sections");

  shop_btn.addEventListener("click", () => {
    shop_sections.classList.toggle("show_menu_sections");
  });
  // Menu end

  // Top slider start
  const topSlider = new Swiper(".top_slider", {
    slidesPerView: 1.1,
    speed: 1000,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 12,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 1,
      },
    },
    thumbs: {
      swiper: {
        el: ".top_slider_thumb",
        slidesPerView: 4,
        spaceBetween: 24,
        direction: "vertical",
        breakpoints: {
          1024: {
            spaceBetween: 13.5,
          },
        },
      },
    },
  });
  // Top slider end

  // Products specifications start

  const dots = document.querySelectorAll(".ell_dot");
  const sizes = document.querySelectorAll(".sz");

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => {
      for (let i of dots) {
        i.classList.remove("dot_active");
      }
      dots[index].classList.add("dot_active");
    })
  );

  sizes.forEach((size, index) =>
    size.addEventListener("click", () => {
      for (let i of sizes) {
        i.classList.remove("size_active");
      }
      sizes[index].classList.add("size_active");
    })
  );
  // Products specifications end

  // Select price start
  const prices = document.querySelectorAll(".pp");

  prices.forEach((price, index) => {
    price.addEventListener("click", () => {
      for (let i of prices) {
        i.classList.remove("pr");
      }
      prices[index].classList.add("pr");
    });
  });
  // Select price end

  // More info start
  tippy(".info_btn", {
    content:
      "Приходишь после перерыва в два года в качалку и думаешь, чтобы быстро восстановишь форму из-за мышечной памяти. Но на деле оказывается, что у тебя мышечная амнезия.",
    placement: "bottom",
  });
  // More info end

  // Review slider start
  new Swiper(".slider_review_container", {
    navigation: {
      prevEl: ".btn_prev",
      nextEl: ".btn_next",
    },
    slidesPerView: 1,
    speed: 1000,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 15,
    thumbs: {
      swiper: {
        el: ".slider_review_pagination",
        slidesPerView: 7,
        spaceBetween: -7,
      },
    },
  });
  // Review slider end

  // Accordion start
  const accordionBtns = document.querySelectorAll(".faq_btn");
  const textFaq = document.querySelectorAll(".faq_text");
  const arrows = document.querySelectorAll(".up_down");

  accordionBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      for (let i of textFaq) {
        i.classList.remove("faq_text_show");
      }
      textFaq[index].classList.add("faq_text_show");

      for (let x of arrows) {
        x.classList.remove("arrow");
      }
      arrows[index].classList.add("arrow");
    });
  });
  // Accordion end

  // Footer points start
  const company = document.querySelector(".point_company");
  const support = document.querySelector(".point_support");
  const legal = document.querySelector(".point_legal");
  const social = document.querySelector(".point_social");

  const companyPoints = document.querySelector(".point_company_points");
  const supportPoints = document.querySelector(".point_support_points");
  const legalPoints = document.querySelector(".point_legal_points");
  const socialPoints = document.querySelector(".point_social_points");

  company.addEventListener("click", () => {
    companyPoints.classList.toggle("points_show");
  });
  support.addEventListener("click", () => {
    supportPoints.classList.toggle("points_show");
  });
  legal.addEventListener("click", () => {
    legalPoints.classList.toggle("points_show");
  });
  social.addEventListener("click", () => {
    socialPoints.classList.toggle("points_show");
  });
  // Footer points end
  // Mobile version end_____________

  // Desktop version start_____________
  // Shop slider start
  const drugsSlide = new Swiper(".drugs_container", {
    direction: "vertical",
    slidesPerView: 1,
    simulateTouch: true,
    speed: 1000,
    thumbs: {
      swiper: {
        el: ".text_box_container",
        slidesPerView: 3,
        direction: "vertical",
        spaceBetween: 31,
      },
    },
  });
  new Swiper(".performance_container", {
    slidesPerView: 3,
    spaceBetween: 74,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });
  new Swiper(".longevity_container", {
    slidesPerView: 3,
    spaceBetween: 74,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });
  new Swiper(".immunity_container", {
    slidesPerView: 3,
    spaceBetween: 74,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  });
  // Shop slider end

  // Show shop start
  const btnShop = document.querySelector("#point_shop");
  const shopBar = document.querySelector(".shop_points_bar");

  btnShop.addEventListener("click", () => {
    shopBar.classList.toggle("show_shop");
  });
  // Show shop end

  // Theses slider start
  const thesesSlider = new Swiper(".theses_container", {
    loop: true,
    speed: 1100,
    simulateTouch: true,
    grabCursor: true,
    autoplay: {
      delay: 1100,
      disableOnInteraction: false,
    },
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 51,
      },
    },
  });
  // Theses slider end

  // Text h2 in ingredients_title_h2 start
  if (document.documentElement.clientWidth >= 1024) {
    const titleIngredient = document.querySelector(".ingredients_title_h2");
    titleIngredient.innerHTML = `Thoughtfully sourced, <br/> clinically-tested ingredients`;
  }
  // Text h2 in ingredients_title_h2 end

  // Text p in join_us_left start
  if (document.documentElement.clientWidth >= 1024) {
    const textJoin = document.querySelector(".join_us");
    textJoin.innerHTML = `Take 10% off your first order when you sign up.`;
  }
  // Text p in join_us_left end

  // Desktop version end_____________
});
