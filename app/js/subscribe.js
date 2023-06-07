
document.querySelector(".form__button").addEventListener('click', function () {
    // document.querySelector(".form__button").classList.remove('deactivate');
    document.querySelector(".form__button").classList.add('active');
    let ths = document.querySelector(".form__button");
    setTimeout(function () {
        ths.innerHTML = "✓"
    }, 700)
    setTimeout(function () {
        document.querySelector(".form__button").classList.remove('active');
        document.querySelector(".form__button").classList.add('active-btn');
    }, 1700)
    setTimeout(function () {
        // document.querySelector(".form__button").classList.remove('active');
        document.querySelector(".form__button").classList.add('deactivate');
        setTimeout(function () {
            ths.innerHTML = "Subscribe"
        }, 700)
    }, 5000)
    setTimeout(function () {
        document.querySelector(".form__button").classList.remove('deactivate');
        document.querySelector(".form__button").classList.remove('active-btn');
        
    }, 6200)

});

