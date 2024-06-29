const images = document.querySelectorAll(".image-container img");

const observerGlance = new IntersectionObserver((focus, observer) => {
    focus.forEach(eachImage => {
        if (!eachImage.isIntersecting) return;
        const sizeChange = eachImage.target;
        sizeChange.src = sizeChange.src.replace("w=10&","w=1000&");
    })
},{})

images.forEach((size) => {
    observerGlance.observe(size);
});