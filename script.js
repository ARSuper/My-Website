document.addEventListener("scroll", () => {
    const news = document.querySelector(".scroll-text.news");
    const discography = document.querySelector(".scroll-text.discography");

    const windowHeight = window.innerHeight;
    const newsOffset = news.getBoundingClientRect().top;
    const discographyOffset = discography.getBoundingClientRect().top;

    if (newsOffset < windowHeight - 100) {
        news.classList.add("visible");
    }

    if (discographyOffset < windowHeight - 100) {
        discography.classList.add("visible");
    }
});
