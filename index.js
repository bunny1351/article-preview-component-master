let shareit = document.getElementById("share");
let contact = document.getElementsByClassName("contact");
let share = document.getElementsByClassName("share-block");

shareit.addEventListener("click", Share);
    function Share(){
        contact.style.display = "none";
        share.style.display = "block";
    }

    let x  = window.matchMedia("(min-width: 768px)");
    if(x.matches){
        shareit.addEventListener("click", ()=>{
            if(share.style.visibility === "hidden"){
                share.style.visibility = "visible";
            }
            else{
                share.style.visibility = "hidden";
            }
        })
    }

