const buttons = document.querySelectorAll(".ripple-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = this.querySelector(".ripple-btn::after");
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.classList.add("clicked");

    setTimeout(() => {
      this.classList.remove("clicked");
    }, 600);
  });
});
