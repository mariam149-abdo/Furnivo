const filterbuttons =document.querySelectorAll(".filter-buttons button");
const categories=document.querySelectorAll(".cards > div");

filterbuttons.forEach(button=> {
    button.addEventListener("click",()=>{
        const filter =button.dataset.filter;

        categories.forEach(category =>{
            if(filter==="all"){
                category.style.display="";
            }
            else if (category.classList.contains(filter)){
                category.style.display="";
                }
                else{
                category.style.display="none";
            }
        });
    });
});
const shop =document.querySelectorAll("#shop .filter-buttons button");
window.addEventListener("scroll", () =>{
    shop.forEach(button => {
    const rect=button.getBoundingClientRect();

        if (rect.top < window.innerHeight -100){
        button.classList.add("animationshop");
        }   
    });
});

const msg=document.querySelector(".message");
const btn=document.querySelectorAll("#shop .cards button");

btn.forEach(button =>{
    button.addEventListener("click",()=>{
        msg.classList.remove("hidden");
    setTimeout(()=>{
        msg.classList.add("hidden");
    },1000);
    });
});

const video =document.getElementById=("video");
window.addEventListener("scroll", () =>{
    const rect = video.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100){
        video.play();
        } 
        else{
            video.pause();
        }  
    });