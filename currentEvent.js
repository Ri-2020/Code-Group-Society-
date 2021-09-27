
var currentEvents = [
    {
        title : "Loops",
        content: "Make a simple program you just have to use loop inside a loop (nested loop) in your program.",
        link : "https://forms.gle/TtLrB85X8VfMnt5F9",
        date: "27 september, 2021",
        day: "01"
    },
    {
      title : "Function",
      content: "Make a program with two functions the second function will be called inside the first function.",
      link : "https://forms.gle/fj6YUcPGZm9TVjQ39",
      date: "28 september, 2021",
      day: "02"
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
    <div class="btn">Submit</div>
  </a>`}
}

renderTasks();




