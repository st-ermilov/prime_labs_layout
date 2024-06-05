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

  // Info start
  tippy(".i_i_btn", {
    placement: "bottom",
  });
  // Info end

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

  // Text p in join_us_left start
  if (document.documentElement.clientWidth >= 1024) {
    const textJoin = document.querySelector(".join_us");
    textJoin.innerHTML = `Take 10% off your first order when you sign up.`;
  }
  // Text p in join_us_left end
});
