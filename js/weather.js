// .gitigonore로 먼저 키를 보관한 JS 불러오기
// (깃허브 페이지에서는 secret 코드로 깃허브 액션으로 넣었지만, 찾아보니 호스팅 된 홈페이지에서 쉽게 내 API키를 확인 가능해서 파이어베이스로 옮김..)

// 현재 위치, 날씨 알려주는 기능
// js키를 불러 사용했더니 보안정책으로 크롬 브라우저가 막아서 라이브서버- http://localhost:5500/ 로 접속해야함
import KEY from './API_KEY.js';

// 파이어베이스 Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 파이어베이스 데이터베이스 연결 / db연결 문서 찾아서 불러오는것 import
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
   
const OP_API_KEY = KEY.apiKey;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// 파이어베이스 SDK 설치시 보이는 설정임!
    const firebaseConfig = {
      apiKey: OP_API_KEY,
      authDomain: "myprivacy1111-c02aa.firebaseapp.com",
      projectId: "myprivacy1111-c02aa",
      storageBucket: "myprivacy1111-c02aa.firebasestorage.app",
      messagingSenderId: "340483589192",
      appId: "1:340483589192:web:f14a12f8fd366c90f2847d",
      measurementId: "G-WB7EJ71NLW"
    };

// Initialize Firebase
// 나는 CDN 방식으로 개발해서 firebase.database()가 아닌 아래 두줄 이용!
    const app = initializeApp(firebaseConfig);
    const Database = getFirestore(app);

// 문서 이름가져와서 파이어베이스 읽어오기(Firestore이니 ref 사용 x)
async function findFirestore(docName) {
  try {
    const docRef = doc(Database, "Project", docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      return data.key;
    } else {
      console.log("해당 문서가 존재하지 않습니다.");
      return null;
    }
  } catch (e) {
    console.error("문서 불러오기 오류:", e);
  }
}


const API_KEY = await findFirestore("WebAppBackgorund");

// 제대로 작동할 때 나올 함수
function onGeoOK(position){
     // 사용자의 위도
     const lat = position.coords.latitude;
     // 사용자의 경도
     const lon = position.coords.longitude;
     
     // url 맨 뒤에 &units=metric를 넣은 것은 화씨인 온도 값을 섭씨로 바꾸기 위해서
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

   
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

