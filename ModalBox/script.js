window.onload = function(){
    let btn = document.getElementById("btn-toogle");
    let modalCtn = document.querySelector("#modalCtn");
    let modalOverlay = document.querySelector("#modalCtn .modal-overlay");

    btn.addEventListener("click",function(e){
        modalCtn.classList.toggle("hidden");
    },false);
    modalOverlay.addEventListener("click",function(e){
        modalCtn.classList.toggle("hidden");
    },false);
}