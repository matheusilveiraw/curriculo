document.addEventListener("DOMContentLoaded", function() {
    var collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(function(collapsible) {
        var header = collapsible.querySelector("h2");
        var content = collapsible.querySelector(".desaparece");

        // Adiciona um evento de clique no cabeçalho
        header.addEventListener("click", function() {
            // Alternando a classe 'active' na div de conteúdo
            content.classList.toggle("active");
        });
    });
});