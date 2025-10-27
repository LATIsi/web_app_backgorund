// 배경화면 새로고침 할 때마다 새로 보이게 하는 기능

const img = [
     "abstract.jpg",     
     "andrew-neel-unsplash.jpg",
     "cody-scott-milewski-unsplash.jpg",
     "cosmos.jpg",
     "cows.jpg",
     "flowers.jpg",
     "garrett-parker-unsplash.jpg",
     "jason-leung-unsplash.jpg",
     "micke-lindstrom-unsplash.jpg",
     "nature.jpg",
];

// img배열에 담긴 이미지 이름 랜덤으로 지정

const imgRandom = img[Math.floor(Math.random()*img.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${imgRandom}`;

document.body.appendChild(bgImage);