
var currentEvents = [
    {
        title : "Loops",
        content: "Make a simple program you just have to use loop inside a loop (nested loop) in your program.",
        link : "https://docs.google.com/document/d/e/2PACX-1vQ3mBmzJvswVUJxXlC3FCAQKw6lFdZAm6f0dv2QhuySdE4JqySHxZqGAQKQzM0X-nkuiZSSDcDj0s3b/pub",
        date: "27 september, 2021",
        btn: "Answer",
        day: "01"
    },
    {
      title : "Function",
      content: "Make a program with two functions the second function will be called inside the first function.",
      link : "https://forms.gle/fj6YUcPGZm9TVjQ39",
      date: "28 september, 2021",
      btn: "Submit",
      day: "02"
    },
    {
      title : "Recursion",
      content: "Make a program and use recursion in it, Do not make Factiorial Program.",
      link : "https://forms.gle/DCGnTkSSzCN6R2Zx5",
      date: "29 september, 2021",
      btn: "Submit",
      day: "03"
    }

];

function renderTasks(){
    var contt = document.getElementById("task");
    contt.innerHTML = "";
    let itr = 1;
    for( i in currentEvents){
    contt.innerHTML += `<a target="blank" href="${currentEvents[i].link}" class="taskcard">
    <div class="cardtitle">
      <h1>${currentEvents[i].day}</h1>
      <h3>${currentEvents[i].title}</h3>
    </div>
    <p class="date"><i>${currentEvents[i].date}</i></p>
    <p class="content">
    ${currentEvents[i].content}
    </p>
    <div class="btn">${currentEvents[i].btn}</div>
  </a>`}
}

renderTasks();




