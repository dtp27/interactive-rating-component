const ratings = {
    rating: "",
    potentialRatings: document.querySelector(".ratings__list"),
    button: document.querySelector(".ratings__btn")
};
const ratingsNum = document.querySelector(".ratings__number");

const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

ratings.potentialRatings.addEventListener('click', function (e) {
    ratings.score = e.path[0].textContent;
});

ratings.button.addEventListener('click', function (e) {
    ratingsNum.textContent = ratings.score;

    rating.style.display = "none";
    thanks.style.display = "flex";
});


