$('.navTrigger').on('click touchstart', function () {
    console.log("Botão clicado"); // Adicione esta linha
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
