const reviews = 
[

    {
        id : 1,
        personImg: "/Review/christopher-campbell-rDEOVtE7vOs-unsplash.jpg",
        author : "Hala",
        job : "UI Designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos asperiores debitis error quisquam quidem rerum consequuntur explicabo minus soluta, illum ut. Perspiciatis iste consequuntur, enim nostrum itaque sapiente possimus?"
    },
    {
        id : 2,
        personImg: "/Review/kirill-balobanov-Ef3AOkt6hHg-unsplash.jpg",
        author : "kirill Balobanov",
        job : "UX Developer",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos asperiores debitis error quisquam quidem rerum consequuntur explicabo minus soluta, illum ut. Perspiciatis iste consequuntur, enim nostrum itaque sapiente possimus?"
        },
    {
        id : 3,
        personImg: "/Review/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        author: "Michael Dam",
        job : "MERN Developer",
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos asperiores debitis error quisquam quidem rerum consequuntur explicabo minus soluta, illum ut. Perspiciatis iste consequuntur, enim nostrum itaque sapiente possimus?"

    },
    {
    id : 4,
    personImg: "/Review/ben-blennerhassett-ZXfUUM_LR0k-unsplash.jpg",
    author : "Ben Blenner",
    job : "Software Developer",
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos asperiores debitis error quisquam quidem rerum consequuntur explicabo minus soluta, illum ut. Perspiciatis iste consequuntur, enim nostrum itaque sapiente possimus?"
    }
]

const id = document.getElementById("id");
const personImg = document.getElementById("personImg");
const jon = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const sprBtn = document.querySelector(".spr-btn");

let customReview = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})
function showPerson(){
const item = reviews[customReview];

personImg.src = item.personImg;
job.textContent = item.job;
author.textContent = item.author;
info.textContent = item.info;
}
 nextBtn.addEventListener("click", function(){
    customReview++;
    if(customReview>reviews.length-1){
        customReview=0;
    }
    showPerson();
 })

 prevBtn.addEventListener("click",function(){
    customReview--
    if(customReview<0){
        customReview = reviews.length-1;
    }
    showPerson();
 })

 sprBtn.addEventListener("click",function(){
    customReview = Math.floor(Math.random() * reviews.length);
    console.log(customReview);
    showPerson();

 })