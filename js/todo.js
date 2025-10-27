// 투두 리스트 로컬 스트로지에 저장 / 삭제하는 기능

const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todolist-text");
const toDoList = document.querySelector(".todo-list");
const toDoOpenButton = document.querySelector(".todolist_button");
const toDoWrap = document.querySelector(".todo_wrap");
const toDoLength = document.querySelector(".todo_wrap span:nth-child(2)");

const hiddenClassName_todo = "hidden";

// to do list 저장할 배열, 업데이트 가능하게 let으로 바꿈

let todoGetList = [];


// 로컬 스트로지에 사용하는 배열(todoList) 키
const TODOS_KEY ="todoList";

// 객체를 받음
function setToDo(newToDoObj){
     // 태그들 createElement으로 생성하기
     const li = document.createElement("li");
     // 리스트로 만들어진 li의 id를 객체로 받아온 date id로 지정. 삭제할때 찾아올것.
     li.id = newToDoObj.id;
     const span = document.createElement("span");
     const toDoDeleteButton = document.createElement("a");

     // newToDoObj가 객체이기에 이렇게 해줘야함!
     span.innerText = newToDoObj.text;
     toDoDeleteButton.innerText = "X";

     // 만든 요소들 li에 추가하고, ul(todolist)에 그 li 추가하기
     li.appendChild(span);
     li.appendChild(toDoDeleteButton);
     toDoList.appendChild(li);

     // todo-list의 li중 삭제버튼 누르면 삭제 함수 실행
     toDoDeleteButton.addEventListener("click", deleteTodo);
}

 // todo-list 생성 함수
function toDoSubmit(event){
     event.preventDefault();
     const newTodo = toDoInput.value;
     // text는 적은 투두 리스트 내용, ID는 리스트 구별용(DATE)
     // 즉 이제 배열에 객체를 저장하는것.
     const newToDoObj = {
          text : newTodo,
          id: Date.now(),
     };

     // 입력창 초기화
     toDoInput.value = "";
     setToDo(newToDoObj);
     todoGetList.push(newToDoObj);
     localStorageSaveToDos();


     // 추가한 뒤 리스트 갯수 새로고침
     toDoLength.innerText = todoGetList.length;
}

 // todo-list의 삭제 함수
function deleteTodo(event){
     event.preventDefault();
     const deleteLi = event.target.parentElement;
     deleteLi.remove();

     // 로컬 스토로지에서 삭제할 id를 li와 비교한 뒤 제외한 filter값을 객체에 다시 저장~ 
     todoGetList = todoGetList.filter((toDo)=> toDo.id !== parseInt(deleteLi.id) )
     
     // 다시 로컬스토로지에 저장~
     localStorageSaveToDos();

     // 리스트 갯수 새로고침
     toDoLength.innerText = todoGetList.length;
}




 //로컬 스토로지는 배열 저장이 안되기에 JSON.stringify 으로 JSON 형태의 문자열 저장
function localStorageSaveToDos(){
     localStorage.setItem(TODOS_KEY, JSON.stringify(todoGetList));
}

toDoForm.addEventListener("submit", toDoSubmit);


// 로컬 스토리지에서 todolist 키로 값 불러온걸 toDoArr에 담기
const toDoArr = localStorage.getItem(TODOS_KEY);



// 로컬 스토리지에서 todolist 키로 불러온 값이 있다면! JSON.parse으로 객체로 변환함
if(toDoArr !== null){
     const preventTodo = JSON.parse(toDoArr);
     // 빈 배열을 다시 채워줌 
     todoGetList = preventTodo;
     preventTodo.forEach(setToDo);

     //투두 리스트 갯수 해주기
     toDoLength.innerText = todoGetList.length;
}

// todo list 버튼 클릭시 리스트 보여줌
function clickToDosButton(event){
     event.preventDefault();
     toDoWrap.classList.toggle(hiddenClassName_todo);
}


toDoOpenButton.addEventListener("click",clickToDosButton);