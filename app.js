let adviceGen = document.querySelector(".advice");
let next = document.querySelector(".next");

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        adviceGen.innerText = `"${data.slip.advice}"`;
    })
    .catch((error) => console.error('Error fetching advice:', error));
}
fetchAdvice();

next.addEventListener('click', function() {
    fetchAdvice();
});


