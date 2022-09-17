window.onload = function(){
    let btn = document.getElementById("btn-toogle");
    let griditems = document.querySelectorAll(".grid-item");
    let img = document.createElement("img");
    img.src = "1.jpg";
    let xincrement = img.width / 4;
    let yincrement = img.height / 4;
    let posX = 0,posY = 0;
    let i=0;
    while(i<16){
        let index=i+1;
        if((index % 4 == 1) && index != 1){
            posX = 0;
            posY -= yincrement;
        }
        griditems[i].style.backgroundPosition = posX + "px " + posY + "px" ;
        griditems[i].style.width = xincrement + "px" ;
        griditems[i].style.height = yincrement + "px" ;
        posX -= xincrement;
        i++;
    }

    btn.addEventListener("click",function(e){
        griditems.forEach((elem) => {
            console.log(elem);
            elem.classList.toggle("effect");
        });
    },false);
}