export {};
document.addEventListener("DOMContentLoaded", () => {
  const images: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".client__image-one, .client__image-two, .client__image-three, .client__image-four, .client__image-five"
  );

  let currentImageIndex: number = 0;
  const totalImages: number = images.length;
  const step: number = 0.005;
  let scale: number = 1;
  let direction: number = 1;

  const pulse = () => {
    if (scale >= 1.1) direction = -1;
    else if (scale <= 1) {
      direction = 1;
      currentImageIndex = (currentImageIndex + 1) % totalImages;
    }

    scale += direction * step;

    images.forEach((img) => {
      img.style.transform =
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
    });

    if (images[currentImageIndex]) {
      images[currentImageIndex].style.transform =
        `translate3d(0px, 0px, 0px) scale3d(${scale}, ${scale}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }
  };

  setInterval(pulse, 40);
});
