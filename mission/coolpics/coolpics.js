document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is running!");

  const gallery = document.querySelector(".gallery");

  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }

  function viewHandler(event) {
    console.log("Clicked:", event.target);
    const clickedImage = event.target;
    if (clickedImage.tagName !== "IMG") {
      console.log("Not an image. Ignoring.");
      return;
    }

    const fullImageSrc = clickedImage.src.replace("-sm", "-full");
    console.log("Full Image Path:", fullImageSrc);

    const modalHTML = viewerTemplate(fullImageSrc, clickedImage.alt);
    document.body.insertAdjacentHTML("afterbegin", modalHTML);
    console.log("Modal inserted into the page.");

    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
  }

  function closeViewer() {
    console.log("Closing viewer...");
    document.querySelector(".viewer").remove();
  }

  if (gallery) {
    console.log("Gallery found!");
    gallery.addEventListener("click", viewHandler);
  } else {
    console.error("Gallery not found!");
  }
});
