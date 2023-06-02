const data = [{
    id: 1,
    name: "conny iamazon",
    image: "images/people03.jpg",
    job: "Front-end developer",
    text: "Working with UNI-SOKO ecommerce was a game-changer for our web development project. Their expertise and attention to detail resulted in a visually stunning and highly functional website."
},
{
    id: 2,
    name: "alexa white",
    image: "images/user-1.png",
    job: "Web designer",
    text: "Working with UNI-SOKO ecommerce was a game-changer for our web development project. Their expertise and attention to detail resulted in a visually stunning and highly functional website."
},
{
    id: 3,
    name: "collins steve",
    image: "images/user-2.png",
    job: "software engineer",
    text: "Working with UNI-SOKO ecommerce was a game-changer for our web development project. Their expertise and attention to detail resulted in a visually stunning and highly functional website."
},
{
    id: 4,
    name: "jane ayo",
    image: "images/user-3.png",
    job: "backend developer",
    text: "Working with UNI-SOKO ecommerce was a game-changer for our web development project. Their expertise and attention to detail resulted in a visually stunning and highly functional website."
}];

const img = document.getElementById('personimg');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.fa-chevron-left')
const nextBtn = document.querySelector('.fa-chevron-right')

// set starting item
let currentItem = 0;

// load initial
window.addEventListener("DOMContentLoaded", function() {
    const item = data[currentItem];
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    // console.log("user log")
});





