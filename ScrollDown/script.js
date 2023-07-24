document.addEventListener("DOMContentLoaded", function () {
  const scrollDownBtn = document.querySelector(".scroll-down-btn");

  scrollDownBtn.addEventListener("click", function () {
    const content = document.querySelector(".content");
    const contentOffsetTop = content.offsetTop;

    // Smooth scroll to the content section
    window.scrollTo({
      top: contentOffsetTop,
      behavior: "smooth",
    });
  });
});
