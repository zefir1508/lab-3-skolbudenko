let button = document.getElementById("task2");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");

function ReverseContent()
{
    let temp = content1.innerText;
    content1.innerText = content2.innerText;
    content2.innerText = temp;
}

button.addEventListener("mousedown", ReverseContent);
//button.addEventListener("mouseup", ReverseContent);