function getOpenState() {
  return JSON.parse(document.getElementById("faq").getAttribute("data-open"));
}

function updateButtonLabel(open) {
  const button = document.getElementById("faq-toggle");
  button.innerHTML = open ? "Close All" : "Open All";
}

function toggleAll() {
  const details = document.querySelectorAll("#faq details");
  const open = !getOpenState();
  details.forEach((detail) => {
    detail.open = open;
  });
  document
    .getElementById("faq")
    .setAttribute("data-open", JSON.stringify(open));
  updateButtonLabel(open);
}

document.addEventListener("DOMContentLoaded", function () {
  updateButtonLabel(getOpenState());
});
