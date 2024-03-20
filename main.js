import "./style.scss";

//Add specific order functionality to message fade in animation
document.querySelectorAll(".message").forEach((message) => {
  const order = message.getAttribute("data-order");
  message.style.animationDelay = `${order * 1}s`;
});
