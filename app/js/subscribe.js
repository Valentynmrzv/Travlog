// const button = document.querySelector(".ащкь__button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });
document.querySelector(".form__button").addEventListener('click', function () {
    document.querySelector(".form__button").classList.remove('deactivate');
    document.querySelector(".form__button").classList.add('active');
    let ths = document.querySelector(".form__button");
    setTimeout(function () {
        ths.innerHTML = "✓"
    }, 700)
    setTimeout(function () {
        document.querySelector(".form__button").classList.remove('active');
        document.querySelector(".form__button").classList.add('deactivate');
        ths.innerHTML = "Subscribe"
    }, 4700)
    setTimeout(function () {
        document.querySelector(".form__button").classList.remove('active');
        document.querySelector(".form__button").classList.remove('deactivate');
        ths.innerHTML = "Subscribe"
    }, 6000)
    
});
