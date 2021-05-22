const header = document.querySelector("nav");
const firstContainer = document.querySelector(".first-container");

const section1Options = {
  rootMargin: "-50px 0px 0px 0px"
};

const section1Observer = new IntersectionObserver(function(
  entries, section1Observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting){
        header.classList.add("bg-dark");
      }else{
        header.classList.remove("bg-dark");
      }
    });
  }, section1Options);

section1Observer.observe(firstContainer);
