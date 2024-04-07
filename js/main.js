// В файле main.js
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.dannye_text,.dannye_text_2,.dannye_title,.main_container_img');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('show');
        }
    });
});