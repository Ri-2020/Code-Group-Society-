
var currentEvents = [
    {
        title : "Loops",
        content: "Make a simple program you just have to use loop inside a loop (nested loop) in your program.",
        link : "https://forms.gle/tTP7Tixr9Ag9Y7vB8",
        date: "27 september, 2021",
        btn: "Submit",
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
    },
    {
      title : "Analyzer1",
      content: "Make a program in which user will give an input of an integer. You have to analyze that number and write some outputs such that the number is positive or negative , write its binary form it is prime or not , is it armstrong number. (You can add more if you want) ",
      link : "https://forms.gle/FoFeg7GUBJw8zm1aA",
      date: "30 september, 2021",
      btn: "Submit",
      day: "04"
    },
    {
      title : "Analyzer2",
      content: "Make a program in which user will give an input of an string. You have to analyze the length of the string , print the reverse that string , print the ascii codes of all the letter of that string. (Add more if you want). ",
      link : "https://forms.gle/NmcaPwdv7BCFyRag9",
      date: "1 October, 2021",
      btn: "Submit",
      day: "05"
    },
    {
      title : "Analyzer3",
      content: "Make a program in which user will give an input of an integer array. you have to print that how many of them are odd , even , positive , negative , zeros , primes, mean of all numbers",
      link : "https://forms.gle/aqWPc4mUi9r1FMWM8",
      date: "2 October, 2021",
      btn: "Submit",
      day: "06"
    },
    {
      title : "Electricity",
      content: "Make a program in which you has to create voltage/ Resistance/ Current using the formula (V=IR) means. You  will have 2 inputs out of those three and then find the remian third quantity",
      link : "https://forms.gle/ApTCuuQ4jV5Xwr3A6",
      date: "3 October, 2021",
      btn: "Submit",
      day: "07"
    }

    

];

function renderTasks(){
    var contt = document.getElementById("task");
    contt.innerHTML = "";
    let itr = 1;
    for( i in currentEvents){
    contt.innerHTML += `<a target="blank" href="${currentEvents[i].link}" class="taskcard">
    <div class="cardInnerText">
    <div class="cardtitle">
      <h1>${currentEvents[i].day}</h1>
      <h3>${currentEvents[i].title}</h3>
    </div>
    <p class="date"><i>${currentEvents[i].date}</i></p>
    <p class="content">
    ${currentEvents[i].content}
    </p>
    </div>
    <div class="btn">${currentEvents[i].btn}</div>
  </a>`}
}

renderTasks();




