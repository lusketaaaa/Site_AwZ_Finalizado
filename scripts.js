document.addEventListener("DOMContentLoaded", function() {
    
    var sobreButton = document.querySelector('.nav-itens li:nth-child(2) a');

    var descricaoParagrafo = document.querySelector('.aboutusparagraph');

    sobreButton.addEventListener('click', function() {
        descricaoParagrafo.scrollIntoView({ behavior: 'smooth' });
    });
});

var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {

    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0; 
}

function scrollToForm() {

    var container = document.getElementById("contact-form");

    container.scrollIntoView({ behavior: 'smooth' });
}