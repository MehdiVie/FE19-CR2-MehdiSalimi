const myForm= document.getElementById("myForm");
let title;
let photo;
let desc;
let priority;
let id=0;

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    title = document.getElementById("title").value;
    photo = document.getElementById("photo").value;
    desc = document.getElementById("desc").value;
    priority = document.getElementById("priority").value;
    fetch("database.txt")
    .then((res) => res.text())
    .then((text) => {
      // do something with "text"
     })
    //.catch((e) => {
        id=1;
        saveFile();
        //console.error(e);
    //});
    
    // handle submit
  });

  let saveFile = () => {
    
    let data = "{ id: " + id + " , " +"title: " + String(title) + " , " + "image_url: " + String(photo) + " , " + "desc: " + String(desc) + " , " + "priority: " + number(priority) + " }"
    console.log(data); 
    //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = 'database.txt';
    
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    console.log(newLink);
    /*
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();*/
};
  