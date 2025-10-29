// .gitigonore로 먼저 키를 보관한 JS 불러오기 (깃허브 페이지에서는 추후에 수정)
import KEY from './API_KEY.js';

// 현재 위치, 날씨 알려주는 기능
// js키를 불러 사용했더니 보안정책으로 크롬 브라우저가 막아서 라이브서버- http://localhost:5500/ 로 접속해야함
// 물론 테스트 완료!

const API_KEY = KEY;

// 제대로 작동할 때 나올 함수
function onGeoOK(position){
     // 사용자의 위도
     const lat = position.coords.latitude;
     // 사용자의 경도
     const lon = position.coords.longitude;
     // url 맨 뒤에 &units=metric를 넣은 것은 화씨인 온도 값을 섭씨로 바꾸기 위해서
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}&lang=KR`;
   
   
     fetch(url).then( (response) => response.json()).then( (data) =>{
          
          const temp = document.querySelector("#weather span:first-child");
          const city = document.querySelector("#weather span:last-child");
          const icon = data.weather[0].icon;
          // 날씨 및 섭씨 지정
          temp.innerText = `${data.main.temp}°`
          // 도시 이름 지정 
          city.innerText = `${data.name}`;

          const weather = document.createElement("img");
          weather.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
          document.body.querySelector(".footer_wrap_top").appendChild(weather);
     });


}

// 작동하지 않을때 나올 함수  weather.src = `https://openweathermap.org/img/wn/${data.main.icon}`
         
function onGeoError(err){
     alert("사용권한을 허용하지 않았거나 사용자의 위치를 찾을 수가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// 브라우저에서 위치 좌표와 wifi, gps등등 얻어올수 있는 코드.
//getCurrentPosition()는 두개의 인자가 필요. 1개는 실행완료 함수, 다른 1개는 실행 실패함수
// 성공함수는 geolocation 포지션 객체(유저의 위치정보)를 하나 입력받음.




