let title;
let photo;
let desc;
let priority;
let id=0;
var globalArr = [];
var sorted_globalArr = [];
var str_src;


class Task {
    id;
    title;
    photo_url;
    desc;
    priority;
    dead_line;
    done;
    active;

    constructor(title,photo_url,desc,priority,dead_line) {
        
        this.active=true;
        this.id = globalArr.length+1;
        this.title = title;
        this.photo_url = photo_url;
        this.desc = desc;
        this.priority = priority;
        this.dead_line = dead_line;
        this.done=false;

    }

    push() {

        globalArr.push(this);

    }

}

const myForm= document.getElementById("submit");
myForm.addEventListener("click", function()  {
    
    title = document.getElementById("title").value;
    photo = document.getElementById("photo").value;
    desc = document.getElementById("desc").value;
    priority = document.getElementById("priority").value;
    dead_line = document.getElementById("deadline").value;

    let arr_photo=photo.split("\\");
    
    let task =new Task(title,String(arr_photo[2]),String(desc),Number(priority),String(dead_line));
    task.push();
    
    draw_content();
  });


function draw_content() {



let content =document.getElementById("content");
content.innerHTML ='';
for (let obj of globalArr) {

if (obj["active"]==true) {


    if (obj["done"] == false) {

        str_src="done_1.jpg";
    
    }
    else {
    
        str_src="done_2.jpg";
    
    }
      
      content.innerHTML += `

      <div class="item">
      
      <div class="item_header">
      
            <div class="task">
                <img src="../images/task.jpg" alt="">
            </div>
            <div class="save">
                <img src="../images/save.jpg" alt="">
            </div>
            <div class="dots">
                <img src="../images/3dot.png" >
            </div>

      </div>

      <div class="item_photo">
        <img src="../images/${obj["photo_url"]}" >
      </div>

      <div class="item_title">
        <h5>${obj["title"]}</h5>
      </div>

      <div class="item_desc">
        <p>${obj["desc"]}</p>
        <hr>
      </div>

      <div class="item_priority">
            <img src="../images/danger.png" >
            Priority level:
            <span  
            id="span_${obj["id"]}"
            onclick="javascript:importance(${obj["id"]})">${obj["priority"]}</span>
            <br>
            <img src="./images/calender.jpg" >
            Deadline: ${obj["dead_line"]}
      </div>

      <div class="item_footer">

        <a href="javascript:del_item(${obj["id"]})">
            <img src="../images/delete.jpg" >
        </a>
        
        <a href="javascript:done_item(${obj["id"]})">
            <img id="done_${obj["id"]}" src="../images/${str_src}" >
        </a>
        
      </div>

      </div>
      `;
    let span=document.getElementById("span_"+String(obj["id"]));

    switch (true) {
          case (obj["priority"] < 2):
              span.style.backgroundColor="yellow";
              span.style.color="black";
              break;
          case (obj["priority"] < 4):
              span.style.backgroundColor="green";
              span.style.color="white";
              break;
          case (obj["priority"] < 6):
              span.style.backgroundColor="red";
              span.style.color="white";
              break;
  
    }
    }
}
}

function del_item(id) {

    const response = confirm("Are you sure you want to delete "+globalArr[Number(id)-1].title+"?");

    if (response) {

        globalArr[Number(id)-1].active=false;
        draw_content();

    }

}

function done_item(id) {

    globalArr[Number(id)-1].done=!(globalArr[Number(id)-1].done);

    if (globalArr[Number(id)-1].done == false) {
        document.getElementById("done_"+String(id)).src = "../images/done_1.jpg";
    }
    else {
        document.getElementById("done_"+String(id)).src = "../images/done_2.jpg";
    }

}

function importance(id) {

    let span=document.getElementById("span_"+String(id));

    if (Number(span.innerHTML) == 5)
         {

        span.innerHTML=0;

    }
    else if (Number(span.innerHTML) < 5) {

        span.innerHTML=Number(span.innerHTML)+1;

    }

    if (Number(span.innerHTML)<2) {
        
        span.style.backgroundColor="yellow";
        span.style.color="black";

    } else if (Number(span.innerHTML) < 4) {
        
        span.style.backgroundColor ="green";
        span.style.color="white";

    } else if (Number(span.innerHTML) < 6) {
       
        span.style.backgroundColor ="red";
        span.style.color="white";

    }

    globalArr[Number(id)-1].priority=Number(span.innerHTML);
    
}

function sort() {

    sorted_globalArr=globalArr;
    sorted_globalArr.sort((a, b) => (a.priority > b.priority) ? 1 : -1);

    let content =document.getElementById("content");
    content.innerHTML ='';

    for (let obj of sorted_globalArr) {
    
    if (obj["active"]==true) {
    
    
        if (obj["done"] == false) {
    
            str_src="done_1.jpg";
        
        }
        else {
        
            str_src="done_2.jpg";
        
        }
          
          content.innerHTML += `
    
          <div class="item">
          
          <div class="item_header">
          
                <div class="task">
                    <img src="../images/task.jpg" alt="">
                </div>
                <div class="save">
                    <img src="../images/save.jpg" alt="">
                </div>
                <div class="dots">
                    <img src="../images/3dot.png" >
                </div>
    
          </div>
    
          <div class="item_photo">
            <img src="../images/${obj["photo_url"]}" >
          </div>
    
          <div class="item_title">
            <h5>${obj["title"]}</h5>
          </div>
    
          <div class="item_desc">
            <p>${obj["desc"]}</p>
            <hr>
          </div>
    
          <div class="item_priority">
                <img src="../images/danger.png" >
                Priority level:
                <span  
                id="span_${obj["id"]}"
                onclick="javascript:importance(${obj["id"]})">${obj["priority"]}</span>
                <br>
                <img src="./images/calender.jpg" >
                Deadline: ${obj["dead_line"]}
          </div>
    
          <div class="item_footer">
    
            <a href="javascript:del_item(${obj["id"]})">
                <img src="../images/delete.jpg" >
            </a>
            
            <a href="javascript:done_item(${obj["id"]})">
                <img id="done_${obj["id"]}" src="../images/${str_src}" >
            </a>
            
          </div>
    
          </div>
          `;
        let span=document.getElementById("span_"+String(obj["id"]));
    
        switch (true) {
              case (obj["priority"] < 2):
                  span.style.backgroundColor="yellow";
                  span.style.color="black";
                  break;
              case (obj["priority"] < 4):
                  span.style.backgroundColor="green";
                  span.style.color="white";
                  break;
              case (obj["priority"] < 6):
                  span.style.backgroundColor="red";
                  span.style.color="white";
                  break;
      
        }
        }
    }
    globalArr = sorted_globalArr;

    globalArr.sort((a, b) => (a.id > b.id) ? 1 : -1);
}
  