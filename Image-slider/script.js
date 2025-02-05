const images = [
  {
    img: "./Images/forest.jpg",
    heading: "Forest",
    description:
      "A forest is an ecosystem characterized by a dense community of trees.",
  },
  {
    img: "./Images/desert.jpg",
    heading: "Desert",
    description:
      "A desert is a dry, hot landscape that receives little precipitation ",
  },
  {
    img: "./Images/beach.jpg",
    heading: "Beach",
    description:
      "A beach is a narrow strip of land separating a body of water from inland areas",
  },
  {
    img: "./Images/snow.jpg",
    heading: "Snow",
    description: "Snow is precipitation that forms when water vapor freezes.",
  },
];
const prevBtn = document.querySelector(".pn button:first-child");
const nextBtn = document.querySelector(".pn button:last-child");
const mainImg = document.querySelector("#img1");
const heading = document.querySelector(".details h1");
const description = document.querySelector(".details p");
const thumbnails = document.querySelectorAll(".items div");

let Currentimg = 0;
function Imgdisplay(index) {
  mainImg.src = images[index].img;
  heading.textContent = images[index].heading;
  description.textContent = images[index].description;
  thumbnails.forEach((thumb) => thumb.classList.remove("tracking"));
  thumbnails[index].classList.add("tracking");
}

prevBtn.addEventListener("click", () => {
  Currentimg = (Currentimg - 1 + images.length) % images.length;
  Imgdisplay(Currentimg);
});
nextBtn.addEventListener("click", () => {
  Currentimg = (Currentimg + 1) % images.length;
  Imgdisplay(Currentimg);
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumb) => thumb.classList.remove("tracking"));
    thumbnail.classList.add("tracking");
    Imgdisplay(index);
  });
});

setInterval(() => {
  Currentimg = (Currentimg + 1) % images.length;
  Imgdisplay(Currentimg);
}, 4000);
