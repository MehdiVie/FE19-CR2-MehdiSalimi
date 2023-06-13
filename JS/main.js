let tasks = [
    { 
    taskName: "shopping", 
    image: "images/shopping.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", 
    importance: 0   
    },
    {
    taskName: "Take the dog for a Walk", 
    image: "images/dog_for_walk.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0      
    },
    {
    taskName: "Yoga", 
    image: "images/yoga.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0   
    },
    {
    taskName: "pickup passenger from airport", 
    image: "images/airport.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0      
    },
    {
    taskName: "Learn Javascript", 
    image: "images/javascript.jpg", 
    description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates interactive maps, animated 2D/3D graphics, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ", 
    importance: 0      
    },
    {
    taskName: "Read BookLearn CSS", 
    image: "images/css.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0      
    },
    {
    taskName: "Reading Book", 
    image: "images/book.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0      
    },
    {
    taskName: "Meeting", 
    image: "images/meeting.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ", 
    importance: 0     
    },
    {
    taskName: "Holiday", 
    image: "images/holiday.jpg", 
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,", 
    importance: 0     
    }
    ]

draw_content();

function draw_content() {

let content =document.getElementById("content");
content.innerHTML ='';

for (let obj of tasks) {
      
    content.innerHTML += `

<div class="card item" style="width: 19rem;">
    <img class="card-img-top" src="${obj["image"]}" >
    <div>
        <h5 class="card-title item_title">${obj["taskName"]}</h5>
        <p class="card-text item_desc">${obj["description"]}</p>
    </div>
    <ul class="list-group list-group-flush item_priority">
        <li class="list-group-item">
            <img src="images/danger.png" >
                Priority level:
                <span class="importance"  
                onclick="javascript:importance(${tasks.indexOf(obj)})">${obj["importance"]}</span>
        </li>
        <li class="list-group-item">
            <img src="images/calender.jpg" >
                Deadline: 5.7.2023
        </li>
        <li class="list-group-item  item_footer">
            <img src="images/delete.jpg" >
            <img src="images/done_2.jpg" >
        </li>
</ul>
</div>
    `;
    let span=document.getElementsByClassName("importance")[tasks.indexOf(obj)];

    switch (true) {
          case (obj["importance"] < 2):
              span.style.backgroundColor="yellow";
              span.style.color="black";
              break;
          case (obj["importance"] < 4):
              span.style.backgroundColor="green";
              span.style.color="white";
              break;
          case (obj["importance"] < 6):
              span.style.backgroundColor="red";
              span.style.color="white";
              break;
    }
    
    }

}

function importance(id) {

    let span=document.getElementsByClassName("importance")[id];


    if (Number(span.innerHTML) == 5)
    {
        span.innerHTML=0;
    }
    else if (Number(span.innerHTML) < 5) {

        span.innerHTML=Number(span.innerHTML)+1;
    }

    switch (true) {
        case (Number(span.innerHTML) < 2):
            span.style.backgroundColor="yellow";
            span.style.color="black";
            break;
        case (Number(span.innerHTML) < 4):
            span.style.backgroundColor="green";
            span.style.color="white";
            break;
        case (Number(span.innerHTML) < 6):
            span.style.backgroundColor="red";
            span.style.color="white";
            break;
  }

    tasks[id].importance= Number(span.innerHTML);
    
}

function sort() {

    tasks.sort((a, b) => (a.importance > b.importance) ? 1 : -1);

    draw_content();
}

  