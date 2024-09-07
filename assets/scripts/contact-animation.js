const contact = document.getElementById("contact");
const interval = 1000;

function animateContactBlob() {
  const firstRadii = Array(4)
    .fill(0)
    .map(() => {
      const value = 40 + Math.random() * 35;
      return `${value}%`;
    });
  const additionalRadii = Array(4)
    .fill(0)
    .map(() => {
      const value = 30 + Math.random() * 45;
      return `${value}%`;
    });

  contact.style.setProperty(
    "--_blob-radius",
    `${firstRadii.join(" ")} / ${additionalRadii.join(" ")}`
  );
}

setInterval(animateContactBlob, interval);
contact.style.setProperty("--_blob-duration", `${interval + 25}ms`);

animateContactBlob();
