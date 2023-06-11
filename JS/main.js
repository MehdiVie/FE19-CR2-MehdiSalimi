const btn_new=document.getElementById("btn_new");

btn_new.addEventListener("click",function(){
    window.open("../form.html", "_blank", "toolbar=no,scrollbars=no,resizable=no,top=500,left=500,width=900,height=400");
});


const myForm= document.getElementById("myForm");
let title;
let photo;
let desc;
let priority;
let id=0;
let globalArr = [];

class Task {
    title;
    photo_url;
    desc;
    priority;
    id;

    constructor(title,photo_url,desc,priority) {
        
        this.title = title;
        this.photo = photo_url;
        this.desc = desc;
        this.priority = priority;
        this.id = globalArr.length+1;

    }

    push() {

        globalArr.push(this);

    }

}

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    title = document.getElementById("title").value;
    photo = document.getElementById("photo").value;
    desc = document.getElementById("desc").value;
    priority = document.getElementById("priority").value;

    new Task(title,photo,desc,priority).push();

    
    /*
    for (let obj of globalArr) {
        console.log(obj);
        obj.showData();
    }    

    

    let data = "{ \"id\" : " + id + " , " +"\"title\" : \"" + String(title) + "\" , " + "\"image_url\" : \"" + String(photo) + "\" , " + "\"desc\" : \"" + String(desc) + "\" , " + "\"priority\": " + Number(priority) + " }"
    */
  });

  const content =document.querySelector("#content");

  for (let obj of globalArr) {
      content.innerHTML += `
      <div class="card" style="width: 18rem;">
      <div class="card-body item_header container">
        
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
      <img class="card-img-top" src="../images/${obj["photo_url"]}" alt="Card image cap">
      <div class="card-body">
            <h5 class="card-title">${obj["title"]}</h5>
            <form id="delform_${obj["id"]}">
                <input type="hidden" id="delete_id" value="${obj["id"]}">
            </form>
            <form id="doneform_${obj["id"]}">
            <input type="hidden" id="done_id" value="${obj["id"]}">
        </form>
            <p class="card-text">${obj["desc"]}</p>
      </div>
      <ul class="list-group list-group-flush item_priority">
            <li class="list-group-item">
            <img src="../images/danger.png" alt="">
            Priority level:
            <span>${obj["priority"]}</span></li>
            <li class="list-group-item">
            <img src="./images/calender.jpg" alt="">
           Deadline:
           27.12.2023</li>
      </ul>
      <div class="card-body item_footer">
        <img onclick="javascript:document.delform_${obj["id"]}.submit()" src="../images/delete.jpg" >
        <img onclick="javascript:document.doneform_${obj["id"]}.submit()" src="../images/done_1.jpg" >
      </div>
      </div>
      `;
  }
  
  