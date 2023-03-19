import gsap from "gsap";
import "./style.css";

// preloader

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (!preloader) {
    return;
  }

  const count = preloader.querySelector(".count");
  let loaded = 0;
  const total = document.getElementsByTagName("*").length;
  const interval = setInterval(() => {
    const percent = Math.round((loaded / total) * 100);

    count.innerHTML = percent;
    loaded++;
    if (loaded === total) {
      clearInterval(interval);
      setTimeout(() => {
        gsap.to(
          ".preloader",
          1.5,
          {
            delay: 0.5,
            y: "-100%",
            ease: Expo.Out,
          },
          1000
        );
      });
    }
  }, 20);

  function checkReadyState() {
    if (document.readyState === "complete") {
      clearInterval(interval);
      count.innerHTML = "100%";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }
  }

  document.addEventListener("readystatechange", checkReadyState);
});

const main = document.getElementById("main");

window.addEventListener("load", () => {
  gsap.from(main, { opacity: 0, duration: 1 });
});
