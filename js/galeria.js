const itens = document.querySelectorAll(".galeria-item")

itens.forEach(function(item) {

    // Zoom na imagem ao passar o mouse

    item.addEventListener("mouseenter", function(){
        item.style.scale= "1.3";
        item.style.zIndex = "1";
        item.style.transitionDuration = "0.4s";
    });

    item.addEventListener("mouseleave", function(){
        item.style.scale = "1.0";
        item.style.zIndex = "auto";
    });

    // Pop-up após clicar na imagem

    const popup = document.querySelector("#popup");
    const page = document.querySelector(".galeria");

    item.addEventListener("click", function() {
        const full_img = item.querySelector("img").getAttribute("src");

        page.style.opacity = "0.2";
        page.style.transitionDuration = "0.4s";
        page.style.position = "relative";
        
        popup.querySelector("img").setAttribute("src", full_img);
        popup.removeAttribute("hidden");
        popup.style.transitionDuration = "0.4s";
        popup.style.zIndex = "1";
    });

    // Fechar pop-up
    const close= document.querySelector("#close");

    close.addEventListener("click", function() {
        popup.setAttribute("hidden", "");
        page.style.opacity = "1.0";
        
    })


});
