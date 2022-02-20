const todoForm = document.querySelector("#todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo_list");

const TODOS_KEY = "todos";
//배열 let으로 선언해줘야 빈배열로 push하지않고 업데이트 가능
let toDos =  [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//버튼 클릭 시, todo-list에서 값 지워줌
function delToDo(event){
  event.preventDefault();
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();

}

//화면에 todo-list 보여줌
function printToDoList(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.id = "todo_del";
  button.innerText = "➖";
  button.addEventListener("click",delToDo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

//todo값 입력해줌
function submitToDo(event){
  event.preventDefault();
  const newToDo = todoInput.value;
  console.log(newToDo);

  //입력후 input창에 값 비워주기
  todoInput.value = "";

  //todo입력받은 값 배열(object)로 push
  const newToDoObj = {
    text:newToDo,
    id:Date.now()
  }
  toDos.push(newToDoObj);

  printToDoList(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit",submitToDo);

//localStorage 기존 값 띄워주도록
const saveLocalToDos = localStorage.getItem(TODOS_KEY);

if(saveLocalToDos !== null){
  const parsedToDos = JSON.parse(saveLocalToDos);
  console.log(parsedToDos);

  toDos = parsedToDos;
  //요게 기존 로컬에 저장돼있는 요소들 forEach로 보여주는거임 중요코드
  parsedToDos.forEach(printToDoList);
}