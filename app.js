//using selectors inside the element

let questions = document.querySelectorAll(".question");
console.log(questions);
questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click",()=>{
        questions.forEach((item)=>{
            if(item!==question){
                item.classList.remove("show-text");
            }
        })
      question.classList.toggle("show-text");
    })
})



// traversing the dom

// const buttons = document.querySelectorAll(".question-btn");
// buttons.forEach((btn)=>{
//     btn.addEventListener("click", event=>{
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })