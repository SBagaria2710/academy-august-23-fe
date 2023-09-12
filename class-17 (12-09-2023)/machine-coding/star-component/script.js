const container = document.getElementById("container");
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("count");

container.addEventListener('click', function(e) {
  const rating = e.target.dataset.index;

  for(let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("star-colored");
    } else {
      stars[i].classList.remove("star-colored");
    }
  }

  ratingValue.textContent = rating;
});