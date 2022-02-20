const images = [
  "0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList.add("bgImage");
//appenChild()는 body 제일 뒤에 html 추가
document.body.appendChild(bgImage);