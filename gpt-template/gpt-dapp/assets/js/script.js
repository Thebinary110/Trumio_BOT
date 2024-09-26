/*====================
   01. Ratio js
=======================*/
window.addEventListener('load', () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (i = 0; i < bgImg.length; i++) {

        let bgImgEl = bgImg[i];
        
        if (bgImgEl.classList.contains('bg-top')) {
            bgImgEl.parentNode.classList.add("b-top");
        } else if (bgImgEl.classList.contains('bg-bottom')) {
            bgImgEl.parentNode.classList.add("b-buttom");
        } else if (bgImgEl.classList.contains('bg-center')) {
            bgImgEl.parentNode.classList.add("b-center");
        } else if (bgImgEl.classList.contains('bg-left')) {
            bgImgEl.parentNode.classList.add("b-left");
        } else if (bgImgEl.classList.contains('bg-right')) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        /// Lazyloader Class Add ///
        if (bgImgEl.classList.contains('blur-up')) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        /// Size Class Add ///
        if (bgImgEl.classList.contains('bg_size_content')) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        /// Ratio Style ///
        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = 'none';
        bgImgEl.parentNode.setAttribute("style", `
        background-image: url(${bgSrc});
        background-size:cover;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        `);
    }
});


/*===================== 
02. Tap To Top Js 
==========================*/
const tapTopBtn = document.querySelector(".tap-to-top-button")
const tapTopTopBox = document.querySelector(".tap-to-top-box")
tapTopBtn ? .addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})
if (tapTopTopBox) {
    window.onscroll = function() {
        if (pageYOffset >= 1000) {
            tapTopTopBox.classList.remove("hide")
        } else {
            tapTopTopBox.classList.add("hide")
        }
    }
}

/*=====================
 04. Footer Accordion Js 
==========================*/
const footerButton = document.querySelectorAll(".footer-title");
const showNav = document.querySelector(".footer-content");
for (var i = 0; i < footerButton.length; ++i) {
    footerButton[i].addEventListener('click', function() {
        this.parentNode.classList.toggle('open');
    })
}