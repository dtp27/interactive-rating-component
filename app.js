const ratings = {
    score: "",
    potentialRatings: document.querySelector(".ratings__list"),
    button: document.querySelector(".ratings__btn")
};
const ratingsNum = document.querySelector(".ratings__number");

const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");

ratings.potentialRatings.addEventListener('click', function (e) {
    ratings.score = e.path[0].textContent;
    e.path[0].style.backgroundColor = "var(--clr-light-grey)";
    e.path[0].style.color = "var(--clr-white)";

    /* Make sure previous selection is reset to base color scheme */
    for (let li of e.path[1].children) {
        li.style.backgroundColor = "var(--clr-shaded-dark-blue)";
        li.style.color = "var(--clr-medium-grey)";
    }

    e.path[0].style.backgroundColor = "var(--clr-light-grey)";
    e.path[0].style.color = "var(--clr-white)";
});

ratings.button.addEventListener('click', function (e) {
    if (ratings.score !== "") {
        ratingsNum.textContent = ratings.score;
    
        rating.style.display = "none";
        thanks.style.display = "flex";
    }
});
