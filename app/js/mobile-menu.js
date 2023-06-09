var Menu = {
  el: {
    menu: $('.menu-wrapper__button'),
    menuTop: $('.menu-top'),
    menuClose: $('.menu-close'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom'),
    menuText: $('.menu-text')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.menu
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-expand expand');
    Menu.el.menuMiddle.toggleClass('menu-middle-expand expand');
    Menu.el.menuBottom.toggleClass('menu-bottom-expand expand'); 
    Menu.el.menuText.toggleClass('menu-text-expand');
    Menu.el.menuClose.toggleClass('menu-close-visible');
  }
};
  
  //Stop menu item click closing the menu
  $(".menu .menu-global").click(function(e) {
      e.stopPropagation();
});

Menu.init();

window.onload = function () {
  let but1 = document.getElementsByClassName('menu-login-active')[0]; // Получаем элемент по классу
  let but2 = document.getElementsByClassName('menu-signin-active')[0];
  let but3 = document.getElementsByClassName('login__button')[0];  // Получаем элемент по классу

  but1.addEventListener('click', function () { // При нажатии первой кнопки
    but3.click(); // нажимаем вторую
  });
  but2.addEventListener('click', function () { // При нажатии первой кнопки
    but3.click(); // нажимаем вторую
  });
};