const color = document.querySelectorAll(".clr");



color.forEach( function clrchange(clr) {
    clr.addEventListener("mouseover", function (e) {
       clr1 = e.currentTarget.classList;
        document.body.style.backgroundColor = clr1[1];
    });
    
        
    });