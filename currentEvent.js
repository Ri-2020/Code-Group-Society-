
var currentEvents = [
    {
        title : "Loops",
        content: "Make a simple program you just have to use loop inside a loop (nested loop) in your program.",
        link : "https://forms.gle/TtLrB85X8VfMnt5F9",
        date: "27 september, 2021",
        day: "01"
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




