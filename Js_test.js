
const quizData = [
    {
        question: "1. HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "Holistick Technical Method Library",
        c: "Hyper Tax Makes Line",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "2. The correct sequence of HTML tags for starting a webpage is -?",
        a:"Head, Title, HTML, body",
        b:"HTML, Body, Title, Head",
        c:"HTML, Head, Title, Body",
        d:"HTML, Head, Title, Body",
        correct: "d",
    },
    {
        question: "3. css stands for?",
        a: "Color Style Sheets",
        b: "Cascade Sheets Style",
        c: "Cascade Style Sheet",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "4. What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
      question: "5. How to create an unordered list in HTML?",
      a:"<ul>",
      b:"<ol>",
      c:"<li>",
      d:"<i>",
      correct: "a",
    }
  ];
  const result = document.getElementById('result');
  const ans = document.querySelectorAll(".answer");
  const question=document.getElementById("ques");
  const option1=document.getElementById("option1");
  const option2=document.getElementById("option2");
  const option3=document.getElementById("option3");
  const option4=document.getElementById("option4");
  const nextbtn= document.getElementById('nextone');
  const prevbtn= document.getElementById('prevone');
  const start = document.getElementById('start');
  const submit_buttton = document.getElementById('submit');
  const start_min = 5;
  let time_show=start_min*60;
  const time = document.getElementById("timer")
  document.getElementById("ques-container").style.display='none';
  document.getElementById('prevone').style.display='none';
  document.getElementById('submit').style.display='none';

  var qCount=0;
  var correct_ans = 0;
function loadquestion() {
  deselectAnswers();
  const qlist= quizData[qCount];
  question.innerText=qlist.question;
  option1.innerText=qlist.a;
  option2.innerText=qlist.b;
  option3.innerText=qlist.c;
  option4.innerText=qlist.d;
  } 
  function count(){
  setInterval(countdown,1000);
  function countdown(){
    const min = Math.floor(time_show/60);
    let seconds = time_show % 60;
    seconds = seconds< 5 ? '0' + seconds : seconds;
    time.innerHTML = `${min} : ${seconds}`;
    time_show--;
   if(time_show==0){
    result.innerHTML = `<h2 style="padding: 30px 30px 30px 30px;">The marks you Scored = ${correct_ans} out of ${quizData.length}</h2>
        <br>
        <div style="margin-left:45%;">
        <button class="btn btn-success" onclick="location.reload()">Retry</button>
        </div>
        `;
    document.getElementById('timer').style.display='none';
    document.getElementById('prevone').style.display='none';
    document.getElementById('nextone').style.display='none';
    document.getElementById("blockset").style.display='none';
    document.getElementById("submit").style.display='none';
   }
  }
}
function choosing(){
  let answer = undefined;
  ans.forEach((value) =>{
    if(value.checked){
      answer = value.id;
    }
  });
  return answer;
}

function deselectAnswers(){
  ans.forEach((value)=>{
    value.checked=false;
  });
}

start.addEventListener("click",()=>{
  loadquestion();
  document.getElementById("ques-container").style.display='block';
  document.getElementById("start").style.display='none';
  document.getElementById('submit').style.display='block';
  count();

});
  nextbtn.addEventListener("click", () => {
    qCount++;
    loadquestion();
    document.getElementById('prevone').style.display='block';
    if(qCount==(quizData.length)-1){
      document.getElementById('nextone').style.display='none';
    }
   
  });
  
  prevbtn.addEventListener("click", () => {
    //qCount--;
    if(qCount<1){
      document.getElementById('prevone').style.display='none';
    }
    loadquestion();
    if(qCount!=(quizData.length)-1){
      document.getElementById('nextone').style.display='block';

    }
    //correct_ans--;
  });

  submit_buttton.addEventListener("click", () => {
    const answer = choosing();
    if(answer){
      if(answer===quizData[qCount].correct){
        correct_ans++;
      }
      qCount++;
      if(qCount < quizData.length){
        loadquestion();
      }
      else{
        result.innerHTML = `<h2 style="padding: 30px 30px 30px 30px;">The marks you Scored = ${correct_ans} out of ${quizData.length}</h2>
        <br>
        <div style="margin-left:45%;">
        <button class="btn btn-success" onclick="location.reload()">Retry</button>
        </div>
        `;
        document.getElementById('prevone').style.display='none';
        document.getElementById('nextone').style.display='none';
        document.getElementById('timer').style.display='none';
        document.getElementById("blockset").style.display='none';
        document.getElementById("submit").style.display='none';
      }
    }
     
  });

