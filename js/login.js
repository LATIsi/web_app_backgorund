// 사용자의 이름을 입력하고 로컬 스토로지에 저장해 확인하는 기능

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const join = document.querySelector(".join");
const greeting = document.querySelector(".greeting");

// 변수 이름, 클래스 이름 오타나지 않도록 변경
const hiddenClassName_login = "hidden";
const USERNAME_KEY = "username"


// 유저 이름 등록
function onloginFormSubmit(event){
    event.preventDefault();
    loginForm.classList.add(hiddenClassName_login);
    
    // 유저 이름을 username이라는 변수에 등록
    const username = loginInput.value;

    // 로컬 스토로지 이름 등록
    localStorage.setItem(USERNAME_KEY,username);
    addGreeting(username); 
}

// 유저 이름 보이게 하기
function addGreeting(username){
    //위에 배경도 추가해서 보여주기
    const top_bg  = document.createElement("div");
    top_bg.classList.add("top_bg");
    document.body.querySelector(".wrap").appendChild(top_bg);
    greeting.innerText = `어서오세요, ${username} 님!`;
    join.classList.remove(hiddenClassName_login);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);


// 로컬 스트로지에 저장된 유저 이름이 있는지 먼저 확인하고 없으면 등록하게 하고 있으면 보이게 하기
if(savedUserName === null){
    loginForm.classList.remove(hiddenClassName_login); 
    loginForm.addEventListener("submit", onloginFormSubmit);
}else{
    addGreeting(savedUserName);
}









