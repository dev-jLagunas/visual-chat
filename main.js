import "./style.scss";

document.querySelectorAll(".message").forEach((message) => {
  const order = message.getAttribute("data-order");
  message.style.animationDelay = `${order * 1}s`;
});
