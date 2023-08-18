const sideBar = document.querySelector(".sideBar")
const faXmark = document.querySelector(".fa-xmark")
const header = document.querySelector("header")
const overlay = document.querySelector("#overlay")

function toggleSidebar() {
    sideBar.classList.add("closeSide")
    document.body.setAttribute("style", "overflow:hidden")
    overlay.classList.add("overlay-open")
}
faXmark.addEventListener("click", close_sidebar)
overlay.onclick = close_sidebar
function close_sidebar() {
    sideBar.classList.remove("closeSide")
    document.body.setAttribute("style", "overflow:visible");
    overlay.classList.remove("overlay-open")
}



$('.brands-items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }

    ]
});