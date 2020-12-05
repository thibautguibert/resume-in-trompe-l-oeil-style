import bangImg from "./icons/bang.svg";

export const shakeAnimation = (element) => {
  const e = document.querySelector(element);
  const move = () => {
    const randomTop = Math.floor(Math.random() * 7) - 3;
    const randomLeft = Math.floor(Math.random() * 7) - 3;
    e.style.top = `${randomTop}px`;
    e.style.left = `${randomLeft}px`;
  };
  const shake = setInterval(move, 20);
  setTimeout(() => {
    clearInterval(shake);
    e.style.top = 0;
    e.style.left = 0;
  }, 400);
};

export const giveGrayScale = (element, n) => {
  const e = document.querySelector(element);
  if (n >= 20) {
    e.style.filter = `contrast(${n}%) grayscale(${100 - n}%)`;
  } else {
    e.style.filter = "contrast(40%) grayscale(100%) opacity(0.33)";
    e.style.transform = "rotate(330deg)";
    e.style.cursor = "default";
  }
};

export const showBang = (prt) => {
  const bang = document.createElement("img");
  bang.setAttribute("src", bangImg);
  bang.setAttribute("alt", "bang!");
  bang.classList.add("bang");
  const randomTop = Math.floor(Math.random() * 30) - 10;
  const randomLeft = Math.floor(Math.random() * 30) - 10;
  bang.style.top = `${randomTop}px`;
  bang.style.left = `${randomLeft}px`;
  if (Math.random() > 0.5) {
    bang.style.filter =
      "invert(47%) sepia(88%) saturate(1021%) hue-rotate(325deg) brightness(96%) contrast(101%)";
  }
  const randomRotate = Math.floor(Math.random() * 61) - 30;
  bang.style.transform = `rotate(${randomRotate}deg)`;
  const parent = document.querySelector(prt);
  parent.appendChild(bang);
  setTimeout(() => {
    bang.parentNode.removeChild(bang);
  }, 300);
};
