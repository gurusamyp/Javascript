let form = document.getElementById("form");
let input = document.getElementById("task");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "post con't be blank";
        console.log("Failed");
    } else {
        console.log("success");
        // msg.innerHTML = input.value;
        acceptData();
        createPost();
    }
}

let data = {};

let acceptData = () =>{
    data["text"] = input.value;
    console.log(data);
}
let createPost = () => {
    posts.innerHTML += ` 
                <div class = "postmsg">
                    <p>${data.text}</p>
                    <span class="options">
                        <i onclick="editPost(this)" class="fas fa-edit"></i>
                        <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
                </div>
                `;
                input.value ="";
}

let deletePost=(e) =>{
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}