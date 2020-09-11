function init() {
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelector('.page');
    const backgrounds = ['radial-gradient(#2b3760, #0b1023)', 'radial-gradient(#4e3022, #161616)', 'radial-gradient(#4e4342, #161616)'];

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
        });
    });
    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add("active");
    }
    function mextSlide(pageNumber) {

    }
}
init();