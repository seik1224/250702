let img = [
  "img/1.webp",
  "img/2.webp",
  "img/3.webp",
  "img/4.webp",
  "img/5.webp",
  "img/6.webp",
  "img/7.webp",
  "img/8.webp",
  "img/9.webp",
  "img/10.webp",
  "img/11.webp",
  "img/12.webp",
  "img/13.webp",
  "img/14.webp",
  "img/15.webp",
  "img/16.webp",
  "img/17.webp",
  "img/18.webp",
  "img/19.webp",
  "img/20.webp",
  "img/21.webp",
  "img/22.webp",
  "img/23.webp",
  "img/24.webp",
  "img/25.webp",
];

/*
    [ MakeImg 생성자함수 ]

    1. 배열의 img를 가져와서 #gallery에 추가해주는 함수
    2. 이미지의 width값은 랜덤으로 불러와져야 하며 100보다 작거나 500보다 크면 다시 랜덤으로 생성해주세요.
    3. left 값은 현재 width값의 음수값으로 설정해주세요. (그래야 브라우저 밖으로 나감)
    4. top 값은 랜덤으로 불러와져야 하며 0보다 작거나 브라우저 높이에서 이미지 너비를 뺀 값보다 크면 다시 랜덤으로 생성해주세요.


    [ zImg prototype ]
    1. z-index값을 넣으면 해당 img에 z-index값이 들어가도록 해보세요.
    2. div0.zImg(20); -> z-index 생기면 성공



    현재 여기까지 작업했다면
    이미지가 <img src="img/25.webp" width="300" id="24" style="left: -300px; top: 140px; z-index: 20;"> 이런식으로 생성되어야 함
    left가 음수값이기 때문에 그것을 고려하여 움직이게 해야함 -299, -298, -297, ... 이런식으로 움직여야함

    [ speedImg prototype ]
    1. speedImg라는 prototype을 만들어서 속도값과 시간을 받아오고 해당 img를 움직여보세요.
    div0.speedImg(10, 20); -> 20초 후에 이미지 움직임이 시작되며 속도는 10ms로 움직임


*/


function MakeImg(no){
  this.no = no;
  const gallery = document.getElementById('gallery');
  const imgCr = document.createElement('img');

  // 이미지의 width값 생성
  let ranNum = parseInt(Math.random() * 10) * 100;
  while(ranNum < 100 || ranNum > 500){
    ranNum = parseInt(Math.random() * 10) * 100;
  }

  // 이미지의 top값 생성
  let height = document.body.offsetHeight;
  let ranNum2 = parseInt(Math.random() * 100) * 10;

  while(ranNum2 < 0 || ranNum2 > height - ranNum){
    ranNum2 = parseInt(Math.random() * 100) * 10;
  }

  imgCr.src = img[no];
  imgCr.setAttribute('width', ranNum);
  imgCr.setAttribute('id', no);
  imgCr.style.left = `${-ranNum}px`;
  imgCr.style.top = `${ranNum2}px`;

  gallery.append(imgCr);

}

MakeImg.prototype.zImg = function(z){
  console.log(this);
   let img = document.getElementById(this.no);
   img.style.zIndex = z;
}

MakeImg.prototype.speedImg = function(speed, time){
  let img = document.getElementById(this.no);
  let startStr = img.style.left; // 이미지 초기 left위치
  console.log(startStr);
  setTimeout(()=>{
    setInterval(()=>{
      // 초기위치 숫자로 가져옴
      let currentPosition = parseInt(img.style.left);
      let newPosition =  currentPosition + 1;

      if(newPosition > document.body.offsetWidth){
        img.style.left = startStr;
      } else {
        img.style.left = `${newPosition}px`;
      }
    }, speed)
  }, time)
}


export {MakeImg}