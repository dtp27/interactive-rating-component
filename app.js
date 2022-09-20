const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

const ratingSelect = document.querySelectorAll(".ratings__label");
const ratingBtn = document.querySelector(".ratings__btn");
const thanksNum = document.querySelector("#thanks__number");

let ratingNum = "";
ratingBtn.style.opacity = "30%";

for (let option of ratingSelect) {
    option.addEventListener('click', function () {
        ratingNum = option.innerText;
        ratingBtn.style.opacity = "100%";
    });
}

ratingBtn.addEventListener('click', function () {
    if (ratingNum !== "") {
        thanksNum.textContent = ratingNum;
    
        rating.style.display = "none";
        thanks.style.display = "flex";
    }
});
