function renderNotices(){
    var cont = document.getElementById("notices");
    cont.innerHTML = ""
    for( i in notices){
        cont.innerHTML += `<a class="cardlink" target="blank" href="${notices[i].link}">
        <div class="eventsCards">
            <img src="${notices[i].img}" alt="Card Image">
            <div class="eventtext">
                <h4>${notices[i].title}</h4>
                <p>${notices[i].content}</p>
                <i>${notices[i].date}</i>
            </div>
        </div>
    </a>`
    }
}

function renderEvents(){
    var cont = document.getElementById("eventss");
    cont.innerHTML = ""
    for( i in events){
        cont.innerHTML += `<a class="cardlink" target="blank" href="${events[i].link}">
        <div class="eventsCards">
            <img src="${events[i].img}" alt="Card Image">
            <div class="eventtext">
                <h4>${events[i].title}</h4>
                <p>${events[i].content}</p>
                <i>${events[i].date}</i>
            </div>
        </div>
    </a>`
    }
}


renderEvents();
renderNotices();

