
const quizData=[
  {
    question:"Who was the first president of kenya",
    a:"Jomo kenyatta",
    b:"Daniel arap moi",
    c:"Uhuru kenyatta",
    d:"Mwai Kibaki",
    correct:"a"
  },
  {
    question:"Which year did kenya gain independence",
    a:"1974",
    b:"1963",
    c:"1935",
    d:"2000",
    correct:"b",
  },
  {
    question:"Who is the cabinet secretary of defence in kenya",
    a:"Moses kuria",
    b:"Ali Hassan Joho",
    c:"Kithure kindiki",
    d:"Moses wetangula",
    correct:"c",
  },
  {
    question:"Who is the richest person in the world",
    a:"Helon Mask",
    b:"Mark zuckeburg",
    c:"Bill gates",
    d:"all of the above",
    correct:"c",
  },
  {
    question:"which of the following programming language is used in web development",
    a:"Html",
    b:"Css",
    c:"jQuery",
    d:"javascript",
    correct:"d",
  },
  {
    question:"which is false about php",
    a:"server-side language",
    b:"used for web development",
    c:"it's syntax is c-like",
    d:"used to add functionality to websites",
    correct:"d",
  },
  {
    question:"which one is not a programming language",
    a:"python",
    b:"c++",
    c:"java",
    d:"HyperText Markup language(HTML)",
    correct:"d",
  },
  {
    question:"which tag is used for linking to another page",
    a:"<b>",
    b:"<a>",
    c:"<h1>",
    d:"<p>",
    correct:"b",
  },
  {
    question:"CSS stands for",
    a:"cascading style sheet",
    b:"hyperText Markup language",
    c:"cascading styling sorting",
    d:"none of the above",
    correct:"a",
  },
  {
    question:"which of the following frameworks is used in styling",
    a:"JQuery",
    b:"laravel",
    c:"bootsrap",
    d:"Angular",
    correct:"c",
  },

];


const quiz=document.getElementById('quiz');
const questionEls=document.getElementById('question');
const answerEls=document.querySelectorAll('.answer');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitbtn=document.getElementById('submit');
const startapp=document.querySelector('.start h3');
startapp.onclick=function(){
startapp.parentElement.style.display="none";
// document.getElementById('up').style.display="none";
quiz.style.display="block";
loadQuiz();
Reset();
startWatch();
}
let score=0;
let currentQuiz=0;


// loadQuiz();
function loadQuiz(){
  deselectAnswers();

  const currentQuestion=quizData[currentQuiz];
  const currentQuestionNumber=currentQuiz+1
  questionEls.innerText= currentQuestionNumber +". "+currentQuestion.question;
  a_text.innerText=currentQuestion.a;
  b_text.innerText=currentQuestion.b;
  c_text.innerText=currentQuestion.c;
  d_text.innerText=currentQuestion.d;
}
function deselectAnswers(){
  answerEls.forEach(answerEl=>answerEl.checked=false);
}
function getSelected(){
  let answer;
  answerEls.forEach(answerE=>{
    if(answerE.checked){
    answer=answerE.id;
    } 
  })
 return answer;
}

submitbtn.addEventListener('click',()=>{
const answers=getSelected();
if(answers)
{


  if(answers===quizData[currentQuiz].correct){
    score++;
  }

    currentQuiz++;
       if(currentQuiz < quizData.length){
      loadQuiz();
    }else if(score<=5){
      
        quiz.innerHTML=`Work extra hard!!! <br>`;
        quiz.innerHTML+=`You have scored ${score} / ${quizData.length}
        <button onclick="location.reload()">Reload</button>`;
    }
      else{
        quiz.innerHTML=`Great job you can do better than this!!! <br>`;
        quiz.innerHTML+=`You have scored ${score} / ${quizData.length}
        <button onclick="location.reload()">Reload</button>`;
      }
    
    

  }

});


let element=document.querySelector('.timeDisplay');
let [seconds,minutes,hours]=[0,0,0];
let timer=null;
element.innerHTML="00 : 00 : 00";
function stopWatch(){
seconds++;
if(seconds ==60){
  minutes++;
  seconds=0;
}
else if(minutes ==60){
  hours++;
  minutes=0;
}else if(minutes == 1){
   if(currentQuiz >= quizData.length){
    Watchstop();
    Reset();
   }
  document.querySelector('.quiz-wrapper').style.display="none";
  startapp.parentElement.style.display="block";
 
}
let h=hours< 10?"0"+hours:hours;
let m=minutes<10?"0"+minutes:minutes;
let s=seconds<10?"0"+seconds:seconds;
element.innerHTML=h + " : " +m+ " : " +s;

}

function startWatch(){
if(timer !== null){
clearInterval(timer);
}
  timer=setInterval(stopWatch,1000);
}
function Reset(){
  clearInterval(timer);
  [seconds,minutes,hours]=[0,0,0];
  element.innerHTML="00 : 00 : 00";
}
// startWatch();
function Watchstop(){
  clearInterval(timer);
}




