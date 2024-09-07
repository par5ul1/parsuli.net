const dialog = document.createElement("dialog");
dialog.id = "modernize-dialog";

const closeButton = document.createElement("button");
closeButton.id = "close-button";
closeButton.onclick = closeDialog;

const marquee = document.createElement("marquee");
marquee.scrollamount = "10";
marquee.innerHTML = "<h2>NEW VERSION AVAILABLE</h2>";

marquee.start();

const paragraph = document.createElement("p");
paragraph.innerHTML =
  "Oops! It looks like you landed on an old version of this website — like <i>30 years ago</i> old.";
paragraph.innerHTML +=
  "<br /><br />Good news: it&apos;s light, fast, and simple.";
paragraph.innerHTML += "<br />Bad news: it&apos;s ugly, plain, and boring.";
paragraph.innerHTML +=
  "<br /><br />You can <b>Update</b> to see the modern version, or you can <b>Cancel</b> and keep browsing this antiquated version — content&apos;s the same. Either way, you can always switch between version by clicking the curious toggle in the bottom right corner.";

const actionButtons = document.createElement("div");
actionButtons.id = "action-buttons";

const cancelButton = document.createElement("button");
cancelButton.innerHTML = "Cancel";
cancelButton.onclick = closeDialog;

const updateButton = document.createElement("button");
updateButton.innerHTML = "<b>Update</b>";
updateButton.autofocus = true;
updateButton.onclick = function () {
  closeDialog();
  modernize();
};

dialog.appendChild(closeButton);
dialog.appendChild(marquee);
dialog.appendChild(paragraph);
dialog.appendChild(actionButtons);
actionButtons.appendChild(cancelButton);
actionButtons.appendChild(updateButton);

function closeDialog() {
  dialog.close();
  document.body.removeChild(dialog);
}

function openDialog() {
  document.body.appendChild(dialog);
  dialog.showModal();
}

const isURLClear = !(
  window.location.href.includes("?") || window.location.href.includes("#")
);

if (isURLClear) {
  setTimeout(openDialog, 2500);
}
