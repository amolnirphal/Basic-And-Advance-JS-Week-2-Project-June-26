let count = 0;

const countValue = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const clear = document.getElementById("clear");
const error = document.getElementById("error");

function updateUI() {
    countValue.innerText = count;

    if (count === 0) {
        clear.style.display = "none";
    } else {
        clear.style.display = "inline-block";
    }

    error.style.display = "none";
}

increment.addEventListener("click", function () {
    count++;
    updateUI();
});

decrement.addEventListener("click", function () {
    if (count === 0) {
        error.style.display = "block";
        return;
    }

    count--;
    updateUI();
});

clear.addEventListener("click", function () {
    count = 0;
    updateUI();
});

updateUI();