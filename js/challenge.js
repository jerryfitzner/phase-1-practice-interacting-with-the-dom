
const timer = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const pauseBtn = document.getElementById("pause");
const likeList = document.getElementsByClassName("likes");
const commentsP = document.getElementById("list");
const commentBtn = document.getElementById("submit");

let timerNum = 0;

minusBtn.addEventListener("click", minusTimer);
plusBtn.addEventListener("click", plusTimer);

function countTimer(){
  timerNum++;
  timer.textContent = timerNum;
}
function plusTimer(){
  timerNum++;
  timer.textContent = timerNum;
}
function minusTimer(){
  timerNum--;
  timer.textContent = timerNum;
}

let clear;

function start(){
  if (!clear){
    clear = setInterval(countTimer, 1000);
  }
}
start();

function pauseTime(){
  if(pauseBtn.innerText === 'pause'){
    pauseBtn.innerText = "resume";
    clearInterval(clear);
    clear = null;
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
    commentBtn.disabled = true;
  } else {
    pauseBtn.innerText = "pause";
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled = false;
    commentBtn.disabled = false;
    start();
  }
}

pauseBtn.addEventListener("click", pauseTime)

heartBtn.addEventListener("click", like)

let clicksPerNumber = 0;

function like(){
  let liItem = document.getElementById(`${timerNum}`);
  if (liItem === null){
    let ele = document.createElement("li");
    ele.textContent = `${timerNum} has been liked 1 time.`;
    ele.setAttribute("id", `${timerNum}`);
    ele.setAttribute("class", "1");
    document.getElementsByClassName("likes")[0].appendChild(ele);
  } else {
    let ele2 = document.getElementById(`${timerNum}`);
    let ele3 = ele2.className
    let clicksPerNumber = Number(ele3) + 1;
    ele2.setAttribute("class", `${clicksPerNumber}`);
    ele2.innerHTML = `${timerNum} has been liked ${clicksPerNumber} times.`;
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector('form')
  form.addEventListener("submit", commentsI)
})


function commentsI (e){
  e.preventDefault();
  const get = document.getElementById("comment-input");
  let ele2 = document.createElement("p");
  ele2.textContent = `${ get.value }`
  commentsP.appendChild(ele2);
  get.innerHTML = "";
  document.getElementById("comment-form").reset();
}