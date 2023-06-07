// const button = document.querySelector(".ащкь__button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });
document.querySelector(".form__button").addEventListener('click', function() {
    document.querySelector(".form__button").classList.add('active');
    let ths = document.querySelector(".form__button");
    setTimeout(function(){
    ths.innerHTML = "✓"
    }, 700)
    // setTimeout(function () {
        
    // ths.innerHTML = "Subscribe"
    // }, 2000)
    
})
// .delay(1000).classList.remove('active')