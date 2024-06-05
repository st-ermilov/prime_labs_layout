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

  // Theses slider start
  const thesesSlider = new Swiper(".theses_container", {
    slidesPerView: 4,
    direction: "vertical",
    spaceBetween: 24,
    autoplay: {
      delay: 1100,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1100,
    simulateTouch: true,
    grabCursor: true,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        direction: "horizontal",
        spaceBetween: 100,
      },
      1440: {
        direction: "horizontal",
        spaceBetween: 168,
      },
    },
  });
  // Theses slider end

  // Ingredients slider start
  const ingredientsSlider = new Swiper(".ingredients_slider", {
    slidesPerView: 1.2,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1100,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 12,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.4,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
    },
  });
  // Ingredients slider end

  // Review slider start
  const reviewsSlider = new Swiper(".review_slider", {
    slidesPerView: 1,
    loop: true,
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
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
  // Review slider end

  // Bottom slider start
  const bottomSlider = new Swiper(".bottom_slider", {
    slidesPerView: 1.2,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 12,
    initialSlide: 1,
    mousewheel: {
      sensitivity: 10,
      forceToAxis: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.2,
        centeredSlides: false,
        loop: false,
        initialSlide: 0,
      },
      1440: {
        slidesPerView: 3.2,
        spaceBetween: 24,
        centeredSlides: false,
        initialSlide: 0,
        loop: false,
      },
    },
  });
  // Bottom slider end

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

  // Text h1 in story_container start
  if (document.documentElement.clientWidth >= 1024) {
    const welcome = document.querySelector(".welcome");
    welcome.innerHTML = "Welcome To Prime Labs!";
  }
  // Text h1 in story_container end

  // Text h1 in review_container start
  if (document.documentElement.clientWidth >= 1024) {
    const reviewTitle = document.querySelector(".title_reviews");
    reviewTitle.innerHTML = `Happy thoughts from <br/> happy customers`;
  }
  // Text h1 in review_container end

  // Text p in join_us_left start
  if (document.documentElement.clientWidth >= 1024) {
    const textJoin = document.querySelector(".join_us");
    textJoin.innerHTML = `Take 10% off your first order when you sign up.`;
  }
  // Text p in join_us_left end

  // Desktop version end_____________
});
