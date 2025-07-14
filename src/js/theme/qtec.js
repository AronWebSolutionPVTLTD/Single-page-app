// loader

const duration = 3000;
const stepTime = 10;

const loader = document.querySelector(".qtecLoader");
const loaderText = document.querySelector(".loaderFill");
const content = document.querySelector(".qtech-body");

let percentage = 0;
const totalSteps = duration / stepTime;
const increment = 100 / totalSteps;

const interval = setInterval(() => {
  percentage += increment;
  if (percentage >= 100) {
    percentage = 100;
    clearInterval(interval);

    loader.classList.add("done");
    content.classList.remove("hidden");
  }

  loaderText.style.width = `${Math.floor(percentage)}%`;
}, stepTime);

// loader

const customCursor = document.querySelector(".qtec-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.transform = `translate(${e.clientX - 20}px, ${
    e.clientY - 20
  }px)`;

  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);

  if (
    hoveredElement?.tagName === "A" ||
    getComputedStyle(hoveredElement).cursor === "pointer"
  ) {
    customCursor.classList.add("hovering-link");
  } else {
    customCursor.classList.remove("hovering-link");
  }
});

const target = document.querySelector("body");
const classToWatch = "hidden";

const observerBody = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (!target.classList.contains(classToWatch)) {
        observerBody.disconnect();
        runMainScript();
      }
    }
  }
});

observerBody.observe(target, { attributes: true });

function runMainScript() {
  var heroSlider = new Swiper(".heroSlider .swiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".histoSingle").forEach((el) => {
    observer.observe(el);
  });

  var skillSlider = new Swiper(".skilSlider .swiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
    },
  });
  var footerGallery = new Swiper(".Footergallery .swiper", {
    slidesPerView: 5,
    spaceBetween: 2,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      pauseOnMouseEnter: false,
    },
  });

  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll(".text-anim").forEach((element) => {
    const split = new SplitText(element, { type: "words" }); // changed to "words"
    const words = split.words;
  
    gsap.from(words, {
      scrollTrigger: {
        trigger: element,
        start: "10% 50%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 10,
      stagger: 0.1, // slightly longer stagger for words
      duration: 0.4,
      ease: "power2.out",
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  // Animate each .qtecMask
  document.querySelectorAll(".qtecMask").forEach((el) => {
    gsap.to(el, {
      x: "100%",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "10% 50%",
        toggleActions: "play none none none",
      },
    });
  });
  document.querySelectorAll(".animateImg").forEach((el) => {
    gsap.to(el, {
      scale: 1,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "10% 50%",
        toggleActions: "play none none none",
      },
    });
  });

  var counterText = document.querySelectorAll(".qtec-h4 .numCounter");
  var barText = document.querySelectorAll(".inner .numCounter");
  var Inner = document.querySelectorAll(".inner");

  counterText.forEach(function (counter, i) {
    if (barText[i]) {
      barText[i].innerText = counter.innerText;
      Inner[i].style.width = counter.innerText + "%";
    }
  });

  var qtecNav = document.querySelectorAll(".qtec-navLinks li");

  qtecNav.forEach(function (container) {
    const link = container.querySelector("a");
    const span = container.querySelector("span");

    if (link && span) {
      span.innerText = link.innerText;
    }
  });

  var menuButton = document.querySelector(".qtec-menuIcon");
  var NavOverlay = document.querySelector(".navOverlay");
  var NavClose = document.querySelector(".closeNav");

  menuButton.addEventListener("click", function () {
    document.querySelector(".sideNav").classList.toggle("activeNav");
  });

  NavOverlay.addEventListener("click", function () {
    document.querySelector(".sideNav").classList.toggle("activeNav");
  });
  NavClose.addEventListener("click", function () {
    document.querySelector(".sideNav").classList.toggle("activeNav");
  });
}
