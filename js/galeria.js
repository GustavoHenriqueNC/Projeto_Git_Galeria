// Zoom na imagem ao passar o mouse

const itens = document.querySelectorAll(".galeria .galeria-item")

itens.forEach(function(item) {
    item.addEventListener("mouseenter", function(){
        item.style.scale= "1.3";
        item.style.zIndex = "1";
        item.style.transitionDuration = "0.4s";
    });

    item.addEventListener("mouseleave", function(){
        item.style.scale = "1.0";
        item.style.zIndex = "auto";
    });
});