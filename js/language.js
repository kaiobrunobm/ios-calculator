$(function() {
    $(".en").click(function() { 
        // HEADER
    $(".logo-big").text("Portifolio");

        // MAIN
        $(".main-title").text("IOS Calculator replica")

        // FOTTER
    $(".footer-text ").text("Designed & Built by Kaio Bruno");

    $(".language-selected").removeClass("change-br");
    $(".language-selected").addClass("change-en");


    });
});
$(function() {
    $(".br").click(function() { 


        // HEADER
    $(".logo-big").text("Portifólio")

    // MAIN
    $(".main-title").text("Replica da calculadora IOS")

        //FOTTER 
    $(".footer-text ").text("Projetado & Criado por Kaio Bruno")

    $(".language-selected").removeClass("change-en")
    $(".language-selected").addClass("change-br")
    
    })
})